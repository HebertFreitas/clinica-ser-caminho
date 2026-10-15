# Hero — referência e geração

## Imagem fornecida pelo usuário — versão em uso

Arquivo: `src/assets/hero-foto-enviada.png`, salvo diretamente do anexo fornecido pelo usuário, sem geração ou retoques. Enquadramento e transição do topo do fundo feitos em CSS, preservando a pessoa e o cenário da fotografia.

## Fotografia integrada — versão atual

Arquivo em uso: `src/assets/hero-psicologia-integrado.jpg`. ImageGen nativa, fundo opaco integrado à fotografia, sem camada de recorte ou gradientes coloridos. JPEG exportado em qualidade 95.

Prompt:

Edit this website hero portrait into ONE seamless high-resolution studio photograph, not a cutout. Preserve the exact woman's identity, smile, black curly hair, white outfit, seated crossed-leg pose, bare hands on lap, cream armchair and central lower placement. Replace the transparent background with a clean seamless warm ivory studio wall (#f8f3ea), softly and EVENLY lit. Integrate hair, clothing and chair edges naturally into the photographed environment: no white fringe, no halo, no jagged edges, no visible masking, no pasted-on appearance. Restore natural realistic facial skin with even tone and fine subtle texture; remove blotchy patches, waxy highlights, exaggerated sharpening and plastic/painted skin. Keep her recognizable facial proportions and warm smile. Real portrait photography with a large softbox, consistent neutral warm light and very soft realistic contact shadows near the chair only. Background must be calm nearly uniform ivory, WITHOUT mottling, colorful gradients, patches, leaf shadows, haze, noise or vignette. Maintain the landscape 1678x937 composition and generous empty upper third for webpage typography. Render at high resolution with clean detailed face and hair. No instrument, no gloves, no extra objects, no text. Fully opaque integrated photograph.

## Atualização para psicologia

Arquivo em uso: `src/assets/hero-psicologia.png`. Edição via ImageGen nativa; fundo composto em CSS com as variáveis de cores da página.

Prompt:

Use case: precise-object-edit. Edit this transparent website hero portrait for a PSYCHOLOGY practice. Remove the syringe/instrument completely, remove both black medical gloves, and lower the raised forearm so both bare hands rest naturally together on her crossed knee/lap in a relaxed welcoming seated pose. Anatomically correct natural hands with skin matching her face. Keep this exact woman's identity, face, smile, long black curly hairstyle, white clothing, cream armchair, crossed legs, lighting, camera angle, subject scale and position unchanged. Keep the same 1678 x 937 landscape canvas with large empty transparent area above and beside the centrally seated woman. Actual transparent background, clean natural hair edges. No medical equipment, no gloves, no added objects, no text or watermark. Preserve every other part of the image.

## Geração anterior

Ferramenta: ImageGen nativa, sem CLI.

Arquivos finais: `src/assets/hero-marcella.jpg` e `src/assets/hero-marcella-recorte.png`.

## Prompt da fotografia

Use case: identity-preserve. Edit the existing landscape website hero photograph. Input images: the user-attached outdoor portrait of a smiling woman with long black curly hair wearing a cream dress is the IDENTITY REFERENCE; the landscape studio photograph of a seated aesthetic practitioner holding a syringe upright is the EDIT TARGET and POSE/COMPOSITION REFERENCE. Replace only the woman in the studio hero with the woman from the user's outdoor photograph. Preserve her recognizable facial features, medium brown skin, natural black curly hair, and warm smile from the identity reference. Keep EXACTLY the target pose: seated centrally in the same cream chair, legs crossed, white long-sleeved professional outfit, black gloves, right hand raised beside face holding the same instrument, other hand resting on lap. Maintain the same camera angle, subject scale and placement, beige studio backdrop with soft leaf shadows, warm soft light, and large empty upper area for webpage text. Landscape aspect ratio 2752:1536. Photorealistic, natural skin texture, no text, no watermark. Do not use the outdoor background, cream dress, cup or standing pose of the identity reference. The final image is for the existing website hero and must closely match the original scene geometry.

## Prompt do recorte transparente

Use case: background-extraction. Remove ONLY the beige studio wall background from this exact image, leaving a transparent background. Keep the entire woman, her curly hair including fine curls, syringe, black gloves, white outfit, legs and entire cream armchair intact. Preserve the original image canvas dimensions 1678 x 937, position, scale, framing, pose, every facial feature and all foreground pixels exactly. No reimagining or restyling, no repositioning or cropping. The subject and armchair remain in the lower central area with all original empty space transparent. Output a precise alpha cutout of the subject and armchair for layering over the identical original photograph on a website.
