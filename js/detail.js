(function () {
  const root = document.querySelector('[data-detail-root]');
  if (!root) return;

  const isArabic = document.documentElement.lang === 'ar';
  const locale = isArabic ? 'ar' : 'en';
  const pathBase = isArabic ? '/ar' : '';
  const key = document.body.dataset.detailKey;
  const type = document.body.dataset.detailType;

  const services = {
    en: {
      'interior-design': {
        title: 'Residential Interior Design',
        heading: 'Residential Interiors Planned Around The Way You Live',
        intro: 'KPG develops thoughtful residential interiors in Kuwait, joining spatial planning, material selection and technical detailing into one clear design direction.',
        benefits: ['Purposeful space planning', 'Coordinated material palettes', 'Bespoke furniture and joinery', 'Clear technical documentation'],
        included: ['Brief and site assessment', 'Furniture and circulation layouts', 'Concept and mood development', 'Finish and material selection', 'Lighting and ceiling coordination', 'Detailed drawings for execution'],
        ideal: 'Private villas, apartments, majlis spaces and complete residential renovations.'
      },
      fitout: {
        title: 'Commercial Fitout',
        heading: 'Coordinated Fitout Delivery From Empty Shell To Handover',
        intro: 'KPG delivers commercial fitout packages for workplaces, retail and hospitality spaces, coordinating finishes, joinery and building services through one accountable team.',
        benefits: ['One coordinated programme', 'Trade and MEP integration', 'Controlled material approvals', 'Structured quality inspections'],
        included: ['Site survey and scope validation', 'Construction and partition works', 'Ceilings, flooring and finishes', 'Bespoke joinery coordination', 'MEP service integration', 'Testing, snagging and handover'],
        ideal: 'Offices, retail units, hospitality venues, clinics and client-facing commercial spaces.'
      },
      consultation: {
        title: 'Design Consultation',
        heading: 'Clear Design Direction Before Major Decisions Are Made',
        intro: 'Our consultation service gives clients focused professional guidance on planning, style, finishes, budgets and delivery priorities before committing to a complete scope.',
        benefits: ['Focused expert review', 'Faster design decisions', 'Practical budget priorities', 'A clear next-step roadmap'],
        included: ['Requirements review', 'Existing-space assessment', 'Layout recommendations', 'Material and colour direction', 'Budget priority guidance', 'Written action summary'],
        ideal: 'Clients beginning a project, reviewing an existing proposal or needing an independent second opinion.'
      },
      construction: {
        title: 'Construction Works',
        heading: 'Construction Managed With Interior Quality In Mind',
        intro: 'KPG coordinates structural, architectural and specialist construction work with the interior outcome planned from the start, reducing conflicts between shell and finish.',
        benefits: ['Sequenced site delivery', 'Technical trade coordination', 'Documented quality control', 'Transparent progress reporting'],
        included: ['Scope and buildability review', 'Structural and block works', 'Waterproofing and preparation', 'Architectural finishing works', 'Specialist subcontractor control', 'Inspection and completion records'],
        ideal: 'New-build interiors, extensions, major alterations and projects combining construction with fitout.'
      },
      renovation: {
        title: 'Renovation And Remodeling',
        heading: 'Existing Spaces Reworked For A Better Next Chapter',
        intro: 'KPG renovates residential and commercial properties with careful surveys, controlled demolition and coordinated upgrades that respect the building while improving performance.',
        benefits: ['Detailed existing-condition review', 'Controlled phased work', 'Services and finish upgrades', 'Reduced disruption planning'],
        included: ['Existing-condition survey', 'Strip-out and protection plan', 'Layout and services modifications', 'Finish and joinery renewal', 'Remedial construction works', 'Final testing and snagging'],
        ideal: 'Occupied homes, older properties, workplace refreshes and commercial spaces ready for a new use.'
      },
      visualization: {
        title: '2D And 3D Visualization',
        heading: 'See The Space Clearly Before Work Begins',
        intro: 'Accurate plans and realistic visualizations help clients understand scale, materials and atmosphere early, supporting faster approvals and more confident project decisions.',
        benefits: ['Accurate planning views', 'Realistic material previews', 'Faster stakeholder approvals', 'Fewer late design changes'],
        included: ['Measured-plan development', 'Furniture layout options', 'Key elevations and details', '3D spatial modeling', 'Photorealistic views', 'Coordinated revision rounds'],
        ideal: 'Residential, workplace, retail and hospitality projects requiring clear visual approval.'
      }
    },
    ar: {
      'interior-design': {
        title: 'التصميم الداخلي السكني',
        heading: 'تصميمات سكنية مبنية حول أسلوب حياتك',
        intro: 'تطور KPG مساحات سكنية مدروسة في الكويت، وتجمع تخطيط المساحة واختيار المواد والتفاصيل الفنية ضمن توجه تصميمي واضح.',
        benefits: ['تخطيط عملي للمساحة', 'مجموعات مواد متناسقة', 'أثاث ونجارة حسب الطلب', 'مستندات فنية واضحة'],
        included: ['دراسة المتطلبات والموقع', 'مخططات الأثاث والحركة', 'تطوير المفهوم والهوية', 'اختيار المواد والتشطيبات', 'تنسيق الإضاءة والأسقف', 'رسومات تفصيلية للتنفيذ'],
        ideal: 'الفلل الخاصة والشقق والمجالس وأعمال التجديد السكني الكامل.'
      },
      fitout: {
        title: 'التشطيبات التجارية',
        heading: 'تنفيذ منسق من المساحة الخام حتى التسليم',
        intro: 'تنفذ KPG حزم التشطيبات للمكاتب والتجزئة والضيافة، وتنسق المواد والنجارة وخدمات المبنى من خلال فريق واحد مسؤول.',
        benefits: ['برنامج واحد منسق', 'تكامل الأعمال والتخصصات', 'اعتمادات مواد منضبطة', 'فحوصات جودة منظمة'],
        included: ['رفع الموقع وتأكيد النطاق', 'الإنشاءات والقواطع', 'الأسقف والأرضيات والتشطيبات', 'تنسيق النجارة المخصصة', 'تكامل الأعمال الكهروميكانيكية', 'الاختبارات والملاحظات والتسليم'],
        ideal: 'المكاتب ومتاجر التجزئة ومشاريع الضيافة والعيادات والمساحات التجارية.'
      },
      consultation: {
        title: 'استشارات التصميم',
        heading: 'اتجاه تصميمي واضح قبل اتخاذ القرارات الرئيسية',
        intro: 'تمنح خدمة الاستشارة عملاءنا توجيها مهنيا مركزا حول التخطيط والأسلوب والمواد والميزانية وأولويات التنفيذ قبل اعتماد النطاق الكامل.',
        benefits: ['مراجعة مهنية مركزة', 'قرارات تصميم أسرع', 'أولويات عملية للميزانية', 'خريطة واضحة للخطوة التالية'],
        included: ['مراجعة المتطلبات', 'تقييم المساحة القائمة', 'توصيات التخطيط', 'توجيه المواد والألوان', 'ترتيب أولويات الميزانية', 'ملخص مكتوب للإجراءات'],
        ideal: 'العملاء في بداية المشروع أو عند مراجعة مقترح قائم أو الحاجة إلى رأي مهني مستقل.'
      },
      construction: {
        title: 'الأعمال الإنشائية',
        heading: 'إنشاءات تدار مع وضع جودة التصميم الداخلي في الاعتبار',
        intro: 'تنسق KPG الأعمال الإنشائية والمعمارية والمتخصصة مع تخطيط النتيجة الداخلية منذ البداية، لتقليل التعارض بين الهيكل والتشطيب.',
        benefits: ['تنفيذ متسلسل في الموقع', 'تنسيق فني للتخصصات', 'ضبط جودة موثق', 'تقارير تقدم واضحة'],
        included: ['مراجعة النطاق وقابلية التنفيذ', 'الأعمال الإنشائية والمباني', 'العزل وأعمال التجهيز', 'التشطيبات المعمارية', 'إدارة المقاولين المتخصصين', 'سجلات الفحص والإنجاز'],
        ideal: 'المساحات الجديدة والتوسعات والتعديلات الكبيرة والمشاريع التي تجمع الإنشاء والتشطيب.'
      },
      renovation: {
        title: 'الصيانة والتجديد',
        heading: 'إعادة تشكيل المساحات القائمة لفصل جديد أفضل',
        intro: 'تجدد KPG العقارات السكنية والتجارية عبر رفع دقيق وإزالة منضبطة وتحديثات منسقة تحترم المبنى وتحسن أداءه.',
        benefits: ['دراسة دقيقة للوضع القائم', 'أعمال مرحلية منضبطة', 'تحديث الخدمات والتشطيبات', 'تخطيط لتقليل التعطيل'],
        included: ['رفع الوضع القائم', 'خطة الإزالة والحماية', 'تعديل التخطيط والخدمات', 'تجديد التشطيبات والنجارة', 'أعمال المعالجة الإنشائية', 'الاختبارات والملاحظات النهائية'],
        ideal: 'المنازل المستخدمة والعقارات القديمة وتجديد المكاتب وتحويل استخدام المساحات التجارية.'
      },
      visualization: {
        title: 'التصور ثنائي وثلاثي الأبعاد',
        heading: 'شاهد المساحة بوضوح قبل بدء العمل',
        intro: 'تساعد المخططات الدقيقة والتصورات الواقعية العملاء على فهم المقياس والمواد والأجواء مبكرا، وتسرع الاعتمادات والقرارات.',
        benefits: ['مخططات دقيقة', 'معاينة واقعية للمواد', 'اعتمادات أسرع', 'تغييرات متأخرة أقل'],
        included: ['تطوير المخططات المقاسة', 'خيارات توزيع الأثاث', 'الواجهات والتفاصيل الرئيسية', 'النمذجة ثلاثية الأبعاد', 'مشاهد واقعية', 'جولات مراجعة منسقة'],
        ideal: 'المشاريع السكنية والمكاتب والتجزئة والضيافة التي تحتاج إلى اعتماد بصري واضح.'
      }
    }
  };

  const projects = {
    en: {
      'corporate-workspace': { title:'Corporate Workspace', category:'Commercial', year:'2026', heading:'A Focused Workplace Built For Collaboration', intro:'A calm, efficient workplace concept balancing focused work, team exchange and a polished client experience.', scope:'Interior design, fitout coordination, bespoke joinery and integrated lighting.', result:'A coherent workspace where material restraint, acoustic planning and precise detailing support the way the team works.' },
      'private-residence': { title:'Private Residence', category:'Residential', year:'2026', heading:'A Warm Home Shaped By Everyday Rituals', intro:'A tailored residential interior using warm texture, clear circulation and integrated storage to create an effortless daily environment.', scope:'Space planning, interior design, custom joinery, finishes and lighting coordination.', result:'A quiet, durable home with a consistent visual language and practical details embedded throughout.' },
      'retail-concept': { title:'Retail Concept', category:'Retail', year:'2026', heading:'A Retail Environment With A Clear Brand Rhythm', intro:'A flexible retail concept that uses lighting, display hierarchy and durable materials to guide customers naturally through the space.', scope:'Customer journey planning, interior concept, display joinery and fitout coordination.', result:'A distinctive customer experience that remains operationally practical and easy to adapt.' }
    },
    ar: {
      'corporate-workspace': { title:'مساحة عمل مؤسسية', category:'تجاري', year:'2026', heading:'مكان عمل مركز مصمم للتعاون', intro:'مفهوم هادئ وفعال يوازن بين العمل المركز والتعاون وتجربة العملاء الراقية.', scope:'تصميم داخلي وتنسيق التشطيبات ونجارة مخصصة وإضاءة متكاملة.', result:'مساحة عمل متناسقة تدعم أسلوب الفريق عبر المواد الهادئة والتخطيط الصوتي والتفاصيل الدقيقة.' },
      'private-residence': { title:'إقامة خاصة', category:'سكني', year:'2026', heading:'منزل دافئ تشكله تفاصيل الحياة اليومية', intro:'تصميم سكني مخصص يوظف الخامات الدافئة والحركة الواضحة والتخزين المدمج لخلق بيئة يومية مريحة.', scope:'تخطيط المساحة والتصميم الداخلي والنجارة المخصصة والتشطيبات وتنسيق الإضاءة.', result:'منزل هادئ ومتين بلغة بصرية متسقة وتفاصيل عملية موزعة في جميع المساحات.' },
      'retail-concept': { title:'مفهوم متجر', category:'تجزئة', year:'2026', heading:'بيئة تجزئة بإيقاع واضح للعلامة', intro:'مفهوم مرن يستخدم الإضاءة وتسلسل العرض والمواد المتينة لتوجيه العملاء بشكل طبيعي داخل المساحة.', scope:'تخطيط رحلة العميل والمفهوم الداخلي ونجارة العرض وتنسيق التشطيبات.', result:'تجربة مميزة للعملاء تحافظ على سهولة التشغيل وقابلية التغيير.' }
    }
  };

  const serviceMedia = {
    'interior-design': ['residential-living.jpg','materials-moodboard.jpg'],
    fitout: ['office-interior.jpg','interior-construction.jpg'],
    consultation: ['materials-moodboard.jpg','/assets/images/reference/h3-banner-8.png'],
    construction: ['interior-construction.jpg','construction-detail.jpg'],
    renovation: ['construction-detail.jpg','residential-detail.jpg'],
    visualization: ['visualization-design.jpg','/assets/images/reference/h3-banner-8.png']
  };
  const projectMedia = {
    'corporate-workspace': ['office-interior.jpg','office-collaboration.jpg','materials-moodboard.jpg','interior-lighting.jpg','construction-detail.jpg'],
    'private-residence': ['residential-living.jpg','residential-detail.jpg','materials-moodboard.jpg','/assets/images/reference/h3-banner-8.png','interior-lighting.jpg'],
    'retail-concept': ['retail-interior.jpg','retail-mall.jpg','hospitality-dining.jpg','architectural-lighting.jpg','interior-construction.jpg']
  };
  const mediaSource = name => name.startsWith('/') ? name : `/assets/images/content/${name}`;

  const labels = isArabic ? {
    home:'الرئيسية', services:'الخدمات', projects:'المشاريع', service:'تفاصيل الخدمة', project:'تفاصيل المشروع', benefits:'القيمة التي نقدمها', included:'ما تتضمنه الخدمة', suitable:'مناسبة لـ', faq:'الأسئلة الشائعة', help:'هل تحتاج إلى مساعدة؟', call:'تحدث مع KPG', details:'تفاصيل التصميم', result:'النتيجة', location:'الموقع', year:'السنة', category:'النوع', scope:'النطاق', more:'مشاريع أخرى', quote:'ابدأ مشروعك'
  } : {
    home:'Home', services:'Services', projects:'Projects', service:'Service detail', project:'Project detail', benefits:'Value We Deliver', included:'What Is Included', suitable:'Ideal For', faq:'Frequently Asked Questions', help:'Do You Need Help?', call:'Speak To KPG', details:'Design In Details', result:'The Result', location:'Location', year:'Year', category:'Category', scope:'Scope', more:'Explore Our Project Showcase', quote:'Start Your Project'
  };

  function renderService(item) {
    const navigation = Object.entries(services[locale]).map(([slug, service]) => `<a class="${slug === key ? 'is-active' : ''}" href="${pathBase}/services/${slug}/">${service.title}</a>`).join('');
    const media = serviceMedia[key];
    root.innerHTML = `
      <section class="inner-hero"><div><h1>${item.title}</h1><p><a href="${pathBase}/">${labels.home}</a><span>${isArabic ? '‹' : '›'}</span><a href="${pathBase}/services/">${labels.services}</a><span>${isArabic ? '‹' : '›'}</span>${labels.service}</p></div></section>
      <section class="sd-content"><div class="hx-wide sd-layout">
        <aside class="sd-sidebar"><span class="sd-sidebar__title">${isArabic ? 'خدمات أخرى' : 'Other Services'}</span><nav>${navigation}</nav><div class="sd-help"><img src="/assets/images/kpg-mark.svg" alt="KPG"><b>${labels.help}</b><a dir="ltr" href="tel:+96551226096">+965 5122 6096</a><a href="${pathBase}/contact/">${labels.call} <span>↗</span></a></div></aside>
        <article class="sd-article"><div class="hx-kicker">${item.title}</div><h2>${item.heading}</h2><p class="sd-lead">${item.intro}</p>
          <div class="sd-images"><img src="${mediaSource(media[0])}" alt="${item.title}"><img src="${mediaSource(media[1])}" alt="${item.title}"></div>
          <section class="sd-benefits"><h2>${isArabic ? `حلول ${item.title} يمكن التخطيط لها بثقة` : `${item.title} Clients Can Plan Around`}</h2><ul>${item.benefits.map(benefit => `<li>${benefit}</li>`).join('')}</ul></section>
          <section class="sd-included"><div><div class="hx-kicker">${labels.included}</div><h2>${labels.included}</h2></div><ul>${item.included.map(point => `<li>${point}</li>`).join('')}</ul></section>
          <section class="sd-timeline"><h2>${isArabic ? 'الجدول الزمني المعتاد للمشروع' : 'Common Project Timelines'}</h2><ul><li>${isArabic ? 'المفهوم والاعتمادات' : 'Concept and approvals'}</li><li>${isArabic ? 'المشتريات وتجهيز الموقع' : 'Procurement and site preparation'}</li><li>${isArabic ? 'التنفيذ والفحص والتسليم' : 'Delivery, inspection and handover'}</li></ul></section>
          <section class="sd-suitable"><h2>${isArabic ? 'نفس الفريق، نطاق مرن' : 'Same Team, Flexible Scope'}</h2><p>${item.ideal}</p><a href="${pathBase}/contact/">${labels.quote} <b>↗</b></a></section>
          <section class="sd-faq" data-exclusive-details><div class="hx-kicker">${labels.faq}</div><h2>${labels.faq}</h2><details open><summary>${isArabic ? 'كيف تبدأ العملية؟' : 'How does the process begin?'}</summary><p>${isArabic ? 'نبدأ بمراجعة المتطلبات ومعلومات الموقع والأولويات، ثم نؤكد النطاق والخطوة التالية.' : 'We begin by reviewing the brief, site information and priorities before confirming scope and the next step.'}</p></details><details><summary>${isArabic ? 'كيف يتم تحديد البرنامج؟' : 'How is the programme established?'}</summary><p>${isArabic ? 'يتم بناء البرنامج على النطاق والاعتمادات والمشتريات وإمكانية دخول الموقع.' : 'The programme is based on scope, approvals, procurement and site access.'}</p></details></section>
        </article>
      </div></section>`;
  }

  function renderProject(item) {
    const featureNotes = isArabic ? [
      ['تخطيط مساحات مرن', 'تنظيم الحركة والاستخدام اليومي بوضوح مع الحفاظ على قابلية المساحة للتغيير.'],
      ['خامات متناسقة', 'اختيار تشطيبات متينة ومتوازنة بصريا بما يناسب طبيعة المشروع.'],
      ['إضاءة متكاملة', 'تنسيق الإضاءة الطبيعية والمعمارية والوظيفية ضمن توجه واحد.'],
      ['تفاصيل مصممة للغرض', 'نجارة وعناصر خاصة تخدم التشغيل وتعزز الهوية الداخلية.']
    ] : [
      ['Flexible Space Planning', 'Clear circulation and purposeful zones keep the interior adaptable as needs change.'],
      ['Coordinated Materials', 'Durable finishes are balanced for performance, atmosphere and visual continuity.'],
      ['Integrated Lighting', 'Natural, architectural and task lighting are developed as one coordinated system.'],
      ['Purpose-Built Details', 'Bespoke joinery and considered touchpoints support daily use and reinforce identity.']
    ];
    const stats = isArabic ? [['320م²','المساحة'],['06','مناطق رئيسية'],['04','حزم عمل'],['12','أسبوعا']] : [['320M²','Area'],['06','Key Zones'],['04','Work Packages'],['12','Weeks']];
    const modes = isArabic ? ['الصور','قبل التنفيذ','الفيديو','جولة افتراضية'] : ['Photos','Before','Video','Virtual Tours'];
    const media = projectMedia[key];
    const relatedEntries = [...Object.entries(projects[locale]).filter(([slug]) => slug !== key), [key, item]];
    const related = relatedEntries.map(([slug, project]) => `<a href="${pathBase}/projects/${slug}/"><img src="${mediaSource(projectMedia[slug][0])}" alt="${project.title}"><span>${project.category}</span><h3>${project.title}</h3><small>${isArabic ? 'الكويت' : 'Kuwait'}<br>${project.year}</small></a>`).join('');
    root.innerHTML = `
      <section class="project-detail-hero"><p><a href="${pathBase}/">${labels.home}</a><span>${isArabic ? '‹' : '›'}</span><a href="${pathBase}/projects/">${labels.projects}</a></p></section>
      <article class="pd-content"><section class="pd-overview"><div class="hx-wide"><h1>${item.title}</h1><div class="pd-meta"><div><span>${isArabic ? 'الاستشاري' : 'Consultant'}</span><b>KPG</b></div><div><span>${isArabic ? 'نوع المشروع' : 'Project Type'}</span><b>${item.category}</b></div><div><span>${isArabic ? 'العميل' : 'Client'}</span><b>${isArabic ? 'خاص' : 'Private'}</b></div><div><span>${isArabic ? 'المدة' : 'Terms'}</span><b>${isArabic ? '12 أسبوعا' : '12 Weeks'}</b></div><div><span>${isArabic ? 'الاستراتيجية' : 'Strategy'}</span><b>${isArabic ? 'متكاملة' : 'Integrated'}</b></div><div><span>${labels.year}</span><b>${item.year}</b></div></div><img class="pd-cover" src="${mediaSource(media[0])}" alt="${item.title}"><section class="pd-design"><h2>${labels.details}</h2><div class="pd-design__copy"><h3>${item.heading}</h3><p>${item.intro} ${isArabic ? 'تمت دراسة العلاقات بين المناطق والخامات والإضاءة لضمان تجربة مترابطة وعملية.' : 'Spatial relationships, material transitions and lighting were studied together to create a practical, coherent experience.'}</p><p><b>${labels.scope}:</b> ${item.scope}</p></div><ul class="pd-features">${featureNotes.map(([title, copy]) => `<li><b>${title}:</b> ${copy}</li>`).join('')}</ul><div class="pd-stats">${stats.map(([value, name]) => `<div><b>${value}</b><span>${name}</span></div>`).join('')}</div></section><section class="pd-outcome"><h2>${isArabic ? 'نتيجة متميزة' : 'Incredible Result'}</h2><div class="pd-outcome__copy"><p>${item.result}</p><p>${isArabic ? 'تجتمع المواد والإضاءة والتفاصيل المخصصة ضمن مساحة هادئة قابلة للاستخدام اليومي والتطور مستقبلا.' : 'Materials, lighting and bespoke details work together in a calm environment designed for daily use and future change.'}</p></div><div class="pd-modes">${modes.map((mode, index) => `<button class="${index === 0 ? 'is-active' : ''}" type="button" data-project-view="${index}">${mode}</button>`).join('')}</div></section></div></section>
        <section class="pd-gallery"><div class="pd-gallery__track" data-project-track>${media.map((name, index) => `<img src="${mediaSource(name)}" alt="${item.title} ${isArabic ? 'تفصيل' : 'detail'} ${index + 1}">`).join('')}</div><div class="pd-gallery__controls"><button data-project-prev aria-label="${isArabic ? 'الصورة السابقة' : 'Previous image'}">←</button><span>01 / 05</span><button data-project-next aria-label="${isArabic ? 'الصورة التالية' : 'Next image'}">→</button></div></section>
        <section class="pd-related"><div class="hx-wide"><div class="hx-kicker">${isArabic ? 'مشاريع ذات صلة' : 'Related Projects'}</div><h2>${labels.more}</h2><div>${related}</div><a class="pd-related__quote" href="${pathBase}/contact/">${labels.quote} <span>↗</span></a></div></section>
      </article>`;
  }

  const item = type === 'service' ? services[locale][key] : projects[locale][key];
  if (!item) {
    root.innerHTML = `<section class="inner-hero"><div><h1>404</h1><p><a href="${pathBase}/">${labels.home}</a></p></div></section>`;
    return;
  }

  document.title = `${item.title} | Kuwait Premium Group`;
  if (type === 'service') renderService(item);
  else renderProject(item);

  const projectTrack = root.querySelector('[data-project-track]');
  if (projectTrack) {
    const pictures = [...projectTrack.children];
    const counter = root.querySelector('.pd-gallery__controls span');
    let active = 0;
    let timer;
    const render = () => {
      const step = pictures[0].getBoundingClientRect().width + (innerWidth < 768 ? 15 : 30);
      const direction = isArabic ? 1 : -1;
      projectTrack.style.transform = `translate3d(${direction * active * step}px,0,0)`;
      counter.textContent = `${String(active + 1).padStart(2, '0')} / ${String(pictures.length).padStart(2, '0')}`;
    };
    const go = value => { active = (value + pictures.length) % pictures.length; render(); };
    const play = () => { clearInterval(timer); if (!matchMedia('(prefers-reduced-motion: reduce)').matches) timer = setInterval(() => go(active + 1), 5000); };
    root.querySelectorAll('[data-project-view]').forEach(button => button.addEventListener('click', () => {
      root.querySelectorAll('[data-project-view]').forEach(option => option.classList.toggle('is-active', option === button));
      go(Number(button.dataset.projectView));
      play();
    }));
    root.querySelector('[data-project-prev]').addEventListener('click', () => { go(active - 1); play(); });
    root.querySelector('[data-project-next]').addEventListener('click', () => { go(active + 1); play(); });
    let startX = 0;
    projectTrack.addEventListener('pointerdown', event => { startX = event.clientX; clearInterval(timer); projectTrack.setPointerCapture?.(event.pointerId); });
    projectTrack.addEventListener('pointerup', event => { const delta = event.clientX - startX; if (Math.abs(delta) > 50) go(active + (delta < 0 ? 1 : -1)); play(); });
    addEventListener('resize', render);
    render();
    play();
  }

  root.querySelectorAll('img').forEach(image => { image.loading = 'lazy'; image.decoding = 'async'; });
  root.querySelectorAll('[data-exclusive-details] details').forEach(detail => detail.addEventListener('toggle', () => {
    if (!detail.open) return;
    detail.parentElement.querySelectorAll('details').forEach(other => { if (other !== detail) other.open = false; });
  }));
}());
