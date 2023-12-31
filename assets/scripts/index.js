import projects from "./projects.js"

const btnHabi = document.getElementById("btnHabilities")
const habilities = document.getElementById("habilities")
const btnProj = document.getElementById("btnProjects")
const secProj = document.getElementById("projects")
const btnContact = document.getElementById("btnContact")
const contact = document.getElementById("contact")
const top = document.getElementById("btnUp")
const divSwip = document.getElementById("divSwiper")
const copy = document.getElementById("copy")
const areaMessage = document.getElementById("message")
const characters = document.getElementById("characters")
const nav = document.getElementById("nav")

areaMessage.addEventListener("input", (e) => {
  characters.innerHTML = `<p class="text-end">${e.target.textLength} / 1000</p>`
  if (e.target.textLength === 1000) {
    areaMessage.setAttribute('maxlength', "1000")
  }
})


const renderProject = () => {
  let fragment = ""
  fragment += projects.map((p) => {
    return `
      <div class="swiper-slide flex flex-wrap justify-center w-[1000px] gap-5 lg:gap-20">
      <div class="max-[600px]:w-[250px] w-[400px] bg-[#101628] rounded-b-md">
      <div class="mb-2 relative">
      <a href="${p.deploy}" target="_blank" class="w-full ${p.deploy ? null : "pointer-events-none"} absolute z-1 bg-black max-[600px]:h-[150px] h-[200px] bg-opacity-10 md:hover:bg-opacity-0 md:bg-opacity-30 cursor-pointer transition-all duration-300"></a>
      <img class="w-full  max-[600px]:h-[150px] h-[200px] object-contain bg-transparent z-0" src="${p.image}" alt="ataraxia" />
      </div>
      <a href="${p.deploy}" target="_blank" class="text-xl font-[500] w-full text-start pl-3 text-[#9cc9f4] ${p.deploy ? null : "pointer-events-none"}">${p.name}</a>
      <p class="text-sm pl-3 mb-2">${p.category}</p>
      <div class="contact-head flex px-3 py-2 mb-2 items-center justify-evenly flex-wrap gap-1">
       ${p.technologies.map((t) => {
      return `<p key="${t}" class="px-1 my-1 text-[10px] font-[600] rounded-md text-center ${t}">${t}</p>`
    }).join("")
      }
      </div >
      <div class="w-full flex flex-wrap">
      <p class="pl-3 pb-2">Respositorios:</p>
       <div class="flex justify-around px-3 border-b border-[#2a4ba3] w-full pb-3">
        <a class="font-[500] md:hover:text-[#9cc9f4] transition-all duration-200" target="_blank" href="${p.repositories.front}" >Front</a>
        <a class="font-[500] md:hover:text-[#9cc9f4] transition-all duration-200" target="_blank" href="${p.repositories.back}" >Back</a>
        <a class="font-[500] ${p.repositories.mobile ? null : "pointer-events-none"} md:hover:text-[#9cc9f4] transition-all duration-200" target="_blank" href="${p.repositories.mobile}" >${p.repositories.mobile ? "Mobile" : "-"}</a>
       </div>
       <a class="${p.deploy ? null : "pointer-events-none"} btnDeploy font-[500] w-full text-center py-1 bg-[#1e2f5c] rounded-b-md hover:bg-[#1e356e] transition-all duration-300 min-h-[32px]" href="${p.deploy}" target="_blank">${p.deploy ? "Deploy" : ""}</a>
          </div>
        </div > 
      <p class="w-[500px] break-words order-[-1] md:order-1 text-justify">
        ${p.description}
      </p>
    </div>
  `
  }).join("")
  divSwip.innerHTML = fragment
}

renderProject()

const renderCopy = () => {
  let year = new Date()
  copy.innerHTML = `<p class="text-[#99c9f7]">Lázaro Tomás Del Prado © Año ${year.getFullYear()}</p>`
}

renderCopy()

btnHabi.addEventListener("click", (e) => {
  const href = habilities.offsetTop - 60
  window.scroll({ top: href, behavior: "smooth" })
})
btnProj.addEventListener("click", (e) => {
  const href = secProj.offsetTop - 60
  window.scroll({ top: href, behavior: "smooth" })
})
btnContact.addEventListener("click", (e) => {
  const href = contact.offsetTop - 60
  window.scroll({ top: href, behavior: "smooth" })
})
top.addEventListener("click", (e) => {
  window.scroll({
    top: 0,
    behavior: "smooth"
  })
})

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 500) {
    top.classList.add("w-12")
    top.classList.remove("w-0")
  } else {
    top.classList.remove("w-12")
    top.classList.add("w-0")
  }
  if (window.scrollY > 0) {
    nav.classList.replace('bg-opacity-0', 'bg-opacity-90')
  } else {
    nav.classList.replace('bg-opacity-90', 'bg-opacity-0')
  }
})


//---------------------------------------------------------------
//-------------EMAILJS
const btn = document.getElementById('button')

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault()

    btn.value = 'Enviando...'

    const serviceID = 'service_80sekxo'
    const templateID = 'template_sfaekwg'
    if (document.getElementById("name").value &&
      document.getElementById("email").value &&
      document.getElementById("message").value) {
      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Enviar!'
          // alert('Sent!')
          document.getElementById("body").innerHTML =
            `
      <div class="w-full flex justify-center items-center h-screen absolute bg-black bg-opacity-60">
        <div class="w-auto h-auto py-10 px-10 flex flex-col gap-10 justify-center items-center bg-[#09090b] border-2 border-[#1c2b4e] rounded-md">
          <h2 class="text-2xl">Su mensaje fue enviado correctamente 👍!!</h2>
          <input id="btnAcept" type="button" value="Aceptar" class="w-[100px] h-[42px] text-center bg-[#244184] font-[500] rounded-md border"/>
        </div>
      </div>
      `
          document.getElementById("btnAcept").addEventListener("click", (e) => {
            window.location.reload()
          })
        }, (err) => {
          btn.value = 'Enviar!'
          alert(JSON.stringify(err))
        })
    } else {
      if (!document.getElementById("name").value) {
        alert("Debe ingresar un nombre!")
        btn.value = 'Enviar!'
      }
      if (!document.getElementById("email").value) {
        alert("Debe ingresar un email!")
        btn.value = 'Enviar!'
      }
      if (!document.getElementById("message").value) {
        alert("Debe escribir un mensaje!")
        btn.value = 'Enviar!'
      }

    }

  })