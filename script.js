const captions=[
 ['A smile I could never get tired of.','Somehow, you make even ordinary moments lovely.','A little lavender, a lot of lovely.','Collecting little moments of you.','My favourite kind of coffee break.','A whole adventure in one picture.','You make simple things feel special.','A face I wish I could see every day.','A little reminder of how lovely you are.','And this one… I had to save for last.']
][0];
const files=['01.jpg','02.jpg','09.jpg','04.jpg','03.jpg','06.jpg','07.jpg','05.jpg','08.jpg','10.jpg'];
const grid=document.getElementById('photoGrid');
files.forEach((file,i)=>{const card=document.createElement('article');card.className='photo-card';card.style.setProperty('--tilt',`${[-1.1,.8,-.6,1.1,-.8,.7,-1,.6,-.7,0][i]}deg`);const img=document.createElement('img');img.src=`assets/photos/${file}`;img.alt=`Bubby — photo ${i+1}`;img.loading='lazy';const p=document.createElement('p');p.textContent=captions[i];card.append(img,p);grid.append(card)});
document.getElementById('openBtn').addEventListener('click',()=>document.getElementById('note').scrollIntoView({behavior:'smooth'}));
const music=document.getElementById('galleryMusic'),musicBtn=document.getElementById('musicBtn'),musicStatus=document.getElementById('musicStatus');musicBtn.addEventListener('click',async()=>{if(music.paused){try{await music.play();musicBtn.textContent='Ⅱ';musicStatus.textContent='ON'}catch(e){musicStatus.textContent='TAP AGAIN'}}else{music.pause();musicBtn.textContent='▶';musicStatus.textContent='OFF'}});
const song=document.getElementById('songVideo');song.addEventListener('play',()=>{music.pause();musicBtn.textContent='▶';musicStatus.textContent='OFF'});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.section,.finale').forEach(el=>{el.classList.add('reveal');observer.observe(el)});
