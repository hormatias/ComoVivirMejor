# Registro de verificación de la sección 3

Nota: la gran mayoría de las páginas de las editoriales (APA psycnet, Elsevier, SAGE, PNAS, Springer y PubMed) devuelve 403, CAPTCHA o solo un aviso de cookies al WebFetch de esta máquina. Por eso, el camino de verificación fue: primero usar <https://doi.org/>... para confirmar que el DOI existe y observar el destino de la redirección (editorial y revista); después usar las API REST de Europe PMC, Crossref y OpenAlex, páginas de texto completo de PMC o PDF oficiales de autores o universidades para obtener el título, los autores, el año y el texto original del resumen. Cada punto enumera la URL que se abrió realmente y la ubicación del texto original de las cifras citadas.

## Punto 1

- <https://doi.org/10.1037/xhp0000100> → redirige con 302 a doi.apa.org; el DOI existe; la página de psycnet devuelve 403
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1037/xhp0000100&format=json&resultType=core> → confirmado: Stothart C, Mitchum A, Yehnert C (2015) The attentional cost of receiving a cell phone notification. J Exp Psychol Hum Percept Perform
  - Texto original del resumen: "cellular phone notifications alone significantly disrupted performance on an attention-demanding task, even when participants did not directly interact with a mobile device during the task. The magnitude of observed distraction effects was comparable in magnitude to those seen when users actively used a mobile phone, either for voice calls or text messaging."
- <https://doi.org/10.1086/691462> → redirige con 302 a journals.uchicago.edu; el DOI existe; la página de la editorial devuelve 403
- <https://api.crossref.org/works/10.1086/691462> → confirmado: Ward AF, Duke K, Gneezy A, Bos MW (2017) Brain Drain: The Mere Presence of One's Own Smartphone Reduces Available Cognitive Capacity. J Assoc Consum Res 2(2):140-154
- <https://api.openalex.org/works/doi:10.1086/691462> → texto original del resumen: "Results from two experiments indicate that even when people are successful at maintaining sustained attention—as when avoiding the temptation to check their phones—the mere presence of these devices reduces available cognitive capacity. Moreover, these costs are highest for those in smartphone dependence."
  - Las tres condiciones «sobre la mesa / en el bolsillo / en otra habitación» y los dos indicadores de «memoria de trabajo e inteligencia fluida» provienen de mi recuerdo de ese artículo; el resumen solo dice two experiments y available cognitive capacity, y esos dos detalles **no se confirmaron literalmente en el texto original** (no se pudo abrir el cuerpo del artículo), por lo que se eliminaron del punto y solo se conservó lo respaldado por el texto del resumen

## Punto 2

- <https://doi.org/10.1038/s41598-017-03171-4> → redirige con 302 a nature.com; el DOI existe; Nature requiere autorización para la redirección
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1038/s41598-017-03171-4&format=json&resultType=core> → confirmado: Phillips AJK, Clerx WM, O'Brien CS, Sano A, Barger LK, Picard RW, Lockley SW, Klerman EB, Czeisler CA (2017) Irregular sleep/wake patterns are associated with poorer academic performance and delayed circadian and sleep/wake timing. Sci Rep
  - Texto original del resumen: "We studied 61 undergraduates for 30 days ... DLMO occurred later (00:08 ± 1:54 vs. 21:32 ± 1:48; p < 0.003); the daily sleep propensity rhythm peaked later (06:33 ± 0:19 vs. 04:45 ± 0:11; p < 0.005) ... A positive correlation (r = 0.37; p < 0.004) between academic performance and SRI was observed ... Irregular vs. Regular group differences in circadian timing were likely primarily due to their different patterns of light exposure."
  - «aproximadamente 2.5 horas» y «aproximadamente 1.8 horas» son valores aproximados que calculé a partir de las diferencias entre esos horarios

## Punto 3

- <https://doi.org/10.1093/sleep/26.2.117> → redirige con 302 a academic.oup.com y después se pudo abrir <https://academic.oup.com/sleep/article-lookup/doi/10.1093/sleep/26.2.117>
  - Confirmado: Van Dongen HPA, Maislin G, Mullington JM, Dinges DF (2003) The Cumulative Cost of Additional Wakefulness: Dose-Response Effects on Neurobehavioral Functions and Sleep Physiology From Chronic Sleep Restriction and Total Sleep Deprivation. Sleep 26(2):117-126
  - Texto original del resumen (idéntico en la página de OUP y en Europe PMC): "A total of n = 48 healthy adults (ages 21-38)"; "Chronic restriction of sleep periods to 4 h or 6 h per night over 14 consecutive days resulted in significant cumulative, dose-dependent deficits in cognitive performance on all tasks"; "chronic restriction of sleep to 6 h or less per night produced cognitive performance deficits equivalent to up to 2 nights of total sleep deprivation"; "Subjective sleepiness ratings showed an acute response to sleep restriction but only small further increases on subsequent days, and did not significantly differentiate the 6 h and 4 h conditions."
- <https://doi.org/10.1037/a0018883> → redirige con 302 a doi.apa.org; el DOI existe
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1037/a0018883&format=json&resultType=core> → confirmado: Lim J, Dinges DF (2010) A meta-analysis of the impact of short-term sleep deprivation on cognitive variables. Psychol Bull
  - Texto original del resumen: "short-term (<48 hr) total sleep deprivation"; "70 articles containing 147 cognitive tests"; "lapses in simple attention: g = -0.776, 95% CI [-0.96, -0.60], p < .001"; "reasoning accuracy: g = -0.125, 95% CI [-0.27, 0.02]"

## Punto 4

- <https://doi.org/10.5664/jcsm.3170> → redirige con 302; el DOI existe; jcsm.aasm.org tiene un error de certificado y Springer requiere autorización
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.5664/jcsm.3170&format=json&resultType=core> → confirmado: Drake C, Roehrs T, Shambroom J, Roth T (2013) Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. J Clin Sleep Med；PMID 24235903，PMCID PMC3805807
- <https://pmc.ncbi.nlm.nih.gov/articles/PMC3805807/> → texto completo abierto correctamente
  - Texto original del cuerpo: "For TST, reductions in duration relative to placebo were significant at each of the caffeine administration time points, reducing TST between 1.1 to 1.2 hours."; "Caffeine administered 6 h prior to bedtime reduced total sleep time by 41 min, which approached significance (p = 0.08)." (diario); "only the objective measure detected differences when caffeine was taken 6 hours prior to bedtime"
- <https://doi.org/10.1016/j.smrv.2023.101764> → redirige con 302 a linkinghub.elsevier.com; el DOI existe
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1016/j.smrv.2023.101764&format=json&resultType=core> → confirmado: Gardiner C, Weakley J, Burke LM, Roach GD, Sargent C, Maniar N, Townshend A, Halson SL (2023) The effect of caffeine on subsequent sleep: A systematic review and meta-analysis. Sleep Med Rev
  - Texto original del resumen: "Caffeine consumption reduced total sleep time by 45 min and sleep efficiency by 7%"; "coffee (107 mg per 250 mL) should be consumed at least 8.8 h prior to bedtime"

## Punto 5

- <https://doi.org/10.1016/j.chb.2014.11.005> → redirige con 302 a linkinghub.elsevier.com; el DOI existe; ScienceDirect devuelve 403
- <https://api.crossref.org/works/10.1016/j.chb.2014.11.005> → confirmado: Kushlev K, Dunn EW (2015) Checking email less frequently reduces stress. Comput Hum Behav 43:220-228
- <https://dunn.psych.ubc.ca/wp-content/uploads/2010/11/kushlev-dunn-email-and-stress-in-press1.pdf> (PDF de la versión aceptada en el sitio oficial del laboratorio del autor; texto extraído localmente con pdftotext)
  - Texto original del resumen: "During one week, 124 adults were randomly assigned to limit checking their email to three times a day; during the other week, participants could check their email an unlimited number of times per day."
  - Texto original del cuerpo: "participants felt less daily stress in the limited as compared to the unlimited email condition, F(1, 121) = 4.18, p = .04, Cohen's d = .37"; "the average number of times people reported checking their email on a normal day at work was 15.48 at baseline (SD = 8.69)"; "there were no significant differences between conditions in how many emails people received (Mlimited = 16.64 vs. Munlimited = 16.04 ...) or responded to"

## Punto 6

- <https://doi.org/10.1037/a0030986> → redirige con 302 a doi.apa.org; el DOI existe
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1037/a0030986&format=json&resultType=core> → confirmado: Altmann EM, Trafton JG, Hambrick DZ (2014) Momentary interruptions can derail the train of thought. J Exp Psychol Gen
  - Texto original del resumen: "Interruptions averaging 4.4 s long tripled the rate of sequence errors on post-interruption trials relative to baseline trials. Interruptions averaging 2.8 s long--about the time to perform a step in the interrupted task--doubled the rate of sequence errors."
- <https://www.ics.uci.edu/~gmark/CHI2005.pdf> (PDF en la página oficial de UCI del autor; texto extraído localmente con pdftotext)
  - Texto original del resumen: "detailed observation of 24 information workers"; "57% of their working spheres are interrupted"; cuerpo: "11 min. 4 sec." (duración promedio de los temas de trabajo centrales/periféricos antes del cambio); "When people did resume work on the same day, it took an average length of time of 25 min. 26 sec (sd=54 min. 48 sec.) ... before resuming work, our informants worked in an average of 2.26 (sd=2.79) working spheres."
  - Verificación del DOI: al principio había anotado 10.1145/1054972.1054989, pero OpenAlex confirmó que corresponde a otro artículo (Marshall & Bly), así que se corrigió. <https://api.crossref.org/works/10.1145/1054972.1055017> y <https://api.openalex.org/works/doi:10.1145/1054972.1055017> confirmaron que Mark, Gonzalez, Harris (2005) No task left behind? Examining the nature of fragmented work. CHI 2005 pp.321-330
- <https://www.ics.uci.edu/~gmark/chi08-mark.pdf> (PDF oficial del autor; texto extraído localmente)
  - Texto original del resumen: "people completed interrupted tasks in less time with no difference in quality ... but this comes at a price: experiencing more stress, higher frustration, time pressure and effort."; cuerpo: "Forty-eight subjects participated."
  - <https://api.crossref.org/works/10.1145/1357054.1357072> → confirmado: Mark G, Gudith D, Klocke U (2008) The cost of interrupted work: more speed and stress. CHI 2008 pp.107-110
  - La nota que decía «aproximadamente la mitad de las interrupciones eran iniciadas por la propia persona» provenía de mi recuerdo de ese artículo y no se pudo verificar literalmente en el texto extraído, por lo que se eliminó de la nota del punto

## Punto 7

- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE:%22Task%20switching%22%20AND%20AUTH:Monsell%20AND%20PUB_YEAR:2003&format=json&resultType=core> → confirmado: Monsell S (2003) Task switching. Trends Cogn Sci; DOI 10.1016/s1364-6613(03)00028-7; PMID 12639695
  - Texto original del resumen: "Subjects' responses are substantially slower and, usually, more error-prone immediately after a task switch."
  - Nota: buscar directamente el DOI en Europe PMC devolvió 0 resultados (por un problema de codificación de los paréntesis); se encontró mediante la búsqueda por título y autor
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1073/pnas.0903620106&format=json&resultType=core> → confirmado: Ophir E, Nass C, Wagner AD (2009) Cognitive control in media multitaskers. PNAS
  - Texto original del resumen: "heavy media multitaskers are more susceptible to interference from irrelevant environmental stimuli and from irrelevant representations in memory ... heavy media multitaskers performed worse on a test of task-switching ability"
  - Nota: este DOI no se abrió directamente mediante doi.org; se confirmó a través del registro de Europe PMC
- También se consultó <https://api.crossref.org/works/10.1037/0096-1523.27.4.763>, que confirmó la existencia de Rubinstein, Meyer & Evans (2001), pero no se pudo obtener el resumen y finalmente no se citó en el punto

## Punto 8

- <https://doi.org/10.1073/pnas.1418490112> → redirige con 302 a pnas.org; pnas.org devuelve 403
- La búsqueda en Europe PMC confirmó: Chang AM, Aeschbach D, Duffy JF, Czeisler CA (2015) Evening use of light-emitting eReaders negatively affects sleep, circadian timing, and next-morning alertness. PNAS；PMCID PMC4313820
- <https://pmc.ncbi.nlm.nih.gov/articles/PMC4313820/> → texto completo abierto correctamente
  - Texto original del cuerpo: "took longer to fall asleep ... 25.65 ± 18.78 min vs. 15.75 ± 13.09 min"; "suppressed evening levels of melatonin by 55.12 ± 20.12%"; "Dim light melatonin onset was >1.5 h later on the day following the LE-eBook condition (22:31 ± 0:42) than in the print-book condition (21:01 ± 0:49)"; "feeling sleepier the morning after reading an LE-eBook ... it took them hours longer to fully wake up"
  - La nota que decía «brillo máximo y lectura durante varias horas» provenía de mi recuerdo del diseño experimental y no se pudo verificar literalmente, por lo que se eliminó de la nota del punto

## Punto 9

- <https://doi.org/10.1093/sleep/29.6.831> → redirige con 302 y después se pudo abrir <https://academic.oup.com/sleep/article-lookup/doi/10.1093/sleep/29.6.831>
  - Confirmado: Brooks A, Lack L (2006) A Brief Afternoon Nap Following Nocturnal Sleep Restriction: Which Nap Duration is Most Recuperative? Sleep 29(6):831-840
  - Texto original del resumen: "The 5-minute nap produced few benefits in comparison with the no-nap control."; "The 10-minute nap produced immediate improvements in all outcome measures (including sleep latency, subjective sleepiness, fatigue, vigor, and cognitive performance), with some of these benefits maintained for as long as 155 minutes."; para 20 minutos: la mejora apareció 35 minutos después de la siesta y duró hasta 125 minutos; "The 30-minute nap produced a period of impaired alertness and performance immediately after napping, indicative of sleep inertia, followed by improvements lasting up to 155 minutes after the nap."

## Punto 10

- <https://doi.org/10.1016/j.jenvp.2011.07.002> → redirige con 302 a linkinghub.elsevier.com; el DOI existe; ScienceDirect devuelve 403; PubMed no contiene este artículo (no es una revista MEDLINE)
- <https://api.crossref.org/works/10.1016/j.jenvp.2011.07.002> → confirmado: Jahncke H, Hygge S, Halin N, Green AM, Dimberg K (2011) Open-plan office noise: Cognitive performance and restoration. J Environ Psychol 31(4):373-382
- <http://hig.diva-portal.org/smash/record.jsf?pid=diva2%3A434794&dswid=2269> (registro del repositorio institucional oficial de la Universidad de Gävle) → se abrió correctamente; título, autores, revista y DOI coinciden
  - Texto original del resumen: "The background sound level increased by 12 dB, from 39 to 51 dB LAeq."; "Decreased word memory performance, increased fatigue and motivational deficits when the background sound level increased."; "A break with a nature movie with corresponding sound increased energy ratings compared to just listening to river sounds or office noise."
  - N = 47 y 2 horas por sesión de trabajo: provenían de un fragmento del resumen devuelto por WebSearch y no se vieron literalmente en la página de diva; se eliminaron del punto

## Punto 11

- <https://doi.org/10.1111/ecoj.12166> → redirige con 302 a academic.oup.com/ej/article/125/589/2052-2076/5078088; el DOI existe; la página de OUP solo muestra la navegación
- <https://api.crossref.org/works/10.1111/ecoj.12166> → confirmado: Pencavel J (2015) The Productivity of Working Hours. The Economic Journal 125(589):2052-2076
- <https://api.semanticscholar.org/graph/v1/paper/DOI:10.1111/ecoj.12166> → texto original del resumen: "below an hours threshold, output is proportional to hours; above a threshold, output rises at a decreasing rate as hours increase."
- <https://docs.iza.org/dp8129.pdf> (IZA DP No. 8129, versión de working paper de la misma investigación, sitio oficial de la institución; texto extraído localmente con pdftotext)
  - Texto original del cuerpo: "below 49 weekly hours, variations in output are proportional to variations in hours; for those observations corresponding to 49 or more hours, output rises with hours at a decreasing rate and a maximum of output occurs at about 63 hours. Output at 70 hours differs little from output at 56 hours"; sección de conclusiones: "The working week threshold for the munition workers considered in this paper was at 48 hours, but for other workers it may be more or less."
  - Nota: el análisis del cuerpo usa 49 horas como punto de corte, mientras que el párrafo de conclusiones dice 48 horas; el punto toma 49. La verificación numérica usó la versión de working paper porque no se pudo abrir la versión final de la revista

## Punto 12

- <https://doi.org/10.1111/j.1745-6924.2008.00088.x> → redirige con 302 a journals.sagepub.com; el DOI existe; SAGE devuelve 403
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1111/j.1745-6924.2008.00088.x&format=json&resultType=core> → confirmado: Nolen-Hoeksema S, Wisco BE, Lyubomirsky S (2008) Rethinking Rumination. Perspect Psychol Sci
  - Texto original del resumen: "rumination exacerbates depression, enhances negative thinking, impairs problem solving, interferes with instrumental behavior, and erodes social support"; también "anxiety, binge eating, binge drinking, and self-harm"

## Punto 13

- <https://api.crossref.org/works/10.1037/0022-3514.46.5.1097> → confirmado: Rook KS (1984) The negative side of social interaction: Impact on psychological well-being. J Pers Soc Psychol 46(5):1097-1108
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE:%22The%20negative%20side%20of%20social%20interaction%22%20AND%20AUTH:Rook&format=json&resultType=core> → PMID 6737206, DOI 10.1037//0022-3514.46.5.1097
  - Texto original del resumen: "negative social outcomes were more consistently and more strongly related to well-being than were positive social outcomes"; muestra de 120 mujeres viudas de 60 a 89 años
- Nota: <https://doi.org/10.1037/0022-3514.46.5.1097> no se abrió directamente (los DOI antiguos de APA del mismo tipo redirigen a psycnet y devuelven 403), pero Crossref y Europe PMC registran el DOI de forma independiente

## Punto 14

- <https://api.crossref.org/works/10.1037/0022-3514.74.5.1252> → confirmado: Baumeister RF, Bratslavsky E, Muraven M, Tice DM (1998) Ego depletion: Is the active self a limited resource? J Pers Soc Psychol 74:1252-1265
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=TITLE:%22Ego%20depletion%3A%20is%20the%20active%20self%20a%20limited%20resource%22&format=json&resultType=core> → PMID 9599441, texto original del resumen: "Choice, active response, self-regulation, and other volition may all draw on a common inner resource."
- <https://doi.org/10.1177/1745691616652873> → redirige con 302 a SAGE; SAGE devuelve 403
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1177/1745691616652873&format=json&resultType=core> → confirmado: Hagger MS, Chatzisarantis NLD, Alberts H, et al. (2016) A Multilab Preregistered Replication of the Ego-Depletion Effect. Perspect Psychol Sci
  - Texto original del resumen: 23 laboratorios, 2141 personas; "the size of the ego-depletion effect was small with 95% confidence intervals (CIs) that encompassed zero (d = 0.04, 95% CI [-0.07, 0.15]"
- <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:10.1177/0956797621989733&format=json&resultType=core> → confirmado: Vohs KD, Schmeichel BJ, Lohmann S, et al. (2021) A Multisite Preregistered Paradigmatic Test of the Ego-Depletion Effect. Psychol Sci
  - Texto original del resumen: "preregistered multilaboratory project (k = 36; N = 3,531) ... Confirmatory tests found a nonsignificant result (d = 0.06)"
  - Nota: este DOI no se abrió directamente mediante doi.org; se confirmó a través del registro de Europe PMC

## Resumen de los puntos no confirmados

- El borrador del punto 1 decía «sobre la mesa / en el bolsillo / en otra habitación» y «memoria de trabajo e inteligencia fluida»; como no se pudieron confirmar literalmente en el texto original disponible, se eliminaron y solo se conservaron las expresiones respaldadas por el texto del resumen
- También se eliminaron por falta de confirmación literal el borrador de la nota del punto 6 («aproximadamente la mitad de las interrupciones eran iniciadas por la propia persona»), la nota del punto 8 («brillo máximo y lectura durante varias horas») y el punto 10 («N = 47, 2 horas de trabajo»)
- En la versión actual, todas las cifras de la columna «Beneficio» de los 14 puntos tienen una fuente textual arriba; no hay ningún punto que deba marcarse como TODO o pendiente de verificación
