(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */

var pJS = function(tag_id, params){

  var canvas_el = document.querySelector('#'+tag_id+' > .particles-js-canvas-el');

  /* particles.js variables with default values */
  this.pJS = {
    canvas: {
      el: canvas_el,
      w: canvas_el.offsetWidth,
      h: canvas_el.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#fff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#ff0000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: '',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 20,
        random: false,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 3000,
          rotateY: 3000
        }
      },
      array: []
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab:{
          distance: 100,
          line_linked:{
            opacity: 1
          }
        },
        bubble:{
          distance: 200,
          size: 80,
          duration: 0.4
        },
        repulse:{
          distance: 200,
          duration: 0.4
        },
        push:{
          particles_nb: 4
        },
        remove:{
          particles_nb: 2
        }
      },
      mouse:{}
    },
    retina_detect: false,
    fn: {
      interact: {},
      modes: {},
      vendors:{}
    },
    tmp: {}
  };

  var pJS = this.pJS;

  /* params settings */
  if(params){
    Object.deepExtend(pJS, params);
  }

  pJS.tmp.obj = {
    size_value: pJS.particles.size.value,
    size_anim_speed: pJS.particles.size.anim.speed,
    move_speed: pJS.particles.move.speed,
    line_linked_distance: pJS.particles.line_linked.distance,
    line_linked_width: pJS.particles.line_linked.width,
    mode_grab_distance: pJS.interactivity.modes.grab.distance,
    mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
    mode_bubble_size: pJS.interactivity.modes.bubble.size,
    mode_repulse_distance: pJS.interactivity.modes.repulse.distance
  };


  pJS.fn.retinaInit = function(){

    if(pJS.retina_detect && window.devicePixelRatio > 1){
      pJS.canvas.pxratio = window.devicePixelRatio; 
      pJS.tmp.retina = true;
    } 
    else{
      pJS.canvas.pxratio = 1;
      pJS.tmp.retina = false;
    }

    pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
    pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;

    pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
    pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
    pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
    pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
    pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
    pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;

  };



  /* ---------- pJS functions - canvas ------------ */

  pJS.fn.canvasInit = function(){
    pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
  };

  pJS.fn.canvasSize = function(){

    pJS.canvas.el.width = pJS.canvas.w;
    pJS.canvas.el.height = pJS.canvas.h;

    if(pJS && pJS.interactivity.events.resize){

      window.addEventListener('resize', function(){

          pJS.canvas.w = pJS.canvas.el.offsetWidth;
          pJS.canvas.h = pJS.canvas.el.offsetHeight;

          /* resize canvas */
          if(pJS.tmp.retina){
            pJS.canvas.w *= pJS.canvas.pxratio;
            pJS.canvas.h *= pJS.canvas.pxratio;
          }

          pJS.canvas.el.width = pJS.canvas.w;
          pJS.canvas.el.height = pJS.canvas.h;

          /* repaint canvas on anim disabled */
          if(!pJS.particles.move.enable){
            pJS.fn.particlesEmpty();
            pJS.fn.particlesCreate();
            pJS.fn.particlesDraw();
            pJS.fn.vendors.densityAutoParticles();
          }

        /* density particles enabled */
        pJS.fn.vendors.densityAutoParticles();

      });

    }

  };


  pJS.fn.canvasPaint = function(){
    pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };

  pJS.fn.canvasClear = function(){
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };


  /* --------- pJS functions - particles ----------- */

  pJS.fn.particle = function(color, opacity, position){

    /* size */
    this.radius = (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value;
    if(pJS.particles.size.anim.enable){
      this.size_status = false;
      this.vs = pJS.particles.size.anim.speed / 100;
      if(!pJS.particles.size.anim.sync){
        this.vs = this.vs * Math.random();
      }
    }

    /* position */
    this.x = position ? position.x : Math.random() * pJS.canvas.w;
    this.y = position ? position.y : Math.random() * pJS.canvas.h;

    /* check position  - into the canvas */
    if(this.x > pJS.canvas.w - this.radius*2) this.x = this.x - this.radius;
    else if(this.x < this.radius*2) this.x = this.x + this.radius;
    if(this.y > pJS.canvas.h - this.radius*2) this.y = this.y - this.radius;
    else if(this.y < this.radius*2) this.y = this.y + this.radius;

    /* check position - avoid overlap */
    if(pJS.particles.move.bounce){
      pJS.fn.vendors.checkOverlap(this, position);
    }

    /* color */
    this.color = {};
    if(typeof(color.value) == 'object'){

      if(color.value instanceof Array){
        var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];
        this.color.rgb = hexToRgb(color_selected);
      }else{
        if(color.value.r != undefined && color.value.g != undefined && color.value.b != undefined){
          this.color.rgb = {
            r: color.value.r,
            g: color.value.g,
            b: color.value.b
          }
        }
        if(color.value.h != undefined && color.value.s != undefined && color.value.l != undefined){
          this.color.hsl = {
            h: color.value.h,
            s: color.value.s,
            l: color.value.l
          }
        }
      }

    }
    else if(color.value == 'random'){
      this.color.rgb = {
        r: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        g: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        b: (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
      }
    }
    else if(typeof(color.value) == 'string'){
      this.color = color;
      this.color.rgb = hexToRgb(this.color.value);
    }

    /* opacity */
    this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;
    if(pJS.particles.opacity.anim.enable){
      this.opacity_status = false;
      this.vo = pJS.particles.opacity.anim.speed / 100;
      if(!pJS.particles.opacity.anim.sync){
        this.vo = this.vo * Math.random();
      }
    }

    /* animation - velocity for speed */
    var velbase = {}
    switch(pJS.particles.move.direction){
      case 'top':
        velbase = { x:0, y:-1 };
      break;
      case 'top-right':
        velbase = { x:0.5, y:-0.5 };
      break;
      case 'right':
        velbase = { x:1, y:-0 };
      break;
      case 'bottom-right':
        velbase = { x:0.5, y:0.5 };
      break;
      case 'bottom':
        velbase = { x:0, y:1 };
      break;
      case 'bottom-left':
        velbase = { x:-0.5, y:1 };
      break;
      case 'left':
        velbase = { x:-1, y:0 };
      break;
      case 'top-left':
        velbase = { x:-0.5, y:-0.5 };
      break;
      default:
        velbase = { x:0, y:0 };
      break;
    }

    if(pJS.particles.move.straight){
      this.vx = velbase.x;
      this.vy = velbase.y;
      if(pJS.particles.move.random){
        this.vx = this.vx * (Math.random());
        this.vy = this.vy * (Math.random());
      }
    }else{
      this.vx = velbase.x + Math.random()-0.5;
      this.vy = velbase.y + Math.random()-0.5;
    }

    // var theta = 2.0 * Math.PI * Math.random();
    // this.vx = Math.cos(theta);
    // this.vy = Math.sin(theta);

    this.vx_i = this.vx;
    this.vy_i = this.vy;

    

    /* if shape is image */

    var shape_type = pJS.particles.shape.type;
    if(typeof(shape_type) == 'object'){
      if(shape_type instanceof Array){
        var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
        this.shape = shape_selected;
      }
    }else{
      this.shape = shape_type;
    }

    if(this.shape == 'image'){
      var sh = pJS.particles.shape;
      this.img = {
        src: sh.image.src,
        ratio: sh.image.width / sh.image.height
      }
      if(!this.img.ratio) this.img.ratio = 1;
      if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg != undefined){
        pJS.fn.vendors.createSvgImg(this);
        if(pJS.tmp.pushing){
          this.img.loaded = false;
        }
      }
    }

    

  };


  pJS.fn.particle.prototype.draw = function() {

    var p = this;

    if(p.radius_bubble != undefined){
      var radius = p.radius_bubble; 
    }else{
      var radius = p.radius;
    }

    if(p.opacity_bubble != undefined){
      var opacity = p.opacity_bubble;
    }else{
      var opacity = p.opacity;
    }

    if(p.color.rgb){
      var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+opacity+')';
    }else{
      var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+opacity+')';
    }

    pJS.canvas.ctx.fillStyle = color_value;
    pJS.canvas.ctx.beginPath();

    switch(p.shape){

      case 'circle':
        pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
      break;

      case 'edge':
        pJS.canvas.ctx.rect(p.x-radius, p.y-radius, radius*2, radius*2);
      break;

      case 'triangle':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x-radius, p.y+radius / 1.66, radius*2, 3, 2);
      break;

      case 'polygon':
        pJS.fn.vendors.drawShape(
          pJS.canvas.ctx,
          p.x - radius / (pJS.particles.shape.polygon.nb_sides/3.5), // startX
          p.y - radius / (2.66/3.5), // startY
          radius*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
          pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
          1 // sideCountDenominator
        );
      break;

      case 'star':
        pJS.fn.vendors.drawShape(
          pJS.canvas.ctx,
          p.x - radius*2 / (pJS.particles.shape.polygon.nb_sides/4), // startX
          p.y - radius / (2*2.66/3.5), // startY
          radius*2*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
          pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
          2 // sideCountDenominator
        );
      break;

      case 'image':

        function draw(){
          pJS.canvas.ctx.drawImage(
            img_obj,
            p.x-radius,
            p.y-radius,
            radius*2,
            radius*2 / p.img.ratio
          );
        }

        if(pJS.tmp.img_type == 'svg'){
          var img_obj = p.img.obj;
        }else{
          var img_obj = pJS.tmp.img_obj;
        }

        if(img_obj){
          draw();
        }

      break;

    }

    pJS.canvas.ctx.closePath();

    if(pJS.particles.shape.stroke.width > 0){
      pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
      pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
      pJS.canvas.ctx.stroke();
    }
    
    pJS.canvas.ctx.fill();
    
  };


  pJS.fn.particlesCreate = function(){
    for(var i = 0; i < pJS.particles.number.value; i++) {
      pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));
    }
  };

  pJS.fn.particlesUpdate = function(){

    for(var i = 0; i < pJS.particles.array.length; i++){

      /* the particle */
      var p = pJS.particles.array[i];

      // var d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;
      // var f = -BANG_SIZE / d;
      // if ( d < BANG_SIZE ) {
      //     var t = Math.atan2( dy, dx );
      //     p.vx = f * Math.cos(t);
      //     p.vy = f * Math.sin(t);
      // }

      /* move the particle */
      if(pJS.particles.move.enable){
        var ms = pJS.particles.move.speed/2;
        p.x += p.vx * ms;
        p.y += p.vy * ms;
      }

      /* change opacity status */
      if(pJS.particles.opacity.anim.enable) {
        if(p.opacity_status == true) {
          if(p.opacity >= pJS.particles.opacity.value) p.opacity_status = false;
          p.opacity += p.vo;
        }else {
          if(p.opacity <= pJS.particles.opacity.anim.opacity_min) p.opacity_status = true;
          p.opacity -= p.vo;
        }
        if(p.opacity < 0) p.opacity = 0;
      }

      /* change size */
      if(pJS.particles.size.anim.enable){
        if(p.size_status == true){
          if(p.radius >= pJS.particles.size.value) p.size_status = false;
          p.radius += p.vs;
        }else{
          if(p.radius <= pJS.particles.size.anim.size_min) p.size_status = true;
          p.radius -= p.vs;
        }
        if(p.radius < 0) p.radius = 0;
      }

      /* change particle position if it is out of canvas */
      if(pJS.particles.move.out_mode == 'bounce'){
        var new_pos = {
          x_left: p.radius,
          x_right:  pJS.canvas.w,
          y_top: p.radius,
          y_bottom: pJS.canvas.h
        }
      }else{
        var new_pos = {
          x_left: -p.radius,
          x_right: pJS.canvas.w + p.radius,
          y_top: -p.radius,
          y_bottom: pJS.canvas.h + p.radius
        }
      }

      if(p.x - p.radius > pJS.canvas.w){
        p.x = new_pos.x_left;
        p.y = Math.random() * pJS.canvas.h;
      }
      else if(p.x + p.radius < 0){
        p.x = new_pos.x_right;
        p.y = Math.random() * pJS.canvas.h;
      }
      if(p.y - p.radius > pJS.canvas.h){
        p.y = new_pos.y_top;
        p.x = Math.random() * pJS.canvas.w;
      }
      else if(p.y + p.radius < 0){
        p.y = new_pos.y_bottom;
        p.x = Math.random() * pJS.canvas.w;
      }

      /* out of canvas modes */
      switch(pJS.particles.move.out_mode){
        case 'bounce':
          if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
          else if (p.x - p.radius < 0) p.vx = -p.vx;
          if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
          else if (p.y - p.radius < 0) p.vy = -p.vy;
        break;
      }

      /* events */
      if(isInArray('grab', pJS.interactivity.events.onhover.mode)){
        pJS.fn.modes.grabParticle(p);
      }

      if(isInArray('bubble', pJS.interactivity.events.onhover.mode) || isInArray('bubble', pJS.interactivity.events.onclick.mode)){
        pJS.fn.modes.bubbleParticle(p);
      }

      if(isInArray('repulse', pJS.interactivity.events.onhover.mode) || isInArray('repulse', pJS.interactivity.events.onclick.mode)){
        pJS.fn.modes.repulseParticle(p);
      }

      /* interaction auto between particles */
      if(pJS.particles.line_linked.enable || pJS.particles.move.attract.enable){
        for(var j = i + 1; j < pJS.particles.array.length; j++){
          var p2 = pJS.particles.array[j];

          /* link particles */
          if(pJS.particles.line_linked.enable){
            pJS.fn.interact.linkParticles(p,p2);
          }

          /* attract particles */
          if(pJS.particles.move.attract.enable){
            pJS.fn.interact.attractParticles(p,p2);
          }

          /* bounce particles */
          if(pJS.particles.move.bounce){
            pJS.fn.interact.bounceParticles(p,p2);
          }

        }
      }


    }

  };

  pJS.fn.particlesDraw = function(){

    /* clear canvas */
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);

    /* update each particles param */
    pJS.fn.particlesUpdate();

    /* draw each particle */
    for(var i = 0; i < pJS.particles.array.length; i++){
      var p = pJS.particles.array[i];
      p.draw();
    }

  };

  pJS.fn.particlesEmpty = function(){
    pJS.particles.array = [];
  };

  pJS.fn.particlesRefresh = function(){

    /* init all */
    cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
    cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
    pJS.tmp.source_svg = undefined;
    pJS.tmp.img_obj = undefined;
    pJS.tmp.count_svg = 0;
    pJS.fn.particlesEmpty();
    pJS.fn.canvasClear();
    
    /* restart */
    pJS.fn.vendors.start();

  };


  /* ---------- pJS functions - particles interaction ------------ */

  pJS.fn.interact.linkParticles = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    /* draw a line between p1 and p2 if the distance between them is under the config distance */
    if(dist <= pJS.particles.line_linked.distance){

      var opacity_line = pJS.particles.line_linked.opacity - (dist / (1/pJS.particles.line_linked.opacity)) / pJS.particles.line_linked.distance;

      if(opacity_line > 0){        
        
        /* style */
        var color_line = pJS.particles.line_linked.color_rgb_line;
        pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
        pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
        //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
        
        /* path */
        pJS.canvas.ctx.beginPath();
        pJS.canvas.ctx.moveTo(p1.x, p1.y);
        pJS.canvas.ctx.lineTo(p2.x, p2.y);
        pJS.canvas.ctx.stroke();
        pJS.canvas.ctx.closePath();

      }

    }

  };


  pJS.fn.interact.attractParticles  = function(p1, p2){

    /* condensed particles */
    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    if(dist <= pJS.particles.line_linked.distance){

      var ax = dx/(pJS.particles.move.attract.rotateX*1000),
          ay = dy/(pJS.particles.move.attract.rotateY*1000);

      p1.vx -= ax;
      p1.vy -= ay;

      p2.vx += ax;
      p2.vy += ay;

    }
    

  }


  pJS.fn.interact.bounceParticles = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy),
        dist_p = p1.radius+p2.radius;

    if(dist <= dist_p){
      p1.vx = -p1.vx;
      p1.vy = -p1.vy;

      p2.vx = -p2.vx;
      p2.vy = -p2.vy;
    }

  }


  /* ---------- pJS functions - modes events ------------ */

  pJS.fn.modes.pushParticles = function(nb, pos){

    pJS.tmp.pushing = true;

    for(var i = 0; i < nb; i++){
      pJS.particles.array.push(
        new pJS.fn.particle(
          pJS.particles.color,
          pJS.particles.opacity.value,
          {
            'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
            'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h
          }
        )
      )
      if(i == nb-1){
        if(!pJS.particles.move.enable){
          pJS.fn.particlesDraw();
        }
        pJS.tmp.pushing = false;
      }
    }

  };


  pJS.fn.modes.removeParticles = function(nb){

    pJS.particles.array.splice(0, nb);
    if(!pJS.particles.move.enable){
      pJS.fn.particlesDraw();
    }

  };


  pJS.fn.modes.bubbleParticle = function(p){

    /* on hover event */
    if(pJS.interactivity.events.onhover.enable && isInArray('bubble', pJS.interactivity.events.onhover.mode)){

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
          ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;

      function init(){
        p.opacity_bubble = p.opacity;
        p.radius_bubble = p.radius;
      }

      /* mousemove - check ratio */
      if(dist_mouse <= pJS.interactivity.modes.bubble.distance){

        if(ratio >= 0 && pJS.interactivity.status == 'mousemove'){
          
          /* size */
          if(pJS.interactivity.modes.bubble.size != pJS.particles.size.value){

            if(pJS.interactivity.modes.bubble.size > pJS.particles.size.value){
              var size = p.radius + (pJS.interactivity.modes.bubble.size*ratio);
              if(size >= 0){
                p.radius_bubble = size;
              }
            }else{
              var dif = p.radius - pJS.interactivity.modes.bubble.size,
                  size = p.radius - (dif*ratio);
              if(size > 0){
                p.radius_bubble = size;
              }else{
                p.radius_bubble = 0;
              }
            }

          }

          /* opacity */
          if(pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value){

            if(pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value){
              var opacity = pJS.interactivity.modes.bubble.opacity*ratio;
              if(opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity){
                p.opacity_bubble = opacity;
              }
            }else{
              var opacity = p.opacity - (pJS.particles.opacity.value-pJS.interactivity.modes.bubble.opacity)*ratio;
              if(opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity){
                p.opacity_bubble = opacity;
              }
            }

          }

        }

      }else{
        init();
      }


      /* mouseleave */
      if(pJS.interactivity.status == 'mouseleave'){
        init();
      }
    
    }

    /* on click event */
    else if(pJS.interactivity.events.onclick.enable && isInArray('bubble', pJS.interactivity.events.onclick.mode)){


      if(pJS.tmp.bubble_clicking){
        var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x,
            dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y,
            dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
            time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time)/1000;

        if(time_spent > pJS.interactivity.modes.bubble.duration){
          pJS.tmp.bubble_duration_end = true;
        }

        if(time_spent > pJS.interactivity.modes.bubble.duration*2){
          pJS.tmp.bubble_clicking = false;
          pJS.tmp.bubble_duration_end = false;
        }
      }


      function process(bubble_param, particles_param, p_obj_bubble, p_obj, id){

        if(bubble_param != particles_param){

          if(!pJS.tmp.bubble_duration_end){
            if(dist_mouse <= pJS.interactivity.modes.bubble.distance){
              if(p_obj_bubble != undefined) var obj = p_obj_bubble;
              else var obj = p_obj;
              if(obj != bubble_param){
                var value = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration);
                if(id == 'size') p.radius_bubble = value;
                if(id == 'opacity') p.opacity_bubble = value;
              }
            }else{
              if(id == 'size') p.radius_bubble = undefined;
              if(id == 'opacity') p.opacity_bubble = undefined;
            }
          }else{
            if(p_obj_bubble != undefined){
              var value_tmp = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration),
                  dif = bubble_param - value_tmp;
                  value = bubble_param + dif;
              if(id == 'size') p.radius_bubble = value;
              if(id == 'opacity') p.opacity_bubble = value;
            }
          }

        }

      }

      if(pJS.tmp.bubble_clicking){
        /* size */
        process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, 'size');
        /* opacity */
        process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
      }

    }

  };


  pJS.fn.modes.repulseParticle = function(p){

    if(pJS.interactivity.events.onhover.enable && isInArray('repulse', pJS.interactivity.events.onhover.mode) && pJS.interactivity.status == 'mousemove') {

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

      var normVec = {x: dx_mouse/dist_mouse, y: dy_mouse/dist_mouse},
          repulseRadius = pJS.interactivity.modes.repulse.distance,
          velocity = 100,
          repulseFactor = clamp((1/repulseRadius)*(-1*Math.pow(dist_mouse/repulseRadius,2)+1)*repulseRadius*velocity, 0, 50);
      
      var pos = {
        x: p.x + normVec.x * repulseFactor,
        y: p.y + normVec.y * repulseFactor
      }

      if(pJS.particles.move.out_mode == 'bounce'){
        if(pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w) p.x = pos.x;
        if(pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h) p.y = pos.y;
      }else{
        p.x = pos.x;
        p.y = pos.y;
      }
    
    }


    else if(pJS.interactivity.events.onclick.enable && isInArray('repulse', pJS.interactivity.events.onclick.mode)) {

      if(!pJS.tmp.repulse_finish){
        pJS.tmp.repulse_count++;
        if(pJS.tmp.repulse_count == pJS.particles.array.length){
          pJS.tmp.repulse_finish = true;
        }
      }

      if(pJS.tmp.repulse_clicking){

        var repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance/6, 3);

        var dx = pJS.interactivity.mouse.click_pos_x - p.x,
            dy = pJS.interactivity.mouse.click_pos_y - p.y,
            d = dx*dx + dy*dy;

        var force = -repulseRadius / d * 1;

        function process(){

          var f = Math.atan2(dy,dx);
          p.vx = force * Math.cos(f);
          p.vy = force * Math.sin(f);

          if(pJS.particles.move.out_mode == 'bounce'){
            var pos = {
              x: p.x + p.vx,
              y: p.y + p.vy
            }
            if (pos.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
            else if (pos.x - p.radius < 0) p.vx = -p.vx;
            if (pos.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
            else if (pos.y - p.radius < 0) p.vy = -p.vy;
          }

        }

        // default
        if(d <= repulseRadius){
          process();
        }

        // bang - slow motion mode
        // if(!pJS.tmp.repulse_finish){
        //   if(d <= repulseRadius){
        //     process();
        //   }
        // }else{
        //   process();
        // }
        

      }else{

        if(pJS.tmp.repulse_clicking == false){

          p.vx = p.vx_i;
          p.vy = p.vy_i;
        
        }

      }

    }

  }


  pJS.fn.modes.grabParticle = function(p){

    if(pJS.interactivity.events.onhover.enable && pJS.interactivity.status == 'mousemove'){

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

      /* draw a line between the cursor and the particle if the distance between them is under the config distance */
      if(dist_mouse <= pJS.interactivity.modes.grab.distance){

        var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - (dist_mouse / (1/pJS.interactivity.modes.grab.line_linked.opacity)) / pJS.interactivity.modes.grab.distance;

        if(opacity_line > 0){

          /* style */
          var color_line = pJS.particles.line_linked.color_rgb_line;
          pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
          pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
          //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
          
          /* path */
          pJS.canvas.ctx.beginPath();
          pJS.canvas.ctx.moveTo(p.x, p.y);
          pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
          pJS.canvas.ctx.stroke();
          pJS.canvas.ctx.closePath();

        }

      }

    }

  };



  /* ---------- pJS functions - vendors ------------ */

  pJS.fn.vendors.eventsListeners = function(){

    /* events target element */
    if(pJS.interactivity.detect_on == 'window'){
      pJS.interactivity.el = window;
    }else{
      pJS.interactivity.el = pJS.canvas.el;
    }


    /* detect mouse pos - on hover / click event */
    if(pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable){

      /* el on mousemove */
      pJS.interactivity.el.addEventListener('mousemove', function(e){

        if(pJS.interactivity.el == window){
          var pos_x = e.clientX,
              pos_y = e.clientY;
        }
        else{
          var pos_x = e.offsetX || e.clientX,
              pos_y = e.offsetY || e.clientY;
        }

        pJS.interactivity.mouse.pos_x = pos_x;
        pJS.interactivity.mouse.pos_y = pos_y;

        if(pJS.tmp.retina){
          pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
          pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
        }

        pJS.interactivity.status = 'mousemove';

      });

      /* el on onmouseleave */
      pJS.interactivity.el.addEventListener('mouseleave', function(e){

        pJS.interactivity.mouse.pos_x = null;
        pJS.interactivity.mouse.pos_y = null;
        pJS.interactivity.status = 'mouseleave';

      });

    }

    /* on click event */
    if(pJS.interactivity.events.onclick.enable){

      pJS.interactivity.el.addEventListener('click', function(){

        pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
        pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
        pJS.interactivity.mouse.click_time = new Date().getTime();

        if(pJS.interactivity.events.onclick.enable){

          switch(pJS.interactivity.events.onclick.mode){

            case 'push':
              if(pJS.particles.move.enable){
                pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
              }else{
                if(pJS.interactivity.modes.push.particles_nb == 1){
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                }
                else if(pJS.interactivity.modes.push.particles_nb > 1){
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
                }
              }
            break;

            case 'remove':
              pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
            break;

            case 'bubble':
              pJS.tmp.bubble_clicking = true;
            break;

            case 'repulse':
              pJS.tmp.repulse_clicking = true;
              pJS.tmp.repulse_count = 0;
              pJS.tmp.repulse_finish = false;
              setTimeout(function(){
                pJS.tmp.repulse_clicking = false;
              }, pJS.interactivity.modes.repulse.duration*1000)
            break;

          }

        }

      });
        
    }


  };

  pJS.fn.vendors.densityAutoParticles = function(){

    if(pJS.particles.number.density.enable){

      /* calc area */
      var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;
      if(pJS.tmp.retina){
        area = area/(pJS.canvas.pxratio*2);
      }

      /* calc number of particles based on density area */
      var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;

      /* add or remove X particles */
      var missing_particles = pJS.particles.array.length - nb_particles;
      if(missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles));
      else pJS.fn.modes.removeParticles(missing_particles);

    }

  };


  pJS.fn.vendors.checkOverlap = function(p1, position){
    for(var i = 0; i < pJS.particles.array.length; i++){
      var p2 = pJS.particles.array[i];

      var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx*dx + dy*dy);

      if(dist <= p1.radius + p2.radius){
        p1.x = position ? position.x : Math.random() * pJS.canvas.w;
        p1.y = position ? position.y : Math.random() * pJS.canvas.h;
        pJS.fn.vendors.checkOverlap(p1);
      }
    }
  };


  pJS.fn.vendors.createSvgImg = function(p){

    /* set color to svg element */
    var svgXml = pJS.tmp.source_svg,
        rgbHex = /#([0-9A-F]{3,6})/gi,
        coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
          if(p.color.rgb){
            var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+p.opacity+')';
          }else{
            var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+p.opacity+')';
          }
          return color_value;
        });

    /* prepare to create img with colored svg */
    var svg = new Blob([coloredSvgXml], {type: 'image/svg+xml;charset=utf-8'}),
        DOMURL = window.URL || window.webkitURL || window,
        url = DOMURL.createObjectURL(svg);

    /* create particle img obj */
    var img = new Image();
    img.addEventListener('load', function(){
      p.img.obj = img;
      p.img.loaded = true;
      DOMURL.revokeObjectURL(url);
      pJS.tmp.count_svg++;
    });
    img.src = url;

  };


  pJS.fn.vendors.destroypJS = function(){
    cancelAnimationFrame(pJS.fn.drawAnimFrame);
    canvas_el.remove();
    pJSDom = null;
  };


  pJS.fn.vendors.drawShape = function(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator){

    // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
    var sideCount = sideCountNumerator * sideCountDenominator;
    var decimalSides = sideCountNumerator / sideCountDenominator;
    var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
    var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians
    c.save();
    c.beginPath();
    c.translate(startX, startY);
    c.moveTo(0,0);
    for (var i = 0; i < sideCount; i++) {
      c.lineTo(sideLength,0);
      c.translate(sideLength,0);
      c.rotate(interiorAngle);
    }
    //c.stroke();
    c.fill();
    c.restore();

  };

  pJS.fn.vendors.exportImg = function(){
    window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
  };


  pJS.fn.vendors.loadImg = function(type){

    pJS.tmp.img_error = undefined;

    if(pJS.particles.shape.image.src != ''){

      if(type == 'svg'){

        var xhr = new XMLHttpRequest();
        xhr.open('GET', pJS.particles.shape.image.src);
        xhr.onreadystatechange = function (data) {
          if(xhr.readyState == 4){
            if(xhr.status == 200){
              pJS.tmp.source_svg = data.currentTarget.response;
              pJS.fn.vendors.checkBeforeDraw();
            }else{
              console.log('Error pJS - Image not found');
              pJS.tmp.img_error = true;
            }
          }
        }
        xhr.send();

      }else{

        var img = new Image();
        img.addEventListener('load', function(){
          pJS.tmp.img_obj = img;
          pJS.fn.vendors.checkBeforeDraw();
        });
        img.src = pJS.particles.shape.image.src;

      }

    }else{
      console.log('Error pJS - No image.src');
      pJS.tmp.img_error = true;
    }

  };


  pJS.fn.vendors.draw = function(){

    if(pJS.particles.shape.type == 'image'){

      if(pJS.tmp.img_type == 'svg'){

        if(pJS.tmp.count_svg >= pJS.particles.number.value){
          pJS.fn.particlesDraw();
          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }else{
          //console.log('still loading...');
          if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }

      }else{

        if(pJS.tmp.img_obj != undefined){
          pJS.fn.particlesDraw();
          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }else{
          if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }

      }

    }else{
      pJS.fn.particlesDraw();
      if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
      else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
    }

  };


  pJS.fn.vendors.checkBeforeDraw = function(){

    // if shape is image
    if(pJS.particles.shape.type == 'image'){

      if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined){
        pJS.tmp.checkAnimFrame = requestAnimFrame(check);
      }else{
        //console.log('images loaded! cancel check');
        cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);
        if(!pJS.tmp.img_error){
          pJS.fn.vendors.init();
          pJS.fn.vendors.draw();
        }
        
      }

    }else{
      pJS.fn.vendors.init();
      pJS.fn.vendors.draw();
    }

  };


  pJS.fn.vendors.init = function(){

    /* init canvas + particles */
    pJS.fn.retinaInit();
    pJS.fn.canvasInit();
    pJS.fn.canvasSize();
    pJS.fn.canvasPaint();
    pJS.fn.particlesCreate();
    pJS.fn.vendors.densityAutoParticles();

    /* particles.line_linked - convert hex colors to rgb */
    pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);

  };


  pJS.fn.vendors.start = function(){

    if(isInArray('image', pJS.particles.shape.type)){
      pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
      pJS.fn.vendors.loadImg(pJS.tmp.img_type);
    }else{
      pJS.fn.vendors.checkBeforeDraw();
    }

  };




  /* ---------- pJS - start ------------ */


  pJS.fn.vendors.eventsListeners();

  pJS.fn.vendors.start();
  


};

/* ---------- global functions - vendors ------------ */

Object.deepExtend = function(destination, source) {
  for (var property in source) {
    if (source[property] && source[property].constructor &&
     source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      arguments.callee(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
};

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(callback){
      window.setTimeout(callback, 1000 / 60);
    };
})();

window.cancelRequestAnimFrame = ( function() {
  return window.cancelAnimationFrame         ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame    ||
    window.oCancelRequestAnimationFrame      ||
    window.msCancelRequestAnimationFrame     ||
    clearTimeout
} )();

function hexToRgb(hex){
  // By Tim Down - http://stackoverflow.com/a/5624139/3493650
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
     return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
};

function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
};

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}


/* ---------- particles.js functions - start ------------ */

window.pJSDom = [];

window.particlesJS = function(tag_id, params){

  //console.log(params);

  /* no string id? so it's object params, and set the id with default id */
  if(typeof(tag_id) != 'string'){
    params = tag_id;
    tag_id = 'particles-js';
  }

  /* no id? set the id to default id */
  if(!tag_id){
    tag_id = 'particles-js';
  }

  /* pJS elements */
  var pJS_tag = document.getElementById(tag_id),
      pJS_canvas_class = 'particles-js-canvas-el',
      exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);

  /* remove canvas if exists into the pJS target tag */
  if(exist_canvas.length){
    while(exist_canvas.length > 0){
      pJS_tag.removeChild(exist_canvas[0]);
    }
  }

  /* create canvas element */
  var canvas_el = document.createElement('canvas');
  canvas_el.className = pJS_canvas_class;

  /* set size canvas */
  canvas_el.style.width = "100%";
  canvas_el.style.height = "100%";

  /* append canvas */
  var canvas = document.getElementById(tag_id).appendChild(canvas_el);

  /* launch particle.js */
  if(canvas != null){
    pJSDom.push(new pJS(tag_id, params));
  }

};

window.particlesJS.load = function(tag_id, path_config_json, callback){

  /* load json config */
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path_config_json);
  xhr.onreadystatechange = function (data) {
    if(xhr.readyState == 4){
      if(xhr.status == 200){
        var params = JSON.parse(data.currentTarget.response);
        window.particlesJS(tag_id, params);
        if(callback) callback();
      }else{
        console.log('Error pJS - XMLHttpRequest status: '+xhr.status);
        console.log('Error pJS - File config not found');
      }
    }
  };
  xhr.send();

};
},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('./../../../node_modules/particles.js/particles');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var particlesJS = window.particlesJS;

var globalScript = function () {
    function globalScript() {
        _classCallCheck(this, globalScript);
    }

    _createClass(globalScript, null, [{
        key: 'init',
        value: function init() {

            $(document).ready(function () {
                $("#carousel").owlCarousel({
                    lazyLoad: true,
                    loop: true,
                    margin: 10,
                    autoplay: true,
                    autoplayTimeout: 10000,
                    autoplayHoverPause: true,
                    nav: true,
                    autoHeight: false,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 2
                        },
                        1144: {
                            items: 3
                        }
                    }
                });
            });

            $(function () {
                $('.media__img-wrapper').click(function (event) {
                    var i_path = $('.media__img').attr('src');
                    $('body').append('<div style="display: flex" id="overlay"><div id="magnify"><video controls="controls" width="100%" height="auto"><source src="' + i_path + '" type="video/mp4"></video><div id="close-popup"></div></div></div>');
                    $('#magnify').css({
                        left: ($(document).width() - $('#magnify').outerWidth()) / 2,
                        // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
                        top: ($(window).height() - $('#magnify').outerHeight()) / 2
                    });
                    $('#overlay, #magnify').fadeIn('fast');
                });
                $('body').on('click', '#close-popup, #overlay', function (event) {
                    event.preventDefault();
                    $('#overlay, #magnify').fadeOut('fast', function () {
                        $('#close-popup, #magnify, #overlay').remove();
                    });
                });
            });

            //    открывет модалку
            $('button').click(function () {
                $('.modal__overlay').fadeIn();

                var buttonValue = $(this).attr('value');
                console.log(buttonValue);
                $('.modal__headline').text(buttonValue);

                //      отменяет скролл
                function OffScroll() {
                    var winScrollTop = $(window).scrollTop();
                    $(window).bind('scroll', function () {
                        $(window).scrollTop(winScrollTop);
                    });
                }
                OffScroll();

                $('body').addClass('body');
            });

            $(".moda__after").click(function () {
                $('.modal__overlay').fadeOut();
                $('body').removeClass('body');
                $(window).unbind('scroll');
            });

            $("#modal__submit").click(function () {
                $('.modal__overlay').fadeOut();
                $('body').removeClass('body');
                $(window).unbind('scroll');
            });

            //    закрывает модалку клоусарией


            $('.modal__overlay').mouseup(function (e) {
                var popup = $('.modal');
                if (e.target != popup[0] && popup.has(e.target).length === 0) {
                    $('.modal__overlay').fadeOut();
                    $('body').removeClass('body');

                    //        возвращяет скролл
                    $(window).unbind('scroll');
                }
            });
        }
    }]);

    return globalScript;
}();

exports.default = globalScript;

},{"./../../../node_modules/particles.js/particles":1}],3:[function(require,module,exports){
(function (global){
'use strict';

var _globalScript = require('Global/globalScript.js');

var _globalScript2 = _interopRequireDefault(_globalScript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// include jQuery with standart object
global.$ = require('jquery.min.js');
global.jQuery = $;
//global.semantic = require('semantic.js');

//import ExpandableText from 'Advanced_UI/ExpandableText/ExpandableText.js';

$(document).ready(function () {
    //  ExpandableText.init();
    _globalScript2.default.init();
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"Global/globalScript.js":2,"jquery.min.js":4}],4:[function(require,module,exports){
/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvcGFydGljbGVzLmpzL3BhcnRpY2xlcy5qcyIsInNyYy9jb21wb25lbnRzL0dsb2JhbC9nbG9iYWxTY3JpcHQuanMiLCJzcmMvZW50cnlwb2ludC5qcyIsInNyYy92ZW5kb3IvanMvanF1ZXJ5Lm1pbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwZ0RBOzs7O0FBQ0EsSUFBTSxjQUFjLE9BQU8sV0FBM0I7O0lBS00sWTs7Ozs7OzsrQkFDWTs7QUFFVixjQUFFLFFBQUYsRUFBWSxLQUFaLENBQWtCLFlBQVk7QUFDMUIsa0JBQUUsV0FBRixFQUFlLFdBQWYsQ0FBMkI7QUFDdkIsOEJBQVUsSUFEYTtBQUV2QiwwQkFBTSxJQUZpQjtBQUd2Qiw0QkFBUSxFQUhlO0FBSXZCLDhCQUFVLElBSmE7QUFLdkIscUNBQWlCLEtBTE07QUFNdkIsd0NBQW9CLElBTkc7QUFPdkIseUJBQUssSUFQa0I7QUFRdkIsZ0NBQVksS0FSVztBQVN2QixnQ0FBWTtBQUNSLDJCQUFHO0FBQ0MsbUNBQU87QUFEUix5QkFESztBQUlSLDZCQUFLO0FBQ0QsbUNBQU87QUFETix5QkFKRztBQU9SLDhCQUFNO0FBQ0YsbUNBQU87QUFETDtBQVBFO0FBVFcsaUJBQTNCO0FBc0JILGFBdkJEOztBQTBCQyxjQUFFLFlBQVc7QUFDZCxrQkFBRSxxQkFBRixFQUF5QixLQUF6QixDQUErQixVQUFTLEtBQVQsRUFBZ0I7QUFDM0Msd0JBQUksU0FBUyxFQUFFLGFBQUYsRUFBaUIsSUFBakIsQ0FBc0IsS0FBdEIsQ0FBYjtBQUNBLHNCQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCLGtJQUFrSSxNQUFsSSxHQUEySSxxRUFBNUo7QUFDQSxzQkFBRSxVQUFGLEVBQWMsR0FBZCxDQUFrQjtBQUNkLDhCQUFNLENBQUMsRUFBRSxRQUFGLEVBQVksS0FBWixLQUFzQixFQUFFLFVBQUYsRUFBYyxVQUFkLEVBQXZCLElBQXFELENBRDdDO0FBRWQ7QUFDQSw2QkFBSyxDQUFDLEVBQUUsTUFBRixFQUFVLE1BQVYsS0FBcUIsRUFBRSxVQUFGLEVBQWMsV0FBZCxFQUF0QixJQUFxRDtBQUg1QyxxQkFBbEI7QUFLQSxzQkFBRSxvQkFBRixFQUF3QixNQUF4QixDQUErQixNQUEvQjtBQUNILGlCQVREO0FBVUEsa0JBQUUsTUFBRixFQUFVLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLHdCQUF0QixFQUFnRCxVQUFTLEtBQVQsRUFBZ0I7QUFDNUQsMEJBQU0sY0FBTjtBQUNBLHNCQUFFLG9CQUFGLEVBQXdCLE9BQXhCLENBQWdDLE1BQWhDLEVBQXdDLFlBQVc7QUFDL0MsMEJBQUUsa0NBQUYsRUFBc0MsTUFBdEM7QUFDSCxxQkFGRDtBQUdILGlCQUxEO0FBTUgsYUFqQkk7O0FBeUJEO0FBQ0EsY0FBRSxRQUFGLEVBQVksS0FBWixDQUFrQixZQUFZO0FBQzFCLGtCQUFFLGlCQUFGLEVBQXFCLE1BQXJCOztBQUVBLG9CQUFJLGNBQWMsRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLE9BQWIsQ0FBbEI7QUFDQSx3QkFBUSxHQUFSLENBQVksV0FBWjtBQUNDLGtCQUFFLGtCQUFGLEVBQXNCLElBQXRCLENBQTJCLFdBQTNCOztBQUdEO0FBQ0EseUJBQVMsU0FBVCxHQUFxQjtBQUNqQix3QkFBSSxlQUFlLEVBQUUsTUFBRixFQUFVLFNBQVYsRUFBbkI7QUFDQSxzQkFBRSxNQUFGLEVBQVUsSUFBVixDQUFlLFFBQWYsRUFBeUIsWUFBWTtBQUNqQywwQkFBRSxNQUFGLEVBQVUsU0FBVixDQUFvQixZQUFwQjtBQUNILHFCQUZEO0FBR0g7QUFDRDs7QUFFQSxrQkFBRSxNQUFGLEVBQVUsUUFBVixDQUFtQixNQUFuQjtBQUVILGFBbkJEOztBQXFCQSxjQUFFLGNBQUYsRUFBa0IsS0FBbEIsQ0FBd0IsWUFBWTtBQUM5QixrQkFBRSxpQkFBRixFQUFxQixPQUFyQjtBQUNFLGtCQUFFLE1BQUYsRUFBVSxXQUFWLENBQXNCLE1BQXRCO0FBQ0Qsa0JBQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUIsUUFBakI7QUFDTixhQUpEOztBQU1BLGNBQUUsZ0JBQUYsRUFBb0IsS0FBcEIsQ0FBMEIsWUFBWTtBQUNoQyxrQkFBRSxpQkFBRixFQUFxQixPQUFyQjtBQUNFLGtCQUFFLE1BQUYsRUFBVSxXQUFWLENBQXNCLE1BQXRCO0FBQ0Qsa0JBQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUIsUUFBakI7QUFDTixhQUpEOztBQU9BOzs7QUFLQSxjQUFFLGlCQUFGLEVBQXFCLE9BQXJCLENBQTZCLFVBQVUsQ0FBVixFQUFhO0FBQ3RDLG9CQUFJLFFBQVEsRUFBRSxRQUFGLENBQVo7QUFDQSxvQkFBSSxFQUFFLE1BQUYsSUFBWSxNQUFNLENBQU4sQ0FBWixJQUF3QixNQUFNLEdBQU4sQ0FBVSxFQUFFLE1BQVosRUFBb0IsTUFBcEIsS0FBK0IsQ0FBM0QsRUFBOEQ7QUFDMUQsc0JBQUUsaUJBQUYsRUFBcUIsT0FBckI7QUFDQSxzQkFBRSxNQUFGLEVBQVUsV0FBVixDQUFzQixNQUF0Qjs7QUFFQTtBQUNBLHNCQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCLFFBQWpCO0FBQ0g7QUFDSixhQVREO0FBZUg7Ozs7OztrQkFFVSxZOzs7Ozs7QUM5R2Y7Ozs7OztBQVBBO0FBQ0EsT0FBTyxDQUFQLEdBQVcsUUFBUSxlQUFSLENBQVg7QUFDQSxPQUFPLE1BQVAsR0FBZ0IsQ0FBaEI7QUFDQTs7QUFFQTs7QUFJQSxFQUFFLFFBQUYsRUFBWSxLQUFaLENBQWtCLFlBQVk7QUFDMUI7QUFDQSwyQkFBYSxJQUFiO0FBQ0gsQ0FIRDs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qIEF1dGhvciA6IFZpbmNlbnQgR2FycmVhdSAgLSB2aW5jZW50Z2FycmVhdS5jb21cbi8qIE1JVCBsaWNlbnNlOiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4vKiBEZW1vIC8gR2VuZXJhdG9yIDogdmluY2VudGdhcnJlYXUuY29tL3BhcnRpY2xlcy5qc1xuLyogR2l0SHViIDogZ2l0aHViLmNvbS9WaW5jZW50R2FycmVhdS9wYXJ0aWNsZXMuanNcbi8qIEhvdyB0byB1c2U/IDogQ2hlY2sgdGhlIEdpdEh1YiBSRUFETUVcbi8qIHYyLjAuMFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxudmFyIHBKUyA9IGZ1bmN0aW9uKHRhZ19pZCwgcGFyYW1zKXtcblxuICB2YXIgY2FudmFzX2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycrdGFnX2lkKycgPiAucGFydGljbGVzLWpzLWNhbnZhcy1lbCcpO1xuXG4gIC8qIHBhcnRpY2xlcy5qcyB2YXJpYWJsZXMgd2l0aCBkZWZhdWx0IHZhbHVlcyAqL1xuICB0aGlzLnBKUyA9IHtcbiAgICBjYW52YXM6IHtcbiAgICAgIGVsOiBjYW52YXNfZWwsXG4gICAgICB3OiBjYW52YXNfZWwub2Zmc2V0V2lkdGgsXG4gICAgICBoOiBjYW52YXNfZWwub2Zmc2V0SGVpZ2h0XG4gICAgfSxcbiAgICBwYXJ0aWNsZXM6IHtcbiAgICAgIG51bWJlcjoge1xuICAgICAgICB2YWx1ZTogNDAwLFxuICAgICAgICBkZW5zaXR5OiB7XG4gICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgIHZhbHVlX2FyZWE6IDgwMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgdmFsdWU6ICcjZmZmJ1xuICAgICAgfSxcbiAgICAgIHNoYXBlOiB7XG4gICAgICAgIHR5cGU6ICdjaXJjbGUnLFxuICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICBjb2xvcjogJyNmZjAwMDAnXG4gICAgICAgIH0sXG4gICAgICAgIHBvbHlnb246IHtcbiAgICAgICAgICBuYl9zaWRlczogNVxuICAgICAgICB9LFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgIHNyYzogJycsXG4gICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICBoZWlnaHQ6IDEwMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb3BhY2l0eToge1xuICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgcmFuZG9tOiBmYWxzZSxcbiAgICAgICAgYW5pbToge1xuICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3BlZWQ6IDIsXG4gICAgICAgICAgb3BhY2l0eV9taW46IDAsXG4gICAgICAgICAgc3luYzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgdmFsdWU6IDIwLFxuICAgICAgICByYW5kb206IGZhbHNlLFxuICAgICAgICBhbmltOiB7XG4gICAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgICBzcGVlZDogMjAsXG4gICAgICAgICAgc2l6ZV9taW46IDAsXG4gICAgICAgICAgc3luYzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGxpbmVfbGlua2VkOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgZGlzdGFuY2U6IDEwMCxcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgd2lkdGg6IDFcbiAgICAgIH0sXG4gICAgICBtb3ZlOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDIsXG4gICAgICAgIGRpcmVjdGlvbjogJ25vbmUnLFxuICAgICAgICByYW5kb206IGZhbHNlLFxuICAgICAgICBzdHJhaWdodDogZmFsc2UsXG4gICAgICAgIG91dF9tb2RlOiAnb3V0JyxcbiAgICAgICAgYm91bmNlOiBmYWxzZSxcbiAgICAgICAgYXR0cmFjdDoge1xuICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgcm90YXRlWDogMzAwMCxcbiAgICAgICAgICByb3RhdGVZOiAzMDAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhcnJheTogW11cbiAgICB9LFxuICAgIGludGVyYWN0aXZpdHk6IHtcbiAgICAgIGRldGVjdF9vbjogJ2NhbnZhcycsXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgb25ob3Zlcjoge1xuICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICBtb2RlOiAnZ3JhYidcbiAgICAgICAgfSxcbiAgICAgICAgb25jbGljazoge1xuICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICBtb2RlOiAncHVzaCdcbiAgICAgICAgfSxcbiAgICAgICAgcmVzaXplOiB0cnVlXG4gICAgICB9LFxuICAgICAgbW9kZXM6IHtcbiAgICAgICAgZ3JhYjp7XG4gICAgICAgICAgZGlzdGFuY2U6IDEwMCxcbiAgICAgICAgICBsaW5lX2xpbmtlZDp7XG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBidWJibGU6e1xuICAgICAgICAgIGRpc3RhbmNlOiAyMDAsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgZHVyYXRpb246IDAuNFxuICAgICAgICB9LFxuICAgICAgICByZXB1bHNlOntcbiAgICAgICAgICBkaXN0YW5jZTogMjAwLFxuICAgICAgICAgIGR1cmF0aW9uOiAwLjRcbiAgICAgICAgfSxcbiAgICAgICAgcHVzaDp7XG4gICAgICAgICAgcGFydGljbGVzX25iOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZTp7XG4gICAgICAgICAgcGFydGljbGVzX25iOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBtb3VzZTp7fVxuICAgIH0sXG4gICAgcmV0aW5hX2RldGVjdDogZmFsc2UsXG4gICAgZm46IHtcbiAgICAgIGludGVyYWN0OiB7fSxcbiAgICAgIG1vZGVzOiB7fSxcbiAgICAgIHZlbmRvcnM6e31cbiAgICB9LFxuICAgIHRtcDoge31cbiAgfTtcblxuICB2YXIgcEpTID0gdGhpcy5wSlM7XG5cbiAgLyogcGFyYW1zIHNldHRpbmdzICovXG4gIGlmKHBhcmFtcyl7XG4gICAgT2JqZWN0LmRlZXBFeHRlbmQocEpTLCBwYXJhbXMpO1xuICB9XG5cbiAgcEpTLnRtcC5vYmogPSB7XG4gICAgc2l6ZV92YWx1ZTogcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlLFxuICAgIHNpemVfYW5pbV9zcGVlZDogcEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uc3BlZWQsXG4gICAgbW92ZV9zcGVlZDogcEpTLnBhcnRpY2xlcy5tb3ZlLnNwZWVkLFxuICAgIGxpbmVfbGlua2VkX2Rpc3RhbmNlOiBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlLFxuICAgIGxpbmVfbGlua2VkX3dpZHRoOiBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLndpZHRoLFxuICAgIG1vZGVfZ3JhYl9kaXN0YW5jZTogcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5kaXN0YW5jZSxcbiAgICBtb2RlX2J1YmJsZV9kaXN0YW5jZTogcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlLFxuICAgIG1vZGVfYnViYmxlX3NpemU6IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplLFxuICAgIG1vZGVfcmVwdWxzZV9kaXN0YW5jZTogcEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZVxuICB9O1xuXG5cbiAgcEpTLmZuLnJldGluYUluaXQgPSBmdW5jdGlvbigpe1xuXG4gICAgaWYocEpTLnJldGluYV9kZXRlY3QgJiYgd2luZG93LmRldmljZVBpeGVsUmF0aW8gPiAxKXtcbiAgICAgIHBKUy5jYW52YXMucHhyYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvOyBcbiAgICAgIHBKUy50bXAucmV0aW5hID0gdHJ1ZTtcbiAgICB9IFxuICAgIGVsc2V7XG4gICAgICBwSlMuY2FudmFzLnB4cmF0aW8gPSAxO1xuICAgICAgcEpTLnRtcC5yZXRpbmEgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwSlMuY2FudmFzLncgPSBwSlMuY2FudmFzLmVsLm9mZnNldFdpZHRoICogcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgIHBKUy5jYW52YXMuaCA9IHBKUy5jYW52YXMuZWwub2Zmc2V0SGVpZ2h0ICogcEpTLmNhbnZhcy5weHJhdGlvO1xuXG4gICAgcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlID0gcEpTLnRtcC5vYmouc2l6ZV92YWx1ZSAqIHBKUy5jYW52YXMucHhyYXRpbztcbiAgICBwSlMucGFydGljbGVzLnNpemUuYW5pbS5zcGVlZCA9IHBKUy50bXAub2JqLnNpemVfYW5pbV9zcGVlZCAqIHBKUy5jYW52YXMucHhyYXRpbztcbiAgICBwSlMucGFydGljbGVzLm1vdmUuc3BlZWQgPSBwSlMudG1wLm9iai5tb3ZlX3NwZWVkICogcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgIHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2UgPSBwSlMudG1wLm9iai5saW5lX2xpbmtlZF9kaXN0YW5jZSAqIHBKUy5jYW52YXMucHhyYXRpbztcbiAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmRpc3RhbmNlID0gcEpTLnRtcC5vYmoubW9kZV9ncmFiX2Rpc3RhbmNlICogcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSA9IHBKUy50bXAub2JqLm1vZGVfYnViYmxlX2Rpc3RhbmNlICogcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgIHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGggPSBwSlMudG1wLm9iai5saW5lX2xpbmtlZF93aWR0aCAqIHBKUy5jYW52YXMucHhyYXRpbztcbiAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSA9IHBKUy50bXAub2JqLm1vZGVfYnViYmxlX3NpemUgKiBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgcEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZSA9IHBKUy50bXAub2JqLm1vZGVfcmVwdWxzZV9kaXN0YW5jZSAqIHBKUy5jYW52YXMucHhyYXRpbztcblxuICB9O1xuXG5cblxuICAvKiAtLS0tLS0tLS0tIHBKUyBmdW5jdGlvbnMgLSBjYW52YXMgLS0tLS0tLS0tLS0tICovXG5cbiAgcEpTLmZuLmNhbnZhc0luaXQgPSBmdW5jdGlvbigpe1xuICAgIHBKUy5jYW52YXMuY3R4ID0gcEpTLmNhbnZhcy5lbC5nZXRDb250ZXh0KCcyZCcpO1xuICB9O1xuXG4gIHBKUy5mbi5jYW52YXNTaXplID0gZnVuY3Rpb24oKXtcblxuICAgIHBKUy5jYW52YXMuZWwud2lkdGggPSBwSlMuY2FudmFzLnc7XG4gICAgcEpTLmNhbnZhcy5lbC5oZWlnaHQgPSBwSlMuY2FudmFzLmg7XG5cbiAgICBpZihwSlMgJiYgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLnJlc2l6ZSl7XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgcEpTLmNhbnZhcy53ID0gcEpTLmNhbnZhcy5lbC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICBwSlMuY2FudmFzLmggPSBwSlMuY2FudmFzLmVsLm9mZnNldEhlaWdodDtcblxuICAgICAgICAgIC8qIHJlc2l6ZSBjYW52YXMgKi9cbiAgICAgICAgICBpZihwSlMudG1wLnJldGluYSl7XG4gICAgICAgICAgICBwSlMuY2FudmFzLncgKj0gcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgICAgICAgICAgcEpTLmNhbnZhcy5oICo9IHBKUy5jYW52YXMucHhyYXRpbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwSlMuY2FudmFzLmVsLndpZHRoID0gcEpTLmNhbnZhcy53O1xuICAgICAgICAgIHBKUy5jYW52YXMuZWwuaGVpZ2h0ID0gcEpTLmNhbnZhcy5oO1xuXG4gICAgICAgICAgLyogcmVwYWludCBjYW52YXMgb24gYW5pbSBkaXNhYmxlZCAqL1xuICAgICAgICAgIGlmKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKXtcbiAgICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNFbXB0eSgpO1xuICAgICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0NyZWF0ZSgpO1xuICAgICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcbiAgICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmRlbnNpdHlBdXRvUGFydGljbGVzKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIC8qIGRlbnNpdHkgcGFydGljbGVzIGVuYWJsZWQgKi9cbiAgICAgICAgcEpTLmZuLnZlbmRvcnMuZGVuc2l0eUF1dG9QYXJ0aWNsZXMoKTtcblxuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi5jYW52YXNQYWludCA9IGZ1bmN0aW9uKCl7XG4gICAgcEpTLmNhbnZhcy5jdHguZmlsbFJlY3QoMCwgMCwgcEpTLmNhbnZhcy53LCBwSlMuY2FudmFzLmgpO1xuICB9O1xuXG4gIHBKUy5mbi5jYW52YXNDbGVhciA9IGZ1bmN0aW9uKCl7XG4gICAgcEpTLmNhbnZhcy5jdHguY2xlYXJSZWN0KDAsIDAsIHBKUy5jYW52YXMudywgcEpTLmNhbnZhcy5oKTtcbiAgfTtcblxuXG4gIC8qIC0tLS0tLS0tLSBwSlMgZnVuY3Rpb25zIC0gcGFydGljbGVzIC0tLS0tLS0tLS0tICovXG5cbiAgcEpTLmZuLnBhcnRpY2xlID0gZnVuY3Rpb24oY29sb3IsIG9wYWNpdHksIHBvc2l0aW9uKXtcblxuICAgIC8qIHNpemUgKi9cbiAgICB0aGlzLnJhZGl1cyA9IChwSlMucGFydGljbGVzLnNpemUucmFuZG9tID8gTWF0aC5yYW5kb20oKSA6IDEpICogcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlO1xuICAgIGlmKHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLmVuYWJsZSl7XG4gICAgICB0aGlzLnNpemVfc3RhdHVzID0gZmFsc2U7XG4gICAgICB0aGlzLnZzID0gcEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uc3BlZWQgLyAxMDA7XG4gICAgICBpZighcEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uc3luYyl7XG4gICAgICAgIHRoaXMudnMgPSB0aGlzLnZzICogTWF0aC5yYW5kb20oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBwb3NpdGlvbiAqL1xuICAgIHRoaXMueCA9IHBvc2l0aW9uID8gcG9zaXRpb24ueCA6IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLnc7XG4gICAgdGhpcy55ID0gcG9zaXRpb24gPyBwb3NpdGlvbi55IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaDtcblxuICAgIC8qIGNoZWNrIHBvc2l0aW9uICAtIGludG8gdGhlIGNhbnZhcyAqL1xuICAgIGlmKHRoaXMueCA+IHBKUy5jYW52YXMudyAtIHRoaXMucmFkaXVzKjIpIHRoaXMueCA9IHRoaXMueCAtIHRoaXMucmFkaXVzO1xuICAgIGVsc2UgaWYodGhpcy54IDwgdGhpcy5yYWRpdXMqMikgdGhpcy54ID0gdGhpcy54ICsgdGhpcy5yYWRpdXM7XG4gICAgaWYodGhpcy55ID4gcEpTLmNhbnZhcy5oIC0gdGhpcy5yYWRpdXMqMikgdGhpcy55ID0gdGhpcy55IC0gdGhpcy5yYWRpdXM7XG4gICAgZWxzZSBpZih0aGlzLnkgPCB0aGlzLnJhZGl1cyoyKSB0aGlzLnkgPSB0aGlzLnkgKyB0aGlzLnJhZGl1cztcblxuICAgIC8qIGNoZWNrIHBvc2l0aW9uIC0gYXZvaWQgb3ZlcmxhcCAqL1xuICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5ib3VuY2Upe1xuICAgICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tPdmVybGFwKHRoaXMsIHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICAvKiBjb2xvciAqL1xuICAgIHRoaXMuY29sb3IgPSB7fTtcbiAgICBpZih0eXBlb2YoY29sb3IudmFsdWUpID09ICdvYmplY3QnKXtcblxuICAgICAgaWYoY29sb3IudmFsdWUgaW5zdGFuY2VvZiBBcnJheSl7XG4gICAgICAgIHZhciBjb2xvcl9zZWxlY3RlZCA9IGNvbG9yLnZhbHVlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBKUy5wYXJ0aWNsZXMuY29sb3IudmFsdWUubGVuZ3RoKV07XG4gICAgICAgIHRoaXMuY29sb3IucmdiID0gaGV4VG9SZ2IoY29sb3Jfc2VsZWN0ZWQpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGlmKGNvbG9yLnZhbHVlLnIgIT0gdW5kZWZpbmVkICYmIGNvbG9yLnZhbHVlLmcgIT0gdW5kZWZpbmVkICYmIGNvbG9yLnZhbHVlLmIgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICB0aGlzLmNvbG9yLnJnYiA9IHtcbiAgICAgICAgICAgIHI6IGNvbG9yLnZhbHVlLnIsXG4gICAgICAgICAgICBnOiBjb2xvci52YWx1ZS5nLFxuICAgICAgICAgICAgYjogY29sb3IudmFsdWUuYlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihjb2xvci52YWx1ZS5oICE9IHVuZGVmaW5lZCAmJiBjb2xvci52YWx1ZS5zICE9IHVuZGVmaW5lZCAmJiBjb2xvci52YWx1ZS5sICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgdGhpcy5jb2xvci5oc2wgPSB7XG4gICAgICAgICAgICBoOiBjb2xvci52YWx1ZS5oLFxuICAgICAgICAgICAgczogY29sb3IudmFsdWUucyxcbiAgICAgICAgICAgIGw6IGNvbG9yLnZhbHVlLmxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgICBlbHNlIGlmKGNvbG9yLnZhbHVlID09ICdyYW5kb20nKXtcbiAgICAgIHRoaXMuY29sb3IucmdiID0ge1xuICAgICAgICByOiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDI1NSAtIDAgKyAxKSkgKyAwKSxcbiAgICAgICAgZzogKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyNTUgLSAwICsgMSkpICsgMCksXG4gICAgICAgIGI6IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjU1IC0gMCArIDEpKSArIDApXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYodHlwZW9mKGNvbG9yLnZhbHVlKSA9PSAnc3RyaW5nJyl7XG4gICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICB0aGlzLmNvbG9yLnJnYiA9IGhleFRvUmdiKHRoaXMuY29sb3IudmFsdWUpO1xuICAgIH1cblxuICAgIC8qIG9wYWNpdHkgKi9cbiAgICB0aGlzLm9wYWNpdHkgPSAocEpTLnBhcnRpY2xlcy5vcGFjaXR5LnJhbmRvbSA/IE1hdGgucmFuZG9tKCkgOiAxKSAqIHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZTtcbiAgICBpZihwSlMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5lbmFibGUpe1xuICAgICAgdGhpcy5vcGFjaXR5X3N0YXR1cyA9IGZhbHNlO1xuICAgICAgdGhpcy52byA9IHBKUy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLnNwZWVkIC8gMTAwO1xuICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLnN5bmMpe1xuICAgICAgICB0aGlzLnZvID0gdGhpcy52byAqIE1hdGgucmFuZG9tKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogYW5pbWF0aW9uIC0gdmVsb2NpdHkgZm9yIHNwZWVkICovXG4gICAgdmFyIHZlbGJhc2UgPSB7fVxuICAgIHN3aXRjaChwSlMucGFydGljbGVzLm1vdmUuZGlyZWN0aW9uKXtcbiAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgIHZlbGJhc2UgPSB7IHg6MCwgeTotMSB9O1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3AtcmlnaHQnOlxuICAgICAgICB2ZWxiYXNlID0geyB4OjAuNSwgeTotMC41IH07XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgdmVsYmFzZSA9IHsgeDoxLCB5Oi0wIH07XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbS1yaWdodCc6XG4gICAgICAgIHZlbGJhc2UgPSB7IHg6MC41LCB5OjAuNSB9O1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICB2ZWxiYXNlID0geyB4OjAsIHk6MSB9O1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20tbGVmdCc6XG4gICAgICAgIHZlbGJhc2UgPSB7IHg6LTAuNSwgeToxIH07XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICB2ZWxiYXNlID0geyB4Oi0xLCB5OjAgfTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG9wLWxlZnQnOlxuICAgICAgICB2ZWxiYXNlID0geyB4Oi0wLjUsIHk6LTAuNSB9O1xuICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB2ZWxiYXNlID0geyB4OjAsIHk6MCB9O1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLnN0cmFpZ2h0KXtcbiAgICAgIHRoaXMudnggPSB2ZWxiYXNlLng7XG4gICAgICB0aGlzLnZ5ID0gdmVsYmFzZS55O1xuICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLnJhbmRvbSl7XG4gICAgICAgIHRoaXMudnggPSB0aGlzLnZ4ICogKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICB0aGlzLnZ5ID0gdGhpcy52eSAqIChNYXRoLnJhbmRvbSgpKTtcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMudnggPSB2ZWxiYXNlLnggKyBNYXRoLnJhbmRvbSgpLTAuNTtcbiAgICAgIHRoaXMudnkgPSB2ZWxiYXNlLnkgKyBNYXRoLnJhbmRvbSgpLTAuNTtcbiAgICB9XG5cbiAgICAvLyB2YXIgdGhldGEgPSAyLjAgKiBNYXRoLlBJICogTWF0aC5yYW5kb20oKTtcbiAgICAvLyB0aGlzLnZ4ID0gTWF0aC5jb3ModGhldGEpO1xuICAgIC8vIHRoaXMudnkgPSBNYXRoLnNpbih0aGV0YSk7XG5cbiAgICB0aGlzLnZ4X2kgPSB0aGlzLnZ4O1xuICAgIHRoaXMudnlfaSA9IHRoaXMudnk7XG5cbiAgICBcblxuICAgIC8qIGlmIHNoYXBlIGlzIGltYWdlICovXG5cbiAgICB2YXIgc2hhcGVfdHlwZSA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUudHlwZTtcbiAgICBpZih0eXBlb2Yoc2hhcGVfdHlwZSkgPT0gJ29iamVjdCcpe1xuICAgICAgaWYoc2hhcGVfdHlwZSBpbnN0YW5jZW9mIEFycmF5KXtcbiAgICAgICAgdmFyIHNoYXBlX3NlbGVjdGVkID0gc2hhcGVfdHlwZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaGFwZV90eXBlLmxlbmd0aCldO1xuICAgICAgICB0aGlzLnNoYXBlID0gc2hhcGVfc2VsZWN0ZWQ7XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLnNoYXBlID0gc2hhcGVfdHlwZTtcbiAgICB9XG5cbiAgICBpZih0aGlzLnNoYXBlID09ICdpbWFnZScpe1xuICAgICAgdmFyIHNoID0gcEpTLnBhcnRpY2xlcy5zaGFwZTtcbiAgICAgIHRoaXMuaW1nID0ge1xuICAgICAgICBzcmM6IHNoLmltYWdlLnNyYyxcbiAgICAgICAgcmF0aW86IHNoLmltYWdlLndpZHRoIC8gc2guaW1hZ2UuaGVpZ2h0XG4gICAgICB9XG4gICAgICBpZighdGhpcy5pbWcucmF0aW8pIHRoaXMuaW1nLnJhdGlvID0gMTtcbiAgICAgIGlmKHBKUy50bXAuaW1nX3R5cGUgPT0gJ3N2ZycgJiYgcEpTLnRtcC5zb3VyY2Vfc3ZnICE9IHVuZGVmaW5lZCl7XG4gICAgICAgIHBKUy5mbi52ZW5kb3JzLmNyZWF0ZVN2Z0ltZyh0aGlzKTtcbiAgICAgICAgaWYocEpTLnRtcC5wdXNoaW5nKXtcbiAgICAgICAgICB0aGlzLmltZy5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIFxuXG4gIH07XG5cblxuICBwSlMuZm4ucGFydGljbGUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBwID0gdGhpcztcblxuICAgIGlmKHAucmFkaXVzX2J1YmJsZSAhPSB1bmRlZmluZWQpe1xuICAgICAgdmFyIHJhZGl1cyA9IHAucmFkaXVzX2J1YmJsZTsgXG4gICAgfWVsc2V7XG4gICAgICB2YXIgcmFkaXVzID0gcC5yYWRpdXM7XG4gICAgfVxuXG4gICAgaWYocC5vcGFjaXR5X2J1YmJsZSAhPSB1bmRlZmluZWQpe1xuICAgICAgdmFyIG9wYWNpdHkgPSBwLm9wYWNpdHlfYnViYmxlO1xuICAgIH1lbHNle1xuICAgICAgdmFyIG9wYWNpdHkgPSBwLm9wYWNpdHk7XG4gICAgfVxuXG4gICAgaWYocC5jb2xvci5yZ2Ipe1xuICAgICAgdmFyIGNvbG9yX3ZhbHVlID0gJ3JnYmEoJytwLmNvbG9yLnJnYi5yKycsJytwLmNvbG9yLnJnYi5nKycsJytwLmNvbG9yLnJnYi5iKycsJytvcGFjaXR5KycpJztcbiAgICB9ZWxzZXtcbiAgICAgIHZhciBjb2xvcl92YWx1ZSA9ICdoc2xhKCcrcC5jb2xvci5oc2wuaCsnLCcrcC5jb2xvci5oc2wucysnJSwnK3AuY29sb3IuaHNsLmwrJyUsJytvcGFjaXR5KycpJztcbiAgICB9XG5cbiAgICBwSlMuY2FudmFzLmN0eC5maWxsU3R5bGUgPSBjb2xvcl92YWx1ZTtcbiAgICBwSlMuY2FudmFzLmN0eC5iZWdpblBhdGgoKTtcblxuICAgIHN3aXRjaChwLnNoYXBlKXtcblxuICAgICAgY2FzZSAnY2lyY2xlJzpcbiAgICAgICAgcEpTLmNhbnZhcy5jdHguYXJjKHAueCwgcC55LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZWRnZSc6XG4gICAgICAgIHBKUy5jYW52YXMuY3R4LnJlY3QocC54LXJhZGl1cywgcC55LXJhZGl1cywgcmFkaXVzKjIsIHJhZGl1cyoyKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICd0cmlhbmdsZSc6XG4gICAgICAgIHBKUy5mbi52ZW5kb3JzLmRyYXdTaGFwZShwSlMuY2FudmFzLmN0eCwgcC54LXJhZGl1cywgcC55K3JhZGl1cyAvIDEuNjYsIHJhZGl1cyoyLCAzLCAyKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdwb2x5Z29uJzpcbiAgICAgICAgcEpTLmZuLnZlbmRvcnMuZHJhd1NoYXBlKFxuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LFxuICAgICAgICAgIHAueCAtIHJhZGl1cyAvIChwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMvMy41KSwgLy8gc3RhcnRYXG4gICAgICAgICAgcC55IC0gcmFkaXVzIC8gKDIuNjYvMy41KSwgLy8gc3RhcnRZXG4gICAgICAgICAgcmFkaXVzKjIuNjYgLyAocEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLzMpLCAvLyBzaWRlTGVuZ3RoXG4gICAgICAgICAgcEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLCAvLyBzaWRlQ291bnROdW1lcmF0b3JcbiAgICAgICAgICAxIC8vIHNpZGVDb3VudERlbm9taW5hdG9yXG4gICAgICAgICk7XG4gICAgICBicmVhaztcblxuICAgICAgY2FzZSAnc3Rhcic6XG4gICAgICAgIHBKUy5mbi52ZW5kb3JzLmRyYXdTaGFwZShcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eCxcbiAgICAgICAgICBwLnggLSByYWRpdXMqMiAvIChwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMvNCksIC8vIHN0YXJ0WFxuICAgICAgICAgIHAueSAtIHJhZGl1cyAvICgyKjIuNjYvMy41KSwgLy8gc3RhcnRZXG4gICAgICAgICAgcmFkaXVzKjIqMi42NiAvIChwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMvMyksIC8vIHNpZGVMZW5ndGhcbiAgICAgICAgICBwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMsIC8vIHNpZGVDb3VudE51bWVyYXRvclxuICAgICAgICAgIDIgLy8gc2lkZUNvdW50RGVub21pbmF0b3JcbiAgICAgICAgKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdpbWFnZSc6XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhdygpe1xuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIGltZ19vYmosXG4gICAgICAgICAgICBwLngtcmFkaXVzLFxuICAgICAgICAgICAgcC55LXJhZGl1cyxcbiAgICAgICAgICAgIHJhZGl1cyoyLFxuICAgICAgICAgICAgcmFkaXVzKjIgLyBwLmltZy5yYXRpb1xuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihwSlMudG1wLmltZ190eXBlID09ICdzdmcnKXtcbiAgICAgICAgICB2YXIgaW1nX29iaiA9IHAuaW1nLm9iajtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgdmFyIGltZ19vYmogPSBwSlMudG1wLmltZ19vYmo7XG4gICAgICAgIH1cblxuICAgICAgICBpZihpbWdfb2JqKXtcbiAgICAgICAgICBkcmF3KCk7XG4gICAgICAgIH1cblxuICAgICAgYnJlYWs7XG5cbiAgICB9XG5cbiAgICBwSlMuY2FudmFzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgIGlmKHBKUy5wYXJ0aWNsZXMuc2hhcGUuc3Ryb2tlLndpZHRoID4gMCl7XG4gICAgICBwSlMuY2FudmFzLmN0eC5zdHJva2VTdHlsZSA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUuc3Ryb2tlLmNvbG9yO1xuICAgICAgcEpTLmNhbnZhcy5jdHgubGluZVdpZHRoID0gcEpTLnBhcnRpY2xlcy5zaGFwZS5zdHJva2Uud2lkdGg7XG4gICAgICBwSlMuY2FudmFzLmN0eC5zdHJva2UoKTtcbiAgICB9XG4gICAgXG4gICAgcEpTLmNhbnZhcy5jdHguZmlsbCgpO1xuICAgIFxuICB9O1xuXG5cbiAgcEpTLmZuLnBhcnRpY2xlc0NyZWF0ZSA9IGZ1bmN0aW9uKCl7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHBKUy5wYXJ0aWNsZXMubnVtYmVyLnZhbHVlOyBpKyspIHtcbiAgICAgIHBKUy5wYXJ0aWNsZXMuYXJyYXkucHVzaChuZXcgcEpTLmZuLnBhcnRpY2xlKHBKUy5wYXJ0aWNsZXMuY29sb3IsIHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSkpO1xuICAgIH1cbiAgfTtcblxuICBwSlMuZm4ucGFydGljbGVzVXBkYXRlID0gZnVuY3Rpb24oKXtcblxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwSlMucGFydGljbGVzLmFycmF5Lmxlbmd0aDsgaSsrKXtcblxuICAgICAgLyogdGhlIHBhcnRpY2xlICovXG4gICAgICB2YXIgcCA9IHBKUy5wYXJ0aWNsZXMuYXJyYXlbaV07XG5cbiAgICAgIC8vIHZhciBkID0gKCBkeCA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc194IC0gcC54ICkgKiBkeCArICggZHkgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSAtIHAueSApICogZHk7XG4gICAgICAvLyB2YXIgZiA9IC1CQU5HX1NJWkUgLyBkO1xuICAgICAgLy8gaWYgKCBkIDwgQkFOR19TSVpFICkge1xuICAgICAgLy8gICAgIHZhciB0ID0gTWF0aC5hdGFuMiggZHksIGR4ICk7XG4gICAgICAvLyAgICAgcC52eCA9IGYgKiBNYXRoLmNvcyh0KTtcbiAgICAgIC8vICAgICBwLnZ5ID0gZiAqIE1hdGguc2luKHQpO1xuICAgICAgLy8gfVxuXG4gICAgICAvKiBtb3ZlIHRoZSBwYXJ0aWNsZSAqL1xuICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSl7XG4gICAgICAgIHZhciBtcyA9IHBKUy5wYXJ0aWNsZXMubW92ZS5zcGVlZC8yO1xuICAgICAgICBwLnggKz0gcC52eCAqIG1zO1xuICAgICAgICBwLnkgKz0gcC52eSAqIG1zO1xuICAgICAgfVxuXG4gICAgICAvKiBjaGFuZ2Ugb3BhY2l0eSBzdGF0dXMgKi9cbiAgICAgIGlmKHBKUy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLmVuYWJsZSkge1xuICAgICAgICBpZihwLm9wYWNpdHlfc3RhdHVzID09IHRydWUpIHtcbiAgICAgICAgICBpZihwLm9wYWNpdHkgPj0gcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlKSBwLm9wYWNpdHlfc3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgcC5vcGFjaXR5ICs9IHAudm87XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICBpZihwLm9wYWNpdHkgPD0gcEpTLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0ub3BhY2l0eV9taW4pIHAub3BhY2l0eV9zdGF0dXMgPSB0cnVlO1xuICAgICAgICAgIHAub3BhY2l0eSAtPSBwLnZvO1xuICAgICAgICB9XG4gICAgICAgIGlmKHAub3BhY2l0eSA8IDApIHAub3BhY2l0eSA9IDA7XG4gICAgICB9XG5cbiAgICAgIC8qIGNoYW5nZSBzaXplICovXG4gICAgICBpZihwSlMucGFydGljbGVzLnNpemUuYW5pbS5lbmFibGUpe1xuICAgICAgICBpZihwLnNpemVfc3RhdHVzID09IHRydWUpe1xuICAgICAgICAgIGlmKHAucmFkaXVzID49IHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSkgcC5zaXplX3N0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgIHAucmFkaXVzICs9IHAudnM7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIGlmKHAucmFkaXVzIDw9IHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNpemVfbWluKSBwLnNpemVfc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICBwLnJhZGl1cyAtPSBwLnZzO1xuICAgICAgICB9XG4gICAgICAgIGlmKHAucmFkaXVzIDwgMCkgcC5yYWRpdXMgPSAwO1xuICAgICAgfVxuXG4gICAgICAvKiBjaGFuZ2UgcGFydGljbGUgcG9zaXRpb24gaWYgaXQgaXMgb3V0IG9mIGNhbnZhcyAqL1xuICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlID09ICdib3VuY2UnKXtcbiAgICAgICAgdmFyIG5ld19wb3MgPSB7XG4gICAgICAgICAgeF9sZWZ0OiBwLnJhZGl1cyxcbiAgICAgICAgICB4X3JpZ2h0OiAgcEpTLmNhbnZhcy53LFxuICAgICAgICAgIHlfdG9wOiBwLnJhZGl1cyxcbiAgICAgICAgICB5X2JvdHRvbTogcEpTLmNhbnZhcy5oXG4gICAgICAgIH1cbiAgICAgIH1lbHNle1xuICAgICAgICB2YXIgbmV3X3BvcyA9IHtcbiAgICAgICAgICB4X2xlZnQ6IC1wLnJhZGl1cyxcbiAgICAgICAgICB4X3JpZ2h0OiBwSlMuY2FudmFzLncgKyBwLnJhZGl1cyxcbiAgICAgICAgICB5X3RvcDogLXAucmFkaXVzLFxuICAgICAgICAgIHlfYm90dG9tOiBwSlMuY2FudmFzLmggKyBwLnJhZGl1c1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKHAueCAtIHAucmFkaXVzID4gcEpTLmNhbnZhcy53KXtcbiAgICAgICAgcC54ID0gbmV3X3Bvcy54X2xlZnQ7XG4gICAgICAgIHAueSA9IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLmg7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHAueCArIHAucmFkaXVzIDwgMCl7XG4gICAgICAgIHAueCA9IG5ld19wb3MueF9yaWdodDtcbiAgICAgICAgcC55ID0gTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaDtcbiAgICAgIH1cbiAgICAgIGlmKHAueSAtIHAucmFkaXVzID4gcEpTLmNhbnZhcy5oKXtcbiAgICAgICAgcC55ID0gbmV3X3Bvcy55X3RvcDtcbiAgICAgICAgcC54ID0gTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMudztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYocC55ICsgcC5yYWRpdXMgPCAwKXtcbiAgICAgICAgcC55ID0gbmV3X3Bvcy55X2JvdHRvbTtcbiAgICAgICAgcC54ID0gTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMudztcbiAgICAgIH1cblxuICAgICAgLyogb3V0IG9mIGNhbnZhcyBtb2RlcyAqL1xuICAgICAgc3dpdGNoKHBKUy5wYXJ0aWNsZXMubW92ZS5vdXRfbW9kZSl7XG4gICAgICAgIGNhc2UgJ2JvdW5jZSc6XG4gICAgICAgICAgaWYgKHAueCArIHAucmFkaXVzID4gcEpTLmNhbnZhcy53KSBwLnZ4ID0gLXAudng7XG4gICAgICAgICAgZWxzZSBpZiAocC54IC0gcC5yYWRpdXMgPCAwKSBwLnZ4ID0gLXAudng7XG4gICAgICAgICAgaWYgKHAueSArIHAucmFkaXVzID4gcEpTLmNhbnZhcy5oKSBwLnZ5ID0gLXAudnk7XG4gICAgICAgICAgZWxzZSBpZiAocC55IC0gcC5yYWRpdXMgPCAwKSBwLnZ5ID0gLXAudnk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvKiBldmVudHMgKi9cbiAgICAgIGlmKGlzSW5BcnJheSgnZ3JhYicsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpKXtcbiAgICAgICAgcEpTLmZuLm1vZGVzLmdyYWJQYXJ0aWNsZShwKTtcbiAgICAgIH1cblxuICAgICAgaWYoaXNJbkFycmF5KCdidWJibGUnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSB8fCBpc0luQXJyYXkoJ2J1YmJsZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKXtcbiAgICAgICAgcEpTLmZuLm1vZGVzLmJ1YmJsZVBhcnRpY2xlKHApO1xuICAgICAgfVxuXG4gICAgICBpZihpc0luQXJyYXkoJ3JlcHVsc2UnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSB8fCBpc0luQXJyYXkoJ3JlcHVsc2UnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSl7XG4gICAgICAgIHBKUy5mbi5tb2Rlcy5yZXB1bHNlUGFydGljbGUocCk7XG4gICAgICB9XG5cbiAgICAgIC8qIGludGVyYWN0aW9uIGF1dG8gYmV0d2VlbiBwYXJ0aWNsZXMgKi9cbiAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZW5hYmxlIHx8IHBKUy5wYXJ0aWNsZXMubW92ZS5hdHRyYWN0LmVuYWJsZSl7XG4gICAgICAgIGZvcih2YXIgaiA9IGkgKyAxOyBqIDwgcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgdmFyIHAyID0gcEpTLnBhcnRpY2xlcy5hcnJheVtqXTtcblxuICAgICAgICAgIC8qIGxpbmsgcGFydGljbGVzICovXG4gICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5lbmFibGUpe1xuICAgICAgICAgICAgcEpTLmZuLmludGVyYWN0LmxpbmtQYXJ0aWNsZXMocCxwMik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogYXR0cmFjdCBwYXJ0aWNsZXMgKi9cbiAgICAgICAgICBpZihwSlMucGFydGljbGVzLm1vdmUuYXR0cmFjdC5lbmFibGUpe1xuICAgICAgICAgICAgcEpTLmZuLmludGVyYWN0LmF0dHJhY3RQYXJ0aWNsZXMocCxwMik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogYm91bmNlIHBhcnRpY2xlcyAqL1xuICAgICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5ib3VuY2Upe1xuICAgICAgICAgICAgcEpTLmZuLmludGVyYWN0LmJvdW5jZVBhcnRpY2xlcyhwLHAyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICB9XG5cbiAgfTtcblxuICBwSlMuZm4ucGFydGljbGVzRHJhdyA9IGZ1bmN0aW9uKCl7XG5cbiAgICAvKiBjbGVhciBjYW52YXMgKi9cbiAgICBwSlMuY2FudmFzLmN0eC5jbGVhclJlY3QoMCwgMCwgcEpTLmNhbnZhcy53LCBwSlMuY2FudmFzLmgpO1xuXG4gICAgLyogdXBkYXRlIGVhY2ggcGFydGljbGVzIHBhcmFtICovXG4gICAgcEpTLmZuLnBhcnRpY2xlc1VwZGF0ZSgpO1xuXG4gICAgLyogZHJhdyBlYWNoIHBhcnRpY2xlICovXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgdmFyIHAgPSBwSlMucGFydGljbGVzLmFycmF5W2ldO1xuICAgICAgcC5kcmF3KCk7XG4gICAgfVxuXG4gIH07XG5cbiAgcEpTLmZuLnBhcnRpY2xlc0VtcHR5ID0gZnVuY3Rpb24oKXtcbiAgICBwSlMucGFydGljbGVzLmFycmF5ID0gW107XG4gIH07XG5cbiAgcEpTLmZuLnBhcnRpY2xlc1JlZnJlc2ggPSBmdW5jdGlvbigpe1xuXG4gICAgLyogaW5pdCBhbGwgKi9cbiAgICBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi5jaGVja0FuaW1GcmFtZSk7XG4gICAgY2FuY2VsUmVxdWVzdEFuaW1GcmFtZShwSlMuZm4uZHJhd0FuaW1GcmFtZSk7XG4gICAgcEpTLnRtcC5zb3VyY2Vfc3ZnID0gdW5kZWZpbmVkO1xuICAgIHBKUy50bXAuaW1nX29iaiA9IHVuZGVmaW5lZDtcbiAgICBwSlMudG1wLmNvdW50X3N2ZyA9IDA7XG4gICAgcEpTLmZuLnBhcnRpY2xlc0VtcHR5KCk7XG4gICAgcEpTLmZuLmNhbnZhc0NsZWFyKCk7XG4gICAgXG4gICAgLyogcmVzdGFydCAqL1xuICAgIHBKUy5mbi52ZW5kb3JzLnN0YXJ0KCk7XG5cbiAgfTtcblxuXG4gIC8qIC0tLS0tLS0tLS0gcEpTIGZ1bmN0aW9ucyAtIHBhcnRpY2xlcyBpbnRlcmFjdGlvbiAtLS0tLS0tLS0tLS0gKi9cblxuICBwSlMuZm4uaW50ZXJhY3QubGlua1BhcnRpY2xlcyA9IGZ1bmN0aW9uKHAxLCBwMil7XG5cbiAgICB2YXIgZHggPSBwMS54IC0gcDIueCxcbiAgICAgICAgZHkgPSBwMS55IC0gcDIueSxcbiAgICAgICAgZGlzdCA9IE1hdGguc3FydChkeCpkeCArIGR5KmR5KTtcblxuICAgIC8qIGRyYXcgYSBsaW5lIGJldHdlZW4gcDEgYW5kIHAyIGlmIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZW0gaXMgdW5kZXIgdGhlIGNvbmZpZyBkaXN0YW5jZSAqL1xuICAgIGlmKGRpc3QgPD0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSl7XG5cbiAgICAgIHZhciBvcGFjaXR5X2xpbmUgPSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLm9wYWNpdHkgLSAoZGlzdCAvICgxL3BKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQub3BhY2l0eSkpIC8gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZTtcblxuICAgICAgaWYob3BhY2l0eV9saW5lID4gMCl7ICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC8qIHN0eWxlICovXG4gICAgICAgIHZhciBjb2xvcl9saW5lID0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5jb2xvcl9yZ2JfbGluZTtcbiAgICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgnK2NvbG9yX2xpbmUucisnLCcrY29sb3JfbGluZS5nKycsJytjb2xvcl9saW5lLmIrJywnK29wYWNpdHlfbGluZSsnKSc7XG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVXaWR0aCA9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGg7XG4gICAgICAgIC8vcEpTLmNhbnZhcy5jdHgubGluZUNhcCA9ICdyb3VuZCc7IC8qIHBlcmZvcm1hbmNlIGlzc3VlICovXG4gICAgICAgIFxuICAgICAgICAvKiBwYXRoICovXG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBwSlMuY2FudmFzLmN0eC5tb3ZlVG8ocDEueCwgcDEueSk7XG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVUbyhwMi54LCBwMi55KTtcbiAgICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi5pbnRlcmFjdC5hdHRyYWN0UGFydGljbGVzICA9IGZ1bmN0aW9uKHAxLCBwMil7XG5cbiAgICAvKiBjb25kZW5zZWQgcGFydGljbGVzICovXG4gICAgdmFyIGR4ID0gcDEueCAtIHAyLngsXG4gICAgICAgIGR5ID0gcDEueSAtIHAyLnksXG4gICAgICAgIGRpc3QgPSBNYXRoLnNxcnQoZHgqZHggKyBkeSpkeSk7XG5cbiAgICBpZihkaXN0IDw9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2Upe1xuXG4gICAgICB2YXIgYXggPSBkeC8ocEpTLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3Qucm90YXRlWCoxMDAwKSxcbiAgICAgICAgICBheSA9IGR5LyhwSlMucGFydGljbGVzLm1vdmUuYXR0cmFjdC5yb3RhdGVZKjEwMDApO1xuXG4gICAgICBwMS52eCAtPSBheDtcbiAgICAgIHAxLnZ5IC09IGF5O1xuXG4gICAgICBwMi52eCArPSBheDtcbiAgICAgIHAyLnZ5ICs9IGF5O1xuXG4gICAgfVxuICAgIFxuXG4gIH1cblxuXG4gIHBKUy5mbi5pbnRlcmFjdC5ib3VuY2VQYXJ0aWNsZXMgPSBmdW5jdGlvbihwMSwgcDIpe1xuXG4gICAgdmFyIGR4ID0gcDEueCAtIHAyLngsXG4gICAgICAgIGR5ID0gcDEueSAtIHAyLnksXG4gICAgICAgIGRpc3QgPSBNYXRoLnNxcnQoZHgqZHggKyBkeSpkeSksXG4gICAgICAgIGRpc3RfcCA9IHAxLnJhZGl1cytwMi5yYWRpdXM7XG5cbiAgICBpZihkaXN0IDw9IGRpc3RfcCl7XG4gICAgICBwMS52eCA9IC1wMS52eDtcbiAgICAgIHAxLnZ5ID0gLXAxLnZ5O1xuXG4gICAgICBwMi52eCA9IC1wMi52eDtcbiAgICAgIHAyLnZ5ID0gLXAyLnZ5O1xuICAgIH1cblxuICB9XG5cblxuICAvKiAtLS0tLS0tLS0tIHBKUyBmdW5jdGlvbnMgLSBtb2RlcyBldmVudHMgLS0tLS0tLS0tLS0tICovXG5cbiAgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMgPSBmdW5jdGlvbihuYiwgcG9zKXtcblxuICAgIHBKUy50bXAucHVzaGluZyA9IHRydWU7XG5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbmI7IGkrKyl7XG4gICAgICBwSlMucGFydGljbGVzLmFycmF5LnB1c2goXG4gICAgICAgIG5ldyBwSlMuZm4ucGFydGljbGUoXG4gICAgICAgICAgcEpTLnBhcnRpY2xlcy5jb2xvcixcbiAgICAgICAgICBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3gnOiBwb3MgPyBwb3MucG9zX3ggOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy53LFxuICAgICAgICAgICAgJ3knOiBwb3MgPyBwb3MucG9zX3kgOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy5oXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICApXG4gICAgICBpZihpID09IG5iLTEpe1xuICAgICAgICBpZighcEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSl7XG4gICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICBwSlMudG1wLnB1c2hpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi5tb2Rlcy5yZW1vdmVQYXJ0aWNsZXMgPSBmdW5jdGlvbihuYil7XG5cbiAgICBwSlMucGFydGljbGVzLmFycmF5LnNwbGljZSgwLCBuYik7XG4gICAgaWYoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpe1xuICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi5tb2Rlcy5idWJibGVQYXJ0aWNsZSA9IGZ1bmN0aW9uKHApe1xuXG4gICAgLyogb24gaG92ZXIgZXZlbnQgKi9cbiAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5lbmFibGUgJiYgaXNJbkFycmF5KCdidWJibGUnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSl7XG5cbiAgICAgIHZhciBkeF9tb3VzZSA9IHAueCAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LFxuICAgICAgICAgIGR5X21vdXNlID0gcC55IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ksXG4gICAgICAgICAgZGlzdF9tb3VzZSA9IE1hdGguc3FydChkeF9tb3VzZSpkeF9tb3VzZSArIGR5X21vdXNlKmR5X21vdXNlKSxcbiAgICAgICAgICByYXRpbyA9IDEgLSBkaXN0X21vdXNlIC8gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlO1xuXG4gICAgICBmdW5jdGlvbiBpbml0KCl7XG4gICAgICAgIHAub3BhY2l0eV9idWJibGUgPSBwLm9wYWNpdHk7XG4gICAgICAgIHAucmFkaXVzX2J1YmJsZSA9IHAucmFkaXVzO1xuICAgICAgfVxuXG4gICAgICAvKiBtb3VzZW1vdmUgLSBjaGVjayByYXRpbyAqL1xuICAgICAgaWYoZGlzdF9tb3VzZSA8PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2Upe1xuXG4gICAgICAgIGlmKHJhdGlvID49IDAgJiYgcEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID09ICdtb3VzZW1vdmUnKXtcbiAgICAgICAgICBcbiAgICAgICAgICAvKiBzaXplICovXG4gICAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUgIT0gcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlKXtcblxuICAgICAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUgPiBwSlMucGFydGljbGVzLnNpemUudmFsdWUpe1xuICAgICAgICAgICAgICB2YXIgc2l6ZSA9IHAucmFkaXVzICsgKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplKnJhdGlvKTtcbiAgICAgICAgICAgICAgaWYoc2l6ZSA+PSAwKXtcbiAgICAgICAgICAgICAgICBwLnJhZGl1c19idWJibGUgPSBzaXplO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgdmFyIGRpZiA9IHAucmFkaXVzIC0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUsXG4gICAgICAgICAgICAgICAgICBzaXplID0gcC5yYWRpdXMgLSAoZGlmKnJhdGlvKTtcbiAgICAgICAgICAgICAgaWYoc2l6ZSA+IDApe1xuICAgICAgICAgICAgICAgIHAucmFkaXVzX2J1YmJsZSA9IHNpemU7XG4gICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHAucmFkaXVzX2J1YmJsZSA9IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIG9wYWNpdHkgKi9cbiAgICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSAhPSBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUpe1xuXG4gICAgICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSA+IHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSl7XG4gICAgICAgICAgICAgIHZhciBvcGFjaXR5ID0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkqcmF0aW87XG4gICAgICAgICAgICAgIGlmKG9wYWNpdHkgPiBwLm9wYWNpdHkgJiYgb3BhY2l0eSA8PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSl7XG4gICAgICAgICAgICAgICAgcC5vcGFjaXR5X2J1YmJsZSA9IG9wYWNpdHk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICB2YXIgb3BhY2l0eSA9IHAub3BhY2l0eSAtIChwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUtcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkpKnJhdGlvO1xuICAgICAgICAgICAgICBpZihvcGFjaXR5IDwgcC5vcGFjaXR5ICYmIG9wYWNpdHkgPj0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkpe1xuICAgICAgICAgICAgICAgIHAub3BhY2l0eV9idWJibGUgPSBvcGFjaXR5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICB9ZWxzZXtcbiAgICAgICAgaW5pdCgpO1xuICAgICAgfVxuXG5cbiAgICAgIC8qIG1vdXNlbGVhdmUgKi9cbiAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9PSAnbW91c2VsZWF2ZScpe1xuICAgICAgICBpbml0KCk7XG4gICAgICB9XG4gICAgXG4gICAgfVxuXG4gICAgLyogb24gY2xpY2sgZXZlbnQgKi9cbiAgICBlbHNlIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSAmJiBpc0luQXJyYXkoJ2J1YmJsZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKXtcblxuXG4gICAgICBpZihwSlMudG1wLmJ1YmJsZV9jbGlja2luZyl7XG4gICAgICAgIHZhciBkeF9tb3VzZSA9IHAueCAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc194LFxuICAgICAgICAgICAgZHlfbW91c2UgPSBwLnkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSxcbiAgICAgICAgICAgIGRpc3RfbW91c2UgPSBNYXRoLnNxcnQoZHhfbW91c2UqZHhfbW91c2UgKyBkeV9tb3VzZSpkeV9tb3VzZSksXG4gICAgICAgICAgICB0aW1lX3NwZW50ID0gKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfdGltZSkvMTAwMDtcblxuICAgICAgICBpZih0aW1lX3NwZW50ID4gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uKXtcbiAgICAgICAgICBwSlMudG1wLmJ1YmJsZV9kdXJhdGlvbl9lbmQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGltZV9zcGVudCA+IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbioyKXtcbiAgICAgICAgICBwSlMudG1wLmJ1YmJsZV9jbGlja2luZyA9IGZhbHNlO1xuICAgICAgICAgIHBKUy50bXAuYnViYmxlX2R1cmF0aW9uX2VuZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgZnVuY3Rpb24gcHJvY2VzcyhidWJibGVfcGFyYW0sIHBhcnRpY2xlc19wYXJhbSwgcF9vYmpfYnViYmxlLCBwX29iaiwgaWQpe1xuXG4gICAgICAgIGlmKGJ1YmJsZV9wYXJhbSAhPSBwYXJ0aWNsZXNfcGFyYW0pe1xuXG4gICAgICAgICAgaWYoIXBKUy50bXAuYnViYmxlX2R1cmF0aW9uX2VuZCl7XG4gICAgICAgICAgICBpZihkaXN0X21vdXNlIDw9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSl7XG4gICAgICAgICAgICAgIGlmKHBfb2JqX2J1YmJsZSAhPSB1bmRlZmluZWQpIHZhciBvYmogPSBwX29ial9idWJibGU7XG4gICAgICAgICAgICAgIGVsc2UgdmFyIG9iaiA9IHBfb2JqO1xuICAgICAgICAgICAgICBpZihvYmogIT0gYnViYmxlX3BhcmFtKXtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBwX29iaiAtICh0aW1lX3NwZW50ICogKHBfb2JqIC0gYnViYmxlX3BhcmFtKSAvIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgaWYoaWQgPT0gJ3NpemUnKSBwLnJhZGl1c19idWJibGUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpZihpZCA9PSAnb3BhY2l0eScpIHAub3BhY2l0eV9idWJibGUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIGlmKGlkID09ICdzaXplJykgcC5yYWRpdXNfYnViYmxlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICBpZihpZCA9PSAnb3BhY2l0eScpIHAub3BhY2l0eV9idWJibGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBpZihwX29ial9idWJibGUgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgdmFyIHZhbHVlX3RtcCA9IHBfb2JqIC0gKHRpbWVfc3BlbnQgKiAocF9vYmogLSBidWJibGVfcGFyYW0pIC8gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uKSxcbiAgICAgICAgICAgICAgICAgIGRpZiA9IGJ1YmJsZV9wYXJhbSAtIHZhbHVlX3RtcDtcbiAgICAgICAgICAgICAgICAgIHZhbHVlID0gYnViYmxlX3BhcmFtICsgZGlmO1xuICAgICAgICAgICAgICBpZihpZCA9PSAnc2l6ZScpIHAucmFkaXVzX2J1YmJsZSA9IHZhbHVlO1xuICAgICAgICAgICAgICBpZihpZCA9PSAnb3BhY2l0eScpIHAub3BhY2l0eV9idWJibGUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIGlmKHBKUy50bXAuYnViYmxlX2NsaWNraW5nKXtcbiAgICAgICAgLyogc2l6ZSAqL1xuICAgICAgICBwcm9jZXNzKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplLCBwSlMucGFydGljbGVzLnNpemUudmFsdWUsIHAucmFkaXVzX2J1YmJsZSwgcC5yYWRpdXMsICdzaXplJyk7XG4gICAgICAgIC8qIG9wYWNpdHkgKi9cbiAgICAgICAgcHJvY2VzcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSwgcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlLCBwLm9wYWNpdHlfYnViYmxlLCBwLm9wYWNpdHksICdvcGFjaXR5Jyk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi5tb2Rlcy5yZXB1bHNlUGFydGljbGUgPSBmdW5jdGlvbihwKXtcblxuICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLmVuYWJsZSAmJiBpc0luQXJyYXkoJ3JlcHVsc2UnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSAmJiBwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPT0gJ21vdXNlbW92ZScpIHtcblxuICAgICAgdmFyIGR4X21vdXNlID0gcC54IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3gsXG4gICAgICAgICAgZHlfbW91c2UgPSBwLnkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSxcbiAgICAgICAgICBkaXN0X21vdXNlID0gTWF0aC5zcXJ0KGR4X21vdXNlKmR4X21vdXNlICsgZHlfbW91c2UqZHlfbW91c2UpO1xuXG4gICAgICB2YXIgbm9ybVZlYyA9IHt4OiBkeF9tb3VzZS9kaXN0X21vdXNlLCB5OiBkeV9tb3VzZS9kaXN0X21vdXNlfSxcbiAgICAgICAgICByZXB1bHNlUmFkaXVzID0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZSxcbiAgICAgICAgICB2ZWxvY2l0eSA9IDEwMCxcbiAgICAgICAgICByZXB1bHNlRmFjdG9yID0gY2xhbXAoKDEvcmVwdWxzZVJhZGl1cykqKC0xKk1hdGgucG93KGRpc3RfbW91c2UvcmVwdWxzZVJhZGl1cywyKSsxKSpyZXB1bHNlUmFkaXVzKnZlbG9jaXR5LCAwLCA1MCk7XG4gICAgICBcbiAgICAgIHZhciBwb3MgPSB7XG4gICAgICAgIHg6IHAueCArIG5vcm1WZWMueCAqIHJlcHVsc2VGYWN0b3IsXG4gICAgICAgIHk6IHAueSArIG5vcm1WZWMueSAqIHJlcHVsc2VGYWN0b3JcbiAgICAgIH1cblxuICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlID09ICdib3VuY2UnKXtcbiAgICAgICAgaWYocG9zLnggLSBwLnJhZGl1cyA+IDAgJiYgcG9zLnggKyBwLnJhZGl1cyA8IHBKUy5jYW52YXMudykgcC54ID0gcG9zLng7XG4gICAgICAgIGlmKHBvcy55IC0gcC5yYWRpdXMgPiAwICYmIHBvcy55ICsgcC5yYWRpdXMgPCBwSlMuY2FudmFzLmgpIHAueSA9IHBvcy55O1xuICAgICAgfWVsc2V7XG4gICAgICAgIHAueCA9IHBvcy54O1xuICAgICAgICBwLnkgPSBwb3MueTtcbiAgICAgIH1cbiAgICBcbiAgICB9XG5cblxuICAgIGVsc2UgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlICYmIGlzSW5BcnJheSgncmVwdWxzZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKSB7XG5cbiAgICAgIGlmKCFwSlMudG1wLnJlcHVsc2VfZmluaXNoKXtcbiAgICAgICAgcEpTLnRtcC5yZXB1bHNlX2NvdW50Kys7XG4gICAgICAgIGlmKHBKUy50bXAucmVwdWxzZV9jb3VudCA9PSBwSlMucGFydGljbGVzLmFycmF5Lmxlbmd0aCl7XG4gICAgICAgICAgcEpTLnRtcC5yZXB1bHNlX2ZpbmlzaCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYocEpTLnRtcC5yZXB1bHNlX2NsaWNraW5nKXtcblxuICAgICAgICB2YXIgcmVwdWxzZVJhZGl1cyA9IE1hdGgucG93KHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2UvNiwgMyk7XG5cbiAgICAgICAgdmFyIGR4ID0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3ggLSBwLngsXG4gICAgICAgICAgICBkeSA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc195IC0gcC55LFxuICAgICAgICAgICAgZCA9IGR4KmR4ICsgZHkqZHk7XG5cbiAgICAgICAgdmFyIGZvcmNlID0gLXJlcHVsc2VSYWRpdXMgLyBkICogMTtcblxuICAgICAgICBmdW5jdGlvbiBwcm9jZXNzKCl7XG5cbiAgICAgICAgICB2YXIgZiA9IE1hdGguYXRhbjIoZHksZHgpO1xuICAgICAgICAgIHAudnggPSBmb3JjZSAqIE1hdGguY29zKGYpO1xuICAgICAgICAgIHAudnkgPSBmb3JjZSAqIE1hdGguc2luKGYpO1xuXG4gICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlID09ICdib3VuY2UnKXtcbiAgICAgICAgICAgIHZhciBwb3MgPSB7XG4gICAgICAgICAgICAgIHg6IHAueCArIHAudngsXG4gICAgICAgICAgICAgIHk6IHAueSArIHAudnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwb3MueCArIHAucmFkaXVzID4gcEpTLmNhbnZhcy53KSBwLnZ4ID0gLXAudng7XG4gICAgICAgICAgICBlbHNlIGlmIChwb3MueCAtIHAucmFkaXVzIDwgMCkgcC52eCA9IC1wLnZ4O1xuICAgICAgICAgICAgaWYgKHBvcy55ICsgcC5yYWRpdXMgPiBwSlMuY2FudmFzLmgpIHAudnkgPSAtcC52eTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHBvcy55IC0gcC5yYWRpdXMgPCAwKSBwLnZ5ID0gLXAudnk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBkZWZhdWx0XG4gICAgICAgIGlmKGQgPD0gcmVwdWxzZVJhZGl1cyl7XG4gICAgICAgICAgcHJvY2VzcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYmFuZyAtIHNsb3cgbW90aW9uIG1vZGVcbiAgICAgICAgLy8gaWYoIXBKUy50bXAucmVwdWxzZV9maW5pc2gpe1xuICAgICAgICAvLyAgIGlmKGQgPD0gcmVwdWxzZVJhZGl1cyl7XG4gICAgICAgIC8vICAgICBwcm9jZXNzKCk7XG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyB9ZWxzZXtcbiAgICAgICAgLy8gICBwcm9jZXNzKCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgXG5cbiAgICAgIH1lbHNle1xuXG4gICAgICAgIGlmKHBKUy50bXAucmVwdWxzZV9jbGlja2luZyA9PSBmYWxzZSl7XG5cbiAgICAgICAgICBwLnZ4ID0gcC52eF9pO1xuICAgICAgICAgIHAudnkgPSBwLnZ5X2k7XG4gICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cblxuICBwSlMuZm4ubW9kZXMuZ3JhYlBhcnRpY2xlID0gZnVuY3Rpb24ocCl7XG5cbiAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5lbmFibGUgJiYgcEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID09ICdtb3VzZW1vdmUnKXtcblxuICAgICAgdmFyIGR4X21vdXNlID0gcC54IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3gsXG4gICAgICAgICAgZHlfbW91c2UgPSBwLnkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSxcbiAgICAgICAgICBkaXN0X21vdXNlID0gTWF0aC5zcXJ0KGR4X21vdXNlKmR4X21vdXNlICsgZHlfbW91c2UqZHlfbW91c2UpO1xuXG4gICAgICAvKiBkcmF3IGEgbGluZSBiZXR3ZWVuIHRoZSBjdXJzb3IgYW5kIHRoZSBwYXJ0aWNsZSBpZiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGVtIGlzIHVuZGVyIHRoZSBjb25maWcgZGlzdGFuY2UgKi9cbiAgICAgIGlmKGRpc3RfbW91c2UgPD0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5kaXN0YW5jZSl7XG5cbiAgICAgICAgdmFyIG9wYWNpdHlfbGluZSA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIubGluZV9saW5rZWQub3BhY2l0eSAtIChkaXN0X21vdXNlIC8gKDEvcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5saW5lX2xpbmtlZC5vcGFjaXR5KSkgLyBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmRpc3RhbmNlO1xuXG4gICAgICAgIGlmKG9wYWNpdHlfbGluZSA+IDApe1xuXG4gICAgICAgICAgLyogc3R5bGUgKi9cbiAgICAgICAgICB2YXIgY29sb3JfbGluZSA9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuY29sb3JfcmdiX2xpbmU7XG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgnK2NvbG9yX2xpbmUucisnLCcrY29sb3JfbGluZS5nKycsJytjb2xvcl9saW5lLmIrJywnK29wYWNpdHlfbGluZSsnKSc7XG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHgubGluZVdpZHRoID0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aDtcbiAgICAgICAgICAvL3BKUy5jYW52YXMuY3R4LmxpbmVDYXAgPSAncm91bmQnOyAvKiBwZXJmb3JtYW5jZSBpc3N1ZSAqL1xuICAgICAgICAgIFxuICAgICAgICAgIC8qIHBhdGggKi9cbiAgICAgICAgICBwSlMuY2FudmFzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVUbyhwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCwgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kpO1xuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgfVxuXG4gIH07XG5cblxuXG4gIC8qIC0tLS0tLS0tLS0gcEpTIGZ1bmN0aW9ucyAtIHZlbmRvcnMgLS0tLS0tLS0tLS0tICovXG5cbiAgcEpTLmZuLnZlbmRvcnMuZXZlbnRzTGlzdGVuZXJzID0gZnVuY3Rpb24oKXtcblxuICAgIC8qIGV2ZW50cyB0YXJnZXQgZWxlbWVudCAqL1xuICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmRldGVjdF9vbiA9PSAnd2luZG93Jyl7XG4gICAgICBwSlMuaW50ZXJhY3Rpdml0eS5lbCA9IHdpbmRvdztcbiAgICB9ZWxzZXtcbiAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LmVsID0gcEpTLmNhbnZhcy5lbDtcbiAgICB9XG5cblxuICAgIC8qIGRldGVjdCBtb3VzZSBwb3MgLSBvbiBob3ZlciAvIGNsaWNrIGV2ZW50ICovXG4gICAgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlIHx8IHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSl7XG5cbiAgICAgIC8qIGVsIG9uIG1vdXNlbW92ZSAqL1xuICAgICAgcEpTLmludGVyYWN0aXZpdHkuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24oZSl7XG5cbiAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkuZWwgPT0gd2luZG93KXtcbiAgICAgICAgICB2YXIgcG9zX3ggPSBlLmNsaWVudFgsXG4gICAgICAgICAgICAgIHBvc195ID0gZS5jbGllbnRZO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgdmFyIHBvc194ID0gZS5vZmZzZXRYIHx8IGUuY2xpZW50WCxcbiAgICAgICAgICAgICAgcG9zX3kgPSBlLm9mZnNldFkgfHwgZS5jbGllbnRZO1xuICAgICAgICB9XG5cbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ggPSBwb3NfeDtcbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kgPSBwb3NfeTtcblxuICAgICAgICBpZihwSlMudG1wLnJldGluYSl7XG4gICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ggKj0gcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195ICo9IHBKUy5jYW52YXMucHhyYXRpbztcbiAgICAgICAgfVxuXG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9ICdtb3VzZW1vdmUnO1xuXG4gICAgICB9KTtcblxuICAgICAgLyogZWwgb24gb25tb3VzZWxlYXZlICovXG4gICAgICBwSlMuaW50ZXJhY3Rpdml0eS5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oZSl7XG5cbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ggPSBudWxsO1xuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSA9IG51bGw7XG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9ICdtb3VzZWxlYXZlJztcblxuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKiBvbiBjbGljayBldmVudCAqL1xuICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSl7XG5cbiAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeCA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194O1xuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195O1xuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja190aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlKXtcblxuICAgICAgICAgIHN3aXRjaChwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKXtcblxuICAgICAgICAgICAgY2FzZSAncHVzaCc6XG4gICAgICAgICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpe1xuICAgICAgICAgICAgICAgIHBKUy5mbi5tb2Rlcy5wdXNoUGFydGljbGVzKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iLCBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZSk7XG4gICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iID09IDEpe1xuICAgICAgICAgICAgICAgICAgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMocEpTLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIsIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYiA+IDEpe1xuICAgICAgICAgICAgICAgICAgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMocEpTLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3JlbW92ZSc6XG4gICAgICAgICAgICAgIHBKUy5mbi5tb2Rlcy5yZW1vdmVQYXJ0aWNsZXMocEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVtb3ZlLnBhcnRpY2xlc19uYik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnYnViYmxlJzpcbiAgICAgICAgICAgICAgcEpTLnRtcC5idWJibGVfY2xpY2tpbmcgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3JlcHVsc2UnOlxuICAgICAgICAgICAgICBwSlMudG1wLnJlcHVsc2VfY2xpY2tpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICBwSlMudG1wLnJlcHVsc2VfY291bnQgPSAwO1xuICAgICAgICAgICAgICBwSlMudG1wLnJlcHVsc2VfZmluaXNoID0gZmFsc2U7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBwSlMudG1wLnJlcHVsc2VfY2xpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfSwgcEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kdXJhdGlvbioxMDAwKVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxuXG5cbiAgfTtcblxuICBwSlMuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcyA9IGZ1bmN0aW9uKCl7XG5cbiAgICBpZihwSlMucGFydGljbGVzLm51bWJlci5kZW5zaXR5LmVuYWJsZSl7XG5cbiAgICAgIC8qIGNhbGMgYXJlYSAqL1xuICAgICAgdmFyIGFyZWEgPSBwSlMuY2FudmFzLmVsLndpZHRoICogcEpTLmNhbnZhcy5lbC5oZWlnaHQgLyAxMDAwO1xuICAgICAgaWYocEpTLnRtcC5yZXRpbmEpe1xuICAgICAgICBhcmVhID0gYXJlYS8ocEpTLmNhbnZhcy5weHJhdGlvKjIpO1xuICAgICAgfVxuXG4gICAgICAvKiBjYWxjIG51bWJlciBvZiBwYXJ0aWNsZXMgYmFzZWQgb24gZGVuc2l0eSBhcmVhICovXG4gICAgICB2YXIgbmJfcGFydGljbGVzID0gYXJlYSAqIHBKUy5wYXJ0aWNsZXMubnVtYmVyLnZhbHVlIC8gcEpTLnBhcnRpY2xlcy5udW1iZXIuZGVuc2l0eS52YWx1ZV9hcmVhO1xuXG4gICAgICAvKiBhZGQgb3IgcmVtb3ZlIFggcGFydGljbGVzICovXG4gICAgICB2YXIgbWlzc2luZ19wYXJ0aWNsZXMgPSBwSlMucGFydGljbGVzLmFycmF5Lmxlbmd0aCAtIG5iX3BhcnRpY2xlcztcbiAgICAgIGlmKG1pc3NpbmdfcGFydGljbGVzIDwgMCkgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMoTWF0aC5hYnMobWlzc2luZ19wYXJ0aWNsZXMpKTtcbiAgICAgIGVsc2UgcEpTLmZuLm1vZGVzLnJlbW92ZVBhcnRpY2xlcyhtaXNzaW5nX3BhcnRpY2xlcyk7XG5cbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi52ZW5kb3JzLmNoZWNrT3ZlcmxhcCA9IGZ1bmN0aW9uKHAxLCBwb3NpdGlvbil7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgdmFyIHAyID0gcEpTLnBhcnRpY2xlcy5hcnJheVtpXTtcblxuICAgICAgdmFyIGR4ID0gcDEueCAtIHAyLngsXG4gICAgICAgICAgZHkgPSBwMS55IC0gcDIueSxcbiAgICAgICAgICBkaXN0ID0gTWF0aC5zcXJ0KGR4KmR4ICsgZHkqZHkpO1xuXG4gICAgICBpZihkaXN0IDw9IHAxLnJhZGl1cyArIHAyLnJhZGl1cyl7XG4gICAgICAgIHAxLnggPSBwb3NpdGlvbiA/IHBvc2l0aW9uLnggOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy53O1xuICAgICAgICBwMS55ID0gcG9zaXRpb24gPyBwb3NpdGlvbi55IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaDtcbiAgICAgICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tPdmVybGFwKHAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cblxuICBwSlMuZm4udmVuZG9ycy5jcmVhdGVTdmdJbWcgPSBmdW5jdGlvbihwKXtcblxuICAgIC8qIHNldCBjb2xvciB0byBzdmcgZWxlbWVudCAqL1xuICAgIHZhciBzdmdYbWwgPSBwSlMudG1wLnNvdXJjZV9zdmcsXG4gICAgICAgIHJnYkhleCA9IC8jKFswLTlBLUZdezMsNn0pL2dpLFxuICAgICAgICBjb2xvcmVkU3ZnWG1sID0gc3ZnWG1sLnJlcGxhY2UocmdiSGV4LCBmdW5jdGlvbiAobSwgciwgZywgYikge1xuICAgICAgICAgIGlmKHAuY29sb3IucmdiKXtcbiAgICAgICAgICAgIHZhciBjb2xvcl92YWx1ZSA9ICdyZ2JhKCcrcC5jb2xvci5yZ2IucisnLCcrcC5jb2xvci5yZ2IuZysnLCcrcC5jb2xvci5yZ2IuYisnLCcrcC5vcGFjaXR5KycpJztcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHZhciBjb2xvcl92YWx1ZSA9ICdoc2xhKCcrcC5jb2xvci5oc2wuaCsnLCcrcC5jb2xvci5oc2wucysnJSwnK3AuY29sb3IuaHNsLmwrJyUsJytwLm9wYWNpdHkrJyknO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY29sb3JfdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgLyogcHJlcGFyZSB0byBjcmVhdGUgaW1nIHdpdGggY29sb3JlZCBzdmcgKi9cbiAgICB2YXIgc3ZnID0gbmV3IEJsb2IoW2NvbG9yZWRTdmdYbWxdLCB7dHlwZTogJ2ltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCd9KSxcbiAgICAgICAgRE9NVVJMID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMIHx8IHdpbmRvdyxcbiAgICAgICAgdXJsID0gRE9NVVJMLmNyZWF0ZU9iamVjdFVSTChzdmcpO1xuXG4gICAgLyogY3JlYXRlIHBhcnRpY2xlIGltZyBvYmogKi9cbiAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpe1xuICAgICAgcC5pbWcub2JqID0gaW1nO1xuICAgICAgcC5pbWcubG9hZGVkID0gdHJ1ZTtcbiAgICAgIERPTVVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICAgIHBKUy50bXAuY291bnRfc3ZnKys7XG4gICAgfSk7XG4gICAgaW1nLnNyYyA9IHVybDtcblxuICB9O1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMuZGVzdHJveXBKUyA9IGZ1bmN0aW9uKCl7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocEpTLmZuLmRyYXdBbmltRnJhbWUpO1xuICAgIGNhbnZhc19lbC5yZW1vdmUoKTtcbiAgICBwSlNEb20gPSBudWxsO1xuICB9O1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMuZHJhd1NoYXBlID0gZnVuY3Rpb24oYywgc3RhcnRYLCBzdGFydFksIHNpZGVMZW5ndGgsIHNpZGVDb3VudE51bWVyYXRvciwgc2lkZUNvdW50RGVub21pbmF0b3Ipe1xuXG4gICAgLy8gQnkgUHJvZ3JhbW1pbmcgVGhvbWFzIC0gaHR0cHM6Ly9wcm9ncmFtbWluZ3Rob21hcy53b3JkcHJlc3MuY29tLzIwMTMvMDQvMDMvbi1zaWRlZC1zaGFwZXMvXG4gICAgdmFyIHNpZGVDb3VudCA9IHNpZGVDb3VudE51bWVyYXRvciAqIHNpZGVDb3VudERlbm9taW5hdG9yO1xuICAgIHZhciBkZWNpbWFsU2lkZXMgPSBzaWRlQ291bnROdW1lcmF0b3IgLyBzaWRlQ291bnREZW5vbWluYXRvcjtcbiAgICB2YXIgaW50ZXJpb3JBbmdsZURlZ3JlZXMgPSAoMTgwICogKGRlY2ltYWxTaWRlcyAtIDIpKSAvIGRlY2ltYWxTaWRlcztcbiAgICB2YXIgaW50ZXJpb3JBbmdsZSA9IE1hdGguUEkgLSBNYXRoLlBJICogaW50ZXJpb3JBbmdsZURlZ3JlZXMgLyAxODA7IC8vIGNvbnZlcnQgdG8gcmFkaWFuc1xuICAgIGMuc2F2ZSgpO1xuICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgYy50cmFuc2xhdGUoc3RhcnRYLCBzdGFydFkpO1xuICAgIGMubW92ZVRvKDAsMCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWRlQ291bnQ7IGkrKykge1xuICAgICAgYy5saW5lVG8oc2lkZUxlbmd0aCwwKTtcbiAgICAgIGMudHJhbnNsYXRlKHNpZGVMZW5ndGgsMCk7XG4gICAgICBjLnJvdGF0ZShpbnRlcmlvckFuZ2xlKTtcbiAgICB9XG4gICAgLy9jLnN0cm9rZSgpO1xuICAgIGMuZmlsbCgpO1xuICAgIGMucmVzdG9yZSgpO1xuXG4gIH07XG5cbiAgcEpTLmZuLnZlbmRvcnMuZXhwb3J0SW1nID0gZnVuY3Rpb24oKXtcbiAgICB3aW5kb3cub3BlbihwSlMuY2FudmFzLmVsLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyksICdfYmxhbmsnKTtcbiAgfTtcblxuXG4gIHBKUy5mbi52ZW5kb3JzLmxvYWRJbWcgPSBmdW5jdGlvbih0eXBlKXtcblxuICAgIHBKUy50bXAuaW1nX2Vycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgaWYocEpTLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmMgIT0gJycpe1xuXG4gICAgICBpZih0eXBlID09ICdzdmcnKXtcblxuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCBwSlMucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYyk7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09IDQpe1xuICAgICAgICAgICAgaWYoeGhyLnN0YXR1cyA9PSAyMDApe1xuICAgICAgICAgICAgICBwSlMudG1wLnNvdXJjZV9zdmcgPSBkYXRhLmN1cnJlbnRUYXJnZXQucmVzcG9uc2U7XG4gICAgICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmNoZWNrQmVmb3JlRHJhdygpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBwSlMgLSBJbWFnZSBub3QgZm91bmQnKTtcbiAgICAgICAgICAgICAgcEpTLnRtcC5pbWdfZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB4aHIuc2VuZCgpO1xuXG4gICAgICB9ZWxzZXtcblxuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICBwSlMudG1wLmltZ19vYmogPSBpbWc7XG4gICAgICAgICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tCZWZvcmVEcmF3KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpbWcuc3JjID0gcEpTLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmM7XG5cbiAgICAgIH1cblxuICAgIH1lbHNle1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBKUyAtIE5vIGltYWdlLnNyYycpO1xuICAgICAgcEpTLnRtcC5pbWdfZXJyb3IgPSB0cnVlO1xuICAgIH1cblxuICB9O1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMuZHJhdyA9IGZ1bmN0aW9uKCl7XG5cbiAgICBpZihwSlMucGFydGljbGVzLnNoYXBlLnR5cGUgPT0gJ2ltYWdlJyl7XG5cbiAgICAgIGlmKHBKUy50bXAuaW1nX3R5cGUgPT0gJ3N2Zycpe1xuXG4gICAgICAgIGlmKHBKUy50bXAuY291bnRfc3ZnID49IHBKUy5wYXJ0aWNsZXMubnVtYmVyLnZhbHVlKXtcbiAgICAgICAgICBwSlMuZm4ucGFydGljbGVzRHJhdygpO1xuICAgICAgICAgIGlmKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKSBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcbiAgICAgICAgICBlbHNlIHBKUy5mbi5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShwSlMuZm4udmVuZG9ycy5kcmF3KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnc3RpbGwgbG9hZGluZy4uLicpO1xuICAgICAgICAgIGlmKCFwSlMudG1wLmltZ19lcnJvcikgcEpTLmZuLmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi52ZW5kb3JzLmRyYXcpO1xuICAgICAgICB9XG5cbiAgICAgIH1lbHNle1xuXG4gICAgICAgIGlmKHBKUy50bXAuaW1nX29iaiAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XG4gICAgICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLmZuLmRyYXdBbmltRnJhbWUpO1xuICAgICAgICAgIGVsc2UgcEpTLmZuLmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi52ZW5kb3JzLmRyYXcpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBpZighcEpTLnRtcC5pbWdfZXJyb3IpIHBKUy5mbi5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShwSlMuZm4udmVuZG9ycy5kcmF3KTtcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICB9ZWxzZXtcbiAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XG4gICAgICBpZighcEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSkgY2FuY2VsUmVxdWVzdEFuaW1GcmFtZShwSlMuZm4uZHJhd0FuaW1GcmFtZSk7XG4gICAgICBlbHNlIHBKUy5mbi5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShwSlMuZm4udmVuZG9ycy5kcmF3KTtcbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi52ZW5kb3JzLmNoZWNrQmVmb3JlRHJhdyA9IGZ1bmN0aW9uKCl7XG5cbiAgICAvLyBpZiBzaGFwZSBpcyBpbWFnZVxuICAgIGlmKHBKUy5wYXJ0aWNsZXMuc2hhcGUudHlwZSA9PSAnaW1hZ2UnKXtcblxuICAgICAgaWYocEpTLnRtcC5pbWdfdHlwZSA9PSAnc3ZnJyAmJiBwSlMudG1wLnNvdXJjZV9zdmcgPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgcEpTLnRtcC5jaGVja0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUoY2hlY2spO1xuICAgICAgfWVsc2V7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2ltYWdlcyBsb2FkZWQhIGNhbmNlbCBjaGVjaycpO1xuICAgICAgICBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy50bXAuY2hlY2tBbmltRnJhbWUpO1xuICAgICAgICBpZighcEpTLnRtcC5pbWdfZXJyb3Ipe1xuICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmluaXQoKTtcbiAgICAgICAgICBwSlMuZm4udmVuZG9ycy5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9XG5cbiAgICB9ZWxzZXtcbiAgICAgIHBKUy5mbi52ZW5kb3JzLmluaXQoKTtcbiAgICAgIHBKUy5mbi52ZW5kb3JzLmRyYXcoKTtcbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi52ZW5kb3JzLmluaXQgPSBmdW5jdGlvbigpe1xuXG4gICAgLyogaW5pdCBjYW52YXMgKyBwYXJ0aWNsZXMgKi9cbiAgICBwSlMuZm4ucmV0aW5hSW5pdCgpO1xuICAgIHBKUy5mbi5jYW52YXNJbml0KCk7XG4gICAgcEpTLmZuLmNhbnZhc1NpemUoKTtcbiAgICBwSlMuZm4uY2FudmFzUGFpbnQoKTtcbiAgICBwSlMuZm4ucGFydGljbGVzQ3JlYXRlKCk7XG4gICAgcEpTLmZuLnZlbmRvcnMuZGVuc2l0eUF1dG9QYXJ0aWNsZXMoKTtcblxuICAgIC8qIHBhcnRpY2xlcy5saW5lX2xpbmtlZCAtIGNvbnZlcnQgaGV4IGNvbG9ycyB0byByZ2IgKi9cbiAgICBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yX3JnYl9saW5lID0gaGV4VG9SZ2IocEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5jb2xvcik7XG5cbiAgfTtcblxuXG4gIHBKUy5mbi52ZW5kb3JzLnN0YXJ0ID0gZnVuY3Rpb24oKXtcblxuICAgIGlmKGlzSW5BcnJheSgnaW1hZ2UnLCBwSlMucGFydGljbGVzLnNoYXBlLnR5cGUpKXtcbiAgICAgIHBKUy50bXAuaW1nX3R5cGUgPSBwSlMucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYy5zdWJzdHIocEpTLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmMubGVuZ3RoIC0gMyk7XG4gICAgICBwSlMuZm4udmVuZG9ycy5sb2FkSW1nKHBKUy50bXAuaW1nX3R5cGUpO1xuICAgIH1lbHNle1xuICAgICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tCZWZvcmVEcmF3KCk7XG4gICAgfVxuXG4gIH07XG5cblxuXG5cbiAgLyogLS0tLS0tLS0tLSBwSlMgLSBzdGFydCAtLS0tLS0tLS0tLS0gKi9cblxuXG4gIHBKUy5mbi52ZW5kb3JzLmV2ZW50c0xpc3RlbmVycygpO1xuXG4gIHBKUy5mbi52ZW5kb3JzLnN0YXJ0KCk7XG4gIFxuXG5cbn07XG5cbi8qIC0tLS0tLS0tLS0gZ2xvYmFsIGZ1bmN0aW9ucyAtIHZlbmRvcnMgLS0tLS0tLS0tLS0tICovXG5cbk9iamVjdC5kZWVwRXh0ZW5kID0gZnVuY3Rpb24oZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBzb3VyY2UpIHtcbiAgICBpZiAoc291cmNlW3Byb3BlcnR5XSAmJiBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yICYmXG4gICAgIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gZGVzdGluYXRpb25bcHJvcGVydHldIHx8IHt9O1xuICAgICAgYXJndW1lbnRzLmNhbGxlZShkZXN0aW5hdGlvbltwcm9wZXJ0eV0sIHNvdXJjZVtwcm9wZXJ0eV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBzb3VyY2VbcHJvcGVydHldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVzdGluYXRpb247XG59O1xuXG53aW5kb3cucmVxdWVzdEFuaW1GcmFtZSA9IChmdW5jdGlvbigpe1xuICByZXR1cm4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSAgICB8fFxuICAgIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgfHxcbiAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgIHx8XG4gICAgZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XG4gICAgfTtcbn0pKCk7XG5cbndpbmRvdy5jYW5jZWxSZXF1ZXN0QW5pbUZyYW1lID0gKCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSAgICAgICAgIHx8XG4gICAgd2luZG93LndlYmtpdENhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy5tb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgfHxcbiAgICB3aW5kb3cub0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgIHx8XG4gICAgd2luZG93Lm1zQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICB8fFxuICAgIGNsZWFyVGltZW91dFxufSApKCk7XG5cbmZ1bmN0aW9uIGhleFRvUmdiKGhleCl7XG4gIC8vIEJ5IFRpbSBEb3duIC0gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTYyNDEzOS8zNDkzNjUwXG4gIC8vIEV4cGFuZCBzaG9ydGhhbmQgZm9ybSAoZS5nLiBcIjAzRlwiKSB0byBmdWxsIGZvcm0gKGUuZy4gXCIwMDMzRkZcIilcbiAgdmFyIHNob3J0aGFuZFJlZ2V4ID0gL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaTtcbiAgaGV4ID0gaGV4LnJlcGxhY2Uoc2hvcnRoYW5kUmVnZXgsIGZ1bmN0aW9uKG0sIHIsIGcsIGIpIHtcbiAgICAgcmV0dXJuIHIgKyByICsgZyArIGcgKyBiICsgYjtcbiAgfSk7XG4gIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgcmV0dXJuIHJlc3VsdCA/IHtcbiAgICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuICAgICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXG4gICAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KVxuICB9IDogbnVsbDtcbn07XG5cbmZ1bmN0aW9uIGNsYW1wKG51bWJlciwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG51bWJlciwgbWluKSwgbWF4KTtcbn07XG5cbmZ1bmN0aW9uIGlzSW5BcnJheSh2YWx1ZSwgYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LmluZGV4T2YodmFsdWUpID4gLTE7XG59XG5cblxuLyogLS0tLS0tLS0tLSBwYXJ0aWNsZXMuanMgZnVuY3Rpb25zIC0gc3RhcnQgLS0tLS0tLS0tLS0tICovXG5cbndpbmRvdy5wSlNEb20gPSBbXTtcblxud2luZG93LnBhcnRpY2xlc0pTID0gZnVuY3Rpb24odGFnX2lkLCBwYXJhbXMpe1xuXG4gIC8vY29uc29sZS5sb2cocGFyYW1zKTtcblxuICAvKiBubyBzdHJpbmcgaWQ/IHNvIGl0J3Mgb2JqZWN0IHBhcmFtcywgYW5kIHNldCB0aGUgaWQgd2l0aCBkZWZhdWx0IGlkICovXG4gIGlmKHR5cGVvZih0YWdfaWQpICE9ICdzdHJpbmcnKXtcbiAgICBwYXJhbXMgPSB0YWdfaWQ7XG4gICAgdGFnX2lkID0gJ3BhcnRpY2xlcy1qcyc7XG4gIH1cblxuICAvKiBubyBpZD8gc2V0IHRoZSBpZCB0byBkZWZhdWx0IGlkICovXG4gIGlmKCF0YWdfaWQpe1xuICAgIHRhZ19pZCA9ICdwYXJ0aWNsZXMtanMnO1xuICB9XG5cbiAgLyogcEpTIGVsZW1lbnRzICovXG4gIHZhciBwSlNfdGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFnX2lkKSxcbiAgICAgIHBKU19jYW52YXNfY2xhc3MgPSAncGFydGljbGVzLWpzLWNhbnZhcy1lbCcsXG4gICAgICBleGlzdF9jYW52YXMgPSBwSlNfdGFnLmdldEVsZW1lbnRzQnlDbGFzc05hbWUocEpTX2NhbnZhc19jbGFzcyk7XG5cbiAgLyogcmVtb3ZlIGNhbnZhcyBpZiBleGlzdHMgaW50byB0aGUgcEpTIHRhcmdldCB0YWcgKi9cbiAgaWYoZXhpc3RfY2FudmFzLmxlbmd0aCl7XG4gICAgd2hpbGUoZXhpc3RfY2FudmFzLmxlbmd0aCA+IDApe1xuICAgICAgcEpTX3RhZy5yZW1vdmVDaGlsZChleGlzdF9jYW52YXNbMF0pO1xuICAgIH1cbiAgfVxuXG4gIC8qIGNyZWF0ZSBjYW52YXMgZWxlbWVudCAqL1xuICB2YXIgY2FudmFzX2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNhbnZhc19lbC5jbGFzc05hbWUgPSBwSlNfY2FudmFzX2NsYXNzO1xuXG4gIC8qIHNldCBzaXplIGNhbnZhcyAqL1xuICBjYW52YXNfZWwuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgY2FudmFzX2VsLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xuXG4gIC8qIGFwcGVuZCBjYW52YXMgKi9cbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhZ19pZCkuYXBwZW5kQ2hpbGQoY2FudmFzX2VsKTtcblxuICAvKiBsYXVuY2ggcGFydGljbGUuanMgKi9cbiAgaWYoY2FudmFzICE9IG51bGwpe1xuICAgIHBKU0RvbS5wdXNoKG5ldyBwSlModGFnX2lkLCBwYXJhbXMpKTtcbiAgfVxuXG59O1xuXG53aW5kb3cucGFydGljbGVzSlMubG9hZCA9IGZ1bmN0aW9uKHRhZ19pZCwgcGF0aF9jb25maWdfanNvbiwgY2FsbGJhY2spe1xuXG4gIC8qIGxvYWQganNvbiBjb25maWcgKi9cbiAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICB4aHIub3BlbignR0VUJywgcGF0aF9jb25maWdfanNvbik7XG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGlmKHhoci5yZWFkeVN0YXRlID09IDQpe1xuICAgICAgaWYoeGhyLnN0YXR1cyA9PSAyMDApe1xuICAgICAgICB2YXIgcGFyYW1zID0gSlNPTi5wYXJzZShkYXRhLmN1cnJlbnRUYXJnZXQucmVzcG9uc2UpO1xuICAgICAgICB3aW5kb3cucGFydGljbGVzSlModGFnX2lkLCBwYXJhbXMpO1xuICAgICAgICBpZihjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcEpTIC0gWE1MSHR0cFJlcXVlc3Qgc3RhdHVzOiAnK3hoci5zdGF0dXMpO1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcEpTIC0gRmlsZSBjb25maWcgbm90IGZvdW5kJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICB4aHIuc2VuZCgpO1xuXG59OyIsImltcG9ydCAnLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcGFydGljbGVzLmpzL3BhcnRpY2xlcyc7XHJcbmNvbnN0IHBhcnRpY2xlc0pTID0gd2luZG93LnBhcnRpY2xlc0pTO1xyXG5cclxuXHJcblxyXG5cclxuY2xhc3MgZ2xvYmFsU2NyaXB0IHtcclxuICAgIHN0YXRpYyBpbml0KCkge1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCIjY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICAgICAgbGF6eUxvYWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMCxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiAxMDAwMCxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9IZWlnaHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIDA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDFcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIDYwMDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogMlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgMTE0NDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogM1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5tZWRpYV9faW1nLXdyYXBwZXInKS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICB2YXIgaV9wYXRoID0gJCgnLm1lZGlhX19pbWcnKS5hdHRyKCdzcmMnKTtcclxuICAgICAgICAgICAgJCgnYm9keScpLmFwcGVuZCgnPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXhcIiBpZD1cIm92ZXJsYXlcIj48ZGl2IGlkPVwibWFnbmlmeVwiPjx2aWRlbyBjb250cm9scz1cImNvbnRyb2xzXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiYXV0b1wiPjxzb3VyY2Ugc3JjPVwiJyArIGlfcGF0aCArICdcIiB0eXBlPVwidmlkZW8vbXA0XCI+PC92aWRlbz48ZGl2IGlkPVwiY2xvc2UtcG9wdXBcIj48L2Rpdj48L2Rpdj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgJCgnI21hZ25pZnknKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgbGVmdDogKCQoZG9jdW1lbnQpLndpZHRoKCkgLSAkKCcjbWFnbmlmeScpLm91dGVyV2lkdGgoKSkgLyAyLFxyXG4gICAgICAgICAgICAgICAgLy8gdG9wOiAoJChkb2N1bWVudCkuaGVpZ2h0KCkgLSAkKCcjbWFnbmlmeScpLm91dGVySGVpZ2h0KCkpLzIgdXBkOiAyNC4xMC4yMDE2XHJcbiAgICAgICAgICAgICAgICB0b3A6ICgkKHdpbmRvdykuaGVpZ2h0KCkgLSAkKCcjbWFnbmlmeScpLm91dGVySGVpZ2h0KCkpIC8gMlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJCgnI292ZXJsYXksICNtYWduaWZ5JykuZmFkZUluKCdmYXN0Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICcjY2xvc2UtcG9wdXAsICNvdmVybGF5JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJCgnI292ZXJsYXksICNtYWduaWZ5JykuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCgnI2Nsb3NlLXBvcHVwLCAjbWFnbmlmeSwgI292ZXJsYXknKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gICAg0L7RgtC60YDRi9Cy0LXRgiDQvNC+0LTQsNC70LrRg1xyXG4gICAgICAgICQoJ2J1dHRvbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLm1vZGFsX19vdmVybGF5JykuZmFkZUluKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYnV0dG9uVmFsdWUgPSAkKHRoaXMpLmF0dHIoJ3ZhbHVlJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ1dHRvblZhbHVlKTtcclxuICAgICAgICAgICAgICQoJy5tb2RhbF9faGVhZGxpbmUnKS50ZXh0KGJ1dHRvblZhbHVlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyAgICAgINC+0YLQvNC10L3Rj9C10YIg0YHQutGA0L7Qu9C7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIE9mZlNjcm9sbCgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB3aW5TY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykuYmluZCgnc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQod2luZG93KS5zY3JvbGxUb3Aod2luU2Nyb2xsVG9wKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIE9mZlNjcm9sbCgpO1xyXG5cclxuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdib2R5Jyk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgJChcIi5tb2RhX19hZnRlclwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgJCgnLm1vZGFsX19vdmVybGF5JykuZmFkZU91dCgpO1xyXG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdib2R5Jyk7XHJcbiAgICAgICAgICAgICAgICQod2luZG93KS51bmJpbmQoJ3Njcm9sbCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgJChcIiNtb2RhbF9fc3VibWl0XCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAkKCcubW9kYWxfX292ZXJsYXknKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2JvZHknKTtcclxuICAgICAgICAgICAgICAgJCh3aW5kb3cpLnVuYmluZCgnc2Nyb2xsJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gICAg0LfQsNC60YDRi9Cy0LDQtdGCINC80L7QtNCw0LvQutGDINC60LvQvtGD0YHQsNGA0LjQtdC5XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICQoJy5tb2RhbF9fb3ZlcmxheScpLm1vdXNldXAoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHBvcHVwID0gJCgnLm1vZGFsJyk7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldCAhPSBwb3B1cFswXSAmJiBwb3B1cC5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLm1vZGFsX19vdmVybGF5JykuZmFkZU91dCgpO1xyXG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdib2R5Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgINCy0L7Qt9Cy0YDQsNGJ0Y/QtdGCINGB0LrRgNC+0LvQu1xyXG4gICAgICAgICAgICAgICAgJCh3aW5kb3cpLnVuYmluZCgnc2Nyb2xsJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsU2NyaXB0O1xyXG4iLCIvLyBpbmNsdWRlIGpRdWVyeSB3aXRoIHN0YW5kYXJ0IG9iamVjdFxyXG5nbG9iYWwuJCA9IHJlcXVpcmUoJ2pxdWVyeS5taW4uanMnKTtcclxuZ2xvYmFsLmpRdWVyeSA9ICQ7XHJcbi8vZ2xvYmFsLnNlbWFudGljID0gcmVxdWlyZSgnc2VtYW50aWMuanMnKTtcclxuXHJcbi8vaW1wb3J0IEV4cGFuZGFibGVUZXh0IGZyb20gJ0FkdmFuY2VkX1VJL0V4cGFuZGFibGVUZXh0L0V4cGFuZGFibGVUZXh0LmpzJztcclxuXHJcbmltcG9ydCBnbG9iYWxTY3JpcHQgZnJvbSAnR2xvYmFsL2dsb2JhbFNjcmlwdC5qcyc7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgRXhwYW5kYWJsZVRleHQuaW5pdCgpO1xyXG4gICAgZ2xvYmFsU2NyaXB0LmluaXQoKTtcclxufSk7XHJcbiIsIi8qISBqUXVlcnkgdjMuMi4xIHwgKGMpIEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xyXG4hZnVuY3Rpb24oYSxiKXtcInVzZSBzdHJpY3RcIjtcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YS5kb2N1bWVudD9iKGEsITApOmZ1bmN0aW9uKGEpe2lmKCFhLmRvY3VtZW50KXRocm93IG5ldyBFcnJvcihcImpRdWVyeSByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7cmV0dXJuIGIoYSl9OmIoYSl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnRoaXMsZnVuY3Rpb24oYSxiKXtcInVzZSBzdHJpY3RcIjt2YXIgYz1bXSxkPWEuZG9jdW1lbnQsZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsZj1jLnNsaWNlLGc9Yy5jb25jYXQsaD1jLnB1c2gsaT1jLmluZGV4T2Ysaj17fSxrPWoudG9TdHJpbmcsbD1qLmhhc093blByb3BlcnR5LG09bC50b1N0cmluZyxuPW0uY2FsbChPYmplY3QpLG89e307ZnVuY3Rpb24gcChhLGIpe2I9Ynx8ZDt2YXIgYz1iLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7Yy50ZXh0PWEsYi5oZWFkLmFwcGVuZENoaWxkKGMpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYyl9dmFyIHE9XCIzLjIuMVwiLHI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IHIuZm4uaW5pdChhLGIpfSxzPS9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZyx0PS9eLW1zLS8sdT0vLShbYS16XSkvZyx2PWZ1bmN0aW9uKGEsYil7cmV0dXJuIGIudG9VcHBlckNhc2UoKX07ci5mbj1yLnByb3RvdHlwZT17anF1ZXJ5OnEsY29uc3RydWN0b3I6cixsZW5ndGg6MCx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIGYuY2FsbCh0aGlzKX0sZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP2YuY2FsbCh0aGlzKTphPDA/dGhpc1thK3RoaXMubGVuZ3RoXTp0aGlzW2FdfSxwdXNoU3RhY2s6ZnVuY3Rpb24oYSl7dmFyIGI9ci5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksYSk7cmV0dXJuIGIucHJldk9iamVjdD10aGlzLGJ9LGVhY2g6ZnVuY3Rpb24oYSl7cmV0dXJuIHIuZWFjaCh0aGlzLGEpfSxtYXA6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHIubWFwKHRoaXMsZnVuY3Rpb24oYixjKXtyZXR1cm4gYS5jYWxsKGIsYyxiKX0pKX0sc2xpY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZi5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSxmaXJzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKDApfSxsYXN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoLTEpfSxlcTpmdW5jdGlvbihhKXt2YXIgYj10aGlzLmxlbmd0aCxjPSthKyhhPDA/YjowKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soYz49MCYmYzxiP1t0aGlzW2NdXTpbXSl9LGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnByZXZPYmplY3R8fHRoaXMuY29uc3RydWN0b3IoKX0scHVzaDpoLHNvcnQ6Yy5zb3J0LHNwbGljZTpjLnNwbGljZX0sci5leHRlbmQ9ci5mbi5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgYSxiLGMsZCxlLGYsZz1hcmd1bWVudHNbMF18fHt9LGg9MSxpPWFyZ3VtZW50cy5sZW5ndGgsaj0hMTtmb3IoXCJib29sZWFuXCI9PXR5cGVvZiBnJiYoaj1nLGc9YXJndW1lbnRzW2hdfHx7fSxoKyspLFwib2JqZWN0XCI9PXR5cGVvZiBnfHxyLmlzRnVuY3Rpb24oZyl8fChnPXt9KSxoPT09aSYmKGc9dGhpcyxoLS0pO2g8aTtoKyspaWYobnVsbCE9KGE9YXJndW1lbnRzW2hdKSlmb3IoYiBpbiBhKWM9Z1tiXSxkPWFbYl0sZyE9PWQmJihqJiZkJiYoci5pc1BsYWluT2JqZWN0KGQpfHwoZT1BcnJheS5pc0FycmF5KGQpKSk/KGU/KGU9ITEsZj1jJiZBcnJheS5pc0FycmF5KGMpP2M6W10pOmY9YyYmci5pc1BsYWluT2JqZWN0KGMpP2M6e30sZ1tiXT1yLmV4dGVuZChqLGYsZCkpOnZvaWQgMCE9PWQmJihnW2JdPWQpKTtyZXR1cm4gZ30sci5leHRlbmQoe2V4cGFuZG86XCJqUXVlcnlcIisocStNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKC9cXEQvZyxcIlwiKSxpc1JlYWR5OiEwLGVycm9yOmZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihhKX0sbm9vcDpmdW5jdGlvbigpe30saXNGdW5jdGlvbjpmdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT1yLnR5cGUoYSl9LGlzV2luZG93OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hJiZhPT09YS53aW5kb3d9LGlzTnVtZXJpYzpmdW5jdGlvbihhKXt2YXIgYj1yLnR5cGUoYSk7cmV0dXJuKFwibnVtYmVyXCI9PT1ifHxcInN0cmluZ1wiPT09YikmJiFpc05hTihhLXBhcnNlRmxvYXQoYSkpfSxpc1BsYWluT2JqZWN0OmZ1bmN0aW9uKGEpe3ZhciBiLGM7cmV0dXJuISghYXx8XCJbb2JqZWN0IE9iamVjdF1cIiE9PWsuY2FsbChhKSkmJighKGI9ZShhKSl8fChjPWwuY2FsbChiLFwiY29uc3RydWN0b3JcIikmJmIuY29uc3RydWN0b3IsXCJmdW5jdGlvblwiPT10eXBlb2YgYyYmbS5jYWxsKGMpPT09bikpfSxpc0VtcHR5T2JqZWN0OmZ1bmN0aW9uKGEpe3ZhciBiO2ZvcihiIGluIGEpcmV0dXJuITE7cmV0dXJuITB9LHR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/YStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2pbay5jYWxsKGEpXXx8XCJvYmplY3RcIjp0eXBlb2YgYX0sZ2xvYmFsRXZhbDpmdW5jdGlvbihhKXtwKGEpfSxjYW1lbENhc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZSh0LFwibXMtXCIpLnJlcGxhY2UodSx2KX0sZWFjaDpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MDtpZih3KGEpKXtmb3IoYz1hLmxlbmd0aDtkPGM7ZCsrKWlmKGIuY2FsbChhW2RdLGQsYVtkXSk9PT0hMSlicmVha31lbHNlIGZvcihkIGluIGEpaWYoYi5jYWxsKGFbZF0sZCxhW2RdKT09PSExKWJyZWFrO3JldHVybiBhfSx0cmltOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP1wiXCI6KGErXCJcIikucmVwbGFjZShzLFwiXCIpfSxtYWtlQXJyYXk6ZnVuY3Rpb24oYSxiKXt2YXIgYz1ifHxbXTtyZXR1cm4gbnVsbCE9YSYmKHcoT2JqZWN0KGEpKT9yLm1lcmdlKGMsXCJzdHJpbmdcIj09dHlwZW9mIGE/W2FdOmEpOmguY2FsbChjLGEpKSxjfSxpbkFycmF5OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbnVsbD09Yj8tMTppLmNhbGwoYixhLGMpfSxtZXJnZTpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0rYi5sZW5ndGgsZD0wLGU9YS5sZW5ndGg7ZDxjO2QrKylhW2UrK109YltkXTtyZXR1cm4gYS5sZW5ndGg9ZSxhfSxncmVwOmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQsZT1bXSxmPTAsZz1hLmxlbmd0aCxoPSFjO2Y8ZztmKyspZD0hYihhW2ZdLGYpLGQhPT1oJiZlLnB1c2goYVtmXSk7cmV0dXJuIGV9LG1hcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPTAsaD1bXTtpZih3KGEpKWZvcihkPWEubGVuZ3RoO2Y8ZDtmKyspZT1iKGFbZl0sZixjKSxudWxsIT1lJiZoLnB1c2goZSk7ZWxzZSBmb3IoZiBpbiBhKWU9YihhW2ZdLGYsYyksbnVsbCE9ZSYmaC5wdXNoKGUpO3JldHVybiBnLmFwcGx5KFtdLGgpfSxndWlkOjEscHJveHk6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGImJihjPWFbYl0sYj1hLGE9Yyksci5pc0Z1bmN0aW9uKGEpKXJldHVybiBkPWYuY2FsbChhcmd1bWVudHMsMiksZT1mdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGJ8fHRoaXMsZC5jb25jYXQoZi5jYWxsKGFyZ3VtZW50cykpKX0sZS5ndWlkPWEuZ3VpZD1hLmd1aWR8fHIuZ3VpZCsrLGV9LG5vdzpEYXRlLm5vdyxzdXBwb3J0Om99KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJihyLmZuW1N5bWJvbC5pdGVyYXRvcl09Y1tTeW1ib2wuaXRlcmF0b3JdKSxyLmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yIFN5bWJvbFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe2pbXCJbb2JqZWN0IFwiK2IrXCJdXCJdPWIudG9Mb3dlckNhc2UoKX0pO2Z1bmN0aW9uIHcoYSl7dmFyIGI9ISFhJiZcImxlbmd0aFwiaW4gYSYmYS5sZW5ndGgsYz1yLnR5cGUoYSk7cmV0dXJuXCJmdW5jdGlvblwiIT09YyYmIXIuaXNXaW5kb3coYSkmJihcImFycmF5XCI9PT1jfHwwPT09Ynx8XCJudW1iZXJcIj09dHlwZW9mIGImJmI+MCYmYi0xIGluIGEpfXZhciB4PWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGksaixrLGwsbSxuLG8scCxxLHIscyx0LHU9XCJzaXp6bGVcIisxKm5ldyBEYXRlLHY9YS5kb2N1bWVudCx3PTAseD0wLHk9aGEoKSx6PWhhKCksQT1oYSgpLEI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT09PWImJihsPSEwKSwwfSxDPXt9Lmhhc093blByb3BlcnR5LEQ9W10sRT1ELnBvcCxGPUQucHVzaCxHPUQucHVzaCxIPUQuc2xpY2UsST1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7YzxkO2MrKylpZihhW2NdPT09YilyZXR1cm4gYztyZXR1cm4tMX0sSj1cImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsSz1cIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsTD1cIig/OlxcXFxcXFxcLnxbXFxcXHctXXxbXlxcMC1cXFxceGEwXSkrXCIsTT1cIlxcXFxbXCIrSytcIiooXCIrTCtcIikoPzpcIitLK1wiKihbKl4kfCF+XT89KVwiK0srXCIqKD86JygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwifChcIitMK1wiKSl8KVwiK0srXCIqXFxcXF1cIixOPVwiOihcIitMK1wiKSg/OlxcXFwoKCgnKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIitNK1wiKSopfC4qKVxcXFwpfClcIixPPW5ldyBSZWdFeHAoSytcIitcIixcImdcIiksUD1uZXcgUmVnRXhwKFwiXlwiK0srXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiK0srXCIrJFwiLFwiZ1wiKSxRPW5ldyBSZWdFeHAoXCJeXCIrSytcIiosXCIrSytcIipcIiksUj1uZXcgUmVnRXhwKFwiXlwiK0srXCIqKFs+K35dfFwiK0srXCIpXCIrSytcIipcIiksUz1uZXcgUmVnRXhwKFwiPVwiK0srXCIqKFteXFxcXF0nXFxcIl0qPylcIitLK1wiKlxcXFxdXCIsXCJnXCIpLFQ9bmV3IFJlZ0V4cChOKSxVPW5ldyBSZWdFeHAoXCJeXCIrTCtcIiRcIiksVj17SUQ6bmV3IFJlZ0V4cChcIl4jKFwiK0wrXCIpXCIpLENMQVNTOm5ldyBSZWdFeHAoXCJeXFxcXC4oXCIrTCtcIilcIiksVEFHOm5ldyBSZWdFeHAoXCJeKFwiK0wrXCJ8WypdKVwiKSxBVFRSOm5ldyBSZWdFeHAoXCJeXCIrTSksUFNFVURPOm5ldyBSZWdFeHAoXCJeXCIrTiksQ0hJTEQ6bmV3IFJlZ0V4cChcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIrSytcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiK0srXCIqKD86KFsrLV18KVwiK0srXCIqKFxcXFxkKyl8KSlcIitLK1wiKlxcXFwpfClcIixcImlcIiksYm9vbDpuZXcgUmVnRXhwKFwiXig/OlwiK0orXCIpJFwiLFwiaVwiKSxuZWVkc0NvbnRleHQ6bmV3IFJlZ0V4cChcIl5cIitLK1wiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIitLK1wiKigoPzotXFxcXGQpP1xcXFxkKilcIitLK1wiKlxcXFwpfCkoPz1bXi1dfCQpXCIsXCJpXCIpfSxXPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksWD0vXmhcXGQkL2ksWT0vXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLFo9L14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sJD0vWyt+XS8sXz1uZXcgUmVnRXhwKFwiXFxcXFxcXFwoW1xcXFxkYS1mXXsxLDZ9XCIrSytcIj98KFwiK0srXCIpfC4pXCIsXCJpZ1wiKSxhYT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9XCIweFwiK2ItNjU1MzY7cmV0dXJuIGQhPT1kfHxjP2I6ZDwwP1N0cmluZy5mcm9tQ2hhckNvZGUoZCs2NTUzNik6U3RyaW5nLmZyb21DaGFyQ29kZShkPj4xMHw1NTI5NiwxMDIzJmR8NTYzMjApfSxiYT0vKFtcXDAtXFx4MWZcXHg3Zl18Xi0/XFxkKXxeLSR8W15cXDAtXFx4MWZcXHg3Zi1cXHVGRkZGXFx3LV0vZyxjYT1mdW5jdGlvbihhLGIpe3JldHVybiBiP1wiXFwwXCI9PT1hP1wiXFx1ZmZmZFwiOmEuc2xpY2UoMCwtMSkrXCJcXFxcXCIrYS5jaGFyQ29kZUF0KGEubGVuZ3RoLTEpLnRvU3RyaW5nKDE2KStcIiBcIjpcIlxcXFxcIithfSxkYT1mdW5jdGlvbigpe20oKX0sZWE9dGEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuZGlzYWJsZWQ9PT0hMCYmKFwiZm9ybVwiaW4gYXx8XCJsYWJlbFwiaW4gYSl9LHtkaXI6XCJwYXJlbnROb2RlXCIsbmV4dDpcImxlZ2VuZFwifSk7dHJ5e0cuYXBwbHkoRD1ILmNhbGwodi5jaGlsZE5vZGVzKSx2LmNoaWxkTm9kZXMpLERbdi5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGV9Y2F0Y2goZmEpe0c9e2FwcGx5OkQubGVuZ3RoP2Z1bmN0aW9uKGEsYil7Ri5hcHBseShhLEguY2FsbChiKSl9OmZ1bmN0aW9uKGEsYil7dmFyIGM9YS5sZW5ndGgsZD0wO3doaWxlKGFbYysrXT1iW2QrK10pO2EubGVuZ3RoPWMtMX19fWZ1bmN0aW9uIGdhKGEsYixkLGUpe3ZhciBmLGgsaixrLGwsbyxyLHM9YiYmYi5vd25lckRvY3VtZW50LHc9Yj9iLm5vZGVUeXBlOjk7aWYoZD1kfHxbXSxcInN0cmluZ1wiIT10eXBlb2YgYXx8IWF8fDEhPT13JiY5IT09dyYmMTEhPT13KXJldHVybiBkO2lmKCFlJiYoKGI/Yi5vd25lckRvY3VtZW50fHxiOnYpIT09biYmbShiKSxiPWJ8fG4scCkpe2lmKDExIT09dyYmKGw9Wi5leGVjKGEpKSlpZihmPWxbMV0pe2lmKDk9PT13KXtpZighKGo9Yi5nZXRFbGVtZW50QnlJZChmKSkpcmV0dXJuIGQ7aWYoai5pZD09PWYpcmV0dXJuIGQucHVzaChqKSxkfWVsc2UgaWYocyYmKGo9cy5nZXRFbGVtZW50QnlJZChmKSkmJnQoYixqKSYmai5pZD09PWYpcmV0dXJuIGQucHVzaChqKSxkfWVsc2V7aWYobFsyXSlyZXR1cm4gRy5hcHBseShkLGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSkpLGQ7aWYoKGY9bFszXSkmJmMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXJldHVybiBHLmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGYpKSxkfWlmKGMucXNhJiYhQVthK1wiIFwiXSYmKCFxfHwhcS50ZXN0KGEpKSl7aWYoMSE9PXcpcz1iLHI9YTtlbHNlIGlmKFwib2JqZWN0XCIhPT1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpeyhrPWIuZ2V0QXR0cmlidXRlKFwiaWRcIikpP2s9ay5yZXBsYWNlKGJhLGNhKTpiLnNldEF0dHJpYnV0ZShcImlkXCIsaz11KSxvPWcoYSksaD1vLmxlbmd0aDt3aGlsZShoLS0pb1toXT1cIiNcIitrK1wiIFwiK3NhKG9baF0pO3I9by5qb2luKFwiLFwiKSxzPSQudGVzdChhKSYmcWEoYi5wYXJlbnROb2RlKXx8Yn1pZihyKXRyeXtyZXR1cm4gRy5hcHBseShkLHMucXVlcnlTZWxlY3RvckFsbChyKSksZH1jYXRjaCh4KXt9ZmluYWxseXtrPT09dSYmYi5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKX19fXJldHVybiBpKGEucmVwbGFjZShQLFwiJDFcIiksYixkLGUpfWZ1bmN0aW9uIGhhKCl7dmFyIGE9W107ZnVuY3Rpb24gYihjLGUpe3JldHVybiBhLnB1c2goYytcIiBcIik+ZC5jYWNoZUxlbmd0aCYmZGVsZXRlIGJbYS5zaGlmdCgpXSxiW2MrXCIgXCJdPWV9cmV0dXJuIGJ9ZnVuY3Rpb24gaWEoYSl7cmV0dXJuIGFbdV09ITAsYX1mdW5jdGlvbiBqYShhKXt2YXIgYj1uLmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTt0cnl7cmV0dXJuISFhKGIpfWNhdGNoKGMpe3JldHVybiExfWZpbmFsbHl7Yi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYiksYj1udWxsfX1mdW5jdGlvbiBrYShhLGIpe3ZhciBjPWEuc3BsaXQoXCJ8XCIpLGU9Yy5sZW5ndGg7d2hpbGUoZS0tKWQuYXR0ckhhbmRsZVtjW2VdXT1ifWZ1bmN0aW9uIGxhKGEsYil7dmFyIGM9YiYmYSxkPWMmJjE9PT1hLm5vZGVUeXBlJiYxPT09Yi5ub2RlVHlwZSYmYS5zb3VyY2VJbmRleC1iLnNvdXJjZUluZGV4O2lmKGQpcmV0dXJuIGQ7aWYoYyl3aGlsZShjPWMubmV4dFNpYmxpbmcpaWYoYz09PWIpcmV0dXJuLTE7cmV0dXJuIGE/MTotMX1mdW5jdGlvbiBtYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWMmJmIudHlwZT09PWF9fWZ1bmN0aW9uIG5hKGEpe3JldHVybiBmdW5jdGlvbihiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuKFwiaW5wdXRcIj09PWN8fFwiYnV0dG9uXCI9PT1jKSYmYi50eXBlPT09YX19ZnVuY3Rpb24gb2EoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVyblwiZm9ybVwiaW4gYj9iLnBhcmVudE5vZGUmJmIuZGlzYWJsZWQ9PT0hMT9cImxhYmVsXCJpbiBiP1wibGFiZWxcImluIGIucGFyZW50Tm9kZT9iLnBhcmVudE5vZGUuZGlzYWJsZWQ9PT1hOmIuZGlzYWJsZWQ9PT1hOmIuaXNEaXNhYmxlZD09PWF8fGIuaXNEaXNhYmxlZCE9PSFhJiZlYShiKT09PWE6Yi5kaXNhYmxlZD09PWE6XCJsYWJlbFwiaW4gYiYmYi5kaXNhYmxlZD09PWF9fWZ1bmN0aW9uIHBhKGEpe3JldHVybiBpYShmdW5jdGlvbihiKXtyZXR1cm4gYj0rYixpYShmdW5jdGlvbihjLGQpe3ZhciBlLGY9YShbXSxjLmxlbmd0aCxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSljW2U9ZltnXV0mJihjW2VdPSEoZFtlXT1jW2VdKSl9KX0pfWZ1bmN0aW9uIHFhKGEpe3JldHVybiBhJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZSYmYX1jPWdhLnN1cHBvcnQ9e30sZj1nYS5pc1hNTD1mdW5jdGlvbihhKXt2YXIgYj1hJiYoYS5vd25lckRvY3VtZW50fHxhKS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuISFiJiZcIkhUTUxcIiE9PWIubm9kZU5hbWV9LG09Z2Euc2V0RG9jdW1lbnQ9ZnVuY3Rpb24oYSl7dmFyIGIsZSxnPWE/YS5vd25lckRvY3VtZW50fHxhOnY7cmV0dXJuIGchPT1uJiY5PT09Zy5ub2RlVHlwZSYmZy5kb2N1bWVudEVsZW1lbnQ/KG49ZyxvPW4uZG9jdW1lbnRFbGVtZW50LHA9IWYobiksdiE9PW4mJihlPW4uZGVmYXVsdFZpZXcpJiZlLnRvcCE9PWUmJihlLmFkZEV2ZW50TGlzdGVuZXI/ZS5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsZGEsITEpOmUuYXR0YWNoRXZlbnQmJmUuYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLGRhKSksYy5hdHRyaWJ1dGVzPWphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmNsYXNzTmFtZT1cImlcIiwhYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIil9KSxjLmdldEVsZW1lbnRzQnlUYWdOYW1lPWphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmFwcGVuZENoaWxkKG4uY3JlYXRlQ29tbWVudChcIlwiKSksIWEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aH0pLGMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT1ZLnRlc3Qobi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSxjLmdldEJ5SWQ9amEoZnVuY3Rpb24oYSl7cmV0dXJuIG8uYXBwZW5kQ2hpbGQoYSkuaWQ9dSwhbi5nZXRFbGVtZW50c0J5TmFtZXx8IW4uZ2V0RWxlbWVudHNCeU5hbWUodSkubGVuZ3RofSksYy5nZXRCeUlkPyhkLmZpbHRlci5JRD1mdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoXyxhYSk7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybiBhLmdldEF0dHJpYnV0ZShcImlkXCIpPT09Yn19LGQuZmluZC5JRD1mdW5jdGlvbihhLGIpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRCeUlkJiZwKXt2YXIgYz1iLmdldEVsZW1lbnRCeUlkKGEpO3JldHVybiBjP1tjXTpbXX19KTooZC5maWx0ZXIuSUQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKF8sYWEpO3JldHVybiBmdW5jdGlvbihhKXt2YXIgYz1cInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRBdHRyaWJ1dGVOb2RlJiZhLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtyZXR1cm4gYyYmYy52YWx1ZT09PWJ9fSxkLmZpbmQuSUQ9ZnVuY3Rpb24oYSxiKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50QnlJZCYmcCl7dmFyIGMsZCxlLGY9Yi5nZXRFbGVtZW50QnlJZChhKTtpZihmKXtpZihjPWYuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpLGMmJmMudmFsdWU9PT1hKXJldHVybltmXTtlPWIuZ2V0RWxlbWVudHNCeU5hbWUoYSksZD0wO3doaWxlKGY9ZVtkKytdKWlmKGM9Zi5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIiksYyYmYy52YWx1ZT09PWEpcmV0dXJuW2ZdfXJldHVybltdfX0pLGQuZmluZC5UQUc9Yy5nZXRFbGVtZW50c0J5VGFnTmFtZT9mdW5jdGlvbihhLGIpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRzQnlUYWdOYW1lP2IuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSk6Yy5xc2E/Yi5xdWVyeVNlbGVjdG9yQWxsKGEpOnZvaWQgMH06ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9MCxmPWIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSk7aWYoXCIqXCI9PT1hKXt3aGlsZShjPWZbZSsrXSkxPT09Yy5ub2RlVHlwZSYmZC5wdXNoKGMpO3JldHVybiBkfXJldHVybiBmfSxkLmZpbmQuQ0xBU1M9Yy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZmdW5jdGlvbihhLGIpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJnApcmV0dXJuIGIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShhKX0scj1bXSxxPVtdLChjLnFzYT1ZLnRlc3Qobi5xdWVyeVNlbGVjdG9yQWxsKSkmJihqYShmdW5jdGlvbihhKXtvLmFwcGVuZENoaWxkKGEpLmlubmVySFRNTD1cIjxhIGlkPSdcIit1K1wiJz48L2E+PHNlbGVjdCBpZD0nXCIrdStcIi1cXHJcXFxcJyBtc2FsbG93Y2FwdHVyZT0nJz48b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiLGEucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCYmcS5wdXNoKFwiWypeJF09XCIrSytcIiooPzonJ3xcXFwiXFxcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGh8fHEucHVzaChcIlxcXFxbXCIrSytcIiooPzp2YWx1ZXxcIitKK1wiKVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWR+PVwiK3UrXCItXVwiKS5sZW5ndGh8fHEucHVzaChcIn49XCIpLGEucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aHx8cS5wdXNoKFwiOmNoZWNrZWRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiYSNcIit1K1wiKypcIikubGVuZ3RofHxxLnB1c2goXCIuIy4rWyt+XVwiKX0pLGphKGZ1bmN0aW9uKGEpe2EuaW5uZXJIVE1MPVwiPGEgaHJlZj0nJyBkaXNhYmxlZD0nZGlzYWJsZWQnPjwvYT48c2VsZWN0IGRpc2FibGVkPSdkaXNhYmxlZCc+PG9wdGlvbi8+PC9zZWxlY3Q+XCI7dmFyIGI9bi5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7Yi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJoaWRkZW5cIiksYS5hcHBlbmRDaGlsZChiKS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJEXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPWRdXCIpLmxlbmd0aCYmcS5wdXNoKFwibmFtZVwiK0srXCIqWypeJHwhfl0/PVwiKSwyIT09YS5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RoJiZxLnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLG8uYXBwZW5kQ2hpbGQoYSkuZGlzYWJsZWQ9ITAsMiE9PWEucXVlcnlTZWxlY3RvckFsbChcIjpkaXNhYmxlZFwiKS5sZW5ndGgmJnEucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiKiw6eFwiKSxxLnB1c2goXCIsLio6XCIpfSkpLChjLm1hdGNoZXNTZWxlY3Rvcj1ZLnRlc3Qocz1vLm1hdGNoZXN8fG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHxvLm1vek1hdGNoZXNTZWxlY3Rvcnx8by5vTWF0Y2hlc1NlbGVjdG9yfHxvLm1zTWF0Y2hlc1NlbGVjdG9yKSkmJmphKGZ1bmN0aW9uKGEpe2MuZGlzY29ubmVjdGVkTWF0Y2g9cy5jYWxsKGEsXCIqXCIpLHMuY2FsbChhLFwiW3MhPScnXTp4XCIpLHIucHVzaChcIiE9XCIsTil9KSxxPXEubGVuZ3RoJiZuZXcgUmVnRXhwKHEuam9pbihcInxcIikpLHI9ci5sZW5ndGgmJm5ldyBSZWdFeHAoci5qb2luKFwifFwiKSksYj1ZLnRlc3Qoby5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiksdD1ifHxZLnRlc3Qoby5jb250YWlucyk/ZnVuY3Rpb24oYSxiKXt2YXIgYz05PT09YS5ub2RlVHlwZT9hLmRvY3VtZW50RWxlbWVudDphLGQ9YiYmYi5wYXJlbnROb2RlO3JldHVybiBhPT09ZHx8ISghZHx8MSE9PWQubm9kZVR5cGV8fCEoYy5jb250YWlucz9jLmNvbnRhaW5zKGQpOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJjE2JmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZCkpKX06ZnVuY3Rpb24oYSxiKXtpZihiKXdoaWxlKGI9Yi5wYXJlbnROb2RlKWlmKGI9PT1hKXJldHVybiEwO3JldHVybiExfSxCPWI/ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBkPSFhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uLSFiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO3JldHVybiBkP2Q6KGQ9KGEub3duZXJEb2N1bWVudHx8YSk9PT0oYi5vd25lckRvY3VtZW50fHxiKT9hLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpOjEsMSZkfHwhYy5zb3J0RGV0YWNoZWQmJmIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYSk9PT1kP2E9PT1ufHxhLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYSk/LTE6Yj09PW58fGIub3duZXJEb2N1bWVudD09PXYmJnQodixiKT8xOms/SShrLGEpLUkoayxiKTowOjQmZD8tMToxKX06ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBjLGQ9MCxlPWEucGFyZW50Tm9kZSxmPWIucGFyZW50Tm9kZSxnPVthXSxoPVtiXTtpZighZXx8IWYpcmV0dXJuIGE9PT1uPy0xOmI9PT1uPzE6ZT8tMTpmPzE6az9JKGssYSktSShrLGIpOjA7aWYoZT09PWYpcmV0dXJuIGxhKGEsYik7Yz1hO3doaWxlKGM9Yy5wYXJlbnROb2RlKWcudW5zaGlmdChjKTtjPWI7d2hpbGUoYz1jLnBhcmVudE5vZGUpaC51bnNoaWZ0KGMpO3doaWxlKGdbZF09PT1oW2RdKWQrKztyZXR1cm4gZD9sYShnW2RdLGhbZF0pOmdbZF09PT12Py0xOmhbZF09PT12PzE6MH0sbik6bn0sZ2EubWF0Y2hlcz1mdW5jdGlvbihhLGIpe3JldHVybiBnYShhLG51bGwsbnVsbCxiKX0sZ2EubWF0Y2hlc1NlbGVjdG9yPWZ1bmN0aW9uKGEsYil7aWYoKGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpLGI9Yi5yZXBsYWNlKFMsXCI9JyQxJ11cIiksYy5tYXRjaGVzU2VsZWN0b3ImJnAmJiFBW2IrXCIgXCJdJiYoIXJ8fCFyLnRlc3QoYikpJiYoIXF8fCFxLnRlc3QoYikpKXRyeXt2YXIgZD1zLmNhbGwoYSxiKTtpZihkfHxjLmRpc2Nvbm5lY3RlZE1hdGNofHxhLmRvY3VtZW50JiYxMSE9PWEuZG9jdW1lbnQubm9kZVR5cGUpcmV0dXJuIGR9Y2F0Y2goZSl7fXJldHVybiBnYShiLG4sbnVsbCxbYV0pLmxlbmd0aD4wfSxnYS5jb250YWlucz1mdW5jdGlvbihhLGIpe3JldHVybihhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKSx0KGEsYil9LGdhLmF0dHI9ZnVuY3Rpb24oYSxiKXsoYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSk7dmFyIGU9ZC5hdHRySGFuZGxlW2IudG9Mb3dlckNhc2UoKV0sZj1lJiZDLmNhbGwoZC5hdHRySGFuZGxlLGIudG9Mb3dlckNhc2UoKSk/ZShhLGIsIXApOnZvaWQgMDtyZXR1cm4gdm9pZCAwIT09Zj9mOmMuYXR0cmlidXRlc3x8IXA/YS5nZXRBdHRyaWJ1dGUoYik6KGY9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpKSYmZi5zcGVjaWZpZWQ/Zi52YWx1ZTpudWxsfSxnYS5lc2NhcGU9ZnVuY3Rpb24oYSl7cmV0dXJuKGErXCJcIikucmVwbGFjZShiYSxjYSl9LGdhLmVycm9yPWZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiK2EpfSxnYS51bmlxdWVTb3J0PWZ1bmN0aW9uKGEpe3ZhciBiLGQ9W10sZT0wLGY9MDtpZihsPSFjLmRldGVjdER1cGxpY2F0ZXMsaz0hYy5zb3J0U3RhYmxlJiZhLnNsaWNlKDApLGEuc29ydChCKSxsKXt3aGlsZShiPWFbZisrXSliPT09YVtmXSYmKGU9ZC5wdXNoKGYpKTt3aGlsZShlLS0pYS5zcGxpY2UoZFtlXSwxKX1yZXR1cm4gaz1udWxsLGF9LGU9Z2EuZ2V0VGV4dD1mdW5jdGlvbihhKXt2YXIgYixjPVwiXCIsZD0wLGY9YS5ub2RlVHlwZTtpZihmKXtpZigxPT09Znx8OT09PWZ8fDExPT09Zil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEudGV4dENvbnRlbnQpcmV0dXJuIGEudGV4dENvbnRlbnQ7Zm9yKGE9YS5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKWMrPWUoYSl9ZWxzZSBpZigzPT09Znx8ND09PWYpcmV0dXJuIGEubm9kZVZhbHVlfWVsc2Ugd2hpbGUoYj1hW2QrK10pYys9ZShiKTtyZXR1cm4gY30sZD1nYS5zZWxlY3RvcnM9e2NhY2hlTGVuZ3RoOjUwLGNyZWF0ZVBzZXVkbzppYSxtYXRjaDpWLGF0dHJIYW5kbGU6e30sZmluZDp7fSxyZWxhdGl2ZTp7XCI+XCI6e2RpcjpcInBhcmVudE5vZGVcIixmaXJzdDohMH0sXCIgXCI6e2RpcjpcInBhcmVudE5vZGVcIn0sXCIrXCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wiLGZpcnN0OiEwfSxcIn5cIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCJ9fSxwcmVGaWx0ZXI6e0FUVFI6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbMV09YVsxXS5yZXBsYWNlKF8sYWEpLGFbM109KGFbM118fGFbNF18fGFbNV18fFwiXCIpLnJlcGxhY2UoXyxhYSksXCJ+PVwiPT09YVsyXSYmKGFbM109XCIgXCIrYVszXStcIiBcIiksYS5zbGljZSgwLDQpfSxDSElMRDpmdW5jdGlvbihhKXtyZXR1cm4gYVsxXT1hWzFdLnRvTG93ZXJDYXNlKCksXCJudGhcIj09PWFbMV0uc2xpY2UoMCwzKT8oYVszXXx8Z2EuZXJyb3IoYVswXSksYVs0XT0rKGFbNF0/YVs1XSsoYVs2XXx8MSk6MiooXCJldmVuXCI9PT1hWzNdfHxcIm9kZFwiPT09YVszXSkpLGFbNV09KyhhWzddK2FbOF18fFwib2RkXCI9PT1hWzNdKSk6YVszXSYmZ2EuZXJyb3IoYVswXSksYX0sUFNFVURPOmZ1bmN0aW9uKGEpe3ZhciBiLGM9IWFbNl0mJmFbMl07cmV0dXJuIFYuQ0hJTEQudGVzdChhWzBdKT9udWxsOihhWzNdP2FbMl09YVs0XXx8YVs1XXx8XCJcIjpjJiZULnRlc3QoYykmJihiPWcoYywhMCkpJiYoYj1jLmluZGV4T2YoXCIpXCIsYy5sZW5ndGgtYiktYy5sZW5ndGgpJiYoYVswXT1hWzBdLnNsaWNlKDAsYiksYVsyXT1jLnNsaWNlKDAsYikpLGEuc2xpY2UoMCwzKSl9fSxmaWx0ZXI6e1RBRzpmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoXyxhYSkudG9Mb3dlckNhc2UoKTtyZXR1cm5cIipcIj09PWE/ZnVuY3Rpb24oKXtyZXR1cm4hMH06ZnVuY3Rpb24oYSl7cmV0dXJuIGEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWJ9fSxDTEFTUzpmdW5jdGlvbihhKXt2YXIgYj15W2ErXCIgXCJdO3JldHVybiBifHwoYj1uZXcgUmVnRXhwKFwiKF58XCIrSytcIilcIithK1wiKFwiK0srXCJ8JClcIikpJiZ5KGEsZnVuY3Rpb24oYSl7cmV0dXJuIGIudGVzdChcInN0cmluZ1wiPT10eXBlb2YgYS5jbGFzc05hbWUmJmEuY2xhc3NOYW1lfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRBdHRyaWJ1dGUmJmEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpfSl9LEFUVFI6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBmdW5jdGlvbihkKXt2YXIgZT1nYS5hdHRyKGQsYSk7cmV0dXJuIG51bGw9PWU/XCIhPVwiPT09YjohYnx8KGUrPVwiXCIsXCI9XCI9PT1iP2U9PT1jOlwiIT1cIj09PWI/ZSE9PWM6XCJePVwiPT09Yj9jJiYwPT09ZS5pbmRleE9mKGMpOlwiKj1cIj09PWI/YyYmZS5pbmRleE9mKGMpPi0xOlwiJD1cIj09PWI/YyYmZS5zbGljZSgtYy5sZW5ndGgpPT09YzpcIn49XCI9PT1iPyhcIiBcIitlLnJlcGxhY2UoTyxcIiBcIikrXCIgXCIpLmluZGV4T2YoYyk+LTE6XCJ8PVwiPT09YiYmKGU9PT1jfHxlLnNsaWNlKDAsYy5sZW5ndGgrMSk9PT1jK1wiLVwiKSl9fSxDSElMRDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPVwibnRoXCIhPT1hLnNsaWNlKDAsMyksZz1cImxhc3RcIiE9PWEuc2xpY2UoLTQpLGg9XCJvZi10eXBlXCI9PT1iO3JldHVybiAxPT09ZCYmMD09PWU/ZnVuY3Rpb24oYSl7cmV0dXJuISFhLnBhcmVudE5vZGV9OmZ1bmN0aW9uKGIsYyxpKXt2YXIgaixrLGwsbSxuLG8scD1mIT09Zz9cIm5leHRTaWJsaW5nXCI6XCJwcmV2aW91c1NpYmxpbmdcIixxPWIucGFyZW50Tm9kZSxyPWgmJmIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxzPSFpJiYhaCx0PSExO2lmKHEpe2lmKGYpe3doaWxlKHApe209Yjt3aGlsZShtPW1bcF0paWYoaD9tLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1yOjE9PT1tLm5vZGVUeXBlKXJldHVybiExO289cD1cIm9ubHlcIj09PWEmJiFvJiZcIm5leHRTaWJsaW5nXCJ9cmV0dXJuITB9aWYobz1bZz9xLmZpcnN0Q2hpbGQ6cS5sYXN0Q2hpbGRdLGcmJnMpe209cSxsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxqPWtbYV18fFtdLG49alswXT09PXcmJmpbMV0sdD1uJiZqWzJdLG09biYmcS5jaGlsZE5vZGVzW25dO3doaWxlKG09KytuJiZtJiZtW3BdfHwodD1uPTApfHxvLnBvcCgpKWlmKDE9PT1tLm5vZGVUeXBlJiYrK3QmJm09PT1iKXtrW2FdPVt3LG4sdF07YnJlYWt9fWVsc2UgaWYocyYmKG09YixsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxqPWtbYV18fFtdLG49alswXT09PXcmJmpbMV0sdD1uKSx0PT09ITEpd2hpbGUobT0rK24mJm0mJm1bcF18fCh0PW49MCl8fG8ucG9wKCkpaWYoKGg/bS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09cjoxPT09bS5ub2RlVHlwZSkmJisrdCYmKHMmJihsPW1bdV18fChtW3VdPXt9KSxrPWxbbS51bmlxdWVJRF18fChsW20udW5pcXVlSURdPXt9KSxrW2FdPVt3LHRdKSxtPT09YikpYnJlYWs7cmV0dXJuIHQtPWUsdD09PWR8fHQlZD09PTAmJnQvZD49MH19fSxQU0VVRE86ZnVuY3Rpb24oYSxiKXt2YXIgYyxlPWQucHNldWRvc1thXXx8ZC5zZXRGaWx0ZXJzW2EudG9Mb3dlckNhc2UoKV18fGdhLmVycm9yKFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIithKTtyZXR1cm4gZVt1XT9lKGIpOmUubGVuZ3RoPjE/KGM9W2EsYSxcIlwiLGJdLGQuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eShhLnRvTG93ZXJDYXNlKCkpP2lhKGZ1bmN0aW9uKGEsYyl7dmFyIGQsZj1lKGEsYiksZz1mLmxlbmd0aDt3aGlsZShnLS0pZD1JKGEsZltnXSksYVtkXT0hKGNbZF09ZltnXSl9KTpmdW5jdGlvbihhKXtyZXR1cm4gZShhLDAsYyl9KTplfX0scHNldWRvczp7bm90OmlhKGZ1bmN0aW9uKGEpe3ZhciBiPVtdLGM9W10sZD1oKGEucmVwbGFjZShQLFwiJDFcIikpO3JldHVybiBkW3VdP2lhKGZ1bmN0aW9uKGEsYixjLGUpe3ZhciBmLGc9ZChhLG51bGwsZSxbXSksaD1hLmxlbmd0aDt3aGlsZShoLS0pKGY9Z1toXSkmJihhW2hdPSEoYltoXT1mKSl9KTpmdW5jdGlvbihhLGUsZil7cmV0dXJuIGJbMF09YSxkKGIsbnVsbCxmLGMpLGJbMF09bnVsbCwhYy5wb3AoKX19KSxoYXM6aWEoZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBnYShhLGIpLmxlbmd0aD4wfX0pLGNvbnRhaW5zOmlhKGZ1bmN0aW9uKGEpe3JldHVybiBhPWEucmVwbGFjZShfLGFhKSxmdW5jdGlvbihiKXtyZXR1cm4oYi50ZXh0Q29udGVudHx8Yi5pbm5lclRleHR8fGUoYikpLmluZGV4T2YoYSk+LTF9fSksbGFuZzppYShmdW5jdGlvbihhKXtyZXR1cm4gVS50ZXN0KGF8fFwiXCIpfHxnYS5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiK2EpLGE9YS5yZXBsYWNlKF8sYWEpLnRvTG93ZXJDYXNlKCksZnVuY3Rpb24oYil7dmFyIGM7ZG8gaWYoYz1wP2IubGFuZzpiLmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpfHxiLmdldEF0dHJpYnV0ZShcImxhbmdcIikpcmV0dXJuIGM9Yy50b0xvd2VyQ2FzZSgpLGM9PT1hfHwwPT09Yy5pbmRleE9mKGErXCItXCIpO3doaWxlKChiPWIucGFyZW50Tm9kZSkmJjE9PT1iLm5vZGVUeXBlKTtyZXR1cm4hMX19KSx0YXJnZXQ6ZnVuY3Rpb24oYil7dmFyIGM9YS5sb2NhdGlvbiYmYS5sb2NhdGlvbi5oYXNoO3JldHVybiBjJiZjLnNsaWNlKDEpPT09Yi5pZH0scm9vdDpmdW5jdGlvbihhKXtyZXR1cm4gYT09PW99LGZvY3VzOmZ1bmN0aW9uKGEpe3JldHVybiBhPT09bi5hY3RpdmVFbGVtZW50JiYoIW4uaGFzRm9jdXN8fG4uaGFzRm9jdXMoKSkmJiEhKGEudHlwZXx8YS5ocmVmfHx+YS50YWJJbmRleCl9LGVuYWJsZWQ6b2EoITEpLGRpc2FibGVkOm9hKCEwKSxjaGVja2VkOmZ1bmN0aW9uKGEpe3ZhciBiPWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iJiYhIWEuY2hlY2tlZHx8XCJvcHRpb25cIj09PWImJiEhYS5zZWxlY3RlZH0sc2VsZWN0ZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsYS5zZWxlY3RlZD09PSEwfSxlbXB0eTpmdW5jdGlvbihhKXtmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpaWYoYS5ub2RlVHlwZTw2KXJldHVybiExO3JldHVybiEwfSxwYXJlbnQ6ZnVuY3Rpb24oYSl7cmV0dXJuIWQucHNldWRvcy5lbXB0eShhKX0saGVhZGVyOmZ1bmN0aW9uKGEpe3JldHVybiBYLnRlc3QoYS5ub2RlTmFtZSl9LGlucHV0OmZ1bmN0aW9uKGEpe3JldHVybiBXLnRlc3QoYS5ub2RlTmFtZSl9LGJ1dHRvbjpmdW5jdGlvbihhKXt2YXIgYj1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YiYmXCJidXR0b25cIj09PWEudHlwZXx8XCJidXR0b25cIj09PWJ9LHRleHQ6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuXCJpbnB1dFwiPT09YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZcInRleHRcIj09PWEudHlwZSYmKG51bGw9PShiPWEuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSl8fFwidGV4dFwiPT09Yi50b0xvd2VyQ2FzZSgpKX0sZmlyc3Q6cGEoZnVuY3Rpb24oKXtyZXR1cm5bMF19KSxsYXN0OnBhKGZ1bmN0aW9uKGEsYil7cmV0dXJuW2ItMV19KSxlcTpwYShmdW5jdGlvbihhLGIsYyl7cmV0dXJuW2M8MD9jK2I6Y119KSxldmVuOnBhKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTA7YzxiO2MrPTIpYS5wdXNoKGMpO3JldHVybiBhfSksb2RkOnBhKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTE7YzxiO2MrPTIpYS5wdXNoKGMpO3JldHVybiBhfSksbHQ6cGEoZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD1jPDA/YytiOmM7LS1kPj0wOylhLnB1c2goZCk7cmV0dXJuIGF9KSxndDpwYShmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPWM8MD9jK2I6YzsrK2Q8YjspYS5wdXNoKGQpO3JldHVybiBhfSl9fSxkLnBzZXVkb3MubnRoPWQucHNldWRvcy5lcTtmb3IoYiBpbntyYWRpbzohMCxjaGVja2JveDohMCxmaWxlOiEwLHBhc3N3b3JkOiEwLGltYWdlOiEwfSlkLnBzZXVkb3NbYl09bWEoYik7Zm9yKGIgaW57c3VibWl0OiEwLHJlc2V0OiEwfSlkLnBzZXVkb3NbYl09bmEoYik7ZnVuY3Rpb24gcmEoKXt9cmEucHJvdG90eXBlPWQuZmlsdGVycz1kLnBzZXVkb3MsZC5zZXRGaWx0ZXJzPW5ldyByYSxnPWdhLnRva2VuaXplPWZ1bmN0aW9uKGEsYil7dmFyIGMsZSxmLGcsaCxpLGosaz16W2ErXCIgXCJdO2lmKGspcmV0dXJuIGI/MDprLnNsaWNlKDApO2g9YSxpPVtdLGo9ZC5wcmVGaWx0ZXI7d2hpbGUoaCl7YyYmIShlPVEuZXhlYyhoKSl8fChlJiYoaD1oLnNsaWNlKGVbMF0ubGVuZ3RoKXx8aCksaS5wdXNoKGY9W10pKSxjPSExLChlPVIuZXhlYyhoKSkmJihjPWUuc2hpZnQoKSxmLnB1c2goe3ZhbHVlOmMsdHlwZTplWzBdLnJlcGxhY2UoUCxcIiBcIil9KSxoPWguc2xpY2UoYy5sZW5ndGgpKTtmb3IoZyBpbiBkLmZpbHRlcikhKGU9VltnXS5leGVjKGgpKXx8altnXSYmIShlPWpbZ10oZSkpfHwoYz1lLnNoaWZ0KCksZi5wdXNoKHt2YWx1ZTpjLHR5cGU6ZyxtYXRjaGVzOmV9KSxoPWguc2xpY2UoYy5sZW5ndGgpKTtpZighYylicmVha31yZXR1cm4gYj9oLmxlbmd0aDpoP2dhLmVycm9yKGEpOnooYSxpKS5zbGljZSgwKX07ZnVuY3Rpb24gc2EoYSl7Zm9yKHZhciBiPTAsYz1hLmxlbmd0aCxkPVwiXCI7YjxjO2IrKylkKz1hW2JdLnZhbHVlO3JldHVybiBkfWZ1bmN0aW9uIHRhKGEsYixjKXt2YXIgZD1iLmRpcixlPWIubmV4dCxmPWV8fGQsZz1jJiZcInBhcmVudE5vZGVcIj09PWYsaD14Kys7cmV0dXJuIGIuZmlyc3Q/ZnVuY3Rpb24oYixjLGUpe3doaWxlKGI9YltkXSlpZigxPT09Yi5ub2RlVHlwZXx8ZylyZXR1cm4gYShiLGMsZSk7cmV0dXJuITF9OmZ1bmN0aW9uKGIsYyxpKXt2YXIgaixrLGwsbT1bdyxoXTtpZihpKXt3aGlsZShiPWJbZF0paWYoKDE9PT1iLm5vZGVUeXBlfHxnKSYmYShiLGMsaSkpcmV0dXJuITB9ZWxzZSB3aGlsZShiPWJbZF0paWYoMT09PWIubm9kZVR5cGV8fGcpaWYobD1iW3VdfHwoYlt1XT17fSksaz1sW2IudW5pcXVlSURdfHwobFtiLnVuaXF1ZUlEXT17fSksZSYmZT09PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSliPWJbZF18fGI7ZWxzZXtpZigoaj1rW2ZdKSYmalswXT09PXcmJmpbMV09PT1oKXJldHVybiBtWzJdPWpbMl07aWYoa1tmXT1tLG1bMl09YShiLGMsaSkpcmV0dXJuITB9cmV0dXJuITF9fWZ1bmN0aW9uIHVhKGEpe3JldHVybiBhLmxlbmd0aD4xP2Z1bmN0aW9uKGIsYyxkKXt2YXIgZT1hLmxlbmd0aDt3aGlsZShlLS0paWYoIWFbZV0oYixjLGQpKXJldHVybiExO3JldHVybiEwfTphWzBdfWZ1bmN0aW9uIHZhKGEsYixjKXtmb3IodmFyIGQ9MCxlPWIubGVuZ3RoO2Q8ZTtkKyspZ2EoYSxiW2RdLGMpO3JldHVybiBjfWZ1bmN0aW9uIHdhKGEsYixjLGQsZSl7Zm9yKHZhciBmLGc9W10saD0wLGk9YS5sZW5ndGgsaj1udWxsIT1iO2g8aTtoKyspKGY9YVtoXSkmJihjJiYhYyhmLGQsZSl8fChnLnB1c2goZiksaiYmYi5wdXNoKGgpKSk7cmV0dXJuIGd9ZnVuY3Rpb24geGEoYSxiLGMsZCxlLGYpe3JldHVybiBkJiYhZFt1XSYmKGQ9eGEoZCkpLGUmJiFlW3VdJiYoZT14YShlLGYpKSxpYShmdW5jdGlvbihmLGcsaCxpKXt2YXIgaixrLGwsbT1bXSxuPVtdLG89Zy5sZW5ndGgscD1mfHx2YShifHxcIipcIixoLm5vZGVUeXBlP1toXTpoLFtdKSxxPSFhfHwhZiYmYj9wOndhKHAsbSxhLGgsaSkscj1jP2V8fChmP2E6b3x8ZCk/W106ZzpxO2lmKGMmJmMocSxyLGgsaSksZCl7aj13YShyLG4pLGQoaixbXSxoLGkpLGs9ai5sZW5ndGg7d2hpbGUoay0tKShsPWpba10pJiYocltuW2tdXT0hKHFbbltrXV09bCkpfWlmKGYpe2lmKGV8fGEpe2lmKGUpe2o9W10saz1yLmxlbmd0aDt3aGlsZShrLS0pKGw9cltrXSkmJmoucHVzaChxW2tdPWwpO2UobnVsbCxyPVtdLGosaSl9az1yLmxlbmd0aDt3aGlsZShrLS0pKGw9cltrXSkmJihqPWU/SShmLGwpOm1ba10pPi0xJiYoZltqXT0hKGdbal09bCkpfX1lbHNlIHI9d2Eocj09PWc/ci5zcGxpY2UobyxyLmxlbmd0aCk6ciksZT9lKG51bGwsZyxyLGkpOkcuYXBwbHkoZyxyKX0pfWZ1bmN0aW9uIHlhKGEpe2Zvcih2YXIgYixjLGUsZj1hLmxlbmd0aCxnPWQucmVsYXRpdmVbYVswXS50eXBlXSxoPWd8fGQucmVsYXRpdmVbXCIgXCJdLGk9Zz8xOjAsaz10YShmdW5jdGlvbihhKXtyZXR1cm4gYT09PWJ9LGgsITApLGw9dGEoZnVuY3Rpb24oYSl7cmV0dXJuIEkoYixhKT4tMX0saCwhMCksbT1bZnVuY3Rpb24oYSxjLGQpe3ZhciBlPSFnJiYoZHx8YyE9PWopfHwoKGI9Yykubm9kZVR5cGU/ayhhLGMsZCk6bChhLGMsZCkpO3JldHVybiBiPW51bGwsZX1dO2k8ZjtpKyspaWYoYz1kLnJlbGF0aXZlW2FbaV0udHlwZV0pbT1bdGEodWEobSksYyldO2Vsc2V7aWYoYz1kLmZpbHRlclthW2ldLnR5cGVdLmFwcGx5KG51bGwsYVtpXS5tYXRjaGVzKSxjW3VdKXtmb3IoZT0rK2k7ZTxmO2UrKylpZihkLnJlbGF0aXZlW2FbZV0udHlwZV0pYnJlYWs7cmV0dXJuIHhhKGk+MSYmdWEobSksaT4xJiZzYShhLnNsaWNlKDAsaS0xKS5jb25jYXQoe3ZhbHVlOlwiIFwiPT09YVtpLTJdLnR5cGU/XCIqXCI6XCJcIn0pKS5yZXBsYWNlKFAsXCIkMVwiKSxjLGk8ZSYmeWEoYS5zbGljZShpLGUpKSxlPGYmJnlhKGE9YS5zbGljZShlKSksZTxmJiZzYShhKSl9bS5wdXNoKGMpfXJldHVybiB1YShtKX1mdW5jdGlvbiB6YShhLGIpe3ZhciBjPWIubGVuZ3RoPjAsZT1hLmxlbmd0aD4wLGY9ZnVuY3Rpb24oZixnLGgsaSxrKXt2YXIgbCxvLHEscj0wLHM9XCIwXCIsdD1mJiZbXSx1PVtdLHY9aix4PWZ8fGUmJmQuZmluZC5UQUcoXCIqXCIsaykseT13Kz1udWxsPT12PzE6TWF0aC5yYW5kb20oKXx8LjEsej14Lmxlbmd0aDtmb3IoayYmKGo9Zz09PW58fGd8fGspO3MhPT16JiZudWxsIT0obD14W3NdKTtzKyspe2lmKGUmJmwpe289MCxnfHxsLm93bmVyRG9jdW1lbnQ9PT1ufHwobShsKSxoPSFwKTt3aGlsZShxPWFbbysrXSlpZihxKGwsZ3x8bixoKSl7aS5wdXNoKGwpO2JyZWFrfWsmJih3PXkpfWMmJigobD0hcSYmbCkmJnItLSxmJiZ0LnB1c2gobCkpfWlmKHIrPXMsYyYmcyE9PXIpe289MDt3aGlsZShxPWJbbysrXSlxKHQsdSxnLGgpO2lmKGYpe2lmKHI+MCl3aGlsZShzLS0pdFtzXXx8dVtzXXx8KHVbc109RS5jYWxsKGkpKTt1PXdhKHUpfUcuYXBwbHkoaSx1KSxrJiYhZiYmdS5sZW5ndGg+MCYmcitiLmxlbmd0aD4xJiZnYS51bmlxdWVTb3J0KGkpfXJldHVybiBrJiYodz15LGo9diksdH07cmV0dXJuIGM/aWEoZik6Zn1yZXR1cm4gaD1nYS5jb21waWxlPWZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPVtdLGY9QVthK1wiIFwiXTtpZighZil7Ynx8KGI9ZyhhKSksYz1iLmxlbmd0aDt3aGlsZShjLS0pZj15YShiW2NdKSxmW3VdP2QucHVzaChmKTplLnB1c2goZik7Zj1BKGEsemEoZSxkKSksZi5zZWxlY3Rvcj1hfXJldHVybiBmfSxpPWdhLnNlbGVjdD1mdW5jdGlvbihhLGIsYyxlKXt2YXIgZixpLGosayxsLG09XCJmdW5jdGlvblwiPT10eXBlb2YgYSYmYSxuPSFlJiZnKGE9bS5zZWxlY3Rvcnx8YSk7aWYoYz1jfHxbXSwxPT09bi5sZW5ndGgpe2lmKGk9blswXT1uWzBdLnNsaWNlKDApLGkubGVuZ3RoPjImJlwiSURcIj09PShqPWlbMF0pLnR5cGUmJjk9PT1iLm5vZGVUeXBlJiZwJiZkLnJlbGF0aXZlW2lbMV0udHlwZV0pe2lmKGI9KGQuZmluZC5JRChqLm1hdGNoZXNbMF0ucmVwbGFjZShfLGFhKSxiKXx8W10pWzBdLCFiKXJldHVybiBjO20mJihiPWIucGFyZW50Tm9kZSksYT1hLnNsaWNlKGkuc2hpZnQoKS52YWx1ZS5sZW5ndGgpfWY9Vi5uZWVkc0NvbnRleHQudGVzdChhKT8wOmkubGVuZ3RoO3doaWxlKGYtLSl7aWYoaj1pW2ZdLGQucmVsYXRpdmVbaz1qLnR5cGVdKWJyZWFrO2lmKChsPWQuZmluZFtrXSkmJihlPWwoai5tYXRjaGVzWzBdLnJlcGxhY2UoXyxhYSksJC50ZXN0KGlbMF0udHlwZSkmJnFhKGIucGFyZW50Tm9kZSl8fGIpKSl7aWYoaS5zcGxpY2UoZiwxKSxhPWUubGVuZ3RoJiZzYShpKSwhYSlyZXR1cm4gRy5hcHBseShjLGUpLGM7YnJlYWt9fX1yZXR1cm4obXx8aChhLG4pKShlLGIsIXAsYywhYnx8JC50ZXN0KGEpJiZxYShiLnBhcmVudE5vZGUpfHxiKSxjfSxjLnNvcnRTdGFibGU9dS5zcGxpdChcIlwiKS5zb3J0KEIpLmpvaW4oXCJcIik9PT11LGMuZGV0ZWN0RHVwbGljYXRlcz0hIWwsbSgpLGMuc29ydERldGFjaGVkPWphKGZ1bmN0aW9uKGEpe3JldHVybiAxJmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24obi5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIikpfSksamEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGEgaHJlZj0nIyc+PC9hPlwiLFwiI1wiPT09YS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcImhyZWZcIil9KXx8a2EoXCJ0eXBlfGhyZWZ8aGVpZ2h0fHdpZHRoXCIsZnVuY3Rpb24oYSxiLGMpe2lmKCFjKXJldHVybiBhLmdldEF0dHJpYnV0ZShiLFwidHlwZVwiPT09Yi50b0xvd2VyQ2FzZSgpPzE6Mil9KSxjLmF0dHJpYnV0ZXMmJmphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxpbnB1dC8+XCIsYS5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIiksXCJcIj09PWEuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKX0pfHxrYShcInZhbHVlXCIsZnVuY3Rpb24oYSxiLGMpe2lmKCFjJiZcImlucHV0XCI9PT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpcmV0dXJuIGEuZGVmYXVsdFZhbHVlfSksamEoZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWEuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIil9KXx8a2EoSixmdW5jdGlvbihhLGIsYyl7dmFyIGQ7aWYoIWMpcmV0dXJuIGFbYl09PT0hMD9iLnRvTG93ZXJDYXNlKCk6KGQ9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpKSYmZC5zcGVjaWZpZWQ/ZC52YWx1ZTpudWxsfSksZ2F9KGEpO3IuZmluZD14LHIuZXhwcj14LnNlbGVjdG9ycyxyLmV4cHJbXCI6XCJdPXIuZXhwci5wc2V1ZG9zLHIudW5pcXVlU29ydD1yLnVuaXF1ZT14LnVuaXF1ZVNvcnQsci50ZXh0PXguZ2V0VGV4dCxyLmlzWE1MRG9jPXguaXNYTUwsci5jb250YWlucz14LmNvbnRhaW5zLHIuZXNjYXBlU2VsZWN0b3I9eC5lc2NhcGU7dmFyIHk9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVtdLGU9dm9pZCAwIT09Yzt3aGlsZSgoYT1hW2JdKSYmOSE9PWEubm9kZVR5cGUpaWYoMT09PWEubm9kZVR5cGUpe2lmKGUmJnIoYSkuaXMoYykpYnJlYWs7ZC5wdXNoKGEpfXJldHVybiBkfSx6PWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPVtdO2E7YT1hLm5leHRTaWJsaW5nKTE9PT1hLm5vZGVUeXBlJiZhIT09YiYmYy5wdXNoKGEpO3JldHVybiBjfSxBPXIuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQ7ZnVuY3Rpb24gQihhLGIpe3JldHVybiBhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1iLnRvTG93ZXJDYXNlKCl9dmFyIEM9L148KFthLXpdW15cXC9cXDA+OlxceDIwXFx0XFxyXFxuXFxmXSopW1xceDIwXFx0XFxyXFxuXFxmXSpcXC8/Pig/OjxcXC9cXDE+fCkkL2ksRD0vXi5bXjojXFxbXFwuLF0qJC87ZnVuY3Rpb24gRShhLGIsYyl7cmV0dXJuIHIuaXNGdW5jdGlvbihiKT9yLmdyZXAoYSxmdW5jdGlvbihhLGQpe3JldHVybiEhYi5jYWxsKGEsZCxhKSE9PWN9KTpiLm5vZGVUeXBlP3IuZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBhPT09YiE9PWN9KTpcInN0cmluZ1wiIT10eXBlb2YgYj9yLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gaS5jYWxsKGIsYSk+LTEhPT1jfSk6RC50ZXN0KGIpP3IuZmlsdGVyKGIsYSxjKTooYj1yLmZpbHRlcihiLGEpLHIuZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBpLmNhbGwoYixhKT4tMSE9PWMmJjE9PT1hLm5vZGVUeXBlfSkpfXIuZmlsdGVyPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1iWzBdO3JldHVybiBjJiYoYT1cIjpub3QoXCIrYStcIilcIiksMT09PWIubGVuZ3RoJiYxPT09ZC5ub2RlVHlwZT9yLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGQsYSk/W2RdOltdOnIuZmluZC5tYXRjaGVzKGEsci5ncmVwKGIsZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLm5vZGVUeXBlfSkpfSxyLmZuLmV4dGVuZCh7ZmluZDpmdW5jdGlvbihhKXt2YXIgYixjLGQ9dGhpcy5sZW5ndGgsZT10aGlzO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiB0aGlzLnB1c2hTdGFjayhyKGEpLmZpbHRlcihmdW5jdGlvbigpe2ZvcihiPTA7YjxkO2IrKylpZihyLmNvbnRhaW5zKGVbYl0sdGhpcykpcmV0dXJuITB9KSk7Zm9yKGM9dGhpcy5wdXNoU3RhY2soW10pLGI9MDtiPGQ7YisrKXIuZmluZChhLGVbYl0sYyk7cmV0dXJuIGQ+MT9yLnVuaXF1ZVNvcnQoYyk6Y30sZmlsdGVyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayhFKHRoaXMsYXx8W10sITEpKX0sbm90OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayhFKHRoaXMsYXx8W10sITApKX0saXM6ZnVuY3Rpb24oYSl7cmV0dXJuISFFKHRoaXMsXCJzdHJpbmdcIj09dHlwZW9mIGEmJkEudGVzdChhKT9yKGEpOmF8fFtdLCExKS5sZW5ndGh9fSk7dmFyIEYsRz0vXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0rKSkkLyxIPXIuZm4uaW5pdD1mdW5jdGlvbihhLGIsYyl7dmFyIGUsZjtpZighYSlyZXR1cm4gdGhpcztpZihjPWN8fEYsXCJzdHJpbmdcIj09dHlwZW9mIGEpe2lmKGU9XCI8XCI9PT1hWzBdJiZcIj5cIj09PWFbYS5sZW5ndGgtMV0mJmEubGVuZ3RoPj0zP1tudWxsLGEsbnVsbF06Ry5leGVjKGEpLCFlfHwhZVsxXSYmYilyZXR1cm4hYnx8Yi5qcXVlcnk/KGJ8fGMpLmZpbmQoYSk6dGhpcy5jb25zdHJ1Y3RvcihiKS5maW5kKGEpO2lmKGVbMV0pe2lmKGI9YiBpbnN0YW5jZW9mIHI/YlswXTpiLHIubWVyZ2UodGhpcyxyLnBhcnNlSFRNTChlWzFdLGImJmIubm9kZVR5cGU/Yi5vd25lckRvY3VtZW50fHxiOmQsITApKSxDLnRlc3QoZVsxXSkmJnIuaXNQbGFpbk9iamVjdChiKSlmb3IoZSBpbiBiKXIuaXNGdW5jdGlvbih0aGlzW2VdKT90aGlzW2VdKGJbZV0pOnRoaXMuYXR0cihlLGJbZV0pO3JldHVybiB0aGlzfXJldHVybiBmPWQuZ2V0RWxlbWVudEJ5SWQoZVsyXSksZiYmKHRoaXNbMF09Zix0aGlzLmxlbmd0aD0xKSx0aGlzfXJldHVybiBhLm5vZGVUeXBlPyh0aGlzWzBdPWEsdGhpcy5sZW5ndGg9MSx0aGlzKTpyLmlzRnVuY3Rpb24oYSk/dm9pZCAwIT09Yy5yZWFkeT9jLnJlYWR5KGEpOmEocik6ci5tYWtlQXJyYXkoYSx0aGlzKX07SC5wcm90b3R5cGU9ci5mbixGPXIoZCk7dmFyIEk9L14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sSj17Y2hpbGRyZW46ITAsY29udGVudHM6ITAsbmV4dDohMCxwcmV2OiEwfTtyLmZuLmV4dGVuZCh7aGFzOmZ1bmN0aW9uKGEpe3ZhciBiPXIoYSx0aGlzKSxjPWIubGVuZ3RoO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpe2Zvcih2YXIgYT0wO2E8YzthKyspaWYoci5jb250YWlucyh0aGlzLGJbYV0pKXJldHVybiEwfSl9LGNsb3Nlc3Q6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPTAsZT10aGlzLmxlbmd0aCxmPVtdLGc9XCJzdHJpbmdcIiE9dHlwZW9mIGEmJnIoYSk7aWYoIUEudGVzdChhKSlmb3IoO2Q8ZTtkKyspZm9yKGM9dGhpc1tkXTtjJiZjIT09YjtjPWMucGFyZW50Tm9kZSlpZihjLm5vZGVUeXBlPDExJiYoZz9nLmluZGV4KGMpPi0xOjE9PT1jLm5vZGVUeXBlJiZyLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGMsYSkpKXtmLnB1c2goYyk7YnJlYWt9cmV0dXJuIHRoaXMucHVzaFN0YWNrKGYubGVuZ3RoPjE/ci51bmlxdWVTb3J0KGYpOmYpfSxpbmRleDpmdW5jdGlvbihhKXtyZXR1cm4gYT9cInN0cmluZ1wiPT10eXBlb2YgYT9pLmNhbGwocihhKSx0aGlzWzBdKTppLmNhbGwodGhpcyxhLmpxdWVyeT9hWzBdOmEpOnRoaXNbMF0mJnRoaXNbMF0ucGFyZW50Tm9kZT90aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aDotMX0sYWRkOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHIudW5pcXVlU29ydChyLm1lcmdlKHRoaXMuZ2V0KCkscihhLGIpKSkpfSxhZGRCYWNrOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmFkZChudWxsPT1hP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGEpKX19KTtmdW5jdGlvbiBLKGEsYil7d2hpbGUoKGE9YVtiXSkmJjEhPT1hLm5vZGVUeXBlKTtyZXR1cm4gYX1yLmVhY2goe3BhcmVudDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJjExIT09Yi5ub2RlVHlwZT9iOm51bGx9LHBhcmVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIHkoYSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHkoYSxcInBhcmVudE5vZGVcIixjKX0sbmV4dDpmdW5jdGlvbihhKXtyZXR1cm4gSyhhLFwibmV4dFNpYmxpbmdcIil9LHByZXY6ZnVuY3Rpb24oYSl7cmV0dXJuIEsoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihhKXtyZXR1cm4geShhLFwibmV4dFNpYmxpbmdcIil9LHByZXZBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIHkoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dFVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4geShhLFwibmV4dFNpYmxpbmdcIixjKX0scHJldlVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4geShhLFwicHJldmlvdXNTaWJsaW5nXCIsYyl9LHNpYmxpbmdzOmZ1bmN0aW9uKGEpe3JldHVybiB6KChhLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGEpfSxjaGlsZHJlbjpmdW5jdGlvbihhKXtyZXR1cm4geihhLmZpcnN0Q2hpbGQpfSxjb250ZW50czpmdW5jdGlvbihhKXtyZXR1cm4gQihhLFwiaWZyYW1lXCIpP2EuY29udGVudERvY3VtZW50OihCKGEsXCJ0ZW1wbGF0ZVwiKSYmKGE9YS5jb250ZW50fHxhKSxyLm1lcmdlKFtdLGEuY2hpbGROb2RlcykpfX0sZnVuY3Rpb24oYSxiKXtyLmZuW2FdPWZ1bmN0aW9uKGMsZCl7dmFyIGU9ci5tYXAodGhpcyxiLGMpO3JldHVyblwiVW50aWxcIiE9PWEuc2xpY2UoLTUpJiYoZD1jKSxkJiZcInN0cmluZ1wiPT10eXBlb2YgZCYmKGU9ci5maWx0ZXIoZCxlKSksdGhpcy5sZW5ndGg+MSYmKEpbYV18fHIudW5pcXVlU29ydChlKSxJLnRlc3QoYSkmJmUucmV2ZXJzZSgpKSx0aGlzLnB1c2hTdGFjayhlKX19KTt2YXIgTD0vW15cXHgyMFxcdFxcclxcblxcZl0rL2c7ZnVuY3Rpb24gTShhKXt2YXIgYj17fTtyZXR1cm4gci5lYWNoKGEubWF0Y2goTCl8fFtdLGZ1bmN0aW9uKGEsYyl7YltjXT0hMH0pLGJ9ci5DYWxsYmFja3M9ZnVuY3Rpb24oYSl7YT1cInN0cmluZ1wiPT10eXBlb2YgYT9NKGEpOnIuZXh0ZW5kKHt9LGEpO3ZhciBiLGMsZCxlLGY9W10sZz1bXSxoPS0xLGk9ZnVuY3Rpb24oKXtmb3IoZT1lfHxhLm9uY2UsZD1iPSEwO2cubGVuZ3RoO2g9LTEpe2M9Zy5zaGlmdCgpO3doaWxlKCsraDxmLmxlbmd0aClmW2hdLmFwcGx5KGNbMF0sY1sxXSk9PT0hMSYmYS5zdG9wT25GYWxzZSYmKGg9Zi5sZW5ndGgsYz0hMSl9YS5tZW1vcnl8fChjPSExKSxiPSExLGUmJihmPWM/W106XCJcIil9LGo9e2FkZDpmdW5jdGlvbigpe3JldHVybiBmJiYoYyYmIWImJihoPWYubGVuZ3RoLTEsZy5wdXNoKGMpKSxmdW5jdGlvbiBkKGIpe3IuZWFjaChiLGZ1bmN0aW9uKGIsYyl7ci5pc0Z1bmN0aW9uKGMpP2EudW5pcXVlJiZqLmhhcyhjKXx8Zi5wdXNoKGMpOmMmJmMubGVuZ3RoJiZcInN0cmluZ1wiIT09ci50eXBlKGMpJiZkKGMpfSl9KGFyZ3VtZW50cyksYyYmIWImJmkoKSksdGhpc30scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIHIuZWFjaChhcmd1bWVudHMsZnVuY3Rpb24oYSxiKXt2YXIgYzt3aGlsZSgoYz1yLmluQXJyYXkoYixmLGMpKT4tMSlmLnNwbGljZShjLDEpLGM8PWgmJmgtLX0pLHRoaXN9LGhhczpmdW5jdGlvbihhKXtyZXR1cm4gYT9yLmluQXJyYXkoYSxmKT4tMTpmLmxlbmd0aD4wfSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiBmJiYoZj1bXSksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBlPWc9W10sZj1jPVwiXCIsdGhpc30sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hZn0sbG9jazpmdW5jdGlvbigpe3JldHVybiBlPWc9W10sY3x8Ynx8KGY9Yz1cIlwiKSx0aGlzfSxsb2NrZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWV9LGZpcmVXaXRoOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGV8fChjPWN8fFtdLGM9W2EsYy5zbGljZT9jLnNsaWNlKCk6Y10sZy5wdXNoKGMpLGJ8fGkoKSksdGhpc30sZmlyZTpmdW5jdGlvbigpe3JldHVybiBqLmZpcmVXaXRoKHRoaXMsYXJndW1lbnRzKSx0aGlzfSxmaXJlZDpmdW5jdGlvbigpe3JldHVybiEhZH19O3JldHVybiBqfTtmdW5jdGlvbiBOKGEpe3JldHVybiBhfWZ1bmN0aW9uIE8oYSl7dGhyb3cgYX1mdW5jdGlvbiBQKGEsYixjLGQpe3ZhciBlO3RyeXthJiZyLmlzRnVuY3Rpb24oZT1hLnByb21pc2UpP2UuY2FsbChhKS5kb25lKGIpLmZhaWwoYyk6YSYmci5pc0Z1bmN0aW9uKGU9YS50aGVuKT9lLmNhbGwoYSxiLGMpOmIuYXBwbHkodm9pZCAwLFthXS5zbGljZShkKSl9Y2F0Y2goYSl7Yy5hcHBseSh2b2lkIDAsW2FdKX19ci5leHRlbmQoe0RlZmVycmVkOmZ1bmN0aW9uKGIpe3ZhciBjPVtbXCJub3RpZnlcIixcInByb2dyZXNzXCIsci5DYWxsYmFja3MoXCJtZW1vcnlcIiksci5DYWxsYmFja3MoXCJtZW1vcnlcIiksMl0sW1wicmVzb2x2ZVwiLFwiZG9uZVwiLHIuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksci5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwwLFwicmVzb2x2ZWRcIl0sW1wicmVqZWN0XCIsXCJmYWlsXCIsci5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxyLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLDEsXCJyZWplY3RlZFwiXV0sZD1cInBlbmRpbmdcIixlPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBkfSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gZi5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LFwiY2F0Y2hcIjpmdW5jdGlvbihhKXtyZXR1cm4gZS50aGVuKG51bGwsYSl9LHBpcGU6ZnVuY3Rpb24oKXt2YXIgYT1hcmd1bWVudHM7cmV0dXJuIHIuRGVmZXJyZWQoZnVuY3Rpb24oYil7ci5lYWNoKGMsZnVuY3Rpb24oYyxkKXt2YXIgZT1yLmlzRnVuY3Rpb24oYVtkWzRdXSkmJmFbZFs0XV07ZltkWzFdXShmdW5jdGlvbigpe3ZhciBhPWUmJmUuYXBwbHkodGhpcyxhcmd1bWVudHMpO2EmJnIuaXNGdW5jdGlvbihhLnByb21pc2UpP2EucHJvbWlzZSgpLnByb2dyZXNzKGIubm90aWZ5KS5kb25lKGIucmVzb2x2ZSkuZmFpbChiLnJlamVjdCk6YltkWzBdK1wiV2l0aFwiXSh0aGlzLGU/W2FdOmFyZ3VtZW50cyl9KX0pLGE9bnVsbH0pLnByb21pc2UoKX0sdGhlbjpmdW5jdGlvbihiLGQsZSl7dmFyIGY9MDtmdW5jdGlvbiBnKGIsYyxkLGUpe3JldHVybiBmdW5jdGlvbigpe3ZhciBoPXRoaXMsaT1hcmd1bWVudHMsaj1mdW5jdGlvbigpe3ZhciBhLGo7aWYoIShiPGYpKXtpZihhPWQuYXBwbHkoaCxpKSxhPT09Yy5wcm9taXNlKCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZW5hYmxlIHNlbGYtcmVzb2x1dGlvblwiKTtqPWEmJihcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYSkmJmEudGhlbixyLmlzRnVuY3Rpb24oaik/ZT9qLmNhbGwoYSxnKGYsYyxOLGUpLGcoZixjLE8sZSkpOihmKyssai5jYWxsKGEsZyhmLGMsTixlKSxnKGYsYyxPLGUpLGcoZixjLE4sYy5ub3RpZnlXaXRoKSkpOihkIT09TiYmKGg9dm9pZCAwLGk9W2FdKSwoZXx8Yy5yZXNvbHZlV2l0aCkoaCxpKSl9fSxrPWU/ajpmdW5jdGlvbigpe3RyeXtqKCl9Y2F0Y2goYSl7ci5EZWZlcnJlZC5leGNlcHRpb25Ib29rJiZyLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2soYSxrLnN0YWNrVHJhY2UpLGIrMT49ZiYmKGQhPT1PJiYoaD12b2lkIDAsaT1bYV0pLGMucmVqZWN0V2l0aChoLGkpKX19O2I/aygpOihyLkRlZmVycmVkLmdldFN0YWNrSG9vayYmKGsuc3RhY2tUcmFjZT1yLkRlZmVycmVkLmdldFN0YWNrSG9vaygpKSxhLnNldFRpbWVvdXQoaykpfX1yZXR1cm4gci5EZWZlcnJlZChmdW5jdGlvbihhKXtjWzBdWzNdLmFkZChnKDAsYSxyLmlzRnVuY3Rpb24oZSk/ZTpOLGEubm90aWZ5V2l0aCkpLGNbMV1bM10uYWRkKGcoMCxhLHIuaXNGdW5jdGlvbihiKT9iOk4pKSxjWzJdWzNdLmFkZChnKDAsYSxyLmlzRnVuY3Rpb24oZCk/ZDpPKSl9KS5wcm9taXNlKCl9LHByb21pc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/ci5leHRlbmQoYSxlKTplfX0sZj17fTtyZXR1cm4gci5lYWNoKGMsZnVuY3Rpb24oYSxiKXt2YXIgZz1iWzJdLGg9Yls1XTtlW2JbMV1dPWcuYWRkLGgmJmcuYWRkKGZ1bmN0aW9uKCl7ZD1ofSxjWzMtYV1bMl0uZGlzYWJsZSxjWzBdWzJdLmxvY2spLGcuYWRkKGJbM10uZmlyZSksZltiWzBdXT1mdW5jdGlvbigpe3JldHVybiBmW2JbMF0rXCJXaXRoXCJdKHRoaXM9PT1mP3ZvaWQgMDp0aGlzLGFyZ3VtZW50cyksdGhpc30sZltiWzBdK1wiV2l0aFwiXT1nLmZpcmVXaXRofSksZS5wcm9taXNlKGYpLGImJmIuY2FsbChmLGYpLGZ9LHdoZW46ZnVuY3Rpb24oYSl7dmFyIGI9YXJndW1lbnRzLmxlbmd0aCxjPWIsZD1BcnJheShjKSxlPWYuY2FsbChhcmd1bWVudHMpLGc9ci5EZWZlcnJlZCgpLGg9ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGMpe2RbYV09dGhpcyxlW2FdPWFyZ3VtZW50cy5sZW5ndGg+MT9mLmNhbGwoYXJndW1lbnRzKTpjLC0tYnx8Zy5yZXNvbHZlV2l0aChkLGUpfX07aWYoYjw9MSYmKFAoYSxnLmRvbmUoaChjKSkucmVzb2x2ZSxnLnJlamVjdCwhYiksXCJwZW5kaW5nXCI9PT1nLnN0YXRlKCl8fHIuaXNGdW5jdGlvbihlW2NdJiZlW2NdLnRoZW4pKSlyZXR1cm4gZy50aGVuKCk7d2hpbGUoYy0tKVAoZVtjXSxoKGMpLGcucmVqZWN0KTtyZXR1cm4gZy5wcm9taXNlKCl9fSk7dmFyIFE9L14oRXZhbHxJbnRlcm5hbHxSYW5nZXxSZWZlcmVuY2V8U3ludGF4fFR5cGV8VVJJKUVycm9yJC87ci5EZWZlcnJlZC5leGNlcHRpb25Ib29rPWZ1bmN0aW9uKGIsYyl7YS5jb25zb2xlJiZhLmNvbnNvbGUud2FybiYmYiYmUS50ZXN0KGIubmFtZSkmJmEuY29uc29sZS53YXJuKFwialF1ZXJ5LkRlZmVycmVkIGV4Y2VwdGlvbjogXCIrYi5tZXNzYWdlLGIuc3RhY2ssYyl9LHIucmVhZHlFeGNlcHRpb249ZnVuY3Rpb24oYil7YS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgYn0pfTt2YXIgUj1yLkRlZmVycmVkKCk7ci5mbi5yZWFkeT1mdW5jdGlvbihhKXtyZXR1cm4gUi50aGVuKGEpW1wiY2F0Y2hcIl0oZnVuY3Rpb24oYSl7ci5yZWFkeUV4Y2VwdGlvbihhKX0pLHRoaXN9LHIuZXh0ZW5kKHtpc1JlYWR5OiExLHJlYWR5V2FpdDoxLHJlYWR5OmZ1bmN0aW9uKGEpeyhhPT09ITA/LS1yLnJlYWR5V2FpdDpyLmlzUmVhZHkpfHwoci5pc1JlYWR5PSEwLGEhPT0hMCYmLS1yLnJlYWR5V2FpdD4wfHxSLnJlc29sdmVXaXRoKGQsW3JdKSl9fSksci5yZWFkeS50aGVuPVIudGhlbjtmdW5jdGlvbiBTKCl7ZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLFMpLFxyXG5hLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsUyksci5yZWFkeSgpfVwiY29tcGxldGVcIj09PWQucmVhZHlTdGF0ZXx8XCJsb2FkaW5nXCIhPT1kLnJlYWR5U3RhdGUmJiFkLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbD9hLnNldFRpbWVvdXQoci5yZWFkeSk6KGQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixTKSxhLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsUykpO3ZhciBUPWZ1bmN0aW9uKGEsYixjLGQsZSxmLGcpe3ZhciBoPTAsaT1hLmxlbmd0aCxqPW51bGw9PWM7aWYoXCJvYmplY3RcIj09PXIudHlwZShjKSl7ZT0hMDtmb3IoaCBpbiBjKVQoYSxiLGgsY1toXSwhMCxmLGcpfWVsc2UgaWYodm9pZCAwIT09ZCYmKGU9ITAsci5pc0Z1bmN0aW9uKGQpfHwoZz0hMCksaiYmKGc/KGIuY2FsbChhLGQpLGI9bnVsbCk6KGo9YixiPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gai5jYWxsKHIoYSksYyl9KSksYikpZm9yKDtoPGk7aCsrKWIoYVtoXSxjLGc/ZDpkLmNhbGwoYVtoXSxoLGIoYVtoXSxjKSkpO3JldHVybiBlP2E6aj9iLmNhbGwoYSk6aT9iKGFbMF0sYyk6Zn0sVT1mdW5jdGlvbihhKXtyZXR1cm4gMT09PWEubm9kZVR5cGV8fDk9PT1hLm5vZGVUeXBlfHwhK2Eubm9kZVR5cGV9O2Z1bmN0aW9uIFYoKXt0aGlzLmV4cGFuZG89ci5leHBhbmRvK1YudWlkKyt9Vi51aWQ9MSxWLnByb3RvdHlwZT17Y2FjaGU6ZnVuY3Rpb24oYSl7dmFyIGI9YVt0aGlzLmV4cGFuZG9dO3JldHVybiBifHwoYj17fSxVKGEpJiYoYS5ub2RlVHlwZT9hW3RoaXMuZXhwYW5kb109YjpPYmplY3QuZGVmaW5lUHJvcGVydHkoYSx0aGlzLmV4cGFuZG8se3ZhbHVlOmIsY29uZmlndXJhYmxlOiEwfSkpKSxifSxzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU9dGhpcy5jYWNoZShhKTtpZihcInN0cmluZ1wiPT10eXBlb2YgYillW3IuY2FtZWxDYXNlKGIpXT1jO2Vsc2UgZm9yKGQgaW4gYillW3IuY2FtZWxDYXNlKGQpXT1iW2RdO3JldHVybiBlfSxnZXQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdm9pZCAwPT09Yj90aGlzLmNhY2hlKGEpOmFbdGhpcy5leHBhbmRvXSYmYVt0aGlzLmV4cGFuZG9dW3IuY2FtZWxDYXNlKGIpXX0sYWNjZXNzOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdm9pZCAwPT09Ynx8YiYmXCJzdHJpbmdcIj09dHlwZW9mIGImJnZvaWQgMD09PWM/dGhpcy5nZXQoYSxiKToodGhpcy5zZXQoYSxiLGMpLHZvaWQgMCE9PWM/YzpiKX0scmVtb3ZlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD1hW3RoaXMuZXhwYW5kb107aWYodm9pZCAwIT09ZCl7aWYodm9pZCAwIT09Yil7QXJyYXkuaXNBcnJheShiKT9iPWIubWFwKHIuY2FtZWxDYXNlKTooYj1yLmNhbWVsQ2FzZShiKSxiPWIgaW4gZD9bYl06Yi5tYXRjaChMKXx8W10pLGM9Yi5sZW5ndGg7d2hpbGUoYy0tKWRlbGV0ZSBkW2JbY11dfSh2b2lkIDA9PT1ifHxyLmlzRW1wdHlPYmplY3QoZCkpJiYoYS5ub2RlVHlwZT9hW3RoaXMuZXhwYW5kb109dm9pZCAwOmRlbGV0ZSBhW3RoaXMuZXhwYW5kb10pfX0saGFzRGF0YTpmdW5jdGlvbihhKXt2YXIgYj1hW3RoaXMuZXhwYW5kb107cmV0dXJuIHZvaWQgMCE9PWImJiFyLmlzRW1wdHlPYmplY3QoYil9fTt2YXIgVz1uZXcgVixYPW5ldyBWLFk9L14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLFo9L1tBLVpdL2c7ZnVuY3Rpb24gJChhKXtyZXR1cm5cInRydWVcIj09PWF8fFwiZmFsc2VcIiE9PWEmJihcIm51bGxcIj09PWE/bnVsbDphPT09K2ErXCJcIj8rYTpZLnRlc3QoYSk/SlNPTi5wYXJzZShhKTphKX1mdW5jdGlvbiBfKGEsYixjKXt2YXIgZDtpZih2b2lkIDA9PT1jJiYxPT09YS5ub2RlVHlwZSlpZihkPVwiZGF0YS1cIitiLnJlcGxhY2UoWixcIi0kJlwiKS50b0xvd2VyQ2FzZSgpLGM9YS5nZXRBdHRyaWJ1dGUoZCksXCJzdHJpbmdcIj09dHlwZW9mIGMpe3RyeXtjPSQoYyl9Y2F0Y2goZSl7fVguc2V0KGEsYixjKX1lbHNlIGM9dm9pZCAwO3JldHVybiBjfXIuZXh0ZW5kKHtoYXNEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiBYLmhhc0RhdGEoYSl8fFcuaGFzRGF0YShhKX0sZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIFguYWNjZXNzKGEsYixjKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe1gucmVtb3ZlKGEsYil9LF9kYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gVy5hY2Nlc3MoYSxiLGMpfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe1cucmVtb3ZlKGEsYil9fSksci5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj10aGlzWzBdLGc9ZiYmZi5hdHRyaWJ1dGVzO2lmKHZvaWQgMD09PWEpe2lmKHRoaXMubGVuZ3RoJiYoZT1YLmdldChmKSwxPT09Zi5ub2RlVHlwZSYmIVcuZ2V0KGYsXCJoYXNEYXRhQXR0cnNcIikpKXtjPWcubGVuZ3RoO3doaWxlKGMtLSlnW2NdJiYoZD1nW2NdLm5hbWUsMD09PWQuaW5kZXhPZihcImRhdGEtXCIpJiYoZD1yLmNhbWVsQ2FzZShkLnNsaWNlKDUpKSxfKGYsZCxlW2RdKSkpO1cuc2V0KGYsXCJoYXNEYXRhQXR0cnNcIiwhMCl9cmV0dXJuIGV9cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGE/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7WC5zZXQodGhpcyxhKX0pOlQodGhpcyxmdW5jdGlvbihiKXt2YXIgYztpZihmJiZ2b2lkIDA9PT1iKXtpZihjPVguZ2V0KGYsYSksdm9pZCAwIT09YylyZXR1cm4gYztpZihjPV8oZixhKSx2b2lkIDAhPT1jKXJldHVybiBjfWVsc2UgdGhpcy5lYWNoKGZ1bmN0aW9uKCl7WC5zZXQodGhpcyxhLGIpfSl9LG51bGwsYixhcmd1bWVudHMubGVuZ3RoPjEsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1gucmVtb3ZlKHRoaXMsYSl9KX19KSxyLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO2lmKGEpcmV0dXJuIGI9KGJ8fFwiZnhcIikrXCJxdWV1ZVwiLGQ9Vy5nZXQoYSxiKSxjJiYoIWR8fEFycmF5LmlzQXJyYXkoYyk/ZD1XLmFjY2VzcyhhLGIsci5tYWtlQXJyYXkoYykpOmQucHVzaChjKSksZHx8W119LGRlcXVldWU6ZnVuY3Rpb24oYSxiKXtiPWJ8fFwiZnhcIjt2YXIgYz1yLnF1ZXVlKGEsYiksZD1jLmxlbmd0aCxlPWMuc2hpZnQoKSxmPXIuX3F1ZXVlSG9va3MoYSxiKSxnPWZ1bmN0aW9uKCl7ci5kZXF1ZXVlKGEsYil9O1wiaW5wcm9ncmVzc1wiPT09ZSYmKGU9Yy5zaGlmdCgpLGQtLSksZSYmKFwiZnhcIj09PWImJmMudW5zaGlmdChcImlucHJvZ3Jlc3NcIiksZGVsZXRlIGYuc3RvcCxlLmNhbGwoYSxnLGYpKSwhZCYmZiYmZi5lbXB0eS5maXJlKCl9LF9xdWV1ZUhvb2tzOmZ1bmN0aW9uKGEsYil7dmFyIGM9YitcInF1ZXVlSG9va3NcIjtyZXR1cm4gVy5nZXQoYSxjKXx8Vy5hY2Nlc3MoYSxjLHtlbXB0eTpyLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZChmdW5jdGlvbigpe1cucmVtb3ZlKGEsW2IrXCJxdWV1ZVwiLGNdKX0pfSl9fSksci5mbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGEsYil7dmFyIGM9MjtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPVwiZnhcIixjLS0pLGFyZ3VtZW50cy5sZW5ndGg8Yz9yLnF1ZXVlKHRoaXNbMF0sYSk6dm9pZCAwPT09Yj90aGlzOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPXIucXVldWUodGhpcyxhLGIpO3IuX3F1ZXVlSG9va3ModGhpcyxhKSxcImZ4XCI9PT1hJiZcImlucHJvZ3Jlc3NcIiE9PWNbMF0mJnIuZGVxdWV1ZSh0aGlzLGEpfSl9LGRlcXVldWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3IuZGVxdWV1ZSh0aGlzLGEpfSl9LGNsZWFyUXVldWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucXVldWUoYXx8XCJmeFwiLFtdKX0scHJvbWlzZTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MSxlPXIuRGVmZXJyZWQoKSxmPXRoaXMsZz10aGlzLmxlbmd0aCxoPWZ1bmN0aW9uKCl7LS1kfHxlLnJlc29sdmVXaXRoKGYsW2ZdKX07XCJzdHJpbmdcIiE9dHlwZW9mIGEmJihiPWEsYT12b2lkIDApLGE9YXx8XCJmeFwiO3doaWxlKGctLSljPVcuZ2V0KGZbZ10sYStcInF1ZXVlSG9va3NcIiksYyYmYy5lbXB0eSYmKGQrKyxjLmVtcHR5LmFkZChoKSk7cmV0dXJuIGgoKSxlLnByb21pc2UoYil9fSk7dmFyIGFhPS9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZSxiYT1uZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIithYStcIikoW2EteiVdKikkXCIsXCJpXCIpLGNhPVtcIlRvcFwiLFwiUmlnaHRcIixcIkJvdHRvbVwiLFwiTGVmdFwiXSxkYT1mdW5jdGlvbihhLGIpe3JldHVybiBhPWJ8fGEsXCJub25lXCI9PT1hLnN0eWxlLmRpc3BsYXl8fFwiXCI9PT1hLnN0eWxlLmRpc3BsYXkmJnIuY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpJiZcIm5vbmVcIj09PXIuY3NzKGEsXCJkaXNwbGF5XCIpfSxlYT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGc9e307Zm9yKGYgaW4gYilnW2ZdPWEuc3R5bGVbZl0sYS5zdHlsZVtmXT1iW2ZdO2U9Yy5hcHBseShhLGR8fFtdKTtmb3IoZiBpbiBiKWEuc3R5bGVbZl09Z1tmXTtyZXR1cm4gZX07ZnVuY3Rpb24gZmEoYSxiLGMsZCl7dmFyIGUsZj0xLGc9MjAsaD1kP2Z1bmN0aW9uKCl7cmV0dXJuIGQuY3VyKCl9OmZ1bmN0aW9uKCl7cmV0dXJuIHIuY3NzKGEsYixcIlwiKX0saT1oKCksaj1jJiZjWzNdfHwoci5jc3NOdW1iZXJbYl0/XCJcIjpcInB4XCIpLGs9KHIuY3NzTnVtYmVyW2JdfHxcInB4XCIhPT1qJiYraSkmJmJhLmV4ZWMoci5jc3MoYSxiKSk7aWYoayYma1szXSE9PWope2o9anx8a1szXSxjPWN8fFtdLGs9K2l8fDE7ZG8gZj1mfHxcIi41XCIsay89ZixyLnN0eWxlKGEsYixrK2opO3doaWxlKGYhPT0oZj1oKCkvaSkmJjEhPT1mJiYtLWcpfXJldHVybiBjJiYoaz0ra3x8K2l8fDAsZT1jWzFdP2srKGNbMV0rMSkqY1syXTorY1syXSxkJiYoZC51bml0PWosZC5zdGFydD1rLGQuZW5kPWUpKSxlfXZhciBnYT17fTtmdW5jdGlvbiBoYShhKXt2YXIgYixjPWEub3duZXJEb2N1bWVudCxkPWEubm9kZU5hbWUsZT1nYVtkXTtyZXR1cm4gZT9lOihiPWMuYm9keS5hcHBlbmRDaGlsZChjLmNyZWF0ZUVsZW1lbnQoZCkpLGU9ci5jc3MoYixcImRpc3BsYXlcIiksYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpLFwibm9uZVwiPT09ZSYmKGU9XCJibG9ja1wiKSxnYVtkXT1lLGUpfWZ1bmN0aW9uIGlhKGEsYil7Zm9yKHZhciBjLGQsZT1bXSxmPTAsZz1hLmxlbmd0aDtmPGc7ZisrKWQ9YVtmXSxkLnN0eWxlJiYoYz1kLnN0eWxlLmRpc3BsYXksYj8oXCJub25lXCI9PT1jJiYoZVtmXT1XLmdldChkLFwiZGlzcGxheVwiKXx8bnVsbCxlW2ZdfHwoZC5zdHlsZS5kaXNwbGF5PVwiXCIpKSxcIlwiPT09ZC5zdHlsZS5kaXNwbGF5JiZkYShkKSYmKGVbZl09aGEoZCkpKTpcIm5vbmVcIiE9PWMmJihlW2ZdPVwibm9uZVwiLFcuc2V0KGQsXCJkaXNwbGF5XCIsYykpKTtmb3IoZj0wO2Y8ZztmKyspbnVsbCE9ZVtmXSYmKGFbZl0uc3R5bGUuZGlzcGxheT1lW2ZdKTtyZXR1cm4gYX1yLmZuLmV4dGVuZCh7c2hvdzpmdW5jdGlvbigpe3JldHVybiBpYSh0aGlzLCEwKX0saGlkZTpmdW5jdGlvbigpe3JldHVybiBpYSh0aGlzKX0sdG9nZ2xlOmZ1bmN0aW9uKGEpe3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgYT9hP3RoaXMuc2hvdygpOnRoaXMuaGlkZSgpOnRoaXMuZWFjaChmdW5jdGlvbigpe2RhKHRoaXMpP3IodGhpcykuc2hvdygpOnIodGhpcykuaGlkZSgpfSl9fSk7dmFyIGphPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pLGthPS88KFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKykvaSxsYT0vXiR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pLG1hPXtvcHRpb246WzEsXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsXCI8L3NlbGVjdD5cIl0sdGhlYWQ6WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSxjb2w6WzIsXCI8dGFibGU+PGNvbGdyb3VwPlwiLFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLHRkOlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sX2RlZmF1bHQ6WzAsXCJcIixcIlwiXX07bWEub3B0Z3JvdXA9bWEub3B0aW9uLG1hLnRib2R5PW1hLnRmb290PW1hLmNvbGdyb3VwPW1hLmNhcHRpb249bWEudGhlYWQsbWEudGg9bWEudGQ7ZnVuY3Rpb24gbmEoYSxiKXt2YXIgYztyZXR1cm4gYz1cInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKGJ8fFwiKlwiKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5xdWVyeVNlbGVjdG9yQWxsP2EucXVlcnlTZWxlY3RvckFsbChifHxcIipcIik6W10sdm9pZCAwPT09Ynx8YiYmQihhLGIpP3IubWVyZ2UoW2FdLGMpOmN9ZnVuY3Rpb24gb2EoYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2M8ZDtjKyspVy5zZXQoYVtjXSxcImdsb2JhbEV2YWxcIiwhYnx8Vy5nZXQoYltjXSxcImdsb2JhbEV2YWxcIikpfXZhciBwYT0vPHwmIz9cXHcrOy87ZnVuY3Rpb24gcWEoYSxiLGMsZCxlKXtmb3IodmFyIGYsZyxoLGksaixrLGw9Yi5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksbT1bXSxuPTAsbz1hLmxlbmd0aDtuPG87bisrKWlmKGY9YVtuXSxmfHwwPT09ZilpZihcIm9iamVjdFwiPT09ci50eXBlKGYpKXIubWVyZ2UobSxmLm5vZGVUeXBlP1tmXTpmKTtlbHNlIGlmKHBhLnRlc3QoZikpe2c9Z3x8bC5hcHBlbmRDaGlsZChiLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGg9KGthLmV4ZWMoZil8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLGk9bWFbaF18fG1hLl9kZWZhdWx0LGcuaW5uZXJIVE1MPWlbMV0rci5odG1sUHJlZmlsdGVyKGYpK2lbMl0saz1pWzBdO3doaWxlKGstLSlnPWcubGFzdENoaWxkO3IubWVyZ2UobSxnLmNoaWxkTm9kZXMpLGc9bC5maXJzdENoaWxkLGcudGV4dENvbnRlbnQ9XCJcIn1lbHNlIG0ucHVzaChiLmNyZWF0ZVRleHROb2RlKGYpKTtsLnRleHRDb250ZW50PVwiXCIsbj0wO3doaWxlKGY9bVtuKytdKWlmKGQmJnIuaW5BcnJheShmLGQpPi0xKWUmJmUucHVzaChmKTtlbHNlIGlmKGo9ci5jb250YWlucyhmLm93bmVyRG9jdW1lbnQsZiksZz1uYShsLmFwcGVuZENoaWxkKGYpLFwic2NyaXB0XCIpLGomJm9hKGcpLGMpe2s9MDt3aGlsZShmPWdbaysrXSlsYS50ZXN0KGYudHlwZXx8XCJcIikmJmMucHVzaChmKX1yZXR1cm4gbH0hZnVuY3Rpb24oKXt2YXIgYT1kLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxiPWEuYXBwZW5kQ2hpbGQoZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxjPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Muc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksYy5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJjaGVja2VkXCIpLGMuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidFwiKSxiLmFwcGVuZENoaWxkKGMpLG8uY2hlY2tDbG9uZT1iLmNsb25lTm9kZSghMCkuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuY2hlY2tlZCxiLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIixvLm5vQ2xvbmVDaGVja2VkPSEhYi5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWV9KCk7dmFyIHJhPWQuZG9jdW1lbnRFbGVtZW50LHNhPS9ea2V5Lyx0YT0vXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnV8ZHJhZ3xkcm9wKXxjbGljay8sdWE9L14oW14uXSopKD86XFwuKC4rKXwpLztmdW5jdGlvbiB2YSgpe3JldHVybiEwfWZ1bmN0aW9uIHdhKCl7cmV0dXJuITF9ZnVuY3Rpb24geGEoKXt0cnl7cmV0dXJuIGQuYWN0aXZlRWxlbWVudH1jYXRjaChhKXt9fWZ1bmN0aW9uIHlhKGEsYixjLGQsZSxmKXt2YXIgZyxoO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBiKXtcInN0cmluZ1wiIT10eXBlb2YgYyYmKGQ9ZHx8YyxjPXZvaWQgMCk7Zm9yKGggaW4gYil5YShhLGgsYyxkLGJbaF0sZik7cmV0dXJuIGF9aWYobnVsbD09ZCYmbnVsbD09ZT8oZT1jLGQ9Yz12b2lkIDApOm51bGw9PWUmJihcInN0cmluZ1wiPT10eXBlb2YgYz8oZT1kLGQ9dm9pZCAwKTooZT1kLGQ9YyxjPXZvaWQgMCkpLGU9PT0hMSllPXdhO2Vsc2UgaWYoIWUpcmV0dXJuIGE7cmV0dXJuIDE9PT1mJiYoZz1lLGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHIoKS5vZmYoYSksZy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGUuZ3VpZD1nLmd1aWR8fChnLmd1aWQ9ci5ndWlkKyspKSxhLmVhY2goZnVuY3Rpb24oKXtyLmV2ZW50LmFkZCh0aGlzLGIsZSxkLGMpfSl9ci5ldmVudD17Z2xvYmFsOnt9LGFkZDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbixvLHAscT1XLmdldChhKTtpZihxKXtjLmhhbmRsZXImJihmPWMsYz1mLmhhbmRsZXIsZT1mLnNlbGVjdG9yKSxlJiZyLmZpbmQubWF0Y2hlc1NlbGVjdG9yKHJhLGUpLGMuZ3VpZHx8KGMuZ3VpZD1yLmd1aWQrKyksKGk9cS5ldmVudHMpfHwoaT1xLmV2ZW50cz17fSksKGc9cS5oYW5kbGUpfHwoZz1xLmhhbmRsZT1mdW5jdGlvbihiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgciYmci5ldmVudC50cmlnZ2VyZWQhPT1iLnR5cGU/ci5ldmVudC5kaXNwYXRjaC5hcHBseShhLGFyZ3VtZW50cyk6dm9pZCAwfSksYj0oYnx8XCJcIikubWF0Y2goTCl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSloPXVhLmV4ZWMoYltqXSl8fFtdLG49cD1oWzFdLG89KGhbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbiYmKGw9ci5ldmVudC5zcGVjaWFsW25dfHx7fSxuPShlP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxuLGw9ci5ldmVudC5zcGVjaWFsW25dfHx7fSxrPXIuZXh0ZW5kKHt0eXBlOm4sb3JpZ1R5cGU6cCxkYXRhOmQsaGFuZGxlcjpjLGd1aWQ6Yy5ndWlkLHNlbGVjdG9yOmUsbmVlZHNDb250ZXh0OmUmJnIuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChlKSxuYW1lc3BhY2U6by5qb2luKFwiLlwiKX0sZiksKG09aVtuXSl8fChtPWlbbl09W10sbS5kZWxlZ2F0ZUNvdW50PTAsbC5zZXR1cCYmbC5zZXR1cC5jYWxsKGEsZCxvLGcpIT09ITF8fGEuYWRkRXZlbnRMaXN0ZW5lciYmYS5hZGRFdmVudExpc3RlbmVyKG4sZykpLGwuYWRkJiYobC5hZGQuY2FsbChhLGspLGsuaGFuZGxlci5ndWlkfHwoay5oYW5kbGVyLmd1aWQ9Yy5ndWlkKSksZT9tLnNwbGljZShtLmRlbGVnYXRlQ291bnQrKywwLGspOm0ucHVzaChrKSxyLmV2ZW50Lmdsb2JhbFtuXT0hMCl9fSxyZW1vdmU6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaSxqLGssbCxtLG4sbyxwLHE9Vy5oYXNEYXRhKGEpJiZXLmdldChhKTtpZihxJiYoaT1xLmV2ZW50cykpe2I9KGJ8fFwiXCIpLm1hdGNoKEwpfHxbXCJcIl0saj1iLmxlbmd0aDt3aGlsZShqLS0paWYoaD11YS5leGVjKGJbal0pfHxbXSxuPXA9aFsxXSxvPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG4pe2w9ci5ldmVudC5zcGVjaWFsW25dfHx7fSxuPShkP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxuLG09aVtuXXx8W10saD1oWzJdJiZuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrby5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIiksZz1mPW0ubGVuZ3RoO3doaWxlKGYtLSlrPW1bZl0sIWUmJnAhPT1rLm9yaWdUeXBlfHxjJiZjLmd1aWQhPT1rLmd1aWR8fGgmJiFoLnRlc3Qoay5uYW1lc3BhY2UpfHxkJiZkIT09ay5zZWxlY3RvciYmKFwiKipcIiE9PWR8fCFrLnNlbGVjdG9yKXx8KG0uc3BsaWNlKGYsMSksay5zZWxlY3RvciYmbS5kZWxlZ2F0ZUNvdW50LS0sbC5yZW1vdmUmJmwucmVtb3ZlLmNhbGwoYSxrKSk7ZyYmIW0ubGVuZ3RoJiYobC50ZWFyZG93biYmbC50ZWFyZG93bi5jYWxsKGEsbyxxLmhhbmRsZSkhPT0hMXx8ci5yZW1vdmVFdmVudChhLG4scS5oYW5kbGUpLGRlbGV0ZSBpW25dKX1lbHNlIGZvcihuIGluIGkpci5ldmVudC5yZW1vdmUoYSxuK2Jbal0sYyxkLCEwKTtyLmlzRW1wdHlPYmplY3QoaSkmJlcucmVtb3ZlKGEsXCJoYW5kbGUgZXZlbnRzXCIpfX0sZGlzcGF0Y2g6ZnVuY3Rpb24oYSl7dmFyIGI9ci5ldmVudC5maXgoYSksYyxkLGUsZixnLGgsaT1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCksaj0oVy5nZXQodGhpcyxcImV2ZW50c1wiKXx8e30pW2IudHlwZV18fFtdLGs9ci5ldmVudC5zcGVjaWFsW2IudHlwZV18fHt9O2ZvcihpWzBdPWIsYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspaVtjXT1hcmd1bWVudHNbY107aWYoYi5kZWxlZ2F0ZVRhcmdldD10aGlzLCFrLnByZURpc3BhdGNofHxrLnByZURpc3BhdGNoLmNhbGwodGhpcyxiKSE9PSExKXtoPXIuZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLGIsaiksYz0wO3doaWxlKChmPWhbYysrXSkmJiFiLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpe2IuY3VycmVudFRhcmdldD1mLmVsZW0sZD0wO3doaWxlKChnPWYuaGFuZGxlcnNbZCsrXSkmJiFiLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpYi5ybmFtZXNwYWNlJiYhYi5ybmFtZXNwYWNlLnRlc3QoZy5uYW1lc3BhY2UpfHwoYi5oYW5kbGVPYmo9ZyxiLmRhdGE9Zy5kYXRhLGU9KChyLmV2ZW50LnNwZWNpYWxbZy5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fGcuaGFuZGxlcikuYXBwbHkoZi5lbGVtLGkpLHZvaWQgMCE9PWUmJihiLnJlc3VsdD1lKT09PSExJiYoYi5wcmV2ZW50RGVmYXVsdCgpLGIuc3RvcFByb3BhZ2F0aW9uKCkpKX1yZXR1cm4gay5wb3N0RGlzcGF0Y2gmJmsucG9zdERpc3BhdGNoLmNhbGwodGhpcyxiKSxiLnJlc3VsdH19LGhhbmRsZXJzOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGYsZyxoPVtdLGk9Yi5kZWxlZ2F0ZUNvdW50LGo9YS50YXJnZXQ7aWYoaSYmai5ub2RlVHlwZSYmIShcImNsaWNrXCI9PT1hLnR5cGUmJmEuYnV0dG9uPj0xKSlmb3IoO2ohPT10aGlzO2o9ai5wYXJlbnROb2RlfHx0aGlzKWlmKDE9PT1qLm5vZGVUeXBlJiYoXCJjbGlja1wiIT09YS50eXBlfHxqLmRpc2FibGVkIT09ITApKXtmb3IoZj1bXSxnPXt9LGM9MDtjPGk7YysrKWQ9YltjXSxlPWQuc2VsZWN0b3IrXCIgXCIsdm9pZCAwPT09Z1tlXSYmKGdbZV09ZC5uZWVkc0NvbnRleHQ/cihlLHRoaXMpLmluZGV4KGopPi0xOnIuZmluZChlLHRoaXMsbnVsbCxbal0pLmxlbmd0aCksZ1tlXSYmZi5wdXNoKGQpO2YubGVuZ3RoJiZoLnB1c2goe2VsZW06aixoYW5kbGVyczpmfSl9cmV0dXJuIGo9dGhpcyxpPGIubGVuZ3RoJiZoLnB1c2goe2VsZW06aixoYW5kbGVyczpiLnNsaWNlKGkpfSksaH0sYWRkUHJvcDpmdW5jdGlvbihhLGIpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLkV2ZW50LnByb3RvdHlwZSxhLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6ci5pc0Z1bmN0aW9uKGIpP2Z1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiBiKHRoaXMub3JpZ2luYWxFdmVudCl9OmZ1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiB0aGlzLm9yaWdpbmFsRXZlbnRbYV19LHNldDpmdW5jdGlvbihiKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxhLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpifSl9fSl9LGZpeDpmdW5jdGlvbihhKXtyZXR1cm4gYVtyLmV4cGFuZG9dP2E6bmV3IHIuRXZlbnQoYSl9LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxmb2N1czp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKHRoaXMhPT14YSgpJiZ0aGlzLmZvY3VzKXJldHVybiB0aGlzLmZvY3VzKCksITF9LGRlbGVnYXRlVHlwZTpcImZvY3VzaW5cIn0sYmx1cjp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKHRoaXM9PT14YSgpJiZ0aGlzLmJsdXIpcmV0dXJuIHRoaXMuYmx1cigpLCExfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c291dFwifSxjbGljazp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKFwiY2hlY2tib3hcIj09PXRoaXMudHlwZSYmdGhpcy5jbGljayYmQih0aGlzLFwiaW5wdXRcIikpcmV0dXJuIHRoaXMuY2xpY2soKSwhMX0sX2RlZmF1bHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIEIoYS50YXJnZXQsXCJhXCIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oYSl7dm9pZCAwIT09YS5yZXN1bHQmJmEub3JpZ2luYWxFdmVudCYmKGEub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1hLnJlc3VsdCl9fX19LHIucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oYSxiLGMpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lciYmYS5yZW1vdmVFdmVudExpc3RlbmVyKGIsYyl9LHIuRXZlbnQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIHIuRXZlbnQ/KGEmJmEudHlwZT8odGhpcy5vcmlnaW5hbEV2ZW50PWEsdGhpcy50eXBlPWEudHlwZSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1hLmRlZmF1bHRQcmV2ZW50ZWR8fHZvaWQgMD09PWEuZGVmYXVsdFByZXZlbnRlZCYmYS5yZXR1cm5WYWx1ZT09PSExP3ZhOndhLHRoaXMudGFyZ2V0PWEudGFyZ2V0JiYzPT09YS50YXJnZXQubm9kZVR5cGU/YS50YXJnZXQucGFyZW50Tm9kZTphLnRhcmdldCx0aGlzLmN1cnJlbnRUYXJnZXQ9YS5jdXJyZW50VGFyZ2V0LHRoaXMucmVsYXRlZFRhcmdldD1hLnJlbGF0ZWRUYXJnZXQpOnRoaXMudHlwZT1hLGImJnIuZXh0ZW5kKHRoaXMsYiksdGhpcy50aW1lU3RhbXA9YSYmYS50aW1lU3RhbXB8fHIubm93KCksdm9pZCh0aGlzW3IuZXhwYW5kb109ITApKTpuZXcgci5FdmVudChhLGIpfSxyLkV2ZW50LnByb3RvdHlwZT17Y29uc3RydWN0b3I6ci5FdmVudCxpc0RlZmF1bHRQcmV2ZW50ZWQ6d2EsaXNQcm9wYWdhdGlvblN0b3BwZWQ6d2EsaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6d2EsaXNTaW11bGF0ZWQ6ITEscHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9dmEsYSYmIXRoaXMuaXNTaW11bGF0ZWQmJmEucHJldmVudERlZmF1bHQoKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9dmEsYSYmIXRoaXMuaXNTaW11bGF0ZWQmJmEuc3RvcFByb3BhZ2F0aW9uKCl9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPXZhLGEmJiF0aGlzLmlzU2ltdWxhdGVkJiZhLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHRoaXMuc3RvcFByb3BhZ2F0aW9uKCl9fSxyLmVhY2goe2FsdEtleTohMCxidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsY2hhbmdlZFRvdWNoZXM6ITAsY3RybEtleTohMCxkZXRhaWw6ITAsZXZlbnRQaGFzZTohMCxtZXRhS2V5OiEwLHBhZ2VYOiEwLHBhZ2VZOiEwLHNoaWZ0S2V5OiEwLHZpZXc6ITAsXCJjaGFyXCI6ITAsY2hhckNvZGU6ITAsa2V5OiEwLGtleUNvZGU6ITAsYnV0dG9uOiEwLGJ1dHRvbnM6ITAsY2xpZW50WDohMCxjbGllbnRZOiEwLG9mZnNldFg6ITAsb2Zmc2V0WTohMCxwb2ludGVySWQ6ITAscG9pbnRlclR5cGU6ITAsc2NyZWVuWDohMCxzY3JlZW5ZOiEwLHRhcmdldFRvdWNoZXM6ITAsdG9FbGVtZW50OiEwLHRvdWNoZXM6ITAsd2hpY2g6ZnVuY3Rpb24oYSl7dmFyIGI9YS5idXR0b247cmV0dXJuIG51bGw9PWEud2hpY2gmJnNhLnRlc3QoYS50eXBlKT9udWxsIT1hLmNoYXJDb2RlP2EuY2hhckNvZGU6YS5rZXlDb2RlOiFhLndoaWNoJiZ2b2lkIDAhPT1iJiZ0YS50ZXN0KGEudHlwZSk/MSZiPzE6MiZiPzM6NCZiPzI6MDphLndoaWNofX0sci5ldmVudC5hZGRQcm9wKSxyLmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIixwb2ludGVyZW50ZXI6XCJwb2ludGVyb3ZlclwiLHBvaW50ZXJsZWF2ZTpcInBvaW50ZXJvdXRcIn0sZnVuY3Rpb24oYSxiKXtyLmV2ZW50LnNwZWNpYWxbYV09e2RlbGVnYXRlVHlwZTpiLGJpbmRUeXBlOmIsaGFuZGxlOmZ1bmN0aW9uKGEpe3ZhciBjLGQ9dGhpcyxlPWEucmVsYXRlZFRhcmdldCxmPWEuaGFuZGxlT2JqO3JldHVybiBlJiYoZT09PWR8fHIuY29udGFpbnMoZCxlKSl8fChhLnR5cGU9Zi5vcmlnVHlwZSxjPWYuaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyksYS50eXBlPWIpLGN9fX0pLHIuZm4uZXh0ZW5kKHtvbjpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4geWEodGhpcyxhLGIsYyxkKX0sb25lOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB5YSh0aGlzLGEsYixjLGQsMSl9LG9mZjpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZTtpZihhJiZhLnByZXZlbnREZWZhdWx0JiZhLmhhbmRsZU9iailyZXR1cm4gZD1hLmhhbmRsZU9iaixyKGEuZGVsZWdhdGVUYXJnZXQpLm9mZihkLm5hbWVzcGFjZT9kLm9yaWdUeXBlK1wiLlwiK2QubmFtZXNwYWNlOmQub3JpZ1R5cGUsZC5zZWxlY3RvcixkLmhhbmRsZXIpLHRoaXM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGEpe2ZvcihlIGluIGEpdGhpcy5vZmYoZSxiLGFbZV0pO3JldHVybiB0aGlzfXJldHVybiBiIT09ITEmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGJ8fChjPWIsYj12b2lkIDApLGM9PT0hMSYmKGM9d2EpLHRoaXMuZWFjaChmdW5jdGlvbigpe3IuZXZlbnQucmVtb3ZlKHRoaXMsYSxjLGIpfSl9fSk7dmFyIHphPS88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKilbXj5dKilcXC8+L2dpLEFhPS88c2NyaXB0fDxzdHlsZXw8bGluay9pLEJhPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksQ2E9L150cnVlXFwvKC4qKS8sRGE9L15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nO2Z1bmN0aW9uIEVhKGEsYil7cmV0dXJuIEIoYSxcInRhYmxlXCIpJiZCKDExIT09Yi5ub2RlVHlwZT9iOmIuZmlyc3RDaGlsZCxcInRyXCIpP3IoXCI+dGJvZHlcIixhKVswXXx8YTphfWZ1bmN0aW9uIEZhKGEpe3JldHVybiBhLnR5cGU9KG51bGwhPT1hLmdldEF0dHJpYnV0ZShcInR5cGVcIikpK1wiL1wiK2EudHlwZSxhfWZ1bmN0aW9uIEdhKGEpe3ZhciBiPUNhLmV4ZWMoYS50eXBlKTtyZXR1cm4gYj9hLnR5cGU9YlsxXTphLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksYX1mdW5jdGlvbiBIYShhLGIpe3ZhciBjLGQsZSxmLGcsaCxpLGo7aWYoMT09PWIubm9kZVR5cGUpe2lmKFcuaGFzRGF0YShhKSYmKGY9Vy5hY2Nlc3MoYSksZz1XLnNldChiLGYpLGo9Zi5ldmVudHMpKXtkZWxldGUgZy5oYW5kbGUsZy5ldmVudHM9e307Zm9yKGUgaW4gailmb3IoYz0wLGQ9altlXS5sZW5ndGg7YzxkO2MrKylyLmV2ZW50LmFkZChiLGUsaltlXVtjXSl9WC5oYXNEYXRhKGEpJiYoaD1YLmFjY2VzcyhhKSxpPXIuZXh0ZW5kKHt9LGgpLFguc2V0KGIsaSkpfX1mdW5jdGlvbiBJYShhLGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcImlucHV0XCI9PT1jJiZqYS50ZXN0KGEudHlwZSk/Yi5jaGVja2VkPWEuY2hlY2tlZDpcImlucHV0XCIhPT1jJiZcInRleHRhcmVhXCIhPT1jfHwoYi5kZWZhdWx0VmFsdWU9YS5kZWZhdWx0VmFsdWUpfWZ1bmN0aW9uIEphKGEsYixjLGQpe2I9Zy5hcHBseShbXSxiKTt2YXIgZSxmLGgsaSxqLGssbD0wLG09YS5sZW5ndGgsbj1tLTEscT1iWzBdLHM9ci5pc0Z1bmN0aW9uKHEpO2lmKHN8fG0+MSYmXCJzdHJpbmdcIj09dHlwZW9mIHEmJiFvLmNoZWNrQ2xvbmUmJkJhLnRlc3QocSkpcmV0dXJuIGEuZWFjaChmdW5jdGlvbihlKXt2YXIgZj1hLmVxKGUpO3MmJihiWzBdPXEuY2FsbCh0aGlzLGUsZi5odG1sKCkpKSxKYShmLGIsYyxkKX0pO2lmKG0mJihlPXFhKGIsYVswXS5vd25lckRvY3VtZW50LCExLGEsZCksZj1lLmZpcnN0Q2hpbGQsMT09PWUuY2hpbGROb2Rlcy5sZW5ndGgmJihlPWYpLGZ8fGQpKXtmb3IoaD1yLm1hcChuYShlLFwic2NyaXB0XCIpLEZhKSxpPWgubGVuZ3RoO2w8bTtsKyspaj1lLGwhPT1uJiYoaj1yLmNsb25lKGosITAsITApLGkmJnIubWVyZ2UoaCxuYShqLFwic2NyaXB0XCIpKSksYy5jYWxsKGFbbF0saixsKTtpZihpKWZvcihrPWhbaC5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxyLm1hcChoLEdhKSxsPTA7bDxpO2wrKylqPWhbbF0sbGEudGVzdChqLnR5cGV8fFwiXCIpJiYhVy5hY2Nlc3MoaixcImdsb2JhbEV2YWxcIikmJnIuY29udGFpbnMoayxqKSYmKGouc3JjP3IuX2V2YWxVcmwmJnIuX2V2YWxVcmwoai5zcmMpOnAoai50ZXh0Q29udGVudC5yZXBsYWNlKERhLFwiXCIpLGspKX1yZXR1cm4gYX1mdW5jdGlvbiBLYShhLGIsYyl7Zm9yKHZhciBkLGU9Yj9yLmZpbHRlcihiLGEpOmEsZj0wO251bGwhPShkPWVbZl0pO2YrKyljfHwxIT09ZC5ub2RlVHlwZXx8ci5jbGVhbkRhdGEobmEoZCkpLGQucGFyZW50Tm9kZSYmKGMmJnIuY29udGFpbnMoZC5vd25lckRvY3VtZW50LGQpJiZvYShuYShkLFwic2NyaXB0XCIpKSxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZCkpO3JldHVybiBhfXIuZXh0ZW5kKHtodG1sUHJlZmlsdGVyOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoemEsXCI8JDE+PC8kMj5cIil9LGNsb25lOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY2xvbmVOb2RlKCEwKSxpPXIuY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpO2lmKCEoby5ub0Nsb25lQ2hlY2tlZHx8MSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZXx8ci5pc1hNTERvYyhhKSkpZm9yKGc9bmEoaCksZj1uYShhKSxkPTAsZT1mLmxlbmd0aDtkPGU7ZCsrKUlhKGZbZF0sZ1tkXSk7aWYoYilpZihjKWZvcihmPWZ8fG5hKGEpLGc9Z3x8bmEoaCksZD0wLGU9Zi5sZW5ndGg7ZDxlO2QrKylIYShmW2RdLGdbZF0pO2Vsc2UgSGEoYSxoKTtyZXR1cm4gZz1uYShoLFwic2NyaXB0XCIpLGcubGVuZ3RoPjAmJm9hKGcsIWkmJm5hKGEsXCJzY3JpcHRcIikpLGh9LGNsZWFuRGF0YTpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkLGU9ci5ldmVudC5zcGVjaWFsLGY9MDt2b2lkIDAhPT0oYz1hW2ZdKTtmKyspaWYoVShjKSl7aWYoYj1jW1cuZXhwYW5kb10pe2lmKGIuZXZlbnRzKWZvcihkIGluIGIuZXZlbnRzKWVbZF0/ci5ldmVudC5yZW1vdmUoYyxkKTpyLnJlbW92ZUV2ZW50KGMsZCxiLmhhbmRsZSk7Y1tXLmV4cGFuZG9dPXZvaWQgMH1jW1guZXhwYW5kb10mJihjW1guZXhwYW5kb109dm9pZCAwKX19fSksci5mbi5leHRlbmQoe2RldGFjaDpmdW5jdGlvbihhKXtyZXR1cm4gS2EodGhpcyxhLCEwKX0scmVtb3ZlOmZ1bmN0aW9uKGEpe3JldHVybiBLYSh0aGlzLGEpfSx0ZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBUKHRoaXMsZnVuY3Rpb24oYSl7cmV0dXJuIHZvaWQgMD09PWE/ci50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fCh0aGlzLnRleHRDb250ZW50PWEpfSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIEphKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1FYSh0aGlzLGEpO2IuYXBwZW5kQ2hpbGQoYSl9fSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gSmEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPUVhKHRoaXMsYSk7Yi5pbnNlcnRCZWZvcmUoYSxiLmZpcnN0Q2hpbGQpfX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gSmEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gSmEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcy5uZXh0U2libGluZyl9KX0sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGEsYj0wO251bGwhPShhPXRoaXNbYl0pO2IrKykxPT09YS5ub2RlVHlwZSYmKHIuY2xlYW5EYXRhKG5hKGEsITEpKSxhLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihhLGIpe3JldHVybiBhPW51bGwhPWEmJmEsYj1udWxsPT1iP2E6Yix0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiByLmNsb25lKHRoaXMsYSxiKX0pfSxodG1sOmZ1bmN0aW9uKGEpe3JldHVybiBUKHRoaXMsZnVuY3Rpb24oYSl7dmFyIGI9dGhpc1swXXx8e30sYz0wLGQ9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09YSYmMT09PWIubm9kZVR5cGUpcmV0dXJuIGIuaW5uZXJIVE1MO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiYhQWEudGVzdChhKSYmIW1hWyhrYS5leGVjKGEpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2E9ci5odG1sUHJlZmlsdGVyKGEpO3RyeXtmb3IoO2M8ZDtjKyspYj10aGlzW2NdfHx7fSwxPT09Yi5ub2RlVHlwZSYmKHIuY2xlYW5EYXRhKG5hKGIsITEpKSxiLmlubmVySFRNTD1hKTtiPTB9Y2F0Y2goZSl7fX1iJiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGEpfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIGE9W107cmV0dXJuIEphKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMucGFyZW50Tm9kZTtyLmluQXJyYXkodGhpcyxhKTwwJiYoci5jbGVhbkRhdGEobmEodGhpcykpLGMmJmMucmVwbGFjZUNoaWxkKGIsdGhpcykpfSxhKX19KSxyLmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oYSxiKXtyLmZuW2FdPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYyxkPVtdLGU9cihhKSxmPWUubGVuZ3RoLTEsZz0wO2c8PWY7ZysrKWM9Zz09PWY/dGhpczp0aGlzLmNsb25lKCEwKSxyKGVbZ10pW2JdKGMpLGguYXBwbHkoZCxjLmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZCl9fSk7dmFyIExhPS9ebWFyZ2luLyxNYT1uZXcgUmVnRXhwKFwiXihcIithYStcIikoPyFweClbYS16JV0rJFwiLFwiaVwiKSxOYT1mdW5jdGlvbihiKXt2YXIgYz1iLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7cmV0dXJuIGMmJmMub3BlbmVyfHwoYz1hKSxjLmdldENvbXB1dGVkU3R5bGUoYil9OyFmdW5jdGlvbigpe2Z1bmN0aW9uIGIoKXtpZihpKXtpLnN0eWxlLmNzc1RleHQ9XCJib3gtc2l6aW5nOmJvcmRlci1ib3g7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jazttYXJnaW46YXV0bztib3JkZXI6MXB4O3BhZGRpbmc6MXB4O3RvcDoxJTt3aWR0aDo1MCVcIixpLmlubmVySFRNTD1cIlwiLHJhLmFwcGVuZENoaWxkKGgpO3ZhciBiPWEuZ2V0Q29tcHV0ZWRTdHlsZShpKTtjPVwiMSVcIiE9PWIudG9wLGc9XCIycHhcIj09PWIubWFyZ2luTGVmdCxlPVwiNHB4XCI9PT1iLndpZHRoLGkuc3R5bGUubWFyZ2luUmlnaHQ9XCI1MCVcIixmPVwiNHB4XCI9PT1iLm1hcmdpblJpZ2h0LHJhLnJlbW92ZUNoaWxkKGgpLGk9bnVsbH19dmFyIGMsZSxmLGcsaD1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksaT1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aS5zdHlsZSYmKGkuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJjb250ZW50LWJveFwiLGkuY2xvbmVOb2RlKCEwKS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cIlwiLG8uY2xlYXJDbG9uZVN0eWxlPVwiY29udGVudC1ib3hcIj09PWkuc3R5bGUuYmFja2dyb3VuZENsaXAsaC5zdHlsZS5jc3NUZXh0PVwiYm9yZGVyOjA7d2lkdGg6OHB4O2hlaWdodDowO3RvcDowO2xlZnQ6LTk5OTlweDtwYWRkaW5nOjA7bWFyZ2luLXRvcDoxcHg7cG9zaXRpb246YWJzb2x1dGVcIixoLmFwcGVuZENoaWxkKGkpLHIuZXh0ZW5kKG8se3BpeGVsUG9zaXRpb246ZnVuY3Rpb24oKXtyZXR1cm4gYigpLGN9LGJveFNpemluZ1JlbGlhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGIoKSxlfSxwaXhlbE1hcmdpblJpZ2h0OmZ1bmN0aW9uKCl7cmV0dXJuIGIoKSxmfSxyZWxpYWJsZU1hcmdpbkxlZnQ6ZnVuY3Rpb24oKXtyZXR1cm4gYigpLGd9fSkpfSgpO2Z1bmN0aW9uIE9hKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuc3R5bGU7cmV0dXJuIGM9Y3x8TmEoYSksYyYmKGc9Yy5nZXRQcm9wZXJ0eVZhbHVlKGIpfHxjW2JdLFwiXCIhPT1nfHxyLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKXx8KGc9ci5zdHlsZShhLGIpKSwhby5waXhlbE1hcmdpblJpZ2h0KCkmJk1hLnRlc3QoZykmJkxhLnRlc3QoYikmJihkPWgud2lkdGgsZT1oLm1pbldpZHRoLGY9aC5tYXhXaWR0aCxoLm1pbldpZHRoPWgubWF4V2lkdGg9aC53aWR0aD1nLGc9Yy53aWR0aCxoLndpZHRoPWQsaC5taW5XaWR0aD1lLGgubWF4V2lkdGg9ZikpLHZvaWQgMCE9PWc/ZytcIlwiOmd9ZnVuY3Rpb24gUGEoYSxiKXtyZXR1cm57Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGEoKT92b2lkIGRlbGV0ZSB0aGlzLmdldDoodGhpcy5nZXQ9YikuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19dmFyIFFhPS9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxSYT0vXi0tLyxTYT17cG9zaXRpb246XCJhYnNvbHV0ZVwiLHZpc2liaWxpdHk6XCJoaWRkZW5cIixkaXNwbGF5OlwiYmxvY2tcIn0sVGE9e2xldHRlclNwYWNpbmc6XCIwXCIsZm9udFdlaWdodDpcIjQwMFwifSxVYT1bXCJXZWJraXRcIixcIk1velwiLFwibXNcIl0sVmE9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlO2Z1bmN0aW9uIFdhKGEpe2lmKGEgaW4gVmEpcmV0dXJuIGE7dmFyIGI9YVswXS50b1VwcGVyQ2FzZSgpK2Euc2xpY2UoMSksYz1VYS5sZW5ndGg7d2hpbGUoYy0tKWlmKGE9VWFbY10rYixhIGluIFZhKXJldHVybiBhfWZ1bmN0aW9uIFhhKGEpe3ZhciBiPXIuY3NzUHJvcHNbYV07cmV0dXJuIGJ8fChiPXIuY3NzUHJvcHNbYV09V2EoYSl8fGEpLGJ9ZnVuY3Rpb24gWWEoYSxiLGMpe3ZhciBkPWJhLmV4ZWMoYik7cmV0dXJuIGQ/TWF0aC5tYXgoMCxkWzJdLShjfHwwKSkrKGRbM118fFwicHhcIik6Yn1mdW5jdGlvbiBaYShhLGIsYyxkLGUpe3ZhciBmLGc9MDtmb3IoZj1jPT09KGQ/XCJib3JkZXJcIjpcImNvbnRlbnRcIik/NDpcIndpZHRoXCI9PT1iPzE6MDtmPDQ7Zis9MilcIm1hcmdpblwiPT09YyYmKGcrPXIuY3NzKGEsYytjYVtmXSwhMCxlKSksZD8oXCJjb250ZW50XCI9PT1jJiYoZy09ci5jc3MoYSxcInBhZGRpbmdcIitjYVtmXSwhMCxlKSksXCJtYXJnaW5cIiE9PWMmJihnLT1yLmNzcyhhLFwiYm9yZGVyXCIrY2FbZl0rXCJXaWR0aFwiLCEwLGUpKSk6KGcrPXIuY3NzKGEsXCJwYWRkaW5nXCIrY2FbZl0sITAsZSksXCJwYWRkaW5nXCIhPT1jJiYoZys9ci5jc3MoYSxcImJvcmRlclwiK2NhW2ZdK1wiV2lkdGhcIiwhMCxlKSkpO3JldHVybiBnfWZ1bmN0aW9uICRhKGEsYixjKXt2YXIgZCxlPU5hKGEpLGY9T2EoYSxiLGUpLGc9XCJib3JkZXItYm94XCI9PT1yLmNzcyhhLFwiYm94U2l6aW5nXCIsITEsZSk7cmV0dXJuIE1hLnRlc3QoZik/ZjooZD1nJiYoby5ib3hTaXppbmdSZWxpYWJsZSgpfHxmPT09YS5zdHlsZVtiXSksXCJhdXRvXCI9PT1mJiYoZj1hW1wib2Zmc2V0XCIrYlswXS50b1VwcGVyQ2FzZSgpK2Iuc2xpY2UoMSldKSxmPXBhcnNlRmxvYXQoZil8fDAsZitaYShhLGIsY3x8KGc/XCJib3JkZXJcIjpcImNvbnRlbnRcIiksZCxlKStcInB4XCIpfXIuZXh0ZW5kKHtjc3NIb29rczp7b3BhY2l0eTp7Z2V0OmZ1bmN0aW9uKGEsYil7aWYoYil7dmFyIGM9T2EoYSxcIm9wYWNpdHlcIik7cmV0dXJuXCJcIj09PWM/XCIxXCI6Y319fX0sY3NzTnVtYmVyOnthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxjb2x1bW5Db3VudDohMCxmaWxsT3BhY2l0eTohMCxmbGV4R3JvdzohMCxmbGV4U2hyaW5rOiEwLGZvbnRXZWlnaHQ6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwfSxjc3NQcm9wczp7XCJmbG9hdFwiOlwiY3NzRmxvYXRcIn0sc3R5bGU6ZnVuY3Rpb24oYSxiLGMsZCl7aWYoYSYmMyE9PWEubm9kZVR5cGUmJjghPT1hLm5vZGVUeXBlJiZhLnN0eWxlKXt2YXIgZSxmLGcsaD1yLmNhbWVsQ2FzZShiKSxpPVJhLnRlc3QoYiksaj1hLnN0eWxlO3JldHVybiBpfHwoYj1YYShoKSksZz1yLmNzc0hvb2tzW2JdfHxyLmNzc0hvb2tzW2hdLHZvaWQgMD09PWM/ZyYmXCJnZXRcImluIGcmJnZvaWQgMCE9PShlPWcuZ2V0KGEsITEsZCkpP2U6altiXTooZj10eXBlb2YgYyxcInN0cmluZ1wiPT09ZiYmKGU9YmEuZXhlYyhjKSkmJmVbMV0mJihjPWZhKGEsYixlKSxmPVwibnVtYmVyXCIpLG51bGwhPWMmJmM9PT1jJiYoXCJudW1iZXJcIj09PWYmJihjKz1lJiZlWzNdfHwoci5jc3NOdW1iZXJbaF0/XCJcIjpcInB4XCIpKSxvLmNsZWFyQ2xvbmVTdHlsZXx8XCJcIiE9PWN8fDAhPT1iLmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpfHwoaltiXT1cImluaGVyaXRcIiksZyYmXCJzZXRcImluIGcmJnZvaWQgMD09PShjPWcuc2V0KGEsYyxkKSl8fChpP2ouc2V0UHJvcGVydHkoYixjKTpqW2JdPWMpKSx2b2lkIDApfX0sY3NzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZyxoPXIuY2FtZWxDYXNlKGIpLGk9UmEudGVzdChiKTtyZXR1cm4gaXx8KGI9WGEoaCkpLGc9ci5jc3NIb29rc1tiXXx8ci5jc3NIb29rc1toXSxnJiZcImdldFwiaW4gZyYmKGU9Zy5nZXQoYSwhMCxjKSksdm9pZCAwPT09ZSYmKGU9T2EoYSxiLGQpKSxcIm5vcm1hbFwiPT09ZSYmYiBpbiBUYSYmKGU9VGFbYl0pLFwiXCI9PT1jfHxjPyhmPXBhcnNlRmxvYXQoZSksYz09PSEwfHxpc0Zpbml0ZShmKT9mfHwwOmUpOmV9fSksci5lYWNoKFtcImhlaWdodFwiLFwid2lkdGhcIl0sZnVuY3Rpb24oYSxiKXtyLmNzc0hvb2tzW2JdPXtnZXQ6ZnVuY3Rpb24oYSxjLGQpe2lmKGMpcmV0dXJuIVFhLnRlc3Qoci5jc3MoYSxcImRpc3BsYXlcIikpfHxhLmdldENsaWVudFJlY3RzKCkubGVuZ3RoJiZhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoPyRhKGEsYixkKTplYShhLFNhLGZ1bmN0aW9uKCl7cmV0dXJuICRhKGEsYixkKX0pfSxzZXQ6ZnVuY3Rpb24oYSxjLGQpe3ZhciBlLGY9ZCYmTmEoYSksZz1kJiZaYShhLGIsZCxcImJvcmRlci1ib3hcIj09PXIuY3NzKGEsXCJib3hTaXppbmdcIiwhMSxmKSxmKTtyZXR1cm4gZyYmKGU9YmEuZXhlYyhjKSkmJlwicHhcIiE9PShlWzNdfHxcInB4XCIpJiYoYS5zdHlsZVtiXT1jLGM9ci5jc3MoYSxiKSksWWEoYSxjLGcpfX19KSxyLmNzc0hvb2tzLm1hcmdpbkxlZnQ9UGEoby5yZWxpYWJsZU1hcmdpbkxlZnQsZnVuY3Rpb24oYSxiKXtpZihiKXJldHVybihwYXJzZUZsb2F0KE9hKGEsXCJtYXJnaW5MZWZ0XCIpKXx8YS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LWVhKGEse21hcmdpbkxlZnQ6MH0sZnVuY3Rpb24oKXtyZXR1cm4gYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0fSkpK1wicHhcIn0pLHIuZWFjaCh7bWFyZ2luOlwiXCIscGFkZGluZzpcIlwiLGJvcmRlcjpcIldpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7ci5jc3NIb29rc1thK2JdPXtleHBhbmQ6ZnVuY3Rpb24oYyl7Zm9yKHZhciBkPTAsZT17fSxmPVwic3RyaW5nXCI9PXR5cGVvZiBjP2Muc3BsaXQoXCIgXCIpOltjXTtkPDQ7ZCsrKWVbYStjYVtkXStiXT1mW2RdfHxmW2QtMl18fGZbMF07cmV0dXJuIGV9fSxMYS50ZXN0KGEpfHwoci5jc3NIb29rc1thK2JdLnNldD1ZYSl9KSxyLmZuLmV4dGVuZCh7Y3NzOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFQodGhpcyxmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPXt9LGc9MDtpZihBcnJheS5pc0FycmF5KGIpKXtmb3IoZD1OYShhKSxlPWIubGVuZ3RoO2c8ZTtnKyspZltiW2ddXT1yLmNzcyhhLGJbZ10sITEsZCk7cmV0dXJuIGZ9cmV0dXJuIHZvaWQgMCE9PWM/ci5zdHlsZShhLGIsYyk6ci5jc3MoYSxiKX0sYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9fSk7ZnVuY3Rpb24gX2EoYSxiLGMsZCxlKXtyZXR1cm4gbmV3IF9hLnByb3RvdHlwZS5pbml0KGEsYixjLGQsZSl9ci5Ud2Vlbj1fYSxfYS5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOl9hLGluaXQ6ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3RoaXMuZWxlbT1hLHRoaXMucHJvcD1jLHRoaXMuZWFzaW5nPWV8fHIuZWFzaW5nLl9kZWZhdWx0LHRoaXMub3B0aW9ucz1iLHRoaXMuc3RhcnQ9dGhpcy5ub3c9dGhpcy5jdXIoKSx0aGlzLmVuZD1kLHRoaXMudW5pdD1mfHwoci5jc3NOdW1iZXJbY10/XCJcIjpcInB4XCIpfSxjdXI6ZnVuY3Rpb24oKXt2YXIgYT1fYS5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gYSYmYS5nZXQ/YS5nZXQodGhpcyk6X2EucHJvcEhvb2tzLl9kZWZhdWx0LmdldCh0aGlzKX0scnVuOmZ1bmN0aW9uKGEpe3ZhciBiLGM9X2EucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIHRoaXMub3B0aW9ucy5kdXJhdGlvbj90aGlzLnBvcz1iPXIuZWFzaW5nW3RoaXMuZWFzaW5nXShhLHRoaXMub3B0aW9ucy5kdXJhdGlvbiphLDAsMSx0aGlzLm9wdGlvbnMuZHVyYXRpb24pOnRoaXMucG9zPWI9YSx0aGlzLm5vdz0odGhpcy5lbmQtdGhpcy5zdGFydCkqYit0aGlzLnN0YXJ0LHRoaXMub3B0aW9ucy5zdGVwJiZ0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSx0aGlzLm5vdyx0aGlzKSxjJiZjLnNldD9jLnNldCh0aGlzKTpfYS5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpLHRoaXN9fSxfYS5wcm90b3R5cGUuaW5pdC5wcm90b3R5cGU9X2EucHJvdG90eXBlLF9hLnByb3BIb29rcz17X2RlZmF1bHQ6e2dldDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4gMSE9PWEuZWxlbS5ub2RlVHlwZXx8bnVsbCE9YS5lbGVtW2EucHJvcF0mJm51bGw9PWEuZWxlbS5zdHlsZVthLnByb3BdP2EuZWxlbVthLnByb3BdOihiPXIuY3NzKGEuZWxlbSxhLnByb3AsXCJcIiksYiYmXCJhdXRvXCIhPT1iP2I6MCl9LHNldDpmdW5jdGlvbihhKXtyLmZ4LnN0ZXBbYS5wcm9wXT9yLmZ4LnN0ZXBbYS5wcm9wXShhKToxIT09YS5lbGVtLm5vZGVUeXBlfHxudWxsPT1hLmVsZW0uc3R5bGVbci5jc3NQcm9wc1thLnByb3BdXSYmIXIuY3NzSG9va3NbYS5wcm9wXT9hLmVsZW1bYS5wcm9wXT1hLm5vdzpyLnN0eWxlKGEuZWxlbSxhLnByb3AsYS5ub3crYS51bml0KX19fSxfYS5wcm9wSG9va3Muc2Nyb2xsVG9wPV9hLnByb3BIb29rcy5zY3JvbGxMZWZ0PXtzZXQ6ZnVuY3Rpb24oYSl7YS5lbGVtLm5vZGVUeXBlJiZhLmVsZW0ucGFyZW50Tm9kZSYmKGEuZWxlbVthLnByb3BdPWEubm93KX19LHIuZWFzaW5nPXtsaW5lYXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGF9LHN3aW5nOmZ1bmN0aW9uKGEpe3JldHVybi41LU1hdGguY29zKGEqTWF0aC5QSSkvMn0sX2RlZmF1bHQ6XCJzd2luZ1wifSxyLmZ4PV9hLnByb3RvdHlwZS5pbml0LHIuZnguc3RlcD17fTt2YXIgYWIsYmIsY2I9L14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLGRiPS9xdWV1ZUhvb2tzJC87ZnVuY3Rpb24gZWIoKXtiYiYmKGQuaGlkZGVuPT09ITEmJmEucmVxdWVzdEFuaW1hdGlvbkZyYW1lP2EucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGViKTphLnNldFRpbWVvdXQoZWIsci5meC5pbnRlcnZhbCksci5meC50aWNrKCkpfWZ1bmN0aW9uIGZiKCl7cmV0dXJuIGEuc2V0VGltZW91dChmdW5jdGlvbigpe2FiPXZvaWQgMH0pLGFiPXIubm93KCl9ZnVuY3Rpb24gZ2IoYSxiKXt2YXIgYyxkPTAsZT17aGVpZ2h0OmF9O2ZvcihiPWI/MTowO2Q8NDtkKz0yLWIpYz1jYVtkXSxlW1wibWFyZ2luXCIrY109ZVtcInBhZGRpbmdcIitjXT1hO3JldHVybiBiJiYoZS5vcGFjaXR5PWUud2lkdGg9YSksZX1mdW5jdGlvbiBoYihhLGIsYyl7Zm9yKHZhciBkLGU9KGtiLnR3ZWVuZXJzW2JdfHxbXSkuY29uY2F0KGtiLnR3ZWVuZXJzW1wiKlwiXSksZj0wLGc9ZS5sZW5ndGg7ZjxnO2YrKylpZihkPWVbZl0uY2FsbChjLGIsYSkpcmV0dXJuIGR9ZnVuY3Rpb24gaWIoYSxiLGMpe3ZhciBkLGUsZixnLGgsaSxqLGssbD1cIndpZHRoXCJpbiBifHxcImhlaWdodFwiaW4gYixtPXRoaXMsbj17fSxvPWEuc3R5bGUscD1hLm5vZGVUeXBlJiZkYShhKSxxPVcuZ2V0KGEsXCJmeHNob3dcIik7Yy5xdWV1ZXx8KGc9ci5fcXVldWVIb29rcyhhLFwiZnhcIiksbnVsbD09Zy51bnF1ZXVlZCYmKGcudW5xdWV1ZWQ9MCxoPWcuZW1wdHkuZmlyZSxnLmVtcHR5LmZpcmU9ZnVuY3Rpb24oKXtnLnVucXVldWVkfHxoKCl9KSxnLnVucXVldWVkKyssbS5hbHdheXMoZnVuY3Rpb24oKXttLmFsd2F5cyhmdW5jdGlvbigpe2cudW5xdWV1ZWQtLSxyLnF1ZXVlKGEsXCJmeFwiKS5sZW5ndGh8fGcuZW1wdHkuZmlyZSgpfSl9KSk7Zm9yKGQgaW4gYilpZihlPWJbZF0sY2IudGVzdChlKSl7aWYoZGVsZXRlIGJbZF0sZj1mfHxcInRvZ2dsZVwiPT09ZSxlPT09KHA/XCJoaWRlXCI6XCJzaG93XCIpKXtpZihcInNob3dcIiE9PWV8fCFxfHx2b2lkIDA9PT1xW2RdKWNvbnRpbnVlO3A9ITB9bltkXT1xJiZxW2RdfHxyLnN0eWxlKGEsZCl9aWYoaT0hci5pc0VtcHR5T2JqZWN0KGIpLGl8fCFyLmlzRW1wdHlPYmplY3Qobikpe2wmJjE9PT1hLm5vZGVUeXBlJiYoYy5vdmVyZmxvdz1bby5vdmVyZmxvdyxvLm92ZXJmbG93WCxvLm92ZXJmbG93WV0saj1xJiZxLmRpc3BsYXksbnVsbD09aiYmKGo9Vy5nZXQoYSxcImRpc3BsYXlcIikpLGs9ci5jc3MoYSxcImRpc3BsYXlcIiksXCJub25lXCI9PT1rJiYoaj9rPWo6KGlhKFthXSwhMCksaj1hLnN0eWxlLmRpc3BsYXl8fGosaz1yLmNzcyhhLFwiZGlzcGxheVwiKSxpYShbYV0pKSksKFwiaW5saW5lXCI9PT1rfHxcImlubGluZS1ibG9ja1wiPT09ayYmbnVsbCE9aikmJlwibm9uZVwiPT09ci5jc3MoYSxcImZsb2F0XCIpJiYoaXx8KG0uZG9uZShmdW5jdGlvbigpe28uZGlzcGxheT1qfSksbnVsbD09aiYmKGs9by5kaXNwbGF5LGo9XCJub25lXCI9PT1rP1wiXCI6aykpLG8uZGlzcGxheT1cImlubGluZS1ibG9ja1wiKSksYy5vdmVyZmxvdyYmKG8ub3ZlcmZsb3c9XCJoaWRkZW5cIixtLmFsd2F5cyhmdW5jdGlvbigpe28ub3ZlcmZsb3c9Yy5vdmVyZmxvd1swXSxvLm92ZXJmbG93WD1jLm92ZXJmbG93WzFdLG8ub3ZlcmZsb3dZPWMub3ZlcmZsb3dbMl19KSksaT0hMTtmb3IoZCBpbiBuKWl8fChxP1wiaGlkZGVuXCJpbiBxJiYocD1xLmhpZGRlbik6cT1XLmFjY2VzcyhhLFwiZnhzaG93XCIse2Rpc3BsYXk6an0pLGYmJihxLmhpZGRlbj0hcCkscCYmaWEoW2FdLCEwKSxtLmRvbmUoZnVuY3Rpb24oKXtwfHxpYShbYV0pLFcucmVtb3ZlKGEsXCJmeHNob3dcIik7Zm9yKGQgaW4gbilyLnN0eWxlKGEsZCxuW2RdKX0pKSxpPWhiKHA/cVtkXTowLGQsbSksZCBpbiBxfHwocVtkXT1pLnN0YXJ0LHAmJihpLmVuZD1pLnN0YXJ0LGkuc3RhcnQ9MCkpfX1mdW5jdGlvbiBqYihhLGIpe3ZhciBjLGQsZSxmLGc7Zm9yKGMgaW4gYSlpZihkPXIuY2FtZWxDYXNlKGMpLGU9YltkXSxmPWFbY10sQXJyYXkuaXNBcnJheShmKSYmKGU9ZlsxXSxmPWFbY109ZlswXSksYyE9PWQmJihhW2RdPWYsZGVsZXRlIGFbY10pLGc9ci5jc3NIb29rc1tkXSxnJiZcImV4cGFuZFwiaW4gZyl7Zj1nLmV4cGFuZChmKSxkZWxldGUgYVtkXTtmb3IoYyBpbiBmKWMgaW4gYXx8KGFbY109ZltjXSxiW2NdPWUpfWVsc2UgYltkXT1lfWZ1bmN0aW9uIGtiKGEsYixjKXt2YXIgZCxlLGY9MCxnPWtiLnByZWZpbHRlcnMubGVuZ3RoLGg9ci5EZWZlcnJlZCgpLmFsd2F5cyhmdW5jdGlvbigpe2RlbGV0ZSBpLmVsZW19KSxpPWZ1bmN0aW9uKCl7aWYoZSlyZXR1cm4hMTtmb3IodmFyIGI9YWJ8fGZiKCksYz1NYXRoLm1heCgwLGouc3RhcnRUaW1lK2ouZHVyYXRpb24tYiksZD1jL2ouZHVyYXRpb258fDAsZj0xLWQsZz0wLGk9ai50d2VlbnMubGVuZ3RoO2c8aTtnKyspai50d2VlbnNbZ10ucnVuKGYpO3JldHVybiBoLm5vdGlmeVdpdGgoYSxbaixmLGNdKSxmPDEmJmk/YzooaXx8aC5ub3RpZnlXaXRoKGEsW2osMSwwXSksaC5yZXNvbHZlV2l0aChhLFtqXSksITEpfSxqPWgucHJvbWlzZSh7ZWxlbTphLHByb3BzOnIuZXh0ZW5kKHt9LGIpLG9wdHM6ci5leHRlbmQoITAse3NwZWNpYWxFYXNpbmc6e30sZWFzaW5nOnIuZWFzaW5nLl9kZWZhdWx0fSxjKSxvcmlnaW5hbFByb3BlcnRpZXM6YixvcmlnaW5hbE9wdGlvbnM6YyxzdGFydFRpbWU6YWJ8fGZiKCksZHVyYXRpb246Yy5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24oYixjKXt2YXIgZD1yLlR3ZWVuKGEsai5vcHRzLGIsYyxqLm9wdHMuc3BlY2lhbEVhc2luZ1tiXXx8ai5vcHRzLmVhc2luZyk7cmV0dXJuIGoudHdlZW5zLnB1c2goZCksZH0sc3RvcDpmdW5jdGlvbihiKXt2YXIgYz0wLGQ9Yj9qLnR3ZWVucy5sZW5ndGg6MDtpZihlKXJldHVybiB0aGlzO2ZvcihlPSEwO2M8ZDtjKyspai50d2VlbnNbY10ucnVuKDEpO3JldHVybiBiPyhoLm5vdGlmeVdpdGgoYSxbaiwxLDBdKSxoLnJlc29sdmVXaXRoKGEsW2osYl0pKTpoLnJlamVjdFdpdGgoYSxbaixiXSksdGhpc319KSxrPWoucHJvcHM7Zm9yKGpiKGssai5vcHRzLnNwZWNpYWxFYXNpbmcpO2Y8ZztmKyspaWYoZD1rYi5wcmVmaWx0ZXJzW2ZdLmNhbGwoaixhLGssai5vcHRzKSlyZXR1cm4gci5pc0Z1bmN0aW9uKGQuc3RvcCkmJihyLl9xdWV1ZUhvb2tzKGouZWxlbSxqLm9wdHMucXVldWUpLnN0b3A9ci5wcm94eShkLnN0b3AsZCkpLGQ7cmV0dXJuIHIubWFwKGssaGIsaiksci5pc0Z1bmN0aW9uKGoub3B0cy5zdGFydCkmJmoub3B0cy5zdGFydC5jYWxsKGEsaiksai5wcm9ncmVzcyhqLm9wdHMucHJvZ3Jlc3MpLmRvbmUoai5vcHRzLmRvbmUsai5vcHRzLmNvbXBsZXRlKS5mYWlsKGoub3B0cy5mYWlsKS5hbHdheXMoai5vcHRzLmFsd2F5cyksci5meC50aW1lcihyLmV4dGVuZChpLHtlbGVtOmEsYW5pbTpqLHF1ZXVlOmoub3B0cy5xdWV1ZX0pKSxqfXIuQW5pbWF0aW9uPXIuZXh0ZW5kKGtiLHt0d2VlbmVyczp7XCIqXCI6W2Z1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5jcmVhdGVUd2VlbihhLGIpO3JldHVybiBmYShjLmVsZW0sYSxiYS5leGVjKGIpLGMpLGN9XX0sdHdlZW5lcjpmdW5jdGlvbihhLGIpe3IuaXNGdW5jdGlvbihhKT8oYj1hLGE9W1wiKlwiXSk6YT1hLm1hdGNoKEwpO2Zvcih2YXIgYyxkPTAsZT1hLmxlbmd0aDtkPGU7ZCsrKWM9YVtkXSxrYi50d2VlbmVyc1tjXT1rYi50d2VlbmVyc1tjXXx8W10sa2IudHdlZW5lcnNbY10udW5zaGlmdChiKX0scHJlZmlsdGVyczpbaWJdLHByZWZpbHRlcjpmdW5jdGlvbihhLGIpe2I/a2IucHJlZmlsdGVycy51bnNoaWZ0KGEpOmtiLnByZWZpbHRlcnMucHVzaChhKX19KSxyLnNwZWVkPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1hJiZcIm9iamVjdFwiPT10eXBlb2YgYT9yLmV4dGVuZCh7fSxhKTp7Y29tcGxldGU6Y3x8IWMmJmJ8fHIuaXNGdW5jdGlvbihhKSYmYSxkdXJhdGlvbjphLGVhc2luZzpjJiZifHxiJiYhci5pc0Z1bmN0aW9uKGIpJiZifTtyZXR1cm4gci5meC5vZmY/ZC5kdXJhdGlvbj0wOlwibnVtYmVyXCIhPXR5cGVvZiBkLmR1cmF0aW9uJiYoZC5kdXJhdGlvbiBpbiByLmZ4LnNwZWVkcz9kLmR1cmF0aW9uPXIuZnguc3BlZWRzW2QuZHVyYXRpb25dOmQuZHVyYXRpb249ci5meC5zcGVlZHMuX2RlZmF1bHQpLG51bGwhPWQucXVldWUmJmQucXVldWUhPT0hMHx8KGQucXVldWU9XCJmeFwiKSxkLm9sZD1kLmNvbXBsZXRlLGQuY29tcGxldGU9ZnVuY3Rpb24oKXtyLmlzRnVuY3Rpb24oZC5vbGQpJiZkLm9sZC5jYWxsKHRoaXMpLGQucXVldWUmJnIuZGVxdWV1ZSh0aGlzLGQucXVldWUpfSxkfSxyLmZuLmV4dGVuZCh7ZmFkZVRvOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLmZpbHRlcihkYSkuY3NzKFwib3BhY2l0eVwiLDApLnNob3coKS5lbmQoKS5hbmltYXRlKHtvcGFjaXR5OmJ9LGEsYyxkKX0sYW5pbWF0ZTpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1yLmlzRW1wdHlPYmplY3QoYSksZj1yLnNwZWVkKGIsYyxkKSxnPWZ1bmN0aW9uKCl7dmFyIGI9a2IodGhpcyxyLmV4dGVuZCh7fSxhKSxmKTsoZXx8Vy5nZXQodGhpcyxcImZpbmlzaFwiKSkmJmIuc3RvcCghMCl9O3JldHVybiBnLmZpbmlzaD1nLGV8fGYucXVldWU9PT0hMT90aGlzLmVhY2goZyk6dGhpcy5xdWV1ZShmLnF1ZXVlLGcpfSxzdG9wOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1mdW5jdGlvbihhKXt2YXIgYj1hLnN0b3A7ZGVsZXRlIGEuc3RvcCxiKGMpfTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgYSYmKGM9YixiPWEsYT12b2lkIDApLGImJmEhPT0hMSYmdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiPSEwLGU9bnVsbCE9YSYmYStcInF1ZXVlSG9va3NcIixmPXIudGltZXJzLGc9Vy5nZXQodGhpcyk7aWYoZSlnW2VdJiZnW2VdLnN0b3AmJmQoZ1tlXSk7ZWxzZSBmb3IoZSBpbiBnKWdbZV0mJmdbZV0uc3RvcCYmZGIudGVzdChlKSYmZChnW2VdKTtmb3IoZT1mLmxlbmd0aDtlLS07KWZbZV0uZWxlbSE9PXRoaXN8fG51bGwhPWEmJmZbZV0ucXVldWUhPT1hfHwoZltlXS5hbmltLnN0b3AoYyksYj0hMSxmLnNwbGljZShlLDEpKTshYiYmY3x8ci5kZXF1ZXVlKHRoaXMsYSl9KX0sZmluaXNoOmZ1bmN0aW9uKGEpe3JldHVybiBhIT09ITEmJihhPWF8fFwiZnhcIiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGIsYz1XLmdldCh0aGlzKSxkPWNbYStcInF1ZXVlXCJdLGU9Y1thK1wicXVldWVIb29rc1wiXSxmPXIudGltZXJzLGc9ZD9kLmxlbmd0aDowO2ZvcihjLmZpbmlzaD0hMCxyLnF1ZXVlKHRoaXMsYSxbXSksZSYmZS5zdG9wJiZlLnN0b3AuY2FsbCh0aGlzLCEwKSxiPWYubGVuZ3RoO2ItLTspZltiXS5lbGVtPT09dGhpcyYmZltiXS5xdWV1ZT09PWEmJihmW2JdLmFuaW0uc3RvcCghMCksZi5zcGxpY2UoYiwxKSk7Zm9yKGI9MDtiPGc7YisrKWRbYl0mJmRbYl0uZmluaXNoJiZkW2JdLmZpbmlzaC5jYWxsKHRoaXMpO2RlbGV0ZSBjLmZpbmlzaH0pfX0pLHIuZWFjaChbXCJ0b2dnbGVcIixcInNob3dcIixcImhpZGVcIl0sZnVuY3Rpb24oYSxiKXt2YXIgYz1yLmZuW2JdO3IuZm5bYl09ZnVuY3Rpb24oYSxkLGUpe3JldHVybiBudWxsPT1hfHxcImJvb2xlYW5cIj09dHlwZW9mIGE/Yy5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dGhpcy5hbmltYXRlKGdiKGIsITApLGEsZCxlKX19KSxyLmVhY2goe3NsaWRlRG93bjpnYihcInNob3dcIiksc2xpZGVVcDpnYihcImhpZGVcIiksc2xpZGVUb2dnbGU6Z2IoXCJ0b2dnbGVcIiksZmFkZUluOntvcGFjaXR5Olwic2hvd1wifSxmYWRlT3V0OntvcGFjaXR5OlwiaGlkZVwifSxmYWRlVG9nZ2xlOntvcGFjaXR5OlwidG9nZ2xlXCJ9fSxmdW5jdGlvbihhLGIpe3IuZm5bYV09ZnVuY3Rpb24oYSxjLGQpe3JldHVybiB0aGlzLmFuaW1hdGUoYixhLGMsZCl9fSksci50aW1lcnM9W10sci5meC50aWNrPWZ1bmN0aW9uKCl7dmFyIGEsYj0wLGM9ci50aW1lcnM7Zm9yKGFiPXIubm93KCk7YjxjLmxlbmd0aDtiKyspYT1jW2JdLGEoKXx8Y1tiXSE9PWF8fGMuc3BsaWNlKGItLSwxKTtjLmxlbmd0aHx8ci5meC5zdG9wKCksYWI9dm9pZCAwfSxyLmZ4LnRpbWVyPWZ1bmN0aW9uKGEpe3IudGltZXJzLnB1c2goYSksci5meC5zdGFydCgpfSxyLmZ4LmludGVydmFsPTEzLHIuZnguc3RhcnQ9ZnVuY3Rpb24oKXtiYnx8KGJiPSEwLGViKCkpfSxyLmZ4LnN0b3A9ZnVuY3Rpb24oKXtiYj1udWxsfSxyLmZ4LnNwZWVkcz17c2xvdzo2MDAsZmFzdDoyMDAsX2RlZmF1bHQ6NDAwfSxyLmZuLmRlbGF5PWZ1bmN0aW9uKGIsYyl7cmV0dXJuIGI9ci5meD9yLmZ4LnNwZWVkc1tiXXx8YjpiLGM9Y3x8XCJmeFwiLHRoaXMucXVldWUoYyxmdW5jdGlvbihjLGQpe3ZhciBlPWEuc2V0VGltZW91dChjLGIpO2Quc3RvcD1mdW5jdGlvbigpe2EuY2xlYXJUaW1lb3V0KGUpfX0pfSxmdW5jdGlvbigpe3ZhciBhPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGI9ZC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLGM9Yi5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpO2EudHlwZT1cImNoZWNrYm94XCIsby5jaGVja09uPVwiXCIhPT1hLnZhbHVlLG8ub3B0U2VsZWN0ZWQ9Yy5zZWxlY3RlZCxhPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGEudmFsdWU9XCJ0XCIsYS50eXBlPVwicmFkaW9cIixvLnJhZGlvVmFsdWU9XCJ0XCI9PT1hLnZhbHVlfSgpO3ZhciBsYixtYj1yLmV4cHIuYXR0ckhhbmRsZTtyLmZuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihhLGIpe3JldHVybiBUKHRoaXMsci5hdHRyLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtyLnJlbW92ZUF0dHIodGhpcyxhKX0pfX0pLHIuZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9YS5ub2RlVHlwZTtpZigzIT09ZiYmOCE9PWYmJjIhPT1mKXJldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBhLmdldEF0dHJpYnV0ZT9yLnByb3AoYSxiLGMpOigxPT09ZiYmci5pc1hNTERvYyhhKXx8KGU9ci5hdHRySG9va3NbYi50b0xvd2VyQ2FzZSgpXXx8KHIuZXhwci5tYXRjaC5ib29sLnRlc3QoYik/bGI6dm9pZCAwKSksdm9pZCAwIT09Yz9udWxsPT09Yz92b2lkIHIucmVtb3ZlQXR0cihhLGIpOmUmJlwic2V0XCJpbiBlJiZ2b2lkIDAhPT0oZD1lLnNldChhLGMsYikpP2Q6KGEuc2V0QXR0cmlidXRlKGIsYytcIlwiKSxjKTplJiZcImdldFwiaW4gZSYmbnVsbCE9PShkPWUuZ2V0KGEsYikpP2Q6KGQ9ci5maW5kLmF0dHIoYSxiKSxcclxubnVsbD09ZD92b2lkIDA6ZCkpfSxhdHRySG9va3M6e3R5cGU6e3NldDpmdW5jdGlvbihhLGIpe2lmKCFvLnJhZGlvVmFsdWUmJlwicmFkaW9cIj09PWImJkIoYSxcImlucHV0XCIpKXt2YXIgYz1hLnZhbHVlO3JldHVybiBhLnNldEF0dHJpYnV0ZShcInR5cGVcIixiKSxjJiYoYS52YWx1ZT1jKSxifX19fSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0wLGU9YiYmYi5tYXRjaChMKTtpZihlJiYxPT09YS5ub2RlVHlwZSl3aGlsZShjPWVbZCsrXSlhLnJlbW92ZUF0dHJpYnV0ZShjKX19KSxsYj17c2V0OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYj09PSExP3IucmVtb3ZlQXR0cihhLGMpOmEuc2V0QXR0cmlidXRlKGMsYyksY319LHIuZWFjaChyLmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksZnVuY3Rpb24oYSxiKXt2YXIgYz1tYltiXXx8ci5maW5kLmF0dHI7bWJbYl09ZnVuY3Rpb24oYSxiLGQpe3ZhciBlLGYsZz1iLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGR8fChmPW1iW2ddLG1iW2ddPWUsZT1udWxsIT1jKGEsYixkKT9nOm51bGwsbWJbZ109ZiksZX19KTt2YXIgbmI9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxvYj0vXig/OmF8YXJlYSkkL2k7ci5mbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVCh0aGlzLHIucHJvcCxhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXNbci5wcm9wRml4W2FdfHxhXX0pfX0pLHIuZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9YS5ub2RlVHlwZTtpZigzIT09ZiYmOCE9PWYmJjIhPT1mKXJldHVybiAxPT09ZiYmci5pc1hNTERvYyhhKXx8KGI9ci5wcm9wRml4W2JdfHxiLGU9ci5wcm9wSG9va3NbYl0pLHZvaWQgMCE9PWM/ZSYmXCJzZXRcImluIGUmJnZvaWQgMCE9PShkPWUuc2V0KGEsYyxiKSk/ZDphW2JdPWM6ZSYmXCJnZXRcImluIGUmJm51bGwhPT0oZD1lLmdldChhLGIpKT9kOmFbYl19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihhKXt2YXIgYj1yLmZpbmQuYXR0cihhLFwidGFiaW5kZXhcIik7cmV0dXJuIGI/cGFyc2VJbnQoYiwxMCk6bmIudGVzdChhLm5vZGVOYW1lKXx8b2IudGVzdChhLm5vZGVOYW1lKSYmYS5ocmVmPzA6LTF9fX0scHJvcEZpeDp7XCJmb3JcIjpcImh0bWxGb3JcIixcImNsYXNzXCI6XCJjbGFzc05hbWVcIn19KSxvLm9wdFNlbGVjdGVkfHwoci5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJmIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsbnVsbH0sc2V0OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtiJiYoYi5zZWxlY3RlZEluZGV4LGIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgpfX0pLHIuZWFjaChbXCJ0YWJJbmRleFwiLFwicmVhZE9ubHlcIixcIm1heExlbmd0aFwiLFwiY2VsbFNwYWNpbmdcIixcImNlbGxQYWRkaW5nXCIsXCJyb3dTcGFuXCIsXCJjb2xTcGFuXCIsXCJ1c2VNYXBcIixcImZyYW1lQm9yZGVyXCIsXCJjb250ZW50RWRpdGFibGVcIl0sZnVuY3Rpb24oKXtyLnByb3BGaXhbdGhpcy50b0xvd2VyQ2FzZSgpXT10aGlzfSk7ZnVuY3Rpb24gcGIoYSl7dmFyIGI9YS5tYXRjaChMKXx8W107cmV0dXJuIGIuam9pbihcIiBcIil9ZnVuY3Rpb24gcWIoYSl7cmV0dXJuIGEuZ2V0QXR0cmlidXRlJiZhLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwifXIuZm4uZXh0ZW5kKHthZGRDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpPTA7aWYoci5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7cih0aGlzKS5hZGRDbGFzcyhhLmNhbGwodGhpcyxiLHFiKHRoaXMpKSl9KTtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmYSl7Yj1hLm1hdGNoKEwpfHxbXTt3aGlsZShjPXRoaXNbaSsrXSlpZihlPXFiKGMpLGQ9MT09PWMubm9kZVR5cGUmJlwiIFwiK3BiKGUpK1wiIFwiKXtnPTA7d2hpbGUoZj1iW2crK10pZC5pbmRleE9mKFwiIFwiK2YrXCIgXCIpPDAmJihkKz1mK1wiIFwiKTtoPXBiKGQpLGUhPT1oJiZjLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsaCl9fXJldHVybiB0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpPTA7aWYoci5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7cih0aGlzKS5yZW1vdmVDbGFzcyhhLmNhbGwodGhpcyxiLHFiKHRoaXMpKSl9KTtpZighYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5hdHRyKFwiY2xhc3NcIixcIlwiKTtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmYSl7Yj1hLm1hdGNoKEwpfHxbXTt3aGlsZShjPXRoaXNbaSsrXSlpZihlPXFiKGMpLGQ9MT09PWMubm9kZVR5cGUmJlwiIFwiK3BiKGUpK1wiIFwiKXtnPTA7d2hpbGUoZj1iW2crK10pd2hpbGUoZC5pbmRleE9mKFwiIFwiK2YrXCIgXCIpPi0xKWQ9ZC5yZXBsYWNlKFwiIFwiK2YrXCIgXCIsXCIgXCIpO2g9cGIoZCksZSE9PWgmJmMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixoKX19cmV0dXJuIHRoaXN9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKGEsYil7dmFyIGM9dHlwZW9mIGE7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBiJiZcInN0cmluZ1wiPT09Yz9iP3RoaXMuYWRkQ2xhc3MoYSk6dGhpcy5yZW1vdmVDbGFzcyhhKTpyLmlzRnVuY3Rpb24oYSk/dGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3IodGhpcykudG9nZ2xlQ2xhc3MoYS5jYWxsKHRoaXMsYyxxYih0aGlzKSxiKSxiKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiLGQsZSxmO2lmKFwic3RyaW5nXCI9PT1jKXtkPTAsZT1yKHRoaXMpLGY9YS5tYXRjaChMKXx8W107d2hpbGUoYj1mW2QrK10pZS5oYXNDbGFzcyhiKT9lLnJlbW92ZUNsYXNzKGIpOmUuYWRkQ2xhc3MoYil9ZWxzZSB2b2lkIDAhPT1hJiZcImJvb2xlYW5cIiE9PWN8fChiPXFiKHRoaXMpLGImJlcuc2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIsYiksdGhpcy5zZXRBdHRyaWJ1dGUmJnRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixifHxhPT09ITE/XCJcIjpXLmdldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiKXx8XCJcIikpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZD0wO2I9XCIgXCIrYStcIiBcIjt3aGlsZShjPXRoaXNbZCsrXSlpZigxPT09Yy5ub2RlVHlwZSYmKFwiIFwiK3BiKHFiKGMpKStcIiBcIikuaW5kZXhPZihiKT4tMSlyZXR1cm4hMDtyZXR1cm4hMX19KTt2YXIgcmI9L1xcci9nO3IuZm4uZXh0ZW5kKHt2YWw6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGU9dGhpc1swXTt7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZD1yLmlzRnVuY3Rpb24oYSksdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3ZhciBlOzE9PT10aGlzLm5vZGVUeXBlJiYoZT1kP2EuY2FsbCh0aGlzLGMscih0aGlzKS52YWwoKSk6YSxudWxsPT1lP2U9XCJcIjpcIm51bWJlclwiPT10eXBlb2YgZT9lKz1cIlwiOkFycmF5LmlzQXJyYXkoZSkmJihlPXIubWFwKGUsZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjphK1wiXCJ9KSksYj1yLnZhbEhvb2tzW3RoaXMudHlwZV18fHIudmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcInNldFwiaW4gYiYmdm9pZCAwIT09Yi5zZXQodGhpcyxlLFwidmFsdWVcIil8fCh0aGlzLnZhbHVlPWUpKX0pO2lmKGUpcmV0dXJuIGI9ci52YWxIb29rc1tlLnR5cGVdfHxyLnZhbEhvb2tzW2Uubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJnZXRcImluIGImJnZvaWQgMCE9PShjPWIuZ2V0KGUsXCJ2YWx1ZVwiKSk/YzooYz1lLnZhbHVlLFwic3RyaW5nXCI9PXR5cGVvZiBjP2MucmVwbGFjZShyYixcIlwiKTpudWxsPT1jP1wiXCI6Yyl9fX0pLHIuZXh0ZW5kKHt2YWxIb29rczp7b3B0aW9uOntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9ci5maW5kLmF0dHIoYSxcInZhbHVlXCIpO3JldHVybiBudWxsIT1iP2I6cGIoci50ZXh0KGEpKX19LHNlbGVjdDp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlPWEub3B0aW9ucyxmPWEuc2VsZWN0ZWRJbmRleCxnPVwic2VsZWN0LW9uZVwiPT09YS50eXBlLGg9Zz9udWxsOltdLGk9Zz9mKzE6ZS5sZW5ndGg7Zm9yKGQ9ZjwwP2k6Zz9mOjA7ZDxpO2QrKylpZihjPWVbZF0sKGMuc2VsZWN0ZWR8fGQ9PT1mKSYmIWMuZGlzYWJsZWQmJighYy5wYXJlbnROb2RlLmRpc2FibGVkfHwhQihjLnBhcmVudE5vZGUsXCJvcHRncm91cFwiKSkpe2lmKGI9cihjKS52YWwoKSxnKXJldHVybiBiO2gucHVzaChiKX1yZXR1cm4gaH0sc2V0OmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlPWEub3B0aW9ucyxmPXIubWFrZUFycmF5KGIpLGc9ZS5sZW5ndGg7d2hpbGUoZy0tKWQ9ZVtnXSwoZC5zZWxlY3RlZD1yLmluQXJyYXkoci52YWxIb29rcy5vcHRpb24uZ2V0KGQpLGYpPi0xKSYmKGM9ITApO3JldHVybiBjfHwoYS5zZWxlY3RlZEluZGV4PS0xKSxmfX19fSksci5lYWNoKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSxmdW5jdGlvbigpe3IudmFsSG9va3NbdGhpc109e3NldDpmdW5jdGlvbihhLGIpe2lmKEFycmF5LmlzQXJyYXkoYikpcmV0dXJuIGEuY2hlY2tlZD1yLmluQXJyYXkocihhKS52YWwoKSxiKT4tMX19LG8uY2hlY2tPbnx8KHIudmFsSG9va3NbdGhpc10uZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT09YS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKT9cIm9uXCI6YS52YWx1ZX0pfSk7dmFyIHNiPS9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLztyLmV4dGVuZChyLmV2ZW50LHt0cmlnZ2VyOmZ1bmN0aW9uKGIsYyxlLGYpe3ZhciBnLGgsaSxqLGssbSxuLG89W2V8fGRdLHA9bC5jYWxsKGIsXCJ0eXBlXCIpP2IudHlwZTpiLHE9bC5jYWxsKGIsXCJuYW1lc3BhY2VcIik/Yi5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpOltdO2lmKGg9aT1lPWV8fGQsMyE9PWUubm9kZVR5cGUmJjghPT1lLm5vZGVUeXBlJiYhc2IudGVzdChwK3IuZXZlbnQudHJpZ2dlcmVkKSYmKHAuaW5kZXhPZihcIi5cIik+LTEmJihxPXAuc3BsaXQoXCIuXCIpLHA9cS5zaGlmdCgpLHEuc29ydCgpKSxrPXAuaW5kZXhPZihcIjpcIik8MCYmXCJvblwiK3AsYj1iW3IuZXhwYW5kb10/YjpuZXcgci5FdmVudChwLFwib2JqZWN0XCI9PXR5cGVvZiBiJiZiKSxiLmlzVHJpZ2dlcj1mPzI6MyxiLm5hbWVzcGFjZT1xLmpvaW4oXCIuXCIpLGIucm5hbWVzcGFjZT1iLm5hbWVzcGFjZT9uZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrcS5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIik6bnVsbCxiLnJlc3VsdD12b2lkIDAsYi50YXJnZXR8fChiLnRhcmdldD1lKSxjPW51bGw9PWM/W2JdOnIubWFrZUFycmF5KGMsW2JdKSxuPXIuZXZlbnQuc3BlY2lhbFtwXXx8e30sZnx8IW4udHJpZ2dlcnx8bi50cmlnZ2VyLmFwcGx5KGUsYykhPT0hMSkpe2lmKCFmJiYhbi5ub0J1YmJsZSYmIXIuaXNXaW5kb3coZSkpe2ZvcihqPW4uZGVsZWdhdGVUeXBlfHxwLHNiLnRlc3QoaitwKXx8KGg9aC5wYXJlbnROb2RlKTtoO2g9aC5wYXJlbnROb2RlKW8ucHVzaChoKSxpPWg7aT09PShlLm93bmVyRG9jdW1lbnR8fGQpJiZvLnB1c2goaS5kZWZhdWx0Vmlld3x8aS5wYXJlbnRXaW5kb3d8fGEpfWc9MDt3aGlsZSgoaD1vW2crK10pJiYhYi5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWIudHlwZT1nPjE/ajpuLmJpbmRUeXBlfHxwLG09KFcuZ2V0KGgsXCJldmVudHNcIil8fHt9KVtiLnR5cGVdJiZXLmdldChoLFwiaGFuZGxlXCIpLG0mJm0uYXBwbHkoaCxjKSxtPWsmJmhba10sbSYmbS5hcHBseSYmVShoKSYmKGIucmVzdWx0PW0uYXBwbHkoaCxjKSxiLnJlc3VsdD09PSExJiZiLnByZXZlbnREZWZhdWx0KCkpO3JldHVybiBiLnR5cGU9cCxmfHxiLmlzRGVmYXVsdFByZXZlbnRlZCgpfHxuLl9kZWZhdWx0JiZuLl9kZWZhdWx0LmFwcGx5KG8ucG9wKCksYykhPT0hMXx8IVUoZSl8fGsmJnIuaXNGdW5jdGlvbihlW3BdKSYmIXIuaXNXaW5kb3coZSkmJihpPWVba10saSYmKGVba109bnVsbCksci5ldmVudC50cmlnZ2VyZWQ9cCxlW3BdKCksci5ldmVudC50cmlnZ2VyZWQ9dm9pZCAwLGkmJihlW2tdPWkpKSxiLnJlc3VsdH19LHNpbXVsYXRlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1yLmV4dGVuZChuZXcgci5FdmVudCxjLHt0eXBlOmEsaXNTaW11bGF0ZWQ6ITB9KTtyLmV2ZW50LnRyaWdnZXIoZCxudWxsLGIpfX0pLHIuZm4uZXh0ZW5kKHt0cmlnZ2VyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3IuZXZlbnQudHJpZ2dlcihhLGIsdGhpcyl9KX0sdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzWzBdO2lmKGMpcmV0dXJuIHIuZXZlbnQudHJpZ2dlcihhLGIsYywhMCl9fSksci5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IHJlc2l6ZSBzY3JvbGwgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe3IuZm5bYl09ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4wP3RoaXMub24oYixudWxsLGEsYyk6dGhpcy50cmlnZ2VyKGIpfX0pLHIuZm4uZXh0ZW5kKHtob3ZlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm1vdXNlZW50ZXIoYSkubW91c2VsZWF2ZShifHxhKX19KSxvLmZvY3VzaW49XCJvbmZvY3VzaW5cImluIGEsby5mb2N1c2lufHxyLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPWZ1bmN0aW9uKGEpe3IuZXZlbnQuc2ltdWxhdGUoYixhLnRhcmdldCxyLmV2ZW50LmZpeChhKSl9O3IuZXZlbnQuc3BlY2lhbFtiXT17c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZD10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsZT1XLmFjY2VzcyhkLGIpO2V8fGQuYWRkRXZlbnRMaXN0ZW5lcihhLGMsITApLFcuYWNjZXNzKGQsYiwoZXx8MCkrMSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9Vy5hY2Nlc3MoZCxiKS0xO2U/Vy5hY2Nlc3MoZCxiLGUpOihkLnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxjLCEwKSxXLnJlbW92ZShkLGIpKX19fSk7dmFyIHRiPWEubG9jYXRpb24sdWI9ci5ub3coKSx2Yj0vXFw/LztyLnBhcnNlWE1MPWZ1bmN0aW9uKGIpe3ZhciBjO2lmKCFifHxcInN0cmluZ1wiIT10eXBlb2YgYilyZXR1cm4gbnVsbDt0cnl7Yz0obmV3IGEuRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcoYixcInRleHQveG1sXCIpfWNhdGNoKGQpe2M9dm9pZCAwfXJldHVybiBjJiYhYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aHx8ci5lcnJvcihcIkludmFsaWQgWE1MOiBcIitiKSxjfTt2YXIgd2I9L1xcW1xcXSQvLHhiPS9cXHI/XFxuL2cseWI9L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLHpiPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtmdW5jdGlvbiBBYihhLGIsYyxkKXt2YXIgZTtpZihBcnJheS5pc0FycmF5KGIpKXIuZWFjaChiLGZ1bmN0aW9uKGIsZSl7Y3x8d2IudGVzdChhKT9kKGEsZSk6QWIoYStcIltcIisoXCJvYmplY3RcIj09dHlwZW9mIGUmJm51bGwhPWU/YjpcIlwiKStcIl1cIixlLGMsZCl9KTtlbHNlIGlmKGN8fFwib2JqZWN0XCIhPT1yLnR5cGUoYikpZChhLGIpO2Vsc2UgZm9yKGUgaW4gYilBYihhK1wiW1wiK2UrXCJdXCIsYltlXSxjLGQpfXIucGFyYW09ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9ZnVuY3Rpb24oYSxiKXt2YXIgYz1yLmlzRnVuY3Rpb24oYik/YigpOmI7ZFtkLmxlbmd0aF09ZW5jb2RlVVJJQ29tcG9uZW50KGEpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChudWxsPT1jP1wiXCI6Yyl9O2lmKEFycmF5LmlzQXJyYXkoYSl8fGEuanF1ZXJ5JiYhci5pc1BsYWluT2JqZWN0KGEpKXIuZWFjaChhLGZ1bmN0aW9uKCl7ZSh0aGlzLm5hbWUsdGhpcy52YWx1ZSl9KTtlbHNlIGZvcihjIGluIGEpQWIoYyxhW2NdLGIsZSk7cmV0dXJuIGQuam9pbihcIiZcIil9LHIuZm4uZXh0ZW5kKHtzZXJpYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4gci5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpfSxzZXJpYWxpemVBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBhPXIucHJvcCh0aGlzLFwiZWxlbWVudHNcIik7cmV0dXJuIGE/ci5tYWtlQXJyYXkoYSk6dGhpc30pLmZpbHRlcihmdW5jdGlvbigpe3ZhciBhPXRoaXMudHlwZTtyZXR1cm4gdGhpcy5uYW1lJiYhcih0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSYmemIudGVzdCh0aGlzLm5vZGVOYW1lKSYmIXliLnRlc3QoYSkmJih0aGlzLmNoZWNrZWR8fCFqYS50ZXN0KGEpKX0pLm1hcChmdW5jdGlvbihhLGIpe3ZhciBjPXIodGhpcykudmFsKCk7cmV0dXJuIG51bGw9PWM/bnVsbDpBcnJheS5pc0FycmF5KGMpP3IubWFwKGMsZnVuY3Rpb24oYSl7cmV0dXJue25hbWU6Yi5uYW1lLHZhbHVlOmEucmVwbGFjZSh4YixcIlxcclxcblwiKX19KTp7bmFtZTpiLm5hbWUsdmFsdWU6Yy5yZXBsYWNlKHhiLFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pO3ZhciBCYj0vJTIwL2csQ2I9LyMuKiQvLERiPS8oWz8mXSlfPVteJl0qLyxFYj0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL2dtLEZiPS9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLEdiPS9eKD86R0VUfEhFQUQpJC8sSGI9L15cXC9cXC8vLEliPXt9LEpiPXt9LEtiPVwiKi9cIi5jb25jYXQoXCIqXCIpLExiPWQuY3JlYXRlRWxlbWVudChcImFcIik7TGIuaHJlZj10Yi5ocmVmO2Z1bmN0aW9uIE1iKGEpe3JldHVybiBmdW5jdGlvbihiLGMpe1wic3RyaW5nXCIhPXR5cGVvZiBiJiYoYz1iLGI9XCIqXCIpO3ZhciBkLGU9MCxmPWIudG9Mb3dlckNhc2UoKS5tYXRjaChMKXx8W107aWYoci5pc0Z1bmN0aW9uKGMpKXdoaWxlKGQ9ZltlKytdKVwiK1wiPT09ZFswXT8oZD1kLnNsaWNlKDEpfHxcIipcIiwoYVtkXT1hW2RdfHxbXSkudW5zaGlmdChjKSk6KGFbZF09YVtkXXx8W10pLnB1c2goYyl9fWZ1bmN0aW9uIE5iKGEsYixjLGQpe3ZhciBlPXt9LGY9YT09PUpiO2Z1bmN0aW9uIGcoaCl7dmFyIGk7cmV0dXJuIGVbaF09ITAsci5lYWNoKGFbaF18fFtdLGZ1bmN0aW9uKGEsaCl7dmFyIGo9aChiLGMsZCk7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGp8fGZ8fGVbal0/Zj8hKGk9aik6dm9pZCAwOihiLmRhdGFUeXBlcy51bnNoaWZ0KGopLGcoaiksITEpfSksaX1yZXR1cm4gZyhiLmRhdGFUeXBlc1swXSl8fCFlW1wiKlwiXSYmZyhcIipcIil9ZnVuY3Rpb24gT2IoYSxiKXt2YXIgYyxkLGU9ci5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnN8fHt9O2ZvcihjIGluIGIpdm9pZCAwIT09YltjXSYmKChlW2NdP2E6ZHx8KGQ9e30pKVtjXT1iW2NdKTtyZXR1cm4gZCYmci5leHRlbmQoITAsYSxkKSxhfWZ1bmN0aW9uIFBiKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY29udGVudHMsaT1hLmRhdGFUeXBlczt3aGlsZShcIipcIj09PWlbMF0paS5zaGlmdCgpLHZvaWQgMD09PWQmJihkPWEubWltZVR5cGV8fGIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIikpO2lmKGQpZm9yKGUgaW4gaClpZihoW2VdJiZoW2VdLnRlc3QoZCkpe2kudW5zaGlmdChlKTticmVha31pZihpWzBdaW4gYylmPWlbMF07ZWxzZXtmb3IoZSBpbiBjKXtpZighaVswXXx8YS5jb252ZXJ0ZXJzW2UrXCIgXCIraVswXV0pe2Y9ZTticmVha31nfHwoZz1lKX1mPWZ8fGd9aWYoZilyZXR1cm4gZiE9PWlbMF0mJmkudW5zaGlmdChmKSxjW2ZdfWZ1bmN0aW9uIFFiKGEsYixjLGQpe3ZhciBlLGYsZyxoLGksaj17fSxrPWEuZGF0YVR5cGVzLnNsaWNlKCk7aWYoa1sxXSlmb3IoZyBpbiBhLmNvbnZlcnRlcnMpaltnLnRvTG93ZXJDYXNlKCldPWEuY29udmVydGVyc1tnXTtmPWsuc2hpZnQoKTt3aGlsZShmKWlmKGEucmVzcG9uc2VGaWVsZHNbZl0mJihjW2EucmVzcG9uc2VGaWVsZHNbZl1dPWIpLCFpJiZkJiZhLmRhdGFGaWx0ZXImJihiPWEuZGF0YUZpbHRlcihiLGEuZGF0YVR5cGUpKSxpPWYsZj1rLnNoaWZ0KCkpaWYoXCIqXCI9PT1mKWY9aTtlbHNlIGlmKFwiKlwiIT09aSYmaSE9PWYpe2lmKGc9altpK1wiIFwiK2ZdfHxqW1wiKiBcIitmXSwhZylmb3IoZSBpbiBqKWlmKGg9ZS5zcGxpdChcIiBcIiksaFsxXT09PWYmJihnPWpbaStcIiBcIitoWzBdXXx8altcIiogXCIraFswXV0pKXtnPT09ITA/Zz1qW2VdOmpbZV0hPT0hMCYmKGY9aFswXSxrLnVuc2hpZnQoaFsxXSkpO2JyZWFrfWlmKGchPT0hMClpZihnJiZhW1widGhyb3dzXCJdKWI9ZyhiKTtlbHNlIHRyeXtiPWcoYil9Y2F0Y2gobCl7cmV0dXJue3N0YXRlOlwicGFyc2VyZXJyb3JcIixlcnJvcjpnP2w6XCJObyBjb252ZXJzaW9uIGZyb20gXCIraStcIiB0byBcIitmfX19cmV0dXJue3N0YXRlOlwic3VjY2Vzc1wiLGRhdGE6Yn19ci5leHRlbmQoe2FjdGl2ZTowLGxhc3RNb2RpZmllZDp7fSxldGFnOnt9LGFqYXhTZXR0aW5nczp7dXJsOnRiLmhyZWYsdHlwZTpcIkdFVFwiLGlzTG9jYWw6RmIudGVzdCh0Yi5wcm90b2NvbCksZ2xvYmFsOiEwLHByb2Nlc3NEYXRhOiEwLGFzeW5jOiEwLGNvbnRlbnRUeXBlOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsYWNjZXB0czp7XCIqXCI6S2IsdGV4dDpcInRleHQvcGxhaW5cIixodG1sOlwidGV4dC9odG1sXCIseG1sOlwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLGpzb246XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIn0sY29udGVudHM6e3htbDovXFxieG1sXFxiLyxodG1sOi9cXGJodG1sLyxqc29uOi9cXGJqc29uXFxiL30scmVzcG9uc2VGaWVsZHM6e3htbDpcInJlc3BvbnNlWE1MXCIsdGV4dDpcInJlc3BvbnNlVGV4dFwiLGpzb246XCJyZXNwb25zZUpTT05cIn0sY29udmVydGVyczp7XCIqIHRleHRcIjpTdHJpbmcsXCJ0ZXh0IGh0bWxcIjohMCxcInRleHQganNvblwiOkpTT04ucGFyc2UsXCJ0ZXh0IHhtbFwiOnIucGFyc2VYTUx9LGZsYXRPcHRpb25zOnt1cmw6ITAsY29udGV4dDohMH19LGFqYXhTZXR1cDpmdW5jdGlvbihhLGIpe3JldHVybiBiP09iKE9iKGEsci5hamF4U2V0dGluZ3MpLGIpOk9iKHIuYWpheFNldHRpbmdzLGEpfSxhamF4UHJlZmlsdGVyOk1iKEliKSxhamF4VHJhbnNwb3J0Ok1iKEpiKSxhamF4OmZ1bmN0aW9uKGIsYyl7XCJvYmplY3RcIj09dHlwZW9mIGImJihjPWIsYj12b2lkIDApLGM9Y3x8e307dmFyIGUsZixnLGgsaSxqLGssbCxtLG4sbz1yLmFqYXhTZXR1cCh7fSxjKSxwPW8uY29udGV4dHx8byxxPW8uY29udGV4dCYmKHAubm9kZVR5cGV8fHAuanF1ZXJ5KT9yKHApOnIuZXZlbnQscz1yLkRlZmVycmVkKCksdD1yLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHU9by5zdGF0dXNDb2RlfHx7fSx2PXt9LHc9e30seD1cImNhbmNlbGVkXCIseT17cmVhZHlTdGF0ZTowLGdldFJlc3BvbnNlSGVhZGVyOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKGspe2lmKCFoKXtoPXt9O3doaWxlKGI9RWIuZXhlYyhnKSloW2JbMV0udG9Mb3dlckNhc2UoKV09YlsyXX1iPWhbYS50b0xvd2VyQ2FzZSgpXX1yZXR1cm4gbnVsbD09Yj9udWxsOmJ9LGdldEFsbFJlc3BvbnNlSGVhZGVyczpmdW5jdGlvbigpe3JldHVybiBrP2c6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihhLGIpe3JldHVybiBudWxsPT1rJiYoYT13W2EudG9Mb3dlckNhc2UoKV09d1thLnRvTG93ZXJDYXNlKCldfHxhLHZbYV09YiksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09ayYmKG8ubWltZVR5cGU9YSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihhKXt2YXIgYjtpZihhKWlmKGspeS5hbHdheXMoYVt5LnN0YXR1c10pO2Vsc2UgZm9yKGIgaW4gYSl1W2JdPVt1W2JdLGFbYl1dO3JldHVybiB0aGlzfSxhYm9ydDpmdW5jdGlvbihhKXt2YXIgYj1hfHx4O3JldHVybiBlJiZlLmFib3J0KGIpLEEoMCxiKSx0aGlzfX07aWYocy5wcm9taXNlKHkpLG8udXJsPSgoYnx8by51cmx8fHRiLmhyZWYpK1wiXCIpLnJlcGxhY2UoSGIsdGIucHJvdG9jb2wrXCIvL1wiKSxvLnR5cGU9Yy5tZXRob2R8fGMudHlwZXx8by5tZXRob2R8fG8udHlwZSxvLmRhdGFUeXBlcz0oby5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goTCl8fFtcIlwiXSxudWxsPT1vLmNyb3NzRG9tYWluKXtqPWQuY3JlYXRlRWxlbWVudChcImFcIik7dHJ5e2ouaHJlZj1vLnVybCxqLmhyZWY9ai5ocmVmLG8uY3Jvc3NEb21haW49TGIucHJvdG9jb2wrXCIvL1wiK0xiLmhvc3QhPWoucHJvdG9jb2wrXCIvL1wiK2ouaG9zdH1jYXRjaCh6KXtvLmNyb3NzRG9tYWluPSEwfX1pZihvLmRhdGEmJm8ucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiBvLmRhdGEmJihvLmRhdGE9ci5wYXJhbShvLmRhdGEsby50cmFkaXRpb25hbCkpLE5iKEliLG8sYyx5KSxrKXJldHVybiB5O2w9ci5ldmVudCYmby5nbG9iYWwsbCYmMD09PXIuYWN0aXZlKysmJnIuZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKSxvLnR5cGU9by50eXBlLnRvVXBwZXJDYXNlKCksby5oYXNDb250ZW50PSFHYi50ZXN0KG8udHlwZSksZj1vLnVybC5yZXBsYWNlKENiLFwiXCIpLG8uaGFzQ29udGVudD9vLmRhdGEmJm8ucHJvY2Vzc0RhdGEmJjA9PT0oby5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmKG8uZGF0YT1vLmRhdGEucmVwbGFjZShCYixcIitcIikpOihuPW8udXJsLnNsaWNlKGYubGVuZ3RoKSxvLmRhdGEmJihmKz0odmIudGVzdChmKT9cIiZcIjpcIj9cIikrby5kYXRhLGRlbGV0ZSBvLmRhdGEpLG8uY2FjaGU9PT0hMSYmKGY9Zi5yZXBsYWNlKERiLFwiJDFcIiksbj0odmIudGVzdChmKT9cIiZcIjpcIj9cIikrXCJfPVwiK3ViKysgK24pLG8udXJsPWYrbiksby5pZk1vZGlmaWVkJiYoci5sYXN0TW9kaWZpZWRbZl0mJnkuc2V0UmVxdWVzdEhlYWRlcihcIklmLU1vZGlmaWVkLVNpbmNlXCIsci5sYXN0TW9kaWZpZWRbZl0pLHIuZXRhZ1tmXSYmeS5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLHIuZXRhZ1tmXSkpLChvLmRhdGEmJm8uaGFzQ29udGVudCYmby5jb250ZW50VHlwZSE9PSExfHxjLmNvbnRlbnRUeXBlKSYmeS5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsby5jb250ZW50VHlwZSkseS5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsby5kYXRhVHlwZXNbMF0mJm8uYWNjZXB0c1tvLmRhdGFUeXBlc1swXV0/by5hY2NlcHRzW28uZGF0YVR5cGVzWzBdXSsoXCIqXCIhPT1vLmRhdGFUeXBlc1swXT9cIiwgXCIrS2IrXCI7IHE9MC4wMVwiOlwiXCIpOm8uYWNjZXB0c1tcIipcIl0pO2ZvcihtIGluIG8uaGVhZGVycyl5LnNldFJlcXVlc3RIZWFkZXIobSxvLmhlYWRlcnNbbV0pO2lmKG8uYmVmb3JlU2VuZCYmKG8uYmVmb3JlU2VuZC5jYWxsKHAseSxvKT09PSExfHxrKSlyZXR1cm4geS5hYm9ydCgpO2lmKHg9XCJhYm9ydFwiLHQuYWRkKG8uY29tcGxldGUpLHkuZG9uZShvLnN1Y2Nlc3MpLHkuZmFpbChvLmVycm9yKSxlPU5iKEpiLG8sYyx5KSl7aWYoeS5yZWFkeVN0YXRlPTEsbCYmcS50cmlnZ2VyKFwiYWpheFNlbmRcIixbeSxvXSksaylyZXR1cm4geTtvLmFzeW5jJiZvLnRpbWVvdXQ+MCYmKGk9YS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eS5hYm9ydChcInRpbWVvdXRcIil9LG8udGltZW91dCkpO3RyeXtrPSExLGUuc2VuZCh2LEEpfWNhdGNoKHope2lmKGspdGhyb3cgejtBKC0xLHopfX1lbHNlIEEoLTEsXCJObyBUcmFuc3BvcnRcIik7ZnVuY3Rpb24gQShiLGMsZCxoKXt2YXIgaixtLG4sdix3LHg9YztrfHwoaz0hMCxpJiZhLmNsZWFyVGltZW91dChpKSxlPXZvaWQgMCxnPWh8fFwiXCIseS5yZWFkeVN0YXRlPWI+MD80OjAsaj1iPj0yMDAmJmI8MzAwfHwzMDQ9PT1iLGQmJih2PVBiKG8seSxkKSksdj1RYihvLHYseSxqKSxqPyhvLmlmTW9kaWZpZWQmJih3PXkuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpLHcmJihyLmxhc3RNb2RpZmllZFtmXT13KSx3PXkuZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpLHcmJihyLmV0YWdbZl09dykpLDIwND09PWJ8fFwiSEVBRFwiPT09by50eXBlP3g9XCJub2NvbnRlbnRcIjozMDQ9PT1iP3g9XCJub3Rtb2RpZmllZFwiOih4PXYuc3RhdGUsbT12LmRhdGEsbj12LmVycm9yLGo9IW4pKToobj14LCFiJiZ4fHwoeD1cImVycm9yXCIsYjwwJiYoYj0wKSkpLHkuc3RhdHVzPWIseS5zdGF0dXNUZXh0PShjfHx4KStcIlwiLGo/cy5yZXNvbHZlV2l0aChwLFttLHgseV0pOnMucmVqZWN0V2l0aChwLFt5LHgsbl0pLHkuc3RhdHVzQ29kZSh1KSx1PXZvaWQgMCxsJiZxLnRyaWdnZXIoaj9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbeSxvLGo/bTpuXSksdC5maXJlV2l0aChwLFt5LHhdKSxsJiYocS50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW3ksb10pLC0tci5hY3RpdmV8fHIuZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIHl9LGdldEpTT046ZnVuY3Rpb24oYSxiLGMpe3JldHVybiByLmdldChhLGIsYyxcImpzb25cIil9LGdldFNjcmlwdDpmdW5jdGlvbihhLGIpe3JldHVybiByLmdldChhLHZvaWQgMCxiLFwic2NyaXB0XCIpfX0pLHIuZWFjaChbXCJnZXRcIixcInBvc3RcIl0sZnVuY3Rpb24oYSxiKXtyW2JdPWZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiByLmlzRnVuY3Rpb24oYykmJihlPWV8fGQsZD1jLGM9dm9pZCAwKSxyLmFqYXgoci5leHRlbmQoe3VybDphLHR5cGU6YixkYXRhVHlwZTplLGRhdGE6YyxzdWNjZXNzOmR9LHIuaXNQbGFpbk9iamVjdChhKSYmYSkpfX0pLHIuX2V2YWxVcmw9ZnVuY3Rpb24oYSl7cmV0dXJuIHIuYWpheCh7dXJsOmEsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsY2FjaGU6ITAsYXN5bmM6ITEsZ2xvYmFsOiExLFwidGhyb3dzXCI6ITB9KX0sci5mbi5leHRlbmQoe3dyYXBBbGw6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIHRoaXNbMF0mJihyLmlzRnVuY3Rpb24oYSkmJihhPWEuY2FsbCh0aGlzWzBdKSksYj1yKGEsdGhpc1swXS5vd25lckRvY3VtZW50KS5lcSgwKS5jbG9uZSghMCksdGhpc1swXS5wYXJlbnROb2RlJiZiLmluc2VydEJlZm9yZSh0aGlzWzBdKSxiLm1hcChmdW5jdGlvbigpe3ZhciBhPXRoaXM7d2hpbGUoYS5maXJzdEVsZW1lbnRDaGlsZClhPWEuZmlyc3RFbGVtZW50Q2hpbGQ7cmV0dXJuIGF9KS5hcHBlbmQodGhpcykpLHRoaXN9LHdyYXBJbm5lcjpmdW5jdGlvbihhKXtyZXR1cm4gci5pc0Z1bmN0aW9uKGEpP3RoaXMuZWFjaChmdW5jdGlvbihiKXtyKHRoaXMpLndyYXBJbm5lcihhLmNhbGwodGhpcyxiKSl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1yKHRoaXMpLGM9Yi5jb250ZW50cygpO2MubGVuZ3RoP2Mud3JhcEFsbChhKTpiLmFwcGVuZChhKX0pfSx3cmFwOmZ1bmN0aW9uKGEpe3ZhciBiPXIuaXNGdW5jdGlvbihhKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3IodGhpcykud3JhcEFsbChiP2EuY2FsbCh0aGlzLGMpOmEpfSl9LHVud3JhcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wYXJlbnQoYSkubm90KFwiYm9keVwiKS5lYWNoKGZ1bmN0aW9uKCl7cih0aGlzKS5yZXBsYWNlV2l0aCh0aGlzLmNoaWxkTm9kZXMpfSksdGhpc319KSxyLmV4cHIucHNldWRvcy5oaWRkZW49ZnVuY3Rpb24oYSl7cmV0dXJuIXIuZXhwci5wc2V1ZG9zLnZpc2libGUoYSl9LHIuZXhwci5wc2V1ZG9zLnZpc2libGU9ZnVuY3Rpb24oYSl7cmV0dXJuISEoYS5vZmZzZXRXaWR0aHx8YS5vZmZzZXRIZWlnaHR8fGEuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpfSxyLmFqYXhTZXR0aW5ncy54aHI9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG5ldyBhLlhNTEh0dHBSZXF1ZXN0fWNhdGNoKGIpe319O3ZhciBSYj17MDoyMDAsMTIyMzoyMDR9LFNiPXIuYWpheFNldHRpbmdzLnhocigpO28uY29ycz0hIVNiJiZcIndpdGhDcmVkZW50aWFsc1wiaW4gU2Isby5hamF4PVNiPSEhU2Isci5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKGIpe3ZhciBjLGQ7aWYoby5jb3JzfHxTYiYmIWIuY3Jvc3NEb21haW4pcmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSxmKXt2YXIgZyxoPWIueGhyKCk7aWYoaC5vcGVuKGIudHlwZSxiLnVybCxiLmFzeW5jLGIudXNlcm5hbWUsYi5wYXNzd29yZCksYi54aHJGaWVsZHMpZm9yKGcgaW4gYi54aHJGaWVsZHMpaFtnXT1iLnhockZpZWxkc1tnXTtiLm1pbWVUeXBlJiZoLm92ZXJyaWRlTWltZVR5cGUmJmgub3ZlcnJpZGVNaW1lVHlwZShiLm1pbWVUeXBlKSxiLmNyb3NzRG9tYWlufHxlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXXx8KGVbXCJYLVJlcXVlc3RlZC1XaXRoXCJdPVwiWE1MSHR0cFJlcXVlc3RcIik7Zm9yKGcgaW4gZSloLnNldFJlcXVlc3RIZWFkZXIoZyxlW2ddKTtjPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe2MmJihjPWQ9aC5vbmxvYWQ9aC5vbmVycm9yPWgub25hYm9ydD1oLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLFwiYWJvcnRcIj09PWE/aC5hYm9ydCgpOlwiZXJyb3JcIj09PWE/XCJudW1iZXJcIiE9dHlwZW9mIGguc3RhdHVzP2YoMCxcImVycm9yXCIpOmYoaC5zdGF0dXMsaC5zdGF0dXNUZXh0KTpmKFJiW2guc3RhdHVzXXx8aC5zdGF0dXMsaC5zdGF0dXNUZXh0LFwidGV4dFwiIT09KGgucmVzcG9uc2VUeXBlfHxcInRleHRcIil8fFwic3RyaW5nXCIhPXR5cGVvZiBoLnJlc3BvbnNlVGV4dD97YmluYXJ5OmgucmVzcG9uc2V9Ont0ZXh0OmgucmVzcG9uc2VUZXh0fSxoLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSl9fSxoLm9ubG9hZD1jKCksZD1oLm9uZXJyb3I9YyhcImVycm9yXCIpLHZvaWQgMCE9PWgub25hYm9ydD9oLm9uYWJvcnQ9ZDpoLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpezQ9PT1oLnJlYWR5U3RhdGUmJmEuc2V0VGltZW91dChmdW5jdGlvbigpe2MmJmQoKX0pfSxjPWMoXCJhYm9ydFwiKTt0cnl7aC5zZW5kKGIuaGFzQ29udGVudCYmYi5kYXRhfHxudWxsKX1jYXRjaChpKXtpZihjKXRocm93IGl9fSxhYm9ydDpmdW5jdGlvbigpe2MmJmMoKX19fSksci5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uKGEpe2EuY3Jvc3NEb21haW4mJihhLmNvbnRlbnRzLnNjcmlwdD0hMSl9KSxyLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovXFxiKD86amF2YXxlY21hKXNjcmlwdFxcYi99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihhKXtyZXR1cm4gci5nbG9iYWxFdmFsKGEpLGF9fX0pLHIuYWpheFByZWZpbHRlcihcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe3ZvaWQgMD09PWEuY2FjaGUmJihhLmNhY2hlPSExKSxhLmNyb3NzRG9tYWluJiYoYS50eXBlPVwiR0VUXCIpfSksci5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24oYSl7aWYoYS5jcm9zc0RvbWFpbil7dmFyIGIsYztyZXR1cm57c2VuZDpmdW5jdGlvbihlLGYpe2I9cihcIjxzY3JpcHQ+XCIpLnByb3Aoe2NoYXJzZXQ6YS5zY3JpcHRDaGFyc2V0LHNyYzphLnVybH0pLm9uKFwibG9hZCBlcnJvclwiLGM9ZnVuY3Rpb24oYSl7Yi5yZW1vdmUoKSxjPW51bGwsYSYmZihcImVycm9yXCI9PT1hLnR5cGU/NDA0OjIwMCxhLnR5cGUpfSksZC5oZWFkLmFwcGVuZENoaWxkKGJbMF0pfSxhYm9ydDpmdW5jdGlvbigpe2MmJmMoKX19fX0pO3ZhciBUYj1bXSxVYj0vKD0pXFw/KD89JnwkKXxcXD9cXD8vO3IuYWpheFNldHVwKHtqc29ucDpcImNhbGxiYWNrXCIsanNvbnBDYWxsYmFjazpmdW5jdGlvbigpe3ZhciBhPVRiLnBvcCgpfHxyLmV4cGFuZG8rXCJfXCIrdWIrKztyZXR1cm4gdGhpc1thXT0hMCxhfX0pLHIuYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbihiLGMsZCl7dmFyIGUsZixnLGg9Yi5qc29ucCE9PSExJiYoVWIudGVzdChiLnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2YgYi5kYXRhJiYwPT09KGIuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJlViLnRlc3QoYi5kYXRhKSYmXCJkYXRhXCIpO2lmKGh8fFwianNvbnBcIj09PWIuZGF0YVR5cGVzWzBdKXJldHVybiBlPWIuanNvbnBDYWxsYmFjaz1yLmlzRnVuY3Rpb24oYi5qc29ucENhbGxiYWNrKT9iLmpzb25wQ2FsbGJhY2soKTpiLmpzb25wQ2FsbGJhY2ssaD9iW2hdPWJbaF0ucmVwbGFjZShVYixcIiQxXCIrZSk6Yi5qc29ucCE9PSExJiYoYi51cmwrPSh2Yi50ZXN0KGIudXJsKT9cIiZcIjpcIj9cIikrYi5qc29ucCtcIj1cIitlKSxiLmNvbnZlcnRlcnNbXCJzY3JpcHQganNvblwiXT1mdW5jdGlvbigpe3JldHVybiBnfHxyLmVycm9yKGUrXCIgd2FzIG5vdCBjYWxsZWRcIiksZ1swXX0sYi5kYXRhVHlwZXNbMF09XCJqc29uXCIsZj1hW2VdLGFbZV09ZnVuY3Rpb24oKXtnPWFyZ3VtZW50c30sZC5hbHdheXMoZnVuY3Rpb24oKXt2b2lkIDA9PT1mP3IoYSkucmVtb3ZlUHJvcChlKTphW2VdPWYsYltlXSYmKGIuanNvbnBDYWxsYmFjaz1jLmpzb25wQ2FsbGJhY2ssVGIucHVzaChlKSksZyYmci5pc0Z1bmN0aW9uKGYpJiZmKGdbMF0pLGc9Zj12b2lkIDB9KSxcInNjcmlwdFwifSksby5jcmVhdGVIVE1MRG9jdW1lbnQ9ZnVuY3Rpb24oKXt2YXIgYT1kLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKS5ib2R5O3JldHVybiBhLmlubmVySFRNTD1cIjxmb3JtPjwvZm9ybT48Zm9ybT48L2Zvcm0+XCIsMj09PWEuY2hpbGROb2Rlcy5sZW5ndGh9KCksci5wYXJzZUhUTUw9ZnVuY3Rpb24oYSxiLGMpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybltdO1wiYm9vbGVhblwiPT10eXBlb2YgYiYmKGM9YixiPSExKTt2YXIgZSxmLGc7cmV0dXJuIGJ8fChvLmNyZWF0ZUhUTUxEb2N1bWVudD8oYj1kLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSxlPWIuY3JlYXRlRWxlbWVudChcImJhc2VcIiksZS5ocmVmPWQubG9jYXRpb24uaHJlZixiLmhlYWQuYXBwZW5kQ2hpbGQoZSkpOmI9ZCksZj1DLmV4ZWMoYSksZz0hYyYmW10sZj9bYi5jcmVhdGVFbGVtZW50KGZbMV0pXTooZj1xYShbYV0sYixnKSxnJiZnLmxlbmd0aCYmcihnKS5yZW1vdmUoKSxyLm1lcmdlKFtdLGYuY2hpbGROb2RlcykpfSxyLmZuLmxvYWQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnPXRoaXMsaD1hLmluZGV4T2YoXCIgXCIpO3JldHVybiBoPi0xJiYoZD1wYihhLnNsaWNlKGgpKSxhPWEuc2xpY2UoMCxoKSksci5pc0Z1bmN0aW9uKGIpPyhjPWIsYj12b2lkIDApOmImJlwib2JqZWN0XCI9PXR5cGVvZiBiJiYoZT1cIlBPU1RcIiksZy5sZW5ndGg+MCYmci5hamF4KHt1cmw6YSx0eXBlOmV8fFwiR0VUXCIsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTpifSkuZG9uZShmdW5jdGlvbihhKXtmPWFyZ3VtZW50cyxnLmh0bWwoZD9yKFwiPGRpdj5cIikuYXBwZW5kKHIucGFyc2VIVE1MKGEpKS5maW5kKGQpOmEpfSkuYWx3YXlzKGMmJmZ1bmN0aW9uKGEsYil7Zy5lYWNoKGZ1bmN0aW9uKCl7Yy5hcHBseSh0aGlzLGZ8fFthLnJlc3BvbnNlVGV4dCxiLGFdKX0pfSksdGhpc30sci5lYWNoKFtcImFqYXhTdGFydFwiLFwiYWpheFN0b3BcIixcImFqYXhDb21wbGV0ZVwiLFwiYWpheEVycm9yXCIsXCJhamF4U3VjY2Vzc1wiLFwiYWpheFNlbmRcIl0sZnVuY3Rpb24oYSxiKXtyLmZuW2JdPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm9uKGIsYSl9fSksci5leHByLnBzZXVkb3MuYW5pbWF0ZWQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHIuZ3JlcChyLnRpbWVycyxmdW5jdGlvbihiKXtyZXR1cm4gYT09PWIuZWxlbX0pLmxlbmd0aH0sci5vZmZzZXQ9e3NldE9mZnNldDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaCxpLGosaz1yLmNzcyhhLFwicG9zaXRpb25cIiksbD1yKGEpLG09e307XCJzdGF0aWNcIj09PWsmJihhLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIiksaD1sLm9mZnNldCgpLGY9ci5jc3MoYSxcInRvcFwiKSxpPXIuY3NzKGEsXCJsZWZ0XCIpLGo9KFwiYWJzb2x1dGVcIj09PWt8fFwiZml4ZWRcIj09PWspJiYoZitpKS5pbmRleE9mKFwiYXV0b1wiKT4tMSxqPyhkPWwucG9zaXRpb24oKSxnPWQudG9wLGU9ZC5sZWZ0KTooZz1wYXJzZUZsb2F0KGYpfHwwLGU9cGFyc2VGbG9hdChpKXx8MCksci5pc0Z1bmN0aW9uKGIpJiYoYj1iLmNhbGwoYSxjLHIuZXh0ZW5kKHt9LGgpKSksbnVsbCE9Yi50b3AmJihtLnRvcD1iLnRvcC1oLnRvcCtnKSxudWxsIT1iLmxlZnQmJihtLmxlZnQ9Yi5sZWZ0LWgubGVmdCtlKSxcInVzaW5nXCJpbiBiP2IudXNpbmcuY2FsbChhLG0pOmwuY3NzKG0pfX0sci5mbi5leHRlbmQoe29mZnNldDpmdW5jdGlvbihhKXtpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiB2b2lkIDA9PT1hP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKGIpe3Iub2Zmc2V0LnNldE9mZnNldCh0aGlzLGEsYil9KTt2YXIgYixjLGQsZSxmPXRoaXNbMF07aWYoZilyZXR1cm4gZi5nZXRDbGllbnRSZWN0cygpLmxlbmd0aD8oZD1mLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGI9Zi5vd25lckRvY3VtZW50LGM9Yi5kb2N1bWVudEVsZW1lbnQsZT1iLmRlZmF1bHRWaWV3LHt0b3A6ZC50b3ArZS5wYWdlWU9mZnNldC1jLmNsaWVudFRvcCxsZWZ0OmQubGVmdCtlLnBhZ2VYT2Zmc2V0LWMuY2xpZW50TGVmdH0pOnt0b3A6MCxsZWZ0OjB9fSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXNbMF0pe3ZhciBhLGIsYz10aGlzWzBdLGQ9e3RvcDowLGxlZnQ6MH07cmV0dXJuXCJmaXhlZFwiPT09ci5jc3MoYyxcInBvc2l0aW9uXCIpP2I9Yy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTooYT10aGlzLm9mZnNldFBhcmVudCgpLGI9dGhpcy5vZmZzZXQoKSxCKGFbMF0sXCJodG1sXCIpfHwoZD1hLm9mZnNldCgpKSxkPXt0b3A6ZC50b3Arci5jc3MoYVswXSxcImJvcmRlclRvcFdpZHRoXCIsITApLGxlZnQ6ZC5sZWZ0K3IuY3NzKGFbMF0sXCJib3JkZXJMZWZ0V2lkdGhcIiwhMCl9KSx7dG9wOmIudG9wLWQudG9wLXIuY3NzKGMsXCJtYXJnaW5Ub3BcIiwhMCksbGVmdDpiLmxlZnQtZC5sZWZ0LXIuY3NzKGMsXCJtYXJnaW5MZWZ0XCIsITApfX19LG9mZnNldFBhcmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBhPXRoaXMub2Zmc2V0UGFyZW50O3doaWxlKGEmJlwic3RhdGljXCI9PT1yLmNzcyhhLFwicG9zaXRpb25cIikpYT1hLm9mZnNldFBhcmVudDtyZXR1cm4gYXx8cmF9KX19KSxyLmVhY2goe3Njcm9sbExlZnQ6XCJwYWdlWE9mZnNldFwiLHNjcm9sbFRvcDpcInBhZ2VZT2Zmc2V0XCJ9LGZ1bmN0aW9uKGEsYil7dmFyIGM9XCJwYWdlWU9mZnNldFwiPT09YjtyLmZuW2FdPWZ1bmN0aW9uKGQpe3JldHVybiBUKHRoaXMsZnVuY3Rpb24oYSxkLGUpe3ZhciBmO3JldHVybiByLmlzV2luZG93KGEpP2Y9YTo5PT09YS5ub2RlVHlwZSYmKGY9YS5kZWZhdWx0Vmlldyksdm9pZCAwPT09ZT9mP2ZbYl06YVtkXTp2b2lkKGY/Zi5zY3JvbGxUbyhjP2YucGFnZVhPZmZzZXQ6ZSxjP2U6Zi5wYWdlWU9mZnNldCk6YVtkXT1lKX0sYSxkLGFyZ3VtZW50cy5sZW5ndGgpfX0pLHIuZWFjaChbXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oYSxiKXtyLmNzc0hvb2tzW2JdPVBhKG8ucGl4ZWxQb3NpdGlvbixmdW5jdGlvbihhLGMpe2lmKGMpcmV0dXJuIGM9T2EoYSxiKSxNYS50ZXN0KGMpP3IoYSkucG9zaXRpb24oKVtiXStcInB4XCI6Y30pfSksci5lYWNoKHtIZWlnaHQ6XCJoZWlnaHRcIixXaWR0aDpcIndpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7ci5lYWNoKHtwYWRkaW5nOlwiaW5uZXJcIithLGNvbnRlbnQ6YixcIlwiOlwib3V0ZXJcIithfSxmdW5jdGlvbihjLGQpe3IuZm5bZF09ZnVuY3Rpb24oZSxmKXt2YXIgZz1hcmd1bWVudHMubGVuZ3RoJiYoY3x8XCJib29sZWFuXCIhPXR5cGVvZiBlKSxoPWN8fChlPT09ITB8fGY9PT0hMD9cIm1hcmdpblwiOlwiYm9yZGVyXCIpO3JldHVybiBUKHRoaXMsZnVuY3Rpb24oYixjLGUpe3ZhciBmO3JldHVybiByLmlzV2luZG93KGIpPzA9PT1kLmluZGV4T2YoXCJvdXRlclwiKT9iW1wiaW5uZXJcIithXTpiLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiK2FdOjk9PT1iLm5vZGVUeXBlPyhmPWIuZG9jdW1lbnRFbGVtZW50LE1hdGgubWF4KGIuYm9keVtcInNjcm9sbFwiK2FdLGZbXCJzY3JvbGxcIithXSxiLmJvZHlbXCJvZmZzZXRcIithXSxmW1wib2Zmc2V0XCIrYV0sZltcImNsaWVudFwiK2FdKSk6dm9pZCAwPT09ZT9yLmNzcyhiLGMsaCk6ci5zdHlsZShiLGMsZSxoKX0sYixnP2U6dm9pZCAwLGcpfX0pfSksci5mbi5leHRlbmQoe2JpbmQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLm9uKGEsbnVsbCxiLGMpfSx1bmJpbmQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5vZmYoYSxudWxsLGIpfSxkZWxlZ2F0ZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5vbihiLGEsYyxkKX0sdW5kZWxlZ2F0ZTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIDE9PT1hcmd1bWVudHMubGVuZ3RoP3RoaXMub2ZmKGEsXCIqKlwiKTp0aGlzLm9mZihiLGF8fFwiKipcIixjKX19KSxyLmhvbGRSZWFkeT1mdW5jdGlvbihhKXthP3IucmVhZHlXYWl0Kys6ci5yZWFkeSghMCl9LHIuaXNBcnJheT1BcnJheS5pc0FycmF5LHIucGFyc2VKU09OPUpTT04ucGFyc2Usci5ub2RlTmFtZT1CLFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lKFwianF1ZXJ5XCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gcn0pO3ZhciBWYj1hLmpRdWVyeSxXYj1hLiQ7cmV0dXJuIHIubm9Db25mbGljdD1mdW5jdGlvbihiKXtyZXR1cm4gYS4kPT09ciYmKGEuJD1XYiksYiYmYS5qUXVlcnk9PT1yJiYoYS5qUXVlcnk9VmIpLHJ9LGJ8fChhLmpRdWVyeT1hLiQ9cikscn0pO1xyXG4iXX0=
