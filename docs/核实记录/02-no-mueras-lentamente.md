# Registro de verificación de fuentes de la sección 2

Método de verificación: todas las fuentes se abrieron mediante WebFetch en los registros REST de Europe PMC (`<https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:<doi>&resultType=core&format=json>`; en algunos casos se usaron consultas `TITLE:` o `EXT_ID:<pmid> AND SRC:MED`). Los registros contienen título, autores, revista, año, DOI, PMID y el resumen completo; las cifras citadas aparecen en los resúmenes. La versión web de PubMed devolvió una página de bloqueo por cookies a WebFetch; doi.org devolvió 302 y la página de la editorial (NEJM) devolvió 403, así que se tomó como referencia el registro de Europe PMC. Los DOI se escriben siempre según el registro de Europe PMC (en el artículo de frutos secos de Aune 2016, el DOI real es `10.1186/s12916-016-0730-3`; mi recuerdo original de `-0730-5` era incorrecto y ese artículo finalmente no se incluyó en el texto principal).

## Punto 1: dejar de fumar
- <https://doi.org/10.1056/NEJMsa1211128> — confirmado: Jha P et al., NEJM 2013, PMID 23343063. Texto original del resumen: "Life expectancy was shortened by more than 10 years among the current smokers"; "Adults who had quit smoking at 25 to 34, 35 to 44, or 45 to 54 years of age gained about 10, 9, and 6 years of life, respectively"; "Cessation before the age of 40 years reduces the risk of death associated with continued smoking by about 90%."
- <https://doi.org/10.1016/S0140-6736(15)00340-2> — confirmado: Chen Z et al., Lancet 2015, PMID 26466050. Texto original del resumen: hombres urbanos "RR 1·32 [95% CI 1·24-1·41] vs 1·65 [1·53-1·79]" (1990s frente a 2010s), hombres rurales "RR 1·13 [1·09-1·17] vs 1·22 [1·16-1·29]"; "Ex-smokers who had stopped by choice…had little smoking-attributed risk more than 10 years after stopping."
- <https://doi.org/10.1016/S0140-6736(10)61388-8> — confirmado: Oberg M et al., Lancet 2011, PMID 21112082. Texto original del resumen: "603,000 deaths were attributable to second-hand smoke in 2004, which was about 1·0% of worldwide mortality."

## Punto 2: bebidas azucaradas
- <https://doi.org/10.1161/CIRCULATIONAHA.118.037401> — confirmado: Malik VS et al., Circulation 2019, PMID 30882235. Texto original del resumen: las categorías "(<1/mo, 1-4/mo, 2-6/week, 1-<2/d, and ≥2/d) were 1.00 (reference), 1.01 (0.98, 1.04), 1.06 (1.03, 1.09), 1.14 (1.09, 1.19), and 1.21 (1.13, 1.28)"; 37 716 hombres y 80 647 mujeres, "36 436 deaths". El resumen no da el HR por porción/día; el texto principal no lo cita.
- <https://doi.org/10.1001/jamainternmed.2019.2478> — confirmado: Mullee A et al., JAMA Intern Med 2019. Texto original del resumen: bebidas gaseosas totales "HR, 1.17; 95% CI, 1.11-1.22"; bebidas azucaradas "HR, 1.08; 95% CI, 1.01-1.16"; bebidas con edulcorantes artificiales "HR, 1.26; 95% CI, 1.16-1.35"; 451,743 participantes.

## Punto 3: sal baja en sodio
- <https://doi.org/10.1056/NEJMoa2105675> — confirmado: Neal B et al., NEJM 2021, PMID 34459569. Texto original del resumen: 20,995 participantes, seguimiento medio de 4.74 años; ACV, "rate ratio, 0.86"; eventos cardiovasculares mayores, "rate ratio, 0.87"; muerte, "39.28 events vs. 44.61 events per 1000 person-years; rate ratio, 0.88"; tasa de hiperpotasemia 1.04, sin diferencia significativa.
- <https://doi.org/10.1056/NEJMoa1311889> — confirmado: O'Donnell M et al., NEJM 2014, PMID 25119607. Texto original del resumen: "≥ 7.00 g per day…odds ratio, 1.15; 95% CI, 1.02 to 1.30"; "below 3.00 g per day…odds ratio, 1.27; 95% CI, 1.12 to 1.44".

## Punto 4: pasos
- <https://doi.org/10.1016/S2468-2667(21)00302-9> — confirmado: Paluch AE et al., Lancet Public Health 2022, PMID 35247352. Texto original del resumen: "47 471 adults, among whom there were 3013 deaths"; "Quartile median steps per day were 3553 for quartile 1, 5801 for quartile 2, 7842 for quartile 3, and 10 901 for quartile 4"; "adjusted HR for all-cause mortality was 0·60 (95% CI 0·51-0·71) for quartile 2, 0·55 (0·49-0·62) for quartile 3, and 0·47 (0·39-0·57) for quartile 4"; en ≥60 años, "6000-8000 steps per day", y en <60 años, "8000-10 000 steps per day".
- <https://doi.org/10.1093/eurjpc/zwad229> — confirmado: Banach M et al., Eur J Prev Cardiol 2023, PMID 37555441. Texto original del resumen: "A 1000-step increment was associated with a 15% decreased risk of all-cause mortality"; "the cut-off point of 3867 steps/day for all-cause mortality".

## Punto 5: adherencia a los medicamentos para la presión y los lípidos
- <https://doi.org/10.1016/S0140-6736(15)01225-8> — confirmado: Ettehad D et al., Lancet 2016, PMID 26724178. Texto original del resumen: eventos cardiovasculares mayores, "RR 0·80, 95% CI 0·77-0·83"; ACV, "0·73, 0·68-0·77"; insuficiencia cardíaca, "0·72, 0·67-0·78"; "13% reduction in all-cause mortality (0·87, 0·84-0·91)".
- <https://doi.org/10.1016/S0140-6736(10)61350-5> — confirmado: CTT Collaboration, Lancet 2010, PMID 21067804. Texto original del resumen: eventos vasculares mayores, "rate ratio [RR] 0·78, 95% CI 0·76–0·80"; "all-cause mortality was reduced by 10% per 1·0 mmol/L LDL reduction (RR 0·90, 95% CI 0·87–0·93)".
- <https://doi.org/10.1093/eurheartj/eht295> — confirmado: Chowdhury R et al., Eur Heart J 2013, PMID 23907142. Texto original del resumen: "Corresponding RRs of all-cause mortality were 0.55 (0.46-0.67) and 0.71 (0.64-0.78) for good adherence to statins and antihypertensive agents"; adherencia buena frente a mala (<80%).

## Punto 6: sueño
- <https://doi.org/10.1093/sleep/33.5.585> — confirmado: Cappuccio FP et al., Sleep 2010, PMID 20469800. Texto original del resumen: "16 studies…1,382,999 male and female participants…112,566 deaths"; sueño corto, "RR: 1.12; 95% CI 1.06 to 1.18"; sueño largo, "1.30; [1.22 to 1.38]". El resumen no da la definición en horas de corto/largo; el texto principal no escribe un umbral concreto.
- <https://doi.org/10.1161/JAHA.117.005947> — confirmado: Yin J et al., JAHA 2017, PMID 28889101. Texto original del resumen: <7 h, "RR was 1.06 (95% CI, 1.04-1.07) per 1-hour reduction"; >7 h, "RR was 1.13 (95% CI, 1.11-1.15) per 1-hour increment".
- <https://doi.org/10.1093/sleep/zsad253> — confirmado: Windred DP et al., Sleep 2024, PMID 37738616. Texto original del resumen: "60 977 UK Biobank participants"; "1859" muertes; "Higher sleep regularity was associated with a 20%-48% lower risk of all-cause mortality" (los cuatro quintiles de SRI más altos frente al quintil menos regular); "Sleep regularity was a stronger predictor of all-cause mortality than sleep duration".

## Punto 7: ejercicio de intensidad moderada
- <https://doi.org/10.1001/jamainternmed.2015.0533> — confirmado: Arem H et al., JAMA Intern Med 2015, PMID 25844730. Texto original del resumen: menos de 7.5 MET-h/week, "HR, 0.80 [95% CI, 0.78-0.82]"; 1 a 2 veces, "HR, 0.69 [95% CI, 0.67-0.70]"; 2 a 3 veces, "HR, 0.63"; 3 a 5 veces, "HR, 0.61 [95% CI, 0.59-0.62]"; 10 o más veces, "HR, 0.69 [95% CI, 0.59-0.78]".
- <https://doi.org/10.1136/bmj.l4570> — confirmado: Ekelund U et al., BMJ 2019, PMID 31434697. Texto original del resumen: cuartiles de MVPA, HR "1.00, 0.64 (0.55–0.74), 0.55 (0.40–0.74), and 0.52 (0.43–0.61)"; cuartil más alto de actividad física total, "0.27 (0.23 to 0.32)".

## Punto 8: entrenamiento de fuerza
- <https://doi.org/10.1136/bjsports-2021-105061> — confirmado: Momma H et al., Br J Sports Med 2022, PMID 35228201. Texto original del resumen: "Muscle-strengthening activities were associated with a 10-17% lower risk of all-cause mortality"; "J-shaped associations with the maximum risk reduction (approximately 10-20%) at approximately 30-60 min/week"; "Combined muscle-strengthening and aerobic activities (versus none) were associated with a lower risk of all-cause…mortality".

## Punto 9: sedentarismo
- <https://doi.org/10.7326/M17-0212> — confirmado: Diaz KM et al., Ann Intern Med 2017, PMID 28892811. Texto original del resumen: tiempo sedentario total, cuartil más alto frente al más bajo, "HR, 2.63 [CI, 1.60 to 4.30]"; duración de los períodos, "HR, 1.96 [CI, 1.31 to 2.93]"; conclusión: "both the total volume of sedentary time and its accrual in prolonged, uninterrupted bouts are associated with all-cause mortality". El resumen no menciona el umbral de 30 minutos; el título principal no da un número concreto de minutos.
- <https://doi.org/10.1016/S0140-6736(16)30370-1> — confirmado: Ekelund U et al., Lancet 2016, PMID 27475271. Texto original del resumen: referencia, "those sitting <4 h/day and in the most active quartile [>35·5 MET-h per week]"; cuartil de menor actividad y >8 h/día sentado, "HR=1·59, 1·52-1·66"; grupo más activo y >8 h, "HR=1·04; 95% CI 0·99-1·10"; "about 60-75 min per day…seem to eliminate the increased risk of death associated with high sitting time"; televisión ≥5 h en el grupo más activo, "HR=1·16, 1·05-1·28".

## Punto 10: carne procesada
- <https://doi.org/10.1093/aje/kwt261> — confirmado: Larsson SC, Orsini N, Am J Epidemiol 2014, PMID 24148709. Texto original del resumen (máximo frente a mínimo): carne roja sin procesar, "1.10 (95% CI: 0.98, 1.22)"; carne procesada, "1.23 (95% CI: 1.17, 1.28)"; carne roja total, "1.29 (95% CI: 1.24, 1.35)".
- <https://doi.org/10.3945/ajcn.117.153148> — confirmado: Schwingshackl L et al., Am J Clin Nutr 2017, PMID 28446499. Texto original del resumen (por porción/día): cereales integrales, "RR: 0.92; 95% CI: 0.89, 0.95"; carne roja, "RR: 1.10; 95% CI: 1.04, 1.18"; carne procesada, "RR: 1.23; 95% CI: 1.12, 1.36".
- <https://doi.org/10.7326/M19-1621> — confirmado: Johnston BC et al., Ann Intern Med 2019, PMID 31569235. Texto original del resumen: "continue current unprocessed red meat consumption (weak recommendation, low-certainty evidence)"; "continue current processed meat consumption (weak recommendation, low-certainty evidence)".

## Punto 11: alcohol
- <https://doi.org/10.1016/S0140-6736(18)30134-X> — confirmado: Wood AM et al., Lancet 2018, PMID 29676281. Texto original del resumen: "the minimum mortality risk around or below 100 g per week"; expectativa de vida a los 40 años: >100–≤200 g/week, "approximately 6 months"; >200–≤350 g/week, "1–2 years"; >350 g/week, "4–5 years".
- <https://doi.org/10.1016/S0140-6736(18)31310-2> — confirmado: GBD 2016 Alcohol Collaborators, Lancet 2018. Texto original del resumen: "The level of alcohol consumption that minimised harm across health outcomes was zero (95% UI 0·0-0·8) standard drinks per week."
- <https://doi.org/10.1001/jamanetworkopen.2023.6185> — confirmado: Zhao J et al., JAMA Netw Open 2023, PMID 37000449. Texto original del resumen: "low-volume drinkers (1.3-24.0 g per day; RR, 0.93; P = .07) compared with lifetime nondrinkers"; "45 to 64 and 65 or more grams per day (RR, 1.19 and 1.35; P < .001)".
- <https://doi.org/10.1001/archinte.166.22.2437> — confirmado: Di Castelnuovo A et al., Arch Intern Med 2006, PMID 17159008. Texto original del resumen: "maximum protection being 18% in women (99% confidence interval, 13%-22%) and 17% in men"; "up to 4 drinks per day in men and 2 drinks per day in women, was inversely associated with total mortality".

## Punto 12: cereales integrales
- <https://doi.org/10.1136/bmj.i2716> — confirmado: Aune D et al., BMJ 2016, PMID 27301975. Texto original del resumen: por 90 g/día, "0.83 (0.77 to 0.90; I(2)=83%, n=11) for all causes"; "Reductions in risk were observed up to an intake of 210-225 g/day".
- Schwingshackl 2017, igual que en el punto 10 (cereales integrales, RR 0.92).

## Punto 13: frutas y verduras
- <https://doi.org/10.1093/ije/dyw319> — confirmado: Aune D et al., Int J Epidemiol 2017, PMID 28338764. Texto original del resumen: "the summary RR per 200 g/day was…0.90 (95% CI: 0.87-0.93…for all-cause mortality"; "Reductions in risk were observed up to 800 g/day for all outcomes except cancer (600 g/day)".
- <https://doi.org/10.1161/CIRCULATIONAHA.120.048996> — confirmado: Wang DD et al., Circulation 2021, PMID 33641343. Texto original del resumen: "daily intake of 5 servings of fruit and vegetables was associated with hazard ratios (95% CI) of 0.87 (0.85-0.90) for total mortality" (frente a 2 porciones por día); "≈5 servings per day of fruit and vegetables, or 2 servings of fruit and 3 servings of vegetables, was associated with the lowest mortality".

## Punto 14: alimentos ultraprocesados
- <https://doi.org/10.1136/bmj-2023-077310> — confirmado: Lane MM et al., BMJ 2024, PMID 38418082. Texto original del resumen: "all cause mortality (risk ratio 1.21, 1.15 to 1.27; low)" class II highly suggestive; "cardiovascular disease related mortality (risk ratio 1.50, 95% confidence interval 1.37 to 1.63; GRADE=very low)" class I convincing.

## Punto 15: combustión en interiores / PM2.5
- <https://doi.org/10.1001/jama.2018.2151> — confirmado: Yu K et al., JAMA 2018, PMID 29614179. Texto original del resumen: 271,217 adultos; combustible sólido para cocinar y mortalidad total, "HR, 1.11 [95% CI, 1.03-1.20]"; calefacción, "HR, 1.14 [95% CI, 1.03-1.26]"; cambio (cocina), "HR, 0.87 [95% CI, 0.79-0.95]"; cambio (calefacción), "HR, 0.67 [95% CI, 0.57-0.79]".
- <https://doi.org/10.1016/j.envint.2020.105974> — confirmado: Chen J, Hoek G, Environ Int 2020, PMID 32703584. Texto original del resumen: "The combined Risk Ratio (RR) for PM₂.₅ and natural-cause mortality was 1.08 (95%CI 1.06, 1.09) per 10 µg/m³", en 104 estudios de cohorte.

## Punto 16: peso corporal
- <https://doi.org/10.1016/S0140-6736(16)30175-1> — confirmado: Global BMI Mortality Collaboration, Lancet 2016, PMID 27423262. Texto original del resumen: "All-cause mortality was minimal at 20·0-25·0 kg/m(2)"; 25.0-27.5, "1·07, 1·07-1·08"; 27.5-30.0, "1·20, 1·18-1·22"; 30.0-35.0, "1·45, 95% CI 1·41-1·48"; 35.0-40.0, "1·94, 1·87-2·01"; 40.0-60.0, "2·76, 2·60-2·92"; Asia Oriental por 5 kg/m², "1·39 (1·34-1·44)"; análisis limitado a "never-smokers without chronic diseases at recruitment who survived 5 years".
- <https://doi.org/10.1001/jama.2012.113905> — confirmado: Flegal KM et al., JAMA 2013, PMID 23280227. Texto original del resumen: "The summary HRs were 0.94 (95% CI, 0.91-0.96) for overweight, 1.18 (95% CI, 1.12-1.25) for obesity (all grades combined), 0.95 (95% CI, 0.88-1.01) for grade 1 obesity, and 1.29 (95% CI, 1.18-1.41) for grades 2 and 3 obesity."

## Verificados, pero no incluidos en el texto principal
- Aune D et al. (2016), frutos secos, BMC Medicine, <https://doi.org/10.1186/s12916-016-0730-3>, PMID 27916000: por 28 g/día, mortalidad por todas las causas, "0.78 (95% CI: 0.72-0.84)". El efecto podría estar inflado por confusión y comer frutos secos todos los días cuesta plata; para mantener el límite de elementos (16 como máximo), no se incluyó.
- Sofi F et al. (2010), dieta mediterránea, Am J Clin Nutr, <https://doi.org/10.3945/ajcn.2010.29673>, PMID 20810976: aumento de 2 puntos, "RR = 0.92; 95% CI: 0.90, 0.94". Se superpone con los puntos 10, 12 y 13, por eso no se incluyó.
- Holt-Lunstad J et al. (2010) PLoS Med, <https://doi.org/10.1371/journal.pmed.1000316>, PMID 20668659: "OR = 1.50 (95% CI 1.42 to 1.59)"; Holt-Lunstad J et al. (2015) Perspect Psychol Sci, <https://doi.org/10.1177/1745691614568352>, PMID 25910392: "social isolation odds ratio (OR) = 1.29, loneliness OR = 1.26, and living alone OR = 1.32". El efecto del aislamiento social es grande, pero la causalidad inversa es fuerte y no hay evidencia de intervención; para mantener el límite de elementos no se incluyó. Si hace falta, se puede agregar directamente como punto 17.

## Elementos no confirmados
- Ninguno. Todas las cifras del texto principal provienen de los registros abiertos mencionados arriba. Los campos de «Costo» del texto (precios y tiempo) son estimaciones del autor y no citan bibliografía.
