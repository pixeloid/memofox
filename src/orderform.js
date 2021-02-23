export const orderForm = [{
  title: 'Válaszd ki a videód típusát',
  multi: false,
  items: [{
    active: true,
    name: 'Utazás vagy Kaland Videó',
    image: require('@/assets/svg/traveler.svg')
  },{
    active: false,
    name: 'Extrém sport vagy Motorsport Videó',
    image: require('@/assets/svg/action.svg')
  },{
    active: false,
    name: 'Vlog Videó',
    image: require('@/assets/svg/vlog.svg')
  },{
    active: false,
    name: 'Esemény, Nászút vagy Esküvői Videó',
    image: require('@/assets/svg/party.svg')
  }]
},{
  title: 'Személyes, vagy Céges videó?',
  multi: false,
  items: [{
    active: true,
    name: 'Személyes Videó',
    image: require('@/assets/svg/personal.svg')
  },{
    active: false,
    name: 'Céges Videó',
    image: require('@/assets/svg/business.svg')
  }]
},{
  title: 'Válaszd ki, hogy milyen eszközökkel készültek a felvételek!',
  multi: true,
  items: [{
    active: false,
    name: 'Akció kamera (GoPro, Sony... stb.)',
    image: require('@/assets/svg/gopro.svg')
  },{
    active: false,
    name: 'Okostelefon (iPhone, Samsung... stb.)',
    image: require('@/assets/svg/smartphone.svg')
  },{
    active: false,
    name: 'Képek',
    image: require('@/assets/svg/photo.svg')
  },{
    active: false,
    name: 'Drone (DJI, Parrot, Autel... stb.)',
    image: require('@/assets/svg/drone.svg')
  },{
    active: false,
    name: '360 Camera (GoPro Max, Insta 360... stb.)',
    image: require('@/assets/svg/360camera.svg')
  },{
    active: false,
    name: 'DSLR (Sony, Cannon, Nikon... stb.)',
    image: require('@/assets/svg/dslr.svg')
  }]
},{
  title: 'Milyen legyen a szerkesztés stílusa?',
  multi: false,
  items: [{
    active: false,
    name: 'Epikus stílus',
    info: {
      subtitle: null,

    },
    image: null
  },{
    active: true,
    name: 'Mozi stílus',
    info: {
      subtitle: 'Legnépszerűbb!',
      highlight: true,


    },
    image: null
  }]
}]
