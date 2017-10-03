varKinetic,
__extends,
Uber;window.Modernizr=function(n,
t,
i){
  functionp(n){
    b.cssText=n
  }functionf(n,
  t){
    returntypeofn===t
  }varr={
    
  },
  h=!0,
  c=t.documentElement,
  e="modernizr",
  w=t.createElement(e),
  b=w.style,
  k,
  d={
    
  }.toString,
  u={
    
  },
  l=[
    
  ],
  a=l.slice,
  o,
  v={
    
  }.hasOwnProperty,
  y,
  s;y=!f(v,
  "undefined")&&!f(v.call,
  "undefined")?function(n,
  t){
    returnv.call(n,
    t)
  }: function(n,
  t){
    returntinn&&f(n.constructor.prototype[
      t
    ],
    "undefined")
  };Function.prototype.bind||(Function.prototype.bind=function(n){
    vart=this,
    i,
    r;if(typeoft!="function")thrownewTypeError;returni=a.call(arguments,
    1),
    r=function(){
      varf,
      e,
      u;returnthisinstanceofr?(f=function(){
        
      },
      f.prototype=t.prototype,
      e=newf,
      u=t.apply(e,
      i.concat(a.call(arguments))),
      Object(u)===u?u: e): t.apply(n,
      i.concat(a.call(arguments)))
    },
    r
  });u.canvas=function(){
    varn=t.createElement("canvas");return!!n.getContext&&!!n.getContext("2d")
  };u.history=function(){
    return!!n.history&&!!history.pushState
  };u.localstorage=function(){
    try{
      returnlocalStorage.setItem(e,
      e),
      localStorage.removeItem(e),
      !0
    }catch(n){
      return!1
    }
  };for(sinu)y(u,
  s)&&(o=s.toLowerCase(),
  r[
    o
  ]=u[
    s
  ](),
  l.push((r[
    o
  ]?"": "no-")+o));returnr.addTest=function(n,
  t){
    if(typeofn=="object")for(varuinn)y(n,
    u)&&r.addTest(u,
    n[
      u
    ]);else{
      if(n=n.toLowerCase(),
      r[
        n
      ]!==i)returnr;t=typeoft=="function"?t(): t;typeofh!="undefined"&&h&&(c.className+=" "+(t?"": "no-")+n);r[
        n
      ]=t
    }returnr
  },
  p(""),
  w=k=null,
  r._version="2.8.3",
  c.className=c.className.replace(/(^|\s)no-js(\s|$)/,
  "$1$2")+(h?" js "+l.join(" "): ""),
  r
}(this,
this.document),
function(n,
t,
i,
r){
  "use strict";functionhi(n,
  t,
  i){
    returnsetTimeout(li(n,
    i),
    t)
  }functionit(n,
  t,
  i){
    returnArray.isArray(n)?(v(n,
    i[
      t
    ],
    i),
    !0): !1
  }functionv(n,
  t,
  i){
    varu;if(n)if(n.forEach)n.forEach(t,
    i);elseif(n.length!==r)for(u=0;u<n.length;)t.call(i,
    n[
      u
    ],
    u,
    n),
    u++;elsefor(uinn)n.hasOwnProperty(u)&&t.call(i,
    n[
      u
    ],
    u,
    n)
  }functionk(n,
  t,
  i){
    for(varf=Object.keys(t),
    u=0;u<f.length;)(!i||i&&n[
      f[
        u
      ]
    ]===r)&&(n[
      f[
        u
      ]
    ]=t[
      f[
        u
      ]
    ]),
    u++;returnn
  }functionci(n,
  t){
    returnk(n,
    t,
    !0)
  }functiono(n,
  t,
  i){
    varu=t.prototype,
    r;r=n.prototype=Object.create(u);r.constructor=n;r._super=u;i&&k(r,
    i)
  }functionli(n,
  t){
    returnfunction(){
      returnn.apply(t,
      arguments)
    }
  }functionai(n,
  t){
    returntypeofn==fr?n.apply(t?t[
      0
    ]||r: r,
    t): n
  }functioner(n,
  t){
    returnn===r?t: n
  }functionpt(n,
  t,
  i){
    v(bt(t),
    function(t){
      n.addEventListener(t,
      i,
      !1)
    })
  }functionwt(n,
  t,
  i){
    v(bt(t),
    function(t){
      n.removeEventListener(t,
      i,
      !1)
    })
  }functionor(n,
  t){
    while(n){
      if(n==t)return!0;n=n.parentNode
    }return!1
  }functiond(n,
  t){
    returnn.indexOf(t)>-1
  }functionbt(n){
    returnn.trim().split(/\s+/g)
  }functionrt(n,
  t,
  i){
    if(n.indexOf&&!i)returnn.indexOf(t);for(varr=0;r<n.length;){
      if(i&&n[
        r
      ][
        i
      ]==t||!i&&n[
        r
      ]===t)returnr;r++
    }return-1
  }functionkt(n){
    returnArray.prototype.slice.call(n,
    0)
  }functionsr(n,
  t,
  i){
    for(varu=[
      
    ],
    e=[
      
    ],
    r=0,
    f;r<n.length;)f=t?n[
      r
    ][
      t
    ]: n[
      r
    ],
    rt(e,
    f)<0&&u.push(n[
      r
    ]),
    e[
      r
    ]=f,
    r++;returni&&(u=t?u.sort(function(n,
    i){
      returnn[
        t
      ]>i[
        t
      ]
    }): u.sort()),
    u
  }functiondt(n,
  t){
    for(vari,
    u,
    e=t[
      0
    ].toUpperCase()+t.slice(1),
    f=0;f<ur.length;){
      if(i=ur[
        f
      ],
      u=i?i+e: t,
      uinn)returnu;f++
    }returnr
  }functionhu(){
    returnsu++
  }functionhr(n){
    vart=n.ownerDocument;returnt.defaultView||t.parentWindow
  }functions(n,
  t){
    vari=this;this.manager=n;this.callback=t;this.element=n.element;this.target=n.options.inputTarget;this.domHandler=function(t){
      ai(n.options.enable,
      [
        n
      ])&&i.handler(t)
    };this.init()
  }functionvu(n){
    vart,
    i=n.options.inputClass;returnt=i?i: cu?pi: lu?ri: cr?wi: ii,
    newt(n,
    yu)
  }functionyu(n,
  t,
  i){
    varr=i.pointers.length,
    o=i.changedPointers.length,
    s=t&f&&r-o==0,
    h=t&(u|e)&&r-o==0;i.isFirst=!!s;i.isFinal=!!h;s&&(n.session={
      
    });i.eventType=t;pu(n,
    i);n.emit("hammer.input",
    i);n.recognize(i);n.session.prevInput=i
  }functionpu(n,
  t){
    vari=n.session,
    u=t.pointers,
    e=u.length,
    f;i.firstInput||(i.firstInput=vr(t));e>1&&!i.firstMultiple?i.firstMultiple=vr(t): e===1&&(i.firstMultiple=!1);varo=i.firstInput,
    r=i.firstMultiple,
    s=r?r.center: o.center,
    h=t.center=yr(u);t.timeStamp=si();t.deltaTime=t.timeStamp-o.timeStamp;t.angle=yi(s,
    h);t.distance=ti(s,
    h);wu(i,
    t);t.offsetDirection=pr(t.deltaX,
    t.deltaY);t.scale=r?gu(r.pointers,
    u): 1;t.rotation=r?du(r.pointers,
    u): 0;bu(i,
    t);f=n.element;or(t.srcEvent.target,
    f)&&(f=t.srcEvent.target);t.target=f
  }functionwu(n,
  t){
    vari=t.center,
    r=n.offsetDelta||{
      
    },
    e=n.prevDelta||{
      
    },
    o=n.prevInput||{
      
    };(t.eventType===f||o.eventType===u)&&(e=n.prevDelta={
      x: o.deltaX||0,
      y: o.deltaY||0
    },
    r=n.offsetDelta={
      x: i.x,
      y: i.y
    });t.deltaX=e.x+(i.x-r.x);t.deltaY=e.y+(i.y-r.y)
  }functionbu(n,
  t){
    vari=n.lastInterval||t,
    c=t.timeStamp-i.timeStamp,
    f,
    o,
    s,
    h;if(t.eventType!=e&&(c>au||i.velocity===r)){
      varl=i.deltaX-t.deltaX,
      a=i.deltaY-t.deltaY,
      u=ku(c,
      l,
      a);o=u.x;s=u.y;f=ft(u.x)>ft(u.y)?u.x: u.y;h=pr(l,
      a);n.lastInterval=t
    }elsef=i.velocity,
    o=i.velocityX,
    s=i.velocityY,
    h=i.direction;t.velocity=f;t.velocityX=o;t.velocityY=s;t.direction=h
  }functionvr(n){
    for(vari=[
      
    ],
    t=0;t<n.pointers.length;)i[
      t
    ]={
      clientX: tt(n.pointers[
        t
      ].clientX),
      clientY: tt(n.pointers[
        t
      ].clientY)
    },
    t++;return{
      timeStamp: si(),
      pointers: i,
      center: yr(i),
      deltaX: n.deltaX,
      deltaY: n.deltaY
    }
  }functionyr(n){
    vart=n.length;if(t===1)return{
      x: tt(n[
        0
      ].clientX),
      y: tt(n[
        0
      ].clientY)
    };for(varr=0,
    u=0,
    i=0;i<t;)r+=n[
      i
    ].clientX,
    u+=n[
      i
    ].clientY,
    i++;return{
      x: tt(r/t),
      y: tt(u/t)
    }
  }functionku(n,
  t,
  i){
    return{
      x: t/n||0,
      y: i/n||0
    }
  }functionpr(n,
  t){
    returnn===t?gt: ft(n)>=ft(t)?n>0?ot: st: t>0?ht: ct
  }functionti(n,
  t,
  i){
    i||(i=ar);varr=t[
      i[
        0
      ]
    ]-n[
      i[
        0
      ]
    ],
    u=t[
      i[
        1
      ]
    ]-n[
      i[
        1
      ]
    ];returnMath.sqrt(r*r+u*u)
  }functionyi(n,
  t,
  i){
    i||(i=ar);varr=t[
      i[
        0
      ]
    ]-n[
      i[
        0
      ]
    ],
    u=t[
      i[
        1
      ]
    ]-n[
      i[
        1
      ]
    ];returnMath.atan2(u,
    r)*180/Math.PI
  }functiondu(n,
  t){
    returnyi(t[
      1
    ],
    t[
      0
    ],
    ni)-yi(n[
      1
    ],
    n[
      0
    ],
    ni)
  }functiongu(n,
  t){
    returnti(t[
      0
    ],
    t[
      1
    ],
    ni)/ti(n[
      0
    ],
    n[
      1
    ],
    ni)
  }functionii(){
    this.evEl=tf;this.evWin=rf;this.allow=!0;this.pressed=!1;s.apply(this,
    arguments)
  }functionpi(){
    this.evEl=wr;this.evWin=br;s.apply(this,
    arguments);this.store=this.manager.session.pointerEvents=[
      
    ]
  }functionkr(){
    this.evTarget=of;this.evWin=sf;this.started=!1;s.apply(this,
    arguments)
  }functionhf(n,
  t){
    vari=kt(n.touches),
    r=kt(n.changedTouches);returnt&(u|e)&&(i=sr(i.concat(r),
    "identifier",
    !0)),
    [
      i,
      r
    ]
  }functionri(){
    this.evTarget=gr;this.targetIds={
      
    };s.apply(this,
    arguments)
  }functioncf(n,
  t){
    varr=kt(n.touches),
    o=this.targetIds;if(t&(f|g)&&r.length===1)returno[
      r[
        0
      ].identifier
    ]=!0,
    [
      r,
      r
    ];vari,
    s,
    h=kt(n.changedTouches),
    c=[
      
    ],
    l=this.target;if(s=r.filter(function(n){
      returnor(n.target,
      l)
    }),
    t===f)for(i=0;i<s.length;)o[
      s[
        i
      ].identifier
    ]=!0,
    i++;for(i=0;i<h.length;)o[
      h[
        i
      ].identifier
    ]&&c.push(h[
      i
    ]),
    t&(u|e)&&deleteo[
      h[
        i
      ].identifier
    ],
    i++;if(c.length)return[
      sr(s.concat(c),
      "identifier",
      !0),
      c
    ]
  }functionwi(){
    s.apply(this,
    arguments);varn=li(this.handler,
    this);this.touch=newri(this.manager,
    n);this.mouse=newii(this.manager,
    n)
  }functionki(n,
  t){
    this.manager=n;this.set(t)
  }functionlf(n){
    if(d(n,
    lt))returnlt;vart=d(n,
    at),
    i=d(n,
    vt);returnt&&i?at+" "+vt: t||i?t?at: vt: d(n,
    bi)?bi: ru
  }functionp(n){
    this.id=hu();this.manager=null;this.options=ci(n||{
      
    },
    this.defaults);this.options.enable=er(this.options.enable,
    !0);this.state=ui;this.simultaneous={
      
    };this.requireFail=[
      
    ]
  }functionaf(n){
    returnn&yt?"cancel": n&w?"end": n&ut?"move": n&h?"start": ""
  }functionuu(n){
    returnn==ct?"down": n==ht?"up": n==ot?"left": n==st?"right": ""
  }functionfi(n,
  t){
    vari=t.manager;returni?i.get(n): n
  }functionc(){
    p.apply(this,
    arguments)
  }functionei(){
    c.apply(this,
    arguments);this.pX=null;this.pY=null
  }functiondi(){
    c.apply(this,
    arguments)
  }functiongi(){
    p.apply(this,
    arguments);this._timer=null;this._input=null
  }functionnr(){
    c.apply(this,
    arguments)
  }functiontr(){
    c.apply(this,
    arguments)
  }functionoi(){
    p.apply(this,
    arguments);this.pTime=!1;this.pCenter=!1;this._timer=null;this._input=null;this.count=0
  }functionb(n,
  t){
    returnt=t||{
      
    },
    t.recognizers=er(t.recognizers,
    b.defaults.preset),
    newrr(n,
    t)
  }functionrr(n,
  t){
    t=t||{
      
    };this.options=ci(t,
    b.defaults);this.options.inputTarget=this.options.inputTarget||n;this.handlers={
      
    };this.session={
      
    };this.recognizers=[
      
    ];this.element=n;this.input=vu(this);this.touchAction=newki(this,
    this.options.touchAction);eu(this,
    !0);v(t.recognizers,
    function(n){
      vart=this.add(newn[
        0
      ](n[
        1
      ]));n[
        2
      ]&&t.recognizeWith(n[
        2
      ]);n[
        3
      ]&&t.requireFailure(n[
        3
      ])
    },
    this)
  }functioneu(n,
  t){
    vari=n.element;v(n.options.cssProps,
    function(n,
    r){
      i.style[
        dt(i.style,
        r)
      ]=t?n: ""
    })
  }functionvf(n,
  i){
    varr=t.createEvent("Event");r.initEvent(n,
    !0,
    !0);r.gesture=i;i.target.dispatchEvent(r)
  }varur=[
    "",
    "webkit",
    "moz",
    "MS",
    "ms",
    "o"
  ],
  ou=t.createElement("div"),
  fr="function",
  tt=Math.round,
  ft=Math.abs,
  si=Date.now,
  su=1,
  cr="ontouchstart"inn,
  cu=dt(n,
  "PointerEvent")!==r,
  lu=cr&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
  et="touch",
  vi="mouse",
  au=25,
  f=1,
  g=2,
  u=4,
  e=8,
  gt=1,
  ot=2,
  st=4,
  ht=8,
  ct=16,
  l=ot|st,
  nt=ht|ct,
  lr=l|nt,
  ar=[
    "x",
    "y"
  ],
  ni=[
    "clientX",
    "clientY"
  ],
  dr,
  gr,
  fu,
  ir;s.prototype={
    handler: function(){
      
    },
    init: function(){
      this.evEl&&pt(this.element,
      this.evEl,
      this.domHandler);this.evTarget&&pt(this.target,
      this.evTarget,
      this.domHandler);this.evWin&&pt(hr(this.element),
      this.evWin,
      this.domHandler)
    },
    destroy: function(){
      this.evEl&&wt(this.element,
      this.evEl,
      this.domHandler);this.evTarget&&wt(this.target,
      this.evTarget,
      this.domHandler);this.evWin&&wt(hr(this.element),
      this.evWin,
      this.domHandler)
    }
  };varnf={
    mousedown: f,
    mousemove: g,
    mouseup: u
  },
  tf="mousedown",
  rf="mousemove mouseup";o(ii,
  s,
  {
    handler: function(n){
      vart=nf[
        n.type
      ];(t&f&&n.button===0&&(this.pressed=!0),
      t&g&&n.which!==1&&(t=u),
      this.pressed&&this.allow)&&(t&u&&(this.pressed=!1),
      this.callback(this.manager,
      t,
      {
        pointers: [
          n
        ],
        changedPointers: [
          n
        ],
        pointerType: vi,
        srcEvent: n
      }))
    }
  });varuf={
    pointerdown: f,
    pointermove: g,
    pointerup: u,
    pointercancel: e,
    pointerout: e
  },
  ff={
    2: et,
    3: "pen",
    4: vi,
    5: "kinect"
  },
  wr="pointerdown",
  br="pointermove pointerup pointercancel";n.MSPointerEvent&&(wr="MSPointerDown",
  br="MSPointerMove MSPointerUp MSPointerCancel");o(pi,
  s,
  {
    handler: function(n){
      vart=this.store,
      o=!1,
      h=n.type.toLowerCase().replace("ms",
      ""),
      r=uf[
        h
      ],
      s=ff[
        n.pointerType
      ]||n.pointerType,
      c=s==et,
      i=rt(t,
      n.pointerId,
      "pointerId");(r&f&&(n.button===0||c)?i<0&&(t.push(n),
      i=t.length-1): r&(u|e)&&(o=!0),
      i<0)||(t[
        i
      ]=n,
      this.callback(this.manager,
      r,
      {
        pointers: t,
        changedPointers: [
          n
        ],
        pointerType: s,
        srcEvent: n
      }),
      o&&t.splice(i,
      1))
    }
  });varef={
    touchstart: f,
    touchmove: g,
    touchend: u,
    touchcancel: e
  },
  of="touchstart",
  sf="touchstart touchmove touchend touchcancel";o(kr,
  s,
  {
    handler: function(n){
      vari=ef[
        n.type
      ],
      t;(i===f&&(this.started=!0),
      this.started)&&(t=hf.call(this,
      n,
      i),
      i&(u|e)&&t[
        0
      ].length-t[
        1
      ].length==0&&(this.started=!1),
      this.callback(this.manager,
      i,
      {
        pointers: t[
          0
        ],
        changedPointers: t[
          1
        ],
        pointerType: et,
        srcEvent: n
      }))
    }
  });dr={
    touchstart: f,
    touchmove: g,
    touchend: u,
    touchcancel: e
  };gr="touchstart touchmove touchend touchcancel";o(ri,
  s,
  {
    handler: function(n){
      vari=dr[
        n.type
      ],
      t=cf.call(this,
      n,
      i);t&&this.callback(this.manager,
      i,
      {
        pointers: t[
          0
        ],
        changedPointers: t[
          1
        ],
        pointerType: et,
        srcEvent: n
      })
    }
  });o(wi,
  s,
  {
    handler: function(n,
    t,
    i){
      varr=i.pointerType==et,
      f=i.pointerType==vi;if(r)this.mouse.allow=!1;elseif(f&&!this.mouse.allow)return;t&(u|e)&&(this.mouse.allow=!0);this.callback(n,
      t,
      i)
    },
    destroy: function(){
      this.touch.destroy();this.mouse.destroy()
    }
  });varnu=dt(ou.style,
  "touchAction"),
  tu=nu!==r,
  iu="compute",
  ru="auto",
  bi="manipulation",
  lt="none",
  at="pan-x",
  vt="pan-y";ki.prototype={
    set: function(n){
      n==iu&&(n=this.compute());tu&&(this.manager.element.style[
        nu
      ]=n);this.actions=n.toLowerCase().trim()
    },
    update: function(){
      this.set(this.manager.options.touchAction)
    },
    compute: function(){
      varn=[
        
      ];returnv(this.manager.recognizers,
      function(t){
        ai(t.options.enable,
        [
          t
        ])&&(n=n.concat(t.getTouchAction()))
      }),
      lf(n.join(" "))
    },
    preventDefaults: function(n){
      vart,
      i;if(!tu){
        if(t=n.srcEvent,
        i=n.offsetDirection,
        this.manager.session.prevented){
          t.preventDefault();return
        }varr=this.actions,
        u=d(r,
        lt),
        f=d(r,
        vt),
        e=d(r,
        at);if(u||f&&i&l||e&&i&nt)returnthis.preventSrc(t)
      }
    },
    preventSrc: function(n){
      this.manager.session.prevented=!0;n.preventDefault()
    }
  };varui=1,
  h=2,
  ut=4,
  w=8,
  y=w,
  yt=16,
  a=32;p.prototype={
    defaults: {
      
    },
    set: function(n){
      returnk(this.options,
      n),
      this.manager&&this.manager.touchAction.update(),
      this
    },
    recognizeWith: function(n){
      if(it(n,
      "recognizeWith",
      this))returnthis;vart=this.simultaneous;returnn=fi(n,
      this),
      t[
        n.id
      ]||(t[
        n.id
      ]=n,
      n.recognizeWith(this)),
      this
    },
    dropRecognizeWith: function(n){
      returnit(n,
      "dropRecognizeWith",
      this)?this: (n=fi(n,
      this),
      deletethis.simultaneous[
        n.id
      ],
      this)
    },
    requireFailure: function(n){
      if(it(n,
      "requireFailure",
      this))returnthis;vart=this.requireFail;returnn=fi(n,
      this),
      rt(t,
      n)===-1&&(t.push(n),
      n.requireFailure(this)),
      this
    },
    dropRequireFailure: function(n){
      if(it(n,
      "dropRequireFailure",
      this))returnthis;n=fi(n,
      this);vart=rt(this.requireFail,
      n);returnt>-1&&this.requireFail.splice(t,
      1),
      this
    },
    hasRequireFailures: function(){
      returnthis.requireFail.length>0
    },
    canRecognizeWith: function(n){
      return!!this.simultaneous[
        n.id
      ]
    },
    emit: function(n){
      functioni(i){
        r.manager.emit(r.options.event+(i?af(t): ""),
        n)
      }varr=this,
      t=this.state;t<w&&i(!0);i();t>=w&&i(!0)
    },
    tryEmit: function(n){
      if(this.canEmit())returnthis.emit(n);this.state=a
    },
    canEmit: function(){
      for(varn=0;n<this.requireFail.length;){
        if(!(this.requireFail[
          n
        ].state&(a|ui)))return!1;n++
      }return!0
    },
    recognize: function(n){
      vart=k({
        
      },
      n);if(!ai(this.options.enable,
      [
        this,
        t
      ])){
        this.reset();this.state=a;return
      }this.state&(y|yt|a)&&(this.state=ui);this.state=this.process(t);this.state&(h|ut|w|yt)&&this.tryEmit(t)
    },
    process: function(){
      
    },
    getTouchAction: function(){
      
    },
    reset: function(){
      
    }
  };o(c,
  p,
  {
    defaults: {
      pointers: 1
    },
    attrTest: function(n){
      vart=this.options.pointers;returnt===0||n.pointers.length===t
    },
    process: function(n){
      vart=this.state,
      i=n.eventType,
      r=t&(h|ut),
      f=this.attrTest(n);returnr&&(i&e||!f)?t|yt: r||f?i&u?t|w: (t&h)?t|ut: h: a
    }
  });o(ei,
  c,
  {
    defaults: {
      event: "pan",
      threshold: 10,
      pointers: 1,
      direction: lr
    },
    getTouchAction: function(){
      vart=this.options.direction,
      n=[
        
      ];returnt&l&&n.push(vt),
      t&nt&&n.push(at),
      n
    },
    directionTest: function(n){
      vari=this.options,
      r=!0,
      u=n.distance,
      t=n.direction,
      f=n.deltaX,
      e=n.deltaY;returnt&i.direction||(i.direction&l?(t=f===0?gt: f<0?ot: st,
      r=f!=this.pX,
      u=Math.abs(n.deltaX)): (t=e===0?gt: e<0?ht: ct,
      r=e!=this.pY,
      u=Math.abs(n.deltaY))),
      n.direction=t,
      r&&u>i.threshold&&t&i.direction
    },
    attrTest: function(n){
      returnc.prototype.attrTest.call(this,
      n)&&(this.state&h||!(this.state&h)&&this.directionTest(n))
    },
    emit: function(n){
      this.pX=n.deltaX;this.pY=n.deltaY;vart=uu(n.direction);t&&this.manager.emit(this.options.event+t,
      n);this._super.emit.call(this,
      n)
    }
  });o(di,
  c,
  {
    defaults: {
      event: "pinch",
      threshold: 0,
      pointers: 2
    },
    getTouchAction: function(){
      return[
        lt
      ]
    },
    attrTest: function(n){
      returnthis._super.attrTest.call(this,
      n)&&(Math.abs(n.scale-1)>this.options.threshold||this.state&h)
    },
    emit: function(n){
      if(this._super.emit.call(this,
      n),
      n.scale!==1){
        vart=n.scale<1?"in": "out";this.manager.emit(this.options.event+t,
        n)
      }
    }
  });o(gi,
  p,
  {
    defaults: {
      event: "press",
      pointers: 1,
      time: 500,
      threshold: 5
    },
    getTouchAction: function(){
      return[
        ru
      ]
    },
    process: function(n){
      vart=this.options,
      i=n.pointers.length===t.pointers,
      r=n.distance<t.threshold,
      o=n.deltaTime>t.time;if(this._input=n,
      !r||!i||n.eventType&(u|e)&&!o)this.reset();elseif(n.eventType&f)this.reset(),
      this._timer=hi(function(){
        this.state=y;this.tryEmit()
      },
      t.time,
      this);elseif(n.eventType&u)returny;returna
    },
    reset: function(){
      clearTimeout(this._timer)
    },
    emit: function(n){
      this.state===y&&(n&&n.eventType&u?this.manager.emit(this.options.event+"up",
      n): (this._input.timeStamp=si(),
      this.manager.emit(this.options.event,
      this._input)))
    }
  });o(nr,
  c,
  {
    defaults: {
      event: "rotate",
      threshold: 0,
      pointers: 2
    },
    getTouchAction: function(){
      return[
        lt
      ]
    },
    attrTest: function(n){
      returnthis._super.attrTest.call(this,
      n)&&(Math.abs(n.rotation)>this.options.threshold||this.state&h)
    }
  });o(tr,
  c,
  {
    defaults: {
      event: "swipe",
      threshold: 10,
      velocity: .65,
      direction: l|nt,
      pointers: 1
    },
    getTouchAction: function(){
      returnei.prototype.getTouchAction.call(this)
    },
    attrTest: function(n){
      vart=this.options.direction,
      i;returnt&(l|nt)?i=n.velocity: t&l?i=n.velocityX: t&nt&&(i=n.velocityY),
      this._super.attrTest.call(this,
      n)&&t&n.direction&&n.distance>this.options.threshold&&ft(i)>this.options.velocity&&n.eventType&u
    },
    emit: function(n){
      vart=uu(n.direction);t&&this.manager.emit(this.options.event+t,
      n);this.manager.emit(this.options.event,
      n)
    }
  });o(oi,
  p,
  {
    defaults: {
      event: "tap",
      pointers: 1,
      taps: 1,
      interval: 300,
      time: 250,
      threshold: 2,
      posThreshold: 10
    },
    getTouchAction: function(){
      return[
        bi
      ]
    },
    process: function(n){
      vart=this.options,
      o=n.pointers.length===t.pointers,
      s=n.distance<t.threshold,
      c=n.deltaTime<t.time,
      i,
      r,
      e;if(this.reset(),
      n.eventType&f&&this.count===0)returnthis.failTimeout();if(s&&c&&o){
        if(n.eventType!=u)returnthis.failTimeout();if(i=this.pTime?n.timeStamp-this.pTime<t.interval: !0,
        r=!this.pCenter||ti(this.pCenter,
        n.center)<t.posThreshold,
        this.pTime=n.timeStamp,
        this.pCenter=n.center,
        r&&i?this.count+=1: this.count=1,
        this._input=n,
        e=this.count%t.taps,
        e===0)returnthis.hasRequireFailures()?(this._timer=hi(function(){
          this.state=y;this.tryEmit()
        },
        t.interval,
        this),
        h): y
      }returna
    },
    failTimeout: function(){
      returnthis._timer=hi(function(){
        this.state=a
      },
      this.options.interval,
      this),
      a
    },
    reset: function(){
      clearTimeout(this._timer)
    },
    emit: function(){
      this.state==y&&(this._input.tapCount=this.count,
      this.manager.emit(this.options.event,
      this._input))
    }
  });b.VERSION="2.0.4";b.defaults={
    domEvents: !1,
    touchAction: iu,
    enable: !0,
    inputTarget: null,
    inputClass: null,
    preset: [
      [
        nr,
        {
          enable: !1
        }
      ],
      [
        di,
        {
          enable: !1
        },
        [
          "rotate"
        ]
      ],
      [
        tr,
        {
          direction: l
        }
      ],
      [
        ei,
        {
          direction: l
        },
        [
          "swipe"
        ]
      ],
      [
        oi
      ],
      [
        oi,
        {
          event: "doubletap",
          taps: 2
        },
        [
          "tap"
        ]
      ],
      [
        gi
      ]
    ],
    cssProps: {
      userSelect: "none",
      touchSelect: "none",
      touchCallout: "none",
      contentZooming: "none",
      userDrag: "none",
      tapHighlightColor: "rgba(0,0,0,0)"
    }
  };fu=1;ir=2;rr.prototype={
    set: function(n){
      returnk(this.options,
      n),
      n.touchAction&&this.touchAction.update(),
      n.inputTarget&&(this.input.destroy(),
      this.input.target=n.inputTarget,
      this.input.init()),
      this
    },
    stop: function(n){
      this.session.stopped=n?ir: fu
    },
    recognize: function(n){
      varr=this.session,
      i,
      f,
      t,
      u;if(!r.stopped)for(this.touchAction.preventDefaults(n),
      f=this.recognizers,
      t=r.curRecognizer,
      (!t||t&&t.state&y)&&(t=r.curRecognizer=null),
      u=0;u<f.length;)i=f[
        u
      ],
      r.stopped!==ir&&(!t||i==t||i.canRecognizeWith(t))?i.recognize(n): i.reset(),
      !t&&i.state&(h|ut|w)&&(t=r.curRecognizer=i),
      u++
    },
    get: function(n){
      vari,
      t;if(ninstanceofp)returnn;for(i=this.recognizers,
      t=0;t<i.length;t++)if(i[
        t
      ].options.event==n)returni[
        t
      ];returnnull
    },
    add: function(n){
      if(it(n,
      "add",
      this))returnthis;vart=this.get(n.options.event);returnt&&this.remove(t),
      this.recognizers.push(n),
      n.manager=this,
      this.touchAction.update(),
      n
    },
    remove: function(n){
      if(it(n,
      "remove",
      this))returnthis;vart=this.recognizers;returnn=this.get(n),
      t.splice(rt(t,
      n),
      1),
      this.touchAction.update(),
      this
    },
    on: function(n,
    t){
      vari=this.handlers;returnv(bt(n),
      function(n){
        i[
          n
        ]=i[
          n
        ]||[
          
        ];i[
          n
        ].push(t)
      }),
      this
    },
    off: function(n,
    t){
      vari=this.handlers;returnv(bt(n),
      function(n){
        t?i[
          n
        ].splice(rt(i[
          n
        ],
        t),
        1): deletei[
          n
        ]
      }),
      this
    },
    emit: function(n,
    t){
      vari,
      r;if(this.options.domEvents&&vf(n,
      t),
      i=this.handlers[
        n
      ]&&this.handlers[
        n
      ].slice(),
      i&&i.length)for(t.type=n,
      t.preventDefault=function(){
        t.srcEvent.preventDefault()
      },
      r=0;r<i.length;)i[
        r
      ](t),
      r++
    },
    destroy: function(){
      this.element&&eu(this,
      !1);this.handlers={
        
      };this.session={
        
      };this.input.destroy();this.element=null
    }
  };k(b,
  {
    INPUT_START: f,
    INPUT_MOVE: g,
    INPUT_END: u,
    INPUT_CANCEL: e,
    STATE_POSSIBLE: ui,
    STATE_BEGAN: h,
    STATE_CHANGED: ut,
    STATE_ENDED: w,
    STATE_RECOGNIZED: y,
    STATE_CANCELLED: yt,
    STATE_FAILED: a,
    DIRECTION_NONE: gt,
    DIRECTION_LEFT: ot,
    DIRECTION_RIGHT: st,
    DIRECTION_UP: ht,
    DIRECTION_DOWN: ct,
    DIRECTION_HORIZONTAL: l,
    DIRECTION_VERTICAL: nt,
    DIRECTION_ALL: lr,
    Manager: rr,
    Input: s,
    TouchAction: ki,
    TouchInput: ri,
    MouseInput: ii,
    PointerEventInput: pi,
    TouchMouseInput: wi,
    SingleTouchInput: kr,
    Recognizer: p,
    AttrRecognizer: c,
    Tap: oi,
    Pan: ei,
    Swipe: tr,
    Pinch: di,
    Rotate: nr,
    Press: gi,
    on: pt,
    off: wt,
    each: v,
    merge: ci,
    extend: k,
    inherit: o,
    bindFn: li,
    prefixed: dt
  });typeofdefine==fr&&define.amd?define(function(){
    returnb
  }): typeofmodule!="undefined"&&module.exports?module.exports=b: n[
    i
  ]=b
}(window,
document,
"Hammer");Kinetic={
  
};!function(){
  Kinetic={
    version: "4.7.4",
    stages: [
      
    ],
    idCounter: 0,
    ids: {
      
    },
    names: {
      
    },
    shapes: {
      
    },
    listenClickTap: !1,
    inDblClickWindow: !1,
    enableTrace: !1,
    traceArrMax: 100,
    dblClickWindow: 400,
    pixelRatio: void0,
    UA: function(){
      varn=navigator.userAgent.toLowerCase(),
      t=/(chrome)[
        \/
      ]([
        \w.
      ]+)/.exec(n)||/(webkit)[
        \/
      ]([
        \w.
      ]+)/.exec(n)||/(opera)(?: .*version|)[
        \/
      ]([
        \w.
      ]+)/.exec(n)||/(msie)([
        \w.
      ]+)/.exec(n)||n.indexOf("compatible")<0&&/(mozilla)(?: .*?rv: ([
        \w.
      ]+)|)/.exec(n)||[
        
      ];return{
        browser: t[
          1
        ]||"",
        version: t[
          2
        ]||"0"
      }
    }(),
    Filters: {
      
    },
    Node: function(n){
      this._init(n)
    },
    Shape: function(n){
      this.__init(n)
    },
    Container: function(n){
      this.__init(n)
    },
    Stage: function(n){
      this.___init(n)
    },
    Layer: function(n){
      this.___init(n)
    },
    Group: function(n){
      this.___init(n)
    },
    isDragging: function(){
      varn=Kinetic.DD;returnn?n.isDragging: !1
    },
    isDragReady: function(){
      varn=Kinetic.DD;returnn?!!n.node: !1
    },
    _addId: function(n,
    t){
      void0!==t&&(this.ids[
        t
      ]=n)
    },
    _removeId: function(n){
      void0!==n&&deletethis.ids[
        n
      ]
    },
    _addName: function(n,
    t){
      void0!==t&&(void0===this.names[
        t
      ]&&(this.names[
        t
      ]=[
        
      ]),
      this.names[
        t
      ].push(n))
    },
    _removeName: function(n,
    t){
      vari,
      r,
      u;if(void0!==n&&(i=this.names[
        n
      ],
      void0!==i)){
        for(r=0;r<i.length;r++)u=i[
          r
        ],
        u._id===t&&i.splice(r,
        1);0===i.length&&deletethis.names[
          n
        ]
      }
    }
  }
}(),
function(n,
t){
  "object"==typeofexports?module.exports=t(): "function"==typeofdefine&&define.amd?define(t): n.returnExports=t()
}(this,
function(){
  returnKinetic
});!function(){
  Kinetic.Collection=function(){
    vart=[
      
    ].slice.call(arguments),
    i=t.length,
    n=0;for(this.length=i;i>n;n++)this[
      n
    ]=t[
      n
    ];returnthis
  };Kinetic.Collection.prototype=[
    
  ];Kinetic.Collection.prototype.each=function(n){
    for(vart=0;t<this.length;t++)n(this[
      t
    ],
    t)
  };Kinetic.Collection.prototype.toArray=function(){
    for(vart=[
      
    ],
    i=this.length,
    n=0;i>n;n++)t.push(this[
      n
    ]);returnt
  };Kinetic.Collection.toCollection=function(n){
    for(vari=newKinetic.Collection,
    r=n.length,
    t=0;r>t;t++)i.push(n[
      t
    ]);returni
  };Kinetic.Collection.mapMethods=function(n){
    for(vari=n.length,
    t=0;i>t;t++)!function(t){
      vari=n[
        t
      ];Kinetic.Collection.prototype[
        i
      ]=function(){
        varn,
        t=this.length;for(args=[
          
        ].slice.call(arguments),
        n=0;t>n;n++)this[
          n
        ][
          i
        ].apply(this[
          n
        ],
        args)
      }
    }(t)
  };Kinetic.Transform=function(){
    this.m=[
      1,
      0,
      0,
      1,
      0,
      0
    ]
  };Kinetic.Transform.prototype={
    translate: function(n,
    t){
      this.m[
        4
      ]+=this.m[
        0
      ]*n+this.m[
        2
      ]*t;this.m[
        5
      ]+=this.m[
        1
      ]*n+this.m[
        3
      ]*t
    },
    scale: function(n,
    t){
      this.m[
        0
      ]*=n;this.m[
        1
      ]*=n;this.m[
        2
      ]*=t;this.m[
        3
      ]*=t
    },
    rotate: function(n){
      vart=Math.cos(n),
      i=Math.sin(n),
      r=this.m[
        0
      ]*t+this.m[
        2
      ]*i,
      u=this.m[
        1
      ]*t+this.m[
        3
      ]*i,
      f=this.m[
        0
      ]*-i+this.m[
        2
      ]*t,
      e=this.m[
        1
      ]*-i+this.m[
        3
      ]*t;this.m[
        0
      ]=r;this.m[
        1
      ]=u;this.m[
        2
      ]=f;this.m[
        3
      ]=e
    },
    getTranslation: function(){
      return{
        x: this.m[
          4
        ],
        y: this.m[
          5
        ]
      }
    },
    skew: function(n,
    t){
      vari=this.m[
        0
      ]+this.m[
        2
      ]*t,
      r=this.m[
        1
      ]+this.m[
        3
      ]*t,
      u=this.m[
        2
      ]+this.m[
        0
      ]*n,
      f=this.m[
        3
      ]+this.m[
        1
      ]*n;this.m[
        0
      ]=i;this.m[
        1
      ]=r;this.m[
        2
      ]=u;this.m[
        3
      ]=f
    },
    multiply: function(n){
      vart=this.m[
        0
      ]*n.m[
        0
      ]+this.m[
        2
      ]*n.m[
        1
      ],
      i=this.m[
        1
      ]*n.m[
        0
      ]+this.m[
        3
      ]*n.m[
        1
      ],
      r=this.m[
        0
      ]*n.m[
        2
      ]+this.m[
        2
      ]*n.m[
        3
      ],
      u=this.m[
        1
      ]*n.m[
        2
      ]+this.m[
        3
      ]*n.m[
        3
      ],
      f=this.m[
        0
      ]*n.m[
        4
      ]+this.m[
        2
      ]*n.m[
        5
      ]+this.m[
        4
      ],
      e=this.m[
        1
      ]*n.m[
        4
      ]+this.m[
        3
      ]*n.m[
        5
      ]+this.m[
        5
      ];this.m[
        0
      ]=t;this.m[
        1
      ]=i;this.m[
        2
      ]=r;this.m[
        3
      ]=u;this.m[
        4
      ]=f;this.m[
        5
      ]=e
    },
    invert: function(){
      varn=1/(this.m[
        0
      ]*this.m[
        3
      ]-this.m[
        1
      ]*this.m[
        2
      ]),
      t=this.m[
        3
      ]*n,
      i=-this.m[
        1
      ]*n,
      r=-this.m[
        2
      ]*n,
      u=this.m[
        0
      ]*n,
      f=n*(this.m[
        2
      ]*this.m[
        5
      ]-this.m[
        3
      ]*this.m[
        4
      ]),
      e=n*(this.m[
        1
      ]*this.m[
        4
      ]-this.m[
        0
      ]*this.m[
        5
      ]);this.m[
        0
      ]=t;this.m[
        1
      ]=i;this.m[
        2
      ]=r;this.m[
        3
      ]=u;this.m[
        4
      ]=f;this.m[
        5
      ]=e
    },
    getMatrix: function(){
      returnthis.m
    },
    setAbsolutePosition: function(n,
    t){
      vari=this.m[
        0
      ],
      r=this.m[
        1
      ],
      u=this.m[
        2
      ],
      o=this.m[
        3
      ],
      f=this.m[
        4
      ],
      s=this.m[
        5
      ],
      e=(i*(t-s)-r*(n-f))/(i*o-r*u),
      h=(n-f-u*e)/i;this.translate(h,
      e)
    }
  };vari="canvas",
  r="2d",
  u="[object Array]",
  f="[object Number]",
  e="[object String]",
  o=Math.PI/180,
  s=180/Math.PI,
  n="#",
  h="",
  c="0",
  l="Kinetic warning: ",
  a="Kinetic error: ",
  v="rgb(",
  t={
    aqua: [
      0,
      255,
      255
    ],
    lime: [
      0,
      255,
      0
    ],
    silver: [
      192,
      192,
      192
    ],
    black: [
      0,
      0,
      0
    ],
    maroon: [
      128,
      0,
      0
    ],
    teal: [
      0,
      128,
      128
    ],
    blue: [
      0,
      0,
      255
    ],
    navy: [
      0,
      0,
      128
    ],
    white: [
      255,
      255,
      255
    ],
    fuchsia: [
      255,
      0,
      255
    ],
    olive: [
      128,
      128,
      0
    ],
    yellow: [
      255,
      255,
      0
    ],
    orange: [
      255,
      165,
      0
    ],
    gray: [
      128,
      128,
      128
    ],
    purple: [
      128,
      0,
      128
    ],
    green: [
      0,
      128,
      0
    ],
    red: [
      255,
      0,
      0
    ],
    pink: [
      255,
      192,
      203
    ],
    cyan: [
      0,
      255,
      255
    ],
    transparent: [
      255,
      255,
      255,
      0
    ]
  },
  y=/rgb\((\d{
    1,
    3
  }),
  (\d{
    1,
    3
  }),
  (\d{
    1,
    3
  })\)/;Kinetic.Util={
    _isElement: function(n){
      return!(!n||1!=n.nodeType)
    },
    _isFunction: function(n){
      return!!(n&&n.constructor&&n.call&&n.apply)
    },
    _isObject: function(n){
      return!!n&&n.constructor==Object
    },
    _isArray: function(n){
      returnObject.prototype.toString.call(n)==u
    },
    _isNumber: function(n){
      returnObject.prototype.toString.call(n)==f
    },
    _isString: function(n){
      returnObject.prototype.toString.call(n)==e
    },
    _hasMethods: function(n){
      vart,
      i=[
        
      ];for(tinn)this._isFunction(n[
        t
      ])&&i.push(t);returni.length>0
    },
    _isInDocument: function(n){
      for(;n=n.parentNode;)if(n==document)return!0;return!1
    },
    _simplifyArray: function(n){
      for(vart,
      r=[
        
      ],
      f=n.length,
      u=Kinetic.Util,
      i=0;f>i;i++)t=n[
        i
      ],
      u._isNumber(t)?t=Math.round(1e3*t)/1e3: u._isString(t)||(t=t.toString()),
      r.push(t);returnr
    },
    _getXY: function(n){
      if(this._isNumber(n))return{
        x: n,
        y: n
      };if(this._isArray(n)){
        if(1===n.length){
          vart=n[
            0
          ];if(this._isNumber(t))return{
            x: t,
            y: t
          };if(this._isArray(t))return{
            x: t[
              0
            ],
            y: t[
              1
            ]
          };if(this._isObject(t))returnt
        }elseif(n.length>=2)return{
          x: n[
            0
          ],
          y: n[
            1
          ]
        }
      }elseif(this._isObject(n))returnn;returnnull
    },
    _getSize: function(n){
      if(this._isNumber(n))return{
        width: n,
        height: n
      };if(this._isArray(n))if(1===n.length){
        vart=n[
          0
        ];if(this._isNumber(t))return{
          width: t,
          height: t
        };if(this._isArray(t)){
          if(t.length>=4)return{
            width: t[
              2
            ],
            height: t[
              3
            ]
          };if(t.length>=2)return{
            width: t[
              0
            ],
            height: t[
              1
            ]
          }
        }elseif(this._isObject(t))returnt
      }else{
        if(n.length>=4)return{
          width: n[
            2
          ],
          height: n[
            3
          ]
        };if(n.length>=2)return{
          width: n[
            0
          ],
          height: n[
            1
          ]
        }
      }elseif(this._isObject(n))returnn;returnnull
    },
    _getPoints: function(n){
      vart,
      r,
      i=[
        
      ];if(void0===n)return[
        
      ];if(r=n.length,
      this._isArray(n[
        0
      ])){
        for(t=0;r>t;t++)i.push({
          x: n[
            t
          ][
            0
          ],
          y: n[
            t
          ][
            1
          ]
        });returni
      }if(this._isObject(n[
        0
      ]))returnn;for(t=0;r>t;t+=2)i.push({
        x: n[
          t
        ],
        y: n[
          t+1
        ]
      });returni
    },
    _getImage: function(n,
    t){
      varf,
      u;n?this._isElement(n)?t(n): this._isString(n)?(f=newImage,
      f.onload=function(){
        t(f)
      },
      f.src=n): n.data?(u=document.createElement(i),
      u.width=n.width,
      u.height=n.height,
      _context=u.getContext(r),
      _context.putImageData(n,
      0,
      0),
      this._getImage(u.toDataURL(),
      t)): t(null): t(null)
    },
    _rgbToHex: function(n,
    t,
    i){
      return(16777216+(n<<16)+(t<<8)+i).toString(16).slice(1)
    },
    _hexToRgb: function(t){
      t=t.replace(n,
      h);vari=parseInt(t,
      16);return{
        r: 255&i>>16,
        g: 255&i>>8,
        b: 255&i
      }
    },
    getRandomColor: function(){
      for(vart=(16777215*Math.random()<<0).toString(16);t.length<6;)t=c+t;returnn+t
    },
    get: function(n,
    t){
      returnvoid0===n?t: n
    },
    getRGB: function(i){
      varr;returniint?(r=t[
        i
      ],
      {
        r: r[
          0
        ],
        g: r[
          1
        ],
        b: r[
          2
        ]
      }): i[
        0
      ]===n?this._hexToRgb(i.substring(1)): i.substr(0,
      4)===v?(r=y.exec(i.replace(//g,
      "")),
      {
        r: parseInt(r[
          1
        ],
        10),
        g: parseInt(r[
          2
        ],
        10),
        b: parseInt(r[
          3
        ],
        10)
      }): {
        r: 0,
        g: 0,
        b: 0
      }
    },
    _merge: function(n,
    t){
      varr=this._clone(t),
      i;for(iinn)r[
        i
      ]=this._isObject(n[
        i
      ])?this._merge(n[
        i
      ],
      r[
        i
      ]): n[
        i
      ];returnr
    },
    _clone: function(n){
      vari={
        
      },
      t;for(tinn)i[
        t
      ]=this._isObject(n[
        t
      ])?this._clone(n[
        t
      ]): n[
        t
      ];returni
    },
    _degToRad: function(n){
      returnn*o
    },
    _radToDeg: function(n){
      returnn*s
    },
    _capitalize: function(n){
      returnn.charAt(0).toUpperCase()+n.slice(1)
    },
    error: function(n){
      thrownewError(a+n);
    },
    warn: function(n){
      window.console&&console.warn&&console.warn(l+n)
    },
    extend: function(n,
    t){
      for(variint.prototype)iinn.prototype||(n.prototype[
        i
      ]=t.prototype[
        i
      ])
    },
    addMethods: function(n,
    t){
      vari;for(iint)n.prototype[
        i
      ]=t[
        i
      ]
    },
    _getControlPoints: function(n,
    t,
    i,
    r){
      vare=n.x,
      o=n.y,
      u=t.x,
      f=t.y,
      s=i.x,
      h=i.y,
      c=Math.sqrt(Math.pow(u-e,
      2)+Math.pow(f-o,
      2)),
      l=Math.sqrt(Math.pow(s-u,
      2)+Math.pow(h-f,
      2)),
      a=r*c/(c+l),
      v=r*l/(c+l),
      y=u-a*(s-e),
      p=f-a*(h-o),
      w=u+v*(s-e),
      b=f+v*(h-o);return[
        {
          x: y,
          y: p
        },
        {
          x: w,
          y: b
        }
      ]
    },
    _expandPoints: function(n,
    t){
      for(varu,
      f=n.length,
      r=[
        
      ],
      i=1;f-1>i;i++)u=Kinetic.Util._getControlPoints(n[
        i-1
      ],
      n[
        i
      ],
      n[
        i+1
      ],
      t),
      r.push(u[
        0
      ]),
      r.push(n[
        i
      ]),
      r.push(u[
        1
      ]);returnr
    },
    _removeLastLetter: function(n){
      returnn.substring(0,
      n.length-1)
    }
  }
}();!function(){
  vart=document.createElement("canvas"),
  n=t.getContext("2d"),
  i=window.devicePixelRatio||1,
  r=n.webkitBackingStorePixelRatio||n.mozBackingStorePixelRatio||n.msBackingStorePixelRatio||n.oBackingStorePixelRatio||n.backingStorePixelRatio||1,
  u=i/r;Kinetic.Canvas=function(n){
    this.init(n)
  };Kinetic.Canvas.prototype={
    init: function(n){
      n=n||{
        
      };vart=n.pixelRatio||Kinetic.pixelRatio||u;this.pixelRatio=t;this._canvas=document.createElement("canvas");this._canvas.style.padding=0;this._canvas.style.margin=0;this._canvas.style.border=0;this._canvas.style.background="transparent";this._canvas.style.position="absolute";this._canvas.style.top=0;this._canvas.style.left=0
    },
    getContext: function(){
      returnthis.context
    },
    getPixelRatio: function(){
      returnthis.pixelRatio
    },
    setPixelRatio: function(n){
      this.pixelRatio=n;this.setSize(this.getWidth(),
      this.getHeight())
    },
    setWidth: function(n){
      this.width=this._canvas.width=n*this.pixelRatio;this._canvas.style.width=n+"px"
    },
    setHeight: function(n){
      this.height=this._canvas.height=n*this.pixelRatio;this._canvas.style.height=n+"px"
    },
    getWidth: function(){
      returnthis.width
    },
    getHeight: function(){
      returnthis.height
    },
    setSize: function(n,
    t){
      this.setWidth(n);this.setHeight(t)
    },
    toDataURL: function(n,
    t){
      try{
        returnthis._canvas.toDataURL(n,
        t)
      }catch(r){
        try{
          returnthis._canvas.toDataURL()
        }catch(i){
          returnKinetic.Util.warn("Unable to get data URL. "+i.message),
          ""
        }
      }
    }
  };Kinetic.SceneCanvas=function(n){
    n=n||{
      
    };vart=n.width||0,
    i=n.height||0;Kinetic.Canvas.call(this,
    n);this.context=newKinetic.SceneContext(this);this.setSize(t,
    i)
  };Kinetic.SceneCanvas.prototype={
    setWidth: function(n){
      vart=this.pixelRatio,
      i=this.getContext()._context;Kinetic.Canvas.prototype.setWidth.call(this,
      n);i.scale(t,
      t)
    },
    setHeight: function(n){
      vart=this.pixelRatio,
      i=this.getContext()._context;Kinetic.Canvas.prototype.setHeight.call(this,
      n);i.scale(t,
      t)
    }
  };Kinetic.Util.extend(Kinetic.SceneCanvas,
  Kinetic.Canvas);Kinetic.HitCanvas=function(n){
    n=n||{
      
    };vart=n.width||0,
    i=n.height||0;Kinetic.Canvas.call(this,
    n);this.context=newKinetic.HitContext(this);this.setSize(t,
    i)
  };Kinetic.Util.extend(Kinetic.HitCanvas,
  Kinetic.Canvas)
}();!function(){
  varn=",",
  i="(",
  r=")",
  u="([",
  f="])",
  e=";",
  o="()",
  s="=",
  t=[
    "arc",
    "arcTo",
    "beginPath",
    "bezierCurveTo",
    "clearRect",
    "clip",
    "closePath",
    "createLinearGradient",
    "createPattern",
    "createRadialGradient",
    "drawImage",
    "fill",
    "fillText",
    "getImageData",
    "lineTo",
    "moveTo",
    "putImageData",
    "quadraticCurveTo",
    "rect",
    "restore",
    "rotate",
    "save",
    "scale",
    "setLineDash",
    "setTransform",
    "stroke",
    "strokeText",
    "transform",
    "translate"
  ];Kinetic.Context=function(n){
    this.init(n)
  };Kinetic.Context.prototype={
    init: function(n){
      this.canvas=n;this._context=n._canvas.getContext("2d");Kinetic.enableTrace&&(this.traceArr=[
        
      ],
      this._enableTrace())
    },
    fillShape: function(n){
      n.getFillEnabled()&&this._fill(n)
    },
    strokeShape: function(n){
      n.getStrokeEnabled()&&this._stroke(n)
    },
    fillStrokeShape: function(n){
      vart=n.getFillEnabled();t&&this._fill(n);n.getStrokeEnabled()&&this._stroke(n)
    },
    getTrace: function(t){
      for(varc,
      v,
      a,
      y=this.traceArr,
      p=y.length,
      h="",
      l=0;p>l;l++)c=y[
        l
      ],
      v=c.method,
      v?(a=c.args,
      h+=v,
      h+=t?o: Kinetic.Util._isArray(a[
        0
      ])?u+a.join(n)+f: i+a.join(n)+r): (h+=c.property,
      t||(h+=s+c.val)),
      h+=e;returnh
    },
    clearTrace: function(){
      this.traceArr=[
        
      ]
    },
    _trace: function(n){
      vari,
      t=this.traceArr;t.push(n);i=t.length;i>=Kinetic.traceArrMax&&t.shift()
    },
    reset: function(){
      varn=this.getCanvas().getPixelRatio();this.setTransform(1*n,
      0,
      0,
      1*n,
      0,
      0)
    },
    getCanvas: function(){
      returnthis.canvas
    },
    clear: function(){
      varn,
      t,
      i=[
        
      ].slice.call(arguments),
      r=this.getCanvas();i.length?(n=Kinetic.Util._getXY(i),
      t=Kinetic.Util._getSize(i),
      this.clearRect(n.x||0,
      n.y||0,
      t.width,
      t.height)): this.clearRect(0,
      0,
      r.getWidth(),
      r.getHeight())
    },
    _applyLineCap: function(n){
      vart=n.getLineCap();t&&this.setAttr("lineCap",
      t)
    },
    _applyOpacity: function(n){
      vart=n.getAbsoluteOpacity();1!==t&&this.setAttr("globalAlpha",
      t)
    },
    _applyLineJoin: function(n){
      vart=n.getLineJoin();t&&this.setAttr("lineJoin",
      t)
    },
    _applyAncestorTransforms: function(n){
      vart=n.getAbsoluteTransform().getMatrix();this.transform(t[
        0
      ],
      t[
        1
      ],
      t[
        2
      ],
      t[
        3
      ],
      t[
        4
      ],
      t[
        5
      ])
    },
    _clip: function(n){
      vart=n.getClipX()||0,
      i=n.getClipY()||0,
      r=n.getClipWidth(),
      u=n.getClipHeight();this.save();this._applyAncestorTransforms(n);this.beginPath();this.rect(t,
      i,
      r,
      u);this.clip();this.reset();n._drawChildren(this.getCanvas());this.restore()
    },
    setAttr: function(n,
    t){
      this._context[
        n
      ]=t
    },
    arc: function(){
      varn=arguments;this._context.arc(n[
        0
      ],
      n[
        1
      ],
      n[
        2
      ],
      n[
        3
      ],
      n[
        4
      ],
      n[
        5
      ])
    },
    beginPath: function(){
      this._context.beginPath()
    },
    bezierCurveTo: function(){
      varn=arguments;this._context.bezierCurveTo(n[
        0
      ],
      n[
        1
      ],
      n[
        2
      ],
      n[
        3
      ],
      n[
        4
      ],
      n[
        5
      ])
    },
    clearRect: function(){
      varn=arguments;this._context.clearRect(n[
        0
      ],
      n[
        1
      ],
      n[
        2
      ],
      n[
        3
      ])
    },
    clip: function(){
      this._context.clip()
    },
    closePath: function(){
      this._context.closePath()
    },
    createLinearGradient: function(){
      varn=arguments;returnthis._context.createLinearGradient(n[
        0
      ],
      n[
        1
      ],
      n[
        2
      ],
      n[
        3
      ])
    },
    createPattern: function(){
      varn=arguments;returnthis._context.createPattern(n[
        0
      ],
      n[
        1
      ])
    },
    createRadialGradient: function(){
      varn=arguments;returnthis._context.createRadialGradient(n[
        0
      ],
      n[
        1
      ],
      n[
        2
      ],
      n[
        3
      ],
      n[
        4
      ],
      n[
        5
      ])
    },
    drawImage: function(){
      varn=arguments,
      t=this._context;3===n.length?t.drawImage(n[
        0
      ],
      n[
        1
      ],
      n[
        2
      ]): 5===n.length?t.drawImage(n[
        0
      ],
      n[
        1
      ],
      n[
        2
      ],
      n[
        3
      ],
      n[
        4
      ]): 9===n.length&&t.drawImage(n[
        0
      ],
      n[
        1
      ],
      n[
        2
      ],
      n[
        3
      ],
      n[
        4
      ],
      n[
        5
      ],
      n[
        6
      ],
      n[
        7
      ],
      n[
        8
      ])
    },
    fill: function(){
      this._context.fill()
    },
    fillText: function(){
      varn=arguments;this._context.fillText(n[
        0
      ],
      n[
        1
      ],
      n[
        2
      ])
    },
    getImageData: function(){
      varn=arguments;returnthis._context.getImageData(n[
        0
      ],
      n[
        1
      ],
      n[
        2
      ],
      n[
        3
      ])
    },
    lineTo: function(){
      varn=arguments;this._context.lineTo(n[
        0
      ],
      n[
        1
      ])
    },
    moveTo: function(){
      varn=arguments;this._context.moveTo(n[
        0
      ],
      n[
        1
      ])
    },
    rect: function(){
      varn=arguments;this._context.rect(n[
        0
      ],
      n[
        1
      ],
      n[
        2
      ],
      n[
        3
      ])
    },
    putImageData: function(){
      varn=arguments;this._context.putImageData(n[
        0
      ],
      n[
        1
      ],
      n[
        2
      ])
    },
    quadraticCurveTo: function(){
      varn=arguments;this._context.quadraticCurveTo(n[
        0
      ],
      n[
        1
      ],
      n[
        2
      ],
      n[
        3
      ])
    },
    restore: function(){
      this._context.restore()
    },
    rotate: function(){
      varn=arguments;this._context.rotate(n[
        0
      ])
    },
    save: function(){
      this._context.save()
    },
    scale: function(){
      varn=arguments;this._context.scale(n[
        0
      ],
      n[
        1
      ])
    },
    setLineDash: function(){
      vart=arguments,
      n=this._context;this._context.setLineDash?n.setLineDash(t[
        0
      ]): "mozDash"inn?n.mozDash=t[
        0
      ]: "webkitLineDash"inn&&(n.webkitLineDash=t[
        0
      ])
    },
    setTransform: function(){
      varn=arguments;this._context.setTransform(n[
        0
      ],
      n[
        1
      ],
      n[
        2
      ],
      n[
        3
      ],
      n[
        4
      ],
      n[
        5
      ])
    },
    stroke: function(){
      this._context.stroke()
    },
    strokeText: function(){
      varn=arguments;this._context.strokeText(n[
        0
      ],
      n[
        1
      ],
      n[
        2
      ])
    },
    transform: function(){
      varn=arguments;this._context.transform(n[
        0
      ],
      n[
        1
      ],
      n[
        2
      ],
      n[
        3
      ],
      n[
        4
      ],
      n[
        5
      ])
    },
    translate: function(){
      varn=arguments;this._context.translate(n[
        0
      ],
      n[
        1
      ])
    },
    _enableTrace: function(){
      for(varr,
      n=this,
      u=t.length,
      f=Kinetic.Util._simplifyArray,
      e=this.setAttr,
      i=0;u>i;i++)!function(t){
        vari,
        u=n[
          t
        ];n[
          t
        ]=function(){
          returnr=f(Array.prototype.slice.call(arguments,
          0)),
          i=u.apply(n,
          arguments),
          n._trace({
            method: t,
            args: r
          }),
          i
        }
      }(t[
        i
      ]);n.setAttr=function(){
        e.apply(n,
        arguments);n._trace({
          property: arguments[
            0
          ],
          val: arguments[
            1
          ]
        })
      }
    }
  };Kinetic.SceneContext=function(n){
    Kinetic.Context.call(this,
    n)
  };Kinetic.SceneContext.prototype={
    _fillColor: function(n){
      vart=n.getFill();this.setAttr("fillStyle",
      t);n._fillFunc(this)
    },
    _fillPattern: function(n){
      vare=n.getFillPatternImage(),
      r=n.getFillPatternX(),
      u=n.getFillPatternY(),
      t=n.getFillPatternScale(),
      f=n.getFillPatternRotation(),
      i=n.getFillPatternOffset(),
      o=n.getFillPatternRepeat();(r||u)&&this.translate(r||0,
      u||0);f&&this.rotate(f);t&&this.scale(t.x,
      t.y);i&&this.translate(-1*i.x,
      -1*i.y);this.setAttr("fillStyle",
      this.createPattern(e,
      o||"repeat"));this.fill()
    },
    _fillLinearGradient: function(n){
      varr=n.getFillLinearGradientStartPoint(),
      u=n.getFillLinearGradientEndPoint(),
      i=n.getFillLinearGradientColorStops(),
      f=this.createLinearGradient(r.x,
      r.y,
      u.x,
      u.y),
      t;if(i){
        for(t=0;t<i.length;t+=2)f.addColorStop(i[
          t
        ],
        i[
          t+1
        ]);this.setAttr("fillStyle",
        f);this.fill()
      }
    },
    _fillRadialGradient: function(n){
      for(varr=n.getFillRadialGradientStartPoint(),
      u=n.getFillRadialGradientEndPoint(),
      e=n.getFillRadialGradientStartRadius(),
      o=n.getFillRadialGradientEndRadius(),
      i=n.getFillRadialGradientColorStops(),
      f=this.createRadialGradient(r.x,
      r.y,
      e,
      u.x,
      u.y,
      o),
      t=0;t<i.length;t+=2)f.addColorStop(i[
        t
      ],
      i[
        t+1
      ]);this.setAttr("fillStyle",
      f);this.fill()
    },
    _fill: function(n){
      vari=n.getFill(),
      r=n.getFillPatternImage(),
      u=n.getFillLinearGradientColorStops(),
      f=n.getFillRadialGradientColorStops(),
      t=n.getFillPriority();i&&"color"===t?this._fillColor(n): r&&"pattern"===t?this._fillPattern(n): u&&"linear-gradient"===t?this._fillLinearGradient(n): f&&"radial-gradient"===t?this._fillRadialGradient(n): i?this._fillColor(n): r?this._fillPattern(n): u?this._fillLinearGradient(n): f&&this._fillRadialGradient(n)
    },
    _stroke: function(n){
      varr=n.getStroke(),
      u=n.getStrokeWidth(),
      t=n.getDashArray(),
      i=n.getStrokeScaleEnabled();n.hasStroke()&&(i||(this.save(),
      this.setTransform(1,
      0,
      0,
      1,
      0,
      0)),
      this._applyLineCap(n),
      t&&n.getDashArrayEnabled()&&this.setLineDash(t),
      this.setAttr("lineWidth",
      u||2),
      this.setAttr("strokeStyle",
      r||"black"),
      n._strokeFunc(this),
      i||this.restore())
    },
    _applyShadow: function(n){
      vart=Kinetic.Util,
      u=n.getAbsoluteOpacity(),
      f=t.get(n.getShadowColor(),
      "black"),
      e=t.get(n.getShadowBlur(),
      5),
      i=t.get(n.getShadowOpacity(),
      0),
      r=t.get(n.getShadowOffset(),
      {
        x: 0,
        y: 0
      });i&&this.setAttr("globalAlpha",
      i*u);this.setAttr("shadowColor",
      f);this.setAttr("shadowBlur",
      e);this.setAttr("shadowOffsetX",
      r.x);this.setAttr("shadowOffsetY",
      r.y)
    }
  };Kinetic.Util.extend(Kinetic.SceneContext,
  Kinetic.Context);Kinetic.HitContext=function(n){
    Kinetic.Context.call(this,
    n)
  };Kinetic.HitContext.prototype={
    _fill: function(n){
      this.save();this.setAttr("fillStyle",
      n.colorKey);n._fillFuncHit(this);this.restore()
    },
    _stroke: function(n){
      vari=n.getStroke(),
      t=n.getStrokeWidth();(i||t)&&(this._applyLineCap(n),
      this.setAttr("lineWidth",
      t||2),
      this.setAttr("strokeStyle",
      n.colorKey),
      n._strokeFuncHit(this))
    }
  };Kinetic.Util.extend(Kinetic.HitContext,
  Kinetic.Context)
}();!function(){
  varl="add",
  o="b",
  s="Deg",
  h="g",
  i="get",
  a="#",
  c="r",
  u="RGB",
  r="set",
  v="B",
  y="G",
  f="Height",
  p="R",
  e="Width",
  n="X",
  t="Y";Kinetic.Factory={
    addGetterSetter: function(n,
    t,
    i){
      this.addGetter(n,
      t,
      i);this.addSetter(n,
      t)
    },
    addPointGetterSetter: function(i,
    r,
    u){
      this.addPointGetter(i,
      r,
      u);this.addPointSetter(i,
      r);this.addGetter(i,
      r+n,
      u);this.addGetter(i,
      r+t,
      u);this.addSetter(i,
      r+n);this.addSetter(i,
      r+t)
    },
    addBoxGetterSetter: function(i,
    r,
    u){
      this.addBoxGetter(i,
      r,
      u);this.addBoxSetter(i,
      r);this.addGetter(i,
      r+n,
      u);this.addGetter(i,
      r+t,
      u);this.addGetter(i,
      r+e,
      u);this.addGetter(i,
      r+f,
      u);this.addSetter(i,
      r+n);this.addSetter(i,
      r+t);this.addSetter(i,
      r+e);this.addSetter(i,
      r+f)
    },
    addPointsGetterSetter: function(n,
    t){
      this.addPointsGetter(n,
      t);this.addPointsSetter(n,
      t);this.addPointAdder(n,
      t)
    },
    addRotationGetterSetter: function(n,
    t,
    i){
      this.addRotationGetter(n,
      t,
      i);this.addRotationSetter(n,
      t)
    },
    addColorGetterSetter: function(n,
    t){
      this.addGetter(n,
      t);this.addSetter(n,
      t);this.addColorRGBGetter(n,
      t);this.addColorComponentGetter(n,
      t,
      c);this.addColorComponentGetter(n,
      t,
      h);this.addColorComponentGetter(n,
      t,
      o);this.addColorRGBSetter(n,
      t);this.addColorComponentSetter(n,
      t,
      c);this.addColorComponentSetter(n,
      t,
      h);this.addColorComponentSetter(n,
      t,
      o)
    },
    addColorRGBGetter: function(n,
    t){
      varr=i+Kinetic.Util._capitalize(t)+u;n.prototype[
        r
      ]=function(){
        returnKinetic.Util.getRGB(this.attrs[
          t
        ])
      }
    },
    addColorComponentGetter: function(n,
    t,
    r){
      varf=i+Kinetic.Util._capitalize(t),
      e=f+Kinetic.Util._capitalize(r);n.prototype[
        e
      ]=function(){
        returnthis[
          f+u
        ]()[
          r
        ]
      }
    },
    addPointsGetter: function(n,
    t){
      varr=i+Kinetic.Util._capitalize(t);n.prototype[
        r
      ]=function(){
        varn=this.attrs[
          t
        ];returnvoid0===n?[
          
        ]: n
      }
    },
    addGetter: function(n,
    t,
    r){
      varu=i+Kinetic.Util._capitalize(t);n.prototype[
        u
      ]=function(){
        varn=this.attrs[
          t
        ];returnvoid0===n?r: n
      }
    },
    addPointGetter: function(r,
    u){
      varf=i+Kinetic.Util._capitalize(u);r.prototype[
        f
      ]=function(){
        vari=this;return{
          x: i[
            f+n
          ](),
          y: i[
            f+t
          ]()
        }
      }
    },
    addBoxGetter: function(r,
    u){
      varo=i+Kinetic.Util._capitalize(u);r.prototype[
        o
      ]=function(){
        vari=this;return{
          x: i[
            o+n
          ](),
          y: i[
            o+t
          ](),
          width: i[
            o+e
          ](),
          height: i[
            o+f
          ]()
        }
      }
    },
    addRotationGetter: function(n,
    t,
    r){
      varu=i+Kinetic.Util._capitalize(t);n.prototype[
        u
      ]=function(){
        varn=this.attrs[
          t
        ];returnvoid0===n&&(n=r),
        n
      };n.prototype[
        u+s
      ]=function(){
        varn=this.attrs[
          t
        ];returnvoid0===n&&(n=r),
        Kinetic.Util._radToDeg(n)
      }
    },
    addColorRGBSetter: function(n,
    t){
      vari=r+Kinetic.Util._capitalize(t)+u;n.prototype[
        i
      ]=function(n){
        vari=n&&void0!==n.r?0|n.r: this.getAttr(t+p),
        r=n&&void0!==n.g?0|n.g: this.getAttr(t+y),
        u=n&&void0!==n.b?0|n.b: this.getAttr(t+v);this._setAttr(t,
        a+Kinetic.Util._rgbToHex(i,
        r,
        u))
      }
    },
    addColorComponentSetter: function(n,
    t,
    i){
      varf=r+Kinetic.Util._capitalize(t),
      e=f+Kinetic.Util._capitalize(i);n.prototype[
        e
      ]=function(n){
        vart={
          
        };t[
          i
        ]=n;this[
          f+u
        ](t)
      }
    },
    addPointsSetter: function(n,
    t){
      vari=r+Kinetic.Util._capitalize(t);n.prototype[
        i
      ]=function(n){
        vart=Kinetic.Util._getPoints(n);this._setAttr("points",
        t)
      }
    },
    addSetter: function(n,
    t){
      vari=r+Kinetic.Util._capitalize(t);n.prototype[
        i
      ]=function(n){
        this._setAttr(t,
        n)
      }
    },
    addPointSetter: function(i,
    u){
      varf=r+Kinetic.Util._capitalize(u);i.prototype[
        f
      ]=function(){
        vari=Kinetic.Util._getXY([
          
        ].slice.call(arguments)),
        o=this.attrs[
          u
        ],
        r=0,
        e=0;i&&(r=i.x,
        e=i.y,
        this._fireBeforeChangeEvent(u,
        o,
        i),
        void0!==r&&this[
          f+n
        ](r),
        void0!==e&&this[
          f+t
        ](e),
        this._fireChangeEvent(u,
        o,
        i))
      }
    },
    addBoxSetter: function(i,
    u){
      varo=r+Kinetic.Util._capitalize(u);i.prototype[
        o
      ]=function(){
        varr,
        s,
        h,
        c,
        l=[
          
        ].slice.call(arguments),
        v=Kinetic.Util._getXY(l),
        y=Kinetic.Util._getSize(l),
        i=Kinetic.Util._merge(v,
        y),
        a=this.attrs[
          u
        ];i&&(r=i.x,
        s=i.y,
        h=i.width,
        c=i.height,
        this._fireBeforeChangeEvent(u,
        a,
        i),
        void0!==r&&this[
          o+n
        ](r),
        void0!==s&&this[
          o+t
        ](s),
        void0!==h&&this[
          o+e
        ](h),
        void0!==c&&this[
          o+f
        ](c),
        this._fireChangeEvent(u,
        a,
        i))
      }
    },
    addRotationSetter: function(n,
    t){
      vari=r+Kinetic.Util._capitalize(t);n.prototype[
        i
      ]=function(n){
        this._setAttr(t,
        n)
      };n.prototype[
        i+s
      ]=function(n){
        this._setAttr(t,
        Kinetic.Util._degToRad(n))
      }
    },
    addPointAdder: function(n,
    t){
      vari=l+Kinetic.Util._removeLastLetter(Kinetic.Util._capitalize(t));n.prototype[
        i
      ]=function(){
        varn=Kinetic.Util._getXY([
          
        ].slice.call(arguments)),
        i=this.attrs[
          t
        ];n&&(this._fireBeforeChangeEvent(t,
        i,
        n),
        this.attrs[
          t
        ].push(n),
        this._fireChangeEvent(t,
        i,
        n))
      }
    }
  }
}();!function(){
  vari="absoluteOpacity",
  n="absoluteTransform",
  l="before",
  e="Change",
  a="children",
  o=".",
  v="",
  y="get",
  p="id",
  w="kinetic",
  r="listening",
  b="mouseenter",
  k="mouseleave",
  d="name",
  s="set",
  h="Shape",
  u=" ",
  c="stage",
  t="transform",
  g="Stage",
  f="visible",
  nt=[
    "xChange.kinetic",
    "yChange.kinetic",
    "scaleXChange.kinetic",
    "scaleYChange.kinetic",
    "skewXChange.kinetic",
    "skewYChange.kinetic",
    "rotationChange.kinetic",
    "offsetXChange.kinetic",
    "offsetYChange.kinetic"
  ].join(u);Kinetic.Util.addMethods(Kinetic.Node,
  {
    _init: function(u){
      vare=this;this._id=Kinetic.idCounter++;this.eventListeners={
        
      };this.attrs={
        
      };this.cache={
        
      };this.setAttrs(u);this.on(nt,
      function(){
        this._clearCache(t);e._clearSelfAndChildrenCache(n)
      });this.on("visibleChange.kinetic",
      function(){
        e._clearSelfAndChildrenCache(f)
      });this.on("listeningChange.kinetic",
      function(){
        e._clearSelfAndChildrenCache(r)
      });this.on("opacityChange.kinetic",
      function(){
        e._clearSelfAndChildrenCache(i)
      })
    },
    clearCache: function(){
      this.cache={
        
      }
    },
    _clearCache: function(n){
      deletethis.cache[
        n
      ]
    },
    _getCache: function(n,
    t){
      vari=this.cache[
        n
      ];returnvoid0===i&&(this.cache[
        n
      ]=t.call(this)),
      this.cache[
        n
      ]
    },
    _clearSelfAndChildrenCache: function(n){
      this._clearCache(n);this.children&&this.getChildren().each(function(t){
        t._clearSelfAndChildrenCache(n)
      })
    },
    on: function(n,
    t){
      for(vare,
      f,
      r,
      s,
      h=n.split(u),
      c=h.length,
      i=0;c>i;i++)e=h[
        i
      ],
      f=e.split(o),
      r=f[
        0
      ],
      s=f[
        1
      ]||v,
      this.eventListeners[
        r
      ]||(this.eventListeners[
        r
      ]=[
        
      ]),
      this.eventListeners[
        r
      ].push({
        name: s,
        handler: t
      });returnthis
    },
    off: function(n){
      for(vare,
      s,
      r,
      i,
      f,
      h=n.split(u),
      c=h.length,
      t=0;c>t;t++)if(s=h[
        t
      ],
      r=s.split(o),
      i=r[
        0
      ],
      f=r[
        1
      ],
      i)this.eventListeners[
        i
      ]&&this._off(i,
      f);elsefor(einthis.eventListeners)this._off(e,
      f);returnthis
    },
    remove: function(){
      vart=this.getParent();returnt&&t.children&&(t.children.splice(this.index,
      1),
      t._setChildrenIndices(),
      deletethis.parent),
      this._clearSelfAndChildrenCache(c),
      this._clearSelfAndChildrenCache(n),
      this._clearSelfAndChildrenCache(f),
      this._clearSelfAndChildrenCache(r),
      this._clearSelfAndChildrenCache(i),
      this
    },
    destroy: function(){
      Kinetic._removeId(this.getId());Kinetic._removeName(this.getName(),
      this._id);this.remove()
    },
    getAttr: function(n){
      vart=y+Kinetic.Util._capitalize(n);returnKinetic.Util._isFunction(this[
        t
      ])?this[
        t
      ](): this.attrs[
        n
      ]
    },
    getAncestors: function(){
      for(varn=this.getParent(),
      t=newKinetic.Collection;n;)t.push(n),
      n=n.getParent();returnt
    },
    setAttr: function(){
      varn=Array.prototype.slice.call(arguments),
      t=n[
        0
      ],
      r=s+Kinetic.Util._capitalize(t),
      i=this[
        r
      ];returnn.shift(),
      Kinetic.Util._isFunction(i)?i.apply(this,
      n): this.attrs[
        t
      ]=n[
        0
      ],
      this
    },
    getAttrs: function(){
      returnthis.attrs||{
        
      }
    },
    setAttrs: function(n){
      vart,
      i;if(n)for(tinn)t===a||(i=s+Kinetic.Util._capitalize(t),
      Kinetic.Util._isFunction(this[
        i
      ])?this[
        i
      ](n[
        t
      ]): this._setAttr(t,
      n[
        t
      ]));returnthis
    },
    isListening: function(){
      returnthis._getCache(r,
      this._isListening)
    },
    _isListening: function(){
      varn=this.getListening(),
      t=this.getParent();returnn&&t&&!t.isListening()?!1: n
    },
    isVisible: function(){
      returnthis._getCache(f,
      this._isVisible)
    },
    _isVisible: function(){
      varn=this.getVisible(),
      t=this.getParent();returnn&&t&&!t.isVisible()?!1: n
    },
    show: function(){
      returnthis.setVisible(!0),
      this
    },
    hide: function(){
      returnthis.setVisible(!1),
      this
    },
    getZIndex: function(){
      returnthis.index||0
    },
    getAbsoluteZIndex: function(){
      functionf(s){
        for(n=[
          
        ],
        r=s.length,
        t=0;r>t;t++)i=s[
          t
        ],
        e++,
        i.nodeType!==h&&(n=n.concat(i.getChildren().toArray())),
        i._id===u._id&&(t=r);n.length>0&&n[
          0
        ].getLevel()<=o&&f(n)
      }varn,
      r,
      t,
      i,
      o=this.getLevel(),
      u=this,
      e=0;returnu.nodeType!==g&&f(u.getStage().getChildren()),
      e
    },
    getLevel: function(){
      for(vart=0,
      n=this.parent;n;)t++,
      n=n.parent;returnt
    },
    setPosition: function(){
      varn=Kinetic.Util._getXY([
        
      ].slice.call(arguments));returnthis.setX(n.x),
      this.setY(n.y),
      this
    },
    getPosition: function(){
      return{
        x: this.getX(),
        y: this.getY()
      }
    },
    getAbsolutePosition: function(){
      vari=this.getAbsoluteTransform().getMatrix(),
      n=newKinetic.Transform,
      t=this.getOffset();returnn.m=i.slice(),
      n.translate(t.x,
      t.y),
      n.getTranslation()
    },
    setAbsolutePosition: function(){
      varn,
      t=Kinetic.Util._getXY([
        
      ].slice.call(arguments)),
      i=this._clearTransform();returnthis.attrs.x=i.x,
      this.attrs.y=i.y,
      deletei.x,
      deletei.y,
      n=this.getAbsoluteTransform(),
      n.invert(),
      n.translate(t.x,
      t.y),
      t={
        x: this.attrs.x+n.getTranslation().x,
        y: this.attrs.y+n.getTranslation().y
      },
      this.setPosition(t.x,
      t.y),
      this._setTransform(i),
      this
    },
    _setTransform: function(i){
      varr;for(rini)this.attrs[
        r
      ]=i[
        r
      ];this._clearCache(t);this._clearSelfAndChildrenCache(n)
    },
    _clearTransform: function(){
      vari={
        x: this.getX(),
        y: this.getY(),
        rotation: this.getRotation(),
        scaleX: this.getScaleX(),
        scaleY: this.getScaleY(),
        offsetX: this.getOffsetX(),
        offsetY: this.getOffsetY(),
        skewX: this.getSkewX(),
        skewY: this.getSkewY()
      };returnthis.attrs.x=0,
      this.attrs.y=0,
      this.attrs.rotation=0,
      this.attrs.scaleX=1,
      this.attrs.scaleY=1,
      this.attrs.offsetX=0,
      this.attrs.offsetY=0,
      this.attrs.skewX=0,
      this.attrs.skewY=0,
      this._clearCache(t),
      this._clearSelfAndChildrenCache(n),
      i
    },
    move: function(){
      varn=Kinetic.Util._getXY([
        
      ].slice.call(arguments)),
      t=this.getX(),
      i=this.getY();returnvoid0!==n.x&&(t+=n.x),
      void0!==n.y&&(i+=n.y),
      this.setPosition(t,
      i),
      this
    },
    _eachAncestorReverse: function(n,
    t){
      varf,
      i,
      r=[
        
      ],
      u=this.getParent();for(t&&r.unshift(this);u;)r.unshift(u),
      u=u.parent;for(f=r.length,
      i=0;f>i;i++)n(r[
        i
      ])
    },
    rotate: function(n){
      returnthis.setRotation(this.getRotation()+n),
      this
    },
    rotateDeg: function(n){
      returnthis.setRotation(this.getRotation()+Kinetic.Util._degToRad(n)),
      this
    },
    moveToTop: function(){
      varn=this.index;returnthis.parent.children.splice(n,
      1),
      this.parent.children.push(this),
      this.parent._setChildrenIndices(),
      !0
    },
    moveUp: function(){
      varn=this.index,
      t=this.parent.getChildren().length;returnt-1>n?(this.parent.children.splice(n,
      1),
      this.parent.children.splice(n+1,
      0,
      this),
      this.parent._setChildrenIndices(),
      !0): !1
    },
    moveDown: function(){
      varn=this.index;returnn>0?(this.parent.children.splice(n,
      1),
      this.parent.children.splice(n-1,
      0,
      this),
      this.parent._setChildrenIndices(),
      !0): !1
    },
    moveToBottom: function(){
      varn=this.index;returnn>0?(this.parent.children.splice(n,
      1),
      this.parent.children.unshift(this),
      this.parent._setChildrenIndices(),
      !0): !1
    },
    setZIndex: function(n){
      vart=this.index;returnthis.parent.children.splice(t,
      1),
      this.parent.children.splice(n,
      0,
      this),
      this.parent._setChildrenIndices(),
      this
    },
    getAbsoluteOpacity: function(){
      returnthis._getCache(i,
      this._getAbsoluteOpacity)
    },
    _getAbsoluteOpacity: function(){
      varn=this.getOpacity();returnthis.getParent()&&(n*=this.getParent().getAbsoluteOpacity()),
      n
    },
    moveTo: function(n){
      returnKinetic.Node.prototype.remove.call(this),
      n.add(this),
      this
    },
    toObject: function(){
      varr,
      n,
      t=Kinetic.Util,
      i={
        
      },
      u=this.getAttrs();i.attrs={
        
      };for(rinu)n=u[
        r
      ],
      t._isFunction(n)||t._isElement(n)||t._isObject(n)&&t._hasMethods(n)||(i.attrs[
        r
      ]=n);returni.className=this.getClassName(),
      i
    },
    toJSON: function(){
      returnJSON.stringify(this.toObject())
    },
    getParent: function(){
      returnthis.parent
    },
    getLayer: function(){
      returnthis.getParent().getLayer()
    },
    getStage: function(){
      returnthis._getCache(c,
      this._getStage)
    },
    _getStage: function(){
      varn=this.getParent();if(n)returnn.getStage()
    },
    fire: function(n,
    t,
    i){
      returni?this._fireAndBubble(n,
      t||{
        
      }): this._fire(n,
      t||{
        
      }),
      this
    },
    getAbsoluteTransform: function(){
      returnthis._getCache(n,
      this._getAbsoluteTransform)
    },
    _getAbsoluteTransform: function(){
      varn,
      t=newKinetic.Transform;returnthis._eachAncestorReverse(function(i){
        n=i.getTransform();t.multiply(n)
      },
      !0),
      t
    },
    _getTransform: function(){
      varn=newKinetic.Transform,
      t=this.getX(),
      i=this.getY(),
      r=this.getRotation(),
      u=this.getScaleX(),
      f=this.getScaleY(),
      e=this.getSkewX(),
      o=this.getSkewY(),
      s=this.getOffsetX(),
      h=this.getOffsetY();return(0!==t||0!==i)&&n.translate(t,
      i),
      0!==r&&n.rotate(r),
      (0!==e||0!==o)&&n.skew(e,
      o),
      (1!==u||1!==f)&&n.scale(u,
      f),
      (0!==s||0!==h)&&n.translate(-1*s,
      -1*h),
      n
    },
    clone: function(n){
      vart,
      u,
      e,
      r,
      f,
      o=this.getClassName(),
      i=newKinetic[
        o
      ](this.attrs);for(tinthis.eventListeners)for(u=this.eventListeners[
        t
      ],
      e=u.length,
      r=0;e>r;r++)f=u[
        r
      ],
      f.name.indexOf(w)<0&&(i.eventListeners[
        t
      ]||(i.eventListeners[
        t
      ]=[
        
      ]),
      i.eventListeners[
        t
      ].push(f));returni.setAttrs(n),
      i
    },
    toDataURL: function(n){
      n=n||{
        
      };vare=n.mimeType||null,
      o=n.quality||null,
      r=this.getStage(),
      u=n.x||0,
      f=n.y||0,
      t=newKinetic.SceneCanvas({
        width: n.width||r.getWidth(),
        height: n.height||r.getHeight(),
        pixelRatio: 1
      }),
      i=t.getContext();returni.save(),
      (u||f)&&i.translate(-1*u,
      -1*f),
      this.drawScene(t),
      i.restore(),
      t.toDataURL(e,
      o)
    },
    toImage: function(n){
      Kinetic.Util._getImage(this.toDataURL(n),
      function(t){
        n.callback(t)
      })
    },
    setSize: function(){
      varn=Kinetic.Util._getSize(Array.prototype.slice.call(arguments));returnthis.setWidth(n.width),
      this.setHeight(n.height),
      this
    },
    getSize: function(){
      return{
        width: this.getWidth(),
        height: this.getHeight()
      }
    },
    getWidth: function(){
      returnthis.attrs.width||0
    },
    getHeight: function(){
      returnthis.attrs.height||0
    },
    getClassName: function(){
      returnthis.className||this.nodeType
    },
    getType: function(){
      returnthis.nodeType
    },
    _get: function(n){
      returnthis.nodeType===n?[
        this
      ]: [
        
      ]
    },
    _off: function(n,
    t){
      for(varu,
      r=this.eventListeners[
        n
      ],
      i=0;i<r.length;i++)if(u=r[
        i
      ].name,
      !("kinetic"===u&&"kinetic"!==t||t&&u!==t)){
        if(r.splice(i,
        1),
        0===r.length){
          deletethis.eventListeners[
            n
          ];break
        }i--
      }
    },
    _fireBeforeChangeEvent: function(n,
    t,
    i){
      this._fire(l+Kinetic.Util._capitalize(n)+e,
      {
        oldVal: t,
        newVal: i
      })
    },
    _fireChangeEvent: function(n,
    t,
    i){
      this._fire(n+e,
      {
        oldVal: t,
        newVal: i
      })
    },
    setId: function(n){
      vart=this.getId();returnKinetic._removeId(t),
      Kinetic._addId(this,
      n),
      this._setAttr(p,
      n),
      this
    },
    setName: function(n){
      vart=this.getName();returnKinetic._removeName(t,
      this._id),
      Kinetic._addName(this,
      n),
      this._setAttr(d,
      n),
      this
    },
    _setAttr: function(n,
    t){
      vari;void0!==t&&(i=this.attrs[
        n
      ],
      this._fireBeforeChangeEvent(n,
      i,
      t),
      this.attrs[
        n
      ]=t,
      this._fireChangeEvent(n,
      i,
      t))
    },
    _fireAndBubble: function(n,
    t,
    i){
      varr=!0;t&&this.nodeType===h&&(t.targetNode=this);n===b&&i&&this._id===i._id?r=!1: n===k&&i&&this._id===i._id&&(r=!1);r&&(this._fire(n,
      t),
      t&&!t.cancelBubble&&this.parent&&(i&&i.parent?this._fireAndBubble.call(this.parent,
      n,
      t,
      i.parent): this._fireAndBubble.call(this.parent,
      n,
      t)))
    },
    _fire: function(n,
    t){
      vari,
      r=this.eventListeners[
        n
      ];if(r)for(i=0;i<r.length;i++)r[
        i
      ].handler.call(this,
      t)
    },
    draw: function(){
      returnthis.drawScene(),
      this.drawHit(),
      this
    },
    shouldDrawHit: function(){
      returnthis.isListening()&&this.isVisible()&&!Kinetic.isDragging()
    },
    isDraggable: function(){
      return!1
    },
    getTransform: function(){
      returnthis._getCache(t,
      this._getTransform)
    }
  });Kinetic.Node.create=function(n,
  t){
    returnthis._createNode(JSON.parse(n),
    t)
  };Kinetic.Node._createNode=function(n,
  t){
    varr,
    f,
    i,
    e=Kinetic.Node.prototype.getClassName.call(n),
    u=n.children;if(t&&(n.attrs.container=t),
    r=newKinetic[
      e
    ](n.attrs),
    u)for(f=u.length,
    i=0;f>i;i++)r.add(this._createNode(u[
      i
    ]));returnr
  };Kinetic.Factory.addGetterSetter(Kinetic.Node,
  "x",
  0);Kinetic.Factory.addGetterSetter(Kinetic.Node,
  "y",
  0);Kinetic.Factory.addGetterSetter(Kinetic.Node,
  "opacity",
  1);Kinetic.Factory.addGetter(Kinetic.Node,
  "name");Kinetic.Factory.addGetter(Kinetic.Node,
  "id");Kinetic.Factory.addRotationGetterSetter(Kinetic.Node,
  "rotation",
  0);Kinetic.Factory.addPointGetterSetter(Kinetic.Node,
  "scale",
  1);Kinetic.Factory.addPointGetterSetter(Kinetic.Node,
  "skew",
  0);Kinetic.Factory.addPointGetterSetter(Kinetic.Node,
  "offset",
  0);Kinetic.Factory.addSetter(Kinetic.Node,
  "width");Kinetic.Factory.addSetter(Kinetic.Node,
  "height");Kinetic.Factory.addGetterSetter(Kinetic.Node,
  "listening",
  !0);Kinetic.Factory.addGetterSetter(Kinetic.Node,
  "visible",
  !0);Kinetic.Collection.mapMethods([
    "on",
    "off",
    "remove",
    "destroy",
    "show",
    "hide",
    "move",
    "rotate",
    "moveToTop",
    "moveUp",
    "moveDown",
    "moveToBottom",
    "moveTo",
    "fire",
    "draw"
  ])
}();!function(){
  functionn(n){
    window.setTimeout(n,
    1e3/60)
  }varr=500,
  t,
  i;Kinetic.Animation=function(n,
  t){
    this.func=n;this.setLayers(t);this.id=Kinetic.Animation.animIdCounter++;this.frame={
      time: 0,
      timeDiff: 0,
      lastTime: (newDate).getTime()
    }
  };Kinetic.Animation.prototype={
    setLayers: function(n){
      vart=[
        
      ];t=n?n.length>0?n: [
        n
      ]: [
        
      ];this.layers=t
    },
    getLayers: function(){
      returnthis.layers
    },
    addLayer: function(n){
      varr,
      t,
      i=this.layers;if(i){
        for(r=i.length,
        t=0;r>t;t++)if(i[
          t
        ]._id===n._id)return!1
      }elsethis.layers=[
        
      ];returnthis.layers.push(n),
      !0
    },
    isRunning: function(){
      for(vari=Kinetic.Animation,
      t=i.animations,
      n=0;n<t.length;n++)if(t[
        n
      ].id===this.id)return!0;return!1
    },
    start: function(){
      this.stop();this.frame.timeDiff=0;this.frame.lastTime=(newDate).getTime();Kinetic.Animation._addAnimation(this)
    },
    stop: function(){
      Kinetic.Animation._removeAnimation(this)
    },
    _updateFrameObject: function(n){
      this.frame.timeDiff=n-this.frame.lastTime;this.frame.lastTime=n;this.frame.time+=this.frame.timeDiff;this.frame.frameRate=1e3/this.frame.timeDiff
    }
  };Kinetic.Animation.animations=[
    
  ];Kinetic.Animation.animIdCounter=0;Kinetic.Animation.animRunning=!1;Kinetic.Animation._addAnimation=function(n){
    this.animations.push(n);this._handleAnimation()
  };Kinetic.Animation._removeAnimation=function(n){
    for(varr=n.id,
    i=this.animations,
    u=i.length,
    t=0;u>t;t++)if(i[
      t
    ].id===r){
      this.animations.splice(t,
      1);break
    }
  };Kinetic.Animation._runFrames=function(){
    for(varn,
    u,
    f,
    i,
    o,
    r,
    s,
    e={
      
    },
    h=this.animations,
    t=0;t<h.length;t++){
      for(n=h[
        t
      ],
      u=n.layers,
      f=n.func,
      n._updateFrameObject((newDate).getTime()),
      o=u.length,
      i=0;o>i;i++)r=u[
        i
      ],
      void0!==r._id&&(e[
        r._id
      ]=r);f&&f.call(n,
      n.frame)
    }for(sine)e[
      s
    ].draw()
  };Kinetic.Animation._animationLoop=function(){
    varn=this;this.animations.length>0?(this._runFrames(),
    Kinetic.Animation.requestAnimFrame(function(){
      n._animationLoop()
    })): this.animRunning=!1
  };Kinetic.Animation._handleAnimation=function(){
    varn=this;this.animRunning||(this.animRunning=!0,
    n._animationLoop())
  };t=function(){
    returnwindow.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||n
  }();Kinetic.Animation.requestAnimFrame=function(i){
    varr=Kinetic.isDragging?n: t;r(i)
  };i=Kinetic.Node.prototype.moveTo;Kinetic.Node.prototype.moveTo=function(n){
    i.call(this,
    n)
  };Kinetic.Layer.prototype.batchDraw=function(){
    varn=this;this.batchAnim||(this.batchAnim=newKinetic.Animation(function(){
      n.lastBatchDrawTime&&(newDate).getTime()-n.lastBatchDrawTime>r&&n.batchAnim.stop()
    },
    this));this.lastBatchDrawTime=(newDate).getTime();this.batchAnim.isRunning()||(this.draw(),
    this.batchAnim.start())
  };Kinetic.Stage.prototype.batchDraw=function(){
    this.getChildren().each(function(n){
      n.batchDraw()
    })
  }
}();!function(){
  vart,
  n;Kinetic.DD={
    anim: newKinetic.Animation,
    isDragging: !1,
    offset: {
      x: 0,
      y: 0
    },
    node: null,
    _drag: function(n){
      vari=Kinetic.DD,
      t=i.node;t&&(t._setDragPosition(n),
      i.isDragging||(i.isDragging=!0,
      t.fire("dragstart",
      n,
      !0)),
      t.fire("dragmove",
      n,
      !0))
    },
    _endDragBefore: function(n){
      varu,
      r,
      t=Kinetic.DD,
      i=t.node;i&&(u=i.nodeType,
      r=i.getLayer(),
      t.anim.stop(),
      t.isDragging&&(t.isDragging=!1,
      Kinetic.listenClickTap=!1,
      n&&(n.dragEndNode=i)),
      deletet.node,
      (r||i).draw())
    },
    _endDragAfter: function(n){
      n=n||{
        
      };vart=n.dragEndNode;n&&t&&t.fire("dragend",
      n,
      !0)
    }
  };Kinetic.Node.prototype.startDrag=function(){
    varn=Kinetic.DD,
    r=this.getStage(),
    u=this.getLayer(),
    t=r.getPointerPosition(),
    i=this.getAbsolutePosition();t&&(n.node&&n.node.stopDrag(),
    n.node=this,
    n.offset.x=t.x-i.x,
    n.offset.y=t.y-i.y,
    n.anim.setLayers(u||this.getLayers()),
    n.anim.start(),
    this._setDragPosition())
  };Kinetic.Node.prototype._setDragPosition=function(n){
    vari=Kinetic.DD,
    r=this.getStage().getPointerPosition(),
    u=this.getDragBoundFunc(),
    t={
      x: r.x-i.offset.x,
      y: r.y-i.offset.y
    };void0!==u&&(t=u.call(this,
    t,
    n));this.setAbsolutePosition(t)
  };Kinetic.Node.prototype.stopDrag=function(){
    varn=Kinetic.DD,
    t={
      
    };n._endDragBefore(t);n._endDragAfter(t)
  };Kinetic.Node.prototype.setDraggable=function(n){
    this._setAttr("draggable",
    n);this._dragChange()
  };t=Kinetic.Node.prototype.destroy;Kinetic.Node.prototype.destroy=function(){
    varn=Kinetic.DD;n.node&&n.node._id===this._id&&this.stopDrag();t.call(this)
  };Kinetic.Node.prototype.isDragging=function(){
    varn=Kinetic.DD;returnn.node&&n.node._id===this._id&&n.isDragging
  };Kinetic.Node.prototype._listenDrag=function(){
    varn=this;this._dragCleanup();"Stage"===this.getClassName()?this.on("contentMousedown.kinetic contentTouchstart.kinetic",
    function(t){
      Kinetic.DD.node||n.startDrag(t)
    }): this.on("mousedown.kinetic touchstart.kinetic",
    function(t){
      Kinetic.DD.node||n.startDrag(t)
    })
  };Kinetic.Node.prototype._dragChange=function(){
    if(this.attrs.draggable)this._listenDrag();else{
      this._dragCleanup();vart=this.getStage(),
      n=Kinetic.DD;t&&n.node&&n.node._id===this._id&&n.node.stopDrag()
    }
  };Kinetic.Node.prototype._dragCleanup=function(){
    this.off("mousedown.kinetic");this.off("touchstart.kinetic")
  };Kinetic.Factory.addGetterSetter(Kinetic.Node,
  "dragBoundFunc");Kinetic.Factory.addGetter(Kinetic.Node,
  "draggable",
  !1);Kinetic.Node.prototype.isDraggable=Kinetic.Node.prototype.getDraggable;n=document.documentElement;n.addEventListener("mouseup",
  Kinetic.DD._endDragBefore,
  !0);n.addEventListener("touchend",
  Kinetic.DD._endDragBefore,
  !0);n.addEventListener("mouseup",
  Kinetic.DD._endDragAfter,
  !1);n.addEventListener("touchend",
  Kinetic.DD._endDragAfter,
  !1)
}();!function(){
  Kinetic.Util.addMethods(Kinetic.Container,
  {
    __init: function(n){
      this.children=newKinetic.Collection;Kinetic.Node.call(this,
      n)
    },
    getChildren: function(){
      returnthis.children
    },
    hasChildren: function(){
      returnthis.getChildren().length>0
    },
    removeChildren: function(){
      for(varn,
      t=this.children;t.length>0;)n=t[
        0
      ],
      n.hasChildren()&&n.removeChildren(),
      n.remove();returnthis
    },
    destroyChildren: function(){
      for(varn=this.children;n.length>0;)n[
        0
      ].destroy();returnthis
    },
    add: function(n){
      vart=this.children;returnthis._validateAdd(n),
      n.index=t.length,
      n.parent=this,
      t.push(n),
      this._fire("add",
      {
        child: n
      }),
      this
    },
    destroy: function(){
      this.hasChildren()&&this.destroyChildren();Kinetic.Node.prototype.destroy.call(this)
    },
    find: function(n){
      for(varu,
      t,
      o,
      f,
      e,
      s,
      i=[
        
      ],
      h=n.replace(//g,
      "").split(","),
      c=h.length,
      r=0;c>r;r++)if(t=h[
        r
      ],
      "#"===t.charAt(0))f=this._getNodeById(t.slice(1)),
      f&&i.push(f);elseif("."===t.charAt(0))o=this._getNodesByName(t.slice(1)),
      i=i.concat(o);elsefor(e=this.getChildren(),
      s=e.length,
      u=0;s>u;u++)i=i.concat(e[
        u
      ]._get(t));returnKinetic.Collection.toCollection(i)
    },
    _getNodeById: function(n){
      vart=Kinetic.ids[
        n
      ];returnvoid0!==t&&this.isAncestorOf(t)?t: null
    },
    _getNodesByName: function(n){
      vart=Kinetic.names[
        n
      ]||[
        
      ];returnthis._getDescendants(t)
    },
    _get: function(n){
      for(vart=Kinetic.Node.prototype._get.call(this,
      n),
      r=this.getChildren(),
      u=r.length,
      i=0;u>i;i++)t=t.concat(r[
        i
      ]._get(n));returnt
    },
    toObject: function(){
      varn=Kinetic.Node.prototype.toObject.call(this),
      r;n.children=[
        
      ];for(vari=this.getChildren(),
      u=i.length,
      t=0;u>t;t++)r=i[
        t
      ],
      n.children.push(r.toObject());returnn
    },
    _getDescendants: function(n){
      for(vari,
      r=[
        
      ],
      u=n.length,
      t=0;u>t;t++)i=n[
        t
      ],
      this.isAncestorOf(i)&&r.push(i);returnr
    },
    isAncestorOf: function(n){
      for(vart=n.getParent();t;){
        if(t._id===this._id)return!0;t=t.getParent()
      }return!1
    },
    clone: function(n){
      vart=Kinetic.Node.prototype.clone.call(this,
      n);returnthis.getChildren().each(function(n){
        t.add(n.clone())
      }),
      t
    },
    getAllIntersections: function(){
      for(varn,
      u=Kinetic.Util._getXY(Array.prototype.slice.call(arguments)),
      i=[
        
      ],
      r=this.find("Shape"),
      f=r.length,
      t=0;f>t;t++)n=r[
        t
      ],
      n.isVisible()&&n.intersects(u)&&i.push(n);returni
    },
    _setChildrenIndices: function(){
      this.children.each(function(n,
      t){
        n.index=t
      })
    },
    drawScene: function(n){
      vart=this.getLayer(),
      i=this.getClipWidth()&&this.getClipHeight();return!n&&t&&(n=t.getCanvas()),
      this.isVisible()&&(i?n.getContext()._clip(this): this._drawChildren(n)),
      this
    },
    _drawChildren: function(n){
      this.children.each(function(t){
        t.drawScene(n)
      })
    },
    drawHit: function(){
      vart,
      r=this.getClipWidth()&&this.getClipHeight()&&"Stage"!==this.nodeType,
      n=0,
      u=0,
      i=[
        
      ];if(this.shouldDrawHit()){
        for(r&&(t=this.getLayer().hitCanvas,
        t.getContext()._clip(this)),
        i=this.children,
        u=i.length,
        n=0;u>n;n++)i[
          n
        ].drawHit();r&&t.getContext()._context.restore()
      }returnthis
    }
  });Kinetic.Util.extend(Kinetic.Container,
  Kinetic.Node);Kinetic.Container.prototype.get=Kinetic.Container.prototype.find;Kinetic.Factory.addBoxGetterSetter(Kinetic.Container,
  "clip")
}();!function(){
  functiont(n){
    n.fill()
  }functioni(n){
    n.stroke()
  }functionr(n){
    n.fill()
  }functionu(n){
    n.stroke()
  }functionf(){
    this._clearCache(n)
  }varn="hasShadow";Kinetic.Util.addMethods(Kinetic.Shape,
  {
    __init: function(n){
      this.nodeType="Shape";this._fillFunc=t;this._strokeFunc=i;this._fillFuncHit=r;this._strokeFuncHit=u;for(vare,
      o=Kinetic.shapes;;)if(e=Kinetic.Util.getRandomColor(),
      e&&!(eino))break;this.colorKey=e;o[
        e
      ]=this;Kinetic.Node.call(this,
      n);this._setDrawFuncs();this.on("shadowColorChange.kinetic shadowBlurChange.kinetic shadowOffsetChange.kinetic shadowOpacityChange.kinetic shadowEnabledChanged.kinetic",
      f)
    },
    hasChildren: function(){
      return!1
    },
    getChildren: function(){
      return[
        
      ]
    },
    getContext: function(){
      returnthis.getLayer().getContext()
    },
    getCanvas: function(){
      returnthis.getLayer().getCanvas()
    },
    hasShadow: function(){
      returnthis._getCache(n,
      this._hasShadow)
    },
    _hasShadow: function(){
      returnthis.getShadowEnabled()&&0!==this.getShadowOpacity()&&!!(this.getShadowColor()||this.getShadowBlur()||this.getShadowOffsetX()||this.getShadowOffsetY())
    },
    hasFill: function(){
      return!!(this.getFill()||this.getFillPatternImage()||this.getFillLinearGradientColorStops()||this.getFillRadialGradientColorStops())
    },
    hasStroke: function(){
      return!(!this.getStroke()&&!this.getStrokeWidth())
    },
    _get: function(n){
      returnthis.className===n||this.nodeType===n?[
        this
      ]: [
        
      ]
    },
    intersects: function(){
      vart,
      i=Kinetic.Util._getXY(Array.prototype.slice.call(arguments)),
      r=this.getStage(),
      n=r.bufferHitCanvas;returnn.getContext().clear(),
      this.drawScene(n),
      t=n.context.getImageData(0|i.x,
      0|i.y,
      1,
      1).data,
      t[
        3
      ]>0
    },
    enableFill: function(){
      returnthis._setAttr("fillEnabled",
      !0),
      this
    },
    disableFill: function(){
      returnthis._setAttr("fillEnabled",
      !1),
      this
    },
    enableStroke: function(){
      returnthis._setAttr("strokeEnabled",
      !0),
      this
    },
    disableStroke: function(){
      returnthis._setAttr("strokeEnabled",
      !1),
      this
    },
    enableStrokeScale: function(){
      returnthis._setAttr("strokeScaleEnabled",
      !0),
      this
    },
    disableStrokeScale: function(){
      returnthis._setAttr("strokeScaleEnabled",
      !1),
      this
    },
    enableShadow: function(){
      returnthis._setAttr("shadowEnabled",
      !0),
      this
    },
    disableShadow: function(){
      returnthis._setAttr("shadowEnabled",
      !1),
      this
    },
    enableDashArray: function(){
      returnthis._setAttr("dashArrayEnabled",
      !0),
      this
    },
    disableDashArray: function(){
      returnthis._setAttr("dashArrayEnabled",
      !1),
      this
    },
    destroy: function(){
      returnKinetic.Node.prototype.destroy.call(this),
      deleteKinetic.shapes[
        this.colorKey
      ],
      this
    },
    _useBufferCanvas: function(){
      return(this.hasShadow()||1!==this.getAbsoluteOpacity())&&this.hasFill()&&this.hasStroke()
    },
    drawScene: function(n){
      varf,
      r,
      i,
      o=n||this.getLayer().getCanvas(),
      t=o.getContext(),
      u=this.getDrawFunc(),
      e=this.hasShadow();returnu&&this.isVisible()&&(this._useBufferCanvas()?(f=this.getStage(),
      r=f.bufferCanvas,
      i=r.getContext(),
      i.clear(),
      i.save(),
      i._applyLineJoin(this),
      i._applyAncestorTransforms(this),
      u.call(this,
      i),
      i.restore(),
      t.save(),
      e&&(t.save(),
      t._applyShadow(this),
      t.drawImage(r._canvas,
      0,
      0),
      t.restore()),
      t._applyOpacity(this),
      t.drawImage(r._canvas,
      0,
      0),
      t.restore()): (t.save(),
      t._applyLineJoin(this),
      t._applyAncestorTransforms(this),
      e&&(t.save(),
      t._applyShadow(this),
      u.call(this,
      t),
      t.restore()),
      t._applyOpacity(this),
      u.call(this,
      t),
      t.restore())),
      this
    },
    drawHit: function(){
      vart=this.getAttrs(),
      i=t.drawHitFunc||t.drawFunc,
      r=this.getLayer().hitCanvas,
      n=r.getContext();returni&&this.shouldDrawHit()&&(n.save(),
      n._applyLineJoin(this),
      n._applyAncestorTransforms(this),
      i.call(this,
      n),
      n.restore()),
      this
    },
    _setDrawFuncs: function(){
      !this.attrs.drawFunc&&this.drawFunc&&this.setDrawFunc(this.drawFunc);!this.attrs.drawHitFunc&&this.drawHitFunc&&this.setDrawHitFunc(this.drawHitFunc)
    }
  });Kinetic.Util.extend(Kinetic.Shape,
  Kinetic.Node);Kinetic.Factory.addColorGetterSetter(Kinetic.Shape,
  "stroke");Kinetic.Factory.addGetterSetter(Kinetic.Shape,
  "lineJoin");Kinetic.Factory.addGetterSetter(Kinetic.Shape,
  "lineCap");Kinetic.Factory.addGetterSetter(Kinetic.Shape,
  "strokeWidth");Kinetic.Factory.addGetterSetter(Kinetic.Shape,
  "drawFunc");Kinetic.Factory.addGetterSetter(Kinetic.Shape,
  "drawHitFunc");Kinetic.Factory.addGetterSetter(Kinetic.Shape,
  "dashArray");Kinetic.Factory.addColorGetterSetter(Kinetic.Shape,
  "shadowColor");Kinetic.Factory.addGetterSetter(Kinetic.Shape,
  "shadowBlur");Kinetic.Factory.addGetterSetter(Kinetic.Shape,
  "shadowOpacity");Kinetic.Factory.addGetterSetter(Kinetic.Shape,
  "fillPatternImage");Kinetic.Factory.addColorGetterSetter(Kinetic.Shape,
  "fill");Kinetic.Factory.addGetterSetter(Kinetic.Shape,
  "fillPatternX");Kinetic.Factory.addGetterSetter(Kinetic.Shape,
  "fillPatternY");Kinetic.Factory.addGetterSetter(Kinetic.Shape,
  "fillLinearGradientColorStops");Kinetic.Factory.addGetterSetter(Kinetic.Shape,
  "fillRadialGradientStartRadius");Kinetic.Factory.addGetterSetter(Kinetic.Shape,
  "fillRadialGradientEndRadius");Kinetic.Factory.addGetterSetter(Kinetic.Shape,
  "fillRadialGradientColorStops");Kinetic.Factory.addGetterSetter(Kinetic.Shape,
  "fillPatternRepeat");Kinetic.Factory.addGetterSetter(Kinetic.Shape,
  "fillEnabled",
  !0);Kinetic.Factory.addGetterSetter(Kinetic.Shape,
  "strokeEnabled",
  !0);Kinetic.Factory.addGetterSetter(Kinetic.Shape,
  "shadowEnabled",
  !0);Kinetic.Factory.addGetterSetter(Kinetic.Shape,
  "dashArrayEnabled",
  !0);Kinetic.Factory.addGetterSetter(Kinetic.Shape,
  "fillPriority",
  "color");Kinetic.Factory.addGetterSetter(Kinetic.Shape,
  "strokeScaleEnabled",
  !0);Kinetic.Factory.addPointGetterSetter(Kinetic.Shape,
  "fillPatternOffset",
  0);Kinetic.Factory.addPointGetterSetter(Kinetic.Shape,
  "fillPatternScale",
  1);Kinetic.Factory.addPointGetterSetter(Kinetic.Shape,
  "fillLinearGradientStartPoint",
  0);Kinetic.Factory.addPointGetterSetter(Kinetic.Shape,
  "fillLinearGradientEndPoint",
  0);Kinetic.Factory.addPointGetterSetter(Kinetic.Shape,
  "fillRadialGradientStartPoint",
  0);Kinetic.Factory.addPointGetterSetter(Kinetic.Shape,
  "fillRadialGradientEndPoint",
  0);Kinetic.Factory.addPointGetterSetter(Kinetic.Shape,
  "shadowOffset",
  0);Kinetic.Factory.addRotationGetterSetter(Kinetic.Shape,
  "fillPatternRotation",
  0)
}();!function(){
  functionl(n,
  t){
    n.content.addEventListener(t,
    function(i){
      n[
        yt+t
      ](i)
    },
    !1)
  }vara="Stage",
  v="string",
  i="px",
  n="mouseout",
  t="mouseleave",
  r="mouseover",
  y="mouseenter",
  u="mousemove",
  f="mousedown",
  e="mouseup",
  p="click",
  w="dblclick",
  o="touchstart",
  s="touchend",
  b="tap",
  k="dbltap",
  h="touchmove",
  d="contentMouseout",
  g="contentMouseover",
  nt="contentMousemove",
  tt="contentMousedown",
  it="contentMouseup",
  rt="contentClick",
  ut="contentDblclick",
  ft="contentTouchstart",
  et="contentTouchend",
  ot="contentDbltap",
  st="contentTouchmove",
  ht="div",
  ct="relative",
  lt="inline-block",
  at="kineticjs-content",
  vt=" ",
  yt="_",
  pt="container",
  wt="",
  c=[
    f,
    u,
    e,
    n,
    o,
    h,
    s,
    r
  ],
  bt=c.length;Kinetic.Util.addMethods(Kinetic.Stage,
  {
    ___init: function(n){
      this.nodeType=a;Kinetic.Container.call(this,
      n);this._id=Kinetic.idCounter++;this._buildDOM();this._bindContentEvents();Kinetic.stages.push(this)
    },
    _validateAdd: function(n){
      "Layer"!==n.getType()&&Kinetic.Util.error("You may only add layers to the stage.")
    },
    setContainer: function(n){
      returntypeofn===v&&(n=document.getElementById(n)),
      this._setAttr(pt,
      n),
      this
    },
    draw: function(){
      returnKinetic.Node.prototype.draw.call(this),
      this
    },
    setHeight: function(n){
      returnKinetic.Node.prototype.setHeight.call(this,
      n),
      this._resizeDOM(),
      this
    },
    setWidth: function(n){
      returnKinetic.Node.prototype.setWidth.call(this,
      n),
      this._resizeDOM(),
      this
    },
    clear: function(){
      for(vart=this.children,
      i=t.length,
      n=0;i>n;n++)t[
        n
      ].clear();returnthis
    },
    destroy: function(){
      varn=this.content;Kinetic.Container.prototype.destroy.call(this);n&&Kinetic.Util._isInDocument(n)&&this.getContainer().removeChild(n)
    },
    getPointerPosition: function(){
      returnthis.pointerPos
    },
    getStage: function(){
      returnthis
    },
    getContent: function(){
      returnthis.content
    },
    toDataURL: function(n){
      functiont(i){
        varh=e[
          i
        ],
        c=h.toDataURL(),
        r=newImage;r.onload=function(){
          f.drawImage(r,
          0,
          0);i<e.length-1?t(i+1): n.callback(u.toDataURL(o,
          s))
        };r.src=c
      }n=n||{
        
      };varo=n.mimeType||null,
      s=n.quality||null,
      i=n.x||0,
      r=n.y||0,
      u=newKinetic.SceneCanvas({
        width: n.width||this.getWidth(),
        height: n.height||this.getHeight(),
        pixelRatio: 1
      }),
      f=u.getContext()._context,
      e=this.children;(i||r)&&f.translate(-1*i,
      -1*r);t(0)
    },
    toImage: function(n){
      vart=n.callback;n.callback=function(n){
        Kinetic.Util._getImage(n,
        function(n){
          t(n)
        })
      };this.toDataURL(n)
    },
    getIntersection: function(){
      for(vart,
      r=Kinetic.Util._getXY(Array.prototype.slice.call(arguments)),
      i=this.getChildren(),
      u=i.length,
      f=u-1,
      n=f;n>=0;n--)if(t=i[
        n
      ].getIntersection(r))returnt;returnnull
    },
    _resizeDOM: function(){
      if(this.content){
        varr,
        u,
        n=this.getWidth(),
        t=this.getHeight(),
        f=this.getChildren(),
        e=f.length;for(this.content.style.width=n+i,
        this.content.style.height=t+i,
        this.bufferCanvas.setSize(n,
        t),
        this.bufferHitCanvas.setSize(n,
        t),
        r=0;e>r;r++)u=f[
          r
        ],
        u.getCanvas().setSize(n,
        t),
        u.hitCanvas.setSize(n,
        t),
        u.draw()
      }
    },
    add: function(n){
      returnKinetic.Container.prototype.add.call(this,
      n),
      n.canvas.setSize(this.attrs.width,
      this.attrs.height),
      n.hitCanvas.setSize(this.attrs.width,
      this.attrs.height),
      n.draw(),
      this.content.appendChild(n.canvas._canvas),
      this
    },
    getParent: function(){
      returnnull
    },
    getLayer: function(){
      returnnull
    },
    getLayers: function(){
      returnthis.getChildren()
    },
    _bindContentEvents: function(){
      for(varn=0;bt>n;n++)l(this,
      c[
        n
      ])
    },
    _mouseover: function(n){
      this._fire(g,
      n)
    },
    _mouseout: function(i){
      this._setPointerPosition(i);varr=this.targetShape;r&&!Kinetic.isDragging()&&(r._fireAndBubble(n,
      i),
      r._fireAndBubble(t,
      i),
      this.targetShape=null);this.pointerPos=void0;this._fire(d,
      i)
    },
    _mousemove: function(i){
      this._setPointerPosition(i);varo=Kinetic.DD,
      e=this.getIntersection(this.getPointerPosition()),
      f=e&&e.shape?e.shape: void0;f?Kinetic.isDragging()||255!==e.pixel[
        3
      ]||this.targetShape&&this.targetShape._id===f._id?f._fireAndBubble(u,
      i): (this.targetShape&&(this.targetShape._fireAndBubble(n,
      i,
      f),
      this.targetShape._fireAndBubble(t,
      i,
      f)),
      f._fireAndBubble(r,
      i,
      this.targetShape),
      f._fireAndBubble(y,
      i,
      this.targetShape),
      this.targetShape=f): this.targetShape&&!Kinetic.isDragging()&&(this.targetShape._fireAndBubble(n,
      i),
      this.targetShape._fireAndBubble(t,
      i),
      this.targetShape=null);this._fire(nt,
      i);o&&o._drag(i);i.preventDefault&&i.preventDefault()
    },
    _mousedown: function(n){
      this._setPointerPosition(n);vart=this.getIntersection(this.getPointerPosition()),
      i=t&&t.shape?t.shape: void0;Kinetic.listenClickTap=!0;i&&(this.clickStartShape=i,
      i._fireAndBubble(f,
      n));this._fire(tt,
      n);n.preventDefault&&n.preventDefault()
    },
    _mouseup: function(n){
      this._setPointerPosition(n);vari=this.getIntersection(this.getPointerPosition()),
      t=i&&i.shape?i.shape: void0,
      r=!1;Kinetic.inDblClickWindow?(r=!0,
      Kinetic.inDblClickWindow=!1): Kinetic.inDblClickWindow=!0;setTimeout(function(){
        Kinetic.inDblClickWindow=!1
      },
      Kinetic.dblClickWindow);t&&(t._fireAndBubble(e,
      n),
      Kinetic.listenClickTap&&t._id===this.clickStartShape._id&&(t._fireAndBubble(p,
      n),
      r&&t._fireAndBubble(w,
      n)));this._fire(it,
      n);Kinetic.listenClickTap&&(this._fire(rt,
      n),
      r&&this._fire(ut,
      n));Kinetic.listenClickTap=!1;n.preventDefault&&n.preventDefault()
    },
    _touchstart: function(n){
      this._setPointerPosition(n);vari=this.getIntersection(this.getPointerPosition()),
      t=i&&i.shape?i.shape: void0;Kinetic.listenClickTap=!0;t&&(this.tapStartShape=t,
      t._fireAndBubble(o,
      n),
      t.isListening()&&n.preventDefault&&n.preventDefault());this._fire(ft,
      n)
    },
    _touchend: function(n){
      this._setPointerPosition(n);vari=this.getIntersection(this.getPointerPosition()),
      t=i&&i.shape?i.shape: void0,
      r=!1;Kinetic.inDblClickWindow?(r=!0,
      Kinetic.inDblClickWindow=!1): Kinetic.inDblClickWindow=!0;setTimeout(function(){
        Kinetic.inDblClickWindow=!1
      },
      Kinetic.dblClickWindow);t&&(t._fireAndBubble(s,
      n),
      Kinetic.listenClickTap&&t._id===this.tapStartShape._id&&(t._fireAndBubble(b,
      n),
      r&&t._fireAndBubble(k,
      n)),
      t.isListening()&&n.preventDefault&&n.preventDefault());Kinetic.listenClickTap&&(this._fire(et,
      n),
      r&&this._fire(ot,
      n));Kinetic.listenClickTap=!1
    },
    _touchmove: function(n){
      this._setPointerPosition(n);varr=Kinetic.DD,
      t=this.getIntersection(this.getPointerPosition()),
      i=t&&t.shape?t.shape: void0;i&&(i._fireAndBubble(h,
      n),
      i.isListening()&&n.preventDefault&&n.preventDefault());this._fire(st,
      n);r&&r._drag(n)
    },
    _setPointerPosition: function(n){
      varu,
      n=n?n: window.event,
      r=this._getContentPosition(),
      f=n.offsetX,
      e=n.clientX,
      t=null,
      i=null;void0!==n.touches?1===n.touches.length&&(u=n.touches[
        0
      ],
      t=u.clientX-r.left,
      i=u.clientY-r.top): void0!==f?(t=f,
      i=n.offsetY): "mozilla"===Kinetic.UA.browser?(t=n.layerX,
      i=n.layerY): void0!==e&&r&&(t=e-r.left,
      i=n.clientY-r.top);null!==t&&null!==i&&(this.pointerPos={
        x: t,
        y: i
      })
    },
    _getContentPosition: function(){
      varn=this.content.getBoundingClientRect?this.content.getBoundingClientRect(): {
        top: 0,
        left: 0
      };return{
        top: n.top,
        left: n.left
      }
    },
    _buildDOM: function(){
      varn=this.getContainer();n.innerHTML=wt;this.content=document.createElement(ht);this.content.style.position=ct;this.content.style.display=lt;this.content.className=at;this.content.setAttribute("role",
      "presentation");n.appendChild(this.content);this.bufferCanvas=newKinetic.SceneCanvas({
        pixelRatio: 1
      });this.bufferHitCanvas=newKinetic.HitCanvas;this._resizeDOM()
    },
    _onContent: function(n,
    t){
      for(varr,
      u=n.split(vt),
      f=u.length,
      i=0;f>i;i++)r=u[
        i
      ],
      this.content.addEventListener(r,
      t,
      !1)
    }
  });Kinetic.Util.extend(Kinetic.Stage,
  Kinetic.Container);Kinetic.Factory.addGetter(Kinetic.Stage,
  "container")
}();!function(){
  varn="#",
  t="beforeDraw",
  i="draw";Kinetic.Util.addMethods(Kinetic.Layer,
  {
    ___init: function(n){
      this.nodeType="Layer";this.canvas=newKinetic.SceneCanvas;this.hitCanvas=newKinetic.HitCanvas;Kinetic.Container.call(this,
      n)
    },
    _validateAdd: function(n){
      vart=n.getType();"Group"!==t&&"Shape"!==t&&Kinetic.Util.error("You may only add groups and shapes to a layer.")
    },
    getIntersection: function(){
      vart,
      i,
      r,
      u=Kinetic.Util._getXY(Array.prototype.slice.call(arguments));if(this.isVisible()&&this.isListening()){
        if(t=this.hitCanvas.context._context.getImageData(0|u.x,
        0|u.y,
        1,
        1).data,
        255===t[
          3
        ])returni=Kinetic.Util._rgbToHex(t[
          0
        ],
        t[
          1
        ],
        t[
          2
        ]),
        r=Kinetic.shapes[
          n+i
        ],
        {
          shape: r,
          pixel: t
        };if(t[
          0
        ]>0||t[
          1
        ]>0||t[
          2
        ]>0||t[
          3
        ]>0)return{
          pixel: t
        }
      }returnnull
    },
    drawScene: function(n){
      returnn=n||this.getCanvas(),
      this._fire(t,
      {
        node: this
      }),
      this.getClearBeforeDraw()&&n.getContext().clear(),
      Kinetic.Container.prototype.drawScene.call(this,
      n),
      this._fire(i,
      {
        node: this
      }),
      this
    },
    drawHit: function(){
      varn=this.getLayer();returnn&&n.getClearBeforeDraw()&&n.getHitCanvas().getContext().clear(),
      Kinetic.Container.prototype.drawHit.call(this),
      this
    },
    getCanvas: function(){
      returnthis.canvas
    },
    getHitCanvas: function(){
      returnthis.hitCanvas
    },
    getContext: function(){
      returnthis.getCanvas().getContext()
    },
    clear: function(){
      varn=this.getContext(),
      t=this.getHitCanvas().getContext();returnn.clear.apply(n,
      arguments),
      t.clear.apply(t,
      arguments),
      this
    },
    setVisible: function(n){
      returnKinetic.Node.prototype.setVisible.call(this,
      n),
      n?(this.getCanvas()._canvas.style.display="block",
      this.hitCanvas._canvas.style.display="block"): (this.getCanvas()._canvas.style.display="none",
      this.hitCanvas._canvas.style.display="none"),
      this
    },
    setZIndex: function(n){
      Kinetic.Node.prototype.setZIndex.call(this,
      n);vart=this.getStage();returnt&&(t.content.removeChild(this.getCanvas()._canvas),
      n<t.getChildren().length-1?t.content.insertBefore(this.getCanvas()._canvas,
      t.getChildren()[
        n+1
      ].getCanvas()._canvas): t.content.appendChild(this.getCanvas()._canvas)),
      this
    },
    moveToTop: function(){
      Kinetic.Node.prototype.moveToTop.call(this);varn=this.getStage();n&&(n.content.removeChild(this.getCanvas()._canvas),
      n.content.appendChild(this.getCanvas()._canvas))
    },
    moveUp: function(){
      if(Kinetic.Node.prototype.moveUp.call(this)){
        varn=this.getStage();n&&(n.content.removeChild(this.getCanvas()._canvas),
        this.index<n.getChildren().length-1?n.content.insertBefore(this.getCanvas()._canvas,
        n.getChildren()[
          this.index+1
        ].getCanvas()._canvas): n.content.appendChild(this.getCanvas()._canvas))
      }
    },
    moveDown: function(){
      varn,
      t;Kinetic.Node.prototype.moveDown.call(this)&&(n=this.getStage(),
      n&&(t=n.getChildren(),
      n.content.removeChild(this.getCanvas()._canvas),
      n.content.insertBefore(this.getCanvas()._canvas,
      t[
        this.index+1
      ].getCanvas()._canvas)))
    },
    moveToBottom: function(){
      varn,
      t;Kinetic.Node.prototype.moveToBottom.call(this)&&(n=this.getStage(),
      n&&(t=n.getChildren(),
      n.content.removeChild(this.getCanvas()._canvas),
      n.content.insertBefore(this.getCanvas()._canvas,
      t[
        1
      ].getCanvas()._canvas)))
    },
    getLayer: function(){
      returnthis
    },
    remove: function(){
      vart=this.getStage(),
      i=this.getCanvas(),
      n=i._canvas;returnKinetic.Node.prototype.remove.call(this),
      t&&n&&Kinetic.Util._isInDocument(n)&&t.content.removeChild(n),
      this
    },
    getStage: function(){
      returnthis.parent
    }
  });Kinetic.Util.extend(Kinetic.Layer,
  Kinetic.Container);Kinetic.Factory.addGetterSetter(Kinetic.Layer,
  "clearBeforeDraw",
  !0)
}();!function(){
  Kinetic.Util.addMethods(Kinetic.Group,
  {
    ___init: function(n){
      this.nodeType="Group";Kinetic.Container.call(this,
      n)
    },
    _validateAdd: function(n){
      vart=n.getType();"Group"!==t&&"Shape"!==t&&Kinetic.Util.error("You may only add groups and shapes to groups.")
    }
  });Kinetic.Util.extend(Kinetic.Group,
  Kinetic.Container)
}();!function(){
  Kinetic.Rect=function(n){
    this.___init(n)
  };Kinetic.Rect.prototype={
    ___init: function(n){
      Kinetic.Shape.call(this,
      n);this.className="Rect"
    },
    drawFunc: function(n){
      vart=this.getCornerRadius(),
      i=this.getWidth(),
      r=this.getHeight();n.beginPath();t?(n.moveTo(t,
      0),
      n.lineTo(i-t,
      0),
      n.arc(i-t,
      t,
      t,
      3*Math.PI/2,
      0,
      !1),
      n.lineTo(i,
      r-t),
      n.arc(i-t,
      r-t,
      t,
      0,
      Math.PI/2,
      !1),
      n.lineTo(t,
      r),
      n.arc(t,
      r-t,
      t,
      Math.PI/2,
      Math.PI,
      !1),
      n.lineTo(0,
      t),
      n.arc(t,
      t,
      t,
      Math.PI,
      3*Math.PI/2,
      !1)): n.rect(0,
      0,
      i,
      r);n.closePath();n.fillStrokeShape(this)
    }
  };Kinetic.Util.extend(Kinetic.Rect,
  Kinetic.Shape);Kinetic.Factory.addGetterSetter(Kinetic.Rect,
  "cornerRadius",
  0)
}();!function(){
  varn="Image",
  t="set";Kinetic.Image=function(n){
    this.___init(n)
  };Kinetic.Image.prototype={
    ___init: function(t){
      Kinetic.Shape.call(this,
      t);this.className=n
    },
    _useBufferCanvas: function(){
      return(this.hasShadow()||1!==this.getAbsoluteOpacity())&&this.hasStroke()
    },
    drawFunc: function(n){
      vart,
      r,
      i,
      u=this.getWidth(),
      f=this.getHeight();this.getFilter()&&this._applyFilter&&(this.applyFilter(),
      this._applyFilter=!1);this.filterCanvas?(i=this.filterCanvas._canvas,
      r=[
        i,
        0,
        0,
        u,
        f
      ]): (i=this.getImage(),
      i&&(t=this.getCrop(),
      t?(t.x=t.x||0,
      t.y=t.y||0,
      t.width=t.width||i.width-t.x,
      t.height=t.height||i.height-t.y,
      r=[
        i,
        t.x,
        t.y,
        t.width,
        t.height,
        0,
        0,
        u,
        f
      ]): r=[
        i,
        0,
        0,
        u,
        f
      ]));n.beginPath();n.rect(0,
      0,
      u,
      f);n.closePath();n.fillStrokeShape(this);i&&n.drawImage.apply(n,
      r)
    },
    drawHitFunc: function(n){
      vart=this.getWidth(),
      i=this.getHeight(),
      r=this.imageHitRegion;r?(n.drawImage(r,
      0,
      0),
      n.beginPath(),
      n.rect(0,
      0,
      t,
      i),
      n.closePath(),
      n.strokeShape(this)): (n.beginPath(),
      n.rect(0,
      0,
      t,
      i),
      n.closePath(),
      n.fillStrokeShape(this))
    },
    applyFilter: function(){
      vart,
      i,
      r,
      u=this.getImage(),
      f=(this.getWidth(),
      this.getHeight(),
      this.getFilter()),
      n=this.getCrop()||{
        
      };n.x=n.x||0;n.y=n.y||0;n.width=n.width||u.width-n.x;n.height=n.height||u.height-n.y;this.filterCanvas&&this.filterCanvas.getWidth()===n.width&&this.filterCanvas.getHeight()===n.height?(t=this.filterCanvas,
      t.getContext().clear()): t=this.filterCanvas=newKinetic.SceneCanvas({
        width: n.width,
        height: n.height,
        pixelRatio: 1
      });i=t.getContext();try{
        i.drawImage(u,
        n.x,
        n.y,
        n.width,
        n.height,
        0,
        0,
        n.width,
        n.height);r=i.getImageData(0,
        0,
        n.width,
        n.height);f.call(this,
        r);i.putImageData(r,
        0,
        0)
      }catch(e){
        this.clearFilter();Kinetic.Util.warn("Unable to apply filter. "+e.message)
      }
    },
    clearFilter: function(){
      this.filterCanvas=null;this._applyFilter=!1
    },
    createImageHitRegion: function(n){
      varu,
      i,
      r,
      t,
      f,
      h=this,
      e=this.getWidth(),
      o=this.getHeight(),
      c=newKinetic.SceneCanvas({
        width: e,
        height: o,
        pixelRatio: 1
      }),
      s=c.getContext()._context,
      l=this.getImage();s.drawImage(l,
      0,
      0);try{
        for(u=s.getImageData(0,
        0,
        e,
        o),
        i=u.data,
        f=i.length,
        r=Kinetic.Util._hexToRgb(this.colorKey),
        t=0;f>t;t+=4)i[
          t+3
        ]>0&&(i[
          t
        ]=r.r,
        i[
          t+1
        ]=r.g,
        i[
          t+2
        ]=r.b);Kinetic.Util._getImage(u,
        function(t){
          h.imageHitRegion=t;n&&n()
        })
      }catch(a){
        Kinetic.Util.warn("Unable to create image hit region. "+a.message)
      }
    },
    clearImageHitRegion: function(){
      deletethis.imageHitRegion
    },
    getWidth: function(){
      varn=this.getImage();returnthis.attrs.width||(n?n.width: 0)
    },
    getHeight: function(){
      varn=this.getImage();returnthis.attrs.height||(n?n.height: 0)
    },
    destroy: function(){
      returnKinetic.Shape.prototype.destroy.call(this),
      deletethis.filterCanvas,
      deletethis.attrs,
      this
    }
  };Kinetic.Util.extend(Kinetic.Image,
  Kinetic.Shape);Kinetic.Factory.addFilterGetterSetter=function(n,
  t,
  i){
    this.addGetter(n,
    t,
    i);this.addFilterSetter(n,
    t)
  };Kinetic.Factory.addFilterSetter=function(n,
  i){
    varr=t+Kinetic.Util._capitalize(i);n.prototype[
      r
    ]=function(n){
      this._setAttr(i,
      n);this._applyFilter=!0
    }
  };Kinetic.Factory.addGetterSetter(Kinetic.Image,
  "image");Kinetic.Factory.addBoxGetterSetter(Kinetic.Image,
  "crop");Kinetic.Factory.addFilterGetterSetter(Kinetic.Image,
  "filter")
}();!function(){
  Kinetic.Line=function(n){
    this.___init(n)
  };Kinetic.Line.prototype={
    ___init: function(n){
      Kinetic.Shape.call(this,
      n);this.className="Line"
    },
    drawFunc: function(n){
      vart,
      r,
      i=this.getPoints(),
      u=i.length;for(n.beginPath(),
      n.moveTo(i[
        0
      ].x,
      i[
        0
      ].y),
      t=1;u>t;t++)r=i[
        t
      ],
      n.lineTo(r.x,
      r.y);n.strokeShape(this)
    }
  };Kinetic.Util.extend(Kinetic.Line,
  Kinetic.Shape);Kinetic.Factory.addPointsGetterSetter(Kinetic.Line,
  "points")
}();__extends=this&&this.__extends||function(n,
t){
  functionr(){
    this.constructor=n
  }for(variint)t.hasOwnProperty(i)&&(n[
    i
  ]=t[
    i
  ]);n.prototype=t===null?Object.create(t): (r.prototype=t.prototype,
  newr)
},
function(n){
  vart=function(){
    functionn(){
      
    }returnn.fatalError=function(){
      n.onerror&&n.onerror()
    },
    n.incLoadCount=function(){
      if(n._loadCount==0&&n.onloading)n.onloading(!0);++n._loadCount
    },
    n.decLoadCount=function(){
      if(--n._loadCount,
      n._loadCount<0&&(console.log("API._loadCount mismatch."),
      n._loadCount=0),
      n._loadCount==0&&n.onloading)n.onloading(!1)
    },
    n.priceRequest=function(t,
    i){
      n.postJson("getquote",
      t,
      function(t){
        i(n.parseJson(t))
      })
    },
    n.addToCart=function(t,
    i,
    r){
      n.postJson("addtocart",
      {
        designId: t,
        quantities: i
      },
      function(){
        r()
      })
    },
    n.compareDecorationsUrl=function(){
      return"/help/compare-decoration-methods?mode=pop"
    },
    n.sizeChartUrl=function(n){
      return"/products/sizechart/"+n
    },
    n.myImages=function(t){
      n.get("myimages",
      null,
      function(n){
        t(n)
      })
    },
    n.loginCheck=function(t){
      n.getRaw(n.BRAIN_URL+"logincheck",
      function(i){
        varr=n.urlDecode(i);t(r.result=="1")
      })
    },
    n.logon=function(t,
    i,
    r){
      n.post("logon",
      {
        Email: t,
        Password: i
      },
      function(n){
        r(n)
      })
    },
    n.create=function(t,
    i,
    r,
    u,
    f,
    e,
    o,
    s){
      n.post("create",
      {
        Newsletter: o.toString(),
        Password2: e,
        Password: f,
        Phone: u,
        Email: r,
        FirstName: t,
        LastName: i
      },
      function(n){
        s(n)
      })
    },
    n.designs=function(t){
      n.get("designs",
      null,
      function(n){
        t(n)
      })
    },
    n.designExists=function(t,
    i){
      n.postForm("designexists",
      {
        name: t
      },
      function(t){
        i(n.parseJson(t))
      })
    },
    n.design=function(t,
    i){
      n.get("design",
      t.toString(),
      function(n){
        i(n)
      })
    },
    n.template=function(t,
    i,
    r,
    u,
    f){
      vare=n.BRAIN_URL+"template/"+t.toString()+"?productId="+i+"&colorCode="+r+"&decorationMethod="+u;n.getRaw(e,
      function(t){
        f(n.parseJson(t))
      })
    },
    n.tempdesign=function(t,
    i,
    r){
      varu=n.BRAIN_URL+"tempdesign/"+t+"?token="+i;n.getRaw(u,
      function(t){
        r(n.parseJson(t))
      })
    },
    n.saveDesign=function(t,
    i){
      n.postJson("save",
      t,
      function(t){
        i(n.parseJson(t))
      })
    },
    n.shareDesign=function(t,
    i){
      n.postJson("share",
      {
        design: t
      },
      function(t){
        i(n.parseJson(t))
      })
    },
    n.sendDesign=function(t,
    i){
      n.postJson("sendemail",
      t,
      function(t){
        i(n.parseJson(t))
      })
    },
    n.clipartThumbUrl=function(t){
      returnn.DATA_URL+"clipart/jpg/"+t+".jpg"
    },
    n.clipartPreviewUrl=function(t){
      returnn.DATA_URL+"clipart/jpg_preview/"+t+".jpg"
    },
    n.ziggyImageUrl=function(t){
      returnn.DATA_URL+"clipart/ziggy/"+t+".ziggy"
    },
    n.clipart=function(t,
    i){
      n.get("clipart",
      t,
      function(n){
        i(n)
      })
    },
    n.clipartList=function(t,
    i){
      n.get("clipartlist",
      t,
      function(n){
        i(n)
      })
    },
    n.clipartSearch=function(t,
    i){
      n.post("clipartsearch",
      {
        keyword: t
      },
      function(n){
        i(n)
      })
    },
    n.templateCategories=function(t){
      n.get("templates",
      null,
      function(n){
        t(n)
      })
    },
    n.templateSearch=function(t,
    i){
      t?n.get("templates",
      t,
      function(n){
        i(n)
      }): i([
        
      ])
    },
    n.templateCategoryIcon=function(n){
      returnn=n.toLowerCase().replace(//g,
      "-").replace(/\//g,
      "-"),
      "/assets/images/templates/icons/"+n+".png"
    },
    n.fonts=function(t,
    i){
      n.get("fonts",
      t.toString(),
      function(n){
        i(n)
      })
    },
    n.ziggyFontUrl=function(t){
      returnt=t.toLowerCase().replace(//g,
      "-"),
      n.DATA_URL+"fonts/ziggy/"+t+".ziggy"
    },
    n.fontPreviewUrl=function(t){
      returnt=t.toLowerCase().replace(//g,
      "-"),
      n.DATA_URL+"fonts/previews/png/"+t+".png"
    },
    n.product=function(t,
    i){
      n.get("product",
      t,
      function(n){
        i(n)
      })
    },
    n.productUrl=function(t,
    i,
    r){
      returnn.DATA_URL+"products/jpg/lg/"+t+"_"+i+"_"+r+".jpg"
    },
    n.findProductColor=function(n,
    t){
      for(varr=n.productColors,
      i=0;i<r.length;++i)if(r[
        i
      ].colorId==t.toUpperCase())returnr[
        i
      ];returnnull
    },
    n.parseJson=function(t){
      try{
        returnJSON.parse(t)
      }catch(i){
        returnn.fatalError(),
        null
      }
    },
    n.post=function(t,
    i,
    r){
      n.postForm(t,
      i,
      function(t){
        r(n.parseJson(t))
      })
    },
    n.postForm=function(t,
    i,
    r){
      n.postRaw(t+"?format=json",
      "application/x-www-form-urlencoded",
      n.urlEncode(i),
      r)
    },
    n.postJson=function(t,
    i,
    r){
      n.postRaw(t+"?format=json",
      "application/json",
      JSON.stringify(i),
      r)
    },
    n.postRaw=function(t,
    i,
    r,
    u){
      varf=newXMLHttpRequest;f.onreadystatechange=function(){
        f.readyState==4&&(n.decLoadCount(),
        f.status==200?u(f.responseText): n.fatalError())
      };n.incLoadCount();try{
        f.open("POST",
        n.BRAIN_URL+t);f.setRequestHeader("Content-type",
        i);f.send(r)
      }catch(e){
        n.fatalError()
      }
    },
    n.get=function(t,
    i,
    r){
      n.getText(t,
      i,
      function(t){
        r(n.parseJson(t))
      })
    },
    n.getText=function(t,
    i,
    r){
      varu=n.BRAIN_URL+t;i&&(u+="/"+encodeURIComponent(i));u+="?format=json";n.getRaw(u,
      function(n){
        r(n)
      })
    },
    n.getRaw=function(t,
    i,
    r){
      r===void0&&(r=null);varu=newXMLHttpRequest;u.onreadystatechange=function(){
        if(u.readyState==4)if(n.decLoadCount(),
        u.status==200)i(u.responseText);else{
          r&&r();n.fatalError();return
        }
      };n.incLoadCount();try{
        u.open("GET",
        t);u.send()
      }catch(f){
        n.fatalError()
      }
    },
    n.urlEncode=function(n){
      vart,
      i;for(iinn)t?t+="&": t="",
      t+=i+"="+n[
        i
      ];returnt
    },
    n.urlDecode=function(n){
      vart={
        
      },
      i=n.split("&"),
      r;for(rini){
        varf=i[
          r
        ],
        u=f.split("="),
        e=decodeURIComponent(u[
          0
        ]),
        o=decodeURIComponent(u[
          1
        ]);t[
          e
        ]=o
      }returnt
    },
    n.DECORATION_SCREENPRINT="ScreenPrint",
    n.DECORATION_DIGITALPRINT="DigitalPrint",
    n.DECORATION_EMBROIDER="Embroider",
    n.DATA_URL="/studio/data/",
    n.BRAIN_URL="/studio/brain/",
    n._loadCount=0,
    n
  }();n.API=t
}(Uber||(Uber={
  
})),
function(n){
  functiont(n,
  t){
    n.ontouchstart=function(n){
      i(n.target)||(t(),
      n.preventDefault())
    };n.onmousedown=function(n){
      t();n.preventDefault()
    }
  }functionf(n,
  i,
  r){
    t(i,
    r);n.onsubmit=function(n){
      r();n.preventDefault()
    }
  }functione(n,
  i,
  r){
    varu=document.createElement("a");returnu.href="#",
    u.textContent=n,
    u.className=i,
    r&&t(u,
    r),
    u
  }functiono(n){
    vart=n.lastIndexOf(".");returnt==-1?n: n.substring(0,
    t)
  }functions(t){
    returnt*n.TAU/360
  }functionh(t){
    returnt*360/n.TAU
  }functionc(n,
  t){
    vari=n.getMatrix(),
    r=n.getTranslation();return[
      i[
        0
      ]*t[
        0
      ]+i[
        2
      ]*t[
        1
      ]+r.x,
      i[
        1
      ]*t[
        0
      ]+i[
        3
      ]*t[
        1
      ]+r.y
    ]
  }functionl(n){
    varr=newKinetic.Transform,
    t=n.getMatrix(),
    i=r.getMatrix();returni[
      0
    ]=t[
      0
    ],
    i[
      1
    ]=t[
      1
    ],
    i[
      2
    ]=t[
      2
    ],
    i[
      3
    ]=t[
      3
    ],
    i[
      4
    ]=t[
      4
    ],
    i[
      5
    ]=t[
      5
    ],
    r
  }functioni(n){
    while(n){
      vart=getComputedStyle(n);if(t.overflowX=="auto"||t.overflowX=="scroll"||t.overflowY=="auto"||t.overflowY=="scroll")returnn;n=n.parentElement
    }returnnull
  }functionu(n){
    vart=getComputedStyle(n);returnt.overflowX=="scroll"?!0: !1
  }functiona(){
    varn=0;document.body.addEventListener("touchstart",
    function(t){
      n=t.touches[
        0
      ].clientY
    });document.body.addEventListener("touchmove",
    function(t){
      varf=t.target,
      r;if(f.tagName.toLowerCase()!="input"||f.type.toLowerCase()!="range"){
        if(r=i(f),
        r){
          if(u(r))return;vare=n-t.touches[
            0
          ].clientY,
          o=getComputedStyle(r),
          s=parseInt(o[
            "border-top-width"
          ])+parseInt(o[
            "border-bottom-width"
          ]),
          h=r.scrollTop==0,
          c=r.scrollTop+r.offsetHeight-s==r.scrollHeight;(e<0&&h||e>0&&c)&&t.preventDefault();return
        }t.preventDefault()
      }
    },
    !0)
  }functionv(){
    document.body.addEventListener("click",
    function(n){
      n.target.tagName=="A"&&n.target.href==window.location.href+"#"&&n.preventDefault()
    },
    !0)
  }functiony(n){
    returnn=Math.floor(n)-1,
    n|=n>>>1,
    n|=n>>>2,
    n|=n>>>4,
    n|=n>>>8,
    n|=n>>>16,
    n+1
  }functionp(n){
    returnn|=n>>>1,
    n|=n>>>2,
    n|=n>>>4,
    n|=n>>>8,
    n|=n>>>16,
    n-(n>>>1)
  }functionw(n){
    returnn?n.replace(/^\s\s*/,
    "").replace(/\s\s*$/,
    ""): ""
  }functionb(){
    "onorientationchange"inwindow&&(window.addEventListener("orientationchange",
    r,
    !1),
    document.addEventListener("focusout",
    r,
    !1))
  }functionk(n,
  t){
    n.onkeyup=function(){
      vari=n.value;i.length>t&&(n.value=i.substring(0,
      t))
    }
  }functionr(){
    window.scrollTo(0,
    0)
  }functiond(n){
    vart=n.position==null?(window.screen.availHeight-n.size.height)/2: n.position.y,
    i=n.position==null?(window.screen.availWidth-n.size.width)/2: n.position.x,
    r=n.statusbar==!0?"yes": "no",
    u=n.scrollbars==!0?"yes": "no";returnwindow.open(n.url,
    n.title,
    "status="+r+",toolbar=no,resizable=yes,scrollbars="+u+",left="+i+",top="+t+",directories=no,menubar=no,width="+n.size.width+",height="+n.size.height)
  }n.TAU=2*Math.PI;n.onClick=t;n.onSubmit=f;n.makeAnchor=e;n.stripExtension=o;n.degToRad=s;n.radToDeg=h;n.multMatVec=c;n.copyTransform=l;n.scrollableParent=i;n.hasHorizontalScroll=u;n.nastyDisableRubberBandHack=a;n.stopAllAnchorsFromNavigating=v;n.nearestPowerOf2=y;n.previousPowerOf2=p;n.trimAllWhitespace=w;n.iOSScrollFix=b;n.limitCharacterCount=k;n.scrollToTop=r;n.openWindow=d
}(Uber||(Uber={
  
})),
function(n){
  vars=function(){
    functionn(){
      this._listeners=[
        
      ]
    }returnn.prototype.listen=function(n){
      this._listeners.push(n)
    },
    n.prototype.unlisten=function(n){
      for(vart=0;t<this._listeners.length;++t)if(this._listeners[
        t
      ]==n){
        this._listeners.splice(t,
        1);return
      }
    },
    n.prototype.get=function(n){
      vart=this;returnt[
        n
      ]()
    },
    n.prototype.set=function(n,
    t){
      vari=this;i[
        "set_"+n
      ](t)
    },
    n.prototype.fire=function(n,
    t){
      returnthis._fire(n,
      t,
      !1)
    },
    n.prototype.forceFire=function(n,
    t){
      this._fire(n,
      t,
      !0)
    },
    n.prototype._fire=function(n,
    t,
    i){
      if(!i&&t==this.get(n))return!1;for(varr=0;r<this._listeners.length;++r)this._listeners[
        r
      ](n,
      t);return!0
    },
    n
  }(),
  i,
  r,
  t,
  u,
  f,
  e,
  o;n.Observable=s;i=function(){
    functionn(){
      varn=this;this._map={
        
      };this._toSet={
        
      };this._viewListener=function(t,
      i){
        varu=n._map[
          t
        ],
        r;if(u)for(r=0;r<u.length;++r)u[
          r
        ].set(i)
      }
    }returnn.prototype.bind=function(n,
    t){
      vari=this;ninthis._map||(this._map[
        n
      ]=[
        
      ]);this._map[
        n
      ].push(t);t.onchange(function(t){
        i._toSet[
          n
        ]=t;i._ensureTimeout()
      })
    },
    n.prototype.setTarget=function(n){
      this._target&&this._target.unlisten(this._viewListener);this._target=n;this._target&&(n.listen(this._viewListener),
      this._setAllBoundValues())
    },
    n.prototype._ensureTimeout=function(){
      varn=this;this._timeoutEnqueued||(this._timeoutEnqueued=!0,
      setTimeout(function(){
        for(vartinn._toSet)n._target.set(t,
        n._toSet[
          t
        ]);n._timeoutEnqueued=!1;n._toSet={
          
        }
      },
      0))
    },
    n.prototype._setAllBoundValues=function(){
      varn,
      t,
      i;for(ninthis._map){
        t=this._map[
          n
        ];for(iint)t[
          i
        ].set(this._target.get(n))
      }
    },
    n
  }();n.Binding=i;r=function(){
    functionn(n){
      this._textArea=n
    }returnn.prototype.onchange=function(n){
      vart=this;this._textArea.onkeyup=this._textArea.onpaste=this._textArea.onchange=function(){
        n(t._textArea.value)
      }
    },
    n.prototype.set=function(n){
      this._textArea.value=""+n
    },
    n
  }();n.TextAreaView=r;t=function(){
    functionn(n,
    t,
    i,
    r,
    u,
    f){
      t===void0&&(t=Number.MIN_VALUE);i===void0&&(i=Number.MAX_VALUE);r===void0&&(r=1);u===void0&&(u=0);f===void0&&(f=0);this._input=n;this._min=t;this._max=i;this._decimals=u;this._default=f;n.min=""+t;n.max=""+i;n.step=""+r;n.pattern="[0-9]*"
    }returnn.prototype.onchange=function(n){
      vart=this;this._input.type&&this._input.type.toLowerCase()==="range"?this._input.oninput=function(){
        t._onchange(n)
      }: this._input.onchange=function(){
        t._onchange(n)
      }
    },
    n.prototype.setMin=function(n){
      this._min=n;this._input.min=""+n
    },
    n.prototype.setMax=function(n){
      this._max=n;this._input.max=""+n
    },
    n.prototype.set=function(n){
      typeofn=="number"&&(n=this._validate(this._fromOutsideWorld(n)),
      this._input.value=""+n)
    },
    n.prototype._validate=function(n){
      isNaN(n)&&(n=this._default);n>this._max&&(n=this._max);n<this._min&&(n=this._min);vart=Math.pow(10,
      this._decimals);returnMath.round(n*t)/t
    },
    n.prototype._fromOutsideWorld=function(n){
      returnn
    },
    n.prototype._toOutsideWorld=function(n){
      returnn
    },
    n.prototype._onchange=function(n){
      vart=this._validate(parseFloat(this._input.value)),
      i;this._input.value=""+t;i=this._toOutsideWorld(t);n(i)
    },
    n
  }();n.NumberInputView=t;u=function(n){
    functiont(t,
    i,
    r,
    u,
    f,
    e,
    o){
      i===void0&&(i=Number.MIN_VALUE);r===void0&&(r=Number.MAX_VALUE);u===void0&&(u=1);f===void0&&(f=0);e===void0&&(e=0);o===void0&&(o=1);n.call(this,
      t,
      i/o,
      r/o,
      u/o,
      f,
      e);this._scale=o
    }return__extends(t,
    n),
    t.prototype._fromOutsideWorld=function(n){
      returnn/this._scale
    },
    t.prototype._toOutsideWorld=function(n){
      returnn*this._scale
    },
    t
  }(t);n.ScaledNumberInputView=u;f=function(){
    functionn(n){
      this._input=n
    }returnn.prototype.onchange=function(n){
      vart=this;this._input.onchange=function(){
        n(t._input.checked)
      }
    },
    n.prototype.set=function(n){
      this._input.checked=!!n
    },
    n
  }();n.CheckboxInputView=f;e=function(){
    functionn(n,
    t){
      varr,
      i;this._select=n;this._options=t;for(rint)i=document.createElement("option"),
      i.value=r,
      i.textContent=t[
        r
      ],
      n.appendChild(i)
    }returnn.prototype.onchange=function(n){
      vart=this;this._select.onchange=function(){
        n(t._select.value)
      }
    },
    n.prototype.set=function(n){
      vart=n;if(!(tinthis._options))throw"Invalid select value";this._select.value=t
    },
    n
  }();n.SelectView=e;o=function(){
    functionn(n){
      vari=this,
      t;this._options=n;for(tinn)n[
        t
      ].onchange=function(){
        i.fireChange()
      }
    }returnn.prototype.onchange=function(n){
      this._onchange=n
    },
    n.prototype.set=function(n){
      vart=n;if(!(tinthis._options))throw"Invalid select value";this._options[
        t
      ].checked=!0
    },
    n.prototype.fireChange=function(){
      for(varninthis._options)if(this._options[
        n
      ].checked){
        this._onchange(n);break
      }
    },
    n
  }();n.RadioGroupView=o
}(Uber||(Uber={
  
})),
function(n){
  functionr(n){
    return"|"+n
  }vart=function(){
    functionn(n){
      vart=document.getElementById(r(n));if(!t)throw'No template with id "|'+n+'" found';this._elem=t.cloneNode(!0);this._elem.removeAttribute("id")
    }returnn.prototype.elem=function(){
      returnthis._elem
    },
    n.prototype.$=function(n){
      vart=this.elem().querySelectorAll(n);if(t.length!=1)throw"Found "+t.length+" elements for selector "+n+" (expected 1)";returnt[
        0
      ]
    },
    n.prototype.hasChild=function(n){
      returnthis.elem().querySelectorAll(n).length==1
    },
    n
  }(),
  i;n.TemplateView=t;i=function(t){
    functioni(i,
    r){
      varu=this;if(r===void0&&(r=null),
      t.call(this,
      i),
      this._container=r,
      this._showGlass=!1,
      this.hasChild(".close-icon"))n.onClick(this.$(".close-icon"),
      function(){
        u.hide()
      });this._container==null&&(this._container=document.body,
      this._showGlass=!0)
    }return__extends(i,
    t),
    i.prototype.show=function(){
      vart=this;if(this._showGlass){
        this._glass=document.createElement("div");this._glass.className="DialogGlass";this._container.appendChild(this._glass);n.onClick(this._glass,
        function(){
          t.hide()
        })
      }this._container.appendChild(this.elem())
    },
    i.prototype.hide=function(){
      this._container.contains(this.elem())&&this._container.removeChild(this.elem());this._showGlass&&this._container.removeChild(this._glass)
    },
    i
  }(t);n.Dialog=i
}(Uber||(Uber={
  
})),
function(n){
  vart=function(t){
    functioni(i,
    r,
    u){
      u===void0&&(u=!0);t.call(this,
      i);this._showGlass=u;this._studioCtx=r;this._showGlass&&this._glassContainer==null&&(this._glassContainer=r.productView().elem());n.onClick(this.$(".close-icon"),
      function(){
        r.showPane("continue")
      })
    }return__extends(i,
    t),
    i.prototype.show=function(){
      vart=this;if(this._showGlass){
        this._glass=document.createElement("div");this._glass.className="PaneGlass";this._glassContainer.appendChild(this._glass);n.onClick(this._glass,
        function(){
          t._studioCtx.showPane("continue")
        })
      }
    },
    i.prototype.hide=function(){
      this._showGlass&&this._glassContainer.removeChild(this._glass)
    },
    i
  }(n.TemplateView);n.CloseablePane=t
}(Uber||(Uber={
  
})),
function(n){
  functiont(t){
    for(vari=0;i<n.STANDARD_INKS.length;i++)if(n.STANDARD_INKS[
      i
    ].inkId==t)returnn.STANDARD_INKS[
      i
    ];returnnull
  }functiona(n,
  i){
    varr=t(i);return!r||r.rgb==""?n.productColor().rgb: r.rgb
  }functionf(n){
    returnn==4||n==12||n==16||n==39||n==30||n==42
  }functionv(n){
    returnn>=100
  }functionu(t,
  r,
  u){
    varf=n.makeAnchor("",
    "colorBox",
    u);returni(f,
    t,
    r),
    f
  }functioni(n,
  t,
  i){
    varr=t.split(";");i&&n.setAttribute("title",
    i);n.classList.remove("none");t==""?(n.innerHTML="",
    n.style.backgroundColor="transparent",
    n.classList.add("maskInk")): t=="none"?(n.innerHTML="",
    n.style.backgroundColor="",
    n.classList.remove("maskInk"),
    n.classList.add("none")): r.length>2?(n.innerHTML='<div class="w33" style="background-color:#'+r[
      0
    ]+'"><\/div><div class="w34" style="background-color:#'+r[
      1
    ]+'"><\/div><div class="w33" style="background-color:#'+r[
      2
    ]+'"><\/div>',
    n.classList.remove("maskInk")): r.length>1?(n.innerHTML='<div style="background-color:#'+r[
      0
    ]+'"><\/div><div style="background-color:#'+r[
      1
    ]+'"><\/div>',
    n.classList.remove("maskInk")): (n.innerHTML="",
    n.style.backgroundColor="#"+r[
      0
    ],
    n.classList.remove("maskInk"))
  }vare,
  o,
  s,
  h,
  c,
  l;n.STANDARD_INKS=[
    {
      rgb: "",
      inkId: 0,
      name: "Shirt Color"
    },
    {
      rgb: "000000",
      inkId: 1,
      name: "Black"
    },
    {
      rgb: "747678",
      inkId: 2,
      name: "Dark Gray"
    },
    {
      rgb: "a5acaf",
      inkId: 3,
      name: "Light Gray"
    },
    {
      rgb: "ffffff",
      inkId: 4,
      name: "White"
    },
    {
      rgb: "660018",
      inkId: 5,
      name: "Maroon"
    },
    {
      rgb: "910000",
      inkId: 6,
      name: "Cardinal"
    },
    {
      rgb: "d52b1e",
      inkId: 7,
      name: "Red"
    },
    {
      rgb: "da6857",
      inkId: 35,
      name: "Coral"
    },
    {
      rgb: "ff5800",
      inkId: 8,
      name: "Orange"
    },
    {
      rgb: "ffa952",
      inkId: 9,
      name: "Light Orange"
    },
    {
      rgb: "eabb00",
      inkId: 10,
      name: "Athletic Gold"
    },
    {
      rgb: "f0cb70",
      inkId: 36,
      name: "Sunshine"
    },
    {
      rgb: "ffde00",
      inkId: 11,
      name: "Yellow"
    },
    {
      rgb: "ffffcc",
      inkId: 12,
      name: "Pale Yellow"
    },
    {
      rgb: "b7bb71",
      inkId: 37,
      name: "Moss"
    },
    {
      rgb: "1e3826",
      inkId: 13,
      name: "Forest Green"
    },
    {
      rgb: "6a7029",
      inkId: 14,
      name: "Pine"
    },
    {
      rgb: "009b3a",
      inkId: 15,
      name: "Kelly Green"
    },
    {
      rgb: "c8e59a",
      inkId: 16,
      name: "Light Green"
    },
    {
      rgb: "c9dd03",
      inkId: 17,
      name: "Lime"
    },
    {
      rgb: "00796c",
      inkId: 18,
      name: "Lagoon"
    },
    {
      rgb: "00a097",
      inkId: 19,
      name: "Teal"
    },
    {
      rgb: "002244",
      inkId: 20,
      name: "Navy Blue"
    },
    {
      rgb: "002c77",
      inkId: 21,
      name: "Deep Blue"
    },
    {
      rgb: "0039a6",
      inkId: 22,
      name: "Royal Blue"
    },
    {
      rgb: "535e94",
      inkId: 38,
      name: "Denim"
    },
    {
      rgb: "0073cf",
      inkId: 23,
      name: "Bright Blue"
    },
    {
      rgb: "00a1de",
      inkId: 24,
      name: "Winter Blue"
    },
    {
      rgb: "98c6ea",
      inkId: 25,
      name: "Light Blue"
    },
    {
      rgb: "cdeee7",
      inkId: 39,
      name: "Light Aqua"
    },
    {
      rgb: "522398",
      inkId: 26,
      name: "Purple"
    },
    {
      rgb: "ad80d0",
      inkId: 27,
      name: "Light Purple"
    },
    {
      rgb: "ae6a7f",
      inkId: 40,
      name: "Raspberry"
    },
    {
      rgb: "d25863",
      inkId: 41,
      name: "Watermelon"
    },
    {
      rgb: "d71f85",
      inkId: 28,
      name: "Magenta"
    },
    {
      rgb: "eaa2c3",
      inkId: 29,
      name: "Pink"
    },
    {
      rgb: "f2c9d9",
      inkId: 30,
      name: "Light Pink"
    },
    {
      rgb: "4c3019",
      inkId: 31,
      name: "Dark Brown"
    },
    {
      rgb: "825c26",
      inkId: 32,
      name: "Light Brown"
    },
    {
      rgb: "ccaf76",
      inkId: 33,
      name: "Tan"
    },
    {
      rgb: "d9d2c2",
      inkId: 42,
      name: "Beige"
    },
    {
      rgb: "f1c4a2",
      inkId: 34,
      name: "Bisque"
    }
  ];n.getStandardInk=t;n.standardInkRgb=a;e=function(){
    functionn(n,
    t){
      this._elem=n;this._onselect=t;n.className="ProductColorPicker"
    }returnn.prototype.setColors=function(n){
      this._colors=n;this._elem.innerHTML="";for(vart=0;t<n.length;++t)this.addColor(n[
        t
      ])
    },
    n.prototype.addColor=function(n){
      vari=this,
      t;n.isDiscontinued||(t=u(n.rgb,
      n.colorName,
      function(){
        i.selectColor(n)
      }),
      this._elem.appendChild(t))
    },
    n.prototype.selectColor=function(n){
      this._onselect(n)
    },
    n
  }();n.ProductColorPicker=e;o=function(){
    functionr(t,
    i,
    r,
    u){
      varf=this;this._elem=t;this._onShowDlg=u;t.classList.add("colorBox");this.set(1);this._dlg==undefined&&(this._dlg=newy(i,
      r,
      function(n){
        f.set(n);f._onchange&&f._onchange(n)
      }));n.onClick(t,
      function(){
        f._onShowDlg&&f._onShowDlg();f._dlg.show();f._dlg.select(f._inkId)
      })
    }returnr.prototype.show=function(){
      this._dlg.show()
    },
    r.prototype.hide=function(){
      this._dlg.hide()
    },
    r.prototype.onchange=function(n){
      this._onchange=n
    },
    r.prototype.set=function(n){
      this._inkId=n;varr=t(this._inkId);i(this._elem,
      r.rgb,
      r.name)
    },
    r
  }();n.InkView=o;s=function(){
    functionn(n,
    t,
    i){
      this._elem=n;this._ctx=t;this._container=i
    }returnn.prototype.onchange=function(n){
      this._onchange=n
    },
    n.prototype.set=function(n){
      this._inks=n;this.render()
    },
    n.prototype.tryCreateDialog=function(){
      varn=this;this._dlg&&this._dlg.hide();this._dlg=newp(this._ctx,
      this._inks,
      this._container,
      function(t){
        n.set(t);n._onchange&&n._onchange(n._inks)
      })
    },
    n.prototype.render=function(){
      this._elem.innerHTML="";for(varn=0;n<this._inks.length;++n)this.addInk(n,
      this._inks[
        n
      ]);this._elem.innerHTML==""&&(this._elem.innerHTML="<div>Match to artwork file. ("+this._inks.length+(this._inks.length==1?" color)": " colors)"))
    },
    n.prototype.addInk=function(n,
    i){
      varr=this,
      f=t(i.inkId),
      e;f&&(e=u(f.rgb,
      f.name,
      function(){
        r.tryCreateDialog();r._dlg.show();r._dlg.selectIndex(n)
      }),
      this._elem.appendChild(e))
    },
    n.prototype.show=function(){
      this._dlg&&this._dlg.show()
    },
    n.prototype.hide=function(){
      this._dlg&&this._dlg.hide()
    },
    n
  }();n.InksView=s;varr=function(t){
    functioni(i,
    r,
    u,
    f){
      vare=this;t.call(this,
      i,
      u);this._ctx=r;this._selector=neww(function(n){
        f(n);setTimeout(function(){
          e.updateCurrentInks();e._ctx.updateDescription()
        },
        0)
      });this.$(".selectorContainer").appendChild(this._selector.elem());n.onClick(this.$(".dlgCloseButton"),
      function(){
        e.hide()
      })
    }return__extends(i,
    t),
    i.prototype.show=function(){
      t.prototype.show.call(this);this.updateCurrentInks()
    },
    i.prototype.updateCurrentInks=function(){
      this._selector.setCurrentInks(this._ctx.gatherCurrentInks())
    },
    i
  }(n.Dialog),
  y=function(t){
    functioni(i,
    r,
    u){
      varf=this;t.call(this,
      "InkPickerDialog",
      i,
      r,
      u);n.onClick(this.$(".continueButton"),
      function(){
        f.hide()
      })
    }return__extends(i,
    t),
    i.prototype.select=function(n){
      this._selector.select(n)
    },
    i
  }(r),
  p=function(r){
    functionu(n,
    t,
    i,
    u){
      vare=this,
      f;for(r.call(this,
      "InksPickerDialog",
      n,
      i,
      function(n){
        e.onselect(n)
      }),
      this._inks=t,
      this._onchange=u,
      this._curIndex=0,
      this._colorItems=[
        
      ],
      this._colorsContainer=this.$(".colorsContainer"),
      f=0;f<t.length;++f)this.addColor(f,
      t[
        f
      ])
    }return__extends(u,
    r),
    u.prototype.selectIndex=function(n){
      this._colorItems[
        this._curIndex
      ].classList.remove("selected");this._colorItems[
        this._curIndex
      ].classList.remove("selected-alt");this._curIndex=n;this._selector.select(this._inks[
        this._curIndex
      ].inkId);this._colorItems[
        this._curIndex
      ].classList.add("selected");for(vart=0;t<this._inks.length;t++)this.$(".select-group").classList.remove("ink"+t);this.$(".select-group").classList.add("ink"+this._curIndex)
    },
    u.prototype.addColor=function(r,
    u){
      vars=this,
      f=n.makeAnchor("",
      "colorBox",
      function(){
        s.selectIndex(r)
      }),
      e,
      o;f.className="item";this._colorsContainer.appendChild(f);e=document.createElement("span");e.className="colorBox";o=t(u.inkId);i(e,
      o.rgb,
      o.name);f.appendChild(e);this._colorItems[
        r
      ]=f
    },
    u.prototype.onselect=function(n){
      this._inks[
        this._curIndex
      ].inkId=n;varu=this._colorItems[
        this._curIndex
      ].firstChild,
      r=t(n);i(u,
      r.rgb,
      r.name);this._onchange(this._inks)
    },
    u
  }(r),
  w=function(i){
    functionr(n){
      i.call(this,
      "InkSelector");this._onselect=n;this._inkElems=[
        
      ];this._currentInkElems=[
        
      ];this._selectedInkId=-1;this._currentInksContainer=this.$(".currentInks");this._inksContainer=this.$(".inks");this._noinkContainer=this.$(".noink");this.populateStandardInks()
    }return__extends(r,
    i),
    r.prototype.setCurrentInks=function(n){
      vart,
      i;for(this._currentInksContainer.innerHTML="",
      this._currentInkElems=[
        
      ],
      t=0;t<this._inkElems.length;t++)this._inkElems[
        t
      ].innerHTML="";for(t=0;t<n.length;++t)v(n[
        t
      ])||(this._currentInkElems[
        n[
          t
        ]
      ]=this.addInk(n[
        t
      ],
      this._currentInksContainer),
      i=f(n[
        t
      ])?"current-alt": "current",
      this._inkElems[
        n[
          t
        ]
      ].innerHTML='<span class="'+i+'"><\/span>');this.selectElem(this._selectedInkId,
      this._currentInkElems,
      !0)
    },
    r.prototype.select=function(n){
      this.selectElem(this._selectedInkId,
      this._inkElems,
      !1);this.selectElem(this._selectedInkId,
      this._currentInkElems,
      !1);this._selectedInkId=n;this.selectElem(this._selectedInkId,
      this._inkElems,
      !0);this.selectElem(this._selectedInkId,
      this._currentInkElems,
      !0);this._onselect(n)
    },
    r.prototype.selectElem=function(n,
    t,
    i){
      if(!(n<0)&&nint){
        varr=t[
          n
        ].classList,
        u=f(n)?"selected-alt": "selected";i?r.add(u): (r.remove("selected"),
        r.remove("selected-alt"))
      }
    },
    r.prototype.populateStandardInks=function(){
      for(vari,
      t=1;t<n.STANDARD_INKS.length;++t)i=n.STANDARD_INKS[
        t
      ].inkId,
      this._inkElems[
        i
      ]=this.addInk(i,
      this._inksContainer);this._inkElems[
        0
      ]=this.addInk(0,
      this._noinkContainer)
    },
    r.prototype.addInk=function(n,
    i){
      vare=this,
      r=t(n),
      f=u(r.rgb,
      r.name,
      function(){
        e.select(n)
      });returni.appendChild(f),
      f
    },
    r
  }(n.TemplateView),
  b=function(){
    functionr(n,
    t,
    i,
    r){
      this._elem=n;this._ctx=t;this._container=i;this._onShowDlg=r
    }returnr.prototype.show=function(){
      this._dlg&&this._dlg.show()
    },
    r.prototype.hide=function(){
      this._dlg&&this._dlg.hide()
    },
    r.prototype.onchange=function(n){
      this._onchange=n
    },
    r.prototype.set=function(n){
      this._stroke=n;this.render()
    },
    r.prototype.tryCreateDialog=function(){
      varn=this;this._dlg&&this._dlg.hide();this._dlg=newh(this._ctx,
      this._stroke,
      this._container,
      function(t){
        n.set(t);n._onchange&&(n._onchange(n._stroke),
        setTimeout(function(){
          n._ctx.updateDescription()
        },
        0))
      })
    },
    r.prototype.render=function(){
      varr=this,
      u,
      f,
      e;this._elem.classList.add("colorBox");u="none";f="none";this._stroke.strokeWeight>0&&(e=t(this._stroke.strokeInkId),
      u=e.rgb,
      f=e.name);i(this._elem,
      u,
      f);n.onClick(this._elem,
      function(){
        r.tryCreateDialog();r._onShowDlg&&r._onShowDlg();r._dlg.show();r._dlg.select(r._stroke.strokeInkId)
      })
    },
    r
  }();n.StrokeInkView=b;h=function(t){
    functioni(i,
    r,
    u,
    f){
      vare=this;t.call(this,
      "StrokeInkPickerDialog",
      i,
      u,
      function(n){
        e.onselect(n)
      });this._stroke=r;this._onchange=f;this._strokeWeightInputView=newn.NumberInputView(this.$(".strokeWeightBox"),
      0,
      n.MAX_RELATIVE_STROKE_WEIGHT,
      .1,
      1,
      0);this._strokeWeightRangeView=newn.NumberInputView(this.$(".strokeWeightInput"),
      0,
      n.MAX_RELATIVE_STROKE_WEIGHT,
      .1,
      1,
      0);this._innerStrokeWeightInputView=newn.NumberInputView(this.$(".innerStrokeWeightBox"),
      0,
      n.MAX_RELATIVE_STROKE_WEIGHT,
      .1,
      1,
      0);this._innerStrokeWeightRangeView=newn.NumberInputView(this.$(".innerStrokeWeightInput"),
      0,
      n.MAX_RELATIVE_STROKE_WEIGHT,
      .1,
      1,
      0);this.updateSliderValues();this._strokeWeightInputView.onchange(function(n){
        e._stroke.strokeWeight=n;e._strokeWeightRangeView.set(n);e._onchange(e._stroke)
      });this._strokeWeightRangeView.onchange(function(n){
        e._stroke.strokeWeight=n;e._strokeWeightInputView.set(n);e._onchange(e._stroke)
      });this._innerStrokeWeightInputView.onchange(function(n){
        e._stroke.innerStrokeWeight=n;e._innerStrokeWeightRangeView.set(n);e._onchange(e._stroke)
      });this._innerStrokeWeightRangeView.onchange(function(n){
        e._stroke.innerStrokeWeight=n;e._innerStrokeWeightInputView.set(n);e._onchange(e._stroke)
      });n.onClick(this.$(".deleteButton"),
      function(){
        e._stroke.strokeWeight=0;e._stroke.innerStrokeWeight=0;e._onchange(e._stroke);e.hide()
      })
    }return__extends(i,
    t),
    i.prototype.onselect=function(t){
      this._stroke.strokeInkId=t;this._stroke.strokeWeight==0&&(this._stroke.strokeWeight=n.DEFAULT_STROKE_WEIGHT,
      this.updateSliderValues());this._onchange(this._stroke)
    },
    i.prototype.updateSliderValues=function(){
      this._strokeWeightInputView.set(this._stroke.strokeWeight);this._strokeWeightRangeView.set(this._stroke.strokeWeight);this._innerStrokeWeightInputView.set(this._stroke.innerStrokeWeight);this._innerStrokeWeightRangeView.set(this._stroke.innerStrokeWeight)
    },
    i.prototype.select=function(n){
      this._stroke.strokeWeight>0&&this._selector.select(n)
    },
    i
  }(r);c=function(){
    functionr(n,
    t,
    i,
    r){
      this._elem=n;this._ctx=t;this._container=i;this._onShowDlg=r
    }returnr.prototype.show=function(){
      this._dlg&&this._dlg.show()
    },
    r.prototype.hide=function(){
      this._dlg&&this._dlg.hide()
    },
    r.prototype.onchange=function(n){
      this._onchange=n
    },
    r.prototype.set=function(n){
      this._shadow=n;this.render()
    },
    r.prototype.tryCreateDialog=function(){
      varn=this;this._dlg&&this._dlg.hide();this._dlg=newl(this._ctx,
      this._shadow,
      this._container,
      function(t){
        n.set(t);n._onchange&&(n._onchange(n._shadow),
        setTimeout(function(){
          n._ctx.updateDescription()
        },
        0))
      })
    },
    r.prototype.render=function(){
      varr=this,
      u,
      f,
      e;this._elem.classList.add("colorBox");u="none";f="none";this._shadow.shadowDistance>0&&(e=t(this._shadow.shadowInkId),
      u=e.rgb,
      f=e.name);i(this._elem,
      u,
      f);n.onClick(this._elem,
      function(){
        r.tryCreateDialog();r._onShowDlg&&r._onShowDlg();r._dlg.show();r._dlg.select(r._shadow.shadowInkId)
      })
    },
    r
  }();n.ShadowInkView=c;l=function(t){
    functioni(i,
    r,
    u,
    f){
      vare=this;t.call(this,
      "ShadowInkPickerDialog",
      i,
      u,
      function(n){
        e.onselect(n)
      });this._shadow=r;this._onchange=f;this._shadowDistanceInputView=newn.NumberInputView(this.$(".shadowDistanceBox"),
      0,
      n.MAX_RELATIVE_SHADOW_DISTANCE,
      .1,
      1,
      0);this._shadowDistanceRangeView=newn.NumberInputView(this.$(".shadowDistanceInput"),
      0,
      n.MAX_RELATIVE_SHADOW_DISTANCE,
      .1,
      1,
      0);this._shadowAngleInputView=newn.NumberInputView(this.$(".shadowAngleBox"),
      0,
      360,
      1,
      1,
      0);this._shadowAngleRangeView=newn.NumberInputView(this.$(".shadowAngleInput"),
      0,
      360,
      1,
      1,
      0);this.updateSliderValues();this._shadowDistanceInputView.onchange(function(n){
        e._shadow.shadowDistance=n;e._shadowDistanceRangeView.set(n);e._onchange(e._shadow)
      });this._shadowDistanceRangeView.onchange(function(n){
        e._shadow.shadowDistance=n;e._shadowDistanceInputView.set(n);e._onchange(e._shadow)
      });this._shadowAngleInputView.onchange(function(n){
        e._shadow.shadowAngle=n;e._shadowAngleRangeView.set(n);e._onchange(e._shadow)
      });this._shadowAngleRangeView.onchange(function(n){
        e._shadow.shadowAngle=n;e._shadowAngleInputView.set(n);e._onchange(e._shadow)
      });n.onClick(this.$(".deleteButton"),
      function(){
        e._shadow.shadowDistance=0;e._shadow.shadowAngle=n.DEFAULT_SHADOW_ANGLE;e._onchange(e._shadow);e.hide()
      })
    }return__extends(i,
    t),
    i.prototype.onselect=function(t){
      this._shadow.shadowInkId=t;this._shadow.shadowDistance==0&&(this._shadow.shadowDistance=n.DEFAULT_SHADOW_DISTANCE,
      this._shadow.shadowAngle=n.DEFAULT_SHADOW_ANGLE,
      this.updateSliderValues());this._onchange(this._shadow)
    },
    i.prototype.updateSliderValues=function(){
      this._shadowDistanceInputView.set(this._shadow.shadowDistance);this._shadowDistanceRangeView.set(this._shadow.shadowDistance);this._shadowAngleInputView.set(this._shadow.shadowAngle);this._shadowAngleRangeView.set(this._shadow.shadowAngle)
    },
    i.prototype.select=function(n){
      this._shadow.shadowDistance>0&&this._selector.select(n)
    },
    i
  }(r)
}(Uber||(Uber={
  
})),
function(n){
  functionv(n){
    return-(n&1)^n>>1
  }functionc(n,
  t,
  f,
  e,
  o,
  s,
  h){
    varp,
    v,
    y;s===void0&&(s="");h===void0&&(h=0);n.fillStyle=o;n.beginPath();for(varl=0,
    a=0,
    c=0;c<t.length;){
      p=t[
        c++
      ];switch(p){
        casei: n.closePath();l=t[
          c++
        ];a=t[
          c++
        ];n.moveTo(l*f,
        a*e);break;caser: v=l+t[
          c++
        ];y=a+t[
          c++
        ];n.lineTo(v*f,
        y*e);l=v;a=y;break;caseu: varw=l+t[
          c++
        ],
        b=a+t[
          c++
        ],
        v=w+t[
          c++
        ],
        y=b+t[
          c++
        ];n.quadraticCurveTo(w*f,
        b*e,
        v*f,
        y*e);l=v;a=y
      }
    }n.closePath();h>0&&(n.strokeStyle=s,
    n.lineWidth=h*2,
    n.lineJoin="round",
    n.stroke());n.fill()
  }functionl(n,
  t,
  i,
  r,
  u,
  f,
  e){
    returnn+":"+t+":"+i+":"+r+":"+u+":"+f+":"+e
  }functionb(n,
  i,
  r,
  u,
  o,
  s,
  h){
    vara=l(n,
    i,
    r,
    u,
    o,
    s,
    h),
    c;return(aine)?(c=e[
      a
    ],
    c==t)?c.img: (c==f&&(f=c.prev),
    c.prev&&(c.prev.next=c.next),
    c.next&&(c.next.prev=c.prev),
    c.prev=null,
    t.prev=c,
    c.next=t,
    t=c,
    c.img): null
  }functionk(n,
  i,
  r,
  u,
  o,
  h,
  c,
  a){
    varb=l(n,
    i,
    r,
    o,
    h,
    c,
    a),
    v=neww(u,
    b),
    y;returne[
      b
    ]=v,
    v.next=t,
    t?(t.prev=v,
    t=v): t=f=v,
    ++s,
    s>p&&(deletee[
      f.key
    ],
    y=f.prev,
    y.next=null,
    f=y,
    --s),
    u
  }varo=-1,
  i=0,
  r=1,
  u=2,
  h=function(){
    functionn(n){
      this._buf=n;this._idx=0
    }returnn.prototype.read=function(){
      returnv(this._buf.charCodeAt(this._idx++))
    },
    n.prototype.atEnd=function(){
      returnthis._idx>=this._buf.length
    },
    n
  }(),
  y=function(){
    functionn(n){
      vart,
      e,
      f,
      s,
      c;for(this.layers=[
        
      ],
      t=newh(n),
      this.width=t.read(),
      this.height=t.read();!t.atEnd();){
        if(e=t.read(),
        e==o)break;for(f={
          idx: e,
          data: [
            
          ]
        },
        s=!1;!s;){
          c=t.read();f.data.push(c);switch(c){
            caseo: s=!0;break;casei: f.data.push(t.read());f.data.push(t.read());break;caser: f.data.push(t.read());f.data.push(t.read());break;caseu: f.data.push(t.read());f.data.push(t.read());f.data.push(t.read());f.data.push(t.read());break;default: throw"Unexpected command";
          }
        }this.layers.push(f)
      }
    }returnn.prototype.toImage=function(n,
    t,
    i){
      varr,
      u;if(i.length!=this.layers.length)throw"Specify precisely one color per layer.";r=document.createElement("canvas");r.width=n;r.height=t;varf=r.getContext("2d"),
      e=n/this.width,
      o=t/this.height;for(u=0;u<this.layers.length;++u)c(f,
      this.layers[
        u
      ].data,
      e,
      o,
      "#"+i[
        u
      ]);returnr
    },
    n
  }(),
  a;n.ZiggyImage=y;varp=1024,
  w=function(){
    functionn(n,
    t){
      this.img=n;this.key=t
    }returnn
  }(),
  t,
  f,
  s=0,
  e={
    
  };a=function(){
    functionn(n,
    t){
      varf,
      e,
      y,
      v,
      l,
      a;for(this._name=n,
      this._glyphWidths=[
        
      ],
      this._glyphData=[
        
      ],
      this._leftBound=Number.MAX_VALUE,
      this._topBound=Number.MAX_VALUE,
      this._rightBound=Number.MIN_VALUE,
      this._bottomBound=Number.MIN_VALUE,
      f=newh(t),
      this._ascent=f.read(),
      this._descent=f.read(),
      this._lineHeight=f.read(),
      this._emHeight=f.read();!f.atEnd();){
        if(e=f.read(),
        e==-1)break;this._glyphWidths.push(e)
      }vare=0,
      c=0,
      s=[
        
      ];for(y=0;y<this._glyphWidths.length;++y){
        for(;;){
          if(v=f.read(),
          v==o)break;s.push(v);switch(v){
            casei: e=f.read();c=f.read();this.addBoundPoint(e,
            c);s.push(e);s.push(c);break;caser: l=f.read();a=f.read();e+=l;c+=l;this.addBoundPoint(e,
            c);s.push(l);s.push(a);break;caseu: varp=f.read(),
            w=f.read(),
            l=f.read(),
            a=f.read();e+=p;c+=w;e+=l;c+=a;this.addBoundPoint(e,
            c);s.push(p);s.push(w);s.push(l);s.push(a)
          }
        }this._glyphData.push(s);s=[
          
        ]
      }
    }returnn.prototype.toImage=function(n,
    t,
    i,
    r,
    u,
    f,
    e,
    o){
      vars,
      l,
      y;r===void0&&(r=1);u===void0&&(u="");f===void0&&(f=0);e===void0&&(e=0);o===void0&&(o=0);s=b(this._name,
      n,
      t,
      i,
      r,
      u,
      f);s;vara=this._leftBound-f,
      d=(this._rightBound+f)*r,
      v=this._topBound-f,
      g=this._bottomBound+f,
      p=(d-a)/this._emHeight,
      w=(g-v)/this._emHeight,
      h=document.createElement("canvas");returnh.width=i*p,
      h.height=i*w,
      l=h.getContext("2d"),
      y=i/this._emHeight,
      l.scale(y,
      y),
      l.translate(-a,
      -v),
      n-1inthis._glyphData&&c(l,
      this._glyphData[
        n-1
      ],
      r,
      1,
      "#"+t,
      "#"+u,
      f),
      s={
        image: h,
        width: this._emHeight*p,
        height: this._emHeight*w,
        offsetX: -a,
        offsetY: -v
      },
      newKinetic.Image(k(this._name,
      n,
      t,
      s,
      i,
      r,
      u,
      f))
    },
    n.prototype.transformPointsNew=function(n,
    t,
    f){
      for(vars=0,
      h=0,
      e=0,
      a=0,
      v=788,
      y=.2,
      o=n.slice(),
      p,
      c,
      l;e<o.length;){
        p=o[
          e++
        ];switch(p){
          casei: s=o[
            e++
          ];h=o[
            e++
          ];break;caser: c=s+o[
            e
          ];o[
            e++
          ]=c;l=h+o[
            e
          ];o[
            e++
          ]=l;s=c;h=l;break;caseu: c=s+o[
            e
          ];o[
            e++
          ]=c;l=h+o[
            e
          ];o[
            e++
          ]=l;s=c;h=l;c=s+o[
            e
          ];o[
            e++
          ]=c;l=h+o[
            e
          ];o[
            e++
          ]=l;s=c;h=l
        }
      }for(e=0,
      s=0,
      h=0;e<o.length;){
        p=o[
          e++
        ];switch(p){
          casei: s=o[
            e++
          ];h=o[
            e
          ];a=Math.sin((y+(1-2*y)*(s+t)/f)*Math.PI);o[
            e++
          ]=v+(h-v)/a;break;caser: s=o[
            e++
          ];h=o[
            e
          ];a=Math.sin((y+(1-2*y)*(s+t)/f)*Math.PI);o[
            e++
          ]=v+(h-v)/a;break;caseu: s=o[
            e++
          ];h=o[
            e
          ];a=Math.sin((y+(1-2*y)*(s+t)/f)*Math.PI);o[
            e++
          ]=v+(h-v)/a;s=o[
            e++
          ];h=o[
            e
          ];a=Math.sin((y+(1-2*y)*(s+t)/f)*Math.PI);o[
            e++
          ]=v+(h-v)/a
        }
      }for(e=0,
      s=0,
      h=0;e<o.length;){
        p=o[
          e++
        ];switch(p){
          casei: s=o[
            e++
          ];h=o[
            e++
          ];break;caser: c=o[
            e
          ]-s;s=o[
            e
          ];o[
            e++
          ]=c;l=o[
            e
          ]-h;h=o[
            e
          ];o[
            e++
          ]=l;break;caseu: c=o[
            e
          ]-s;s=o[
            e
          ];o[
            e++
          ]=c;l=o[
            e
          ]-h;h=o[
            e
          ];o[
            e++
          ]=l;c=o[
            e
          ]-s;s=o[
            e
          ];o[
            e++
          ]=c;l=o[
            e
          ]-h;h=o[
            e
          ];o[
            e++
          ]=l
        }
      }returno
    },
    n.prototype.transformPoints=function(n,
    t,
    f){
      for(varp=0,
      w=0,
      l=0,
      o=0,
      s=0,
      h=788,
      c=.2,
      e=n.slice(),
      nt,
      k,
      d,
      g,
      tt,
      a,
      v,
      y,
      b;o<e.length;){
        nt=e[
          o++
        ];switch(nt){
          casei: p=e[
            o++
          ];w=e[
            o++
          ];s=Math.sin((c+(1-2*c)*(p+t)/f)*Math.PI);e[
            o-1
          ]=h+(w-h)/s;l=e[
            o-1
          ];break;caser: a=p+e[
            o++
          ];v=w+e[
            o++
          ];s=Math.sin((c+(1-2*c)*(a+t)/f)*Math.PI);y=h+(v-h)/s;b=y-l;l=y;e[
            o-1
          ]=b;p=a;w=v;break;caseu: k=p+e[
            o++
          ];d=w+e[
            o++
          ];s=Math.sin((c+(1-2*c)*(k+t)/f)*Math.PI);g=h+(d-h)/s;tt=g-l;e[
            o-1
          ]=tt;l=g;a=k+e[
            o++
          ];v=d+e[
            o++
          ];s=Math.sin((c+(1-2*c)*(a+t)/f)*Math.PI);y=h+(v-h)/s;b=y-l;l=y;e[
            o-1
          ]=b;p=a;w=v
        }
      }returne
    },
    n.prototype.emHeight=function(){
      returnthis._emHeight
    },
    n.prototype.rawHeight=function(){
      returnthis._bottomBound-this._topBound
    },
    n.prototype.glyphWidth=function(n,
    t,
    i){
      returnthis._glyphWidths[
        n
      ]*t*i/this._emHeight
    },
    n.prototype.lineHeight=function(n){
      returnthis._lineHeight*n/this._emHeight
    },
    n.prototype.ascent=function(n){
      returnthis._ascent*n/this._emHeight
    },
    n.prototype.descent=function(n){
      returnthis._descent*n/this._emHeight
    },
    n.prototype.sizeForWidth=function(n,
    t,
    i,
    r){
      varu=this.measureTextRaw(n,
      t,
      i);returnr*this._emHeight/u
    },
    n.prototype.measureText=function(n,
    t,
    i,
    r){
      varu=this.measureTextRaw(n,
      t,
      i);returnu*r/this._emHeight
    },
    n.prototype.addBoundPoint=function(n,
    t){
      n<this._leftBound&&(this._leftBound=n);n>this._rightBound&&(this._rightBound=n);t<this._topBound&&(this._topBound=t);t>this._bottomBound&&(this._bottomBound=t)
    },
    n.prototype.measureTextRaw=function(n,
    t,
    i){
      for(varu=0,
      r=0;r<n.length;++r)u+=this._glyphWidths[
        n.charCodeAt(r)
      ],
      r!=n.length-1&&(u+=t*this._emHeight/1e3);returnu*i
    },
    n
  }();n.ZiggyFont=a
}(Uber||(Uber={
  
})),
function(n){
  functioni(n){
    vart=this;n.beginPath();n.rect(0,
    0,
    t.getWidth(),
    t.getHeight());n.closePath();n.fillStrokeShape(t)
  }vart=function(t){
    functioni(n){
      t.call(this);this._view=n;this._x=0;this._y=0;this._w=1;this._h=1;this._r=0;this._topOffset=0;this._snap=!0;this._constrain=!0
    }return__extends(i,
    t),
    i.prototype.init=function(t){
      vari=this;this._node=t;this._node.on(n.CLICKY_EVENTS,
      function(n){
        i._view._onEntityClicked(i,
        n)
      });this._node.on(n.END_CLICKY_EVENTS,
      function(n){
        if(n.button===2){
          n.preventDefault();i._view.onEntityRightClicked(i,
          n)
        }
      })
    },
    i.prototype.load=function(n){
      this.set_rotation(n.rotation)
    },
    i.prototype.save=function(){
      return{
        depth: this.node().getZIndex(),
        rotation: this._r
      }
    },
    i.prototype.node=function(){
      returnthis._node
    },
    i.prototype.x=function(){
      returnthis._x
    },
    i.prototype.y=function(){
      returnthis._y
    },
    i.prototype.width=function(){
      returnthis._w
    },
    i.prototype.height=function(){
      returnthis._h
    },
    i.prototype.rotation=function(){
      returnthis._r
    },
    i.prototype.centeredRotation=function(){
      returnthis._r
    },
    i.prototype.topOffset=function(){
      returnthis._topOffset
    },
    i.prototype.constrain=function(){
      returnthis._constrain
    },
    i.prototype.snap=function(){
      returnthis._snap
    },
    i.prototype.set_x=function(n){
      this.fire("x",
      n)&&(this._x=n,
      this.node().setX(this.x()),
      this._view._draw())
    },
    i.prototype.set_y=function(n){
      this.fire("y",
      n)&&(this._y=n,
      this.node().setY(this.y()),
      this._view._draw())
    },
    i.prototype.set_width=function(n){
      vart=this.constrainSize(n,
      this._h,
      !0);this.fire("width",
      t[
        0
      ])&&(this._w=t[
        0
      ],
      this.fire("height",
      t[
        1
      ]),
      this._h=t[
        1
      ],
      this.node().setSize(this._w,
      this._h),
      this._view._draw())
    },
    i.prototype.set_height=function(n){
      vart=this.constrainSize(this._w,
      n,
      !1);this.fire("height",
      t[
        1
      ])&&(this._h=t[
        1
      ],
      this.fire("width",
      t[
        0
      ]),
      this._w=t[
        0
      ],
      this.node().setSize(this._w,
      this._h),
      this._view._draw())
    },
    i.prototype.set_rotation=function(t){
      this.fire("rotation",
      t)&&(this.fire("centeredRotation",
      t),
      this._r=t,
      this.node().setRotation(n.degToRad(t)),
      this._view._draw())
    },
    i.prototype.set_centeredRotation=function(t){
      vars;if(this.fire("rotation",
      t)){
        this.fire("centeredRotation",
        t);vare=n.degToRad(this._r),
        h=n.degToRad(t),
        c=this.width(),
        l=this.height(),
        i=newKinetic.Transform;i.translate(this.x(),
        this.y());i.rotate(e);i.translate(c/2,
        l/2);varr=i.getTranslation(),
        u=[
          this.x()-r.x,
          this.y()-r.y
        ],
        f=newKinetic.Transform,
        o=newKinetic.Transform;f.rotate(e);f.invert();o.rotate(h);s=n.multMatVec(f,
        u);u=n.multMatVec(o,
        s);this.set_rotation(t);this.set_x(r.x+u[
          0
        ]);this.set_y(r.y+u[
          1
        ])
      }
    },
    i.prototype.set_snap=function(n){
      this.fire("snap",
      n)&&(this._snap=n)
    },
    i.prototype.set_constrain=function(n){
      this.fire("constrain",
      n)&&(this._constrain=n)
    },
    i.prototype.set_topOffset=function(n){
      this.fire("topOffset",
      n)&&(this._topOffset=n)
    },
    i.prototype.alignLeft=function(){
      varn=this.bbox();this.set_x(this.x()-n.left)
    },
    i.prototype.alignCenter=function(){
      varn=this._view.curProductLocation().printLocations[
        0
      ].width,
      t=this.bbox();this.set_x(this.x()+(n/2-t.horzCenter))
    },
    i.prototype.alignRight=function(){
      varn=this._view.curProductLocation().printLocations[
        0
      ].width,
      t=this.bbox();this.set_x(this.x()+(n-t.right))
    },
    i.prototype.alignIdealPosition=function(){
      vart=this._view.curProductLocation().printLocations[
        0
      ].width,
      i=this._view.curProductLocation().printLocations[
        0
      ].height,
      n=this.bbox(),
      r=Math.max(Math.min(i-n.bottom,
      2),
      0);this.set_x(this.x()+(t/2-n.horzCenter));this.set_y(r)
    },
    i.prototype.bringToFront=function(){
      this.node().moveToTop();this._view._draw()
    },
    i.prototype.bringForward=function(){
      this.node().moveUp();this._view._draw()
    },
    i.prototype.sendBackward=function(){
      this.node().moveDown();this._view._draw()
    },
    i.prototype.sendToBack=function(){
      this.node().moveToBottom();this._view._draw()
    },
    i.prototype.constrainSize=function(n,
    t,
    i){
      varr=this.sizeBounds(),
      u;returnn<r.minWidth&&(n=r.minWidth),
      t<r.minHeight&&(t=r.minHeight),
      n>r.maxWidth&&(n=r.maxWidth),
      t>r.maxHeight&&(t=r.maxHeight),
      this._constrain&&(u=this.width()/this.height(),
      n/t!=u&&(i?t=n/u: n=t*u)),
      [
        n,
        t
      ]
    },
    i.prototype.sizeBounds=function(){
      vart=this._view.curProductLocation().printLocations[
        0
      ],
      i;returnthis._constrain?(i=this.width()/this.height(),
      i>1?{
        minWidth: n.MIN_SIZE*i,
        minHeight: n.MIN_SIZE,
        maxWidth: t.width,
        maxHeight: t.width/i
      }: {
        minWidth: n.MIN_SIZE,
        minHeight: n.MIN_SIZE/i,
        maxWidth: t.height*i,
        maxHeight: t.height
      }): {
        minWidth: n.MIN_SIZE,
        minHeight: n.MIN_SIZE,
        maxWidth: t.width,
        maxHeight: t.height
      }
    },
    i.prototype.inks=function(){
      return[
        
      ]
    },
    i.prototype.setSizeRaw=function(n,
    t){
      vari=this.constrain();this.set_constrain(!1);this.set_width(n);this.set_height(t);this.set_constrain(i)
    },
    i.prototype.bbox=function(){
      returnthis.pos_bbox(this.x(),
      this.y())
    },
    i.prototype.pos_bbox=function(t,
    i){
      for(varl=this.width(),
      a=this.height()+this.topOffset(),
      v=[
        {
          x: 0,
          y: 0
        },
        {
          x: l,
          y: 0
        },
        {
          x: l,
          y: a
        },
        {
          x: 0,
          y: a
        }
      ],
      y=n.degToRad(this.rotation()),
      p=Math.sin(y),
      w=Math.cos(y),
      r=0,
      u=0,
      f=0,
      e=0,
      o=0;o<v.length;++o){
        vars=v[
          o
        ],
        h=w*s.x-p*s.y,
        c=p*s.x+w*s.y;h<r&&(r=h);c<f&&(f=c);h>u&&(u=h);c>e&&(e=c)
      }return{
        left: t+r,
        right: t+u,
        horzCenter: t+(r+u)/2,
        top: i+f,
        bottom: i+e,
        vertCenter: i+(f+e)/2
      }
    },
    i.prototype.guideRect=function(n){
      returnthis._guideRect||(this._guideRect=newKinetic.Rect({
        x: this.x(),
        y: this.y(),
        width: this.width(),
        height: this.height(),
        rotation: this.node().getRotation(),
        stroke: "#009ddc"
      })),
      this._guideRect.setStrokeWidth(n),
      this._guideRect
    },
    i.prototype.removeGuideRect=function(){
      this._guideRect&&(this._guideRect.remove(),
      this._guideRect=null)
    },
    i.prototype.fire=function(n,
    i){
      varr=t.prototype.fire.call(this,
      n,
      i);returnr&&this._view._notifyChange(),
      r
    },
    i.prototype.forceFire=function(n,
    i){
      t.prototype.forceFire.call(this,
      n,
      i);this._view._notifyChange()
    },
    i.prototype.onDeselected=function(){
      vart=this._view.curProductLocation().printLocations[
        0
      ],
      n=this.bbox();(n.left>t.width||n.top>t.height||n.right<0||n.bottom<0)&&this._view.removeEntity(this)
    },
    i.prototype.scaleChanged=function(){
      
    },
    i.prototype.productColorChanged=function(){
      
    },
    i
  }(n.Observable);n.Entity=t;n.rectHitFunc=i
}(Uber||(Uber={
  
})),
function(n){
  n.MIN_TEXT_SIZE=.3;n.MAX_TEXT_SIZE=8.24;n.MAX_CHARACTERS=210;n.MIN_TEXT_XSCALE=.3;n.MAX_TEXT_XSCALE=3;n.MAX_RELATIVE_STROKE_WEIGHT=8.5;n.DEFAULT_STROKE_WEIGHT=4;n.MAX_RELATIVE_SHADOW_DISTANCE=15;n.DEFAULT_SHADOW_DISTANCE=6;n.DEFAULT_SHADOW_ANGLE=135;vart=function(t){
    functioni(n){
      t.call(this,
      n);this._text="";this._fontName="";this._size=1;this._tracking=0;this._arc=0;this._justification="center";this._lineHeight=1.22;this._color=1;this._strokeInkId=1;this._relativeStrokeWeight=0;this._innerStrokeInkId=0;this._relativeInnerStrokeWeight=0;this._shadowInkId=1;this._relativeShadowDistance=0;this._shadowAngle=135;this._horizontalScale=1;this._aspect=1;this.init(this._g=newKinetic.Group);this.set_constrain(!1)
    }return__extends(i,
    t),
    i.prototype.createNew=function(n,
    t){
      vari=this;this._fontName=t;this.set_text(n);this.set_color(this._view._ctx.defaultInk().inkId);this._view._ctx.loadFont(this._fontName,
      function(n){
        i._font=n;i.updateText();i.alignIdealPosition()
      })
    },
    i.prototype.load=function(n){
      vari=this;t.prototype.load.call(this,
      n);this._view._ctx.loadFont(n.fontName,
      function(r){
        i._font=r;i._text=n.string;i._fontName=n.fontName;i._size=n.fontHeight;i._tracking=n.fontTracking;i._arc=n.fontArc;i._justification=n.justify;i._lineHeight=n.lineHeight;i._color=n.textInks[
          0
        ].inkId;i._relativeStrokeWeight=n.strokeWeight*100/n.fontHeight;i._strokeInkId=n.strokeInkId;i._relativeInnerStrokeWeight=n.innerStrokeWeight*100/n.fontHeight;i._innerStrokeInkId=n.innerStrokeInkId;i._shadowInkId=n.shadowInkId;i._relativeShadowDistance=n.shadowDistance*100/n.fontHeight;i._shadowAngle=n.shadowAngle;i._horizontalScale=n.horizontalScale;i.updateLines();t.prototype.set_width.call(i,
        i._maxWidth);varu=i.focalPointOffset();i.set_x(n.focalPointXInch-u[
          0
        ]);i.set_y(n.focalPointYInch-u[
          1
        ]);i.updateText()
      })
    },
    i.prototype.save=function(){
      varn=this.focalPointOffset();return{
        focalPointXInch: this.x()+n[
          0
        ],
        focalPointYInch: this.y()+n[
          1
        ],
        fontName: this.font(),
        fontArc: this.arc(),
        fontHeight: this.size(),
        fontTracking: this.tracking(),
        rotation: this.rotation(),
        string: this.text(),
        justify: this._justification,
        textInks: [
          {
            colorIndex: 1,
            inkId: this._color
          }
        ],
        depth: this.node().getZIndex(),
        lineHeight: this.lineHeight(),
        strokeWeight: this.strokeWeight(),
        strokeInkId: this.strokeInkId(),
        innerStrokeWeight: this.innerStrokeWeight(),
        innerStrokeInkId: this.innerStrokeInkId(),
        shadowDistance: this.shadowDistance(),
        shadowAngle: this.shadowAngle(),
        shadowInkId: this.shadowInkId(),
        horizontalScale: this.horizontalScale()
      }
    },
    i.prototype.focalPointOffset=function(){
      vart=n.degToRad(this.rotation());return[
        Math.cos(t)*this.width()/2,
        Math.sin(t)*this.width()/2
      ]
    },
    i.prototype.text=function(){
      returnthis._text
    },
    i.prototype.font=function(){
      returnthis._fontName
    },
    i.prototype.size=function(){
      returnthis._size
    },
    i.prototype.tracking=function(){
      returnthis._tracking
    },
    i.prototype.arc=function(){
      returnthis._arc
    },
    i.prototype.justification=function(){
      returnthis._justification
    },
    i.prototype.lineHeight=function(){
      returnthis._lineHeight
    },
    i.prototype.color=function(){
      returnthis._color
    },
    i.prototype.strokeWeight=function(){
      returnthis._relativeStrokeWeight/100*this._size
    },
    i.prototype.strokeInkId=function(){
      returnthis._strokeInkId
    },
    i.prototype.innerStrokeWeight=function(){
      returnthis._relativeInnerStrokeWeight/100*this._size
    },
    i.prototype.innerStrokeInkId=function(){
      returnthis._innerStrokeInkId
    },
    i.prototype.shadowInkId=function(){
      returnthis._shadowInkId
    },
    i.prototype.shadowDistance=function(){
      returnthis._relativeShadowDistance/100*this._size
    },
    i.prototype.shadowAngle=function(){
      returnthis._shadowAngle
    },
    i.prototype.horizontalScale=function(){
      returnthis._horizontalScale
    },
    i.prototype.stroke=function(){
      return{
        strokeInkId: this._strokeInkId,
        strokeWeight: this._relativeStrokeWeight,
        innerStrokeInkId: this._innerStrokeInkId,
        innerStrokeWeight: this._relativeInnerStrokeWeight
      }
    },
    i.prototype.shadow=function(){
      return{
        shadowInkId: this._shadowInkId,
        shadowDistance: this._relativeShadowDistance,
        shadowAngle: this._shadowAngle
      }
    },
    i.prototype.inks=function(){
      varn=[
        {
          colorIndex: 1,
          inkId: this._color
        }
      ];returnthis.hasStroke()&&n.push({
        colorIndex: 2,
        inkId: this._strokeInkId
      }),
      this.hasShadow()&&n.push({
        colorIndex: 3,
        inkId: this._shadowInkId
      }),
      n
    },
    i.prototype.set_text=function(t){
      (t&&t.length>n.MAX_CHARACTERS&&(t=t.substring(0,
      n.MAX_CHARACTERS),
      this.forceFire("text",
      t)),
      this.fire("text",
      t))&&(this._text=t,
      this.updateText())
    },
    i.prototype.set_font=function(n){
      vart=this;this.fire("font",
      n)&&(this._fontName=n,
      this._view._ctx.loadFont(this._fontName,
      function(n){
        t._font=n;t.updateText()
      }))
    },
    i.prototype.set_size=function(n){
      this.fire("size",
      n)&&(this._size=n,
      this.updateText())
    },
    i.prototype.set_tracking=function(n){
      this.fire("tracking",
      n)&&(this._tracking=n,
      this.updateText())
    },
    i.prototype.set_arc=function(n){
      this.fire("arc",
      n)&&(this._arc=n,
      this.updateText())
    },
    i.prototype.set_justification=function(n){
      this.fire("justification",
      n)&&(this._justification=n,
      this.updateText())
    },
    i.prototype.set_lineHeight=function(n){
      this.fire("lineHeight",
      n)&&(this._lineHeight=n,
      this.updateText())
    },
    i.prototype.set_color=function(n){
      this.fire("color",
      n)&&(this._color=n,
      this.updateText())
    },
    i.prototype.set_stroke=function(n){
      this.fire("stroke",
      n)&&(this._strokeInkId=n.strokeInkId,
      this._relativeStrokeWeight=n.strokeWeight,
      this._innerStrokeInkId=n.innerStrokeInkId,
      this._relativeInnerStrokeWeight=n.innerStrokeWeight,
      this.updateText())
    },
    i.prototype.set_shadow=function(n){
      this.fire("shadow",
      n)&&(this._shadowInkId=n.shadowInkId,
      this._relativeShadowDistance=n.shadowDistance,
      this._shadowAngle=n.shadowAngle,
      this.updateText())
    },
    i.prototype.set_horizontalScale=function(n){
      this.fire("horizontalScale",
      n)&&(this._horizontalScale=n,
      this.updateText())
    },
    i.prototype.set_width=function(n){
      if(n>0&&this._font){
        vart=this._font.sizeForWidth(this._lines[
          this._longestLine
        ],
        this._tracking,
        this._horizontalScale,
        n);this.fire("size",
        t);this._size=t;this.updateText()
      }
    },
    i.prototype.set_height=function(){
      
    },
    i.prototype.constrainSize=function(t,
    i,
    r){
      if(r){
        varu=this._font.sizeForWidth(this._lines[
          this._longestLine
        ],
        this._tracking,
        this._horizontalScale,
        t);u<n.MIN_TEXT_SIZE&&(u=n.MIN_TEXT_SIZE);u>n.MAX_TEXT_SIZE&&(u=n.MAX_TEXT_SIZE);t=this.widthAtSize(u);i=t/this._aspect
      }return[
        t,
        i
      ]
    },
    i.prototype.onDeselected=function(){
      if(t.prototype.onDeselected.call(this),
      this.width()==0){
        this._view.removeEntity(this);return
      }n.trimAllWhitespace(this.text()).length==0&&this._view.removeEntity(this)
    },
    i.prototype.scaleChanged=function(){
      this.updateText()
    },
    i.prototype.productColorChanged=function(){
      this.updateText()
    },
    i.prototype.hasStroke=function(){
      returnthis._relativeStrokeWeight>0
    },
    i.prototype.hasInnerStroke=function(){
      returnthis._relativeInnerStrokeWeight>0
    },
    i.prototype.hasShadow=function(){
      returnthis._relativeShadowDistance>0
    },
    i.prototype.widthAtSize=function(n){
      for(vari=0,
      r,
      t=0;t<this._lines.length;++t)r=this._font.measureText(this._lines[
        t
      ],
      this._tracking,
      this._horizontalScale,
      n),
      r>i&&(i=r);returni
    },
    i.prototype.updateLines=function(){
      this._lines=this._text.split("\n");this._widths=[
        
      ];this._maxWidth=0;for(varn=0;n<this._lines.length;++n)this._widths[
        n
      ]=this._font.measureText(this._lines[
        n
      ],
      this._tracking,
      this._horizontalScale,
      this._size),
      this._widths[
        n
      ]>this._maxWidth&&(this._maxWidth=this._widths[
        n
      ],
      this._longestLine=n)
    },
    i.prototype.updateText=function(){
      varg,
      nt,
      tt,
      it,
      a,
      u,
      f,
      ft,
      e,
      d,
      l,
      y,
      r,
      ct,
      lt;if(this._font){
        this.updateLines();this._g.destroyChildren();g=newKinetic.Group;this._g.add(g);nt=newKinetic.Group;this._g.add(nt);tt=newKinetic.Group;this._g.add(tt);it=newKinetic.Group;this._g.add(it);varat=this._font.ascent(this._size),
        vt=this._font.descent(this._size),
        p=this.width()/2,
        yt=this._tracking*this._size*this._horizontalScale/1e3,
        w=this._size*this.lineHeight(),
        et=this._shadowAngle*(n.TAU/2)/180,
        ot=this._relativeShadowDistance/100*this._size,
        pt=-ot*Math.cos(et),
        wt=ot*Math.sin(et),
        o=0,
        st=0,
        ht=0;switch(this._justification){
          case"left": st=-this._maxWidth/2;break;case"right": ht=this._maxWidth/2
        }a=this.arc();a>0?(u=this._widths[
          this._lines.length-1
        ],
        o=u*180/a/(n.TAU/2)+w*(this._lines.length-1)): a<0&&(u=this._widths[
          0
        ],
        u==0&&(u=1),
        o=u*180/a/(n.TAU/2));vars=0,
        h=0,
        c=0,
        rt=0,
        i=0,
        v=0,
        b=0,
        k=Number.MAX_VALUE,
        ut=Number.MIN_VALUE;for(f=0;f<this._lines.length;f++){
          ft=this._lines[
            f
          ];e=this._widths[
            f
          ];switch(this._justification){
            case"left": c=st;break;case"right": c=ht-e;break;default: c=-e/2
          }for(d=0;d<ft.length;++d)l=ft.charCodeAt(d),
          y=this._font.glyphWidth(l,
          this._size,
          this._horizontalScale),
          this._arc==0?(s=c,
          h=f*w): (i=(c+y/2)/o,
          rt=o+(at+vt)/2,
          s=rt*Math.sin(i)-y/2*Math.cos(i),
          h=w*f+(rt*(1-Math.cos(i))-y/2*Math.sin(i))),
          r=this.addGlyph(it,
          p+s,
          h,
          i,
          l,
          this._color,
          e),
          this.hasStroke()&&(this.hasInnerStroke()&&this.addGlyph(tt,
          p+s,
          h,
          i,
          l,
          this._innerStrokeInkId,
          e,
          this._innerStrokeInkId,
          this._relativeInnerStrokeWeight/100*this._font.emHeight()),
          this.addGlyph(nt,
          p+s,
          h,
          i,
          l,
          this._strokeInkId,
          e,
          this._strokeInkId,
          (this._relativeStrokeWeight+this._relativeInnerStrokeWeight)/100*this._font.emHeight())),
          this.hasShadow()&&(ct=this.hasStroke()?(this._relativeStrokeWeight+this._relativeInnerStrokeWeight)/100*this._font.emHeight(): 0,
          this.addGlyph(g,
          p+s+pt,
          h+wt,
          i,
          l,
          this._shadowInkId,
          e,
          this._shadowInkId,
          ct)),
          r[
            0
          ]<k&&(k=r[
            0
          ]),
          r[
            1
          ]>ut&&(ut=r[
            1
          ]),
          r[
            2
          ]<v&&(v=r[
            2
          ]),
          r[
            3
          ]>b&&(b=r[
            3
          ]),
          c+=y+yt;o=o-w
        }t.prototype.set_width.call(this,
        this._maxWidth);t.prototype.set_height.call(this,
        b);this.set_topOffset(v);this._aspect=this.width()/this.height();lt=newKinetic.Rect({
          x: k,
          y: v,
          width: ut-k,
          height: b-v,
          fill: "white",
          opacity: 0
        });this._g.add(lt);this._view._draw()
      }
    },
    i.prototype.addGlyph=function(t,
    i,
    r,
    u,
    f,
    e,
    o,
    s,
    h){
      s===void0&&(s=0);h===void0&&(h=0);varg=this._view.pixelScale(),
      nt=n.nearestPowerOf2(this.size()*g),
      c=this._font.toImage(f,
      n.standardInkRgb(this._view._ctx,
      e),
      nt,
      this._horizontalScale,
      n.standardInkRgb(this._view._ctx,
      s),
      h,
      i/this.size(),
      o/this.size()),
      tt=this._font.emHeight(),
      v=this._size/tt;c.setX(i);c.setY(r);c.setRotation(u);c.setScale(v,
      v);c.setListening(!1);t.add(c);vary=this._font.glyphWidth(f,
      this._size,
      this._horizontalScale),
      p=this._font.ascent(this._size)+this._font.descent(this._size),
      w=Math.sin(u),
      b=Math.cos(u),
      k=y*w,
      d=p*b,
      l=y*b,
      a=-p*w;return[
        Math.min(i,
        i+l,
        i+l+a,
        i+a),
        Math.max(i,
        i+l,
        i+l+a,
        i+a),
        Math.min(r,
        r+k,
        r+d),
        r+Math.max(k,
        d)
      ]
    },
    i
  }(n.Entity);n.TextEntity=t
}(Uber||(Uber={
  
})),
function(n){
  vari=function(n){
    functiont(t){
      n.call(this,
      t)
    }return__extends(t,
    n),
    t.prototype.initFromUpload=function(n,
    t,
    i){
      varu=this,
      r;for(this._fileName=n,
      this._filePath=t,
      this._inks=[
        
      ],
      r=0;r<i.length;++r)this._inks[
        r
      ]={
        inkId: i[
          r
        ],
        colorIndex: r+1
      };this.finishInit(function(n,
      t){
        u.setDefaultSize(n,
        t);u.alignIdealPosition()
      })
    },
    t.prototype.initFromMyImage=function(n){
      vari=this,
      t;for(this._fileName=n.fileName,
      this._filePath=n.filePath,
      this._inks=[
        
      ],
      t=0;t<n.myImageInks.length;++t)this._inks[
        t
      ]={
        inkId: n.myImageInks[
          t
        ].inkId,
        colorIndex: t+1
      };this.finishInit(function(n,
      t){
        i.setDefaultSize(n,
        t);i.alignIdealPosition()
      })
    },
    t.prototype.load=function(t){
      this._fileName=t.fileName;this._filePath=t.workingFilePath;this.set_inks(t.imageInks);vari=this.createImageEl();this.set_x(t.xCoordInch);this.set_y(t.yCoordInch);this.setSizeRaw(t.width,
      t.height);i.src=this._filePath+"/"+this._fileName+".temp.png";n.prototype.load.call(this,
      t)
    },
    t.prototype.save=function(){
      return{
        imageType: "upload",
        fileName: this._fileName,
        workingFilePath: this._filePath,
        xCoordInch: this.x(),
        yCoordInch: this.y(),
        width: this.width(),
        height: this.height(),
        rotation: this.rotation(),
        depth: this.node().getZIndex(),
        imageInks: this._inks
      }
    },
    t.prototype.inks=function(){
      returnthis._inks
    },
    t.prototype.set_inks=function(n){
      this._inks=n
    },
    t.prototype.set_filePath=function(n){
      this._filePath=n
    },
    t.prototype.createImageEl=function(n){
      vari=this,
      t;returnn===void0&&(n=null),
      t=document.createElement("img"),
      t.onload=function(){
        i._view._draw();n&&n(t.width,
        t.height)
      },
      this.init(this._img=newKinetic.Image({
        image: t
      })),
      t
    },
    t.prototype.finishInit=function(n){
      n===void0&&(n=null);vart=this.createImageEl(n);t.src=this._filePath+"/"+this._fileName+".temp.png"
    },
    t.prototype.setDefaultSize=function(n,
    t){
      varr=n/t,
      i=this._view.curProductLocation().printLocations[
        0
      ],
      u=Math.min(Math.max(i.defaultArtWidth,
      3),
      i.width),
      f=Math.min(Math.max(i.defaultArtHeight,
      3),
      i.height);r>1&&u/r<i.height?this.setSizeRaw(u,
      u/r): this.setSizeRaw(f*r,
      f)
    },
    t
  }(n.Entity),
  t;n.ImageEntity=i;t=function(t){
    functioni(n){
      t.call(this,
      n);this._canvasWidth=-1;this._canvasHeight=-1;this._minResizeWidthThreshold=Number.MAX_VALUE;this._minResizeHeightThreshold=Number.MAX_VALUE;this.init(this._g=newKinetic.Group)
    }return__extends(i,
    t),
    i.prototype.createFromClipart=function(t){
      vari=this,
      r;if(t.isMonochrome)this._inks=[
        this._view._ctx.defaultInk()
      ];elsefor(this._inks=[
        
      ],
      r=0;r<t.clipArtInks.length;r++)this._inks.push({
        inkId: t.clipArtInks[
          r
        ].inkId,
        colorIndex: t.clipArtInks[
          r
        ].colorIndex
      });this._fileName=t.fileName;this.loadZiggy(n.API.ziggyImageUrl(t.fileName),
      function(){
        vart=i._ziggy.width/i._ziggy.height,
        n=i._view.curProductLocation().printLocations[
          0
        ],
        r=Math.min(Math.max(n.defaultArtWidth,
        3),
        n.width),
        u=Math.min(Math.max(n.defaultArtHeight,
        3),
        n.height);t>1&&r/t<n.height?i.setSizeRaw(r,
        r/t): i.setSizeRaw(u*t,
        u);i.alignIdealPosition()
      })
    },
    i.prototype.load=function(i){
      varr=this;t.prototype.load.call(this,
      i);this.set_x(i.xCoordInch);this.set_y(i.yCoordInch);this._fileName=i.fileName;this._inks=i.imageInks;this.setSizeRaw(i.width,
      i.height);this.loadZiggy(n.API.ziggyImageUrl(i.fileName),
      function(){
        r._view._draw()
      })
    },
    i.prototype.save=function(){
      for(vart={
        imageType: "clipart",
        fileName: this._fileName,
        xCoordInch: this.x(),
        yCoordInch: this.y(),
        width: this.width(),
        height: this.height(),
        rotation: this.rotation(),
        depth: this.node().getZIndex(),
        workingFilePath: "",
        imageInks: [
          
        ]
      },
      n=0;n<this._inks.length;++n)t.imageInks.push({
        inkId: this._inks[
          n
        ].inkId,
        colorIndex: this._inks[
          n
        ].colorIndex
      });returnt
    },
    i.prototype.set_width=function(n){
      t.prototype.set_width.call(this,
      n);this.scaleChanged()
    },
    i.prototype.set_height=function(n){
      t.prototype.set_height.call(this,
      n);this.scaleChanged()
    },
    i.prototype.inks=function(){
      returnthis._inks
    },
    i.prototype.set_inks=function(n){
      this.forceFire("inks",
      n);this._inks=n.slice(0);this.updateImage();this._view._draw()
    },
    i.prototype.loadZiggy=function(t,
    i){
      varr=this;i===void0&&(i=null);n.API.getRaw(t,
      function(n){
        r.parse(n);i&&i()
      },
      function(){
        r._view.removeEntity(r)
      })
    },
    i.prototype.parse=function(t){
      vari,
      r;for(this._ziggy=newn.ZiggyImage(t),
      this._pathToColorIndex=[
        
      ],
      i=0;i<this._ziggy.layers.length;++i)r=this._ziggy.layers[
        i
      ],
      this._pathToColorIndex[
        i
      ]=this.isMonochrome()?1: r.idx;this.updateImage()
    },
    i.prototype.scaleChanged=function(){
      if(this._canvasWidth==-1){
        this.updateImage();return
      }varn=this._view.pixelScale(),
      t=this.width()*n,
      i=this.height()*n;(t>this._canvasWidth||i>this._canvasHeight||t<this._minResizeWidthThreshold||i<this._minResizeHeightThreshold)&&this.updateImage();this._g.setScaleX(this.width()/this._canvasWidth);this._g.setScaleY(this.height()/this._canvasHeight)
    },
    i.prototype.productColorChanged=function(){
      this.updateImage()
    },
    i.prototype.updateImage=function(){
      vari,
      t,
      e,
      o;if(this._ziggy){
        varr=this._view.pixelScale(),
        u=this.width()*r,
        f=this.height()*r;for(this._canvasWidth=n.nearestPowerOf2(u),
        this._canvasHeight=n.nearestPowerOf2(f),
        this._minResizeWidthThreshold=n.previousPowerOf2(u),
        this._minResizeHeightThreshold=n.previousPowerOf2(f),
        this._g.setScaleX(this.width()/this._canvasWidth),
        this._g.setScaleY(this.height()/this._canvasHeight),
        i=[
          
        ],
        t=0;t<this._ziggy.layers.length;++t)e=this.findInk(this._pathToColorIndex[
          t
        ]),
        i.push(n.standardInkRgb(this._view._ctx,
        e.inkId));o=this._ziggy.toImage(this._canvasWidth,
        this._canvasHeight,
        i);this._img=newKinetic.Image({
          image: o
        });this._g.destroyChildren();this._g.add(this._img)
      }
    },
    i.prototype.findInk=function(n){
      for(vartinthis._inks)if(n==this._inks[
        t
      ].colorIndex)returnthis._inks[
        t
      ];returnnull
    },
    i.prototype.isMonochrome=function(){
      returnthis.inks().length<=1
    },
    i
  }(n.Entity);n.ClipartEntity=t
}(Uber||(Uber={
  
})),
function(n){
  vart=function(t){
    functioni(i){
      varr=this,
      f,
      u,
      h,
      e,
      c;t.call(this,
      "PriceDialog");this._ctx=i;this._quantityInputs={
        
      };this._screenButton=this.$(".screen");this._screenButton.onclick=function(){
        r.updateDecorationMethod(n.API.DECORATION_SCREENPRINT)
      };this._digitalButton=this.$(".digital");this._digitalButton.onclick=function(){
        r.updateDecorationMethod(n.API.DECORATION_DIGITALPRINT)
      };this._embroiderButton=this.$(".embroider");this._embroiderButton.onclick=function(){
        r.updateDecorationMethod(n.API.DECORATION_EMBROIDER)
      };this._designNameInput=this.$(".designName");this._sizesContainer=this.$(".sizes");varl=this._ctx.productColor(),
      o=l.sizeArray.split(","),
      s=!1;for(f=0;f<o.length;f++)u=o[
        f
      ],
      s&&!this.isYouthSize(u)&&(h=document.createElement("br"),
      this._sizesContainer.appendChild(h)),
      e="_"+u.replace(/[
        ^a-z0-9
      ]/gi,
      ""),
      c=this.createSizeElement(e,
      u),
      this._sizesContainer.appendChild(c),
      this._quantityInputs[
        u
      ]=this.$("."+e),
      s=this.isYouthSize(u);this._orderForm=this.$(".orderForm");this._orderForm.onsubmit=function(n){
        r.calculatePrice();n.preventDefault();document.activeElement.blur&&document.activeElement.blur()
      };this._cartForm=this.$(".cartForm");this._cartForm.onsubmit=function(n){
        r.addToCart();n.preventDefault()
      };this._qtyError=this.$(".qtyError");this._priceResultText=this.$(".priceResult");this._notesTextArea=this.$(".notesText");n.limitCharacterCount(this._notesTextArea,
      999);this._notesTextArea.onchange=function(){
        i.setDesignNotes(r._notesTextArea.value)
      };this._notesToggle=this.$(".notesToggle");this._notesToggle.onclick=function(){
        r._notesToggle.classList.toggle("opened");r._notesTextArea.classList.toggle("opened")
      };this._priceTips=this.$(".priceTips");this._priceTipsList=this.$(".priceTipsList");this._errorsDiv=this.$(".errors");this._errorMessage=this.$(".warnMessage");n.onClick(this.$(".compareLink"),
      function(){
        r.showComparePopup()
      });n.onClick(this.$(".edit"),
      function(){
        r.hideCartForm()
      });n.onClick(this.$(".dlgCloseButton"),
      function(){
        r.hideCartForm()
      })
    }return__extends(i,
    t),
    i.prototype.show=function(){
      varr;t.prototype.show.call(this);this.hideQtyError();this.hideCartForm();this._designNameInput.value=this._ctx.name();this._notesTextArea.value=this._ctx.designNotes();varn=this._ctx.product(),
      u=this._ctx.productColor(),
      f=n.canDigitalPrint&&!u.canDigitalPrint,
      i=this._ctx.decorationMethod();this.showMethodButton(this._embroiderButton,
      n.canEmbroider,
      i,
      !1);this.showMethodButton(this._digitalButton,
      n.canDigitalPrint,
      i,
      f);this.showMethodButton(this._screenButton,
      n.canScreenPrint,
      i,
      !1);r=this._ctx.productView();r.selected()&&r.select(null)
    },
    i.prototype.createSizeElement=function(n,
    t){
      varr=document.createElement("label"),
      u,
      i;returnr.className="quantity",
      u=document.createElement("span"),
      u.className="label",
      u.textContent=t,
      r.appendChild(u),
      i=document.createElement("input"),
      i.className=n,
      i.type="number",
      i.placeholder="0",
      r.appendChild(i),
      r
    },
    i.prototype.showMethodButton=function(n,
    t,
    i,
    r){
      n.parentElement.style.display=t?"": "none";n.disabled=r;r?n.parentElement.classList.add("disabled"): n.parentElement.classList.remove("disabled");n.value==i&&(n.checked=!0)
    },
    i.prototype.updateDecorationMethod=function(n){
      this._ctx.setDecorationMethod(n);this._ctx.updateDescription()
    },
    i.prototype.setName=function(n){
      this._designNameInput.value=n
    },
    i.prototype.showCartForm=function(){
      this._cartForm.classList.add("visible");this._orderForm.classList.add("hidden");this._ctx.designNotes().length>0&&this.showNotes();this.hideErrorMessage()
    },
    i.prototype.hideCartForm=function(){
      this._cartForm.classList.remove("visible");this._orderForm.classList.remove("hidden")
    },
    i.prototype.showQtyError=function(){
      this._qtyError.classList.add("visible")
    },
    i.prototype.hideQtyError=function(){
      this._qtyError.classList.remove("visible")
    },
    i.prototype.showPriceTips=function(){
      this._priceTips.classList.add("visible")
    },
    i.prototype.hidePriceTips=function(){
      this._priceTipsList.innerHTML="";this._priceTips.classList.remove("visible")
    },
    i.prototype.showComparePopup=function(){
      window.open(n.API.compareDecorationsUrl(),
      "compareDecorations",
      "status=no,toolbar=no,resizable=yes,scrollbars=no,left=530,top=322,directories=no,menubar=no,width=620,height=380")
    },
    i.prototype.calculatePrice=function(){
      vart=this,
      s=this._ctx.product(),
      e=this._ctx.productView(),
      o,
      r,
      u,
      f,
      i;o=this._screenButton.checked?this._screenButton.value: this._embroiderButton.checked?this._embroiderButton.value: this._digitalButton.value;r={
        productId: s.productId,
        productColorCode: this._ctx.productColor().colorId,
        decorationMethod: o,
        locations: [
          {
            colorCount: e.gatherInksForSide(0).length
          },
          {
            colorCount: e.gatherInksForSide(1).length
          }
        ],
        quantities: [
          
        ]
      };u=0;for(finthis._quantityInputs)i=parseInt(this._quantityInputs[
        f
      ].value),
      isNaN(i)&&(i=0),
      u+=i,
      r.quantities.push({
        size: f,
        quantity: i
      });if(this._quantities=r.quantities,
      u==0){
        this.showQtyError();this.hideCartForm();return
      }this.hideQtyError();n.API.priceRequest(r,
      function(n){
        if(n.errorMessages&&n.errorMessages.length>0){
          for(vari=0;i<n.errorMessages.length;i++)n.errorMessages[
            i
          ]==="Please select the number of colors in your artwork."&&(n.errorMessages[
            i
          ]="Please add an image or text object to your design.");t._errorsDiv.innerHTML=n.errorMessages.join("<br>");t._errorsDiv.classList.add("visible");return
        }t._errorsDiv.classList.remove("visible");t.displayResults(u,
        n);t.showCartForm()
      })
    },
    i.prototype.displayResults=function(n,
    t){
      varr="",
      i,
      u;if(r+=""+n+" pieces at $"+t.requestedQuote.unitPrice.toFixed(2)+" each ",
      r+="($"+t.requestedQuote.unitPriceTotal.toFixed(2)+" total)",
      this._priceResultText.textContent=r,
      this.hidePriceTips(),
      t.alternativeMethodQuote&&(this.addPriceTipMessage("Switch to "+this.getDecMethodName(t.alternativeMethodQuote.printMethod)+" and pay only $"+t.alternativeMethodQuote.unitPrice.toFixed(2)+" each",
      ""),
      this.showPriceTips()),
      t.suggestedQuotes&&t.suggestedQuotes.length>0){
        for(t.alternativeMethodQuote&&this.addPriceTipMessage("OR",
        "nobullet"),
        i=0;i<t.suggestedQuotes.length;i++)u=t.suggestedQuotes[
          i
        ],
        this.addPriceTipMessage("Order "+u.quantityAmount+" pieces and pay $"+u.unitPrice.toFixed(2)+" each",
        "");this.showPriceTips()
      }
    },
    i.prototype.addPriceTipMessage=function(n,
    t){
      vari=document.createElement("li");i.textContent=n;i.className=t;this._priceTipsList.appendChild(i)
    },
    i.prototype.getDecMethodName=function(t){
      switch(t){
        casen.API.DECORATION_DIGITALPRINT: return"Digital Print";casen.API.DECORATION_SCREENPRINT: return"Screen Print";casen.API.DECORATION_EMBROIDER: return"Embroidery"
      }returnt
    },
    i.prototype.showNotes=function(){
      this._notesToggle.classList.add("opened");this._notesTextArea.classList.add("opened")
    },
    i.prototype.addToCart=function(){
      vart=this,
      n=this._designNameInput.value;if(n.trim().length==0){
        this._designNameInput.classList.add("input-validation-error");return
      }this._ctx.requireLogin(function(){
        t.reallyAddToCart(n)
      },
      function(){
        
      })
    },
    i.prototype.reallyAddToCart=function(t){
      vari=this;if(this._ctx.product().isDiscontinued){
        this.showErrorMessage("This item has been discontinued. Please switch to a different product before continuing.");return
      }if(this._ctx.productColor().isDiscontinued){
        this.showErrorMessage("This product is no longer available in "+this._ctx.productColor().colorName+". Please choose a different color before saving your design.");return
      }this._ctx.saveDesign(t,
      function(t,
      r,
      u,
      f,
      e){
        if(!t){
          f?i.showDesignLocked(e): i.showErrorMessage(u);return
        }n.API.addToCart(r,
        i._quantities,
        function(){
          location.assign("/cart")
        })
      })
    },
    i.prototype.isYouthSize=function(n){
      returnn.length>1&&n.substring(0,
      1)=="Y"?!0: !1
    },
    i.prototype.showErrorMessage=function(n){
      this._errorMessage.textContent=n;this._errorMessage.style.display="block"
    },
    i.prototype.hideErrorMessage=function(){
      this._errorMessage.textContent="";this._errorMessage.style.display="none"
    },
    i.prototype.showDesignLocked=function(n){
      vari,
      t,
      r;this._errorMessage.classList.add("error");i=document.createTextNode("You are trying to overwrite a design from a previous order. Please choose a new name or place a re-order from your ");t=document.createElement("a");t.href=n;t.textContent="My Account";r=document.createTextNode(".");this._errorMessage.appendChild(i);this._errorMessage.appendChild(t);this._errorMessage.appendChild(r);this._errorMessage.style.display="block"
    },
    i
  }(n.Dialog);n.PriceDialog=t
}(Uber||(Uber={
  
})),
function(n){
  vart=function(){
    functionn(){
      varn=document.getElementById("fb-root");n||(n=document.createElement("div"),
      n.id="fb-root",
      document.querySelectorAll("body")[
        0
      ].appendChild(n),
      window.fbAsyncInit=function(){
        FB.init({
          appId: "481226531949849",
          status: !0,
          xfbml: !0,
          frictionlessRequests: !0,
          oauth: !0
        })
      },
      function(n,
      t,
      i){
        varr,
        u=n.getElementsByTagName(t)[
          0
        ];n.getElementById(i)||(r=n.createElement(t),
        r.id=i,
        r.src="//connect.facebook.net/en_US/all.js",
        u.parentNode.insertBefore(r,
        u))
      }(document,
      "script",
      "facebook-jssdk"))
    }returnn.prototype.show=function(n){
      if(FB==null)throw"Missing facebook sdk";vart={
        method: "feed",
        link: n.url
      };n.images!=null&&n.images.length>1&&(t.picture=n.images[
        0
      ]);n.text!=null&&(t.name=n.text);n.summary!=null&&(t.description=n.summary);FB.ui(t,
      function(){
        
      })
    },
    n
  }();n.Facebook=t
}(Uber||(Uber={
  
})),
function(n){
  vart=function(){
    functiont(){
      this._url="http://twitter.com/share?"
    }returnt.prototype.show=function(t){
      vari=this._url+"url="+encodeURIComponent(t.url)+"&text="+encodeURIComponent(t.summary)+"&via=uberprints";n.openWindow({
        url: i,
        title: t.text,
        size: {
          width: 550,
          height: 400
        }
      })
    },
    t
  }();n.Twitter=t
}(Uber||(Uber={
  
})),
function(n){
  vari=function(){
    functionn(){
      this._dlg=newt
    }returnn.prototype.show=function(n){
      this._dlg.setShare(n.id,
      n.token);this._dlg.show()
    },
    n
  }(),
  t;n.Email=i;t=function(t){
    functioni(){
      vari=this,
      r;t.call(this,
      "EmailDialog");this._formWrapper=this.$(".form-wrapper");this._successWrapper=this.$(".success-wrapper");this._fail=this.$(".fail");this._form=this.$(".form");this._toEmails=this.$(".toEmails");this._fromEmail=this.$(".fromEmail");this._fromName=this.$(".fromName");this._message=this.$(".message");this._shareId=this.$(".shareId");this._token=this.$(".token");r=this.$(".closeButton");n.onClick(r,
      function(){
        i.hide()
      });n.onSubmit(this._form,
      this.$(".sendButton"),
      function(){
        i.send()
      })
    }return__extends(i,
    t),
    i.prototype.send=function(){
      vart=this,
      i={
        mailTo: this._toEmails.value,
        mailFrom: this._fromEmail.value,
        mailFromName: this._fromName.value,
        mailMessage: this._message.value,
        tempdesignId: parseInt(this._shareId.value),
        token: this._token.value
      };n.API.sendDesign(i,
      function(n){
        n.result==1?t.showSuccess(): t.showError(n.message)
      })
    },
    i.prototype.setShare=function(n,
    t){
      if(!n||!t)throw"missing share information";this._shareId.value=n.toString();this._token.value=t
    },
    i.prototype.show=function(){
      this.hideError();this.hideSuccess();this._formWrapper.style.display="block";t.prototype.show.call(this)
    },
    i.prototype.hide=function(){
      t.prototype.hide.call(this)
    },
    i.prototype.showSuccess=function(){
      this._formWrapper.style.display="none";this._successWrapper.style.display="block"
    },
    i.prototype.hideSuccess=function(){
      this._successWrapper.style.display="none"
    },
    i.prototype.showError=function(n){
      this._fail.textContent=n;this._fail.style.display="inline-block"
    },
    i.prototype.hideError=function(){
      this._fail.textContent="";this._fail.style.display="none"
    },
    i
  }(n.Dialog);n.EmailDialog=t
}(Uber||(Uber={
  
})),
function(n){
  vart=function(){
    functiont(t){
      this._view=t;this._services={
        
      };this._services.facebook=newn.Facebook;this._services.twitter=newn.Twitter;this._services.pinterest=newn.Pinterest;this._services.email=newn.Email
    }returnt.prototype.reset=function(){
      this._shareDesign=null
    },
    t.prototype.share=function(t,
    i){
      varu=this,
      r=this._services[
        i
      ];if(r==null)throw"cannot find service provider";this._shareDesign==null?n.API.shareDesign(t,
      function(n){
        if(n==null)throw"response is not valid";u._shareDesign=n;u.show(r,
        n)
      }): this.show(r,
      this._shareDesign)
    },
    t.prototype.onProductChange=function(){
      varn=this;setTimeout(function(){
        n._shareDesign!=undefined&&(n._shareDesign=undefined)
      },
      100)
    },
    t.prototype.show=function(n,
    t){
      this._view.hideShareOptions();n.show({
        id: t.designId,
        token: t.token,
        url: t.url,
        images: t.images,
        text: "",
        summary: "Check out my #UberShirt design"
      })
    },
    t
  }();n.ShareContext=t
}(Uber||(Uber={
  
})),
function(n){
  vari=function(){
    functionn(){
      this._dlg=newt
    }returnn.prototype.show=function(n){
      this._dlg.setFrame(n.url);this._dlg.show()
    },
    n
  }(),
  t;n.Pinterest=i;t=function(n){
    functiont(){
      n.call(this,
      "PinterestDialog");this._frame=this.$(".frame")
    }return__extends(t,
    n),
    t.prototype.setFrame=function(n){
      this._frame.src=n+"?pinterest=true"
    },
    t.prototype.show=function(){
      n.prototype.show.call(this)
    },
    t
  }(n.Dialog);n.PinterestDialog=t
}(Uber||(Uber={
  
})),
function(n){
  varu;n.SNAP=.1;n.ROTATION_SNAP=.1;n.MIN_SIZE=.1;n.GUIDE_WIDTH=1;n.HANDLE_SIZE=16;n.DRAG_HANDLE_SIZE=8;n.NUDGE_DISTANCE=.1;n.CLICKY_EVENTS="mousedown touchstart";n.END_CLICKY_EVENTS="mouseup touchend touchcancel";vart=435,
  i=480,
  r=Kinetic.Group.prototype.drawScene;Kinetic.Group.prototype.drawScene=function(n){
    if(!("_hackyClipRect"inthis))returnr.call(this,
    n);vari=this._hackyClipRect,
    t=this.getLayer().canvas.context;returnt.save(),
    t._applyAncestorTransforms(this),
    t.beginPath(),
    t.rect(i[
      0
    ],
    i[
      1
    ],
    i[
      2
    ],
    i[
      3
    ]),
    t.clip(),
    t.reset(),
    r.call(this,
    n),
    t.restore(),
    this
  };u=function(r){
    functionu(t){
      vari=this,
      u;r.call(this,
      "ProductView");this._ctx=t;this._zoomed=!1;this._curSide=0;this._sides=[
        {
          entities: [
            
          ],
          group: newKinetic.Group
        },
        {
          entities: [
            
          ],
          group: newKinetic.Group
        }
      ];this._fauxEnt=newn.Entity(this);n.onClick(this.$(".rotateButton"),
      function(){
        i.flip();i.onReset()
      });n.onClick(this.$(".zoomButton"),
      function(){
        i.zoom()
      });n.onClick(this.$(".clearButton"),
      function(){
        confirm("Are you sure you want to clear your design?")&&i.clear()
      });n.onClick(this.$(".templatesButton"),
      function(){
        newn.TemplatesDialog(i._ctx).show()
      });this._shareButton=this.$(".shareButton");this._shareButton.onclick=function(n){
        i._shareButton.classList.toggle("active");n.preventDefault()
      };this._shareCtx=newn.ShareContext(this);n.onClick(this.$(".email"),
      function(){
        i.select(null);i._shareCtx.share(i._ctx.serializeDesign(),
        "email")
      });n.onClick(this.$(".twitter"),
      function(){
        i.select(null);i._shareCtx.share(i._ctx.serializeDesign(),
        "twitter")
      });n.onClick(this.$(".facebook"),
      function(){
        i.select(null);i._shareCtx.share(i._ctx.serializeDesign(),
        "facebook")
      });n.onClick(this.$(".pinterest"),
      function(){
        i.select(null);i._shareCtx.share(i._ctx.serializeDesign(),
        "pinterest")
      });this._stage=newKinetic.Stage({
        container: this.$(".container")
      });this._stage.getContainer().oncontextmenu=function(n){
        returnn.preventDefault(),
        !1
      };this._layer=newKinetic.Layer;this._stage.add(this._layer);this._zoomGroup=newKinetic.Group;this._layer.add(this._zoomGroup);this._bgImg=document.createElement("img");this._bgImg.onload=function(){
        i._zoomGroup.add(i._bg);i._bg.moveToBottom();i._draw()
      };this._bg=newKinetic.Image({
        image: this._bgImg
      });u=!1;this._bg.on(n.CLICKY_EVENTS,
      function(n){
        n.preventDefault();u=!0;setTimeout(function(){
          u||i.select(null)
        },
        200)
      });this._bg.on(n.END_CLICKY_EVENTS,
      function(t){
        varf,
        r,
        e;t.preventDefault();u=!1;t.button===2&&(i.select(null),
        f=i._stage.getPointerPosition(),
        r=n.copyTransform(i._sides[
          i._curSide
        ].group.getAbsoluteTransform()),
        r.invert(),
        r.translate(f.x,
        f.y),
        e=r.getTranslation(),
        i._ctx.contextMenu().showMenu(t.clientX,
        t.clientY,
        e.x,
        e.y))
      });this._dragSelect=newn.DragSelectBox(this,
      this._zoomGroup);this._handleGroup=newKinetic.Group;this._zoomGroup.add(this._handleGroup);this._handle=newn.DragHandle(this,
      this._handleGroup,
      this._stage.getContainer());this._guideGroup=newKinetic.Group({
        
      });this._guideGroup.add(this._guideRect=newKinetic.Rect({
        stroke: "#009ddc"
      }));this._guideGroup.add(this._hguide=newKinetic.Line({
        points: [
          {
            x: 0,
            y: 0
          },
          {
            x: 0,
            y: 100
          }
        ],
        stroke: "#009ddc"
      }));this._guideGroup.add(this._vguide=newKinetic.Line({
        points: [
          {
            x: 0,
            y: 0
          },
          {
            x: 100,
            y: 0
          }
        ],
        stroke: "#009ddc"
      }));this._guideRect.hide();this._hguide.hide();this._vguide.hide();this._zoomGroup.add(this._guideGroup);this._fauxEnt.init(newKinetic.Group);this._fauxEnt.set_constrain(!1);this.hookResize();this._draw()
    }return__extends(u,
    r),
    u.prototype.handle=function(){
      returnthis._handle
    },
    u.prototype.bg=function(){
      returnthis._bg
    },
    u.prototype.setProduct=function(n){
      this._product&&this.rescaleEntities(this._product,
      n);this._product=n;n.productLocations.length==1?this.$(".rotateButton").classList.add("disabled"): this.$(".rotateButton").classList.remove("disabled");this.setProductLocationIndex(0);this._notifyChange()
    },
    u.prototype.selectInRect=function(n){
      for(varu=this._sides[
        this._curSide
      ],
      f=n.x+n.width,
      e=n.y+n.height,
      r=[
        
      ],
      i,
      t=0;t<u.entities.length;++t)i=u.entities[
        t
      ].bbox(),
      i.left<f&&i.top<e&&i.right>n.x&&i.bottom>n.y&&r.push(u.entities[
        t
      ]);switch(r.length){
        case0: this.select(null);break;case1: this.select(r[
          0
        ]);break;default: this.selectGroup(r)
      }
    },
    u.prototype.select=function(n){
      vart=this.selected();if(t&&(this._handle.attachTo(null),
      t.onDeselected()),
      this._handle.attachTo(n),
      this._draw(),
      this.onSelect)this.onSelect(n)
    },
    u.prototype.selectGroup=function(t){
      vari=newn.EntityGroup(this,
      t);this.select(i)
    },
    u.prototype.selected=function(){
      returnthis._handle.ent()
    },
    u.prototype.clear=function(){
      this._sides[
        0
      ].group.removeChildren();this._sides[
        0
      ].entities=[
        
      ];this._sides[
        1
      ].group.removeChildren();this._sides[
        1
      ].entities=[
        
      ];this.select(null);this._ctx.updateDescription();this._ctx.showPane("continue")
    },
    u.prototype.addEntity=function(n){
      this.addEntityToSide(n,
      this._curSide)
    },
    u.prototype.addEntityToSide=function(n,
    t){
      if(!this._product)throw"Attempt to add an entity to a shirt with no associated product.";vari=this._sides[
        t
      ];i.entities.push(n);i.group.add(n.node());this._draw();this._ctx.updateDescription();this._notifyChange()
    },
    u.prototype.removeEntity=function(n){
      vari,
      t;n==this.selected()&&this.select(null);this.onRemove(n);for(i=this._sides[
        this._curSide
      ],
      t=0;t<i.entities.length;++t)if(i.entities[
        t
      ]==n){
        i.entities.splice(t,
        1);n.node().remove();this._draw();this._ctx.updateDescription();this._shareCtx.onProductChange();return
      }throw"Attemped to remove non-existent entity.";
    },
    u.prototype._notifyChange=function(){
      this._ctx.updateDescription();this._shareCtx.onProductChange()
    },
    u.prototype.entitiesOnSide=function(n){
      returnthis._sides[
        n
      ].entities.length
    },
    u.prototype.load=function(t){
      vari=this;this.clear();this._ctx.setProduct(t.productId,
      function(){
        varr,
        o,
        u,
        l,
        f,
        e,
        s,
        h,
        a,
        c,
        v,
        y;for(i._ctx.setProductColor(n.API.findProductColor(i._ctx.product(),
        t.productColorCode),
        t.decorationMethod),
        r=0;r<t.artboards.length;++r){
          o=t.artboards[
            r
          ];u=o.images;u=u.concat(o.texts);u.sort(function(n,
          t){
            returnn.depth-t.depth
          });for(linu)if(f=u[
            l
          ],
          f.imageType){
            e=f;switch(e.imageType){
              case"upload": s=newn.ImageEntity(i);s.load(e);i.addEntityToSide(s,
              r);break;case"clipart": h=newn.ClipartEntity(i);h.load(e);i.addEntityToSide(h,
              r)
            }
          }elsea=f,
          c=newn.TextEntity(i),
          c.load(a),
          i.addEntityToSide(c,
          r)
        }i._product.productLocations.length>1&&t.artboards.length>1&&(v=t.artboards[
          0
        ].images.length+t.artboards[
          0
        ].texts.length,
        y=t.artboards[
          1
        ].images.length+t.artboards[
          1
        ].texts.length,
        v==0&&y>0&&i.flip())
      })
    },
    u.prototype.save=function(){
      for(vare={
        name: "",
        designNotes: "",
        productId: this._product.productId,
        decorationMethod: null,
        productColorCode: null,
        artboards: [
          
        ]
      },
      r,
      f,
      u,
      t,
      o,
      s,
      h,
      i=0;i<this._product.productLocations.length;i++){
        for(r={
          locationNumber: i+1,
          images: [
            
          ],
          texts: [
            
          ]
        },
        f=this._sides[
          i
        ],
        u=0;u<f.entities.length;++u)if(t=f.entities[
          u
        ],
        tinstanceofn.TextEntity)o=t.save(),
        r.texts.push(o);elseif(tinstanceofn.ImageEntity)s=t.save(),
        r.images.push(s);elseif(tinstanceofn.ClipartEntity)h=t.save(),
        r.images.push(h);elsethrow"Unexpected entity type.";e.artboards.push(r)
      }returne
    },
    u.prototype.setUploadedImagesFilePath=function(t){
      for(varu,
      r,
      f,
      i=0;i<this._sides.length;i++)for(u=this._sides[
        i
      ],
      r=0;r<u.entities.length;++r)f=u.entities[
        r
      ],
      finstanceofn.ImageEntity&&f.set_filePath(t)
    },
    u.prototype.gatherCurrentInks=function(){
      returnthis.gatherInksForSides(0,
      this._sides.length-1)
    },
    u.prototype.gatherInksForSide=function(n){
      returnthis.gatherInksForSides(n,
      n)
    },
    u.prototype.gatherInksForCurrentSide=function(){
      returnthis.gatherInksForSides(this._curSide,
      this._curSide)
    },
    u.prototype.gatherInksForSides=function(n,
    t){
      for(vare=[
        
      ],
      u,
      r,
      f,
      i=n;i<=t;++i)if(!this._product||!this._product.productLocations||!(i>=this._product.productLocations.length))for(u=this._sides[
        i
      ],
      r=0;r<u.entities.length;++r)u.entities[
        r
      ].inks().forEach(function(n){
        n.inkId>0&&(e[
          n.inkId
        ]=!0)
      });returnf=[
        
      ],
      e.forEach(function(n,
      t){
        f.push(t)
      }),
      f
    },
    u.prototype.curProductLocation=function(){
      returnthis._product.productLocations[
        this._curSide
      ]
    },
    u.prototype._showGuideRect=function(){
      this._guideRect.isVisible()||this._guideRect.show()
    },
    u.prototype._constrainDrag=function(t,
    i){
      functions(n,
      t,
      i){
        varr=t-i;Math.abs(r)<Math.abs(c)&&(c=r,
        a=t,
        p=n)
      }functionh(n,
      t,
      i){
        varr=t-i;Math.abs(r)<Math.abs(l)&&(l=r,
        v=t,
        w=n)
      }for(varp,
      w,
      c=n.SNAP,
      l=n.SNAP,
      a=-1,
      v=-1,
      e=i.pos_bbox(t.x,
      t.y),
      o=this._sides[
        this._curSide
      ].entities,
      f,
      r,
      y,
      o=o.concat(this._fauxEnt),
      u=0;u<o.length;++u)(r=o[
        u
      ],
      r!=i)&&(f=r.bbox(),
      s(r,
      f.left,
      e.left),
      s(r,
      f.left,
      e.right),
      s(r,
      f.right,
      e.left),
      s(r,
      f.right,
      e.right),
      s(r,
      f.horzCenter,
      e.horzCenter),
      h(r,
      f.top,
      e.top),
      h(r,
      f.top,
      e.bottom),
      h(r,
      f.bottom,
      e.top),
      h(r,
      f.bottom,
      e.bottom),
      h(r,
      f.vertCenter,
      e.vertCenter));for(a==-1?this._hguide.hide(): (this._hguide.setX(a),
      this._hguide.show(),
      t.x+=c),
      v==-1?this._vguide.hide(): (this._vguide.setY(v),
      this._vguide.show(),
      t.y+=l),
      u=0;u<o.length;++u){
        if(r=o[
          u
        ],
        r!=p&&r!=w){
          o[
            u
          ].removeGuideRect();continue
        }y=o[
          u
        ].guideRect(this._strokeWidth);y.getParent()||this._guideGroup.add(y)
      }this._draw()
    },
    u.prototype._hideEdges=function(){
      for(varn=this._sides[
        this._curSide
      ].entities,
      n=n.concat(this._fauxEnt),
      t=0;t<n.length;++t)n[
        t
      ].removeGuideRect();this._guideRect.hide();this._hguide.hide();this._vguide.hide();this._draw()
    },
    u.prototype._draw=function(){
      varn=this;this._drawEnqueued||(this._drawEnqueued=!0,
      setTimeout(function(){
        try{
          n._stage.draw()
        }catch(t){
          
        }finally{
          n._drawEnqueued=!1
        }
      },
      0))
    },
    u.prototype._onEntityClicked=function(n,
    t){
      this._handle.contains(n)||this.select(n);t.button!==2&&this._handle.node().startDrag()
    },
    u.prototype.onEntityRightClicked=function(n,
    t){
      this._handle.contains(n)&&this._ctx.contextMenu().showMenu(t.clientX,
      t.clientY)
    },
    u.prototype.flip=function(){
      this.setProductLocationIndex(this._curSide?0: 1)
    },
    u.prototype.zoom=function(){
      this._zoomed=!this._zoomed;this.adjustScale()
    },
    u.prototype.setZoom=function(n){
      this._zoomed=n
    },
    u.prototype.setProductLocationIndex=function(n){
      n>=this._product.productLocations.length||(this.select(null),
      this._sides[
        this._curSide
      ].group.remove(),
      this._curSide=n,
      this._zoomGroup.add(this._sides[
        this._curSide
      ].group),
      this._handleGroup.moveToTop(),
      this.updateBackground(),
      this.adjustScale(),
      this.$(".rotateButton").innerText=this._curSide==0?"view back": "view front")
    },
    u.prototype.updateBackground=function(){
      vari,
      t;for(this._bgImg.src=n.API.productUrl(this._product.productId,
      this.curProductLocation().productLocationNumber,
      this._ctx.productColor().colorId),
      i=this._sides[
        this._curSide
      ],
      t=0;t<i.entities.length;++t)i.entities[
        t
      ].productColorChanged()
    },
    u.prototype.pixelScale=function(){
      returnthis._zoomGroup.getAbsoluteTransform().getMatrix()[
        0
      ]
    },
    u.prototype.hookResize=function(){
      varn=this,
      r=function(){
        varo=n.$(".container"),
        f=o.offsetWidth,
        e=o.offsetHeight,
        r,
        u,
        s,
        h;n._stage.setWidth(f);n._stage.setHeight(e);r=f/t;u=e/i;r<u?u=r: r=u;n._stage.setScale(r,
        u);s=(f-t*r)/2;h=(e-i*u)/2;n._stage.setPosition(s,
        h);n.adjustScale()
      };window.addEventListener("resize",
      function(){
        r()
      });setTimeout(function(){
        r()
      },
      0)
    },
    u.prototype.adjustGuideScale=function(){
      vart=1/this._guideGroup.getAbsoluteTransform().getMatrix()[
        0
      ];this._strokeWidth=t*n.GUIDE_WIDTH;this._guideRect.setStrokeWidth(this._strokeWidth);this._hguide.setStrokeWidth(this._strokeWidth);this._vguide.setStrokeWidth(this._strokeWidth)
    },
    u.prototype.adjustScale=function(){
      varn,
      r,
      v,
      y,
      c,
      l,
      o;if(this._product){
        n=this.curProductLocation().printLocations[
          0
        ];r=n.scaleRatio;this._layer.setScale(r,
        r);this._bg.setScale(.5/r,
        .5/r);varf=n.xStartCoord/r,
        e=n.yStartCoord/r,
        a=this._sides[
          this._curSide
        ].group;if(a.setPosition(f,
        e),
        this._zoomed){
          varp=n.width*r,
          w=n.height*r,
          s=t/p,
          h=i/w,
          u=s<h?s: h;u*=.85;this._zoomGroup.setScale(u,
          u);v=t*(1-u/s)/u/r/2;y=i*(1-u/h)/u/r/2;this._zoomGroup.setOffset(f-v,
          e-y)
        }elsethis._zoomGroup.setScale(1,
        1),
        this._zoomGroup.setOffset(0,
        0);if(this._handleGroup.setPosition(f,
        e),
        this._guideGroup.setPosition(f,
        e),
        this._guideRect.setSize(n.width,
        n.height),
        this._fauxEnt.set_width(n.width),
        this._fauxEnt.set_height(n.height),
        this._handle.adjustScale(),
        this.adjustGuideScale(),
        c=[
          -this._strokeWidth,
          -this._strokeWidth,
          n.width+this._strokeWidth*2,
          n.height+this._strokeWidth*2
        ],
        this._guideGroup._hackyClipRect=c,
        a._hackyClipRect=c,
        this._zoomed)for(l=this._sides[
          this._curSide
        ],
        o=0;o<l.entities.length;++o)l.entities[
          o
        ].scaleChanged();this._draw()
      }
    },
    u.prototype.rescaleEntities=function(n,
    t){
      for(vare,
      f,
      i=0;i<this._sides.length;++i){
        if(e=this._sides[
          i
        ],
        i>=t.productLocations.length||i>=n.productLocations.length)return;varo=n.productLocations[
          i
        ].printLocations[
          0
        ],
        s=t.productLocations[
          i
        ].printLocations[
          0
        ],
        h=s.width/o.width,
        c=s.height/o.height,
        u=h<c?h: c,
        l=o.width*u,
        a=(s.width-l)/2;for(f=0;f<e.entities.length;++f){
          varr=e.entities[
            f
          ],
          v=r.width(),
          y=r.height();r.set_x(r.x()*u+a);r.set_y(r.y()*u);r.set_width(v*u);r.set_height(y*u)
        }
      }
    },
    u.prototype.hideShareOptions=function(){
      this._shareButton.classList.remove("active")
    },
    u
  }(n.TemplateView);n.ProductView=u
}(Uber||(Uber={
  
})),
function(n){
  functionr(n){
    vart=this,
    i=t.getWidth(),
    r=t.getHeight();n.beginPath();n.rect(-i/2,
    -r/2,
    i*2,
    r*2);n.closePath();n.fillStrokeShape(t)
  }vari=.75,
  t=function(){
    functionn(n){
      this._set=n
    }returnn.prototype.value=function(){
      returnthis._value
    },
    n.prototype.onchange=function(n){
      this._onchange=n
    },
    n.prototype.set=function(n){
      this._value!=n&&(this._value=n,
      this._set(n),
      this._onchange&&this._onchange(n))
    },
    n
  }(),
  f=function(){
    functionu(i,
    u,
    f){
      vare=this,
      o,
      s,
      h,
      c,
      l;this._view=i;this._binding=newn.Binding;this._startRotation=0;o=function(){
        e.update()
      };this._x=newt(o);this._y=newt(o);this._width=newt(o);this._height=newt(o);this._rotation=newt(o);this._topOffset=newt(o);this._binding.bind("width",
      this._width);this._binding.bind("height",
      this._height);this._binding.bind("x",
      this._x);this._binding.bind("y",
      this._y);this._binding.bind("rotation",
      this._rotation);this._binding.bind("topOffset",
      this._topOffset);this._g=newKinetic.Group({
        draggable: !0
      });this._rect=newKinetic.Rect({
        stroke: "#009ddc",
        strokeWidth: n.GUIDE_WIDTH
      });this._rect.setListening(!1);s=newKinetic.Rect({
        x: 0,
        y: 0,
        width: 1,
        height: 1,
        fill: "white",
        stroke: "#009ddc",
        strokeWidth: n.GUIDE_WIDTH,
        draggable: !0,
        drawHitFunc: r
      });h=document.createElement("img");h.src="/assets/images/studio/rotate-sm.png";h.onload=function(){
        e._g.getStage().draw()
      };this._rot=newKinetic.Image({
        image: h,
        draggable: !0,
        drawHitFunc: r,
        width: 20,
        height: 20
      });c=document.createElement("img");c.src="/assets/images/studio/clear-sm.png";c.onload=function(){
        e._g.getStage().draw()
      };this._del=newKinetic.Image({
        image: c,
        drawHitFunc: r,
        width: 20,
        height: 20
      });l=!1;this._del.on(n.CLICKY_EVENTS,
      function(){
        e._ent&&(l=!0,
        setTimeout(function(){
          e._ent&&!l&&e._view.removeEntity(e._ent)
        },
        200))
      });this._del.on(n.END_CLICKY_EVENTS,
      function(){
        l=!1
      });this._tl=s.clone();this._tr=s.clone();this._bl=s.clone();this._br=s.clone();this._g.add(this._rect);this._g.add(this._rot);this._g.add(this._del);this._g.add(this._tl);this._g.add(this._tr);this._g.add(this._bl);this._g.add(this._br);this._g.setDragBoundFunc(this.localDragBoundFunc(u,
      this.drag));this._rot.setDragBoundFunc(this.localDragBoundFunc(u,
      this.dragRotation));this._tl.setDragBoundFunc(this.localDragBoundFunc(this._g,
      this.dragTopLeft));this._tr.setDragBoundFunc(this.localDragBoundFunc(this._g,
      this.dragTopRight));this._bl.setDragBoundFunc(this.localDragBoundFunc(this._g,
      this.dragBottomLeft));this._br.setDragBoundFunc(this.localDragBoundFunc(this._g,
      this.dragBottomRight));this._g.on("dragstart",
      function(){
        e._dragging=!0
      });this._g.on("dragend mouseup touchend",
      function(){
        e._dragging=!1;e._view._hideEdges()
      });this.node().setVisible(!1);u.add(this._g);typeofHammer!="undefined"&&(this._manager=newHammer.Manager(f,
      {
        touchAction: "none",
        recognizers: [
          [
            Hammer.Pinch,
            {
              enable: !0
            }
          ],
          [
            Hammer.Rotate,
            {
              enable: !0,
              threshold: 5
            },
            [
              "pinch"
            ]
          ]
        ]
      }));document.addEventListener("keydown",
      function(t){
        if(e._ent){
          if(document.activeElement&&document.activeElement.type){
            vari=document.activeElement.type.toLowerCase();if(i==="number"||i==="text"||i==="textarea")return
          }t=t||window.event;switch(t.which||t.keyCode){
            case37: e.setPosition(e.x()-n.NUDGE_DISTANCE,
            e.y());break;case38: e.setPosition(e.x(),
            e.y()-n.NUDGE_DISTANCE);break;case39: e.setPosition(e.x()+n.NUDGE_DISTANCE,
            e.y());break;case40: e.setPosition(e.x(),
            e.y()+n.NUDGE_DISTANCE);break;default: return
          }t.preventDefault()
        }
      },
      !1)
    }returnu.prototype.attachTo=function(n){
      vart=this;if(this._ent=n,
      !n){
        this.node().setVisible(!1);this._manager&&this._manager.off("rotatestart rotatemove pinchstart pinchmove");return
      }if(this._manager){
        this._manager.on("pinchstart pinchmove",
        function(n){
          t.onPinch(n)
        });if(!this.groupMode())this._manager.on("rotatestart rotatemove",
        function(n){
          t.onRotate(n)
        })
      }this._del.setVisible(!this.groupMode());this.node().setVisible(!0);this._binding.setTarget(n);this._x.set(n.x());this._y.set(n.y());this._width.set(n.width());this._height.set(n.height());this._rotation.set(n.rotation());this._topOffset.set(n.topOffset())
    },
    u.prototype.ent=function(){
      returnthis._ent
    },
    u.prototype.node=function(){
      returnthis._g
    },
    u.prototype.adjustScale=function(){
      vare=1/this._g.getParent().getAbsoluteTransform().getMatrix()[
        0
      ],
      r=e*n.GUIDE_WIDTH;this._rect.setStrokeWidth(r);varu=e*n.HANDLE_SIZE,
      t=e*n.DRAG_HANDLE_SIZE,
      f=u/2,
      i=0;this._del.setSize(u,
      u);this._del.setOffset(f,
      f);this._rot.setSize(u,
      u);this._rot.setOffset(f,
      f);this._tl.setStrokeWidth(r);this._tl.setOffset(t-i,
      t-i);this._tl.setSize(t,
      t);this._tr.setStrokeWidth(r);this._tr.setOffset(i,
      t-i);this._tr.setSize(t,
      t);this._bl.setStrokeWidth(r);this._bl.setOffset(t-i,
      i);this._bl.setSize(t,
      t);this._br.setStrokeWidth(r);this._br.setOffset(i,
      i);this._br.setSize(t,
      t)
    },
    u.prototype.setListening=function(n){
      this._rect.setListening(n)
    },
    u.prototype.contains=function(t){
      returnthis.ent()instanceofn.EntityGroup?this.ent().contains(t): this.ent()===t
    },
    u.prototype.x=function(){
      returnthis._x.value()
    },
    u.prototype.y=function(){
      returnthis._y.value()
    },
    u.prototype.width=function(){
      returnthis._width.value()
    },
    u.prototype.height=function(){
      returnthis._height.value()
    },
    u.prototype.rotation=function(){
      returnthis._rotation.value()
    },
    u.prototype.topOffset=function(){
      returnthis._topOffset.value()
    },
    u.prototype.entGroup=function(){
      returnthis.ent()instanceofn.EntityGroup?this.ent(): null
    },
    u.prototype.onRotate=function(n){
      n.type=="rotatestart"&&(this.node().stopDrag(),
      this._startRotation=this.rotation());vart=this._startRotation+n.rotation;t=this.constrainRotation(t);this.setCenteredRotation(t)
    },
    u.prototype.onPinch=function(n){
      n.type=="pinchstart"&&(this.node().stopDrag(),
      this._startWidth=this._ent.width(),
      this._startHeight=this._ent.height());this.setSizeAboutCenter(this._startWidth*n.scale,
      this._startHeight*n.scale)
    },
    u.prototype.drag=function(n){
      returnthis._ent?(this._dragging&&(this._view._showGuideRect(),
      this._ent.snap()&&this._view._constrainDrag(n,
      this._ent)),
      this.setPosition(n.x,
      n.y),
      n): n
    },
    u.prototype.dragTopLeft=function(n){
      this._view._showGuideRect();vari=n.x,
      r=n.y,
      t=this._ent.constrainSize(this.width()-i,
      this.height()-r,
      !0);returni=this.width()-t[
        0
      ],
      r=this.height()-t[
        1
      ],
      this.setLocalPosition(i,
      r),
      this.setSize(t[
        0
      ],
      t[
        1
      ]),
      {
        x: 0,
        y: this.topOffset()
      }
    },
    u.prototype.dragTopRight=function(n){
      this._view._showGuideRect();vart=n.y,
      i=this._ent.constrainSize(n.x,
      this.height()-t,
      !0);returnt=this.height()-i[
        1
      ],
      this.setLocalPosition(0,
      t),
      this.setSize(i[
        0
      ],
      i[
        1
      ]),
      {
        x: this.width(),
        y: this.topOffset()
      }
    },
    u.prototype.dragBottomLeft=function(n){
      this._view._showGuideRect();vart=n.x,
      i=this._ent.constrainSize(this.width()-t,
      n.y,
      !0);returnt=this.width()-i[
        0
      ],
      this.setLocalPosition(t,
      0),
      this.setSize(i[
        0
      ],
      i[
        1
      ]),
      {
        x: 0,
        y: this.height()
      }
    },
    u.prototype.dragBottomRight=function(n){
      this._view._showGuideRect();vart=this._ent.constrainSize(n.x,
      n.y,
      !0);returnthis.setSize(t[
        0
      ],
      t[
        1
      ]),
      {
        x: this.width(),
        y: this.height()
      }
    },
    u.prototype.dragRotation=function(t){
      this._view._showGuideRect();varf=this.width(),
      e=this.height()+this.topOffset(),
      r=n.copyTransform(this._g.getTransform());r.translate(f/2,
      e/2);varo=r.getTranslation(),
      s=this._g.getRotation(),
      u=Math.atan2(t.y-o.y,
      t.x-o.x);returnu=this.constrainRotation(u),
      this.setCenteredRotation(n.radToDeg(u)),
      t.x=f+i,
      t.y=e/2,
      r=n.copyTransform(this._g.getTransform()),
      r.translate(t.x,
      t.y),
      r.getTranslation()
    },
    u.prototype.setCenteredRotation=function(n){
      this.ent().set_centeredRotation(n)
    },
    u.prototype.setRotationAboutCenter=function(t){
      varc=this.width(),
      l=this.height()+this.topOffset(),
      o=n.copyTransform(this._g.getTransform()),
      h;o.translate(c/2,
      l/2);vari=o.getTranslation(),
      s=this._g.getRotation(),
      r=n.degToRad(t);r=this.constrainRotation(r);varu=[
        this.x()-i.x,
        this.y()-i.y
      ],
      f=newKinetic.Transform,
      e=newKinetic.Transform;f.rotate(s);f.invert();e.rotate(r);h=n.multMatVec(f,
      u);u=n.multMatVec(e,
      h);this.setPosition(i.x+u[
        0
      ],
      i.y+u[
        1
      ]);this.setRotation(r);this.groupMode()&&this._ent.ents().forEach(function(t){
        varu=[
          t.x()-i.x,
          t.y()-i.y
        ],
        h=n.multMatVec(f,
        u),
        o;u=n.multMatVec(e,
        h);o=n.degToRad(t.rotation())+r-s;t.set_rotation(n.radToDeg(o));t.set_x(i.x+u[
          0
        ]);t.set_y(i.y+u[
          1
        ])
      })
    },
    u.prototype.groupMode=function(){
      returnthis.ent()instanceofn.EntityGroup
    },
    u.prototype.setSizeAboutCenter=function(n,
    t){
      varr=this._ent.constrainSize(n,
      t,
      !0),
      f=this.width(),
      e=this.height(),
      o=this._g.getRotation(),
      i=newKinetic.Transform,
      u;i.translate(this.x(),
      this.y());i.rotate(o);i.translate(f/2,
      e/2);i.translate(-r[
        0
      ]/2,
      -r[
        1
      ]/2);u=i.getTranslation();this.setPosition(u.x,
      u.y);this.setSize(r[
        0
      ],
      r[
        1
      ])
    },
    u.prototype.constrainRotation=function(t){
      vari=t*8/n.TAU,
      r=Math.round(i);returnMath.abs(i-r)<n.ROTATION_SNAP&&(i=r),
      i*n.TAU/8
    },
    u.prototype.localDragBoundFunc=function(t,
    i){
      varr=this;returnfunction(u,
      f){
        varo=n.copyTransform(t.getAbsoluteTransform()),
        e,
        s;returno.invert(),
        o.translate(u.x,
        u.y),
        e=o.getTranslation(),
        e.x-=t.getOffsetX(),
        e.y-=t.getOffsetY(),
        e=i.call(r,
        e,
        f),
        s=n.copyTransform(t.getAbsoluteTransform()),
        e.x+=t.getOffsetX(),
        e.y+=t.getOffsetY(),
        s.translate(e.x,
        e.y),
        s.getTranslation()
      }
    },
    u.prototype.setLocalPosition=function(t,
    i){
      varu=this._g.getTransform(),
      r=n.multMatVec(u,
      [
        t,
        i
      ]);this.setPosition(r[
        0
      ],
      r[
        1
      ])
    },
    u.prototype.setPosition=function(n,
    t){
      if(this.groupMode()){
        vari=n-this.x(),
        r=t-this.y();this.ent().ents().forEach(function(n){
          n.set_x(n.x()+i);n.set_y(n.y()+r)
        })
      }this._x.set(n);this._y.set(t)
    },
    u.prototype.setSize=function(n,
    t){
      this._width.set(n);this._height.set(t)
    },
    u.prototype.setRotation=function(t){
      this._rotation.set(n.radToDeg(t))
    },
    u.prototype.update=function(){
      varu=this.width(),
      r=this.height(),
      t=this.topOffset(),
      f,
      e;this._rect.setY(t);this._rect.setSize(u,
      r-t);this._del.setPosition(-i,
      (t+r)/2);this._rot.setPosition(u+i,
      (t+r)/2);this._tl.setPosition(0,
      t);this._tr.setPosition(u,
      t);this._bl.setPosition(0,
      r);this._br.setPosition(u,
      r);f=this.x();e=this.y();this._g.setPosition(f,
      e);this._g.setRotation(n.degToRad(this._rotation.value()))
    },
    u
  }(),
  u;n.DragHandle=f;u=function(){
    functiont(t,
    i){
      varr=this,
      u;this._view=t;this._parent=i;this._view.bg().on(n.CLICKY_EVENTS,
      function(n){
        n.preventDefault();r._dragStarted=!0
      });n.END_CLICKY_EVENTS.split(" ").forEach(function(n){
        document.addEventListener(n,
        function(){
          r.onEndDrag()
        })
      });u=!1;this._parent.getStage().on("mousemove touchmove",
      function(){
        varo,
        f,
        s,
        h;if(r._dragStarted&&!u){
          u=!0;o=r._parent.getStage().getPointerPosition();f=n.copyTransform(r._parent.getAbsoluteTransform());f.invert();f.translate(o.x,
          o.y);vare=f.getTranslation(),
          t=e.x,
          i=e.y;r._selectRec?(t>r._initX&&(t=r._initX),
          i>r._initY&&(i=r._initY),
          s=Math.abs(Math.abs(e.y)-Math.abs(r._initY)),
          h=Math.abs(Math.abs(e.x)-Math.abs(r._initX)),
          r._selectRec.setHeight(s),
          r._selectRec.setWidth(h),
          r._selectRec.setX(t),
          r._selectRec.setY(i),
          r._view._draw()): (r._initX=t,
          r._initY=i,
          r._selectRec=newKinetic.Rect({
            x: t,
            y: i,
            width: 0,
            height: 0,
            fill: "#009ddc",
            opacity: .5
          }),
          r._parent.add(r._selectRec));setTimeout(function(){
            u=!1
          },
          0)
        }
      })
    }returnt.prototype.onEndDrag=function(){
      vari;if(this._dragStarted=!1,
      this._selectRec){
        varn=this._selectRec.getPosition(),
        t=this._view.curProductLocation().printLocations[
          0
        ],
        r=t.xStartCoord/t.scaleRatio,
        u=t.yStartCoord/t.scaleRatio;n.x-=r;n.y-=u;i={
          x: n.x,
          y: n.y,
          width: this._selectRec.getWidth(),
          height: this._selectRec.getHeight()
        };this._selectRec.remove();this._selectRec=null;this._view.selectInRect(i)
      }
    },
    t
  }();n.DragSelectBox=u
}(Uber||(Uber={
  
})),
function(n){
  vart=function(t){
    functioni(n,
    i){
      t.call(this,
      n);this._ents=i;this._constrain=!0;varr=this.bbox();this._x=r.left;this._y=r.top;this._w=r.right-r.left;this._h=r.bottom-r.top;this._r=0;this._sizeBounds=this.calcSizeBounds()
    }return__extends(i,
    t),
    i.prototype.node=function(){
      returnnull
    },
    i.prototype.snap=function(){
      return!1
    },
    i.prototype.ents=function(){
      returnthis._ents
    },
    i.prototype.rotation=function(){
      returnthis._r
    },
    i.prototype.bbox=function(){
      varf,
      i;if(!this._ents)return{
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        horzCenter: 0,
        vertCenter: 0
      };varn=Number.MAX_VALUE,
      r=Number.MIN_VALUE,
      t=Number.MAX_VALUE,
      u=Number.MIN_VALUE;for(f=0;f<this._ents.length;f++)i=this._ents[
        f
      ].bbox(),
      n=Math.min(i.top,
      n),
      r=Math.max(i.bottom,
      r),
      t=Math.min(i.left,
      t),
      u=Math.max(i.right,
      u);return{
        left: t,
        top: n,
        right: u,
        bottom: r,
        horzCenter: t+(u-t)/2,
        vertCenter: n+(r-n)
      }
    },
    i.prototype.alignCenter=function(){
      vart=this._view.curProductLocation().printLocations[
        0
      ].width,
      i=this.bbox(),
      n=this.x()+(t/2-i.horzCenter),
      r=n-this._x;this._ents.forEach(function(n){
        n.set_x(n.x()+r)
      });this.set_x(n)
    },
    i.prototype.centerAlignEnts=function(){
      varn=this.bbox();this._ents.forEach(function(t){
        vari=t.bbox(),
        r=t.x()+(n.horzCenter-i.horzCenter);t.set_x(r)
      })
    },
    i.prototype.leftAlignEnts=function(){
      varn=this.x();this._ents.forEach(function(t){
        t.set_x(n)
      })
    },
    i.prototype.rightAlignEnts=function(){
      varn=this.bbox();this._ents.forEach(function(t){
        vari=n.right-t.width();t.set_x(i)
      })
    },
    i.prototype.contains=function(n){
      if(!this._ents)return!1;for(vart=0;t<this._ents.length;t++)if(this._ents[
        t
      ]===n)return!0;return!1
    },
    i.prototype.constrainSize=function(n,
    t,
    i){
      varr=this.sizeBounds(),
      u;returnn<r.minWidth&&(n=r.minWidth),
      t<r.minHeight&&(t=r.minHeight),
      n>r.maxWidth&&(n=r.maxWidth),
      t>r.maxHeight&&(t=r.maxHeight),
      this._constrain&&(u=this.width()/this.height(),
      n/t!=u&&(i?t=n/u: n=t*u)),
      [
        n,
        t
      ]
    },
    i.prototype.sizeBounds=function(){
      returnthis._sizeBounds
    },
    i.prototype.onDeselected=function(){
      this._ents&&this._ents.forEach(function(n){
        n.onDeselected()
      })
    },
    i.prototype.remove=function(){
      varn=this;this._ents&&this._ents.forEach(function(t){
        n._view.removeEntity(t)
      })
    },
    i.prototype.set_x=function(n){
      this._ents&&this.fire("x",
      n)&&(this._x=n,
      this._view._draw())
    },
    i.prototype.set_y=function(n){
      this._ents&&this.fire("y",
      n)&&(this._y=n,
      this._view._draw())
    },
    i.prototype.set_width=function(n){
      vari,
      r,
      t;if(this._ents&&(i=this.constrainSize(n,
      this._h,
      !0),
      this.fire("width",
      i[
        0
      ]))&&i[
        0
      ]!==0&&this._w!==0){
        for(r=i[
          0
        ]/this._w,
        this._w=i[
          0
        ],
        this.fire("height",
        i[
          1
        ]),
        this._h=i[
          1
        ],
        t=0;t<this._ents.length;t++){
          varu=this._ents[
            t
          ].x(),
          e=u-this._x,
          f=this._ents[
            t
          ].y(),
          o=f-this._y;this._ents[
            t
          ].set_width(this._ents[
            t
          ].width()*r);this._ents[
            t
          ].set_x(u+e*(r-1));this._ents[
            t
          ].set_y(f+o*(r-1))
        }this._view._draw()
      }
    },
    i.prototype.set_height=function(n){
      vari,
      r,
      t;if(this._ents&&(i=this.constrainSize(this._w,
      n,
      !1),
      this.fire("height",
      i[
        1
      ])))for(r=i[
        1
      ]/this._h,
      this._h=i[
        1
      ],
      this.fire("width",
      i[
        0
      ]),
      this._w=i[
        0
      ],
      t=0;t<this._ents.length;t++){
        varu=this._ents[
          t
        ].x(),
        e=u-this._x,
        f=this._ents[
          t
        ].y(),
        o=f-this._y;this._ents[
          t
        ].set_width(this._ents[
          t
        ].width()*r);this._ents[
          t
        ].set_x(u+e*(r-1));this._ents[
          t
        ].set_y(f+o*(r-1))
      }
    },
    i.prototype.set_rotation=function(n){
      this._ents&&this.fire("rotation",
      n)&&(this.fire("centeredRotation",
      n),
      this._r=n)
    },
    i.prototype.set_centeredRotation=function(t){
      varr,
      c;if(this._ents&&(r=n.degToRad(t),
      this.fire("rotation",
      t))){
        this.fire("centeredRotation",
        r);varl=this.width(),
        a=this.height()+this.topOffset(),
        e=n.degToRad(this.rotation()),
        v=r-e,
        o=newKinetic.Transform;o.translate(this.x(),
        this.y());o.rotate(e);varh=n.multMatVec(o,
        [
          l/2,
          a/2
        ]),
        i={
          x: h[
            0
          ],
          y: h[
            1
          ]
        },
        u=[
          this.x()-i.x,
          this.y()-i.y
        ],
        f=newKinetic.Transform,
        s=newKinetic.Transform;f.rotate(e);f.invert();s.rotate(r);c=n.multMatVec(f,
        u);u=n.multMatVec(s,
        c);this.set_x(i.x+u[
          0
        ]);this.set_y(i.y+u[
          1
        ]);this.set_rotation(t);this.ents().forEach(function(t){
          varr=[
            t.x()-i.x,
            t.y()-i.y
          ],
          e=n.multMatVec(f,
          r),
          u;r=n.multMatVec(s,
          e);u=n.degToRad(t.rotation())+v;t.set_rotation(n.radToDeg(u));t.set_x(i.x+r[
            0
          ]);t.set_y(i.y+r[
            1
          ])
        })
      }
    },
    i.prototype.set_topOffset=function(){
      
    },
    i.prototype.calcSizeBounds=function(){
      vart=this._view.curProductLocation().printLocations[
        0
      ],
      i=0,
      r,
      u;returnthis.ents().forEach(function(t){
        varr=0;tinstanceofn.TextEntity?r=n.MIN_TEXT_SIZE/t.size(): (r=n.MIN_SIZE/t.height(),
        i=Math.max(i,
        r),
        r=n.MIN_SIZE/t.width());i=Math.max(i,
        r)
      }),
      this._constrain?(r=this.width()/this.height(),
      u=t.width/t.height,
      r>u?{
        minWidth: this.width()*i,
        minHeight: this.height()*i,
        maxWidth: t.width,
        maxHeight: t.width/r
      }: {
        minWidth: this.width()*i,
        minHeight: this.height()*i,
        maxWidth: t.height*r,
        maxHeight: t.height
      }): {
        minWidth: n.MIN_SIZE,
        minHeight: n.MIN_SIZE,
        maxWidth: t.width,
        maxHeight: t.height
      }
    },
    i
  }(n.Entity);n.EntityGroup=t
}(Uber||(Uber={
  
})),
function(n){
  vari=[
    "Standard",
    "Script/Formal",
    "Block/Collegiate",
    "Greek",
    "Cultural/Worldly",
    "Novelty/Fun",
    "Retro/Era",
    "Distressed",
    "Futuristic",
    "Handwriting"
  ],
  r=function(){
    functioni(i,
    r,
    u){
      varf=this;this._elem=i;this._onShowDlg=u;this._dlg===undefined&&(this._dlg=newt(r,
      function(n){
        f.set(n);f._onchange&&f._onchange(f._font)
      }));n.onClick(i.parentElement,
      function(){
        f._onShowDlg&&f._onShowDlg();f._dlg.show()
      })
    }returni.prototype.show=function(){
      this._dlg.show()
    },
    i.prototype.hide=function(){
      this._dlg.hide()
    },
    i.prototype.onchange=function(n){
      this._onchange=n
    },
    i.prototype.set=function(t){
      this._font=""+t;this._elem.src=n.API.fontPreviewUrl(this._font)
    },
    i.prototype.get=function(){
      returnthis._font
    },
    i
  }(),
  t;n.FontPickerView=r;t=function(t){
    functionr(i,
    r){
      varu=this;t.call(this,
      "FontPickerDialog",
      i);this._onSelect=r;this._categoryList=this.$(".categoryList");this._fontList=this.$(".fontList");n.onClick(this.$(".dlgCloseButton"),
      function(){
        u.hide()
      });this.populateCategories();this.showCategory(n.DEFAULT_FONT_CATEGORY)
    }return__extends(r,
    t),
    r.prototype.populateCategories=function(){
      for(varn=0;n<i.length;++n)this.addCategory(n,
      i[
        n
      ])
    },
    r.prototype.addCategory=function(t,
    i){
      varr=this,
      u=n.makeAnchor(i,
      "category c"+t,
      function(){
        r.showCategory(t)
      });this._categoryList.appendChild(u)
    },
    r.prototype.showCategory=function(t){
      vari=this;this.$(".c"+n.DEFAULT_FONT_CATEGORY).classList.remove("selected");this.$(".c"+t).classList.add("selected");n.DEFAULT_FONT_CATEGORY=t;n.API.fonts(t,
      function(n){
        i.populateFonts(n)
      })
    },
    r.prototype.populateFonts=function(n){
      this._fontList.innerHTML="";for(vart=0;t<n.length;++t)this.addFont(n[
        t
      ])
    },
    r.prototype.addFont=function(t){
      varu=this,
      i=n.makeAnchor("",
      "font",
      function(){
        u.selectFont(t.fontName)
      }),
      r=document.createElement("img");r.src=n.API.fontPreviewUrl(t.fontName);i.appendChild(r);this._fontList.appendChild(i)
    },
    r.prototype.selectFont=function(t){
      n.DEFAULT_FONT=t;this._onSelect(t)
    },
    r
  }(n.Dialog);n.FontPickerDialog=t
}(Uber||(Uber={
  
})),
function(n){
  vart=function(t){
    functioni(){
      varu=this,
      i,
      r;t.call(this,
      "MenuBar");this._elems={
        
      };for(iinn.PANES)r="."+i,
      n.PANES.hasOwnProperty(i)&&this.hasChild(r)&&this.initItem(i,
      this.$(r));n.onClick(this.$(".buyLink"),
      function(){
        u.onBuy()
      })
    }return__extends(i,
    t),
    i.prototype.setSelected=function(n){
      this.elem().classList.remove("active");this._selected&&this._selected.parentElement.classList.remove("selected");vart=this._elems[
        n
      ];t&&(this._selected=t,
      this._selected.parentElement.classList.add("selected"),
      this.elem().classList.add("active"))
    },
    i.prototype.initItem=function(t,
    i){
      varr=this;this._elems[
        t
      ]=i;n.onClick(i,
      function(){
        r.onNav(t)
      })
    },
    i
  }(n.TemplateView);n.MenuBar=t
}(Uber||(Uber={
  
})),
function(n){
  vart=function(t){
    functioni(i){
      t.call(this,
      "IntroPane",
      i,
      !1);n.onClick(this.$(".image"),
      function(){
        i.showPane("addImage")
      });n.onClick(this.$(".text"),
      function(){
        i.showPane("addText")
      });n.onClick(this.$(".product"),
      function(){
        i.showPane("editProduct")
      });n.onClick(this.$(".templates"),
      function(){
        newn.TemplatesDialog(i).show()
      })
    }return__extends(i,
    t),
    i
  }(n.CloseablePane);n.IntroPane=t
}(Uber||(Uber={
  
})),
function(n){
  vart=function(t){
    functioni(i){
      t.call(this,
      "ContinuePane",
      i,
      !1);n.onClick(this.$(".image"),
      function(){
        i.showPane("addImage")
      });n.onClick(this.$(".text"),
      function(){
        i.showPane("addText")
      });n.onClick(this.$(".product"),
      function(){
        i.showPane("editProduct")
      })
    }return__extends(i,
    t),
    i
  }(n.CloseablePane);n.ContinuePane=t
}(Uber||(Uber={
  
})),
function(n){
  vart=function(t){
    functioni(i,
    r){
      varu=this;t.call(this,
      "ContinueDialog");this._continue=i;this._startnew=r;n.onClick(this.$(".continue"),
      function(){
        u.hide();u._continue()
      });n.onClick(this.$(".startnew"),
      function(){
        u.hide();u._startnew()
      })
    }return__extends(i,
    t),
    i.prototype.show=function(){
      t.prototype.show.call(this)
    },
    i.prototype.hide=function(){
      t.prototype.hide.call(this)
    },
    i
  }(n.Dialog);n.ContinueDialog=t
}(Uber||(Uber={
  
})),
function(n){
  vart=function(t){
    functionr(i){
      varr=this;t.call(this,
      "AddImagePane",
      i);this._ctx=i;this._container=this.$(".container");n.onClick(this.$(".clipart"),
      function(){
        r.showClipArtCatalog()
      });n.onClick(this.$(".upload"),
      function(){
        r.showUploadImage()
      });n.onClick(this.$(".myimages"),
      function(){
        r._ctx.requireLogin(function(){
          r.showMyImages()
        },
        function(){
          r._ctx.showPane("continue")
        })
      });this._clipartButton=this.$(".clipArtCatalog");this._myimagesButton=this.$(".myImages");n.onClick(this._clipartButton,
      function(){
        r.showClipArtCatalog()
      });n.onClick(this.$(".uploadImage"),
      function(){
        r.showUploadImage()
      });n.onClick(this._myimagesButton,
      function(){
        r._ctx.requireLogin(function(){
          r.showMyImages()
        },
        function(){
          r._ctx.showPane("continue")
        })
      })
    }return__extends(r,
    t),
    r.prototype.showClipArtCatalog=function(){
      this.showView(newi(this._ctx));this._clipartButton.classList.add("selected");this._myimagesButton.classList.remove("selected")
    },
    r.prototype.showUploadImage=function(){
      vart=this;newo(function(i,
      r,
      u){
        varf=t._ctx.productView(),
        e=newn.ImageEntity(f);e.initFromUpload(i,
        r,
        u);f.addEntity(e);f.select(e);t.showMyImages()
      }).show()
    },
    r.prototype.showMyImages=function(){
      this.showView(news(this._ctx));this._clipartButton.classList.remove("selected");this._myimagesButton.classList.add("selected")
    },
    r.prototype.showView=function(n){
      this.elem().classList.add("showMain");this._container.innerHTML="";this._container.appendChild(n.elem())
    },
    r
  }(n.CloseablePane);n.AddImagePane=t;vari=function(t){
    functioni(i){
      varu=this;t.call(this,
      "ClipArtCatalog");this._ctx=i;this._container=this.$(".container");varr=this.$(".searchField"),
      f=this.$(".searchForm"),
      e=this.$(".searchButton");n.onSubmit(f,
      e,
      function(){
        u.clipartList(null,
        r.value);r.blur()
      });this.browseByCategory()
    }return__extends(i,
    t),
    i.prototype.browseByCategory=function(){
      varn=this;this.showView(newu(function(t){
        n.subcategoryList(t)
      },
      function(t){
        n.clipartList(null,
        t)
      }))
    },
    i.prototype.subcategoryList=function(n){
      vart=this;this.showView(newf(n,
      function(i){
        t.clipartList(n,
        i)
      },
      function(){
        t.browseByCategory()
      }))
    },
    i.prototype.clipartList=function(t,
    i){
      varr=this;this.showView(newe(t,
      i,
      function(t){
        vari=r._ctx.productView(),
        u=newn.ClipartEntity(i);u.createFromClipart(t);i.addEntity(u);i.select(u)
      },
      function(n){
        r.subcategoryList(n)
      }))
    },
    i.prototype.showView=function(n){
      this._container.innerHTML="";this._container.appendChild(n.elem())
    },
    i
  }(n.TemplateView),
  r=[
    {
      id: "Design Elements",
      text: "Design Elements"
    },
    {
      id: "Animals",
      text: "Animals"
    },
    {
      id: "Holidays",
      text: "Holidays"
    },
    {
      id: "Transportation",
      text: "Transportation"
    },
    {
      id: "Sports and Recreation",
      text: "Sports"
    },
    {
      id: "Religion",
      text: "Religion"
    },
    {
      id: "Signs and Symbols",
      text: "Shapes / Symbols"
    },
    {
      id: "Food and Drink",
      text: "Food & Drink"
    },
    {
      id: "Nature-Geography",
      text: "Nature / Geography"
    },
    {
      id: "Greek",
      text: "Fraternities & Sororities"
    },
    {
      id: "Government",
      text: "Government"
    },
    {
      id: "Occupations",
      text: "Occupations"
    },
    {
      id: "Entertainment",
      text: "Music & Entertainment"
    },
    {
      id: "Technology",
      text: "Technology"
    }
  ],
  u=function(t){
    functioni(n,
    i){
      varu=this;t.call(this,
      "BrowseByCategory");this._scroller=this.$(".scroller");r.forEach(function(t){
        u.addButton(t,
        n)
      });this.addButtonRaw("Popular",
      "popular",
      null,
      function(){
        i("popular")
      })
    }return__extends(i,
    t),
    i.prototype.addButton=function(n,
    t){
      this.addButtonRaw(n.text,
      n.id.toLowerCase().replace(//g,
      "-"),
      n.id+".png",
      function(){
        t(n.id)
      })
    },
    i.prototype.addButtonRaw=function(t,
    i,
    r,
    u){
      varf=n.makeAnchor(t,
      "categoryButton "+i,
      u);r&&(f.style.backgroundImage=r);this._scroller.appendChild(f)
    },
    i
  }(n.TemplateView),
  f=function(t){
    functioni(i,
    r,
    u){
      varf=this;t.call(this,
      "CategoryList");this._scroller=this.$(".scroller");this.$(".caption").textContent=i;n.onClick(this.$(".uplink"),
      function(){
        u()
      });n.API.clipartList(i,
      function(n){
        n.forEach(function(n){
          f.addItem(n,
          r)
        })
      })
    }return__extends(i,
    t),
    i.prototype.addItem=function(t,
    i){
      varr=n.makeAnchor(t.name,
      "item",
      function(){
        i(t.keyword)
      });this._scroller.appendChild(r)
    },
    i
  }(n.TemplateView),
  e=function(t){
    functioni(i,
    r,
    u,
    f){
      vare=this;if(t.call(this,
      "ClipartList"),
      this._scroller=this.$(".scroller"),
      i){
        this.$(".uplink").style.display="inline";this.$(".caption").textContent=i;n.onClick(this.$(".uplink"),
        function(){
          f(i)
        })
      }n.API.clipartSearch(r,
      function(n){
        if(n.length==0){
          e.showNoResultsFound();return
        }n.forEach(function(n){
          e.addItem(n,
          u)
        })
      })
    }return__extends(i,
    t),
    i.prototype.addItem=function(t,
    i){
      varr=n.makeAnchor("",
      "item",
      function(){
        i(t)
      });r.style.backgroundImage="url("+n.API.clipartPreviewUrl(t.fileName)+")";this._scroller.appendChild(r)
    },
    i.prototype.showNoResultsFound=function(){
      varn=document.createElement("div");n.textContent="No results found.";this._scroller.appendChild(n)
    },
    i
  }(n.TemplateView),
  o=function(n){
    functiont(t){
      n.call(this,
      "UploadDialog");this._onupload=t;this._frame=this.$(".frame")
    }return__extends(t,
    n),
    t.prototype.show=function(){
      vart=this;n.prototype.show.call(this);window.finishUploadAndAddImage=function(n,
      i,
      r,
      u){
        t._onupload(n,
        i,
        r,
        u);t.hide()
      };this._frame.src="/uploadimage"
    },
    t.prototype.hide=function(){
      n.prototype.hide.call(this);deletewindow.finishUploadAndAddImage
    },
    t
  }(n.Dialog),
  s=function(t){
    functioni(i){
      varr=this;t.call(this,
      "MyImages");this._ctx=i;this._container=this.$(".container");n.API.myImages(function(n){
        if(r._container.innerHTML="",
        n.length==0){
          r.showNoImagesFound();return
        }for(vart=0;t<n.length;++t)r.addItem(n[
          t
        ])
      })
    }return__extends(i,
    t),
    i.prototype.addItem=function(t){
      varr=this,
      i=document.createElement("img");i.className="item";i.src=t.previewUrl;n.onClick(i,
      function(){
        vari=r._ctx.productView(),
        u=newn.ImageEntity(i);u.initFromMyImage(t);i.addEntity(u);i.select(u)
      });this._container.appendChild(i)
    },
    i.prototype.showNoImagesFound=function(){
      varn=document.createElement("div");n.textContent="You don't have any saved images.";this._container.appendChild(n)
    },
    i
  }(n.TemplateView)
}(Uber||(Uber={
  
})),
function(n){
  vart=function(t){
    functioni(i){
      varr=this;t.call(this,
      "AddTextPane",
      i);this._ctx=i;this._textArea=this.$(".text");n.limitCharacterCount(this._textArea,
      210);n.onClick(this.$(".addText"),
      function(){
        varf=n.trimAllWhitespace(r._textArea.value),
        t,
        u;if(f.length==0){
          r.showError();return
        }t=i.productView();u=newn.TextEntity(t);u.createNew(f,
        n.DEFAULT_FONT);t.addEntity(u);t.select(u)
      })
    }return__extends(i,
    t),
    i.prototype.show=function(){
      t.prototype.show.call(this);this._textArea.value="";this.hideError()
    },
    i.prototype.showError=function(){
      this._textArea.classList.add("input-validation-error")
    },
    i.prototype.hideError=function(){
      this._textArea.classList.remove("input-validation-error")
    },
    i
  }(n.CloseablePane);n.AddTextPane=t
}(Uber||(Uber={
  
})),
function(n){
  vari=function(i){
    functionr(t){
      varr=this,
      u,
      f;i.call(this,
      "SaveDesignPane",
      t);this._ctx=t;this._scroller=this.$(".scroller");this._nameInput=this.$(".designNameInput");this._notesTextArea=this.$(".notesText");n.limitCharacterCount(this._notesTextArea,
      999);this._notesTextArea.onchange=function(){
        t.setDesignNotes(r._notesTextArea.value)
      };this._notesToggle=this.$(".notesToggle");this._notesToggle.onclick=function(){
        r._notesToggle.classList.toggle("opened");r._notesTextArea.classList.toggle("opened")
      };this._message=this.$(".message");u=this.$(".form");f=this.$(".saveButton");n.onSubmit(u,
      f,
      function(){
        t.setDesignNotes(r._notesTextArea.value);r._nameInput.blur();varn=r._nameInput.value;if(n.trim().length==0){
          r._nameInput.classList.add("input-validation-error");return
        }if(r._nameInput.classList.remove("input-validation-error"),
        r.hideSuccess(),
        r.hideError(),
        t.product().isDiscontinued){
          r.showError("This item has been discontinued. Please switch to a different product before continuing.");return
        }if(t.productColor().isDiscontinued){
          r.showError("This product is no longer available in "+t.productColor().colorName+". Please choose a different color before saving your design.");return
        }t.saveDesign(n,
        function(n,
        i,
        u,
        f,
        e,
        o){
          n?(t.setUploadedImagesFilePath(o),
          r.showSuccess(),
          r.renderDesigns()): f?r.showDesignLocked(e): r.showError(u)
        })
      });this._loadButton=this.$(".buttons .load");this._saveButton=this.$(".buttons .save");this._loadPane=this.$(".loadPane");this._savePane=this.$(".savePane");n.onClick(this._loadButton,
      function(){
        r.showLoad()
      });n.onClick(this._saveButton,
      function(){
        r.showSave()
      });this.showSave()
    }return__extends(r,
    i),
    r.prototype.show=function(){
      varn=this;this._ctx.requireLogin(function(){
        n.renderDesigns()
      },
      function(){
        n._ctx.showPane("continue")
      });i.prototype.show.call(this);this._nameInput.value=this._ctx.name();this._notesTextArea.value=this._ctx.designNotes();this.hideSuccess();this.hideError()
    },
    r.prototype.showLoad=function(){
      this._loadButton.parentElement.classList.add("selected");this._loadPane.classList.add("active");this._saveButton.parentElement.classList.remove("selected");this._savePane.classList.remove("active")
    },
    r.prototype.showSave=function(){
      this._loadButton.parentElement.classList.remove("selected");this._loadPane.classList.remove("active");this._saveButton.parentElement.classList.add("selected");this._savePane.classList.add("active");this._ctx.designNotes().length>0&&this.showNotes();this.hideSuccess();this.hideError()
    },
    r.prototype.showError=function(n){
      this._message.classList.add("error");this.showMessage(n)
    },
    r.prototype.hideError=function(){
      this._message.classList.remove("error");this.hideMessage()
    },
    r.prototype.showSuccess=function(){
      this._message.classList.add("success");this.showMessage("Your design has been saved.")
    },
    r.prototype.hideSuccess=function(){
      this._message.classList.remove("success");this.hideMessage()
    },
    r.prototype.showMessage=function(n){
      this._message.textContent=n;this._message.style.display="block"
    },
    r.prototype.hideMessage=function(){
      this._message.style.display="none"
    },
    r.prototype.showNotes=function(){
      this._notesToggle.classList.add("opened");this._notesTextArea.classList.add("opened")
    },
    r.prototype.renderDesigns=function(){
      vart=this;this._scroller.innerHTML="";n.API.designs(function(n){
        if(n&&n.length==0){
          t.showNoSavedDesigns();return
        }for(variinn)t.addItem(n[
          i
        ])
      })
    },
    r.prototype.addItem=function(n){
      vari=newt(n,
      this._ctx);this._scroller.appendChild(i.elem())
    },
    r.prototype.showNoSavedDesigns=function(){
      varn=document.createElement("div");n.textContent="You don't have any saved designs.";this._scroller.appendChild(n)
    },
    r.prototype.showDesignLocked=function(n){
      vari,
      t,
      r;this._message.classList.add("error");i=document.createTextNode("You are trying to overwrite a design from a previous order. Please choose a new name or place a re-order from your ");t=document.createElement("a");t.href=n;t.textContent="My Account";r=document.createTextNode(".");this._message.appendChild(i);this._message.appendChild(t);this._message.appendChild(r);this._message.style.display="block"
    },
    r
  }(n.CloseablePane),
  t;n.SaveDesignPane=i;t=function(t){
    functioni(i,
    r){
      t.call(this,
      "DesignItem");this.$(".thumbnail").src=i.designThumbUrl;this.$(".name").textContent=i.name;this.$(".method").textContent=i.printMethod;this.$(".summary").textContent=i.decorationSummary;n.onClick(this.elem(),
      function(){
        r.loadDesign(i.designId)
      })
    }return__extends(i,
    t),
    i
  }(n.TemplateView)
}(Uber||(Uber={
  
})),
function(n){
  vart=function(t){
    functioni(i,
    r){
      varu=this;t.call(this,
      r);this._ctx=i;this._views=[
        
      ];this._binding=newn.Binding;this._binding.bind("centeredRotation",
      newn.NumberInputView(this.$(".rotInput"),
      -360,
      360,
      1,
      0));this._binding.bind("centeredRotation",
      newn.NumberInputView(this.$(".rotBox"),
      -360,
      360,
      1,
      0));this._binding.bind("snap",
      newn.CheckboxInputView(this.$(".snap")));n.onClick(this.$(".bringForward"),
      function(){
        u._ent.bringForward()
      });n.onClick(this.$(".sendBackward"),
      function(){
        u._ent.sendBackward()
      });n.onClick(this.$(".alignCenter"),
      function(){
        u._ent.alignCenter()
      });this._addSection("position");this._editToolBar=this.$(".edit-tools");this._glass=this.$(".EditPaneGlass");n.onClick(this._glass,
      function(){
        u.closePortraitSections();u.hideDialogViews()
      })
    }return__extends(i,
    t),
    i.prototype.entity=function(){
      returnthis._ent
    },
    i.prototype.setEntity=function(n){
      this._ent=n;this._binding.setTarget(n)
    },
    i.prototype._addSection=function(t,
    i){
      varr=this,
      u,
      f;i===void0&&(i=undefined);u=this.$("a."+t);f=this.$(".section."+t);n.onClick(u,
      function(){
        r._selectedButton&&r._selectedButton!==u&&(r._selectedButton.classList.remove("active"),
        r._selectedButton.parentElement.classList.remove("selected"));r._selectedSection&&r._selectedSection!==f&&r._selectedSection.classList.remove("active");for(vart=0;t<r._views.length;t++)r._views[
          t
        ].hide();r._selectedButton=u;r._selectedSection=f;r._selectedButton.classList.contains("active")||r._selectedSection.classList.contains("active")?(r._selectedButton.classList.remove("active"),
        r._selectedButton.parentElement.classList.remove("selected"),
        r._selectedSection.classList.remove("active"),
        r._editToolBar.classList.remove("active"),
        r._glass.classList.remove("show")): (r._selectedButton.classList.add("active"),
        r._selectedButton.parentElement.classList.add("selected"),
        r._editToolBar.classList.add("active"),
        i&&iinstanceofn.FontPickerView?i.show(): i&&iinstanceofn.InkView?i.show(): i&&iinstanceofn.StrokeInkView?(i.tryCreateDialog(),
        i.show()): i&&iinstanceofn.ShadowInkView?(i.tryCreateDialog(),
        i.show()): i&&iinstanceofn.InksView?(i.tryCreateDialog(),
        i.show()): r._selectedSection.classList.add("active"),
        r._glass.classList.add("show"))
      })
    },
    i.prototype.show=function(){
      
    },
    i.prototype.hide=function(){
      varn=this._ctx.productView();n.selected()==this._ent&&n.select(null)
    },
    i.prototype.context=function(){
      returnthis._ctx
    },
    i.prototype.closeDialogs=function(){
      this.closePortraitSections();this.hideDialogViews();this.hidePortraitToolbar()
    },
    i.prototype.closePortraitSections=function(){
      this._selectedButton&&(this._selectedButton.classList.remove("active"),
      this._selectedButton.parentElement.classList.remove("selected"));this._selectedSection&&this._selectedSection.classList.remove("active");this._editToolBar.classList.remove("active");this._glass.classList.remove("show")
    },
    i.prototype.hidePortraitToolbar=function(){
      this.elem().classList.add("hide-pane")
    },
    i.prototype.hideDialogViews=function(){
      for(varn=0;n<this._views.length;n++)this._views[
        n
      ].hide()
    },
    i
  }(n.TemplateView);n.EditEntityPane=t
}(Uber||(Uber={
  
})),
function(n){
  vart=function(t){
    functioni(i){
      varr=this;t.call(this,
      i,
      "EditTextPane");varu=newn.FontPickerView(this.$(".fontPreview"),
      this.elem(),
      function(){
        r.closeDialogs()
      }),
      f=newn.InkView(this.$(".colorAnchor"),
      i,
      this.elem(),
      function(){
        r.closeDialogs()
      }),
      e=newn.StrokeInkView(this.$(".strokeColorAnchor"),
      i,
      this.elem(),
      function(){
        r.closeDialogs()
      }),
      o=newn.ShadowInkView(this.$(".shadowColorAnchor"),
      i,
      this.elem(),
      function(){
        r.closeDialogs()
      });this._binding.bind("text",
      newn.TextAreaView(this.$(".editor")));this._binding.bind("size",
      newn.NumberInputView(this.$(".sizeInput"),
      n.MIN_TEXT_SIZE,
      n.MAX_TEXT_SIZE,
      .1,
      3,
      1));this._binding.bind("size",
      newn.NumberInputView(this.$(".sizeBox"),
      n.MIN_TEXT_SIZE,
      n.MAX_TEXT_SIZE,
      .1,
      3,
      1));this._binding.bind("tracking",
      newn.ScaledNumberInputView(this.$(".trackingInput"),
      -300,
      1e3,
      10,
      0,
      0,
      10));this._binding.bind("tracking",
      newn.ScaledNumberInputView(this.$(".trackingBox"),
      -300,
      1e3,
      10,
      0,
      0,
      10));this._binding.bind("arc",
      newn.NumberInputView(this.$(".arcInput"),
      -360,
      360,
      1,
      0));this._binding.bind("arc",
      newn.NumberInputView(this.$(".arcBox"),
      -360,
      360,
      1,
      0));this._binding.bind("lineHeight",
      newn.NumberInputView(this.$(".leadingInput"),
      .5,
      3,
      .1,
      2,
      1.22));this._binding.bind("lineHeight",
      newn.NumberInputView(this.$(".leadingBox"),
      .5,
      3,
      .1,
      2,
      1.22));this._binding.bind("horizontalScale",
      newn.ScaledNumberInputView(this.$(".horizontalScaleInput"),
      n.MIN_TEXT_XSCALE,
      n.MAX_TEXT_XSCALE,
      .01,
      0,
      1,
      .01));this._binding.bind("horizontalScale",
      newn.ScaledNumberInputView(this.$(".horizontalScaleBox"),
      n.MIN_TEXT_XSCALE,
      n.MAX_TEXT_XSCALE,
      .01,
      0,
      1,
      .01));this._binding.bind("font",
      u);this._binding.bind("color",
      f);this._binding.bind("stroke",
      e);this._binding.bind("shadow",
      o);vars=this.$(".justifyLeft"),
      c=this.$(".justifyCenter"),
      h=this.$(".justifyRight");this._binding.bind("justification",
      newn.RadioGroupView({
        left: s,
        center: c,
        right: h
      }));this._binding.bind("arc",
      {
        onchange: function(){
          
        },
        set: function(n){
          n==0?(s.disabled=!1,
          h.disabled=!1): (r.entity().set_justification("center"),
          s.disabled=!0,
          h.disabled=!0)
        }
      });this._addSection("text");this._addSection("font",
      u);this._addSection("color",
      f);this._addSection("stroke-color",
      e);this._addSection("shadow-color",
      o);this._addSection("arc");this._addSection("more");this._views.push(u);this._views.push(f);this._views.push(e);this._views.push(o)
    }return__extends(i,
    t),
    i.prototype.hide=function(){
      for(varn=0;n<this._views.length;n++)this._views[
        n
      ].hide();this._selectedButton&&(this._selectedButton.classList.remove("active"),
      this._selectedButton.parentElement.classList.remove("selected"));t.prototype.hide.call(this)
    },
    i
  }(n.EditEntityPane);n.EditTextPane=t
}(Uber||(Uber={
  
})),
function(n){
  vart=function(t){
    functioni(i){
      varu=this,
      r;t.call(this,
      i,
      "EditImagePane");r=newn.InksView(this.$(".inksContainer"),
      i,
      this.elem());this._binding.bind("width",
      this._widthView0=newn.NumberInputView(this.$(".widthInput"),
      n.MIN_SIZE,
      Number.MAX_VALUE,
      .2,
      2));this._binding.bind("width",
      this._widthView1=newn.NumberInputView(this.$(".widthBox"),
      n.MIN_SIZE,
      Number.MAX_VALUE,
      .2,
      2));this._binding.bind("height",
      this._heightView0=newn.NumberInputView(this.$(".heightInput"),
      n.MIN_SIZE,
      Number.MAX_VALUE,
      .2,
      2));this._binding.bind("height",
      this._heightView1=newn.NumberInputView(this.$(".heightBox"),
      n.MIN_SIZE,
      Number.MAX_VALUE,
      .2,
      2));this._binding.bind("inks",
      r);this._binding.bind("constrain",
      newn.CheckboxInputView(this.$(".constrain")));this._binding.bind("constrain",
      {
        onchange: function(){
          
        },
        set: function(n){
          u.updateMaxima(n)
        }
      });this._addSection("color",
      r);this._addSection("size");this._addSection("rotate");this._views.push(r)
    }return__extends(i,
    t),
    i.prototype.setEntity=function(n){
      t.prototype.setEntity.call(this,
      n);this.updateMaxima(n.constrain())
    },
    i.prototype.hide=function(){
      for(varn=0;n<this._views.length;n++)this._views[
        n
      ].hide();this._selectedButton&&(this._selectedButton.classList.remove("active"),
      this._selectedButton.parentElement.classList.remove("selected"));t.prototype.hide.call(this)
    },
    i.prototype.updateMaxima=function(){
      varn=this.entity().sizeBounds();this._widthView0.setMin(n.minWidth);this._widthView0.setMax(n.maxWidth);this._widthView1.setMin(n.minWidth);this._widthView1.setMax(n.maxWidth);this._heightView0.setMin(n.minHeight);this._heightView0.setMax(n.maxHeight);this._heightView1.setMin(n.minHeight);this._heightView1.setMax(n.maxHeight)
    },
    i
  }(n.EditEntityPane);n.EditImagePane=t
}(Uber||(Uber={
  
})),
function(n){
  vart=function(t){
    functioni(i){
      varr=this;t.call(this,
      "EditGroupPane");this._ctx=i;this._binding=newn.Binding;this._binding.bind("centeredRotation",
      newn.NumberInputView(this.$(".rotInput"),
      -360,
      360,
      1,
      0));this._binding.bind("centeredRotation",
      newn.NumberInputView(this.$(".rotBox"),
      -360,
      360,
      1,
      0));this._binding.bind("width",
      this._widthView0=newn.NumberInputView(this.$(".widthInput"),
      n.MIN_SIZE,
      Number.MAX_VALUE,
      .2,
      2));this._binding.bind("width",
      this._widthView1=newn.NumberInputView(this.$(".widthBox"),
      n.MIN_SIZE,
      Number.MAX_VALUE,
      .2,
      2));this._binding.bind("height",
      this._heightView0=newn.NumberInputView(this.$(".heightInput"),
      n.MIN_SIZE,
      Number.MAX_VALUE,
      .2,
      2));this._binding.bind("height",
      this._heightView1=newn.NumberInputView(this.$(".heightBox"),
      n.MIN_SIZE,
      Number.MAX_VALUE,
      .2,
      2));n.onClick(this.$(".alignCenter"),
      function(){
        r.entityGroup().alignCenter()
      });n.onClick(this.$(".leftAlignEnts"),
      function(){
        r.entityGroup().leftAlignEnts();r._ctx.productView().selectGroup(r.entityGroup().ents())
      });n.onClick(this.$(".centerAlignEnts"),
      function(){
        r.entityGroup().centerAlignEnts();r._ctx.productView().selectGroup(r.entityGroup().ents())
      });n.onClick(this.$(".rightAlignEnts"),
      function(){
        r.entityGroup().rightAlignEnts();r._ctx.productView().selectGroup(r.entityGroup().ents())
      })
    }return__extends(i,
    t),
    i.prototype.entityGroup=function(){
      returnthis._entGroup
    },
    i.prototype.setEntityGroup=function(n){
      this._entGroup=n;this._binding.setTarget(n);this.updateMaxima()
    },
    i.prototype.show=function(){
      
    },
    i.prototype.hide=function(){
      vart=this._ctx.productView(),
      i=t.selected();iinstanceofn.EntityGroup&&i===this._entGroup&&t.select(null)
    },
    i.prototype.context=function(){
      returnthis._ctx
    },
    i.prototype.hidePortraitToolbar=function(){
      this.elem().classList.add("hide-pane")
    },
    i.prototype.updateMaxima=function(){
      varn=this.entityGroup().sizeBounds();this._widthView0.setMin(n.minWidth);this._widthView0.setMax(n.maxWidth);this._widthView1.setMin(n.minWidth);this._widthView1.setMax(n.maxWidth);this._heightView0.setMin(n.minHeight);this._heightView0.setMax(n.maxHeight);this._heightView1.setMin(n.minHeight);this._heightView1.setMax(n.maxHeight)
    },
    i
  }(n.TemplateView);n.EditGroupPane=t
}(Uber||(Uber={
  
})),
function(n){
  vari=function(i){
    functionr(t){
      varr=this;i.call(this,
      "EditProductPane",
      t);this._ctx=t;this._productName=this.$(".productName");this._mfgName=this.$(".mfgName");this._sizes=this.$(".sizes");this._fabric=this.$(".fabric");this._description=this.$(".description");this._digitalInks=newn.ProductColorPicker(this.$(".digitalInks"),
      function(t){
        r.updateColor(t,
        n.API.DECORATION_DIGITALPRINT)
      });this._screenInks=newn.ProductColorPicker(this.$(".screenInks"),
      function(t){
        r.updateColor(t,
        n.API.DECORATION_SCREENPRINT)
      });this._embroideryInks=newn.ProductColorPicker(this.$(".embroideryInks"),
      function(t){
        r.updateColor(t,
        n.API.DECORATION_EMBROIDER)
      });this._digitalInkContainer=this.$(".digitalInkContainer");this._screenInkContainer=this.$(".screenInkContainer");this._embroideryInkContainer=this.$(".embroideryInkContainer");n.onClick(this.$(".findProduct"),
      function(){
        r.showProductDialog()
      });this._sizeChartLink=this.$(".sizeChartLink");n.onClick(this._sizeChartLink,
      function(){
        window.open(n.API.sizeChartUrl(r._ctx.product().productId),
        "sizeChart",
        "status=no,toolbar=no,resizable=yes,scrollbars=no,left=530,top=322,directories=no,menubar=no,width=620,height=380")
      })
    }return__extends(r,
    i),
    r.prototype.show=function(){
      i.prototype.show.call(this);this.updateProduct()
    },
    r.prototype.updateProduct=function(){
      varn=this._ctx.product();this._productName.textContent=n.name;this._mfgName.textContent=n.manufacturerName;this._sizes.textContent=this.sizesText(n);this._fabric.textContent=n.fabric;this._description.textContent=n.description;this._sizeChartLink.style.visibility=n.hasSizeChart?"visible": "hidden";this._digitalInks.setColors(n.digitalPrintColors);this._screenInks.setColors(n.screenPrintColors);this._embroideryInks.setColors(n.embroideryColors);this._digitalInkContainer.style.display=n.digitalPrintColors.length>0?"block": "none";this._screenInkContainer.style.display=n.screenPrintColors.length>0?"block": "none";this._embroideryInkContainer.style.display=n.embroideryColors.length>0?"block": "none"
    },
    r.prototype.updateColor=function(n,
    t){
      this._ctx.setProductColor(n,
      t)
    },
    r.prototype.sizesText=function(n){
      vart=n.sizeArray.split(",");returnt.length==1?t[
        0
      ]: t[
        0
      ]+" - "+t[
        t.length-1
      ]
    },
    r.prototype.showProductDialog=function(){
      vari=this,
      r=newt(function(t,
      r,
      u){
        i._ctx.setProduct(t,
        function(){
          i.updateProduct();i.updateColor(n.API.findProductColor(i._ctx.product(),
          r),
          u)
        })
      });r.show()
    },
    r
  }(n.CloseablePane),
  t;n.EditProductPane=i;t=function(n){
    functiont(t){
      n.call(this,
      "ProductDialog");this._swapProduct=t;this._frame=this.$(".frame")
    }return__extends(t,
    n),
    t.prototype.show=function(){
      vart=this;n.prototype.show.call(this);this._frame.onload=function(){
        varn=t._frame.contentWindow.initializeForStudio;n&&n(function(n,
        i,
        r){
          t._swapProduct(n,
          i,
          r);t.hide()
        })
      };this._frame.src="/custom/mens?d=m"
    },
    t
  }(n.Dialog)
}(Uber||(Uber={
  
})),
function(n){
  functioni(n){
    vart=n.value.trim().length==0;returnn.className=t?"invalid": "",
    !t
  }functiono(n){
    vart=e.test(n.value.trim());returnn.className=t?"": "invalid",
    t
  }functionr(n){
    vari=n.value.trim().length<t;returnn.className=i?"invalid": "",
    !i
  }vart=5,
  e=/(?: [
    a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{
      |
    }~-
  ]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?: (?: [
    a-z0-9
  ](?: [
    a-z0-9-
  ]*[
    a-z0-9
  ])?\.)+[
    a-z0-9
  ](?: [
    a-z0-9-
  ]*[
    a-z0-9
  ])?|\[
    (?: (?: 25[
      0-5
    ]|2[
      0-4
    ][
      0-9
    ]|[
      01
    ]?[
      0-9
    ][
      0-9
    ]?)\.){
      3
    }(?: 25[
      0-5
    ]|2[
      0-4
    ][
      0-9
    ]|[
      01
    ]?[
      0-9
    ][
      0-9
    ]?|[
      a-z0-9-
    ]*[
      a-z0-9
    ]: (?: [
      \x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f
    ]|\\[
      \x01-\x09\x0b\x0c\x0e-\x7f
    ])+)\
  ])/,
  s=function(n){
    functiont(t,
    i){
      n.call(this,
      "LoginDialog");this._success=t;this._failure=i;this._desc=this.$(".desc");this._childContainer=this.$(".container");this.showLogin()
    }return__extends(t,
    n),
    t.prototype.show=function(){
      this._sessionId=-1;n.prototype.show.call(this)
    },
    t.prototype.hide=function(){
      this._sessionId==-1?this._failure(): this._success(this._sessionId);n.prototype.hide.call(this)
    },
    t.prototype._showRegister=function(){
      this._desc.textContent="Create An Account";varn=newf(this);this.showView(n);n.focus()
    },
    t.prototype._succeed=function(n){
      this._sessionId=n;this.hide()
    },
    t.prototype.showLogin=function(){
      this._desc.textContent="Log In To Your Account";varn=newu(this);this.showView(n);n.focus()
    },
    t.prototype.showView=function(n){
      this._childContainer.innerHTML="";this._childContainer.appendChild(n.elem())
    },
    t
  }(n.Dialog),
  u,
  f;n.LoginDialog=s;u=function(t){
    functioni(i){
      varu=this,
      r;t.call(this,
      "LoginView");this._dlg=i;this._fail=this.$(".fail");this._form=this.$(".form");this._email=this.$(".email");this._password=this.$(".password");this._register=this.$(".register");n.onClick(this._register,
      function(){
        i._showRegister()
      });r=this.$(".loginButton");n.onSubmit(this._form,
      r,
      function(){
        u.login()
      })
    }return__extends(i,
    t),
    i.prototype.focus=function(){
      this._email.focus()
    },
    i.prototype.login=function(){
      vart=this;n.API.logon(this._email.value,
      this._password.value,
      function(n){
        n.result==1?t._dlg._succeed(n.aid): t._fail.style.visibility="visible"
      })
    },
    i
  }(n.TemplateView);f=function(u){
    functionf(t){
      varr=this,
      i;u.call(this,
      "RegisterView");this._dlg=t;this._fail=this.$(".fail");this._passwordFail=this.$(".passwordFail");this._form=this.$(".form");this._firstName=this.$(".firstName");this._lastName=this.$(".lastName");this._email=this.$(".email");this._phone=this.$(".phone");this._password1=this.$(".password1");this._password2=this.$(".password2");this._promo=this.$(".promo");i=this.$(".registerButton");n.onSubmit(this._form,
      i,
      function(){
        r.register()
      })
    }return__extends(f,
    u),
    f.prototype.focus=function(){
      this._firstName.focus()
    },
    f.prototype.register=function(){
      vart=this;this.validate()&&n.API.create(this._firstName.value,
      this._lastName.value,
      this._email.value,
      this._phone.value,
      this._password1.value,
      this._password2.value,
      this._promo.checked,
      function(n){
        n.result==1?t._dlg._succeed(n.aid): (t._fail.textContent=n.message,
        t._fail.style.display="inline-block")
      })
    },
    f.prototype.validate=function(){
      varn=!0,
      u,
      f,
      e;returni(this._firstName)||(n=!1),
      i(this._lastName)||(n=!1),
      o(this._email)||(n=!1),
      u=r(this._password1),
      f=r(this._password2),
      u||(n=!1),
      f||(n=!1),
      n?(this._fail.textContent="",
      this._fail.style.display="none"): (this._fail.textContent="Please correct the fields in orange.",
      this._fail.style.display="inline-block"),
      e=this._password1.value==this._password2.value,
      e||(n=!1),
      u&&f?e?(this._passwordFail.textContent="",
      this._passwordFail.style.display="none"): (this._passwordFail.textContent="Your passwords do not match.",
      this._passwordFail.style.display="inline-block"): (this._passwordFail.textContent="Your password must be at least "+t+" characters long.",
      this._passwordFail.style.display="inline-block"),
      n
    },
    f
  }(n.TemplateView)
}(Uber||(Uber={
  
})),
function(n){
  vart=function(t){
    functioni(n){
      t.call(this,
      "TemplatesDialog");this._ctx=n;this._scroller=this.$(".scroller");this._breadcrumbs=this.$(".breadcrumbs");this.loadCategories()
    }return__extends(i,
    t),
    i.prototype.loadCategories=function(){
      vart=this;n.API.templateCategories(function(n){
        t.listCategories(n)
      })
    },
    i.prototype.listCategories=function(n,
    t){
      vari=this;this._scroller.innerHTML="";n.forEach(function(n){
        n.parent=t;i.addCategoryItem(n)
      });this.createBreadcrumbs(t)
    },
    i.prototype.addCategoryItem=function(t){
      varu=this,
      i=n.makeAnchor("",
      "item",
      function(){
        t.subcategories&&t.subcategories.length>0?u.listCategories(t.subcategories,
        t): u.loadTemplates(t)
      }),
      r;i.style.backgroundImage="url("+n.API.templateCategoryIcon(t.name)+")";r=document.createElement("span");r.textContent=t.name;i.appendChild(r);this._scroller.appendChild(i)
    },
    i.prototype.loadTemplates=function(t){
      vari=this;n.API.templateSearch(t.keyword,
      function(n){
        i._scroller.innerHTML="";n.forEach(function(n){
          i.addTemplate(n)
        });i.createBreadcrumbs(t)
      })
    },
    i.prototype.addTemplate=function(t){
      vari=this,
      r=n.makeAnchor("",
      "template",
      function(){
        i._ctx.loadTemplate(t.templateId,
        !0);i.hide()
      }),
      u=document.createElement("img");u.src=t.defaultImageZoomUrl;r.appendChild(u);this._scroller.appendChild(r)
    },
    i.prototype.createBreadcrumbs=function(t){
      vare=this,
      r,
      u,
      i,
      f;if(this._breadcrumbs.innerHTML="",
      r=document.createElement("span"),
      r.textContent="All Categories",
      u=n.makeAnchor("",
      "",
      function(){
        e.loadCategories()
      }),
      u.appendChild(r),
      this._breadcrumbs.appendChild(u),
      t){
        for(i=t.parent;i;)this.addBreadcrumb(i),
        i=i.parent;f=document.createElement("span");f.textContent=t.name;this._breadcrumbs.appendChild(f)
      }
    },
    i.prototype.addBreadcrumb=function(t){
      varu=this,
      r=document.createElement("span"),
      i;r.textContent=t.name;i=n.makeAnchor("",
      "",
      function(){
        u.listCategories(t.subcategories,
        t)
      });i.appendChild(r);this._breadcrumbs.appendChild(i)
    },
    i
  }(n.Dialog);n.TemplatesDialog=t
}(Uber||(Uber={
  
})),
function(n){
  vart=function(){
    functiont(n){
      this._objs=[
        
      ];this._ctx=n
    }returnt.prototype.copyToClipboard=function(n){
      this._objs=n
    },
    t.prototype.clearClipboard=function(){
      this._objs=null
    },
    t.prototype.isClipboardEmpty=function(){
      return!(this._objs&&this._objs.length>0)
    },
    t.prototype.pasteFromClipboard=function(t,
    i){
      vare,
      u,
      f,
      r,
      o,
      h,
      l,
      a;if(this._objs.sort(function(n,
      t){
        returnn.depth-t.depth
      }),
      this._objs&&this._objs.length>0){
        for(e=[
          
        ],
        f=0;f<this._objs.length;f++){
          if(this._objs[
            f
          ].imageType){
            o=this._objs[
              f
            ];switch(o.imageType){
              case"upload": r=newn.ImageEntity(this._ctx.productView());r.load(o);this._ctx.productView().addEntity(r);break;case"clipart": r=newn.ClipartEntity(this._ctx.productView());r.load(o);this._ctx.productView().addEntity(r)
            }
          }elseh=this._objs[
            f
          ],
          r=newn.TextEntity(this._ctx.productView()),
          r.load(h),
          this._ctx.productView().addEntity(r);r&&e.push(r)
        }u=newn.EntityGroup(this._ctx.productView(),
        e);varc=this._ctx.productView().curProductLocation().printLocations[
          0
        ],
        s=u.bbox(),
        v=s.right-s.left,
        y=s.bottom-s.top;t=Math.max(0,
        Math.min(t,
        c.width-v));i=Math.max(0,
        Math.min(i,
        c.height-y));l=t-u.x();a=i-u.y();u.ents().forEach(function(n){
          n.set_x(n.x()+l);n.set_y(n.y()+a)
        });u.set_x(t);u.set_y(i);e.length>1?this._ctx.productView().select(u): this._ctx.productView().select(e[
          0
        ])
      }
    },
    t
  }();n.Clipboard=t
}(Uber||(Uber={
  
})),
function(n){
  vart=function(t){
    functioni(n){
      t.call(this,
      "ContextMenu");this._studioCtx=n;this._menuItems=document.createElement("ul");this.elem().appendChild(this._menuItems)
    }return__extends(i,
    t),
    i.prototype.init=function(){
      for(varn=this,
      t;this._menuItems.lastChild;)this._menuItems.removeChild(this._menuItems.lastChild);t=this._studioCtx.productView().selected();t?(this.createMenuItem("Copy",
      "copy",
      function(){
        n.copyToClipboard();n.hide()
      }),
      this.createMenuItem("Cut",
      "cut",
      function(){
        n.copyToClipboard(!0);n.hide()
      }),
      this.createMenuItem("Paste",
      "paste")): (this.createMenuItem("Copy",
      "copy"),
      this.createMenuItem("Cut",
      "cut"),
      this._studioCtx.clipboard().isClipboardEmpty()?this.createMenuItem("Paste",
      "paste"): this.createMenuItem("Paste",
      "paste",
      function(){
        n._studioCtx.clipboard().pasteFromClipboard(n._pasteX,
        n._pasteY);n.hide()
      }))
    },
    i.prototype.showMenu=function(n,
    i,
    r,
    u){
      this._pasteX=r;this._pasteY=u;t.prototype.show.call(this);this.init();this.elem().style.left=n+"px";this.elem().style.top=i+"px";this._glass.className+=" DialogTransparent";this.elem().oncontextmenu=function(n){
        returnn.preventDefault(),
        !1
      };this._glass.oncontextmenu=function(n){
        returnn.preventDefault(),
        !1
      }
    },
    i.prototype.copyToClipboard=function(t){
      vari,
      r,
      u,
      f;if(t===void0&&(t=!1),
      i=this._studioCtx.productView().selected(),
      r=[
        
      ],
      i){
        if(iinstanceofn.EntityGroup){
          for(u=0;u<i.ents().length;u++)f=i.ents()[
            u
          ].save(),
          r.push(f);t&&i.remove()
        }elser=[
          i.save()
        ],
        t&&this._studioCtx.productView().removeEntity(i);this._studioCtx.clipboard().copyToClipboard(r)
      }
    },
    i.prototype.createMenuItem=function(t,
    i,
    r){
      varu=document.createElement("li"),
      f=n.makeAnchor(t,
      i,
      r);r||(u.className="disabled");u.appendChild(f);this._menuItems.appendChild(u)
    },
    i
  }(n.Dialog);n.ContextMenu=t
}(Uber||(Uber={
  
})),
function(n){
  vari,
  t,
  r;n.DEFAULT_PRODUCTID="GIG200";n.DEFAULT_FONT="FinaDMedCon";n.DEFAULT_FONT_CATEGORY=0;n.PANES={
    "default": function(t){
      returnnewn.IntroPane(t)
    },
    "continue": function(t){
      returnnewn.ContinuePane(t)
    },
    editProduct: function(t){
      returnnewn.EditProductPane(t)
    },
    addImage: function(t){
      returnnewn.AddImagePane(t)
    },
    addText: function(t){
      returnnewn.AddTextPane(t)
    },
    saveDesign: function(t){
      returnnewn.SaveDesignPane(t)
    },
    editText: function(t){
      returnnewn.EditTextPane(t)
    },
    editImage: function(t){
      returnnewn.EditImagePane(t)
    },
    editGroup: function(t){
      returnnewn.EditGroupPane(t)
    }
  };i=function(t){
    functioni(){
      vari=this;t.call(this,
      "Studio");this._panes={
        
      };this._name="";this._designNotes="";this._refreshOnError=!0;this._fontCache={
        
      };n.API.onerror=function(){
        i.fatal()
      };n.API.onloading=function(n){
        i.showSpinnerBox(n)
      };this._spinnerBox=this.$(".spinner");this._panesContainer=this.$(".panes");this._productDesc=this.$(".productDesc");this._decorationDesc=this.$(".decorationDesc");this._menuBar=newn.MenuBar;this.$(".menu").appendChild(this._menuBar.elem());this._menuBar.onNav=function(t){
        (i._curPaneinstanceofn.EditImagePane||i._curPaneinstanceofn.EditTextPane)&&i.showPane(null);i.showPane(t)
      };this._menuBar.onBuy=function(){
        i.showPriceDialog()
      };this._productView=newn.ProductView(this);this.$(".product").appendChild(this._productView.elem());this._productView.onSelect=function(t){
        i._curPane&&i._curPaneinstanceofn.EditEntityPane&&i._curPane.closeDialogs();t?tinstanceofn.EntityGroup?(i.showPane("editGroup"),
        i._curPane.setEntityGroup(t)): tinstanceofn.TextEntity?(i.showPane("editText"),
        i._curPane.setEntity(t)): (i.showPane("editImage"),
        i._curPane.setEntity(t)): i._curPane&&i._curPaneinstanceofn.EditGroupPane&&i.showPane(i._prevPaneName)
      };this._productView.onRemove=function(){
        i._curPane&&i.showPane("continue")
      };this._productView.onReset=function(){
        i.showPane("continue")
      };this._clipboard=newn.Clipboard(this);this._contextMenu=newn.ContextMenu(this);this.showPane("default");setTimeout(function(){
        window.onunload=function(){
          i.dumpState()
        }
      },
      5e3)
    }return__extends(i,
    t),
    i.prototype.requireLogin=function(t,
    i){
      n.API.loginCheck(function(r){
        if(r){
          t();return
        }newn.LoginDialog(t,
        i).show()
      })
    },
    i.prototype.loadDesign=function(t){
      vari=this;n.API.design(t,
      function(n){
        i.deserializeDesign(n);i.showPane("continue")
      })
    },
    i.prototype.saveDesign=function(t,
    i){
      varr=this;n.API.designExists(t,
      function(u){
        if(u.isLocked){
          i(!1,
          0,
          "",
          !0,
          u.designUrl);return
        }if(!u.designExists||window.confirm("You have previously saved a design with this same name.\n\nAre you sure you wish to overwrite this design?")){
          r._name=t;varf=r.serializeDesign();n.API.saveDesign(f,
          function(n){
            i(n.status,
            n.designId,
            n.message,
            !1,
            "",
            n.path)
          })
        }
      })
    },
    i.prototype.loadFont=function(t,
    i){
      varr=this;if(tinthis._fontCache){
        i(this._fontCache[
          t
        ]);return
      }n.API.getRaw(n.API.ziggyFontUrl(t),
      function(u){
        varf=newn.ZiggyFont(t,
        u);r._fontCache[
          t
        ]=f;i(f)
      })
    },
    i.prototype.loadTemplate=function(t,
    i){
      varr=this,
      u="",
      f="",
      e="";i&&(u=this._product.productId,
      f=this._productColor.colorId,
      e=this._decorationMethod);n.API.template(t,
      u,
      f,
      e,
      function(n){
        r.deserializeDesign(n);r.showPane("default")
      })
    },
    i.prototype.showPane=function(t){
      vari=this.paneInstance(t),
      r;(iinstanceofn.EditGroupPane||(this._prevPaneName=t),
      i!=null&&i.elem().classList.remove("hide-pane"),
      i!=this._curPane)&&(this._curPane&&(r=this._curPane,
      this._curPane=null,
      r.hide(),
      this._panesContainer.removeChild(r.elem())),
      this._menuBar.setSelected(t),
      this._curPane=i,
      i!=null&&(this._panesContainer.appendChild(i.elem()),
      this._curPane.show()))
    },
    i.prototype.productView=function(){
      returnthis._productView
    },
    i.prototype.name=function(){
      returnthis._name
    },
    i.prototype.designNotes=function(){
      returnthis._designNotes
    },
    i.prototype.setDesignNotes=function(n){
      this._designNotes=n
    },
    i.prototype.product=function(){
      returnthis._product
    },
    i.prototype.contextMenu=function(){
      returnthis._contextMenu
    },
    i.prototype.clipboard=function(){
      returnthis._clipboard
    },
    i.prototype.gatherCurrentInks=function(){
      returnthis._productView.gatherCurrentInks()
    },
    i.prototype.defaultInk=function(){
      returnthis.productColor()&&this.productColor().colorShade=="dark"?{
        inkId: 4,
        colorIndex: 1
      }: {
        inkId: 1,
        colorIndex: 1
      }
    },
    i.prototype.productColor=function(){
      returnthis._productColor
    },
    i.prototype.decorationMethod=function(){
      returnthis._decorationMethod
    },
    i.prototype.setDecorationMethod=function(n){
      if(n){
        switch(n.toLowerCase()){
          case"s": n="ScreenPrint";break;case"d": n="DigitalPrint";break;case"e": n="Embroider"
        }this._decorationMethod=n
      }
    },
    i.prototype.setUploadedImagesFilePath=function(n){
      this._productView.setUploadedImagesFilePath(n)
    },
    i.prototype.setProduct=function(t,
    i){
      varr=this;n.API.product(t,
      function(t){
        r._product=t;r._productColor=n.API.findProductColor(r._product,
        r._product.defaultColorId);r._decorationMethod=t.defaultDecorationMethod;r.updateDescription();r._productView.setProduct(t);r._productView.updateBackground();i&&i()
      })
    },
    i.prototype.setProductColor=function(n,
    t){
      this._productColor=n;this.setDecorationMethod(t);this.updateDescription();this._productView.updateBackground();this._productView._notifyChange()
    },
    i.prototype.paneInstance=function(t){
      returnt==null?null: (this._panes[
        t
      ]||(this._panes[
        t
      ]=n.PANES[
        t
      ](this)),
      this._panes[
        t
      ])
    },
    i.prototype.updateDescription=function(){
      if(this._product){
        this._productDesc.textContent=this._product.manufacturerName+" "+this._product.name;this.productColor()&&(this._productDesc.textContent+=", "+this.productColor().colorName);vart,
        i;switch(this.decorationMethod()){
          casen.API.DECORATION_DIGITALPRINT: t="Digital Print: ";i=!1;break;casen.API.DECORATION_SCREENPRINT: t="Screen Print: ";i=!0;break;casen.API.DECORATION_EMBROIDER: t="Embroidery: ";i=!1
        }t+=this._product.productLocations[
          0
        ].locationName+": ";t+=i?this._productView.gatherInksForSide(0).length+" colors": this.productView().entitiesOnSide(0)>0?"yes": "no";this._product.productLocations.length>1&&(t+=", "+this._product.productLocations[
          1
        ].locationName+": ",
        t+=i?this.productView().gatherInksForSide(1).length+" colors": this.productView().entitiesOnSide(1)>0?"yes": "no");this._decorationDesc.textContent=t
      }
    },
    i.prototype.showPriceDialog=function(){
      vart=newn.PriceDialog(this);t.setName(this._name);t.show()
    },
    i.prototype.dontRefreshOnError=function(){
      this._refreshOnError=!1
    },
    i.prototype.fatal=function(){
      alert("There was an error reaching the server. Restarting the studio.");this._refreshOnError&&location.reload()
    },
    i.prototype.dumpState=function(){
      localStorage[
        "swan-song"
      ]=JSON.stringify(this.serializeDesign())
    },
    i.prototype.designEntityCount=function(n){
      for(vari=0,
      t=0;t<n.artboards.length;t++)i+=n.artboards[
        t
      ].images.length+n.artboards[
        t
      ].texts.length;returni
    },
    i.prototype.tryReconstituteState=function(t,
    i,
    r,
    u){
      varf=this;this.maybeReconstituteState(t,
      i,
      r,
      u)||this.setProduct(i,
      function(){
        vart=n.API.findProductColor(f.product(),
        r);f.setProductColor(t,
        u)
      })
    },
    i.prototype.maybeReconstituteState=function(t,
    i,
    r,
    u){
      vare=this,
      o,
      f;if("swan-song"inlocalStorage)try{
        returno=localStorage[
          "swan-song"
        ],
        deletelocalStorage[
          "swan-song"
        ],
        f=JSON.parse(o),
        t&&(i=f.productId,
        r=f.productColorCode,
        u=f.decorationMethod),
        this.setProduct(i,
        function(){
          vart=n.API.findProductColor(e.product(),
          r);e.setProductColor(t,
          u)
        }),
        this.designEntityCount(f)>0&&newn.ContinueDialog(function(){
          e.deserializeDesign(f)
        },
        function(){
          
        }).show(),
        !0
      }catch(s){
        
      }return!1
    },
    i.prototype.serializeDesign=function(){
      varn=this._productView.save();returnn.name=this._name,
      n.designNotes=this._designNotes,
      n.decorationMethod=this._decorationMethod,
      n.productColorCode=this._productColor.colorId,
      n
    },
    i.prototype.deserializeDesign=function(n){
      this._name=n.name;this._designNotes=n.designNotes;this._productView.load(n)
    },
    i.prototype.showSpinnerBox=function(n){
      this._spinnerBox.style.display=n?"block": ""
    },
    i
  }(n.TemplateView);n.Studio=i;n.nastyDisableRubberBandHack();n.stopAllAnchorsFromNavigating();n.iOSScrollFix();t=newi;r=document.getElementById("content");r?r.appendChild(t.elem()): document.body.appendChild(t.elem());window.loadProduct=function(i,
  r,
  u){
    t.dontRefreshOnError();t.setProduct(i,
    function(){
      vari=n.API.findProductColor(t.product(),
      r);t.setProductColor(i,
      u)
    })
  };window.loadDesign=function(n){
    t.dontRefreshOnError();t.loadDesign(n)
  };window.loadTemplate=function(n){
    t.dontRefreshOnError();t.loadTemplate(n,
    !1)
  };window.loadSharedDesign=function(i,
  r){
    t.dontRefreshOnError();n.API.tempdesign(i,
    r,
    function(n){
      t.deserializeDesign(n);t.showPane("default")
    })
  };window.setZoom=function(n){
    t.productView().setZoom(n)
  };window.tryReconstituteState=function(n,
  i,
  r,
  u){
    t.tryReconstituteState(n,
    i,
    r,
    u)
  }
}(Uber||(Uber={
  
}))