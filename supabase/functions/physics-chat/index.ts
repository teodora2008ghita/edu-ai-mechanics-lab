import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const systemPrompt = `Ești un asistent AI specializat în predarea fizicii (în special mecanică) pentru elevi. 
Răspunde întotdeauna în limba română, folosind un limbaj clar și accesibil.

REGULILE TALE:
- Explică conceptele pe înțelesul elevilor, fără termeni complicați
- Oferă exemple concrete și practice din viața reală
- Când este cazul, arată formule matematice și explică fiecare termen
- Încurajează elevii să gândească logic și să pună întrebări
- Fii pozitiv și motivant în răspunsuri
- Dacă ești întrebat despre alte subiecte decât fizica, reamintește-i elevului că te specializezi în fizică mecanică

SUBIECTELE PE CARE LE CUNOȘTI BINE:
- Legile lui Newton (I, II, III)
- Forță, masă, accelerație (F = m × a)
- Mișcarea rectilinie uniformă (MRU) și uniform variată (MRUV)
- Energia cinetică și potențială
- Conservarea energiei
- Frecare și forțe de contact
- Momentul și impulsul

FORMAT RĂSPUNSURI:
- Începe cu o explicație clară
- Dacă este relevant, oferă formula matematică
- Dă un exemplu concret
- Încheie cu o întrebare sau un punct de reflecție`;

    console.log('Sending request to AI with', messages.length, 'messages');

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI API error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ 
            error: 'Limita de rate a fost depășită. Te rog încearcă din nou mai târziu.' 
          }),
          { 
            status: 429, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ 
            error: 'Este necesară plata. Te rog contactează administratorul.' 
          }),
          { 
            status: 402, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }

      throw new Error(`AI API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('AI response received successfully');

    return new Response(
      JSON.stringify({ 
        message: data.choices[0].message.content 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error in physics-chat function:', error);
    const errorMessage = error instanceof Error ? error.message : 'A apărut o eroare internă';
    return new Response(
      JSON.stringify({ 
        error: errorMessage
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
