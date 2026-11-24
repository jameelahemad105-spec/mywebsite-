/* Makran Digital — community opportunities MVP.
   Configure Supabase in the two constants below to enable shared live submissions.
   Never put a Supabase service_role key in browser code. */
const SUPABASE_URL = "YOUR_SUPABASE_PROJECT_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";
const TABLE = "opportunities";

const samplePosts = [
  {id:"s1",category:"education",title:"Explore fully funded scholarship opportunities",description:"Use official scholarship portals to check eligibility, required documents and application deadlines. Always verify details with the provider.",location:"Online · Makran",url:"https://www.hec.gov.pk/"},
  {id:"s2",category:"education",title:"Higher education guidance for students",description:"Find information about recognized universities, admissions and higher education resources through official channels.",location:"Pakistan",url:"https://www.hec.gov.pk/"},
  {id:"s3",category:"jobs",title:"Search verified job and internship listings",description:"Check current vacancies, eligibility requirements and application instructions on established employment platforms.",location:"Pakistan",url:"https://www.njp.gov.pk/"},
  {id:"s4",category:"services",title:"Add a local business or useful service",description:"Help residents discover a local service. Community-submitted listings will be reviewed before publication.",location:"Turbat · Gwadar · Panjgur",url:""},
  {id:"s5",category:"community",title:"Share a community announcement",description:"Submit a public-interest update, education event or community initiative with a source or contact details.",location:"Makran",url:""}
];
const labels = {education:"Education",jobs:"Jobs & careers",services:"Local services",community:"Community"};
const grid = document.querySelector("#opportunity-grid");
const searchInput = document.querySelector("#search-input");
const categoryFilter = document.querySelector("#category-filter");
const feedStatus = document.querySelector("#feed-status");
const resultCount = document.querySelector("#result-count");
let posts = [...samplePosts];

function safeUrl(value){try{const u=new URL(value);return ["https:","http:"].includes(u.protocol)?u.href:""}catch{return ""}}
function escapeHtml(value=""){return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function render(){
  const q=searchInput.value.trim().toLowerCase(),cat=categoryFilter.value;
  const filtered=posts.filter(p=>(cat==="all"||p.category===cat)&&[p.title,p.description,p.location,labels[p.category]].join(" ").toLowerCase().includes(q));
  grid.innerHTML=filtered.map(p=>{const url=safeUrl(p.url);return `<article class="op-card"><div class="op-top"><span class="op-category">${escapeHtml(labels[p.category]||"Community")}</span><span class="op-date">${p.live?"COMMUNITY POST":"STARTER RESOURCE"}</span></div><h3>${escapeHtml(p.title)}</h3><p>${escapeHtml(p.description)}</p><div class="op-foot"><span>⌖ ${escapeHtml(p.location||"Makran")}</span>${url?`<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">Visit source ↗</a>`:"<span>More details soon</span>"}</div></article>`}).join("");
  document.querySelector("#empty-state").hidden=filtered.length>0;
  resultCount.textContent=filtered.length+" resource"+(filtered.length===1?"":"s");
}
async function loadLivePosts(){
  if(!SUPABASE_URL.startsWith("https://")||SUPABASE_ANON_KEY.startsWith("YOUR_")){feedStatus.textContent="Preview resources · connect the community database to go live";return}
  try{
    const response=await fetch(SUPABASE_URL.replace(/\/$/,"")+"/rest/v1/"+TABLE+"?select=id,category,title,description,location,url,created_at&status=eq.approved&order=created_at.desc",{headers:{apikey:SUPABASE_ANON_KEY,Authorization:"Bearer "+SUPABASE_ANON_KEY}});
    if(!response.ok)throw new Error("Database request failed");
    const live=await response.json();
    posts=[...live.map(p=>({...p,live:true})),...samplePosts];
    feedStatus.textContent="Connected · approved community submissions and starter resources";
    render();
  }catch(error){feedStatus.textContent="Showing starter resources · live database connection needs checking";console.warn(error)}
}
document.querySelector("#submit-form").addEventListener("submit",async event=>{
  event.preventDefault();
  const form=event.currentTarget,button=document.querySelector("#submit-button"),feedback=document.querySelector("#form-feedback");
  if(!SUPABASE_URL.startsWith("https://")||SUPABASE_ANON_KEY.startsWith("YOUR_")){feedback.textContent="Online submissions are not enabled yet. The platform owner must connect the Supabase database first.";return}
  const data=Object.fromEntries(new FormData(form).entries());
  data.url=safeUrl(data.url)||null;data.status="pending";
  button.disabled=true;button.textContent="Sending...";
  try{
    const response=await fetch(SUPABASE_URL.replace(/\/$/,"")+"/rest/v1/"+TABLE,{method:"POST",headers:{apikey:SUPABASE_ANON_KEY,Authorization:"Bearer "+SUPABASE_ANON_KEY,"Content-Type":"application/json",Prefer:"return=minimal"},body:JSON.stringify(data)});
    if(!response.ok)throw new Error("Submission was not accepted");
    form.reset();feedback.textContent="Thank you! Your submission has been received and is waiting for review.";
  }catch(error){feedback.textContent="We couldn't send this submission. Please check the database setup and try again."}
  finally{button.disabled=false;button.innerHTML='Send for review <span>↗</span>'}
});
searchInput.addEventListener("input",render);
categoryFilter.addEventListener("change",render);
document.querySelectorAll("[data-shortcut]").forEach(a=>a.addEventListener("click",()=>{categoryFilter.value=a.dataset.shortcut;render()}));
const menu=document.querySelector("#menu-button");menu.addEventListener("click",()=>{const nav=document.querySelector("#nav"),open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));menu.textContent=open?"×":"☰"});
document.querySelector("#year").textContent=new Date().getFullYear();
render();loadLivePosts();
