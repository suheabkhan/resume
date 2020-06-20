function getfile(file,callback){
var xhr=new XMLHttpRequest();
xhr.overrideMimeType("Application/json");
xhr.open('GET',file,true);
xhr.onreadystatechange=function(){
  if (xhr.readyState===4 && xhr.status=="200")
  {
    callback(xhr.responseText);


  }
}
xhr.send(null);
}
getfile("dynamic.json",function(text)
{
  var data=JSON.parse(text);
  console.log(data);
  profile(data.basics);
  career(data.career);
  details(data.education);
  skills(data.skills);
})
var main=document.querySelector(".main");
var left=document.querySelector(".left");
var right=document.querySelector(".right");
function profile(pro){

  var image=document.createElement("img");
  image.src=pro.img;
  left.appendChild(image);
  main.appendChild(left);
  var head=document.createElement("h2");
  head.textContent=pro.name;
  left.appendChild(head);
  main.appendChild(left);
  var profes=document.createElement("h3");
  profes.textContent=pro.profession;
  left.appendChild(profes);
  main.appendChild(left);

  var mail=document.createElement("h4");
  mail.textContent=pro.email;
  left.appendChild(mail);
  main.appendChild(left);

  var place=document.createElement("h4");
  place.textContent=pro.place;
  left.appendChild(place);
  main.appendChild(left);

}
function career(c){
  var head2=document.createElement("h2");
  head2.textContent="career objectives";
  right.appendChild(head2);
  main.appendChild(right);
  var hr=document.createElement("hr");
  right.appendChild(hr);
  main.appendChild(right);


  var head1=document.createElement("h4");
  head1.textContent=c.info;
  right.appendChild(head1);
  main.appendChild(right);

}
function details(q){
  var qual=document.createElement("h2");
  qual.textContent="Educational details";
  right.appendChild(qual);
  main.appendChild(right);
  var hr=document.createElement("hr");
  right.appendChild(hr);
var table=document.createElement("table");

  let row='';
row +=  "<tr>"+"<th>"+"S.NO"+"</th>"+
  "<th>"+"institute" +"</th>"+
  "<th>"+"DEGREE" +"</th>"+
  "<th>"+"YOP" +"</th>"+
  "</tr>";



  for(i in q){

  row += "<tr>"+"<td>"+q[i].sno +"</td>"+
"<td>"+q[i].institute +"</td>"+
"<td>"+q[i].degree +"</td>"+
"<td>"+q[i].yop +"</td>"+
"</tr>";
}
table.innerHTML=row;
right.appendChild(table);
main.appendChild(right);
}
function skills(f)
{
var head3=document.createElement("h2");
head3.textContent="technical skills";
right.appendChild(head3);
main.appendChild(right);
var ul=document.createElement(ul);
right.append(ul);
for(i in f)
{
  var li=document.createElement("li");
  li.textContent=f[i].information;
  ul.append(li);
}
}
