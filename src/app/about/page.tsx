import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/henry-bw-landscape-sitting.jpeg"
            alt="Henry Katabazi"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About Henry Byamukama Katabazi</h1>
            <p className="text-lg text-white/90 max-w-3xl">A lifetime of service, faith, and leadership</p>
          </div>
        </div>
      </section>
      
      {/* Quick Navigation */}
      <section className="py-8 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#early-life" className="px-4 py-2 bg-white dark:bg-gray-700 rounded-md shadow hover:bg-primary hover:text-white transition-colors">Early Life</a>
            <a href="#spiritual-leadership" className="px-4 py-2 bg-white dark:bg-gray-700 rounded-md shadow hover:bg-primary hover:text-white transition-colors">Spiritual Leadership</a>
            <a href="#international" className="px-4 py-2 bg-white dark:bg-gray-700 rounded-md shadow hover:bg-primary hover:text-white transition-colors">International Experience</a>
            <a href="#philanthropy" className="px-4 py-2 bg-white dark:bg-gray-700 rounded-md shadow hover:bg-primary hover:text-white transition-colors">Philanthropy</a>
            <a href="#family" className="px-4 py-2 bg-white dark:bg-gray-700 rounded-md shadow hover:bg-primary hover:text-white transition-colors">Family</a>
          </div>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">Faith Leader</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Senior Pastor with over 20 years leading Faith Life Ministries and Breakthrough Life Church, reaching thousands of Ugandans weekly.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">Social Entrepreneur</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Founder of multiple initiatives including SIAS Uganda and Ensigo of Love, bringing practical solutions to Uganda&apos;s social challenges.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">Global Citizen</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Working across continents to build bridges between Uganda and international partners for sustainable development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Early Life Section */}
      <section id="early-life" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-10 w-1 bg-primary"></div>
            <h2 className="text-3xl md:text-4xl font-bold">Early Life and Calling</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Henry Byamukama Katabazi was born on June 15, 1975 in Kampala, Uganda. Growing up during a time of social and economic change, he learned early on the importance of resilience, education, and community support.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                From his youth, Henry felt a calling to serve others. He became active in church and community outreach as a teenager, mentored by local faith leaders. This early immersion in service set the foundation for a lifetime of leadership.
              </p>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/henry-welcome-to-future-portrait-bw.jpeg"
                alt="Henry Katabazi in his youth"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              In the 1990s, as a very young man, he began preaching and organizing youth fellowship groups, quickly earning respect for his passion, sincerity, and ability to inspire. What started as small prayer meetings soon evolved into a broader ministry as Henry traveled to villages and towns, spreading a message of hope and personal empowerment across Uganda.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-primary/10 p-4 rounded-md">
              <h4 className="font-bold mb-2">Early Influence</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Mentored by prominent local faith leaders who recognized his potential
              </p>
            </div>
            <div className="bg-primary/10 p-4 rounded-md">
              <h4 className="font-bold mb-2">Community Focus</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Began addressing social issues through faith-based community work
              </p>
            </div>
            <div className="bg-primary/10 p-4 rounded-md">
              <h4 className="font-bold mb-2">Growth & Development</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Developed leadership skills while expanding outreach to rural communities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Leadership Section */}
      <section id="spiritual-leadership" className="py-16 bg-gray-100 dark:bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full -ml-32 -mb-32"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-10 w-1 bg-secondary"></div>
            <h2 className="text-3xl md:text-4xl font-bold">Spiritual Leadership in Uganda</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div className="order-2 md:order-1 relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/henry-sitting-color-portrait.jpeg"
                alt="Henry Katabazi preaching"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-3">Faith Life Ministries</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  In 2001, Henry Katabazi formally founded Faith Life Ministries, establishing a home base for his growing pastoral work. Centered in Kampala, Faith Life Ministries encompasses the vibrant Breakthrough Life Church as well as various outreach programs.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Leadership Impact</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  As Lead Pastor, Katabazi cultivated this ministry from modest beginnings into one of Uganda&apos;s most dynamic faith communities. Every week, thousands attend services and fellowship gatherings under his leadership.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-2">1</span>
                The Faith Life Fellowship
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Notably, in 2018 he launched The Faith Life Fellowship, a weekly interdenominational gathering in the heart of Kampala. Attendance grew from just 20 people to over 1,500 people within one year – a testament to Henry&apos;s ability to connect with ordinary Ugandans&apos; hopes and struggles.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-2">2</span>
                Community Programs
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Katabazi&apos;s ministry has always emphasized practical impact alongside spiritual growth. He has overseen the establishment of adult literacy classes, marriage counseling programs, and rural prayer centers under Faith Life Ministries. He has mentored dozens of other pastors and community leaders, effectively creating a ripple effect of positive leadership nationwide.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-2">3</span>
                Holistic Approach
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                As the Senior Pastor at Breakthrough Life Church – Gayaza, he is known for his down-to-earth preaching style that addresses social issues like poverty, integrity in public life, and unity among Uganda&apos;s tribes and faiths. This holistic approach – combining prayer with action – has earned him a reputation as a pastor who builds communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* International Experience Section */}
      <section id="international" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-10 w-1 bg-primary"></div>
            <h2 className="text-3xl md:text-4xl font-bold">International Experience</h2>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Henry Byamukama Katabazi&apos;s influence extends far beyond Uganda&apos;s borders. In addition to his work at home, he has served as a pastor in the Ugandan diaspora community overseas, strengthening the bonds between Ugandans abroad and their motherland.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <div className="bg-primary/5 p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-3">Forerunner Christian Church</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  He is a Senior Pastor at Forerunner Christian Church in Fremont, California, a role in which he leads a multicultural congregation while also engaging with Silicon Valley innovators and development partners.
                </p>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Global Perspective</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  This unique experience – ministering in the United States – has given Henry a global perspective on issues and exposed him to advanced approaches in education, technology, and church management.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/slider-conference.jpg"
                alt="Henry Katabazi at an international conference"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col h-full">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path>
                </svg>
                <h4 className="text-lg font-bold">Building Bridges</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 flex-grow">
                He frequently travels between Uganda and the U.S., building bridges for partnerships. For example, under his leadership, SIAS Uganda collaborated with American tech entrepreneurs to create the Rewards for Education mobile app that encourages Ugandan children to stay in school.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col h-full">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path>
                </svg>
                <h4 className="text-lg font-bold">Global Platform</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 flex-grow">
                Henry has also been invited to speak on international platforms: in October 2024, he addressed the United Nations Association annual gala in California, sharing insights on how innovative technologies can help achieve Sustainable Development Goals in communities from Orange County to Uganda.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col h-full">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path>
                </svg>
                <h4 className="text-lg font-bold">Ugandan Roots</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 flex-grow">
                Despite his global engagements, Henry Katabazi&apos;s heart remains firmly rooted in Uganda. He maintains close ties with grassroots communities across the country – from Kampala&apos;s urban neighborhoods to remote villages. He is fluent in multiple local languages and often incorporates cultural music and proverbs into his messages, reflecting deep respect for Uganda&apos;s heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philanthropy Section */}
      <section id="philanthropy" className="py-16 bg-gray-100 dark:bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full -ml-32 -mt-32"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mb-32"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-10 w-1 bg-secondary"></div>
            <h2 className="text-3xl md:text-4xl font-bold">Philanthropy and Social Impact</h2>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Henry Byamukama Katabazi&apos;s life of service goes beyond the pulpit. He and his wife, Lillian Mirembe Byamukama, co-founded Ensigo of Love, a charitable organization focused on childcare and family welfare.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div className="order-2 md:order-1 relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/henry-working-ground-level.jpeg"
                alt="Henry Katabazi doing community work"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Ensigo of Love</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Ensigo of Love operates in communities around Breakthrough Life Church and its branch churches, providing food, clothing, shelter, and education to orphans and children from impoverished families. The program sponsors children to attend school and connects them with caring mentors.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Many beneficiaries have gone on to flourish – a number of the children Henry&apos;s organization supported have completed primary and secondary education when it would have otherwise been impossible.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Sustainable Impact Alliance Solutions (SIAS)</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Another major initiative Henry leads is Sustainable Impact Alliance Solutions (SIAS) – Uganda. Founded in recent years, SIAS Uganda is a non-profit and social enterprise network aimed at accelerating sustainable development through innovation and partnerships.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Under Katabazi&apos;s direction as President of SIAS, the alliance brings together experts in education, technology, finance, and public service to tackle complex societal challenges. SIAS Uganda has been particularly active in supporting Uganda&apos;s commitment to the United Nations Sustainable Development Goals (SDGs) – from quality education to clean water.
            </p>
          </div>
          
          <div className="bg-primary text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">Media Advocacy</h3>
            <p className="opacity-90">
              Henry Katabazi&apos;s philanthropic impact is also evident in crisis response and media advocacy. Through his television station BTM TV, he has championed causes such as poverty alleviation, youth mentorship, and family values in the public discourse.
            </p>
          </div>
        </div>
      </section>

      {/* Family Section */}
      <section id="family" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-10 w-1 bg-primary"></div>
            <h2 className="text-3xl md:text-4xl font-bold">Family and Personal Life</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-3">Partnership in Life and Ministry</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Henry is happily married to Lillian Mirembe Byamukama, who is not only his life partner but also a partner in ministry and charity. Lillian, a trained counselor and entrepreneur, plays a leading role in the women&apos;s ministry at Breakthrough Life Church and coordinates the Ensigo of Love program.
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">A Family of Purpose</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  The couple is blessed with two children, a daughter Hadassah and a son Coban, who inspire their parents&apos; dedication to building a better future for all Ugandan children.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/henry-sitting-landscape-color.jpeg"
                alt="Henry Katabazi with family"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="col-span-1 md:col-span-3 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Despite his busy schedule, Henry is a devoted family man. He often mentions that the support and wisdom of his wife keep him grounded. In rare quiet moments, he enjoys uplifting gospel music and reading both Scripture and development literature – finding guidance in both the Bible and evidence-based research.
              </p>
            </div>
          </div>
          
          <div className="bg-primary text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">A Call to National Service</h3>
            <p className="text-lg mb-6">
              As he steps into the political arena, Henry Byamukama Katabazi carries forward his life&apos;s mission in a new capacity. He frames his candidacy as an extension of the roles he has already played: a shepherd guiding a flock, a father looking out for the next generation, and a bridge-builder uniting people for common good.
            </p>
            <blockquote className="border-l-4 border-secondary pl-4 italic">
              &quot;I have walked with you, my fellow Ugandans, through many seasons – times of trial and times of triumph. Now I feel called to serve you at the national level, to apply what I have learned in ministry, philanthropy, and life to heal our nation and help it reach its promise. I am ready to lead with God&apos;s grace and your support.&quot;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Henry&apos;s Vision for Uganda</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Together, we can build a Uganda where prosperity, justice, and opportunity are available to all. Learn more about Henry&apos;s plans for the nation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/manifesto"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 text-center"
              >
                Read the Manifesto
              </Link>
              <Link 
                href="/contact"
                className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 text-center border-2 border-white"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 