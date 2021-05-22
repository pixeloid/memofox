export const orderForm = [{
  title: 'Válaszd ki a videód típusát',
  multi: false,
  amount: false,
  last: false,
  items: [{
    active: true,
    name: 'Utazás vagy Kaland Videó',
    icon: 'hiking',
    image: require('@/assets/svg/traveler.svg')
  }, {
    active: false,
    name: 'Extrém sport vagy Motorsport Videó',
    icon: 'kayaking',
    image: require('@/assets/svg/action.svg')
  }, {
    active: false,
    name: 'Vlog Videó',
    icon: 'video_camera_front',
    image: require('@/assets/svg/vlog.svg')
  }, {
    active: false,
    name: 'Esemény, Nászút vagy Esküvői Videó',
    icon: 'event',
    image: require('@/assets/svg/party.svg')
  }]
}, {
  title: 'Személyes, vagy Céges videó?',
  multi: false,
  items: [{
    active: true,
    name: 'Személyes Videó',
    icon: 'face',
    image: require('@/assets/svg/personal.svg')
  }, {
    active: false,
    name: 'Céges Videó',
    icon: 'maps_home_work',
    image: require('@/assets/svg/business.svg')
  }]
}, {
  title: 'Válaszd ki, hogy milyen eszközökkel készültek a felvételek!',
  multi: true,
  amount: false,
  last: false,
  items: [{
    active: false,
    name: 'Akció kamera (GoPro, Sony... stb.)',
    image: require('@/assets/svg/gopro.svg')
  }, {
    active: false,
    name: 'Okostelefon (iPhone, Samsung... stb.)',
    image: require('@/assets/svg/smartphone.svg')
  }, {
    active: false,
    name: 'Képek',
    image: require('@/assets/svg/photo.svg')
  }, {
    active: false,
    name: 'Drone (DJI, Parrot, Autel... stb.)',
    image: require('@/assets/svg/drone.svg')
  }, {
    active: false,
    name: '360 Camera (GoPro Max, Insta 360... stb.)',
    image: require('@/assets/svg/360camera.svg')
  }, {
    active: false,
    name: 'DSLR (Sony, Cannon, Nikon... stb.)',
    image: require('@/assets/svg/dslr.svg')
  }]
}, {
  title: 'Milyen legyen a szerkesztés stílusa?',
  multi: false,
  amount: false,
  last: false,
  items: [{
    active: false,
    name: 'Epikus stílus',
    info: {
      highlight: false,
      message: null,
      desc: [
        'Színkorrekciók',
        'Színillesztés és keverés',
        'Dinamikus átmenetek',
        'Természetes kameraátmenetek',
        'Beépített kamera audio',
        'Külső hangeffektek integrálása',
        'Képstabilizálás',
        'Vlog szerkesztés'
      ]
    },
    image: null
  }, {
    active: true,
    name: 'Mozi stílus',
    info: {
      highlight: true,
      message: 'A legnépszerűbb!',
      desc: [
        'Színkorrekciók',
        'Színillesztés és keverés',
        'Dinamikus átmenetek',
        'Természetes kameraátmenetek',
        'Beépített kamera audio',
        'Külső hangeffektek integrálása',
        'Képstabilizálás',
        'Vlog szerkesztés'
      ]
    },
    image: null
  }]
}, {
  title: 'Válaszd ki, hogy milyen hosszú legyen a videód!',
  multi: false,
  amount: false,
  last: false,
  items: [{
    active: false,
    name: '0 - 2 Perc',
    image: null,
    info: {
      highlight: false
    }
  }, {
    active: true,
    name: '2 - 4 Perc',
    image: null,
    info: {
      highlight: true,
      message: 'A legnépszerűbb!'
    }
  }, {
    active: false,
    name: '4 - 6 Perc',
    image: null,
    info: {
      highlight: false
    }
  }, {
    active: false,
    name: '6 - 8 Perc',
    image: null,
    info: {
      highlight: false
    }
  }]
}, {
  title: 'Becsüld meg a felvételeid méretét!',
  multi: false,
  amount: true,
  last: false,
  items: [{
    active: false,
    name: '20Gb',
    image: null,
    info: {
      highlight: false
    }
  }, {
    active: true,
    name: '30Gb',
    image: null,
    info: {
      highlight: false
    }
  }, {
    active: false,
    name: '40Gb',
    image: null,
    info: {
      highlight: false
    }
  }, {
    active: false,
    name: '50Gb',
    image: null,
    info: {
      highlight: false
    }
  }, {
    active: false,
    name: '60Gb',
    image: null,
    info: {
      highlight: false
    }
  }, {
    active: false,
    name: '70Gb',
    image: null,
    info: {
      highlight: false
    }
  }, {
    active: false,
    name: '80Gb',
    image: null,
    info: {
      highlight: false
    }
  }, {
    active: false,
    name: '120Gb',
    image: null,
    info: {
      highlight: false
    }
  }, {
    active: false,
    name: '160Gb',
    image: null,
    info: {
      highlight: false
    }
  }, {
    active: false,
    name: '200Gb',
    image: null,
    info: {
      highlight: false
    }
  }]
}, {
  title: 'Add meg az e-mail címed!',
  multi: false,
  amount: false,
  last: true,
  items: [{
    active: false,
    name: 'Fontos lépés, mert csapatunk e-mailben fog Veled kommunikálni.',
    image: null,
    info: {
      highlight: false,
      message: null,
      desc: []
    }
  }]
}]
