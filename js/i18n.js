/* Christ Embassy Mozambique public site language and frontend form helpers */
const translations = {
  pt: {
    "brand.tag": "Moçambique",
    "nav.home": "Início",
    "nav.about": "Sobre Nós",
    "nav.ministries": "Ministérios",
    "nav.online": "Culto Online",
    "nav.churches": "Igrejas",
    "nav.give": "Ofertas",
    "nav.contact": "Contacto",
    "nav.portal": "Portal",
    "nav.portal2": "Acesso ao Portal",
    "hero.eyebrow": "Bem-vindo à Christ Embassy Moçambique",
    "hero.title": "Uma igreja, uma família, uma visão para transformar vidas.",
    "hero.lead": "Junte-se à Christ Embassy Moçambique presencialmente ou online. Cresça na Palavra, descubra o seu propósito e faça parte de uma comunidade de fé viva.",
    "hero.cta.new": "Sou Novo Aqui",
    "hero.cta.watch": "Assistir Culto Online",
    "hero.cta.give": "Fazer Oferta",
    "hero.services": "Horários de Culto",
    "hero.day1": "Domingo — 1º Culto",
    "hero.day2": "Domingo — 2º Culto",
    "hero.online": "Culto Online disponível",
    "hero.note": "Venha como está. Há um lugar preparado para si.",
    "visitor.eyebrow": "Primeira vez",
    "visitor.title": "Novo na Christ Embassy?",
    "visitor.lead": "Queremos recebê-lo com alegria, conhecer a sua história e ajudá-lo a dar os próximos passos na fé.",
    "visitor.visit.title": "Visite-nos",
    "visitor.visit.text": "Participe num dos nossos cultos presenciais em Maputo ou numa igreja perto de si.",
    "visitor.register.title": "Registe a sua visita",
    "visitor.register.text": "Deixe os seus contactos para que a nossa equipa possa acompanhá-lo com cuidado.",
    "visitor.follow.title": "Receba acompanhamento",
    "visitor.follow.text": "Um conselheiro ou líder irá entrar em contacto e caminhar consigo nos primeiros passos.",
    "visitor.school.title": "Comece a Escola de Fundação",
    "visitor.school.text": "Aprenda os fundamentos da Palavra e fortaleça a sua vida espiritual até à graduação.",
    "visitor.button": "Registar como Primeira Vez",
    "visitor.form.title": "Registo de Primeira Vez",
    "visitor.form.name": "Nome completo",
    "visitor.form.phone": "Telefone",
    "visitor.form.email": "E-mail",
    "visitor.form.church": "Igreja",
    "visitor.form.invited": "Quem convidou?",
    "visitor.form.foundation": "Quero fazer Escola de Fundação",
    "visitor.form.cell": "Tenho interesse numa célula",
    "visitor.form.send": "Guardar registo",
    "visitor.form.note": "Protótipo frontend: este registo fica preparado para futura ligação ao módulo Primeira Vez da dashboard.",
    "visitor.form.success": "Registo guardado neste protótipo. Mais tarde será enviado directamente para a dashboard.",
    "min.eyebrow": "Cresça e sirva",
    "min.title": "Ministérios para cada etapa da vida",
    "min.lead": "Cada ministério existe para cuidar, formar, fortalecer e enviar pessoas cheias da Palavra de Deus.",
    "min.cta": "Saber Mais",
    "min.c1.title": "Aconselhamento",
    "min.c1.text": "Cuidado pastoral, acompanhamento de visitantes e apoio espiritual com amor e discrição.",
    "min.c2.title": "Escola de Fundação",
    "min.c2.text": "Sete aulas essenciais para consolidar novos membros na fé e preparar a caminhada cristã.",
    "min.c3.title": "Ministério de Células",
    "min.c3.text": "Pequenos grupos de comunhão, discipulado, evangelismo e crescimento espiritual nos bairros.",
    "min.c4.title": "Escola de Cura",
    "min.c4.text": "Ensino, testemunhos e fé prática para receber e ministrar a cura divina.",
    "min.c5.title": "LoveWorld SAT",
    "min.c5.text": "Transmissões, mídia e conteúdo de fé para Moçambique e para a comunidade lusófona.",
    "min.c6.title": "Parceria",
    "min.c6.text": "Semeie em projectos do evangelho, alcance nacional e iniciativas LoveWorld.",
    "min.c7.title": "Programas",
    "min.c7.text": "Cultos especiais, conferências, reuniões de oração e eventos para toda a família.",
    "min.c8.title": "Sacramentos",
    "min.c8.text": "Baptismo, casamento e dedicação de bebés com orientação pastoral e acompanhamento.",
    "church.eyebrow": "Igrejas e localidades",
    "church.title": "Encontre uma Christ Embassy perto de si",
    "church.lead": "Estamos a crescer em Moçambique através de igrejas, células, pontos de comunhão e igreja online.",
    "church.filter.province": "Província",
    "church.filter.city": "Cidade",
    "church.filter.type": "Presencial / Online",
    "church.all": "Todas",
    "church.inperson": "Presencial",
    "church.online": "Online",
    "church.pastor": "Pastor responsável",
    "church.visit": "Ver detalhes",
    "online.eyebrow": "Igreja Online",
    "online.title": "Não pode vir presencialmente? Junte-se online.",
    "online.lead": "Acompanhe os cultos ao vivo, partilhe pedidos de oração e faça parte da nossa comunidade, mesmo à distância.",
    "online.placeholder": "Área de transmissão YouTube / Facebook Live",
    "online.watch": "Assistir Agora",
    "online.join": "Quero fazer parte da Igreja Online",
    "vmp.eyebrow": "A Nossa Base",
    "vmp.title": "Visão, Missão e Propósito",
    "vmp.lead": "Partilhamos a mesma visão de todas as igrejas Christ Embassy no mundo, vivida com o coração, a língua e a cultura de Moçambique.",
    "vmp.v.title": "Visão",
    "vmp.v.text": "Levar a presença divina de Deus às nações e aos povos do mundo; e demonstrar o caráter do Espírito.",
    "vmp.m.title": "Missão",
    "vmp.m.text": "Levantar gerações de homens e mulheres que receberão a sua herança para concretizar o sonho de Deus.",
    "vmp.p.title": "Propósito",
    "vmp.p.text": "Para trazer homens e mulheres à sua herança em Cristo.",
    "of.eyebrow": "Semear e dar",
    "of.title": "Ofertas, dízimos e parcerias",
    "of.lead": "A sua oferta sustenta o trabalho do evangelho em Moçambique, desde os cultos até às missões, células, mídia e projectos da igreja.",
    "of.categories": "Categorias",
    "of.methods": "Métodos de pagamento",
    "of.confirm.title": "Confirmação de Oferta",
    "of.confirm.lead": "Use este formulário para registar a sua contribuição. Mais tarde será ligado ao módulo Financeiro como Pendente de Verificação.",
    "of.name": "Nome",
    "of.phone": "Telefone",
    "of.church": "Igreja",
    "of.category": "Categoria",
    "of.method": "Método",
    "of.amount": "Valor",
    "of.reference": "Referência da transacção",
    "of.date": "Data",
    "of.notes": "Observações",
    "of.send": "Guardar confirmação",
    "of.success": "Confirmação guardada neste protótipo. Mais tarde será enviada para Finanças.",
    "of.mpesa": "M-Pesa",
    "of.emola": "E-Mola",
    "of.bank": "Banco",
    "foot.about": "Christ Embassy Moçambique",
    "foot.aboutText": "Uma igreja, uma família e uma visão para levar a presença de Deus às nações e demonstrar o caráter do Espírito.",
    "foot.links": "Ligações",
    "foot.contact": "Contacto",
    "foot.follow": "Siga-nos",
    "foot.addr": "Av. de Angola, Nº 1818/1824, Maputo",
    "foot.email.note": "A confirmar",
    "foot.rights": "Todos os direitos reservados.",
    "sobre.eyebrow": "Quem Somos",
    "sobre.title": "Uma família da fé, no coração de Moçambique",
    "sobre.lead": "Christ Embassy Moçambique faz parte da família mundial Christ Embassy, presente em dezenas de países. Aqui em Maputo, vivemos essa mesma visão em português, com o coração virado para Moçambique e toda a comunidade lusófona.",
    "sobre.pc.eyebrow": "Liderança Global",
    "sobre.pc.title": "Conheça o Pastor Chris",
    "sobre.pc.text1": "O Rev. Dr. Chris Oyakhilome é o Presidente da LoveWorld Inc. e da Christ Embassy. A sua liderança tem impulsionado um ministério global, dinâmico e multifacetado.",
    "sobre.pc.text2": "Como pastor, professor, ministro de cura, apresentador de televisão e autor best-seller, o Pastor Chris dedica-se a alcançar os povos do mundo com a presença manifesta de Deus.",
    "sobre.lead2.eyebrow": "Liderança",
    "sobre.lead2.title": "Sob a liderança do Pastor Kene Ume",
    "sobre.lead2.text": "Desde 2014, a Christ Embassy Moçambique é liderada localmente pelo Pastor Kenechukwu Ume, dedicado à plantação de igrejas, formação de líderes e desenvolvimento de células e acções de evangelismo.",
    "sobre.where.eyebrow": "Onde Estamos",
    "sobre.where.title": "Avenida de Angola, Maputo",
    "sobre.where.text": "Realizamos cultos presenciais na Av. de Angola, Nº 1818/1824, em Maputo, com transmissão online para membros e visitantes em todo Moçambique.",
    "sobre.lw.eyebrow": "A Família Global",
    "sobre.lw.title": "Sobre a LoveWorld",
    "sobre.lw.text1": "A LoveWorld Incorporated, também conhecida como Christ Embassy, é um ministério global com a missão de levar a presença de Deus às nações.",
    "sobre.lw.text2": "Esta visão global deu origem a vários braços de actuação, incluindo mídia, Escola de Cura, Rhapsody of Realities e missões, dos quais a Christ Embassy Moçambique faz parte.",
    "sobre.sf.eyebrow": "O Que Cremos",
    "sobre.sf.title": "Declaração de Fé",
    "sobre.sf.lead": "A nossa fé assenta na Palavra de Deus e está alinhada com os princípios fundamentais da doutrina cristã.",
    "sobre.sf.i1.title": "A Palavra de Deus",
    "sobre.sf.i1.text": "Cremos que a Bíblia é a Palavra inspirada e infalível de Deus.",
    "sobre.sf.i2.title": "A Trindade",
    "sobre.sf.i2.text": "Cremos num só Deus, eternamente existente em três pessoas: Pai, Filho e Espírito Santo.",
    "sobre.sf.i3.title": "A Divindade de Cristo",
    "sobre.sf.i3.text": "Cremos que Jesus nasceu de uma virgem, morreu, ressuscitou corporalmente e ascendeu aos céus.",
    "sobre.sf.i4.title": "Salvação",
    "sobre.sf.i4.text": "Cremos que a salvação vem pelo arrependimento e pela fé no sangue precioso de Jesus.",
    "sobre.sf.i5.title": "Cura Divina",
    "sobre.sf.i5.text": "Cremos que a obra redentora de Cristo na cruz proporciona cura divina para o corpo e salvação para a alma.",
    "sobre.sf.i6.title": "A Volta de Cristo",
    "sobre.sf.i6.text": "Cremos no arrebatamento da igreja e na segunda vinda de Cristo.",
    "culto.eyebrow": "Culto Online",
    "culto.title": "Assista onde estiver",
    "culto.lead": "Transmitimos ao vivo todos os domingos e quartas-feiras. Ligue-se e faça parte do culto, esteja em Maputo, noutra província ou na diáspora.",
    "culto.placeholder": "O vídeo da transmissão ao vivo aparecerá aqui.",
    "cont.eyebrow": "Fale Connosco",
    "cont.title": "Estamos aqui para si",
    "cont.lead": "Tem uma pergunta, um pedido de oração, ou quer saber mais sobre um departamento? Escreva-nos.",
    "cont.name": "Nome Completo",
    "cont.email": "E-mail",
    "cont.msg": "Mensagem",
    "cont.send": "Enviar Mensagem",
    "cont.note": "Este formulário ainda não está ligado a um servidor; será activado numa fase futura.",
    "portal.eyebrow": "Área Reservada",
    "portal.title": "Portal da Equipa",
    "portal.lead": "Acesso reservado para pastores, líderes e equipas de departamentos.",
    "portal.enter": "Entrar no Portal"
  },
  en: {
    "brand.tag": "Mozambique",
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.ministries": "Ministries",
    "nav.online": "Online Service",
    "nav.churches": "Churches",
    "nav.give": "Giving",
    "nav.contact": "Contact",
    "nav.portal": "Portal",
    "nav.portal2": "Portal Access",
    "hero.eyebrow": "Welcome to Christ Embassy Mozambique",
    "hero.title": "One church, one family, one vision to transform lives.",
    "hero.lead": "Join Christ Embassy Mozambique in person or online. Grow in the Word, discover your purpose, and become part of a living faith community.",
    "hero.cta.new": "I'm New Here",
    "hero.cta.watch": "Watch Online Service",
    "hero.cta.give": "Give",
    "hero.services": "Service Times",
    "hero.day1": "Sunday — 1st Service",
    "hero.day2": "Sunday — 2nd Service",
    "hero.online": "Online service available",
    "hero.note": "Come as you are. There is a place prepared for you.",
    "visitor.eyebrow": "First time",
    "visitor.title": "New to Christ Embassy?",
    "visitor.lead": "We would love to welcome you, hear your story, and help you take your next steps in faith.",
    "visitor.visit.title": "Visit Us",
    "visitor.visit.text": "Join one of our in-person services in Maputo or a church close to you.",
    "visitor.register.title": "Register Your Visit",
    "visitor.register.text": "Leave your contact details so our team can follow up with care.",
    "visitor.follow.title": "Receive Follow-Up",
    "visitor.follow.text": "A counselor or leader will contact you and walk with you through the first steps.",
    "visitor.school.title": "Start Foundation School",
    "visitor.school.text": "Learn the foundations of the Word and strengthen your spiritual life through to graduation.",
    "visitor.button": "Register as a First Timer",
    "visitor.form.title": "First Timer Registration",
    "visitor.form.name": "Full name",
    "visitor.form.phone": "Phone",
    "visitor.form.email": "Email",
    "visitor.form.church": "Church",
    "visitor.form.invited": "Who invited you?",
    "visitor.form.foundation": "I want Foundation School",
    "visitor.form.cell": "I am interested in a cell",
    "visitor.form.send": "Save registration",
    "visitor.form.note": "Frontend prototype: this record is prepared for future connection to the dashboard First Timers module.",
    "visitor.form.success": "Registration saved in this prototype. Later it will go directly to the dashboard.",
    "min.eyebrow": "Grow and serve",
    "min.title": "Ministries for every stage of life",
    "min.lead": "Each ministry exists to care, train, strengthen, and send people filled with the Word of God.",
    "min.cta": "Learn More",
    "min.c1.title": "Counseling",
    "min.c1.text": "Pastoral care, visitor follow-up, and spiritual support with love and discretion.",
    "min.c2.title": "Foundation School",
    "min.c2.text": "Seven essential classes to establish new members in faith and prepare their Christian walk.",
    "min.c3.title": "Cell Ministry",
    "min.c3.text": "Small groups for fellowship, discipleship, evangelism, and spiritual growth in neighborhoods.",
    "min.c4.title": "Healing School",
    "min.c4.text": "Teaching, testimonies, and practical faith to receive and minister divine healing.",
    "min.c5.title": "LoveWorld SAT",
    "min.c5.text": "Broadcasts, media, and faith content for Mozambique and Portuguese-speaking communities.",
    "min.c6.title": "Partnership",
    "min.c6.text": "Sow into gospel projects, national outreach, and LoveWorld initiatives.",
    "min.c7.title": "Programs",
    "min.c7.text": "Special services, conferences, prayer meetings, and events for the whole family.",
    "min.c8.title": "Sacraments",
    "min.c8.text": "Baptism, marriage, and baby dedication with pastoral guidance and care.",
    "church.eyebrow": "Churches and locations",
    "church.title": "Find a Christ Embassy near you",
    "church.lead": "We are growing in Mozambique through churches, cells, fellowship points, and online church.",
    "church.filter.province": "Province",
    "church.filter.city": "City",
    "church.filter.type": "In person / Online",
    "church.all": "All",
    "church.inperson": "In person",
    "church.online": "Online",
    "church.pastor": "Pastor in charge",
    "church.visit": "View details",
    "online.eyebrow": "Online Church",
    "online.title": "Can't come in person? Join online.",
    "online.lead": "Watch live services, share prayer requests, and become part of our community from wherever you are.",
    "online.placeholder": "YouTube / Facebook Live area",
    "online.watch": "Watch Now",
    "online.join": "I want to join the Online Church",
    "vmp.eyebrow": "Our Foundation",
    "vmp.title": "Vision, Mission & Purpose",
    "vmp.lead": "We share the same vision as Christ Embassy churches worldwide, lived through Mozambique's heart, language, and culture.",
    "vmp.v.title": "Vision",
    "vmp.v.text": "To take the divine presence of God to the nations and peoples of the world; and to demonstrate the character of the Spirit.",
    "vmp.m.title": "Mission",
    "vmp.m.text": "To raise generations of men and women who will receive their inheritance to fulfill God's dream.",
    "vmp.p.title": "Purpose",
    "vmp.p.text": "To bring men and women into their inheritance in Christ.",
    "of.eyebrow": "Sow and give",
    "of.title": "Offerings, tithes, and partnerships",
    "of.lead": "Your giving sustains the work of the Gospel in Mozambique, from services to missions, cells, media, and church projects.",
    "of.categories": "Categories",
    "of.methods": "Payment methods",
    "of.confirm.title": "Giving Confirmation",
    "of.confirm.lead": "Use this form to register your contribution. Later it will connect to Finance as Pending Verification.",
    "of.name": "Name",
    "of.phone": "Phone",
    "of.church": "Church",
    "of.category": "Category",
    "of.method": "Method",
    "of.amount": "Amount",
    "of.reference": "Transaction reference",
    "of.date": "Date",
    "of.notes": "Notes",
    "of.send": "Save confirmation",
    "of.success": "Confirmation saved in this prototype. Later it will be sent to Finance.",
    "of.mpesa": "M-Pesa",
    "of.emola": "E-Mola",
    "of.bank": "Bank",
    "foot.about": "Christ Embassy Mozambique",
    "foot.aboutText": "One church, one family, and one vision to take God's presence to the nations and demonstrate the character of the Spirit.",
    "foot.links": "Links",
    "foot.contact": "Contact",
    "foot.follow": "Follow Us",
    "foot.addr": "Av. de Angola, No. 1818/1824, Maputo",
    "foot.email.note": "To be confirmed",
    "foot.rights": "All rights reserved."
  },
  fr: {
    "brand.tag": "Mozambique",
    "nav.home": "Accueil",
    "nav.about": "À Propos",
    "nav.ministries": "Ministères",
    "nav.online": "Culte en Ligne",
    "nav.churches": "Églises",
    "nav.give": "Offrandes",
    "nav.contact": "Contact",
    "nav.portal": "Portail",
    "nav.portal2": "Accès au Portail",
    "hero.eyebrow": "Bienvenue à Christ Embassy Mozambique",
    "hero.title": "Une église, une famille, une vision pour transformer des vies.",
    "hero.lead": "Rejoignez Christ Embassy Mozambique en présentiel ou en ligne. Grandissez dans la Parole, découvrez votre but et faites partie d'une communauté de foi vivante.",
    "hero.cta.new": "Je Suis Nouveau",
    "hero.cta.watch": "Regarder le Culte",
    "hero.cta.give": "Faire une Offrande",
    "hero.services": "Horaires des Cultes",
    "hero.day1": "Dimanche — 1er Culte",
    "hero.day2": "Dimanche — 2e Culte",
    "hero.online": "Culte en ligne disponible",
    "hero.note": "Venez comme vous êtes. Une place est préparée pour vous.",
    "visitor.eyebrow": "Première fois",
    "visitor.title": "Nouveau à Christ Embassy ?",
    "visitor.lead": "Nous voulons vous accueillir avec joie, connaître votre histoire et vous aider à faire vos prochains pas dans la foi.",
    "visitor.visit.title": "Visitez-nous",
    "visitor.visit.text": "Participez à l'un de nos cultes en présentiel à Maputo ou dans une église près de chez vous.",
    "visitor.register.title": "Enregistrez votre visite",
    "visitor.register.text": "Laissez vos contacts afin que notre équipe puisse vous accompagner avec soin.",
    "visitor.follow.title": "Recevez un suivi",
    "visitor.follow.text": "Un conseiller ou responsable vous contactera et marchera avec vous dans vos premiers pas.",
    "visitor.school.title": "Commencez l'École de Fondation",
    "visitor.school.text": "Apprenez les fondements de la Parole et fortifiez votre vie spirituelle jusqu'à la graduation.",
    "visitor.button": "S'inscrire comme Nouveau Visiteur",
    "visitor.form.title": "Inscription Nouveau Visiteur",
    "visitor.form.name": "Nom complet",
    "visitor.form.phone": "Téléphone",
    "visitor.form.email": "E-mail",
    "visitor.form.church": "Église",
    "visitor.form.invited": "Qui vous a invité ?",
    "visitor.form.foundation": "Je veux l'École de Fondation",
    "visitor.form.cell": "Je suis intéressé par une cellule",
    "visitor.form.send": "Enregistrer",
    "visitor.form.note": "Prototype frontend : ce registre est préparé pour une future connexion au module Nouveaux Visiteurs du tableau de bord.",
    "visitor.form.success": "Inscription enregistrée dans ce prototype. Plus tard, elle ira directement au tableau de bord.",
    "min.eyebrow": "Grandir et servir",
    "min.title": "Des ministères pour chaque étape de la vie",
    "min.lead": "Chaque ministère existe pour prendre soin, former, fortifier et envoyer des personnes remplies de la Parole de Dieu.",
    "min.cta": "En Savoir Plus",
    "min.c1.title": "Conseil Pastoral",
    "min.c1.text": "Soin pastoral, suivi des visiteurs et soutien spirituel avec amour et discrétion.",
    "min.c2.title": "École de Fondation",
    "min.c2.text": "Sept classes essentielles pour établir les nouveaux membres dans la foi.",
    "min.c3.title": "Ministère des Cellules",
    "min.c3.text": "Petits groupes de communion, discipulat, évangélisation et croissance spirituelle.",
    "min.c4.title": "École de Guérison",
    "min.c4.text": "Enseignement, témoignages et foi pratique pour recevoir et administrer la guérison divine.",
    "min.c5.title": "LoveWorld SAT",
    "min.c5.text": "Diffusions, médias et contenu de foi pour le Mozambique et la communauté lusophone.",
    "min.c6.title": "Partenariat",
    "min.c6.text": "Semez dans les projets de l'Évangile, l'impact national et les initiatives LoveWorld.",
    "min.c7.title": "Programmes",
    "min.c7.text": "Cultes spéciaux, conférences, réunions de prière et événements pour toute la famille.",
    "min.c8.title": "Sacrements",
    "min.c8.text": "Baptême, mariage et présentation d'enfants avec accompagnement pastoral.",
    "church.eyebrow": "Églises et lieux",
    "church.title": "Trouvez une Christ Embassy près de vous",
    "church.lead": "Nous grandissons au Mozambique par des églises, cellules, points de communion et l'église en ligne.",
    "church.filter.province": "Province",
    "church.filter.city": "Ville",
    "church.filter.type": "Présentiel / En ligne",
    "church.all": "Toutes",
    "church.inperson": "Présentiel",
    "church.online": "En ligne",
    "church.pastor": "Pasteur responsable",
    "church.visit": "Voir les détails",
    "online.eyebrow": "Église en Ligne",
    "online.title": "Vous ne pouvez pas venir ? Rejoignez-nous en ligne.",
    "online.lead": "Suivez les cultes en direct, partagez vos demandes de prière et faites partie de notre communauté à distance.",
    "online.placeholder": "Zone YouTube / Facebook Live",
    "online.watch": "Regarder Maintenant",
    "online.join": "Je veux rejoindre l'Église en Ligne",
    "vmp.eyebrow": "Notre Fondement",
    "vmp.title": "Vision, Mission et But",
    "vmp.lead": "Nous partageons la même vision que les églises Christ Embassy dans le monde, vécue avec le cœur, la langue et la culture du Mozambique.",
    "vmp.v.title": "Vision",
    "vmp.v.text": "Apporter la présence divine de Dieu aux nations et aux peuples du monde, et démontrer le caractère de l'Esprit.",
    "vmp.m.title": "Mission",
    "vmp.m.text": "Élever des générations d'hommes et de femmes qui recevront leur héritage pour accomplir le rêve de Dieu.",
    "vmp.p.title": "But",
    "vmp.p.text": "Amener les hommes et les femmes dans leur héritage en Christ.",
    "of.eyebrow": "Semer et donner",
    "of.title": "Offrandes, dîmes et partenariats",
    "of.lead": "Votre offrande soutient l'œuvre de l'Évangile au Mozambique, des cultes aux missions, cellules, médias et projets de l'église.",
    "of.categories": "Catégories",
    "of.methods": "Méthodes de paiement",
    "of.confirm.title": "Confirmation d'Offrande",
    "of.confirm.lead": "Utilisez ce formulaire pour enregistrer votre contribution. Plus tard, il sera connecté aux Finances comme En attente de vérification.",
    "of.name": "Nom",
    "of.phone": "Téléphone",
    "of.church": "Église",
    "of.category": "Catégorie",
    "of.method": "Méthode",
    "of.amount": "Montant",
    "of.reference": "Référence de transaction",
    "of.date": "Date",
    "of.notes": "Observations",
    "of.send": "Enregistrer la confirmation",
    "of.success": "Confirmation enregistrée dans ce prototype. Plus tard, elle ira aux Finances.",
    "of.mpesa": "M-Pesa",
    "of.emola": "E-Mola",
    "of.bank": "Banque",
    "foot.about": "Christ Embassy Mozambique",
    "foot.aboutText": "Une église, une famille et une vision pour apporter la présence de Dieu aux nations.",
    "foot.links": "Liens",
    "foot.contact": "Contact",
    "foot.follow": "Suivez-nous",
    "foot.addr": "Av. de Angola, Nº 1818/1824, Maputo",
    "foot.email.note": "À confirmer",
    "foot.rights": "Tous droits réservés."
  }
};

const fallbackLang = "pt";

function saveLanguage(lang) {
  try {
    localStorage.setItem("ce-language", lang);
  } catch {}
}

function getSavedLanguage() {
  try {
    return localStorage.getItem("ce-language");
  } catch {
    return null;
  }
}

function translateElement(el, lang) {
  const key = el.getAttribute("data-i18n");
  const value = translations[lang]?.[key] || translations[fallbackLang][key];
  if (value) el.innerHTML = value;
}

function translateAttribute(el, attr, lang) {
  const key = el.getAttribute(`data-i18n-${attr}`);
  const value = translations[lang]?.[key] || translations[fallbackLang][key];
  if (value) el.setAttribute(attr, value);
}

function applyLanguage(lang) {
  const selected = translations[lang] ? lang : fallbackLang;
  document.querySelectorAll("[data-i18n]").forEach((el) => translateElement(el, selected));
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => translateAttribute(el, "placeholder", selected));
  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => translateAttribute(el, "aria-label", selected));
  document.documentElement.lang = selected;
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === selected);
  });
  saveLanguage(selected);
}

document.querySelectorAll(".lang-switch button").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang")));
});

const savedLanguage = getSavedLanguage();
applyLanguage(savedLanguage && translations[savedLanguage] ? savedLanguage : fallbackLang);

const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".navbar .nav-link").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.setAttribute("aria-current", "page");
    link.classList.add("active");
  }
});

document.querySelectorAll(".navbar-collapse .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const nav = document.querySelector(".navbar-collapse.show");
    if (nav && window.bootstrap) {
      window.bootstrap.Collapse.getOrCreateInstance(nav).hide();
    }
  });
});

function storePrototypeRecord(key, form) {
  const data = Object.fromEntries(new FormData(form).entries());
  form.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    data[checkbox.name] = checkbox.checked;
  });
  data.id = `${key}-${Date.now()}`;
  data.created_at = new Date().toISOString();
  data.source = "public-site";

  try {
    const records = JSON.parse(localStorage.getItem(key) || "[]");
    records.push(data);
    localStorage.setItem(key, JSON.stringify(records));
  } catch {}

  return data;
}

document.querySelectorAll("[data-ce-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const key = form.getAttribute("data-ce-form");
    storePrototypeRecord(key, form);
    form.reset();
    const message = form.querySelector("[data-form-message]");
    if (message) {
      const lang = document.documentElement.lang || fallbackLang;
      const messageKey = form.getAttribute("data-success-key");
      message.textContent = translations[lang]?.[messageKey] || translations[fallbackLang][messageKey] || "";
      message.hidden = false;
    }
  });
});
