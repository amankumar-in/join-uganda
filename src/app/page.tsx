import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/images/pastor-henry-silhouette-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-block bg-secondary/90 px-4 py-2">
              <p className="text-xl font-medium text-primary">PRESIDENTIAL CAMPAIGN 2026</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              FORWARD <span className="text-secondary">UGANDA</span>
            </h1>
            <div className="bg-black/40 p-4 mb-8 border-l-4 border-secondary">
              <p className="text-white italic text-xl">
                "I am not running against our past, I am running towards our future."
              </p>
              <p className="text-white text-lg mt-2">— Henry Byamukama Katabazi</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/manifesto"
                className="bg-secondary text-primary text-center py-4 px-8 text-lg font-bold hover:bg-opacity-90 transition-all rounded-md"
              >
                Read His Vision
              </Link>
              <Link 
                href="/contact"
                className="bg-white text-black text-center py-4 px-8 text-lg font-bold hover:bg-opacity-90 transition-all rounded-md"
              >
                Join the Movement
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Faith, Service, and a Bold Vision</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Henry Katabazi offers Ugandans a future of hope, unity, and sustainable development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Faith</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Grounded in Christian values of integrity and compassion, Henry Katabazi has preached unity and led by example through community outreach programs.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Service</h3>
              <p className="text-gray-700 dark:text-gray-300">
                As a pastor, philanthropist, media executive, and social entrepreneur, Henry has dedicated his life to uplifting others.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Leadership</h3>
              <p className="text-gray-700 dark:text-gray-300">
                With 30+ years of leadership experience at community and international levels, Henry brings proven expertise to tackle Uganda's challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accomplishments Section */}
      <section className="section bg-gray-100 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Deep Roots & Accomplishments</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              From humble beginnings, Henry Katabazi has built transformative initiatives touching millions of lives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Faith Life Ministries</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Founded a thriving Pentecostal fellowship that grew from a handful of believers into a megachurch impacting communities across Uganda.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">BTM Television</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Founded Breakthrough Media Television in 2018, now one of Uganda's fastest-growing family-friendly TV stations, reaching over 15 million viewers.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">SIAS Uganda</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    CEO of Sustainable Impact Alliance Solutions, uniting diverse partners to advance Uganda's progress toward UN Sustainable Development Goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/henry-color-portrait.jpeg"
                alt="Henry Katabazi"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Preview Section */}
      <section className="section bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Priority Policies for Transformation</h2>
            <p className="text-lg opacity-90">
              Our manifesto focuses on six key pillars for national renewal.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Education</h3>
              <p className="opacity-90 mb-4">
                Quality education for every child, increasing budget allocation to 15% and tackling dropout rates.
              </p>
              <Link href="/manifesto#education" className="text-secondary font-medium hover:underline">Learn more →</Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Poverty Alleviation</h3>
              <p className="opacity-90 mb-4">
                Lifting families out of poverty through social protection and community development.
              </p>
              <Link href="/manifesto#poverty" className="text-secondary font-medium hover:underline">Learn more →</Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Economic Growth</h3>
              <p className="opacity-90 mb-4">
                Industrialization, value addition, and support for SMEs to create prosperity for all Ugandans.
              </p>
              <Link href="/manifesto#economy" className="text-secondary font-medium hover:underline">Learn more →</Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Youth Empowerment</h3>
              <p className="opacity-90 mb-4">
                Skills development, entrepreneurship support, and job creation for our young population.
              </p>
              <Link href="/manifesto#youth" className="text-secondary font-medium hover:underline">Learn more →</Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Financial Inclusion</h3>
              <p className="opacity-90 mb-4">
                Banking the unbanked through digital finance and expanded access to credit and insurance.
              </p>
              <Link href="/manifesto#finance" className="text-secondary font-medium hover:underline">Learn more →</Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Infrastructure</h3>
              <p className="opacity-90 mb-4">
                Roads, railways, electricity, and water systems to connect and power all of Uganda.
              </p>
              <Link href="/manifesto#infrastructure" className="text-secondary font-medium hover:underline">Learn more →</Link>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="/manifesto" className="btn-secondary">Read Full Manifesto</Link>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="section relative overflow-hidden bg-white dark:bg-gray-900">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/images/water-well-drill-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">Leadership in Action</h2>
            <p className="text-lg text-gray-300 dark:text-gray-300">
              Henry Katabazi demonstrates servant leadership on the frontlines of community initiatives.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/henry-working-ground-level-handpump.jpeg"
                alt="Henry Katabazi working on a water pump"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-white p-4 text-sm">Community water project opening ceremony</p>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/henry-bw-landscape-sitting.jpeg"
                alt="Henry Katabazi speaking"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-white p-4 text-sm">Addressing community concerns</p>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/henry-working-office-color-portrait.jpeg"
                alt="Henry Katabazi in office"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-white p-4 text-sm">Planning development initiatives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision for Uganda Section */}
      <section className="section bg-gray-100 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Vision for Uganda's Future</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Henry Katabazi envisions a Uganda where every child can go to school, every family can lift itself from poverty, and every young person can find dignified work at home.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                A country where development is inclusive – reaching rural villages as much as cities – and where our rich cultural heritage and faith guide a new era of progress.
              </p>
              <p className="text-lg font-bold text-primary dark:text-secondary">
                "Uganda for All Ugandans" – regardless of region, religion, or background.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/natural-resources.jpg"
                alt="Uganda's natural resources"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Economic Leadership Section */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Economic Leadership</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Our economic strategy focuses on industrialization, agricultural modernization, and support for small businesses.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-3">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/slider-agriculture.jpg"
                    alt="Agriculture"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xl font-bold">Agricultural Transformation</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Modernizing agriculture with improved inputs, irrigation, and market access to boost rural incomes.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/coffee-beans.jpg"
                    alt="Coffee production"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xl font-bold">Value Addition</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Processing our raw materials into finished goods to create jobs and increase export earnings.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/business-meeting.jpg"
                    alt="Business meeting"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xl font-bold">SME Development</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Supporting small and medium enterprises with affordable credit and business development services.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/oil-production.jpg"
                    alt="Oil production"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-xl font-bold">Resource Management</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Responsible development of our oil and gas resources to fund critical infrastructure and social services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="section bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/slider-infra.webp"
                alt="Infrastructure development"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Building Foundations for Growth</h2>
              <p className="text-lg mb-6 opacity-90">
                Infrastructure is the backbone of development. Our plan accelerates infrastructure development to connect and power all of Uganda.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-secondary text-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">✓</span>
                  </div>
                  <p>Paving at least 1,000 km of roads per year</p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-secondary text-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">✓</span>
                  </div>
                  <p>Universal access to electricity by 2030</p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-secondary text-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">✓</span>
                  </div>
                  <p>Clean water source for every village</p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-secondary text-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">✓</span>
                  </div>
                  <p>Railway development to transform transport</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section bg-gray-100 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Movement</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              This campaign is about restoring belief in our nation's leadership and future. It thrives only because of citizens like you who refuse to sit on the sidelines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="btn-primary text-center"
              >
                Volunteer Today
              </Link>
              <Link 
                href="/manifesto"
                className="btn-secondary text-center"
              >
                Read Our Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-secondary text-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <svg className="w-12 h-12 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391C14.017 10.707 16.748 8 20.161 8v2c-1.993 0-3.61 1.602-3.61 3.609V21h-2.534zM3.839 21v-7.391C3.839 10.707 6.57 8 9.983 8v2c-1.993 0-3.61 1.602-3.61 3.609V21H3.84z" />
            </svg>
            <p className="text-2xl md:text-3xl font-bold mb-8">
              "I have walked with you, my fellow Ugandans, through many seasons – times of trial and times of triumph. Now I feel called to serve you at the national level."
            </p>
            <p className="font-bold">Henry Byamukama Katabazi</p>
          </div>
        </div>
      </section>
    </div>
  );
}
