import Image from "next/image";
import Link from "next/link";

export default function Manifesto() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/uganda-landscape.jpg"
            alt="Ugandan landscape"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Election Manifesto</h1>
            <p className="text-xl text-white/90">Priority Policies for Transformation</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-12">
              <div className="md:col-span-2">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  <strong>Henry B. Katabazi's manifesto is built on six key pillars of national renewal:</strong> Education, Poverty Alleviation, Economic Growth, Youth Empowerment, Financial Inclusion, and Infrastructure.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  These priority areas correspond to the urgent needs of Uganda today and the aspirations of its people. Each pillar of this policy platform is grounded in factual analysis of the current situation and underpinned by practical, evidence-based proposals for reform.
                </p>
              </div>
              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <Image
                  src="/images/slider-conference.jpg"
                  alt="SIAS Uganda team coordinating sustainable development initiatives"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-12">
              <h2 className="text-xl font-bold mb-4">Manifesto Pillars</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link href="#education" className="bg-white dark:bg-gray-700 p-3 rounded-md hover:bg-primary hover:text-white transition-colors">
                  1. Education
                </Link>
                <Link href="#poverty" className="bg-white dark:bg-gray-700 p-3 rounded-md hover:bg-primary hover:text-white transition-colors">
                  2. Poverty Alleviation
                </Link>
                <Link href="#economy" className="bg-white dark:bg-gray-700 p-3 rounded-md hover:bg-primary hover:text-white transition-colors">
                  3. Economic Growth
                </Link>
                <Link href="#youth" className="bg-white dark:bg-gray-700 p-3 rounded-md hover:bg-primary hover:text-white transition-colors">
                  4. Youth Empowerment
                </Link>
                <Link href="#finance" className="bg-white dark:bg-gray-700 p-3 rounded-md hover:bg-primary hover:text-white transition-colors">
                  5. Financial Inclusion
                </Link>
                <Link href="#infrastructure" className="bg-white dark:bg-gray-700 p-3 rounded-md hover:bg-primary hover:text-white transition-colors">
                  6. Infrastructure
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section bg-gray-100 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                <span className="font-bold">1</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Education – Quality Education for Every Child</h2>
            </div>
            
            <div className="pl-16">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Context</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Education is the cornerstone of national development, yet Uganda's education system faces severe challenges. Nearly 42.8% of pupils who start primary school do not complete Primary 7, with dropout rates especially high among girls (almost 46% drop out before P7 due to factors like early marriage and lack of sanitary support).
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Uganda's government spending on education is only 8.4% of the national budget, far below the international benchmark of 15–20%, resulting in overcrowded classrooms, underpaid teachers, and insufficient learning materials. Many schools lack electricity and clean water. The COVID-19 pandemic further set back educational attainment, especially for rural and low-income families.
                </p>
              </div>

              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Henry Katabazi envisions an Uganda where every child – boy or girl, rich or poor, urban or rural – can access quality education up to the tertiary level. An educated populace will drive innovation, civic values, and economic prosperity. To achieve this, education must be prioritized in national policy and budget allocations. Katabazi's government will treat education as a strategic investment, not just an expense.
              </p>

              <h3 className="text-2xl font-bold mb-4">Key Policy Proposals in Education</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Boost Education Funding</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Increase education expenditure to at least 15% of the national budget over the next 5 years, moving towards the global recommendation of 20%. This enhanced funding will be directed to building more classrooms, hiring and training teachers, and providing learning materials.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Tackle Dropout and Improve Access</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Launch a national campaign to end primary school dropout. This includes scaling up school feeding programs and providing sanitary pads and separate latrines for girls to make schools more girl-friendly.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Enhance Quality of Education</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Improve the quality and relevance of education by investing in teacher training and motivation. Teachers will receive regular in-service training in modern pedagogies and fair, timely compensation.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Leverage Technology & Innovation</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Embrace innovative solutions to leapfrog educational challenges. Under Henry Katabazi's leadership, Uganda will expand programs like the Rewards for Education app on a national scale.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-8">
                <h4 className="text-xl font-bold mb-3">Higher Education and Skills</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  While fixing primary and secondary education, we will also reform higher education and vocational training. Katabazi's government will expand vocational institutes in all regions, aligning courses with market needs (e.g. agribusiness, construction, ICT, healthcare).
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  We will provide incentives (scholarships, grants) for students enrolling in STEM fields and critical professions like medicine and teaching. Partnering with private sector and international universities, we aim to create centers of excellence in technology and research.
                </p>
              </div>

              <div className="bg-primary text-white p-6 rounded-lg">
                <p className="text-lg">
                  By implementing these measures, we aim to raise Uganda's literacy rate and educational attainment dramatically over the next decade, ensuring that the country's youthful population is an asset rather than a lost opportunity. An educated child today is a productive citizen tomorrow – Henry Katabazi's education plan secures that future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Poverty Alleviation Section */}
      <section id="poverty" className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                <span className="font-bold">2</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Poverty Alleviation – Lifting Families Out of Poverty</h2>
            </div>
            
            <div className="pl-16">
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Context</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Despite some economic gains in recent years, poverty remains widespread in Uganda. According to the latest household survey, about 20.3% of Ugandans live below the national poverty line. The picture is even starker by international standards – roughly 42% of Ugandans survive on less than $2.15 a day, indicating high levels of extreme poverty.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Poverty is concentrated in rural areas (where subsistence farming is prevalent) and among vulnerable groups such as women-headed households, people with disabilities, and the youth. Regional disparities are significant – for instance, parts of northern and eastern Uganda lag behind central Uganda on poverty metrics due to historical conflicts and less investment.
                </p>
              </div>

              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Henry Katabazi believes no Ugandan should live in extreme poverty in a country blessed with abundant fertile land, resources, and hardworking people. The goal of his presidency will be to eradicate extreme poverty and substantially lower the national poverty rate through empowering communities, equitable growth, and direct support to those in need.
              </p>

              <h3 className="text-2xl font-bold mb-4">Key Policy Proposals in Poverty Alleviation</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Strengthen Social Safety Nets</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Establish a robust Social Protection System that supports the poorest and most vulnerable citizens. Henry Katabazi will introduce a conditional cash transfer program for extremely poor households.
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Community Development Funds</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    We will revitalize and properly fund the Parish Development Model (PDM) to truly transform rural livelihoods. Under Katabazi's leadership, the government will release the committed UGX 100 million per parish annually in full and on schedule.
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Agriculture and Rural Livelihoods</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Since the majority of Uganda's poor are rural farmers, agricultural transformation is central to poverty reduction. Katabazi's plan will empower the subsistence farmer to become a surplus producer with a decent income.
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Job Creation and Inclusive Growth</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    The most sustainable route out of poverty is through decent jobs and livelihoods. Our poverty alleviation plan includes fostering labor-intensive industries, supporting small and medium enterprises, and investing in infrastructure.
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-8">
                <h4 className="text-xl font-bold mb-3">Special Programs for Vulnerable Groups</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Certain groups require tailored support. For women in poverty, we will strengthen programs that give seed capital and training to women entrepreneurs and enforce women's land rights (so widows and single mothers aren't evicted from family land).
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  For the youth, expanded vocational training and apprenticeship schemes will directly target unemployed youth in slums and villages, turning them into skilled workers. For persons with disabilities (PWDs), public facilities and programs will be made more accessible, and inclusive education/workplace policies enforced.
                </p>
              </div>

              <div className="bg-primary text-white p-6 rounded-lg">
                <p className="text-lg">
                  With this multi-pronged approach, poverty in Uganda can be decisively reduced. By 2026, we aim to lift at least 1 million Ugandans out of extreme poverty and put the country on track to eradicate extreme poverty by 2030. Henry Katabazi has seen poverty firsthand in his charitable work, and he brings a compassionate yet practical resolve: we will not rest until the dignity of every Ugandan is upheld through freedom from want.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Growth Section */}
      <section id="economy" className="section bg-gray-100 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                <span className="font-bold">3</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Economic Growth – Prosperity Through Innovation and Equity</h2>
            </div>
            
            <div className="pl-16">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Context</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Uganda's economy has potential for robust growth, but it has not always translated into broad-based prosperity. In recent times, the economy has been recovering from pandemic setbacks – expanding by about 4.6% in 2023 according to African Development Bank estimates.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Uganda's GDP stands at roughly 64 billion USD, with a GDP per capita of about $1,300 only – which classifies us still as a low-income country. To achieve middle-income status (approx $4,000 per capita), much faster growth and structural transformation are needed.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Key sectors: agriculture (employs ~70% of population but contributes only ~24% of GDP), services (especially trade, telecom, banking, tourism) and a nascent industrial sector (manufacturing is around 15% of GDP).
                </p>
              </div>

              <div className="relative h-[200px] rounded-lg overflow-hidden mb-8">
                <Image
                  src="/images/uganda-economy.jpg"
                  alt="Economic activity in Uganda"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Henry Katabazi is committed to building a prosperous Uganda with a diversified, modern economy that creates jobs and raises the standard of living for all citizens. The goal is to achieve "Uganda Vision 2040" and beyond – transforming Uganda into a competitive upper-middle-income country in the next two decades.
              </p>

              <h3 className="text-2xl font-bold mb-4">Key Policy Proposals for Economic Growth</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Industrialization and Value Addition</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    We will pursue an aggressive industrialization policy. Instead of exporting raw materials and importing finished goods, Uganda must start making products at home. Henry Katabazi's government will establish Industrial Parks in every region.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Support for Small and Medium Enterprises</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    SMEs are the lifeblood of Uganda's economy. Katabazi's administration will launch a UGX 1 trillion SME Development Fund, working with banks and microfinance institutions to provide affordable loans to small businesses.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Agricultural Commercialization</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Beyond subsistence, we will create an environment for commercial agriculture and agro-business to thrive. This involves improving rural infrastructure so that farmers can get produce to market without spoilage or extortionate transport costs.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Tourism and Services Sector Growth</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Uganda, the "Pearl of Africa," has enormous untapped potential in tourism. Katabazi's plan will aggressively market Uganda as a top safari and cultural destination. We will improve tourism infrastructure with a goal to double tourist arrivals in five years.
                  </p>
                </div>
              </div>

              <div className="bg-primary text-white p-6 rounded-lg">
                <p className="text-lg">
                  Through these measures, Uganda's economy can enter a new era of prosperity. Henry Katabazi's economic strategy is essentially about unleashing the entrepreneurship and hard work of Ugandans by giving them the right support and environment. By focusing on both big-picture industrial growth and the vitality of small businesses, the plan ensures that everyone has a stake in the economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Youth Empowerment Section */}
      <section id="youth" className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                <span className="font-bold">4</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Youth Empowerment – Unlocking the Potential of Our Young Population</h2>
            </div>
            
            <div className="pl-16">
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Context</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Uganda is one of the youngest countries in the world. Over 75% of Uganda's population is below the age of 30, and the median age is just about 16 years. This "youth bulge" presents both a tremendous opportunity and a pressing challenge.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Many young Ugandans today face hardship: youth unemployment (even by a narrow definition) stands around 13.3% – one of the highest rates globally – and underemployment is rampant, with an estimated 83% of young people not engaged in stable formal employment.
                </p>
              </div>

              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Henry Katabazi views youth not as a problem to be solved, but as the solution to many of Uganda's problems. His vision is for a country where young people are educated, skilled, actively involved in civic life, and gainfully employed – essentially, where youth are creators of wealth and drivers of positive change.
              </p>

              <h3 className="text-2xl font-bold mb-4">Key Policy Proposals for Youth Empowerment</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Skills Development and Vocational Training</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Recognizing that not every youth will pursue a university education, we will massively expand vocational and technical training opportunities. This includes establishing at least one vocational training institute in every district (or cluster of districts).
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Youth Entrepreneurship and Start-ups</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    To support the entrepreneurial spirit among Ugandan youth, Katabazi's government will create a Youth Enterprise Development Fund (YEDF). This fund will provide startup capital to youth-led businesses and innovative start-ups at low interest or as matching grants.
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Job Creation and Youth Employment Programs</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    One initiative will be the "1 Million Jobs Plan", which outlines how various sectors can absorb young workers. For immediate impact, Henry Katabazi will roll out a nationwide Public Works Program for Youth – engaging young men and women in public service projects.
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Youth Inclusion in Governance</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Henry Katabazi strongly believes in "nothing about youth without youth." In his administration, young people will have a voice at the highest levels. We will create formal youth representation bodies with at least 30% of appointed positions in government commissions and committees reserved for qualified youth.
                  </p>
                </div>
              </div>

              <div className="bg-primary text-white p-6 rounded-lg">
                <p className="text-lg">
                  Uganda's youth are brimming with potential – we see it in the creative arts scene, in tech innovations, in youth-led community projects making a difference. Under Henry Katabazi's leadership, this potential will be unlocked at scale. The vision is that in a few years, a Ugandan youth will have no need to risk their life on illegal migration or feel hopeless about unemployment; instead, they will find opportunity at home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Inclusion Section */}
      <section id="finance" className="section bg-gray-100 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                <span className="font-bold">5</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Financial Inclusion – Banking the Unbanked for Development</h2>
            </div>
            
            <div className="pl-16">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Context</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  In Uganda, a large portion of the population remains outside the formal financial system. Many citizens do not have bank accounts, access to credit, or insurance, especially in rural areas.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  On the positive side, the advent of mobile money in the past decade has revolutionized financial inclusion – as of 2020, Uganda had 18.9 million active mobile money users, representing about 68% of the adult population using mobile financial services. However, formal banking penetration remains much lower.
                </p>
              </div>

              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Henry Katabazi envisions a Uganda where every citizen has the tools to manage and grow their finances securely – a bank or mobile account to save money, the ability to borrow at fair rates when needed, and the means to invest in their future. Financial inclusion underpins entrepreneurship, agricultural productivity, and household resilience.
              </p>

              <h3 className="text-2xl font-bold mb-4">Key Policy Proposals for Financial Inclusion</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Digital Finance and Mobile Money Expansion</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    We will support and regulate the digital finance ecosystem to expand innovative services. Mobile money providers will be encouraged to develop more products such as micro-savings, micro-loans, and micro-insurance accessible via phone.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Bank the Unbanked – Outreach and Simplified Accounts</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    One policy is the promotion of "no-frills" bank accounts – simple savings accounts with zero or very low minimum balance and no monthly fees – so that any person can open an account without onerous requirements.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Affordable Credit and Microfinance</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Access to credit is a major hurdle for small businesses and farmers. Under Katabazi's leadership, government will facilitate the creation of a Microfinance Fund that lends wholesale to microfinance institutions and SACCOs, enabling them to on-lend to final borrowers at lower interest.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Financial Literacy and Trust-Building</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    One major barrier is low financial literacy and distrust. Henry Katabazi's campaign will implement a National Financial Literacy Programme, working with schools, churches, and media. Financial education will be incorporated into school curricula.
                  </p>
                </div>
              </div>

              <div className="bg-primary text-white p-6 rounded-lg">
                <p className="text-lg">
                  By implementing these strategies, we anticipate not only a boost in the percentage of Ugandans using formal financial services (with a target to surpass 80% by the end of Henry's first term), but also tangible improvements in economic activity. When people can save safely, they build assets; when they can borrow, they invest and expand businesses; when they have insurance, they are resilient to shocks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section id="infrastructure" className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                <span className="font-bold">6</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Infrastructure Development – Building Foundations for Growth</h2>
            </div>
            
            <div className="pl-16">
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Context</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Infrastructure is the backbone of development – without roads, electricity, water, and connectivity, none of the above goals can be achieved. Uganda has made progress in recent years, but still faces a significant infrastructure deficit.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  The country has about 21,000 km of national roads, but only around 6,850 km are paved (tarmac). This means roughly only 7% of all roads in Uganda are paved, with many communities connected only by dirt roads that become impassable in heavy rain.
                </p>
              </div>

              <div className="relative h-[200px] rounded-lg overflow-hidden mb-8">
                <Image
                  src="/images/slider-infra.webp"
                  alt="Infrastructure development in Uganda"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Henry Katabazi's vision is to accelerate infrastructure development to connect and power all of Uganda, laying a strong foundation for economic growth and social well-being. This means having good roads to every major town and trading center, electricity in every village, safe drinking water for every community, and affordable internet access for all learners and businesses.
              </p>

              <h3 className="text-2xl font-bold mb-4">Key Policy Proposals for Infrastructure</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Roads and Transport</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Katabazi's government will embark on an ambitious roads program, aptly named "Connect Uganda". The target will be to pave at least 1,000 km of roads per year, focusing on critical highway corridors and tourism circuits, as well as upgrading important district roads.
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Railways and Regional Connectivity</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    To truly transform transport costs, railway development is key. The Katabazi administration will prioritize the Standard Gauge Railway (SGR) project to connect Kampala to the Kenyan coast (Mombasa) through Malaba, working closely with Kenya to synchronize timelines.
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Electricity and Energy</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Henry Katabazi's goal is universal access to electricity by 2030. To achieve this, we will use a multi-pronged approach: expand the grid and pursue off-grid solutions simultaneously. The major hydropower projects coming online give us generation capacity, so now the focus must be on grid extension.
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Water, Sanitation, and Health Infrastructure</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Access to clean water is a basic right and key to public health. Katabazi's plan is to ensure every village has a source of safe water within a reasonable distance. We will do this by drilling more boreholes (wells) and building protected springs and rainwater harvesting systems in rural areas.
                  </p>
                </div>
              </div>

              <div className="bg-primary text-white p-6 rounded-lg">
                <p className="text-lg">
                  By undertaking this comprehensive infrastructure agenda, Uganda will be setting the stage for long-term economic takeoff. Improved roads will cut travel times and vehicle operating costs. Reliable electricity will attract factories and enable children to study at night. Clean water will reduce diseases, improving productivity and saving lives. Infrastructure opens the door to so many other improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Building a Better Uganda</h2>
            <p className="text-lg mb-8">
              This manifesto is our roadmap to a transformed Uganda. With your support, we can turn these plans into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 text-center"
              >
                Get Involved
              </Link>
              <Link 
                href="/about"
                className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 text-center border-2 border-white"
              >
                About Henry Katabazi
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 