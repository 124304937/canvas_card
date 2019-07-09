var Element = function (tagName, className) {
    this._element = document.createElement(tagName);
    if(typeof className === 'string' && className !== '') {
        this._element.className = className;
    }
    this._visible = true;
};

Element.prototype.show = function () {
    this._element.style.display = '';
    this._visible = true;
    return this;
};

Element.prototype.hide = function () {
    this._element.style.display = 'none';
    this._visible = false;
    return this;
};

Element.prototype.html = function (value) {
    if(typeof value === 'string' && value !== '') {
        this._element.innerHTML = value;
    }
    return this;
}

Element.prototype.element = function () {
    return this._element;
};

Element.prototype.visible = function () {
    return this._visible;
}

module.exports = Element;


//     /**
//      * CSS3动画
//      * @param {string} name 
//      * @param {number} duration 
//      * @param {string} timingFunction ease|linear
//      * @param {number} delay 
//      * @param {number} count 
//      * @param {string} direction normal|reverse|alternate|alternate-reverse
//      * @param {string} fillMode none|forwards|backwards|both
//      */
//     animation (name, duration, timingFunction = 'linear', delay = '0', count = '1', direction = 'normal', fillMode = 'forwards') {
//         let params = [name, duration / 1000 + 'S', timingFunction, delay + 'S', count, direction, fillMode];
//         // this._element.style.animation = this._element.style['-webkit-animation'] = params.join(' ');
//         this._element.style.animation = params.join(' ');
//         return this._element.style.animation;
//         // return this._element.style.animation || this._element.style['-webkit-animation'];
//     }

//     stop () {
//         // this._element.style.animationPlayState = 'paused';
//         this._element.style.animation = '';
//         return this;
//     }

//     /**
//      * 添加节点
//      * @param {Element} child 
//      */
//     append (child) {
//         if(child instanceof Element) {
//             this._element.appendChild(child.element);
//         } else {
//             this._element.appendChild(child);
//         }
//     }

//     remove (child) {
//         if (child) {
//             if (child instanceof Element) {
//                 this._element.removeChild(child.element);
//             } else {
//                 this._element.removeChild(child);
//             }
//         }
//         else{
//             this._element.remove();
//         }
//     }

//     empty () {
//         let array = this._element.children;
//         for (let i = array.length - 1; i >= 0; i--) {
//             this._element.removeChild(array[i]);
//         }
//     }

//     html (value) {
//         if(typeof value === 'string' && value !== '') {
//             this._element.innerHTML = value;
//         }
//         return this._element.innerHTML;
//     }

//     text (value) {
//         if(typeof value === 'string' && value !== '') {
//             this._element.innerHTML = value;
//         }
//         return this._element.innerHTML;
//     }
    
//     css (key, value = null) {
//         if(value !== null) {
//             this._element.style[key] = value;
//         }
//         return this._element.style[key];
//     }

//     /**
//      * 事件侦听，简单兼容不同浏览器
//      * @param {string} event 
//      * @param {function} callback 
//      */
//     on (event, callback) {
//         if(this._element.addEventlistener) {
//             this._element.addEventlistener(event, callback);
//         } else if(this._element.attachEvent) {
//             this._element.attachEvent('on' + event, callback);
//         } else {
//             this._element['on' + event] = callback;
//         }
//     }

//     hover (inCallback, outCallback) {
//         // mouseover和mouseout在进入子节点时也会触发，这里使用mouseenter和mouseleave
//         this.on('mouseenter', inCallback);
//         this.on('mouseleave', outCallback);
//     }

//     addClass (className) {
//         let tmpClassName = this._element.className;
//         if (typeof className === 'string' && className !== '' &&
//             !tmpClassName.split(' ').includes(className))
//         {
//             tmpClassName += ' ' + className;
//             this._element.className = tmpClassName;
//         }
//         return this;
//     }

//     removeClass (className) {
//         let tmpClassName = this._element.className;
//         if (typeof className === 'string' && className !== '') {
//             this._element.className = tmpClassName.split(' ').filter((value) => {
//                 return value !== className && value !== '';
//             }).join(' ');
//         }
//         return this;
//     }

//     hasClass (className) {
//         if(typeof className === 'string' && className !== '') {
//             return this._element.className.indexOf(className) >= 0;
//         }
//         return false;
//     }

//     _offset (direction) {
//         let offsetDir = 'offset' + direction[0].toUpperCase() + direction.substring(1);

//         let realNum = this._element[offsetDir];
//         var positionParent = this._element.offsetParent;

//         while(positionParent !== null) {
//             realNum += positionParent[offsetDir];
//             positionParent = positionParent.offsetParent;
//         }
//         return realNum;
//     }

//     set value (value) {
//         this._element.value = value;
//     }

//     get value () {
//         return this._element.value;
//     }

//     set src (value) {
//         this._element.src = value;
//     }

//     get src () {
//         return this._element.src;
//     }

//     set element (value) {
//         this._element = value;
//     }

//     get element () {
//         return this._element;
//     }

//     get children () {
//         return this._element.children;
//     }

//     get style () {
//         return this._element.style;
//     }

//     get visibled () {
//         return this._visibled;
//     }

//     get width () {
//         // offsetWidth实际获取的是box + border + padding
//         // style.width只能获取行间的样式
//         let width = 0;
//         if (this._element.currentStyle) {
//             // IE
//             width = this._element.currentStyle.width;
//         } else {
//             // 非IE
//             width = getComputedStyle(this.element, false).width;
//         }
//         return parseFloat(width);
//     }

//     get height () {
//         let height = 0;
//         if (this._element.currentStyle) {
//             // IE
//             height = this._element.currentStyle.height;
//         } else {
//             // 非IE
//             height = getComputedStyle(this.element, false).height;
//         }
//         return parseFloat(height);
//     }

//     get offset () {
//         return {
//             left: this._offset('left'),
//             top: this._offset('top')
//         };
//     }

//     get left () {
//         return this._offset('left');
//     }

//     get top () {
//         return this._offset('top');
//     }

//     get parent () {
//         return this._element.parentNode;
//     }
// }
// export default Element;