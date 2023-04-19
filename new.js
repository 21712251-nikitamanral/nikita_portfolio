const svg = document.querySelector("#dropdown>svg");
svg.addEventListener('click',(e)=>{
  document.querySelector("#dropdown>#dropdown_content").classList.toggle('d_none')
})