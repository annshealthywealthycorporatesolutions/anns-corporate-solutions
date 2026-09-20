document.getElementById('year').textContent=new Date().getFullYear();

document.getElementById('enquiryForm').addEventListener('submit',function(e){
  e.preventDefault();
  const value=id=>document.getElementById(id).value.trim();
  const subject='Website Enquiry - '+value('service');
  const body=
    'Name: '+value('name')+'\n'+
    'Phone: '+value('phone')+'\n'+
    'Email: '+value('email')+'\n'+
    'Service: '+value('service')+'\n\n'+
    'Message:\n'+value('message');

  window.location.href=
    'mailto:annshealthywealthycorporatesol@gmail.com'+
    '?cc=rajasekar1202@gmail.com'+
    '&subject='+encodeURIComponent(subject)+
    '&body='+encodeURIComponent(body);
});