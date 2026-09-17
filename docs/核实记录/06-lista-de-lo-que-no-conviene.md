# Registro de verificación de fuentes de la sección 6

Método de verificación: doi.org siempre devolvió una redirección 302; las páginas de las editoriales JAMA/NEJM/Elsevier/Wiley/ACP/RSNA/Nature devolvieron 403 a WebFetch y las páginas de PubMed solo devolvieron un aviso de cookies. Por eso, el texto de los resúmenes se verificó de manera uniforme mediante la interfaz oficial REST de Europe PMC (`<https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:<doi>&resultType=core&format=json>`), que devuelve la ficha bibliográfica y `abstractText` de la misma fuente que PubMed; en algunos casos se usó NCBI E-utilities efetch. Las siguientes «URL abiertas en la práctica» son las direcciones cuyo contenido WebFetch logró devolver durante la verificación. Todos los DOI se cotejaron en la ficha de Europe PMC con el título, los autores y el año correspondientes.

## Ítem 1: multivitamínicos

- Fuente A: Sesso HD et al. 2012 JAMA, DOI 10.1001/jama.2012.14805
  - URL abierta en la práctica: Europe PMC REST (consulta por DOI). El título coincide con «Multivitamins in the prevention of cardiovascular disease in men: the Physicians' Health Study II randomized controlled trial», 2012, JAMA. Confirmado.
  - Origen de las cifras citadas (resumen): «14,641 male US physicians», «median follow-up 11.2 years», «major cardiovascular events … HR, 1.01; 95% CI, 0.91-1.10; P = .91», «total mortality … HR, 0.94; 95% CI, 0.88-1.02; P = .13»
- Fuente B: USPSTF 2022 JAMA, DOI 10.1001/jama.2022.8970
  - URL abierta en la práctica: <https://jamanetwork.com/journals/jama/fullarticle/2793446> (destino de la redirección de doi.org; se pudo obtener directamente). El título coincide con «Vitamin, Mineral, and Multivitamin Supplementation to Prevent Cardiovascular Disease and Cancer: US Preventive Services Task Force Recommendation Statement», 2022, JAMA 327(23). Confirmado.
  - Origen de las cifras citadas: «Multivitamin trials reviewed: 9 RCTs involving 51,550 participants showed no association between multivitamin supplementation and all-cause mortality»; los multivitamínicos recibieron calificación I; el betacaroteno y la vitamina E recibieron calificación D («recommends against the use of beta carotene or vitamin E supplements for the prevention of cardiovascular disease or cancer»); para el betacaroteno: «Increased lung cancer risk (RR 1.18) in smokers/asbestos-exposed workers» (esta sección no cita directamente la cifra 1.18).
- Contrapunto de las notas: Gaziano JM et al. 2012 JAMA, DOI 10.1001/jama.2012.14641
  - URL abierta en la práctica: <https://pubmed.ncbi.nlm.nih.gov/?term=10.1001%2Fjama.2012.14641> (en esa ocasión PubMed devolvió correctamente el resumen). El título coincide con «Multivitamins in the prevention of cancer in men: the Physicians' Health Study II randomized controlled trial». Confirmado.
  - Origen de las cifras citadas: «hazard ratio [HR], 0.92; 95% CI, 0.86-0.998; P=.04», «HR, 0.88; 95% CI, 0.77-1.01; P=.07»

## Ítem 2: aceite de pescado

- Manson JE et al. 2019 NEJM, DOI 10.1056/NEJMoa1811403
  - URL abierta en la práctica: Europe PMC REST (consulta por DOI). El título coincide con «Marine n-3 Fatty Acids and Prevention of Cardiovascular Disease and Cancer», 2019, NEJM. Confirmado.
  - Origen de las cifras citadas: «25,871 participants», «1 g/day», «median follow-up of 5.3 years», «major cardiovascular events … hazard ratio, 0.92; 95% CI, 0.80 to 1.06; P=0.24», «Death from any cause … hazard ratio was 1.02 (95% CI, 0.90 to 1.15)»
- ASCEND Study Collaborative Group 2018 NEJM, DOI 10.1056/NEJMoa1804989
  - URL abierta en la práctica: Europe PMC REST. El título coincide con «Effects of n-3 Fatty Acid Supplements in Diabetes Mellitus», 2018, NEJM. Confirmado.
  - Origen de las cifras citadas: «15,480 patients with diabetes without atherosclerotic cardiovascular disease», «1-gram capsules daily», «Mean 7.4 years», «rate ratio, 0.97; 95% CI, 0.87 to 1.08; P=0.55», «All-cause mortality: rate ratio, 0.95; 95% CI, 0.86 to 1.05»
- Contrapunto: Bhatt DL et al. 2019 NEJM, DOI 10.1056/NEJMoa1812792
  - URL abierta en la práctica: <https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=30415628&rettype=abstract&retmode=text> (Europe PMC no tenía `abstractText` para este registro; se usó NCBI efetch). El título coincide con «Cardiovascular Risk Reduction with Icosapent Ethyl for Hypertriglyceridemia», REDUCE-IT Investigators, NEJM 2019 (PMID 30415628). Confirmado.
  - Origen de las cifras citadas: «hazard ratio was 0.75 (95% CI, 0.68–0.83; P<0.001)», «17.2% of the icosapent ethyl group versus 22.0% of the placebo group», «2 g of icosapent ethyl twice daily (total daily dose, 4 g)», «established cardiovascular disease or diabetes … statin therapy, fasting triglycerides of 135–499 mg/dL», «8,179 patients»

## Ítem 3: vitamina D

- Manson JE et al. 2019 NEJM, DOI 10.1056/NEJMoa1809944
  - URL abierta en la práctica: Europe PMC REST. El título coincide con «Vitamin D Supplements and Prevention of Cancer and Cardiovascular Disease», 2019, NEJM. Confirmado.
  - Origen de las cifras citadas: «2000 IU daily», «25,871», «Median 5.3 years», «Invasive cancer: hazard ratio, 0.96; 95% CI, 0.88 to 1.06; P=0.47», «Major cardiovascular events: hazard ratio, 0.97; 95% CI, 0.85 to 1.12; P=0.69», «Death from any cause: hazard ratio was 0.99 (95% CI, 0.87 to 1.12)»
- Neale RE et al. 2022 Lancet Diabetes Endocrinol, DOI 10.1016/S2213-8587(21)00345-4
  - URL abierta en la práctica: Europe PMC REST (la consulta por DOI no devolvió resultados; se buscó por TITLE:"D-Health Trial" AND AUTH:Neale y el registro devolvió en el campo DOI 10.1016/S2213-8587(21)00345-4, coincidente con el DOI citado). El título coincide con «The D-Health Trial: a randomised controlled trial of the effect of vitamin D on mortality», 2022. Confirmado.
  - Origen de las cifras citadas: «21 315 participants, including 10 662 to the vitamin D group and 10 653 to the placebo group», «60 000 IU per month for 5 years», «1100 deaths were recorded (placebo 538 [5·1%]; vitamin D 562 [5·3%])», «HR … 1.04 [95% CI 0·93 to 1·18]; p=0·47», «median follow-up 5·7 years», «Australians 60 years or older who were recruited across the country via the Commonwealth electoral roll» (confirmado palabra por palabra en la segunda consulta; por eso el texto dice «60 años o más» y no especifica un límite superior).

## Ítem 4: suplementos antioxidantes

- Bjelakovic G et al. 2012 Cochrane, DOI 10.1002/14651858.CD007176.pub2
  - URL abierta en la práctica: Europe PMC REST. El título coincide con «Antioxidant supplements for prevention of mortality in healthy participants and patients with various diseases», 2012, Cochrane Database Syst Rev. Confirmado.
  - Origen de las cifras citadas: «78 trials, 296,707 participants», «RR 1.02, 95% CI 0.98 to 1.05 (random-effects)», «Low risk of bias trials (56 trials, 244,056 participants): RR 1.04, 95% CI 1.01 to 1.07», «Beta-carotene: RR 1.05, 95% CI 1.01 to 1.09», «Vitamin E: RR 1.03, 95% CI 1.00 to 1.05»
- ATBC Study Group 1994 NEJM, DOI 10.1056/NEJM199404143301501
  - URL abierta en la práctica: Europe PMC REST. El título coincide con «The effect of vitamin E and beta carotene on the incidence of lung cancer and other cancers in male smokers», 1994, NEJM. Confirmado.
  - Origen de las cifras citadas: «29,133 male smokers», «20 mg per day», «change in incidence, 18 percent; 95 percent confidence interval, 3 to 36 percent», «8 percent higher (95 percent confidence interval, 1 to 16 percent)»
- Omenn GS et al. 1996 NEJM, DOI 10.1056/NEJM199605023341802
  - URL abierta en la práctica: Europe PMC REST. El título coincide con «Effects of a combination of beta carotene and vitamin A on lung cancer and cardiovascular disease», 1996, NEJM. Confirmado.
  - Origen de las cifras citadas: «18,314 smokers, former smokers, and asbestos-exposed workers», «relative risk of lung cancer of 1.28 (95 percent confidence interval, 1.04 to 1.57; P=0.02)», «relative risk of death from any cause was 1.17 (95 percent confidence interval, 1.03 to 1.33)»
- El grado D de USPSTF en las notas: misma fuente B del ítem 1, confirmado.

## Ítem 5: glucosamina/condroitina

- Clegg DO et al. 2006 NEJM, DOI 10.1056/NEJMoa052771
  - URL abierta en la práctica: Europe PMC REST. El título coincide con «Glucosamine, chondroitin sulfate, and the two in combination for painful knee osteoarthritis», 2006, NEJM. Confirmado.
  - Origen de las cifras citadas: «1,583 patients», «placebo (60.1%)», «Glucosamine: 3.9 percentage points higher (P=0.30)», «Chondroitin sulfate: 5.3 percentage points higher (P=0.17)», «Combined treatment: 6.5 percentage points higher (P=0.09)», «Celecoxib: 10.0 percentage points higher (P=0.008)», «moderate-to-severe pain at baseline … 79.2 percent vs. 54.3 percent, P=0.002»; una segunda consulta confirmó palabra por palabra «… or placebo for 24 weeks» y «Exploratory analyses suggest that the combination of glucosamine and chondroitin sulfate may be effective in the subgroup of patients with moderate-to-severe knee pain».

## Ítem 6: vitamina C

- Hemilä H, Chalker E 2013 Cochrane, DOI 10.1002/14651858.CD000980.pub4
  - URL abierta en la práctica: Europe PMC REST. El título coincide con «Vitamin C for preventing and treating the common cold», 2013. Confirmado.
  - Origen de las cifras citadas: «pooled RR was 0.97 (95% confidence interval (CI) 0.94 to 1.00)», «29 trial comparisons with 11,306 participants», «In adults, colds shortened by 8% (3% to 12%); in children by 14% (7% to 21%)», «No consistent effect of vitamin C was seen on the duration or severity of colds in the therapeutic trials». Las cifras de las personas sometidas a esfuerzo físico extremo de las notas proceden de la segunda consulta, que confirmó palabra por palabra: «Five trials involving a total of 598 marathon runners, skiers and soldiers on subarctic exercises yielded a pooled RR of 0.48 (95% CI 0.35 to 0.64)».

## Ítem 7: PET-CT de cuerpo entero / marcadores tumorales

- USPSTF 2018 JAMA, DOI 10.1001/jama.2017.21926
  - URL abierta en la práctica: <https://pubmed.ncbi.nlm.nih.gov/29450531/> (en esa ocasión devolvió el contenido correctamente). El título coincide con «Screening for Ovarian Cancer: US Preventive Services Task Force Recommendation Statement», 2018, JAMA, DOI 10.1001/jama.2017.21926. Confirmado. (Al principio se había anotado por error el DOI 10.1001/jama.2018.0938; WebSearch permitió encontrar el DOI correcto y verificarlo.)
  - URL abierta en la práctica: <https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/ovarian-cancer-screening>. Confirmado.
  - Origen de las cifras citadas (texto literal de la página oficial): «No difference was found in ovarian cancer mortality … with 0.34% in the screening group and 0.29% in the usual care group (relative risk, 1.18 [95% CI, 0.82 to 1.71])», «Surgery to investigate positive screening test results among women who ultimately did not have ovarian cancer occurred in 0.2% of participants in the UK Pilot CA-125 group, 0.97% … 3.25% of participants in the UKCTOCS ultrasound group, and 3.17% of participants in the PLCO CA-125 plus ultrasound group», «Up to 15% of these women had major surgical complications»
- Furtado CD et al. 2005 Radiology, DOI 10.1148/radiol.2372041741
  - URL abierta en la práctica: Europe PMC REST. El título coincide con «Whole-body CT screening: spectrum of findings and recommendations in 1192 patients», 2005, Radiology. Confirmado.
  - Origen de las cifras citadas: «1030 (86%) of 1192 subjects had at least one abnormal finding», «Four hundred forty-five (37%) patients received at least one recommendation for additional evaluation», «most findings were benign by description and required no further evaluation»

## Ítem 8: pulsera inteligente

- Jakicic JM et al. 2016 JAMA, DOI 10.1001/jama.2016.12858
  - URL abierta en la práctica: Europe PMC REST. El título coincide con «Effect of Wearable Technology Combined With a Lifestyle Intervention on Long-term Weight Loss: The IDEA Randomized Clinical Trial», 2016, JAMA. Confirmado.
  - Origen de las cifras citadas: «estimated mean weight loss, 3.5 kg [95% CI, 2.6-4.5] in the enhanced intervention group and 5.9 kg [95% CI, 5.0-6.8] in the standard intervention group; difference, 2.4 kg [95% CI, 1.0-3.7]; P = .002», «471 randomized participants»

## Ítem 9: alimentos orgánicos

- Smith-Spangler C et al. 2012 Ann Intern Med, DOI 10.7326/0003-4819-157-5-201209040-00007
  - URL abierta en la práctica: Europe PMC REST. El título coincide con «Are organic foods safer or healthier than conventional alternatives?: a systematic review», 2012, Annals of Internal Medicine. Confirmado.
  - Origen de las cifras citadas: «17 studies in humans and 223 studies of nutrient and contaminant levels in foods met inclusion criteria», «The published literature lacks strong evidence that organic foods are significantly more nutritious than conventional foods», «risk difference, 30%» (residuos de pesticidas), «Only 3 human studies examined clinical outcomes, finding no significant differences … for allergic outcomes or symptomatic infection». El resumen también incluye «antibiotic-resistant … risk difference, 33%», cifra que esta sección no cita. «Detectar un residuo no significa superar el límite» es una formulación propia: el texto del resumen habla de la diferencia en el riesgo de detectar residuos y no informa la proporción que supera el límite.

## Ítem 10: suplementos y alimentos funcionales

- Página de la conferencia de prensa de la Administración Estatal para la Regulación del Mercado de China
  - URL abierta en la práctica: <https://www.samr.gov.cn/tssps/sjdt/tpxw/art/2023/art_4b658b824b1b4b0ba57c09a56cc93aad.html>. El título de la página es «Conferencia de prensa especial sobre la Guía para el etiquetado de advertencias de los alimentos funcionales y las Medidas de gestión del catálogo de materias primas y del catálogo de funciones de los alimentos funcionales», conferencia del 20 de agosto de 2019, sitio oficial samr.gov.cn. Confirmado.
  - Origen de las frases citadas: «los alimentos funcionales no son medicamentos y no pueden reemplazar a los medicamentos para tratar enfermedades», «la superficie del área de advertencia no debe ser menor al 20% de la superficie en la que se encuentra», «complementar nutrientes de la dieta, mantener o mejorar el estado de salud del organismo o reducir factores de riesgo de enfermedad»
  - No confirmado: la página original del anuncio <https://gkml.samr.gov.cn/nsjg/tssps/201908/t20190820_306116.html> devolvió «Socket is closed» en 4 intentos consecutivos de WebFetch; la página republicada en gov.cn devolvió 404. Por eso, la fuente solo cita la página de la conferencia de prensa de samr.gov.cn que se pudo abrir correctamente.

## Ítem 11: probióticos

- Khalesi S et al. 2019 Eur J Clin Nutr, DOI 10.1038/s41430-018-0135-9
  - URL abierta en la práctica: Europe PMC REST. El título coincide con «A review of probiotic supplementation in healthy adults: helpful or hype?», 2019, European Journal of Clinical Nutrition. Confirmado.
  - Origen de las frases citadas: «45» estudios; «this review failed to support the ability of probiotics to cause persistent changes in gut microbiota, or improve lipid profile in healthy adults»; los cambios en la microbiota son «transient»; los indicadores con pequeñas mejoras fueron «stool consistency, bowel movement, and vaginal lactobacilli concentration»

## Ítem 12: ducha fría

- Buijze GA et al. 2016 PLOS ONE, DOI 10.1371/journal.pone.0161749
  - URL abierta en la práctica: <https://journals.plos.org/plosone/doi?id=10.1371/journal.pone.0161749>. El título coincide con «The Effect of Cold Showering on Health and Work: A Randomized Controlled Trial», 2016. Confirmado.
  - Origen de las cifras citadas: «3,018 individuals», «30, 60, or 90 seconds», «29% reduction … (IRR: 0.71, P = 0.003)», «For illness days there was no significant group effect», «no clinically relevant differences in quality of life, work productivity, anxiety»
- Cain T et al. 2025 PLOS ONE, DOI 10.1371/journal.pone.0317615
  - URL abierta en la práctica: <https://journals.plos.org/plosone/doi?id=10.1371/journal.pone.0317615>. El título coincide con «Effects of cold-water immersion on health and wellbeing: A systematic review and meta-analysis», 2025. Confirmado.
  - Origen de las frases citadas: «Eleven randomized controlled trials encompassing 3,177 total participants», «significant increases in inflammation immediately…and 1 hour post CWI», «no meaningful immediate or delayed immune changes», «a significant reduction in stress…12 hours post-CWI», «current evidence base is constrained by few RCTs, small sample sizes»

## Ítem 13: detox/alcalinidad

- Klein AV, Kiat H 2015 J Hum Nutr Diet, DOI 10.1111/jhn.12286
  - URL abierta en la práctica: Europe PMC REST. El título coincide con «Detox diets for toxin elimination and weight management: a critical review of the evidence», 2015. Confirmado.
  - Origen de las frases citadas: «Although the detox industry is booming, there is very little clinical evidence to support the use of these diets», «no randomised controlled trials have been conducted to assess the effectiveness of commercial detox diets in humans»
- Fenton TR, Huang T 2016 BMJ Open, DOI 10.1136/bmjopen-2015-010438
  - URL abierta en la práctica: Europe PMC REST (consulta por DOI). El título coincide con «Systematic review of the association between dietary acid load, alkaline water and cancer», 2016, BMJ Open. Confirmado. (Al principio se había anotado por error el DOI 10.1136/bmjopen-2016-010438; doi.org devolvió 404 y WebSearch junto con Europe PMC dieron 2015-010438, que es el DOI corregido.)
  - Origen de las frases citadas: «8278 citations were identified, and 252 abstracts were reviewed; 1 study met the inclusion criteria», «no association between the diet acid load with bladder cancer (OR=1.15: 95% CI 0.86 to 1.55, p=0.36)», «Promotion of alkaline diet and alkaline water to the public for cancer prevention or treatment is not justified»

## Ítem 14: 8 vasos de agua por día

- Valtin H 2002 Am J Physiol Regul Integr Comp Physiol, DOI 10.1152/ajpregu.00365.2002
  - URL abierta en la práctica: Europe PMC REST (journals.physiology.org devolvió 403). El título coincide con «"Drink at least eight glasses of water a day." Really? Is there scientific evidence for "8 x 8"?», Heinz Valtin, 2002. Confirmado.
  - Origen de la frase citada: «No scientific studies were found in support of 8 x 8. Rather, surveys of food and fluid intake on thousands of adults…strongly suggest that such large amounts are not needed»

## Candidatos considerados pero no incluidos

- Colágeno oral: los metaanálisis disponibles suelen tener muestras pequeñas y financiación de fabricantes, con una orientación positiva; no cumple el criterio de esta sección, que exige que la evidencia muestre ineficacia, por lo que no se incluyó.
- Purificadores de aire/agua: no se verificaron y tampoco se encontraron pruebas sólidas sobre desenlaces importantes; no se incluyeron.
- Levantarse temprano por sí solo: es difícil separarlo de la regularidad del sueño y no se encontró evidencia comparativa directa; no se incluyó.
- Multitarea/técnica Pomodoro: no hay evidencia directa; según lo solicitado, no se incluyó.
