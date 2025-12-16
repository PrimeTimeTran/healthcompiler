// APEX Magazine Profile Data
export interface ApexProfile {
  slug: string;
  name: string;
  image: string;
  title: string;
  subtitle?: string;
  intro: string;
  sections: {
    heading: string;
    content: string[];
  }[];
  category?: string;
}

export const apexProfiles: ApexProfile[] = [
  {
    slug: 'dr-sabina-singh',
    name: 'Dr. Sabina Singh',
    image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Image-800w.jpeg',
    title: 'Dr. Sabina Singh and Ken Strmiska built a healthcare revolution, serving thousands in just three years.',
    subtitle: 'From a dream in Milwaukee to a thriving DPC practice-',
    intro: 'Inspired by her childhood ambition and dedication to healthcare, Dr. Sabina Singh, MD along with her husband Ken Strmiska (COO) Founders of Anovia Health, has undertaken a revolutionary journey in her medical career. In a conversation with Mehul Agarwal, Founder of HealthCompiler, Dr. Singh shares the compelling story of her evolution from a determined sixth grader in Milwaukee, Wisconsin, to a key player in transforming the medical field.',
    sections: [
      {
        heading: 'The Spark That Ignited a Lifelong Passion',
        content: [
          "Sabina's story starts in a tight-knit Midwestern community, where she was raised surrounded by hardworking, passionate people. Her parents—her dad, an engineer, and her mom, a teacher—instilled in her a deep love for learning. As Indian-Americans, they cherished the values of community and service, which left a lasting impression on Sabina.",
          '"I decided very young, probably about sixth grade, that I was going to be a doctor," she recalls. This wasn\'t just a childhood dream—it was a commitment fueled by her family\'s belief in the power of community and service.'
        ]
      },
      {
        heading: 'Discovering Her True Calling: Family Medicine',
        content: [
          "Medical school wasn't just about absorbing knowledge for Sabina—it was where she truly found her passion. A pivotal summer externship with a family physician changed everything.",
          '"I liked the breadth of family medicine, the relationships, the chance to take care of a whole person, not just their symptoms," Sabina says.'
        ]
      },
      {
        heading: 'Struggling with a Broken System',
        content: [
          "Sabina's journey led her back to Green Bay, Wisconsin, where she joined Bellin Health. Over a span of 20 years, she climbed the ranks and became one of the first female physicians in the system. Despite her achievements, the flaws in the traditional healthcare system became evident.",
          '"Like many of my colleagues, I started to burn out," Sabina recalls. The administrative burdens piled up, the relentless pressure to see 20 to 25 patients daily, and the constant struggle to provide the care she wanted—it all took a toll.'
        ]
      },
      {
        heading: 'A Bold Leap: Reimagining Healthcare',
        content: [
          "At this pivotal moment, Sabina and her husband Ken began brainstorming a new approach to healthcare. They both recognized the inherent flaws in the traditional system and dreamed of creating something that could break through the barriers that hindered real care.",
          "The result? Direct Primary Care (DPC)—a model that eliminates insurance middlemen and allows doctors to work directly with patients or employers for a flat fee."
        ]
      },
      {
        heading: 'Launching Anovia Health',
        content: [
          "In May 2021, Anovia Health was officially launched. By August, their first clinic opened its doors. The idea was simple yet innovative: offer unlimited same-day or next-day appointments with no copays through partnerships with employers.",
          "Anovia Health didn't just grow—it thrived. In a matter of years, they expanded from zero patients to serving 20,000 to 25,000 people across eight near-site clinics and four on-site clinics."
        ]
      }
    ]
  },
  {
    slug: 'dr-hertz-s',
    name: 'Dr. Hertz',
    image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Regenrated-da0cf67e-800w.png',
    title: "Dr. Hertz's Leap: Reinventing Pediatric Care Through Direct Models",
    intro: '"Healthcare should prioritize patients - not systems," says Dr. Drew Hertz, pediatrician and founder of the Zest Pediatric Network. His journey from a corporate health executive to a direct care pioneer is a compelling example of how bold leadership can reshape the future of children\'s health.',
    sections: [
      {
        heading: 'A Pivotal Shift: Departing the System',
        content: [
          "Despite his senior position, Dr. Hertz felt a growing misalignment between his values and the direction of academic medical centers. Increasingly, these systems prioritized institutional goals over patient care.",
          "What had always brought him joy, supporting doctors in caring for patients, was no longer central to his work. This realization led him to leave his executive role and explore consulting."
        ]
      },
      {
        heading: 'Building the Zest Pediatric Network Vision',
        content: [
          "Inspired by the potential of direct care, Dr. Hertz set out to create something larger than a single practice: a sustainable ecosystem for pediatricians. This vision materialized as the Zest Pediatric Network.",
          "The MSO model supports clinicians by offloading business operations such as IT, marketing, legal, HR, accounting, inventory procurement, office setup, and lease negotiations."
        ]
      },
      {
        heading: 'Serving All Families: The Medicaid Initiative',
        content: [
          "One of Zest's most groundbreaking efforts is its Medicaid program. The network directly contracts with a Medicaid plan to offer services to families across the economic spectrum.",
          "Through the Medicaid partnership, Zest is working to empirically validate the model by measuring its impact on emergency room visits, urgent care use, well-child visits, and chronic disease management."
        ]
      }
    ]
  },
  {
    slug: 'allison-de-paoli',
    name: 'Allison De Paoli',
    image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/1656768758328-800w.jpeg',
    title: "Redefining Health Benefits: Allison's Passion-Driven Journey",
    intro: "In the evolving world of healthcare—where costs are skyrocketing, regulations are multiplying, and the system feels more confusing day by day, there are people who refuse to accept the status quo. Allison De Paoli from Altiqe is one of them. Her story isn't just about navigating the complexities of employee benefits; it's about a lifelong mission to make healthcare better for everyone.",
    sections: [
      {
        heading: 'A Legacy of Employee Benefits',
        content: [
          "Allison's journey began in South Florida, where her parents ran a boutique employee benefits consulting firm. Growing up in this environment, Allison got a front-row seat to the inner workings of the healthcare system.",
          "She saw how self-funded plans offered flexibility and control, allowing employers to create benefits that truly served their employees."
        ]
      },
      {
        heading: 'The Changing Face of Healthcare',
        content: [
          'Allison recalls a time when self-funded plans were simple and easy to understand. But as time went on, the system got more complicated.',
          '"It felt like there were more hands in the pot than ever before," Allison explains. "The system was becoming harder to navigate, and employers were struggling to keep up."'
        ]
      },
      {
        heading: 'A Mission to Fix the System',
        content: [
          "Frustrated by the problems she saw, Allison decided to take action. She knew the best way to fix the system was by working directly with employers.",
          "By helping them understand their options and use smarter strategies, she believed she could make a real impact."
        ]
      }
    ]
  },
  {
    slug: 'dr-garrison-bliss',
    name: 'Dr. Garrison Bliss',
    image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Garrison_bliss-800w.jpeg',
    title: 'Dr. Bliss and the Birth of Direct Primary Care',
    intro: '"You can commit yourself to a secure job that makes you hate your life, or you can do this." Dr. Garrison Bliss didn\'t stumble into Direct Primary Care. He built it, piece by piece, choice by choice, over decades of watching the system fail patients and physicians alike.',
    sections: [
      {
        heading: 'From Ideals to Reality',
        content: [
          "In school, doctors were taught to listen. Ask open-ended questions. Let patients tell their stories. But in the real-world clinic, appointments lasted ten minutes. Relationships took a backseat to volume.",
          "Still, Dr. Bliss might have stayed the course, until his own son developed a brain tumor. That experience changed him."
        ]
      },
      {
        heading: 'The First Steps Toward a New Model',
        content: [
          "In 1997, after realizing the primary care practice he led was likely to go underwater financially despite its popularity, Dr. Bliss and his colleagues made a bold move.",
          'The goal was simple, but radical: build healthcare that was far better, more accessible, and more humane than the status quo.'
        ]
      },
      {
        heading: 'A Message to the Next Generation',
        content: [
          '"You can commit yourself to what looks like a secure position, which will make you crazy and jaded, or you can do this. It may look like the risky option, but it\'s really the least risky option."',
          'He warned that success wouldn\'t come overnight. "Patients pick you. It takes time. Get used to it."'
        ]
      }
    ]
  },
  {
    slug: 'dr-brad',
    name: 'Dr. Brad Brown',
    image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Dr.+Brad+Brown-800w.jpg',
    title: "Dr. Brad's Vision: Revolutionizing Patient-Centered Healthcare",
    subtitle: 'Transforming primary care with innovation, transparency, and a focus on outcomes.',
    intro: "Healthcare is at a turning point, burdened by inefficiencies and rising costs. Dr. Brad, founder of Strive Direct Health and creator of the Aero DPC platform, is leading a bold transformation through the Direct Primary Care (DPC) model.",
    sections: [
      {
        heading: 'Eliminating Middlemen',
        content: [
          "By eliminating middlemen and administrative barriers, Dr. Brad empowers physicians to focus on patients, fostering trust, personalized care, and better outcomes.",
          "His approach redefines healthcare, emphasizing transparency, efficiency, and prevention while reducing costs."
        ]
      },
      {
        heading: 'Building the Future',
        content: [
          "Through Strive Direct Health and the Aero DPC platform, Dr. Brad is creating scalable solutions that help physicians transition to direct care models.",
          "His vision extends beyond individual practices to systemic change in how healthcare is delivered across America."
        ]
      }
    ]
  },
  {
    slug: 'dr-alex-bugg',
    name: 'Dr. Alex Bugg',
    image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Alex+bugg-800w.png',
    title: "Empowering Health: Dr. Alex Bugg's Vision for a Patient-Centered Future",
    intro: "In the complex landscape of American healthcare, where bureaucracy often overshadows patient care, a new paradigm is emerging. Direct Primary Care (DPC) stands at the forefront of this revolution. At the helm of this transformative movement is Dr. Alex Bugg, a visionary leader whose innovative approach at LevMed Health in St. Petersburg, Florida, is redefining the doctor-patient relationship.",
    sections: [
      {
        heading: 'The Genesis of a Healthcare Visionary',
        content: [
          "Dr. Bugg's journey from overcoming initial skepticism to championing a model that prioritizes quality over quantity is a blueprint for the future of healthcare delivery in America.",
          "His commitment to patient-centered care and innovative use of technology is reshaping how primary care is delivered."
        ]
      },
      {
        heading: 'Redefining the Doctor-Patient Relationship',
        content: [
          "At LevMed Health, patients receive unlimited access to their physician, longer appointments, and truly personalized care.",
          "This approach allows Dr. Bugg to focus on prevention and wellness rather than just treating symptoms."
        ]
      }
    ]
  },
  {
    slug: 'dr-diana-girnita',
    name: 'Dr. Diana Girnita',
    image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/channels4_profile-800w.jpg',
    title: 'Leading with Heart: How Dr. Diana Girnita is Transforming Specialty Care',
    intro: '"Healthcare should be simple, accessible, and human," says Dr. Diana Girnita, the pioneering founder and CEO of Rheumatologist OnCall. In an industry often paralyzed by bureaucracy, long wait times, and rising costs, Dr. Girnita is leading a revolutionary shift that puts patients back at the center of care.',
    category: 'REIMAGINE HEALTHCARE',
    sections: [
      {
        heading: 'An Exceptional Foundation',
        content: [
          "Removing hurdles such as insurance hurdles, providing clear pricing, and focusing on tailored treatment allows her to demonstrate that high-quality care is possible, affordable, accessible, and deeply human.",
          "Healthcare is about creating a system of care that does not work against patients but rather works for them for Dr. Girnita."
        ]
      },
      {
        heading: 'Rheumatologist OnCall',
        content: [
          "Through her direct specialty care model, patients can access rheumatology care without the typical months-long wait times.",
          "This innovative approach is proving that specialty care can be both accessible and affordable."
        ]
      }
    ]
  },
  {
    slug: 'dr-sara-pastoor',
    name: 'Dr. Sara Pastoor',
    image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Sara-J.-Pastoor.jpg-800w.webp',
    title: "Where Medicine Meets Mission: Dr. Sara Pastoor's Vision for Healthcare's Future",
    intro: "In the fast-paced world of modern healthcare, where efficiency often takes precedence over empathy and financial pressures shape priorities, the true essence of medicine feels at risk of being forgotten. Yet, amidst this turmoil, a determined voice is rising—a voice dedicated to restoring humanity to healthcare. That voice belongs to Dr. Sara Pastoor.",
    category: 'REIMAGINE HEALTHCARE',
    sections: [
      {
        heading: 'A Remarkable Spectrum',
        content: [
          "Dr. Pastoor's career spans a remarkable spectrum: from the structured discipline of military medicine to the integration of behavioral health, the innovative freedom of direct primary care, and the transformative potential of health technology.",
          "But her story is not just about professional milestones—it's about a mission to redefine healthcare as personal, meaningful, and rooted in relationships."
        ]
      }
    ]
  },
  {
    slug: 'dr.-jeff-panzer',
    name: 'Dr. Jeff Panzer',
    image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Jeff+photo+Oct+2021+%283%29-800w.jpg',
    title: "From Family Traditions to Transformative Care: Dr. Jeff Panzer's Medical Journey",
    intro: "Inspired by his father's legacy as a family doctor, Dr. Jeff Panzer has taken a transformative step in his career by embracing Direct Primary Care (DPC). In a conversation with Mohit Pande from Health Compiler, Dr. Panzer shares the inspiring story behind his transition from traditional medicine to a more patient-focused, relationship-driven approach.",
    category: 'REIMAGINE HEALTHCARE',
    sections: [
      {
        heading: 'The Roots of Healing',
        content: [
          "Growing up watching his father practice medicine shaped Dr. Panzer's understanding of what healthcare should be.",
          "His transition to DPC represents a return to those foundational values that define true medical care."
        ]
      }
    ]
  },
  {
    slug: 'dr-tanner-moore',
    name: 'Dr. Tanner Moore',
    image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Dr.+Tanner+Moore-800w.png',
    title: "From Serendipity to Healthcare Innovation: Dr. Tanner Moore's Journey to Direct Primary Care",
    intro: "In the dynamic landscape of healthcare, some paths are forged through meticulous planning, while others emerge from unexpected moments of serendipity. Dr. Tanner Moore's transition to becoming a Direct Primary Care (DPC) physician exemplifies this unique blend, illustrating how a single unforeseen event can reshape a career and the lives of countless patients.",
    category: 'REIMAGINE HEALTHCARE',
    sections: [
      {
        heading: 'A Chance Encounter',
        content: [
          "His story highlights the transformative power of bold decisions and personal experiences in revolutionizing healthcare delivery.",
          "Beginning with a chance encounter during a college cheerleading practice that not only prevented a serious injury but also catalyzed his journey into medicine."
        ]
      }
    ]
  },
  {
    slug: 'dr-vk',
    name: 'Dr. Vasanth Kainkaryam',
    image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Screenshot+2025-01-19+at+4.47.29-PM-800w.png',
    title: "Pioneering Patient-Centered Care: The Inspiring Journey of Dr. Vasanth Kainkaryam",
    intro: "When Dr. Vasanth Kainkaryam speaks about transforming healthcare, he draws from a deeply personal experience as a 17-year-old thyroid cancer patient navigating the complex American healthcare system. This early encounter, coupled with the challenges faced as the child of immigrants, molded his vision of what healthcare should aspire to be.",
    category: 'REIMAGINE HEALTHCARE',
    sections: [
      {
        heading: 'Personal Experience Shapes Vision',
        content: [
          '"I learned so much at a young age about primary insurance, secondary insurance, and medical billing," Dr. Kainkaryam reflects.',
          '"But most importantly, I experienced what it feels like when doctors take their time and make you feel safe – what is that magical feeling?"'
        ]
      }
    ]
  },
  {
    slug: 'dr-ben-aiken',
    name: 'Dr. Ben Aiken',
    image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Dr.+Ben+Aiken-800w.png',
    title: "Transforming Primary Care: Dr. Ben Aiken's Vision for a Healthcare Revolution",
    intro: "Healthcare stands at a pivotal crossroads. The current system, burdened by inefficiencies and profit-driven priorities, often falls woefully short of delivering what matters most: meaningful, patient-focused care. Yet, in the midst of this challenging landscape, one physician is daring to envision a better way. Dr. Ben Aiken, a pioneer in Direct Primary Care (DPC), has devoted his career to challenging the status quo.",
    category: 'COST SAVINGS ELEVATED',
    sections: [
      {
        heading: 'Challenging the Status Quo',
        content: [
          "Instead of fostering trust and healing, traditional models reduce patients to statistics and confine doctors to relentless cycles of brief appointments, endless paperwork, and burnout.",
          "Dr. Aiken is redefining what healthcare can and should be."
        ]
      }
    ]
  },
  {
    slug: 'david-contorno',
    name: 'David Contorno',
    image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/David+Contorno+-+Validation+institute-800w.png',
    title: 'The Shift Toward Self-Funded, DPC-First Healthcare: A Revolution in Patient-Centered Care',
    intro: "Healthcare is undergoing a transformative shift, moving away from outdated, inefficient models and embracing more sustainable, patient-centered alternatives. At the forefront of this healthcare revolution is David Contorno, a seasoned expert with over 30 years of experience in transforming the healthcare landscape.",
    category: 'COST SAVINGS ELEVATED',
    sections: [
      {
        heading: 'A Visionary Leader',
        content: [
          "As the Founder and President of E-Powered Benefits, David has become a vocal advocate for the self-funded, DPC-first model, challenging the traditional insurance system.",
          "He envisions a future where healthcare functions as an ecosystem—centered around transparency, quality care, and cost-efficiency."
        ]
      }
    ]
  },
  {
    slug: 'bryan-perry',
    name: 'Bryan Perry',
    image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Bryan-Perry-800w.jpg',
    title: "Enhancing Patient Care: Bryan's Vision for Data-Enhanced Direct Primary Care",
    intro: "In today's rapidly evolving healthcare landscape, innovative models like Direct Primary Care (DPC) and self-funded insurance are reshaping the way patients receive care and manage costs. Bryan Perry is a leading benefit advisor and a visionary in healthcare innovation.",
    category: 'COST SAVINGS ELEVATED',
    sections: [
      {
        heading: 'Data-Driven Innovation',
        content: [
          "These emerging approaches are redefining the doctor-patient relationship and offering promising alternatives to traditional healthcare practices.",
          "Bryan's insights reveal how data can enhance the DPC model and improve outcomes for both patients and employers."
        ]
      }
    ]
  },
  {
    slug: 'dr-william-burkhart',
    name: 'Dr. William Burkhart',
    image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Dr.+William+Burkhart-800w.png',
    title: 'Revolutionizing Primary Care with Technology: Ushering in a New Era of Patient-Centered Healthcare',
    intro: "In the dynamic world of healthcare, emerging models are reshaping traditional practices to tackle inefficiencies and enhance patient care. Direct Primary Care (DPC) is a groundbreaking approach that prioritizes patient-centered care, cost-effectiveness, and accessibility.",
    category: 'BENEFITS REDEFINED',
    sections: [
      {
        heading: 'The Rise of Primary Care',
        content: [
          "Under the Direct Primary Care (DPC) model, patients pay a regular monthly or annual fee directly to their primary care physician, bypassing conventional insurance methods for primary care services.",
          "This fee generally encompasses a wide range of services, including clinical visits, laboratory tests, consultations, and care coordination."
        ]
      }
    ]
  },
  {
    slug: 'monica-mckitterick',
    name: 'Monica McKitterick',
    image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Monica-800w.png',
    title: "From Solo Practitioner to Visionary CEO: Monica McKitterick's Success Story",
    intro: "As healthcare continues to evolve, the Direct Primary Care (DPC) model emerges as a shining example of innovation. Monica McKitterick, a family nurse practitioner and the founder of Impact Family Wellness, is at the forefront of this movement. With three thriving locations in the Austin area, a dedicated team and a growing patient base of 1800, Monica is redefining primary care.",
    category: 'BENEFITS REDEFINED',
    sections: [
      {
        heading: 'Building an Empire',
        content: [
          "Her approach is not just about building a successful practice but about reimagining the entire healthcare system to prioritize patient care and provider satisfaction.",
          "Monica's success demonstrates that DPC can scale while maintaining its core values."
        ]
      }
    ]
  },
  {
    slug: 'dr-grace',
    name: 'Dr. Grace Torres-Hodges',
    image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Headshot-SoMeDocs-GTH-20220903--e1662346848641-800w.jpg',
    title: "A Physician's Vision: Building a More Patient-Centric Direct Specialty Care Practice",
    intro: "In the midst of a profound transformation in healthcare, one visionary leader is paving the way for a more patient-centric future: Dr. Grace Torres-Hodges, podiatrist and foot surgeon. A passionate advocate of the direct care model, Dr. Torres-Hodges is at the forefront of a movement that prioritizes patient needs.",
    category: 'BENEFITS REDEFINED',
    sections: [
      {
        heading: 'The Impact of Direct Specialty Care',
        content: [
          "Her unique insights reveal how direct care is not only reshaping healthcare delivery but also revolutionizing the economic and operational frameworks that support the system.",
          "Dr. Torres-Hodges's groundbreaking contributions are transforming the evolving landscape of healthcare."
        ]
      }
    ]
  },
  {
    slug: 'dr-kristin-strange-s',
    name: 'Dr. Kristin Strange',
    image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Dr.+Kristin+Strange-800w.jpg',
    title: "Pioneering Change in Pediatric Care: Dr. Kristin Strange's Bold Shift to Direct Primary Care",
    intro: "In the rapidly changing healthcare landscape, where administrative hurdles frequently overshadow the essence of patient care, Dr. Kristin Strange's transition to Direct Primary Care (DPC) emerges as a groundbreaking model of innovation and hope.",
    category: 'STRENGTH IN CARE',
    sections: [
      {
        heading: 'From Bureaucracy to Brilliance',
        content: [
          "Her transformative journey not only redefines her approach to medicine but also serves as a powerful example for other healthcare professionals.",
          "Dr. Strange is helping others reconnect with the true spirit of their practice."
        ]
      }
    ]
  },
  {
    slug: 'dylan-gray',
    name: 'Dylan Gray',
    image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Dylan+Gray-800w.jpeg',
    title: 'Pioneering the Future of Healthcare: How Innovation in Direct Primary Care is Transforming Healthcare',
    intro: "Healthcare is undergoing a major shift. Traditional systems are struggling with high costs and frustrated patients, creating a demand for something better. That's where Direct Primary Care (DPC) comes in. One of the key figures driving this change is Dylan Gray, Director of DPC Relationships at Clearwater Benefits.",
    category: 'STRENGTH IN CARE',
    sections: [
      {
        heading: 'Pioneering Accessible Healthcare',
        content: [
          "Dylan has been passionate about the Direct Primary Care (DPC) model for years. His journey through the healthcare industry reflects the growth of DPC from an alternative approach to a mainstream healthcare solution.",
          "Dylan believes that accessible, affordable, and personalized healthcare is essential."
        ]
      }
    ]
  },
  {
    slug: 'andrew-roberts',
    name: 'Andrew Roberts',
    image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Andy+Photo+resized-800w.jpg',
    title: "Navigating the Evolution of Employee Benefits: Andrew Roberts' 30-Year Expedition",
    intro: "In an era where healthcare systems are rapidly evolving and costs are soaring, the role of employee benefits advisors has become increasingly critical. Andrew Roberts, with over 30 years of experience in this field, has navigated these complexities, guiding employers toward more effective and cost-efficient benefits solutions.",
    category: 'STRENGTH IN CARE',
    sections: [
      {
        heading: 'Transforming Benefits Management',
        content: [
          "From traditional insurance to data-driven strategies, Roberts has helped reshape the employee benefits landscape.",
          "His insights shed light on how modern direct care models are creating new opportunities for employers."
        ]
      }
    ]
  },
  {
    slug: 'dr-dunbar',
    name: 'Dr. Dunbar',
    image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/dunbar-800w.webp',
    title: "From Billing to Building Relationships: Dr. Siatta Dunbar's Journey to Starting her Own DPC",
    intro: "In the dynamic world of healthcare, the Direct Primary Care (DPC) model emerges as a revolutionary shift that promises to transform the patient-provider relationship. As Dr. Dunbar begins her exciting journey into DPC, she is poised to redefine how healthcare is delivered.",
    category: 'ENHANCED ACCESS',
    sections: [
      {
        heading: 'The Essence of Direct Primary Care',
        content: [
          "Moving away from the traditional fee-for-service model, Dr. Dunbar provides valuable insights into this new approach.",
          "Her perspective offers a comprehensive analysis for healthcare professionals considering the transition."
        ]
      }
    ]
  },
  {
    slug: 'jessica-mccartin',
    name: 'Jessica McCartin',
    image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Jessica-800w.jpg',
    title: "Revolutionizing Healthcare: Jessica's Journey from Burnout to Innovative Care",
    intro: "In a world where the healthcare system often feels overwhelmed by bureaucracy and impersonal interactions, Jessica stands out as a catalyst for change. Her journey from a frazzled family nurse practitioner, trapped in a high-volume practice, to a trailblazer in direct primary care (DPC) highlights the profound impact of resilience and innovation.",
    category: 'ENHANCED ACCESS',
    sections: [
      {
        heading: 'A Guiding Light',
        content: [
          "Jessica's story is not just about her personal transformation; it serves as a guiding light for healthcare professionals grappling with similar challenges.",
          "She offers insights into how to create a more compassionate, patient-centered approach to care."
        ]
      }
    ]
  },
  {
    slug: 'dakotah-asher',
    name: 'Dakotah Asher',
    image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/dakotah-800w.png',
    title: "Dakotah Asher, PA-C, RT (R) Journey from FFS grind to DPC's patient-centered design",
    subtitle: "Dakota's practice now thrives, with quality care where empathy lives.",
    intro: "In the heart of Tennessee, a quiet revolution in healthcare is taking place. At its center stands Dakota, a passionate physician assistant (PA) who has transformed her frustration with the traditional healthcare system into a thriving direct primary care (DPC) practice.",
    category: 'ENHANCED ACCESS',
    sections: [
      {
        heading: 'From Burnout to Breakthrough',
        content: [
          "Her story is not just one of personal triumph, but a beacon of hope for both healthcare providers and patients alike.",
          "She showcases a model that prioritizes quality care over quantity of patients seen."
        ]
      },
      {
        heading: 'The Path to Primary Care',
        content: [
          '"We\'re kind of forced to think that we all have to go to college immediately after we graduate," Dakota reflects.',
          '"There are really no other options, and if you don\'t go to college, you\'re looked at as not doing anything with your life."'
        ]
      }
    ]
  },
  {
    slug: 'matt-ohrt',
    name: 'Matt Ohrt',
    image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Matt+Ohrt+-800w.png',
    title: 'Matt Ohrt: Transforming Employer Healthcare from the Inside Out',
    intro: '"I realized companies don\'t view the purchase of their health plan or healthcare the same way they view any other purchase." That realization sent Matt Ohrt, a longtime HR leader who pivoted into healthcare innovation, on a mission to help employers buy better care.',
    category: 'ENHANCED ACCESS',
    sections: [
      {
        heading: 'From HR Leader to Healthcare Innovator',
        content: [
          "Matt had an almost 25-year career in HR leadership, working for large companies, mostly in manufacturing, including Toyota Motor Manufacturing.",
          "Through his work at Merrill Steel, his co-founding of Self-Fund Health, and new efforts like the Rise Up Health Plan, Matt has been building practical pathways employers can use."
        ]
      }
    ]
  },
  {
    slug: 'neer-patel',
    name: 'Neer Patel',
    image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Neer+Patel-800w.png',
    title: 'Transforming Healthcare Benefits: A Visionary Approach by Neer Patel',
    intro: "In the midst of an ever-evolving healthcare landscape, where rising costs and inefficiencies continue to challenge employers, Neer Patel stands as a trailblazer with a transformative vision for the future of health benefits. As the co-founder of Virtuous Benefits and a key player in the growth of DirectMed DPC, Patel is reshaping how businesses approach healthcare for their employees.",
    category: 'ENHANCED ACCESS',
    sections: [
      {
        heading: 'A Transformative Vision',
        content: [
          "His journey from helping his wife, Dr. Katriny Ikbal, launch DirectMed DPC to creating innovative self-funded insurance models demonstrates the power of creativity and collaboration.",
          "A patient-centric approach is key to overcoming the challenges of the broken healthcare system."
        ]
      }
    ]
  },
  {
    slug: 'dr-jeffrey-hockings',
    name: 'Dr. Jeffrey Hockings',
    image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Dr.+Jeff+Headshot-800w.jpg',
    title: "Dr. Hockings's Mission: Reversing Type 2 Diabetes Through a Patented, Virtual Model",
    intro: "For Dr. Jeffrey Hockings, the fight against diabetes began at home. He watched both his aunt and his father-in-law suffer and eventually lose their lives to complications from Type 2 Diabetes. The grief was heavy, but it also planted a conviction: there had to be a better way.",
    category: 'ENHANCED ACCESS',
    sections: [
      {
        heading: 'From Personal Tragedy to a Patented Solution',
        content: [
          "What started as a homegrown effort has grown into the Diabetes Reversal Group (DRG), a patented and nationally scalable program built for one purpose: to help people reverse Type 2 Diabetes.",
          "Fifteen years ago, Dr. Hockings and his wife looked at the landscape of care and noticed something striking. While mainstream medicine had resigned itself to managing Type 2 Diabetes with a lifetime of medications, no one was building a true path to reversal."
        ]
      }
    ]
  },
  {
    slug: 'dr-maryal-concepcion',
    name: 'Dr. Maryal Concepcion',
    image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Maryal+Concepcion-800w.jpg',
    title: "Dr. Maryal Concepcion Journey: From Corporate Chaos to Caring Hands",
    intro: "Dr. Maryal Concepcion, MD, FAAFP (Fellow of the American Academy of Family Physicians), is a Filipinx family doctor with a passion to fix the problems in healthcare. As the Owner and CEO of Big Trees MD in Calaveras County, California, and the host of the My DPC Story podcast, she's proving that medicine can be personal, affordable, and focused on the patient.",
    category: 'ENHANCED ACCESS',
    sections: [
      {
        heading: 'Revolutionizing Healthcare',
        content: [
          "Her path is one of courage, rediscovery, and a strong commitment to revolutionizing healthcare.",
          "Through her podcast, she shares stories of other DPC practitioners and helps spread the movement."
        ]
      }
    ]
  },
  {
    slug: 'dr-raymond-kordonowy',
    name: 'Dr. Raymond Kordonowy',
    image: 'https://lirp.cdn-website.com/c9f7398c/dms3rep/multi/opt/Dr.+Raymond+Kordonowy-800w.png',
    title: "Direct, Transparent, and Personal: Inside Dr. Raymond Kordonowy's Approach to Care",
    intro: "From his early training to a pioneering practice in Florida, Dr. Raymond Kordonowy has built a career around challenging the status quo. Among the first physicians to experience hospital employment during the HMO boom, he saw firsthand how bureaucracy and third-party payers compromised patient care.",
    category: 'ENHANCED ACCESS',
    sections: [
      {
        heading: 'Creating His Own Path',
        content: [
          "Rather than accepting the system, he created his own path, developing a membership-based model that blends Direct Primary Care with inpatient advocacy, technology, and radical transparency.",
          "He envisions a future of healthcare that belongs to independent physicians reclaiming their profession."
        ]
      }
    ]
  }
];

// Helper to get profile by slug
export const getProfileBySlug = (slug: string): ApexProfile | undefined => {
  return apexProfiles.find(profile => profile.slug === slug);
};
