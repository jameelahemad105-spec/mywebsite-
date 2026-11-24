/* Makran Digital: security and privacy centre */
(()=>{
 const client=window.makranSupabase,form=document.querySelector("#deletion-request-form");
 if(!form)return;
 const button=form.querySelector('button[type="submit"]'),feedback=document.querySelector("#deletion-request-feedback");
 const message=(value,error=false)=>{feedback.textContent=value;feedback.dataset.state=error?"error":"success";};
 async function refresh(){
  if(!client){button.disabled=true;message("Account service is unavailable. Refresh and try again.",true);return;}
  const result=await client.auth.getUser(),signedIn=!!result.data?.user;
  button.disabled=!signedIn;
  message(signedIn?"You are signed in. You can submit a deletion request for this account.":"Please sign in to submit a request for your account.",!signedIn);
 }
 form.addEventListener("submit",async event=>{
  event.preventDefault();
  if(!client){message("Account service is unavailable. Please refresh.",true);return;}
  button.disabled=true;
  const userResult=await client.auth.getUser(),user=userResult.data?.user;
  if(userResult.error||!user){message("Please sign in again before submitting this request.",true);button.disabled=false;return;}
  const reason=String(new FormData(form).get("reason")||"").trim();
  const result=await client.from("account_deletion_requests").insert({user_id:user.id,reason:reason||null});
  if(result.error)message(result.error.code==="42P01"?"The deletion-request database setup has not been completed. Ask the platform owner to run security-centre.sql.":"Your request could not be submitted. Please try again.",true);
  else{form.reset();message("Your request has been recorded. The platform owner must review and securely process account deletion; your account has not been deleted yet.");}
  button.disabled=false;
 });
 refresh();
 client?.auth.onAuthStateChange(()=>refresh());
})();