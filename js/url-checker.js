if (window.location) {
   if (window.location.search.includes('position')) {
      let jobName = window.location.search.split('position=')[1].split('&')[0];
      if (jobName !== undefined && jobName !== null) {
         console.log(jobName);
         while (jobName.includes('%20')) {
            jobName = jobName.replace('%20', ' ');
         }
      }
      let domJobName = document.getElementById('jobTitle');
      if (domJobName !== null && domJobName !== undefined) {
         domJobName.innerHTML = jobName;
      }
   } else {
      window.location.replace('index.html'); 
   }
}