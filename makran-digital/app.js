/* Makran Digital student directory. Search covers this curated catalogue, not the whole live internet. */
const SUPABASE_URL="YOUR_SUPABASE_PROJECT_URL";
const SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY";
const TABLE="opportunities";
const resources=[
{id:"usat",category:"tests",title:"USAT — Undergraduate Studies Admission Test (HEC ETC)",description:"Official HEC Education Testing Council portal for USAT registration, test information and candidate updates.",location:"Pakistan · HEC",url:"https://etc.hec.gov.pk/",type:"Official test portal",tags:"usat usa test usat-e usat e undergraduate studies admission test pre engineering pre-engineering pre medical pre-medical etc hec entry test admission test"},
{id:"usat-news",category:"tests",title:"USAT announcements and registration notices",description:"Check HEC ETC announcements for registration windows, date extensions, test notices and candidate instructions.",location:"Pakistan · HEC",url:"https://www.hec.gov.pk/english/services/students/etc/Pages/Announcements.aspx",type:"Official announcements",tags:"usat date deadline registration last date test date etc announcement"},
{id:"usat-faq",category:"tests",title:"HEC ETC FAQs and USAT categories",description:"Read official FAQs about ETC tests, USAT categories and test procedures. Choose the category that matches your academic stream.",location:"Pakistan · HEC",url:"https://www.hec.gov.pk/english/services/students/etc/Pages/FAQ%27s.aspx",type:"Official guidance",tags:"usat categories syllabus test category eligibility faq procedure"},
{id:"usat-acceptance",category:"tests",title:"Does every university accept USAT? HEC clarification",description:"HEC says USAT is recommended, but each university decides whether to accept USAT scores or conduct its own admission test. Confirm with your target university.",location:"Pakistan · HEC",url:"https://www.hec.gov.pk/english/news/news/Pages/USAT-HEC.aspx",type:"Important admission guidance",tags:"usat accepted universities mandatory admission score"},
{id:"hec-universities",category:"tests",title:"HEC recognized universities and degree-awarding institutions",description:"Check whether a university or institution is recognized by HEC before applying or paying fees.",location:"Pakistan · HEC",url:"https://www.hec.gov.pk/english/universities/Pages/recognised.aspx",type:"Official verification",tags:"recognized recognised university degree verification admission"},
{id:"nust",category:"tests",title:"NUST undergraduate admissions and NET",description:"Official NUST admissions information, eligibility, registration and entry-test information.",location:"Pakistan · NUST",url:"https://ugadmissions.nust.edu.pk/",type:"University admissions",tags:"nust net engineering test university undergraduate"},
{id:"fast",category:"tests",title:"FAST-NUCES admissions",description:"Official undergraduate admissions for computing, engineering and other programmes. Check current test and eligibility requirements.",location:"Pakistan · FAST",url:"https://www.nu.edu.pk/Admissions",type:"University admissions",tags:"fast nuces computer science software engineering entry test"},
{id:"hec-scholarships",category:"scholarships",title:"HEC Pakistan — scholarships and grants",description:"Search national and international scholarship programmes listed by Pakistan's Higher Education Commission. Check each programme's current status and eligibility.",location:"Pakistan · HEC",url:"https://www.hec.gov.pk/english/scholarshipsgrants/pages/default.aspx",type:"Official scholarship directory",tags:"hec pakistan fully funded national international grant"},
{id:"balochistan",category:"scholarships",title:"Scholarships for Balochistan and former FATA students",description:"Check HEC announcements for undergraduate scholarship opportunities intended for eligible students from Balochistan and former FATA. Verify active batch and district criteria.",location:"Balochistan · Pakistan",url:"https://www.hec.gov.pk/english/scholarshipsgrants/Pages/NationalScholarships.aspx",type:"Regional scholarship information",tags:"balochistan fata undergraduate local need based"},
{id:"gwadar",category:"scholarships",title:"HEC scholarship information for students from Gwadar",description:"Find HEC information about the Undergraduate Scholarships for Students from Gwadar initiative. Check whether a current application cycle is open.",location:"Gwadar · Balochistan",url:"https://www.hec.gov.pk/english/scholarshipsgrants/Pages/NationalScholarships.aspx",type:"Regional scholarship information",tags:"gwadar coastal region makran balochistan undergraduate"},
{id:"hec-active",category:"scholarships",title:"HEC active scholarship programmes",description:"Check currently active HEC scholarship programmes and new schemes. Availability changes; read the latest notice.",location:"Pakistan · HEC",url:"https://www.hec.gov.pk/english/services/students/HRD/Pages/Active-Scholarships.aspx",type:"Active programme listings",tags:"active open new latest china commonwealth"},
{id:"hec-portal",category:"scholarships",title:"HEC scholarship application portal",description:"Official HEC online scholarship application portal. Read the relevant programme announcement before applying.",location:"Pakistan · HEC",url:"https://scholarship.hec.gov.pk/",type:"Official application portal",tags:"apply application form scholarship portal"},
{id:"hec-abroad",category:"international",title:"HEC Learning Opportunities Abroad",description:"Explore foreign-funded scholarship opportunities and study-abroad information shared by HEC. Check study level and current programme status.",location:"International · HEC Pakistan",url:"https://www.hec.gov.pk/english/scholarshipsgrants/Pages/InternationalScholarships.aspx",type:"Official international directory",tags:"study abroad fully funded foreign international scholarship"},
{id:"china",category:"international",title:"Chinese Government Scholarship — HEC information",description:"Check HEC announcements for Chinese Government Scholarship cycles, eligible degree levels, application routes and deadlines.",location:"China · HEC Pakistan",url:"https://www.hec.gov.pk/english/services/students/HRD/Pages/Active-Scholarships.aspx",type:"Country scholarship information",tags:"china chinese government csc undergraduate masters fully funded"},
{id:"commonwealth",category:"international",title:"Commonwealth Scholarships",description:"Official Commonwealth scholarship information. Programmes vary by degree level and country eligibility; check the current call.",location:"United Kingdom",url:"https://cscuk.fcdo.gov.uk/scholarships/",type:"Official scholarship provider",tags:"commonwealth uk united kingdom masters phd fully funded"},
{id:"hungary",category:"international",title:"Stipendium Hungaricum — Hungary scholarship",description:"Official Hungarian government scholarship programme. Check eligible countries, study levels, partner sending organizations and annual call.",location:"Hungary",url:"https://stipendiumhungaricum.hu/",type:"Official scholarship provider",tags:"hungary stipendium hungaricum bachelor undergraduate fully funded"},
{id:"korea",category:"international",title:"Global Korea Scholarship (GKS)",description:"Official Study in Korea information for Korean government scholarship programmes. Check latest undergraduate or graduate guidelines.",location:"South Korea",url:"https://www.studyinkorea.go.kr/",type:"Official study portal",tags:"korea south gks global undergraduate fully funded"},
{id:"japan",category:"international",title:"MEXT Japanese Government Scholarships",description:"Japanese government scholarship information through official study-in-Japan channels. Confirm Pakistan application route with the Embassy of Japan.",location:"Japan",url:"https://www.studyinjapan.go.jp/en/",type:"Official study portal",tags:"japan mext japanese government fully funded undergraduate"},
{id:"erasmus",category:"international",title:"Erasmus Mundus Joint Masters",description:"Explore Erasmus Mundus joint master's programmes and scholarships. This is generally a postgraduate route, not a bachelor's scholarship.",location:"Europe · European Union",url:"https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals/students/erasmus-mundus-joint-masters",type:"Official EU programme",tags:"erasmus europe masters fully funded"},
{id:"daad",category:"international",title:"DAAD scholarships and study in Germany",description:"Official DAAD scholarship database and guidance for Germany. Filter by degree level, subject and nationality.",location:"Germany",url:"https://www.daad.de/en/studying-in-germany/scholarships/",type:"Official scholarship database",tags:"germany daad german scholarship masters phd"},
{id:"ielts",category:"skills",title:"IELTS — official test information",description:"Understand IELTS test formats, preparation and booking. Check which English test your target university or scholarship accepts.",location:"International",url:"https://ielts.org/",type:"Official test information",tags:"ielts english test proficiency language study abroad"},
{id:"british-council",category:"skills",title:"British Council — English learning and IELTS preparation",description:"Find English learning resources and IELTS preparation support from the British Council.",location:"Pakistan · Online",url:"https://www.britishcouncil.pk/",type:"Learning resource",tags:"english grammar speaking writing ielts preparation"},
{id:"khan",category:"skills",title:"Khan Academy — free learning and test preparation",description:"Free lessons and practice in mathematics, science, computing and other academic subjects.",location:"Online · Free learning",url:"https://www.khanacademy.org/",type:"Free learning resource",tags:"math mathematics physics chemistry computer science practice preparation"},
{id:"coursera",category:"skills",title:"Coursera — online courses and certificates",description:"Explore online courses from universities and organizations. Some courses offer financial aid; check course-specific terms.",location:"Online",url:"https://www.coursera.org/",type:"Skills and courses",tags:"online courses certificates programming ai software engineering"},
{id:"digiskills",category:"skills",title:"DigiSkills.pk — free online skills training",description:"Explore free online training in freelancing and digital skills. Check current batch registration and course availability.",location:"Pakistan · Online",url:"https://digiskills.pk/",type:"Skills training",tags:"freelancing digital skills free courses online training"},
{id:"njp",category:"careers",title:"National Jobs Portal — Government of Pakistan",description:"Search government vacancies, including posts that may be listed for Balochistan. Check education, age, domicile and deadline requirements.",location:"Pakistan · Government",url:"https://www.njp.gov.pk/",type:"Official jobs portal",tags:"jobs government balochistan employment career"},
{id:"njp-live",category:"careers",title:"Browse live government job vacancies",description:"Open the National Jobs Portal live vacancies page to check current openings and closing dates.",location:"Pakistan · Government",url:"https://www.njp.gov.pk/index.php/jobs/live",type:"Live job listings",tags:"latest live jobs vacancies balochistan"},
{id:"rozee",category:"careers",title:"Rozee — private-sector jobs in Pakistan",description:"Explore private-sector job listings and internships. Verify employers and never pay money to secure a job.",location:"Pakistan",url:"https://www.rozee.pk/",type:"Job search platform",tags:"private jobs internship pakistan employment fresh graduates"}
];
const labels={tests:"Tests & admissions",scholarships:"Scholarships",international:"Study abroad",careers:"Jobs & internships",skills:"Skills & preparation"};
const grid=document.querySelector("#opportunity-grid"),searchInput=document.querySelector("#search-input"),categoryFilter=document.querySelector("#category-filter"),feedStatus=document.querySelector("#feed-status"),resultCount=document.querySelector("#result-count");
let posts=[...resources];
function safeUrl(value){try{const u=new URL(value);return ["https:","http:"].includes(u.protocol)?u.href:""}catch{return ""}}
function escapeHtml(value=""){return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
const searchAliases={
 "usa test":"usat","usat e":"usat","usat-e":"usat",
 "undergraduate studies admission test":"usat","education testing council":"usat",
 "fully funded scholarship":"fully funded","study abroad scholarship":"study abroad",
 "balochistan scholarship":"balochistan","jobs in pakistan":"jobs"
};
function normalizeSearch(value){
 let q=String(value||"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim();
 for(const [phrase,replacement] of Object.entries(searchAliases)){
  if(q===phrase||q.includes(phrase)) q=q.replace(phrase,replacement);
 }
 return q.replace(/\s+/g," ").trim();
}
function render(){
 const raw=searchInput.value.trim(),q=normalizeSearch(raw),cat=categoryFilter.value,terms=q.split(/\s+/).filter(Boolean);
 const filtered=posts.filter(p=>{
  if(cat!=="all"&&p.category!==cat)return false;
  const hay=normalizeSearch([p.title,p.description,p.location,p.type,labels[p.category],p.tags||""].join(" "));
  return !terms.length||terms.every(term=>hay.includes(term));
 });
 grid.innerHTML=filtered.map(p=>{const url=safeUrl(p.url);return '<article class="op-card"><div class="op-top"><span class="op-category">'+escapeHtml(labels[p.category]||"Student resource")+'</span><span class="op-date">'+escapeHtml(p.type||"RESOURCE")+'</span></div><h3>'+escapeHtml(p.title)+'</h3><p>'+escapeHtml(p.description)+'</p><div class="op-foot"><span>⌖ '+escapeHtml(p.location||"Online")+'</span>'+(url?'<a href="'+escapeHtml(url)+'" target="_blank" rel="noopener noreferrer">Open official source ↗</a>':'<span>Link unavailable</span>')+'</div></article>'}).join("");
 const empty=document.querySelector("#empty-state");
 empty.hidden=filtered.length>0;
 if(!filtered.length&&raw){
  const webUrl="https://www.google.com/search?q="+encodeURIComponent(raw+" scholarship students Pakistan official");
  empty.innerHTML='<b>No exact match in our verified directory yet.</b><br>We do not want to show you made-up opportunities. Try another keyword, clear the category filter, or search the wider web for this topic.<br><a class="text-link" style="color:#8a6b35" href="'+webUrl+'" target="_blank" rel="noopener noreferrer">Search the web for “'+escapeHtml(raw)+'” ↗</a>';
 }
 resultCount.textContent=filtered.length+" resource"+(filtered.length===1?"":"s")+" found";
}
async function loadLivePosts(){
 if(!SUPABASE_URL.startsWith("https://")||SUPABASE_ANON_KEY.startsWith("YOUR_")){feedStatus.textContent="Curated student directory · live community submissions not connected";return}
 try{const response=await fetch(SUPABASE_URL.replace(/\/$/,"")+"/rest/v1/"+TABLE+"?select=id,category,title,description,location,url,created_at&status=eq.approved&order=created_at.desc",{headers:{apikey:SUPABASE_ANON_KEY,Authorization:"Bearer "+SUPABASE_ANON_KEY}});if(!response.ok)throw new Error("Database request failed");const live=await response.json();posts=[...live.map(p=>({...p,live:true,tags:""})),...resources];feedStatus.textContent="Curated student directory + approved community submissions";render()}catch(error){feedStatus.textContent="Curated student directory · live database connection needs checking";console.warn(error)}
}
document.querySelector("#submit-form").addEventListener("submit",async event=>{
 event.preventDefault();const form=event.currentTarget,button=document.querySelector("#submit-button"),feedback=document.querySelector("#form-feedback");
 if(!SUPABASE_URL.startsWith("https://")||SUPABASE_ANON_KEY.startsWith("YOUR_")){feedback.textContent="Online submissions are not enabled yet. The platform owner must connect the database. You can still browse the directory.";return}
 const data=Object.fromEntries(new FormData(form).entries());data.url=safeUrl(data.url)||null;data.status="pending";button.disabled=true;button.textContent="Sending...";
 try{const response=await fetch(SUPABASE_URL.replace(/\/$/,"")+"/rest/v1/"+TABLE,{method:"POST",headers:{apikey:SUPABASE_ANON_KEY,Authorization:"Bearer "+SUPABASE_ANON_KEY,"Content-Type":"application/json",Prefer:"return=minimal"},body:JSON.stringify(data)});if(!response.ok)throw new Error("Submission was not accepted");form.reset();feedback.textContent="Thank you! Your student resource has been received and is waiting for review."}catch(error){feedback.textContent="We couldn't send this submission. Please check the database setup and try again."}finally{button.disabled=false;button.innerHTML='Send for review <span>↗</span>'}
});
searchInput.addEventListener("input",()=>{if(searchInput.value.trim())categoryFilter.value="all";render()});categoryFilter.addEventListener("change",render);
document.querySelectorAll("[data-shortcut]").forEach(a=>a.addEventListener("click",()=>{categoryFilter.value=a.dataset.shortcut;render()}));
document.querySelectorAll("[data-search]").forEach(el=>el.addEventListener("click",event=>{event.preventDefault();searchInput.value=el.dataset.search;categoryFilter.value="all";render();document.querySelector("#explore").scrollIntoView({behavior:"smooth"})}));
const menu=document.querySelector("#menu-button");menu.addEventListener("click",()=>{const nav=document.querySelector("#nav"),open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));menu.textContent=open?"×":"☰"});
document.querySelector("#year").textContent=new Date().getFullYear();render();loadLivePosts();



/* Personal dashboard preview and deadline-alert preferences.
   Email delivery requires authenticated backend, scheduled worker and email provider. */
(()=>{
 const signup=document.querySelector("#demo-signup"),signin=document.querySelector("#demo-signin");
 const feedback=document.querySelector("#account-feedback"),dashboard=document.querySelector("#demo-dashboard");
 const tabs=[...document.querySelectorAll(".account-tab")];
 const profileKey="makranDigitalPreviewProfile";
 const readProfile=()=>{try{return JSON.parse(localStorage.getItem(profileKey)||"null")}catch{return null}};
 const saveProfile=p=>localStorage.setItem(profileKey,JSON.stringify(p));
 function showTab(tab){
  tabs.forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));
  signup.hidden=tab!=="signup";signin.hidden=tab!=="signin";dashboard.hidden=true;
 }
 tabs.forEach(b=>b.addEventListener("click",()=>showTab(b.dataset.tab)));
 function showDashboard(profile){
  signup.hidden=true;signin.hidden=true;dashboard.hidden=false;
  tabs.forEach(b=>b.classList.remove("active"));
  const categories=["Scholarships","Jobs & internships","Skills & training","Admissions & tests","Community opportunities"];
  dashboard.innerHTML=`
   <div class="dashboard-top"><div><span class="eyebrow dark-eyebrow">YOUR PERSONAL SPACE</span><h3 class="dash-welcome">Welcome, ${escapeHtml(profile.name)}</h3></div><button type="button" id="preview-signout">Sign out</button></div>
   <p class="dash-email">${escapeHtml(profile.email)}</p>
   <div class="dashboard-nav"><button class="dash-nav active" data-view="overview">Overview</button><button class="dash-nav" data-view="saved">Saved opportunities</button><button class="dash-nav" data-view="alerts">Deadline alerts</button><button class="dash-nav" data-view="profile">My profile</button></div>
   <section class="dash-view" data-panel="overview"><div class="dash-stats"><div><b>${profile.roles.length}</b><span>Account types</span></div><div><b>${profile.saved?.length||0}</b><span>Saved items</span></div><div><b>${profile.alerts?.enabled?"ON":"OFF"}</b><span>Email alerts</span></div></div><h4>Your account types</h4><div class="dashboard-roles">${profile.roles.map(r=>'<span>'+escapeHtml(r)+'</span>').join("")}</div><p class="dashboard-message">Your dashboard is your personal starting point. Save opportunities from the directory and manage deadline reminders here.</p></section>
   <section class="dash-view" data-panel="saved" hidden><h4>Saved opportunities</h4><p class="dash-muted">Your saved listings will appear here. Saving live listings will be enabled with the connected account database.</p><div class="saved-preview">${(profile.saved||[]).length?profile.saved.map(x=>'<div>'+escapeHtml(x)+'</div>').join(""):'No opportunities saved yet.'}</div></section>
   <section class="dash-view" data-panel="alerts" hidden><h4>Deadline email reminders</h4><p class="dash-muted">Choose the updates you want. The planned reminder is sent 2 days (48 hours) before an opportunity deadline.</p><label class="alert-toggle"><input type="checkbox" id="alerts-enabled" ${profile.alerts?.enabled?"checked":""}><span><b>Enable email reminders</b><small>Receive deadline alerts at your account email.</small></span></label><label class="dash-field">Notification email<input id="alerts-email" type="email" value="${escapeHtml(profile.alerts?.email||profile.email)}" placeholder="you@example.com"></label><div class="alert-categories"><b>Notify me about</b>${categories.map((c,i)=>'<label><input type="checkbox" class="alert-category" value="'+i+'" '+((profile.alerts?.categories||[0,1,2,3,4]).includes(i)?"checked":"")+'>'+c+'</label>').join("")}</div><div class="alert-timing"><span>Reminder timing</span><b>2 days before deadline</b></div><button type="button" class="button button-dark" id="save-alerts">Save notification preferences</button><p class="form-feedback" id="alert-feedback" role="status">Preview only: preferences are saved in this browser. Automatic email delivery will start after backend and email-service setup.</p></section>
   <section class="dash-view" data-panel="profile" hidden><h4>Personal profile</h4>
    <div class="profile-form-grid"><label class="dash-field">First name<input id="profile-firstName" value="${escapeHtml(profile.firstName||"")}" maxlength="60"></label><label class="dash-field">Last name<input id="profile-lastName" value="${escapeHtml(profile.lastName||"")}" maxlength="60"></label></div>
    <label class="dash-field">Father's name<input id="profile-fatherName" value="${escapeHtml(profile.fatherName||"")}" maxlength="100"></label>
    <label class="dash-field">Email address<input value="${escapeHtml(profile.email)}" disabled></label>
    <label class="dash-field">Phone number<input id="profile-phone" type="tel" value="${escapeHtml(profile.phone||"")}" maxlength="25"></label>
    <div class="profile-form-grid"><label class="dash-field">Country<input id="profile-country" value="${escapeHtml(profile.country||"")}" maxlength="80"></label><label class="dash-field">Province / State<input id="profile-province" value="${escapeHtml(profile.province||"")}" maxlength="80"></label></div>
    <div class="profile-form-grid"><label class="dash-field">Region / District<input id="profile-region" value="${escapeHtml(profile.region||"")}" maxlength="100"></label><label class="dash-field">City<input id="profile-city" value="${escapeHtml(profile.city||"")}" maxlength="100"></label></div>
    <label class="dash-field">Residential address (optional)<input id="profile-address" value="${escapeHtml(profile.address||"")}" maxlength="180"></label>
    <label class="dash-field">Religion (optional)<select id="profile-religion"><option value="">Prefer not to say</option>${["Islam","Christianity","Hinduism","Sikhism","Buddhism","Other"].map(x=>'<option value="'+x+'" '+(profile.religion===x?"selected":"")+'>'+x+'</option>').join("")}</select></label>
    <div class="dashboard-roles">${profile.roles.map(r=>'<span>'+escapeHtml(r)+'</span>').join("")}</div><p class="dash-muted">Your profile is currently stored only in this browser preview. Do not enter information you do not want stored on this device.</p><button type="button" class="button button-dark" id="save-profile">Save profile preview</button><p class="form-feedback" id="profile-feedback" role="status"></p></section>`;
  dashboard.querySelectorAll(".dash-nav").forEach(btn=>btn.addEventListener("click",()=>{
   dashboard.querySelectorAll(".dash-nav").forEach(x=>x.classList.toggle("active",x===btn));
   dashboard.querySelectorAll(".dash-view").forEach(x=>x.hidden=x.dataset.panel!==btn.dataset.view);
  }));
  dashboard.querySelector("#preview-signout").addEventListener("click",()=>showTab("signup"));
  dashboard.querySelector("#save-alerts").addEventListener("click",()=>{
   const email=dashboard.querySelector("#alerts-email").value.trim();
   if(dashboard.querySelector("#alerts-enabled").checked&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){dashboard.querySelector("#alert-feedback").textContent="Enter a valid email address.";return}
   profile.alerts={enabled:dashboard.querySelector("#alerts-enabled").checked,email,categories:[...dashboard.querySelectorAll(".alert-category:checked")].map(x=>Number(x.value)),daysBefore:2};
   saveProfile(profile);dashboard.querySelector("#alert-feedback").textContent="Preferences saved in this browser. Real email alerts will activate after backend integration.";
   dashboard.querySelector(".dash-stats div:nth-child(3) b").textContent=profile.alerts.enabled?"ON":"OFF";
  });
  dashboard.querySelector("#save-profile").addEventListener("click",()=>{
   ["firstName","lastName","fatherName","phone","country","province","region","city","address","religion"].forEach(key=>{
    const field=dashboard.querySelector("#profile-"+key);if(field)profile[key]=field.value.trim();
   });
   profile.name=[profile.firstName,profile.lastName].filter(Boolean).join(" ")||profile.name;
   saveProfile(profile);
   dashboard.querySelector("#profile-feedback").textContent="Profile preview updated on this device.";
   dashboard.querySelector(".dash-welcome").textContent="Welcome, "+(profile.firstName||profile.name);
  });
 }
 signup.addEventListener("submit",event=>{
  event.preventDefault();const data=new FormData(signup),roles=data.getAll("roles");
  if(!roles.length){feedback.textContent="Please select at least one account type.";return}
  const firstName=String(data.get("firstName")).trim(),lastName=String(data.get("lastName")).trim(),email=String(data.get("email")).trim().toLowerCase();
  const profile={firstName,lastName,name:[firstName,lastName].filter(Boolean).join(" "),fatherName:String(data.get("fatherName")).trim(),email,phone:String(data.get("phone")).trim(),country:String(data.get("country")).trim(),province:String(data.get("province")).trim(),region:String(data.get("region")).trim(),city:String(data.get("city")).trim(),address:String(data.get("address")).trim(),religion:String(data.get("religion")).trim(),roles,alerts:{enabled:false,email,categories:[0,1,2,3,4],daysBefore:2},saved:[]};
  saveProfile(profile);showDashboard(profile);
 });
 signin.addEventListener("submit",event=>{
  event.preventDefault();const email=String(new FormData(signin).get("email")).trim().toLowerCase(),profile=readProfile();
  if(!profile||profile.email!==email){signin.querySelector(".form-feedback").textContent="No matching preview profile found in this browser. Create a preview profile first.";return}
  showDashboard(profile);
 });
 const existing=readProfile();if(existing)showDashboard(existing);
})();
