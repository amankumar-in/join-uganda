import Image from "next/image";
import Link from "next/link";
import RFEPhoneCarousel from '@/components/RFEPhoneCarousel';

export const metadata = {
  title: "The Engine of Change | Byamukama 2026",
  description: "Meet the technical leadership, platforms, and partnerships powering Uganda's digital transformation in the Byamukama 2026 campaign.",
  openGraph: {
    title: "The Engine of Change | Byamukama 2026",
    description: "Meet the technical leadership, platforms, and partnerships powering Uganda's digital transformation in the Byamukama 2026 campaign.",
    images: [
      {
        url: "https://byamukama2026.com/images/campaign-og-image.png",
        width: 1200,
        height: 630,
        alt: "Byamukama 2026 campaign"
      }
    ]
  }
};

export default function Campaign() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-white via-gray-50 to-gray-200 dark:from-black dark:via-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] flex items-end justify-center overflow-hidden">
        <Image
          src="/images/Henry-with-campaign-manager-joshua-landscape.jpeg"
          alt="Henry and Joshua working in office"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-transparent z-10" />
        <div className="relative z-20 flex flex-col items-center text-center px-4 w-full pb-12 md:pb-20" style={{marginTop: 'auto'}}>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
  The{' '}
  <span className="text-white drop-shadow-[0_0_10px_rgb(56,189,248)]">
    Engine
  </span> of Change
</h1>
          <div className="bg-black/60 p-6 mb-0 border-l-4 border-blue-400 rounded-lg shadow-xl max-w-2xl">
            <p className="text-white text-2xl font-medium">
              Where visionary leadership meets operational excellence. <p className="text-gray-400 text-xl font-small">Henry Byamukama and Joshua Samuel</p>
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 flex justify-start">
              <div className="relative w-full max-w-md aspect-square hidden lg:block">
                <Image src="/images/henry-color-portrait.jpeg" alt="Henry Byamukama" fill className="rounded-2xl shadow-2xl object-cover border-4 border-white dark:border-gray-900" />
              </div>
              <div className="block lg:hidden">
                <Image src="/images/henry-color-portrait.jpeg" alt="Henry Byamukama" width={400} height={500} className="rounded-2xl shadow-2xl object-cover border-4 border-white dark:border-gray-900" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-extrabold mb-6 text-black dark:text-white flex items-center">
                <span className="mr-3">Campaign Vision</span>
                <span className="inline-block w-2 h-2 rounded-full bg-blue-500" />
              </h2>
              <p className="text-xl text-gray-800 dark:text-gray-200 mb-8">
                The Byamukama 2026 campaign is driven by a vision of a Uganda that is modern, self-sufficient, and united. Our mission is to empower every Ugandan through transparent leadership, innovative solutions, and a relentless focus on real-world results.
              </p>
              <div className="p-6 rounded-xl shadow-md bg-white/80 dark:bg-gray-800/80">
                <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">A New Era of Progress</h3>
                <ul className="list-disc pl-5 text-gray-800 dark:text-gray-200 space-y-2 text-lg">
                  <li><span className="font-semibold">Education:</span> Every child in school, every talent nurtured.</li>
                  <li><span className="font-semibold">Poverty Alleviation:</span> No family left behind.</li>
                  <li><span className="font-semibold">Economic Growth:</span> Jobs, innovation, and opportunity for all.</li>
                  <li><span className="font-semibold">Youth Empowerment:</span> Skills, mentorship, and a future at home.</li>
                  <li><span className="font-semibold">Financial Inclusion:</span> Banking, credit, and insurance for every Ugandan.</li>
                  <li><span className="font-semibold">Infrastructure:</span> Roads, power, and water to connect the nation.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Six Pillars Section */}
      {/* <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-black dark:to-gray-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-200/30 rounded-full -mr-40 -mt-40 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-300/20 rounded-full -ml-40 -mb-40 blur-2xl" />
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">Six Pillars of Progress</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Our manifesto focuses on six key pillars for national renewal and transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Education",
                img: "/images/slider-agriculture.jpg",
                desc: "The cornerstone of national development, with increased funding from 8% to at least 15% of the budget, tackling dropout rates, and leveraging technology.",
              },
              {
                title: "Poverty Alleviation",
                img: "/images/henry-working-ground-level.jpeg",
                desc: "Creating sustainable pathways out of poverty through targeted interventions, community empowerment, and social protection systems.",
              },
              {
                title: "Economic Growth",
                img: "/images/economic-powerhouse.jpeg",
                desc: "Building a self-sufficient economy through industrialization, value addition, and supporting SMEs to create prosperity for all Ugandans.",
              },
              {
                title: "Youth Empowerment",
                img: "/images/joshua-closeup-portrait-square.jpg",
                desc: "Equipping our young population with skills, opportunities, and resources to become job creators and innovators in a digital economy.",
              },
              {
                title: "Financial Inclusion",
                img: "/images/uganda-economy.jpg",
                desc: "Expanding access to banking, credit, insurance, and digital financial services to all Ugandans regardless of location or income.",
              },
              {
                title: "Infrastructure",
                img: "/images/slider-infra.webp",
                desc: "Investing in roads, railways, electricity, and water systems to connect and power all of Uganda for sustained development.",
              },
            ].map((pillar) => (
              <div key={pillar.title} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl flex flex-col h-full border border-blue-100 dark:border-gray-700 hover:scale-[1.03] transition-transform">
                <div className="flex items-center mb-5">
                  <div className="h-16 w-16 rounded-xl overflow-hidden mr-4 shadow-lg border-2 border-blue-200 dark:border-blue-900">
                    <Image src={pillar.img} alt={pillar.title} width={64} height={64} className="object-cover w-full h-full" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-200">{pillar.title}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 flex-grow text-lg">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Technical Leadership Section */}
      <section className="py-20 bg-gray-100 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Image and quote */}
            <div className="flex-1 flex flex-col items-center md:items-start">
              <div className="relative w-full max-w-md mb-6">
                <Image src="/images/joshua-closeup-portrait-square.jpg" alt="Joshua Samuel" width={500} height={320} className="rounded-2xl shadow-2xl object-cover border-4 border-white dark:border-gray-900" />
              </div>
              <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 border-l-4 border-blue-500 pl-4 mb-4">
                "Technology is not just a tool—it's the bridge to Uganda's future."
              </blockquote>
              <span className="text-gray-500 text-sm">— Joshua Samuel, Campaign Manager & Tech Strategist</span>
            </div>
            {/* Credentials and roles */}
            <div className="flex-1 flex flex-col gap-6">
              <h2 className="text-3xl font-extrabold text-black dark:text-white mb-4 flex items-center">
                Technical Leadership
                <span className="inline-block w-2 h-2 rounded-full bg-blue-500 ml-3" />
              </h2>
              <p className="text-lg text-gray-800 dark:text-gray-200 mb-2">
                At the heart of the Byamukama campaign's digital transformation is <span className="font-semibold">Joshua Samuel</span>—a U.S.-based tech entrepreneur and the campaign's strategic partner for technology and innovation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-md flex flex-col items-start">
                  <span className="font-bold text-black dark:text-white mb-1">Founder</span>
                  <span className="text-gray-700 dark:text-gray-300">Coins for College (USA)</span>
                </div>
                <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-md flex flex-col items-start">
                  <span className="font-bold text-black dark:text-white mb-1">Co-founder</span>
                  <span className="text-gray-700 dark:text-gray-300">Rewards for Education (Uganda)</span>
                </div>
                <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-md flex flex-col items-start">
                  <span className="font-bold text-black dark:text-white mb-1">Global Connector</span>
                  <span className="text-gray-700 dark:text-gray-300">Bridging Uganda & international tech</span>
                </div>
                <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-md flex flex-col items-start">
                  <span className="font-bold text-black dark:text-white mb-1">Ethical Innovator</span>
                  <span className="text-gray-700 dark:text-gray-300">Championing transparency & scale</span>
                </div>
              </div>
              <div className="mt-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-inner">
                <p className="text-gray-800 dark:text-gray-200 text-base">
                  Joshua's expertise fuses technology with social impact, serving as a vital connector between Uganda and global stakeholders. His leadership ensures the campaign's vision is translated into real, scalable solutions for Uganda's future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards for Education Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black dark:text-white mb-2 flex items-center justify-center">
              Rewards for Education (RFE)
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 ml-3" />
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              A groundbreaking platform to securely host academic records and incentivize student achievement across Uganda.
            </p>
          </div>
          <div className="flex flex-col items-center mb-12">
            <RFEPhoneCarousel />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md flex flex-col justify-between">
              <h3 className="text-xl font-bold mb-3 text-black dark:text-white flex items-center">Key Features <span className="inline-block w-2 h-2 rounded-full bg-blue-500 ml-2" /></h3>
              <ul className="list-disc pl-5 text-gray-800 dark:text-gray-200 space-y-2 text-base">
                <li><strong>Incentive-Based Student Engagement:</strong> Students earn points for attendance and performance</li>
                <li><strong>Digital Academic Records (DocuLocker):</strong> Blockchain-secured transcripts and certificates</li>
                <li><strong>School & Administration Dashboard:</strong> Real-time monitoring of attendance and progress</li>
                <li><strong>Community and Sponsor Integration:</strong> Involving parents, businesses, and international sponsors</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md flex flex-col justify-start">
              <h3 className="text-xl font-bold mb-3 text-black dark:text-white flex items-center">Real-World Impact <span className="inline-block w-2 h-2 rounded-full bg-blue-500 ml-2" /></h3>
              <ul className="list-disc pl-5 text-gray-800 dark:text-gray-200 space-y-2 text-base">
                <li>Directly addresses <strong>42.8% dropout rate</strong> before P7 (primary leaving)</li>
                <li>Supporting the goal of <strong>15%+ education budget</strong> allocation</li>
                <li><strong>Government pilot launched</strong> with SIAS & Ministry of ICT</li>
                <li>Simplifies access to transcripts nationwide</li>
                <li>Fosters a culture of merit and achievement in academics</li>
              </ul>
            </div>
            <div className="md:col-span-2 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-inner mt-4">
              <p className="text-gray-800 dark:text-gray-200 text-base text-center">
                RFE is a national educational infrastructure project. Its emphasis on security, transparency, and inclusivity directly supports Byamukama's policy goals—creating an accountable education system that leaves no region or community behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain Technology Section */}
      {/* <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-10 w-1 bg-gray-800"></div>
            <h2 className="text-3xl md:text-4xl font-bold">Blockchain-Secured Records</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-xl">
                RFE incorporates cutting-edge blockchain technology to secure academic records. Each student's important documents – from term report cards to graduation diplomas – are stored in one safe online account and tagged with a unique QR code for instant verification.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-3">Benefits</h4>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Instant verification of credentials</li>
                  <li>Tamper-proof records that cannot be falsified</li>
                  <li>Elimination of bureaucratic delays</li>
                  <li>Prevention of document fraud or loss</li>
                  <li>Support for Uganda's digitization goals</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <Image src="/images/blockchain-infographic.jpg" alt="Blockchain Infographic" width={400} height={300} className="rounded-lg shadow-lg object-cover" />
            </div>
          </div>
        </div>
      </section> */}

      {/* Community Ecosystem Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-10 w-1 bg-gray-800"></div>
            <h2 className="text-3xl md:text-4xl font-bold">Community & Sponsor Ecosystem</h2>
          </div>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-3xl">
            The RFE platform creates a comprehensive ecosystem that involves all stakeholders in education, from students and parents to schools, businesses, and international partners.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "Parents & Social Workers", 
                img: "/images/parents.jpg", 
                desc: "Monitor attendance, support learning, and receive notifications about their child's progress." 
              },
              { 
                title: "Local Businesses & NGOs", 
                img: "/images/business.png", 
                desc: "Sponsor rewards and invest in Uganda's youth with full transparency on how contributions are used." 
              },
              { 
                title: "Schools & Educators", 
                img: "/images/schools.jpeg", 
                desc: "Track attendance trends and academic performance, allowing early intervention for at-risk students." 
              },
            ].map((item) => (
              <div key={item.title} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image src={item.img} alt={item.title} width={48} height={48} className="object-cover w-full h-full" />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Synergy Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-10 w-1 bg-gray-800"></div>
            <h2 className="text-3xl md:text-4xl font-bold">Synergy of Vision & Technology</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-xl">
                The collaboration between Henry Byamukama's visionary leadership and Joshua Samuel's technological acumen is yielding a powerful synergy. Byamukama's reform agenda sets the <strong>direction</strong>, while Joshua's RFE platform provides the <strong>means to reach those targets</strong>.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-3">A Blueprint for Change</h4>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Education Policy Meets EdTech</li>
                  <li>Administrative Streamlining and Transparency</li>
                  <li>Youth Empowerment and Digital Skills</li>
                  <li>Financial Inclusion and Incentives</li>
                </ul>
              </div>
              <blockquote className="border-l-4 border-gray-800 pl-4 italic text-gray-700 dark:text-gray-300 mt-6">
                "Ready-to-go reform—real solutions, not just promises."
              </blockquote>
            </div>
            <div className="flex justify-end">
              <Image src="/images/Henry-with-campaign-manager-joshua-portrait.jpeg" alt="Joshua and Henry" width={400} height={500} className="rounded-lg shadow-lg object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16 bg-gray-100 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-10 w-1 bg-gray-800"></div>
            <h2 className="text-3xl md:text-4xl font-bold">Transparency & Accountability</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-start">
              <Image src="/images/transparency.jpeg" alt="Transparency Dashboard" width={600} height={400} className="rounded-lg shadow-lg object-cover" />
            </div>
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-xl">
                Transparency, trust, and technological innovation are hallmarks of Henry Byamukama's campaign. By openly showcasing the RFE platform, the campaign is effectively "open-sourcing" its approach to reform – inviting scrutiny, feedback, and collaboration.
              </p>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-3">Building Trust</h4>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Open dashboards for real-time monitoring</li>
                  <li>Public reporting on progress and impact</li>
                  <li>Secure, ethical data management</li>
                  <li>Technology used to guarantee honesty and improve efficiency</li>
                  <li>Blockchain verification ensuring record authenticity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the Movement</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            As Uganda stands at the crossroads of 2026, the Byamukama campaign offers a roadmap to a future where transparency, trust, and technology empower the nation's greatest asset – its people – to reach new heights.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="
                bg-white
                text-black
                text-center
                py-4 px-8
                text-lg font-bold
                hover:bg-white/90
                transition
                rounded-md
              "
            >
              Get Involved
            </Link>
            <Link 
              href="/manifesto"
              className="
                bg-black/50
                backdrop-blur-md
                text-white
                text-center
                py-4 px-8
                text-lg font-bold
                hover:bg-black/70
                transition
                rounded-md
                border-2 border-white
              "
            >
              Read the Manifesto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
