/* Makran Digital Community feed */
(()=>{
 const client=window.makranSupabase;
 const root=document.querySelector("#community");
 if(!client||!root)return;
 const feed=root.querySelector("#community-feed");
 const form=root.querySelector("#community-post-form");
 const feedback=root.querySelector("#community-feedback");
 const submit=form.querySelector('button[type="submit"]');
 const escapeHtml=value=>String(value??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
 const categories=["Scholarships","Education & Admissions","Jobs & Internships","Career & Skills","General Discussion"];
 let currentUser=null;
 const setMessage=(message,error=false)=>{feedback.textContent=message;feedback.dataset.state=error?"error":"success";};
 const dateLabel=value=>{const date=new Date(value);return Number.isNaN(date.getTime())?"Recently":date.toLocaleString(undefined,{dateStyle:"medium",timeStyle:"short"});};
 async function loadPosts(){
  feed.innerHTML='<p class="community-status">Loading community discussions…</p>';
  const result=await client.from("community_posts").select("id,category,title,body,created_at,author_id").order("created_at",{ascending:false}).limit(50);
  if(result.error){feed.innerHTML='<p class="community-status">Community feed is not ready yet. The database setup may still be required.</p>';return;}
  if(!result.data?.length){feed.innerHTML='<div class="community-empty"><b>Be the first to start a discussion.</b><p>Ask a question, share a useful resource or tell the community about an opportunity.</p></div>';return;}
  feed.innerHTML=result.data.map(post=>'<article class="community-post" data-post-id="'+escapeHtml(post.id)+'"><div class="community-post-meta"><span>'+escapeHtml(post.category)+'</span><time>'+escapeHtml(dateLabel(post.created_at))+'</time></div><h3>'+escapeHtml(post.title)+'</h3><p class="community-post-body">'+escapeHtml(post.body).replace(/\n/g,"<br>")+'</p><div class="community-post-actions"><small>Community member</small>'+(currentUser?.id===post.author_id?'<button type="button" data-delete-post="'+escapeHtml(post.id)+'">Delete my post</button>':'<button type="button" data-report-post="'+escapeHtml(post.id)+'">Report post</button>')+'</div></article>').join("");
  feed.querySelectorAll("[data-delete-post]").forEach(button=>button.addEventListener("click",async()=>{
   if(!currentUser||!confirm("Delete your post? This cannot be undone."))return;
   button.disabled=true;
   const deleted=await client.from("community_posts").delete().eq("id",button.dataset.deletePost).eq("author_id",currentUser.id);
   if(deleted.error){button.disabled=false;setMessage("Could not delete the post. Please try again.",true);return;}
   setMessage("Your post has been deleted.");await loadPosts();
  }));
  feed.querySelectorAll("[data-report-post]").forEach(button=>button.addEventListener("click",async()=>{
   if(!currentUser)return;
   const reason=prompt("Why are you reporting this post? Enter one: Spam or scam / Harassment or bullying / False or misleading information / Inappropriate content / Other");
   if(!reason)return;
   const allowed=["Spam or scam","Harassment or bullying","False or misleading information","Inappropriate content","Other"];
   if(!allowed.includes(reason.trim())){setMessage("Please use one of the listed report reasons.",true);return;}
   button.disabled=true;
   const reported=await client.from("community_reports").insert({post_id:button.dataset.reportPost,reporter_id:currentUser.id,reason:reason.trim()});
   if(reported.error){button.disabled=false;setMessage(reported.error.code==="23505"?"You have already reported this post.":"Could not submit your report. Please try again.",true);return;}
   button.textContent="Reported";setMessage("Thank you. Your report has been recorded.");
  }));
 }
 form.addEventListener("submit",async event=>{
  event.preventDefault();
  if(!currentUser){setMessage("Please sign in again to publish a post.",true);return;}
  const data=new FormData(form);
  const title=String(data.get("title")||"").trim(),body=String(data.get("body")||"").trim(),category=String(data.get("category")||"");
  if(title.length<5||title.length>120||body.length<10||body.length>2000||!categories.includes(category)){setMessage("Check the title, category and message length before posting.",true);return;}
  submit.disabled=true;submit.textContent="Publishing…";
  const saved=await client.from("community_posts").insert({author_id:currentUser.id,category,title,body});
  submit.disabled=false;submit.textContent="Publish post";
  if(saved.error){setMessage("Your post could not be published. Please check that the Community database setup has been completed.",true);return;}
  form.reset();setMessage("Your post is now shared with the community.");await loadPosts();
 });
 async function start(){
  const session=await client.auth.getSession();
  currentUser=session.data.session?.user||null;
  if(currentUser)await loadPosts();
  else feed.innerHTML='<p class="community-status">Sign in to view community discussions.</p>';
 }
 start();
 client.auth.onAuthStateChange((_event,session)=>{currentUser=session?.user||null;if(currentUser)loadPosts();else feed.innerHTML='<p class="community-status">Sign in to view community discussions.</p>';});
})();