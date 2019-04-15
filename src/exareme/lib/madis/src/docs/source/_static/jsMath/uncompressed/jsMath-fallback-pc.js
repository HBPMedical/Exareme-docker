/*
 *  jsMath-fallback-pc.js
 *  
 *  Part of the jsMath package for mathematics on the web.
 *
 *  This file makes changes needed for when the TeX fonts are not available
 *  with a browser on the PC.
 *
 *  ---------------------------------------------------------------------
 *
 *  Copyright 2004-2006 by Davide P. Cervone
 * 
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */


/********************************************************************
 *
 *  Here we replace the TeX character mappings by equivalent unicode
 *  points when possible, and adjust the character dimensions
 *  based on the fonts we hope we get them from (the styles are set
 *  to try to use the best characters available in the standard
 *  fonts).
 */

jsMath.Add(jsMath.TeX, {

    cmr10: [
        // 00 - 0F
        {c: '&Gamma;', tclass: 'greek'},
        {c: '&Delta;', tclass: 'greek'},
        {c: '&Theta;', tclass: 'greek'},
        {c: '&Lambda;', tclass: 'greek'},
        {c: '&Xi;', tclass: 'greek'},
        {c: '&Pi;', tclass: 'greek'},
        {c: '&Sigma;', tclass: 'greek'},
        {c: '&Upsilon;', tclass: 'greek'},
        {c: '&Phi;', tclass: 'greek'},
        {c: '&Psi;', tclass: 'greek'},
        {c: '&Omega;', tclass: 'greek'},
        {
            c: 'ff',
            ic: 0.0778,
            krn: {'39': 0.0778, '63': 0.0778, '33': 0.0778, '41': 0.0778, '93': 0.0778},
            lig: {'105': 14, '108': 15},
            tclass: 'normal'
        },
        {c: 'fi', tclass: 'normal'},
        {c: 'fl', tclass: 'normal'},
        {c: 'ffi', tclass: 'normal'},
        {c: 'ffl', tclass: 'normal'},
        // 10 - 1F
        {c: '&#x131;', a: 0, tclass: 'normal'},
        {c: 'j', d: .2, tclass: 'normal'},
        {c: '&#x2CB;', tclass: 'accent'},
        {c: '&#x2CA;', tclass: 'accent'},
        {c: '&#x2C7;', tclass: 'accent'},
        {c: '&#x2D8;', tclass: 'accent'},
        {c: '&#x2C9;', tclass: 'accent'},
        {c: '&#x2DA;', tclass: 'accent'},
        {c: '&#x0327;', tclass: 'normal'},
        {c: '&#xDF;', tclass: 'normal'},
        {c: '&#xE6;', a: 0, tclass: 'normal'},
        {c: '&#x153;', a: 0, tclass: 'normal'},
        {c: '&#xF8;', tclass: 'normal'},
        {c: '&#xC6;', tclass: 'normal'},
        {c: '&#x152;', tclass: 'normal'},
        {c: '&#xD8;', tclass: 'normal'},
        // 20 - 2F
        {c: '?', krn: {'108': -0.278, '76': -0.319}, tclass: 'normal'},
        {c: '!', lig: {'96': 60}, tclass: 'normal'},
        {c: '&#x201D;', tclass: 'normal'},
        {c: '#', tclass: 'normal'},
        {c: '$', tclass: 'normal'},
        {c: '%', tclass: 'normal'},
        {c: '&amp;', tclass: 'normal'},
        {c: '&#x2019;', krn: {'63': 0.111, '33': 0.111}, lig: {'39': 34}, tclass: 'normal'},
        {c: '(', d: .2, tclass: 'normal'},
        {c: ')', d: .2, tclass: 'normal'},
        {c: '*', tclass: 'normal'},
        {c: '+', a: .1, tclass: 'normal'},
        {c: ',', a: -.3, d: .2, w: 0.278, tclass: 'normal'},
        {c: '-', a: 0, lig: {'45': 123}, tclass: 'normal'},
        {c: '.', a: -.25, tclass: 'normal'},
        {c: '/', tclass: 'normal'},
        // 30 - 3F
        {c: '0', tclass: 'normal'},
        {c: '1', tclass: 'normal'},
        {c: '2', tclass: 'normal'},
        {c: '3', tclass: 'normal'},
        {c: '4', tclass: 'normal'},
        {c: '5', tclass: 'normal'},
        {c: '6', tclass: 'normal'},
        {c: '7', tclass: 'normal'},
        {c: '8', tclass: 'normal'},
        {c: '9', tclass: 'normal'},
        {c: ':', tclass: 'normal'},
        {c: ';', tclass: 'normal'},
        {c: '&#xA1;', tclass: 'normal'},
        {c: '=', a: 0, d: -.1, tclass: 'normal'},
        {c: '&#xBF;', tclass: 'normal'},
        {c: '?', lig: {'96': 62}, tclass: 'normal'},
        // 40 - 4F
        {c: '@', tclass: 'normal'},
        {
            c: 'A',
            krn: {
                '116': -0.0278,
                '67': -0.0278,
                '79': -0.0278,
                '71': -0.0278,
                '85': -0.0278,
                '81': -0.0278,
                '84': -0.0833,
                '89': -0.0833,
                '86': -0.111,
                '87': -0.111
            },
            tclass: 'normal'
        },
        {c: 'B', tclass: 'normal'},
        {c: 'C', tclass: 'normal'},
        {
            c: 'D',
            krn: {'88': -0.0278, '87': -0.0278, '65': -0.0278, '86': -0.0278, '89': -0.0278},
            tclass: 'normal'
        },
        {c: 'E', tclass: 'normal'},
        {
            c: 'F',
            krn: {
                '111': -0.0833,
                '101': -0.0833,
                '117': -0.0833,
                '114': -0.0833,
                '97': -0.0833,
                '65': -0.111,
                '79': -0.0278,
                '67': -0.0278,
                '71': -0.0278,
                '81': -0.0278
            },
            tclass: 'normal'
        },
        {c: 'G', tclass: 'normal'},
        {c: 'H', tclass: 'normal'},
        {c: 'I', krn: {'73': 0.0278}, tclass: 'normal'},
        {c: 'J', tclass: 'normal'},
        {
            c: 'K',
            krn: {'79': -0.0278, '67': -0.0278, '71': -0.0278, '81': -0.0278},
            tclass: 'normal'
        },
        {c: 'L', krn: {'84': -0.0833, '89': -0.0833, '86': -0.111, '87': -0.111}, tclass: 'normal'},
        {c: 'M', tclass: 'normal'},
        {c: 'N', tclass: 'normal'},
        {
            c: 'O',
            krn: {'88': -0.0278, '87': -0.0278, '65': -0.0278, '86': -0.0278, '89': -0.0278},
            tclass: 'normal'
        },
        // 50 - 5F
        {
            c: 'P',
            krn: {
                '65': -0.0833,
                '111': -0.0278,
                '101': -0.0278,
                '97': -0.0278,
                '46': -0.0833,
                '44': -0.0833
            },
            tclass: 'normal'
        },
        {c: 'Q', d: .2, tclass: 'normal'},
        {
            c: 'R',
            krn: {
                '116': -0.0278,
                '67': -0.0278,
                '79': -0.0278,
                '71': -0.0278,
                '85': -0.0278,
                '81': -0.0278,
                '84': -0.0833,
                '89': -0.0833,
                '86': -0.111,
                '87': -0.111
            },
            tclass: 'normal'
        },
        {c: 'S', tclass: 'normal'},
        {
            c: 'T',
            krn: {
                '121': -0.0278,
                '101': -0.0833,
                '111': -0.0833,
                '114': -0.0833,
                '97': -0.0833,
                '65': -0.0833,
                '117': -0.0833
            },
            tclass: 'normal'
        },
        {c: 'U', tclass: 'normal'},
        {
            c: 'V',
            ic: 0.0139,
            krn: {
                '111': -0.0833,
                '101': -0.0833,
                '117': -0.0833,
                '114': -0.0833,
                '97': -0.0833,
                '65': -0.111,
                '79': -0.0278,
                '67': -0.0278,
                '71': -0.0278,
                '81': -0.0278
            },
            tclass: 'normal'
        },
        {
            c: 'W',
            ic: 0.0139,
            krn: {
                '111': -0.0833,
                '101': -0.0833,
                '117': -0.0833,
                '114': -0.0833,
                '97': -0.0833,
                '65': -0.111,
                '79': -0.0278,
                '67': -0.0278,
                '71': -0.0278,
                '81': -0.0278
            },
            tclass: 'normal'
        },
        {
            c: 'X',
            krn: {'79': -0.0278, '67': -0.0278, '71': -0.0278, '81': -0.0278},
            tclass: 'normal'
        },
        {
            c: 'Y',
            ic: 0.025,
            krn: {
                '101': -0.0833,
                '111': -0.0833,
                '114': -0.0833,
                '97': -0.0833,
                '65': -0.0833,
                '117': -0.0833
            },
            tclass: 'normal'
        },
        {c: 'Z', tclass: 'normal'},
        {c: '[', d: .1, tclass: 'normal'},
        {c: '&#x201C;', tclass: 'normal'},
        {c: ']', d: .1, tclass: 'normal'},
        {c: '&#x2C6;', tclass: 'accent'},
        {c: '&#x2D9;', tclass: 'accent'},
        // 60 - 6F
        {c: '&#x2018;', lig: {'96': 92}, tclass: 'normal'},
        {
            c: 'a',
            a: 0,
            krn: {'118': -0.0278, '106': 0.0556, '121': -0.0278, '119': -0.0278},
            tclass: 'normal'
        },
        {
            c: 'b',
            krn: {
                '101': 0.0278,
                '111': 0.0278,
                '120': -0.0278,
                '100': 0.0278,
                '99': 0.0278,
                '113': 0.0278,
                '118': -0.0278,
                '106': 0.0556,
                '121': -0.0278,
                '119': -0.0278
            },
            tclass: 'normal'
        },
        {c: 'c', a: 0, krn: {'104': -0.0278, '107': -0.0278}, tclass: 'normal'},
        {c: 'd', tclass: 'normal'},
        {c: 'e', a: 0, tclass: 'normal'},
        {
            c: 'f',
            ic: 0.0778,
            krn: {'39': 0.0778, '63': 0.0778, '33': 0.0778, '41': 0.0778, '93': 0.0778},
            lig: {'105': 12, '102': 11, '108': 13},
            tclass: 'normal'
        },
        {c: 'g', a: 0, d: .2, ic: 0.0139, krn: {'106': 0.0278}, tclass: 'normal'},
        {
            c: 'h',
            krn: {
                '116': -0.0278,
                '117': -0.0278,
                '98': -0.0278,
                '121': -0.0278,
                '118': -0.0278,
                '119': -0.0278
            },
            tclass: 'normal'
        },
        {c: 'i', tclass: 'normal'},
        {c: 'j', d: .2, tclass: 'normal'},
        {
            c: 'k',
            krn: {'97': -0.0556, '101': -0.0278, '97': -0.0278, '111': -0.0278, '99': -0.0278},
            tclass: 'normal'
        },
        {c: 'l', tclass: 'normal'},
        {
            c: 'm',
            a: 0,
            krn: {
                '116': -0.0278,
                '117': -0.0278,
                '98': -0.0278,
                '121': -0.0278,
                '118': -0.0278,
                '119': -0.0278
            },
            tclass: 'normal'
        },
        {
            c: 'n',
            a: 0,
            krn: {
                '116': -0.0278,
                '117': -0.0278,
                '98': -0.0278,
                '121': -0.0278,
                '118': -0.0278,
                '119': -0.0278
            },
            tclass: 'normal'
        },
        {
            c: 'o',
            a: 0,
            krn: {
                '101': 0.0278,
                '111': 0.0278,
                '120': -0.0278,
                '100': 0.0278,
                '99': 0.0278,
                '113': 0.0278,
                '118': -0.0278,
                '106': 0.0556,
                '121': -0.0278,
                '119': -0.0278
            },
            tclass: 'normal'
        },
        // 70 - 7F
        {
            c: 'p',
            a: 0,
            d: .2,
            krn: {
                '101': 0.0278,
                '111': 0.0278,
                '120': -0.0278,
                '100': 0.0278,
                '99': 0.0278,
                '113': 0.0278,
                '118': -0.0278,
                '106': 0.0556,
                '121': -0.0278,
                '119': -0.0278
            },
            tclass: 'normal'
        },
        {c: 'q', a: 0, d: .2, tclass: 'normal'},
        {c: 'r', a: 0, tclass: 'normal'},
        {c: 's', a: 0, tclass: 'normal'},
        {c: 't', krn: {'121': -0.0278, '119': -0.0278}, tclass: 'normal'},
        {c: 'u', a: 0, krn: {'119': -0.0278}, tclass: 'normal'},
        {
            c: 'v',
            a: 0,
            ic: 0.0139,
            krn: {'97': -0.0556, '101': -0.0278, '97': -0.0278, '111': -0.0278, '99': -0.0278},
            tclass: 'normal'
        },
        {
            c: 'w',
            a: 0,
            ic: 0.0139,
            krn: {'101': -0.0278, '97': -0.0278, '111': -0.0278, '99': -0.0278},
            tclass: 'normal'
        },
        {c: 'x', a: 0, tclass: 'normal'},
        {
            c: 'y',
            a: 0,
            d: .2,
            ic: 0.0139,
            krn: {'111': -0.0278, '101': -0.0278, '97': -0.0278, '46': -0.0833, '44': -0.0833},
            tclass: 'normal'
        },
        {c: 'z', a: 0, tclass: 'normal'},
        {c: '&#x2013;', a: .1, ic: 0.0278, lig: {'45': 124}, tclass: 'normal'},
        {c: '&#x2014;', a: .1, ic: 0.0278, tclass: 'normal'},
        {c: '&#x2DD;', tclass: 'accent'},
        {c: '&#x2DC;', tclass: 'accent'},
        {c: '&#xA8;', tclass: 'accent'}
    ],

    cmmi10: [
        // 00 - 0F
        {
            c: '&Gamma;',
            ic: 0.139,
            krn: {'61': -0.0556, '59': -0.111, '58': -0.111, '127': 0.0833},
            tclass: 'igreek'
        },
        {c: '&Delta;', krn: {'127': 0.167}, tclass: 'igreek'},
        {c: '&Theta;', ic: 0.0278, krn: {'127': 0.0833}, tclass: 'igreek'},
        {c: '&Lambda;', krn: {'127': 0.167}, tclass: 'igreek'},
        {c: '&Xi;', ic: 0.0757, krn: {'127': 0.0833}, tclass: 'igreek'},
        {
            c: '&Pi;',
            ic: 0.0812,
            krn: {'61': -0.0556, '59': -0.0556, '58': -0.0556, '127': 0.0556},
            tclass: 'igreek'
        },
        {c: '&Sigma;', ic: 0.0576, krn: {'127': 0.0833}, tclass: 'igreek'},
        {
            c: '&Upsilon;',
            ic: 0.139,
            krn: {'61': -0.0556, '59': -0.111, '58': -0.111, '127': 0.0556},
            tclass: 'igreek'
        },
        {c: '&Phi;', krn: {'127': 0.0833}, tclass: 'igreek'},
        {
            c: '&Psi;',
            ic: 0.11,
            krn: {'61': -0.0556, '59': -0.0556, '58': -0.0556, '127': 0.0556},
            tclass: 'igreek'
        },
        {c: '&Omega;', ic: 0.0502, krn: {'127': 0.0833}, tclass: 'igreek'},
        {c: '&alpha;', a: 0, ic: 0.0037, krn: {'127': 0.0278}, tclass: 'greek'},
        {c: '&beta;', d: .2, ic: 0.0528, krn: {'127': 0.0833}, tclass: 'greek'},
        {c: '&gamma;', a: 0, d: .2, ic: 0.0556, tclass: 'greek'},
        {
            c: '&delta;',
            ic: 0.0378,
            krn: {'59': -0.0556, '58': -0.0556, '127': 0.0556},
            tclass: 'greek'
        },
        {c: '&epsilon;', a: 0, krn: {'127': 0.0556}, tclass: 'lucida'},
        // 10 - 1F
        {c: '&zeta;', d: .2, ic: 0.0738, krn: {'127': 0.0833}, tclass: 'greek'},
        {c: '&eta;', a: 0, d: .2, ic: 0.0359, krn: {'127': 0.0556}, tclass: 'greek'},
        {c: '&theta;', ic: 0.0278, krn: {'127': 0.0833}, tclass: 'greek'},
        {c: '&iota;', a: 0, krn: {'127': 0.0556}, tclass: 'greek'},
        {c: '&kappa;', a: 0, tclass: 'greek'},
        {c: '&lambda;', tclass: 'greek'},
        {c: '&mu;', a: 0, d: .2, krn: {'127': 0.0278}, tclass: 'greek'},
        {
            c: '&nu;',
            a: 0,
            ic: 0.0637,
            krn: {'59': -0.0556, '58': -0.0556, '127': 0.0278},
            tclass: 'greek'
        },
        {c: '&xi;', d: .2, ic: 0.046, krn: {'127': 0.111}, tclass: 'greek'},
        {c: '&pi;', a: 0, ic: 0.0359, tclass: 'greek'},
        {c: '&rho;', a: 0, d: .2, krn: {'127': 0.0833}, tclass: 'greek'},
        {c: '&sigma;', a: 0, ic: 0.0359, krn: {'59': -0.0556, '58': -0.0556}, tclass: 'greek'},
        {
            c: '&tau;',
            a: 0,
            ic: 0.113,
            krn: {'59': -0.0556, '58': -0.0556, '127': 0.0278},
            tclass: 'greek'
        },
        {c: '&upsilon;', a: 0, ic: 0.0359, krn: {'127': 0.0278}, tclass: 'greek'},
        {c: '&phi;', a: .1, d: .2, krn: {'127': 0.0833}, tclass: 'greek'},
        {c: '&chi;', a: 0, d: .2, krn: {'127': 0.0556}, tclass: 'greek'},
        // 20 - 2F
        {c: '&psi;', a: .1, d: .2, ic: 0.0359, krn: {'127': 0.111}, tclass: 'greek'},
        {c: '&omega;', a: 0, ic: 0.0359, tclass: 'greek'},
        {c: '&epsilon;', a: 0, krn: {'127': 0.0833}, tclass: 'greek'},
        {c: '&#x3D1;', krn: {'127': 0.0833}, tclass: 'lucida'},
        {c: '&#x3D6;', a: 0, ic: 0.0278, tclass: 'lucida'},
        {c: '&#x3F1;', a: 0, d: .2, krn: {'127': 0.0833}, tclass: 'lucida'},
        {c: '&#x3C2;', a: 0, d: .2, ic: 0.0799, krn: {'127': 0.0833}, tclass: 'lucida'},
        {c: '&#x3D5;', a: .1, d: .2, krn: {'127': 0.0833}, tclass: 'lucida'},
        {c: '&#x21BC;', a: 0, d: -.2, tclass: 'arrows'},
        {c: '&#x21BD;', a: 0, d: -.1, tclass: 'arrows'},
        {c: '&#x21C0;', a: 0, d: -.2, tclass: 'arrows'},
        {c: '&#x21C1;', a: 0, d: -.1, tclass: 'arrows'},
        {c: '<span style="position:relative; top:-.1em">&#x02D3;</span>', a: .1, tclass: 'symbol'},
        {c: '<span style="position:relative; top:-.1em">&#x02D2;</span>', a: .1, tclass: 'symbol'},
        {c: '&#x25B9;', tclass: 'symbol'},
        {c: '&#x25C3;', tclass: 'symbol'},
        // 30 - 3F
        {c: '0', tclass: 'normal'},
        {c: '1', tclass: 'normal'},
        {c: '2', tclass: 'normal'},
        {c: '3', tclass: 'normal'},
        {c: '4', tclass: 'normal'},
        {c: '5', tclass: 'normal'},
        {c: '6', tclass: 'normal'},
        {c: '7', tclass: 'normal'},
        {c: '8', tclass: 'normal'},
        {c: '9', tclass: 'normal'},
        {c: '.', a: -.3, tclass: 'normal'},
        {c: ',', a: -.3, d: .2, tclass: 'normal'},
        {c: '&lt;', a: .1, tclass: 'normal'},
        {
            c: '<span style="font-size:133%; position:relative; top:.1em">/</span>',
            d: .1,
            krn: {
                '1': -0.0556,
                '65': -0.0556,
                '77': -0.0556,
                '78': -0.0556,
                '89': 0.0556,
                '90': -0.0556
            },
            tclass: 'normal'
        },
        {c: '&gt;', a: .1, tclass: 'normal'},
        {c: '&#x22C6;', a: 0, tclass: 'arial'},
        // 40 - 4F
        {c: '&#x2202;', ic: 0.0556, krn: {'127': 0.0833}, tclass: 'normal'},
        {c: 'A', krn: {'127': 0.139}, tclass: 'italic'},
        {c: 'B', ic: 0.0502, krn: {'127': 0.0833}, tclass: 'italic'},
        {
            c: 'C',
            ic: 0.0715,
            krn: {'61': -0.0278, '59': -0.0556, '58': -0.0556, '127': 0.0833},
            tclass: 'italic'
        },
        {c: 'D', ic: 0.0278, krn: {'127': 0.0556}, tclass: 'italic'},
        {c: 'E', ic: 0.0576, krn: {'127': 0.0833}, tclass: 'italic'},
        {
            c: 'F',
            ic: 0.139,
            krn: {'61': -0.0556, '59': -0.111, '58': -0.111, '127': 0.0833},
            tclass: 'italic'
        },
        {c: 'G', krn: {'127': 0.0833}, tclass: 'italic'},
        {
            c: 'H',
            ic: 0.0812,
            krn: {'61': -0.0556, '59': -0.0556, '58': -0.0556, '127': 0.0556},
            tclass: 'italic'
        },
        {c: 'I', ic: 0.0785, krn: {'127': 0.111}, tclass: 'italic'},
        {
            c: 'J',
            ic: 0.0962,
            krn: {'61': -0.0556, '59': -0.111, '58': -0.111, '127': 0.167},
            tclass: 'italic'
        },
        {
            c: 'K',
            ic: 0.0715,
            krn: {'61': -0.0556, '59': -0.0556, '58': -0.0556, '127': 0.0556},
            tclass: 'italic'
        },
        {c: 'L', krn: {'127': 0.0278}, tclass: 'italic'},
        {
            c: 'M',
            ic: 0.109,
            krn: {'61': -0.0556, '59': -0.0556, '58': -0.0556, '127': 0.0833},
            tclass: 'italic'
        },
        {
            c: 'N',
            ic: 0.109,
            krn: {'61': -0.0833, '61': -0.0278, '59': -0.0556, '58': -0.0556, '127': 0.0833},
            tclass: 'italic'
        },
        {c: 'O', ic: 0.0278, krn: {'127': 0.0833}, tclass: 'italic'},
        // 50 - 5F
        {
            c: 'P',
            ic: 0.139,
            krn: {'61': -0.0556, '59': -0.111, '58': -0.111, '127': 0.0833},
            tclass: 'italic'
        },
        {c: 'Q', d: .2, krn: {'127': 0.0833}, tclass: 'italic'},
        {c: 'R', ic: 0.00773, krn: {'127': 0.0833}, tclass: 'italic'},
        {
            c: 'S',
            ic: 0.0576,
            krn: {'61': -0.0556, '59': -0.0556, '58': -0.0556, '127': 0.0833},
            tclass: 'italic'
        },
        {
            c: 'T',
            ic: 0.139,
            krn: {'61': -0.0278, '59': -0.0556, '58': -0.0556, '127': 0.0833},
            tclass: 'italic'
        },
        {
            c: 'U',
            ic: 0.109,
            krn: {'59': -0.111, '58': -0.111, '61': -0.0556, '127': 0.0278},
            tclass: 'italic'
        },
        {c: 'V', ic: 0.222, krn: {'59': -0.167, '58': -0.167, '61': -0.111}, tclass: 'italic'},
        {c: 'W', ic: 0.139, krn: {'59': -0.167, '58': -0.167, '61': -0.111}, tclass: 'italic'},
        {
            c: 'X',
            ic: 0.0785,
            krn: {'61': -0.0833, '61': -0.0278, '59': -0.0556, '58': -0.0556, '127': 0.0833},
            tclass: 'italic'
        },
        {c: 'Y', ic: 0.222, krn: {'59': -0.167, '58': -0.167, '61': -0.111}, tclass: 'italic'},
        {
            c: 'Z',
            ic: 0.0715,
            krn: {'61': -0.0556, '59': -0.0556, '58': -0.0556, '127': 0.0833},
            tclass: 'italic'
        },
        {c: '&#x266D;', tclass: 'symbol'},
        {c: '&#x266E;', tclass: 'symbol'},
        {c: '&#x266F;', tclass: 'symbol'},
        {
            c: '<span style="position: relative; top:-.3em; font-size:75%">&#x203F;</span>',
            a: 0,
            d: -.1,
            tclass: 'arial'
        },
        {
            c: '<span style="position: relative; top:.4em; font-size:75%">&#x2040;</span>',
            a: 0,
            d: -.1,
            tclass: 'arial'
        },
        // 60 - 6F
        {c: '&#x2113;', krn: {'127': 0.111}, tclass: 'italic'},
        {c: 'a', a: 0, tclass: 'italic'},
        {c: 'b', tclass: 'italic'},
        {c: 'c', a: 0, krn: {'127': 0.0556}, tclass: 'italic'},
        {
            c: 'd',
            krn: {'89': 0.0556, '90': -0.0556, '106': -0.111, '102': -0.167, '127': 0.167},
            tclass: 'italic'
        },
        {c: 'e', a: 0, krn: {'127': 0.0556}, tclass: 'italic'},
        {
            c: 'f',
            d: .2,
            ic: 0.108,
            krn: {'59': -0.0556, '58': -0.0556, '127': 0.167},
            tclass: 'italic'
        },
        {c: 'g', a: 0, d: .2, ic: 0.0359, krn: {'127': 0.0278}, tclass: 'italic'},
        {c: 'h', krn: {'127': -0.0278}, tclass: 'italic'},
        {c: 'i', tclass: 'italic'},
        {c: 'j', d: .2, ic: 0.0572, krn: {'59': -0.0556, '58': -0.0556}, tclass: 'italic'},
        {c: 'k', ic: 0.0315, tclass: 'italic'},
        {c: 'l', ic: 0.0197, krn: {'127': 0.0833}, tclass: 'italic'},
        {c: 'm', a: 0, tclass: 'italic'},
        {c: 'n', a: 0, tclass: 'italic'},
        {c: 'o', a: 0, krn: {'127': 0.0556}, tclass: 'italic'},
        // 70 - 7F
        {c: 'p', a: 0, d: .2, krn: {'127': 0.0833}, tclass: 'italic'},
        {c: 'q', a: 0, d: .2, ic: 0.0359, krn: {'127': 0.0833}, tclass: 'italic'},
        {
            c: 'r',
            a: 0,
            ic: 0.0278,
            krn: {'59': -0.0556, '58': -0.0556, '127': 0.0556},
            tclass: 'italic'
        },
        {c: 's', a: 0, krn: {'127': 0.0556}, tclass: 'italic'},
        {c: 't', krn: {'127': 0.0833}, tclass: 'italic'},
        {c: 'u', a: 0, krn: {'127': 0.0278}, tclass: 'italic'},
        {c: 'v', a: 0, ic: 0.0359, krn: {'127': 0.0278}, tclass: 'italic'},
        {c: 'w', a: 0, ic: 0.0269, krn: {'127': 0.0833}, tclass: 'italic'},
        {c: 'x', a: 0, krn: {'127': 0.0278}, tclass: 'italic'},
        {c: 'y', a: 0, d: .2, ic: 0.0359, krn: {'127': 0.0556}, tclass: 'italic'},
        {c: 'z', a: 0, ic: 0.044, krn: {'127': 0.0556}, tclass: 'italic'},
        {c: '&#x131;', a: 0, krn: {'127': 0.0278}, tclass: 'italic'},
        {c: 'j', d: .2, krn: {'127': 0.0833}, tclass: 'italic'},
        {c: '&#x2118;', a: 0, d: .2, krn: {'127': 0.111}, tclass: 'arial'},
        {
            c: '<span style="position:relative; left: .3em; top: -.65em; font-size: 67%">&#x2192;</span>',
            ic: 0.154,
            tclass: 'symbol'
        },
        {c: '&#x0311;', ic: 0.399, tclass: 'normal'}
    ],

    cmsy10: [
        // 00 - 0F
        {c: '<span style="position:relative; top:.1em">&#x2212;</span>', a: .1, tclass: 'symbol'},
        {c: '&#xB7;', a: 0, d: -.2, tclass: 'normal'},
        {c: '&#xD7;', a: 0, tclass: 'normal'},
        {c: '<span style="position:relative; top:.3em">&#x2A;</span>', a: 0, tclass: 'normal'},
        {c: '&#xF7;', a: 0, tclass: 'normal'},
        {c: '&#x25CA;', tclass: 'symbol'},
        {c: '&#xB1;', a: .1, tclass: 'normal'},
        {c: '&#x2213;', tclass: 'symbol'},
        {c: '&#x2295;', tclass: 'symbol'},
        {c: '&#x2296;', tclass: 'symbol'},
        {c: '&#x2297;', tclass: 'symbol'},
        {c: '&#x2298;', tclass: 'symbol'},
        {c: '&#x2299;', tclass: 'symbol'},
        {c: '&#x25EF;', tclass: 'arial'},
        {c: '&#x2218;', a: 0, d: -.1, tclass: 'symbol2'},
        {c: '&#x2022;', a: 0, d: -.2, tclass: 'symbol'},
        // 10 - 1F
        {c: '&#x224D;', a: .1, tclass: 'symbol2'},
        {c: '&#x2261;', a: .1, tclass: 'symbol2'},
        {c: '&#x2286;', tclass: 'symbol'},
        {c: '&#x2287;', tclass: 'symbol'},
        {c: '&#x2264;', tclass: 'symbol'},
        {c: '&#x2265;', tclass: 'symbol'},
        {c: '&#x227C;', tclass: 'symbol'},
        {c: '&#x227D;', tclass: 'symbol'},
        {c: '~', a: 0, d: -.2, tclass: 'normal'},
        {c: '&#x2248;', a: .1, d: -.1, tclass: 'symbol'},
        {c: '&#x2282;', tclass: 'symbol'},
        {c: '&#x2283;', tclass: 'symbol'},
        {c: '&#x226A;', tclass: 'symbol'},
        {c: '&#x226B;', tclass: 'symbol'},
        {c: '&#x227A;', tclass: 'symbol'},
        {c: '&#x227B;', tclass: 'symbol'},
        // 20 - 2F
        {c: '&#x2190;', a: -.1, tclass: 'arrow1'},
        {c: '&#x2192;', a: -.1, tclass: 'arrow1'},
        {c: '&#x2191;', a: .2, d: 0, tclass: 'arrow1a'},
        {c: '&#x2193;', a: .2, d: 0, tclass: 'arrow1a'},
        {c: '&#x2194;', a: -.1, tclass: 'arrow1'},
        {c: '&#x2197;', a: .1, tclass: 'arrows'},
        {c: '&#x2198;', a: .1, tclass: 'arrows'},
        {c: '&#x2243;', a: .1, tclass: 'symbol2'},
        {c: '&#x21D0;', a: -.1, tclass: 'arrow2'},
        {c: '&#x21D2;', a: -.1, tclass: 'arrow2'},
        {c: '&#x21D1;', a: .2, d: .1, tclass: 'arrow1a'},
        {c: '&#x21D3;', a: .2, d: .1, tclass: 'arrow1a'},
        {c: '&#x21D4;', a: -.1, tclass: 'arrow2'},
        {c: '&#x2196;', a: .1, tclass: 'arrows'},
        {c: '&#x2199;', a: .1, tclass: 'arrows'},
        {c: '&#x221D;', a: .1, tclass: 'normal'},
        // 30 - 3F
        {
            c: '<span style="font-size: 133%; margin-right: -.1em; position: relative; top:.4em">&#x2032;</span>',
            a: 0,
            tclass: 'lucida'
        },
        {c: '&#x221E;', a: .1, tclass: 'symbol'},
        {c: '&#x2208;', tclass: 'symbol'},
        {c: '&#x220B;', tclass: 'symbol'},
        {
            c: '<span style="font-size: 150%; position:relative; top:.2em">&#x25B3;</span>',
            tclass: 'symbol'
        },
        {
            c: '<span style="font-size: 150%; position:relative; top:.2em">&#x25BD;</span>',
            tclass: 'symbol'
        },
        {
            c: '<span style="font-size: 133%; position:relative; top:.2em">/</span>',
            d: .2,
            tclass: 'normal'
        },
        {
            c: '<span style="font-size: 67%; position: relative; top:-.15em; margin-right:-.3em">&#x22A2;</span>',
            tclass: 'symbol'
        },
        {c: '&#x2200;', tclass: 'symbol'},
        {c: '&#x2203;', tclass: 'symbol'},
        {c: '&#xAC;', a: 0, d: -.1, tclass: 'symbol'},
        {c: '&#x2205;', tclass: 'symbol'},
        {c: '&#x211C;', tclass: 'symbol'},
        {c: '&#x2111;', tclass: 'symbol'},
        {c: '&#x22A4;', tclass: 'symbol'},
        {c: '&#x22A5;', tclass: 'symbol'},
        // 40 - 4F
        {c: '&#x2135;', tclass: 'symbol'},
        {c: 'A', krn: {'48': 0.194}, tclass: 'cal'},
        {c: 'B', ic: 0.0304, krn: {'48': 0.139}, tclass: 'cal'},
        {c: 'C', ic: 0.0583, krn: {'48': 0.139}, tclass: 'cal'},
        {c: 'D', ic: 0.0278, krn: {'48': 0.0833}, tclass: 'cal'},
        {c: 'E', ic: 0.0894, krn: {'48': 0.111}, tclass: 'cal'},
        {c: 'F', ic: 0.0993, krn: {'48': 0.111}, tclass: 'cal'},
        {c: 'G', d: .2, ic: 0.0593, krn: {'48': 0.111}, tclass: 'cal'},
        {c: 'H', ic: 0.00965, krn: {'48': 0.111}, tclass: 'cal'},
        {c: 'I', ic: 0.0738, krn: {'48': 0.0278}, tclass: 'cal'},
        {c: 'J', d: .2, ic: 0.185, krn: {'48': 0.167}, tclass: 'cal'},
        {c: 'K', ic: 0.0144, krn: {'48': 0.0556}, tclass: 'cal'},
        {c: 'L', krn: {'48': 0.139}, tclass: 'cal'},
        {c: 'M', krn: {'48': 0.139}, tclass: 'cal'},
        {c: 'N', ic: 0.147, krn: {'48': 0.0833}, tclass: 'cal'},
        {c: 'O', ic: 0.0278, krn: {'48': 0.111}, tclass: 'cal'},
        // 50 - 5F
        {c: 'P', ic: 0.0822, krn: {'48': 0.0833}, tclass: 'cal'},
        {c: 'Q', d: .2, krn: {'48': 0.111}, tclass: 'cal'},
        {c: 'R', krn: {'48': 0.0833}, tclass: 'cal'},
        {c: 'S', ic: 0.075, krn: {'48': 0.139}, tclass: 'cal'},
        {c: 'T', ic: 0.254, krn: {'48': 0.0278}, tclass: 'cal'},
        {c: 'U', ic: 0.0993, krn: {'48': 0.0833}, tclass: 'cal'},
        {c: 'V', ic: 0.0822, krn: {'48': 0.0278}, tclass: 'cal'},
        {c: 'W', ic: 0.0822, krn: {'48': 0.0833}, tclass: 'cal'},
        {c: 'X', ic: 0.146, krn: {'48': 0.139}, tclass: 'cal'},
        {c: 'Y', ic: 0.0822, krn: {'48': 0.0833}, tclass: 'cal'},
        {c: 'Z', ic: 0.0794, krn: {'48': 0.139}, tclass: 'cal'},
        {c: '&#x22C3;', tclass: 'symbol'},
        {c: '&#x22C2;', tclass: 'symbol'},
        {c: '&#x228E;', tclass: 'symbol'},
        {c: '&#x22C0;', tclass: 'symbol'},
        {c: '&#x22C1;', tclass: 'symbol'},
        // 60 - 6F
        {c: '&#x22A2;', tclass: 'symbol'},
        {c: '&#x22A3;', tclass: 'symbol'},
        {c: '&#x230A;', a: .3, d: .2, tclass: 'arial'},
        {c: '&#x230B;', a: .3, d: .2, tclass: 'arial'},
        {c: '&#x2308;', a: .3, d: .2, tclass: 'arial'},
        {c: '&#x2309;', a: .3, d: .2, tclass: 'arial'},
        {c: '{', d: .2, tclass: 'normal'},
        {c: '}', d: .2, tclass: 'normal'},
        {c: '&#x2329;', a: .3, d: .2, tclass: 'symbol'},
        {c: '&#x232A;', a: .3, d: .2, tclass: 'symbol'},
        {c: '&#x2223;', d: .1, tclass: 'symbol'},
        {c: '&#x2225;', d: .1, tclass: 'symbol'},
        {c: '&#x2195;', a: .2, d: 0, tclass: 'arrow1a'},
        {c: '&#x21D5;', a: .3, d: 0, tclass: 'arrow1a'},
        {c: '&#x2216;', a: .3, d: .1, tclass: 'symbol'},
        {c: '&#x2240;', tclass: 'symbol'},
        // 70 - 7F
        {
            c: '<span style="position:relative; top: .8em">&#x221A;</span>',
            h: .04,
            d: .8,
            tclass: 'symbol'
        },
        {c: '&#x2210;', a: .4, tclass: 'symbol'},
        {c: '&#x2207;', tclass: 'symbol'},
        {
            c: '<span style="font-size: 85%; left:-.1em; margin-right:-.2em">&#x222B;</span>',
            a: .4,
            d: .1,
            ic: 0.111,
            tclass: 'lucida'
        },
        {c: '&#x2294;', tclass: 'symbol'},
        {c: '&#x2293;', tclass: 'symbol'},
        {c: '&#x2291;', tclass: 'symbol'},
        {c: '&#x2292;', tclass: 'symbol'},
        {c: '&#xA7;', d: .1, tclass: 'normal'},
        {c: '&#x2020;', d: .1, tclass: 'normal'},
        {c: '&#x2021;', d: .1, tclass: 'normal'},
        {c: '&#xB6;', a: .3, d: .1, tclass: 'lucida'},
        {c: '&#x2663;', tclass: 'arial'},
        {c: '&#x2662;', tclass: 'arial'},
        {c: '&#x2661;', tclass: 'arial'},
        {c: '&#x2660;', tclass: 'arial'}
    ],

    cmex10: [
        // 00 - 0F
        {c: '(', h: 0.04, d: 1.16, n: 16, tclass: 'delim1'},
        {c: ')', h: 0.04, d: 1.16, n: 17, tclass: 'delim1'},
        {c: '[', h: 0.04, d: 1.16, n: 104, tclass: 'delim1'},
        {c: ']', h: 0.04, d: 1.16, n: 105, tclass: 'delim1'},
        {c: '&#x2308;', h: 0.04, d: 1.16, n: 106, tclass: 'delim1a'},
        {c: '&#x2309;', h: 0.04, d: 1.16, n: 107, tclass: 'delim1a'},
        {c: '&#x230A;', h: 0.04, d: 1.16, n: 108, tclass: 'delim1a'},
        {c: '&#x230B;', h: 0.04, d: 1.16, n: 109, tclass: 'delim1a'},
        {c: '<span style="margin-left:-.1em">{</span>', h: 0.04, d: 1.16, n: 110, tclass: 'delim1'},
        {
            c: '<span style="margin-right:-.1em">}</span>',
            h: 0.04,
            d: 1.16,
            n: 111,
            tclass: 'delim1'
        },
        {c: '&#x2329;', h: 0.04, d: 1.16, n: 68, tclass: 'delim1b'},
        {c: '&#x232A;', h: 0.04, d: 1.16, n: 69, tclass: 'delim1b'},
        {c: '&#x2223;', h: .7, d: .1, delim: {rep: 12}, tclass: 'symbol'},
        {c: '&#x2225;', h: .7, d: .1, delim: {rep: 13}, tclass: 'symbol'},
        {c: '/', h: 0.04, d: 1.16, n: 46, tclass: 'delim1a'},
        {c: '&#x2216;', h: 0.04, d: 1.16, n: 47, tclass: 'delim1a'},
        // 10 - 1F
        {c: '(', h: 0.04, d: 1.76, n: 18, tclass: 'delim2'},
        {c: ')', h: 0.04, d: 1.76, n: 19, tclass: 'delim2'},
        {c: '(', h: 0.04, d: 2.36, n: 32, tclass: 'delim3'},
        {c: ')', h: 0.04, d: 2.36, n: 33, tclass: 'delim3'},
        {c: '[', h: 0.04, d: 2.36, n: 34, tclass: 'delim3'},
        {c: ']', h: 0.04, d: 2.36, n: 35, tclass: 'delim3'},
        {c: '&#x2308;', h: 0.04, d: 2.36, n: 36, tclass: 'delim3a'},
        {c: '&#x2309;', h: 0.04, d: 2.36, n: 37, tclass: 'delim3a'},
        {c: '&#x230A;', h: 0.04, d: 2.36, n: 38, tclass: 'delim3a'},
        {c: '&#x230B;', h: 0.04, d: 2.36, n: 39, tclass: 'delim3a'},
        {
            c: '<span style="position:relative; left:-.1em; margin-right:-.1em">{</span>',
            h: 0.04,
            d: 2.36,
            n: 40,
            tclass: 'delim3'
        },
        {
            c: '<span style="position:relative; left:-.05em; margin-right:-.1em">}</span>',
            h: 0.04,
            d: 2.36,
            n: 41,
            tclass: 'delim3'
        },
        {c: '&#x2329;', h: 0.04, d: 2.36, n: 42, tclass: 'delim3b'},
        {c: '&#x232A;', h: 0.04, d: 2.36, n: 43, tclass: 'delim3b'},
        {c: '/', h: 0.04, d: 2.36, n: 44, tclass: 'delim3a'},
        {c: '&#x2216;', h: 0.04, d: 2.36, n: 45, tclass: 'delim3a'},
        // 20 - 2F
        {c: '(', h: 0.04, d: 2.96, n: 48, tclass: 'delim4'},
        {c: ')', h: 0.04, d: 2.96, n: 49, tclass: 'delim4'},
        {c: '[', h: 0.04, d: 2.96, n: 50, tclass: 'delim4'},
        {c: ']', h: 0.04, d: 2.96, n: 51, tclass: 'delim4'},
        {c: '&#x2308;', h: 0.04, d: 2.96, n: 52, tclass: 'delim4a'},
        {c: '&#x2309;', h: 0.04, d: 2.96, n: 53, tclass: 'delim4a'},
        {c: '&#x230A;', h: 0.04, d: 2.96, n: 54, tclass: 'delim4a'},
        {c: '&#x230B;', h: 0.04, d: 2.96, n: 55, tclass: 'delim4a'},
        {
            c: '<span style="position:relative; left:-.1em; margin-right:-.1em">{</span>',
            h: 0.04,
            d: 2.96,
            n: 56,
            tclass: 'delim4'
        },
        {
            c: '<span style="position:relative; left:-.1em; margin-right:-.1em">}</span>',
            h: 0.04,
            d: 2.96,
            n: 57,
            tclass: 'delim4'
        },
        {c: '&#x2329;', h: 0.04, d: 2.96, tclass: 'delim4b'},
        {c: '&#x232A;', h: 0.04, d: 2.96, tclass: 'delim4b'},
        {c: '/', h: 0.04, d: 2.96, tclass: 'delim4a'},
        {c: '&#x2216;', h: 0.04, d: 2.96, tclass: 'delim4a'},
        {c: '/', h: 0.04, d: 1.76, n: 30, tclass: 'delim2a'},
        {c: '&#x2216;', h: 0.04, d: 1.76, n: 31, tclass: 'delim2a'},
        // 30 - 3F
        {c: '&#xE6;', h: .8, d: .2, delim: {top: 48, bot: 64, rep: 66}, tclass: 'delimx'},
        {c: '&#xF6;', h: .8, d: .2, delim: {top: 49, bot: 65, rep: 67}, tclass: 'delimx'},
        {c: '&#xE9;', h: .8, d: .2, delim: {top: 50, bot: 52, rep: 54}, tclass: 'delimx'},
        {c: '&#xF9;', h: .8, d: .2, delim: {top: 51, bot: 53, rep: 55}, tclass: 'delimx'},
        {c: '&#xEB;', h: .8, d: .2, delim: {bot: 52, rep: 54}, tclass: 'delimx'},
        {c: '&#xFB;', h: .8, d: .2, delim: {bot: 53, rep: 55}, tclass: 'delimx'},
        {c: '&#xEA;', h: .8, d: .2, delim: {top: 50, rep: 54}, tclass: 'delimx'},
        {c: '&#xFA;', h: .8, d: .2, delim: {top: 51, rep: 55}, tclass: 'delimx'},
        {c: '&#xEC;', h: .8, d: .2, delim: {top: 56, mid: 60, bot: 58, rep: 62}, tclass: 'delimx'},
        {c: '&#xFC;', h: .8, d: .2, delim: {top: 57, mid: 61, bot: 59, rep: 62}, tclass: 'delimx'},
        {c: '&#xEE;', h: .8, d: .2, delim: {top: 56, bot: 58, rep: 62}, tclass: 'delimx'},
        {c: '&#xFE;', h: .8, d: .2, delim: {top: 57, bot: 59, rep: 62}, tclass: 'delimx'},
        {c: '&#xED;', h: .8, d: .2, delim: {rep: 63}, tclass: 'delimx'},
        {c: '&#xFD;', h: .8, d: .2, delim: {rep: 119}, tclass: 'delimx'},
        {c: '&#xEF;', h: .8, d: .2, delim: {rep: 62}, tclass: 'delimx'},
        {
            c: '<span style="margin:.125em">|</span>',
            h: .8,
            d: 0,
            delim: {top: 120, bot: 121, rep: 63},
            tclass: 'normal'
        },
        // 40 - 4F
        {c: '&#xE8;', h: .8, d: .2, delim: {top: 56, bot: 59, rep: 62}, tclass: 'delimx'},
        {c: '&#xF8;', h: .8, d: .2, delim: {top: 57, bot: 58, rep: 62}, tclass: 'delimx'},
        {c: '&#xE7;', h: .8, d: .2, delim: {rep: 66}, tclass: 'delimx'},
        {c: '&#xF7;', h: .8, d: .2, delim: {rep: 67}, tclass: 'delimx'},
        {c: '&#x2329;', h: 0.04, d: 1.76, n: 28, tclass: 'delim2b'},
        {c: '&#x232A;', h: 0.04, d: 1.76, n: 29, tclass: 'delim2b'},
        {c: '&#x2294;', h: 0, d: 1, n: 71, tclass: 'bigop1'},
        {c: '&#x2294;', h: 0.1, d: 1.5, tclass: 'bigop2'},
        {c: '&#x222E;', h: 0, d: 1.11, ic: 0.095, n: 73, tclass: 'bigop1c'},
        {c: '&#x222E;', h: 0, d: 2.22, ic: 0.222, tclass: 'bigop2c'},
        {c: '&#x2299;', h: 0, d: 1, n: 75, tclass: 'bigop1'},
        {c: '&#x2299;', h: 0.1, d: 1.5, tclass: 'bigop2'},
        {c: '&#x2295;', h: 0, d: 1, n: 77, tclass: 'bigop1'},
        {c: '&#x2295;', h: 0.1, d: 1.5, tclass: 'bigop2'},
        {c: '&#x2297;', h: 0, d: 1, n: 79, tclass: 'bigop1'},
        {c: '&#x2297;', h: 0.1, d: 1.5, tclass: 'bigop2'},
        // 50 - 5F
        {c: '&#x2211;', h: 0, d: 1, n: 88, tclass: 'bigop1a'},
        {c: '&#x220F;', h: 0, d: 1, n: 89, tclass: 'bigop1a'},
        {c: '&#x222B;', h: 0, d: 1.11, ic: 0.095, n: 90, tclass: 'bigop1c'},
        {c: '&#x222A;', h: 0, d: 1, n: 91, tclass: 'bigop1b'},
        {c: '&#x2229;', h: 0, d: 1, n: 92, tclass: 'bigop1b'},
        {c: '&#x228E;', h: 0, d: 1, n: 93, tclass: 'bigop1b'},
        {c: '&#x22C0;', h: 0, d: 1, n: 94, tclass: 'bigop1'},
        {c: '&#x22C1;', h: 0, d: 1, n: 95, tclass: 'bigop1'},
        {c: '&#x2211;', h: 0.1, d: 1.6, tclass: 'bigop2a'},
        {c: '&#x220F;', h: 0.1, d: 1.5, tclass: 'bigop2a'},
        {c: '&#x222B;', h: 0, d: 2.22, ic: 0.222, tclass: 'bigop2c'},
        {c: '&#x222A;', h: 0.1, d: 1.5, tclass: 'bigop2b'},
        {c: '&#x2229;', h: 0.1, d: 1.5, tclass: 'bigop2b'},
        {c: '&#x228E;', h: 0.1, d: 1.5, tclass: 'bigop2b'},
        {c: '&#x22C0;', h: 0.1, d: 1.5, tclass: 'bigop2'},
        {c: '&#x22C1;', h: 0.1, d: 1.5, tclass: 'bigop2'},
        // 60 - 6F
        {c: '&#x2210;', h: 0, d: 1, n: 97, tclass: 'bigop1a'},
        {c: '&#x2210;', h: 0.1, d: 1.5, tclass: 'bigop2a'},
        {c: '&#xFE3F;', h: 0.722, w: .65, n: 99, tclass: 'wide1'},
        {c: '&#xFE3F;', h: 0.85, w: 1.1, n: 100, tclass: 'wide2'},
        {c: '&#xFE3F;', h: 0.99, w: 1.65, tclass: 'wide3'},
        {c: '~', h: 0.722, w: .5, n: 102, tclass: 'wide1a'},
        {c: '~', h: 0.8, w: .8, n: 103, tclass: 'wide2a'},
        {c: '~', h: 0.99, w: 1.3, tclass: 'wide3a'},
        {c: '[', h: 0.04, d: 1.76, n: 20, tclass: 'delim2'},
        {c: ']', h: 0.04, d: 1.76, n: 21, tclass: 'delim2'},
        {c: '&#x2308;', h: 0.04, d: 1.76, n: 22, tclass: 'delim2a'},
        {c: '&#x2309;', h: 0.04, d: 1.76, n: 23, tclass: 'delim2a'},
        {c: '&#x230A;', h: 0.04, d: 1.76, n: 24, tclass: 'delim2a'},
        {c: '&#x230B;', h: 0.04, d: 1.76, n: 25, tclass: 'delim2a'},
        {
            c: '<span style="position:relative; left:-.1em; margin-right:-.1em">{</span>',
            h: 0.04,
            d: 1.76,
            n: 26,
            tclass: 'delim2'
        },
        {
            c: '<span style="position:relative; margin-right:-.1em; left:-.05em">}</span>',
            h: 0.04,
            d: 1.76,
            n: 27,
            tclass: 'delim2'
        },
        // 70 - 7F
        {
            c: '<span style="font-size: 150%; position:relative; top:.8em">&#x221A;</span>',
            h: 0.04,
            d: 1.16,
            n: 113,
            tclass: 'root'
        },
        {
            c: '<span style="font-size: 220%; position:relative; top:.8em">&#x221A;</span>',
            h: 0.04,
            d: 1.76,
            n: 114,
            tclass: 'root'
        },
        {
            c: '<span style="font-size: 310%; position:relative; top:.8em; margin-right:-.01em">&#x221A;</span>',
            h: 0.06,
            d: 2.36,
            n: 115,
            tclass: 'root'
        },
        {
            c: '<span style="font-size: 400%; position:relative; top:.8em; margin-right:-.025em">&#x221A;</span>',
            h: 0.08,
            d: 2.96,
            n: 116,
            tclass: 'root'
        },
        {
            c: '<span style="font-size: 490%; position:relative; top:.8em; margin-right:-.03em">&#x221A;</span>',
            h: 0.1,
            d: 3.75,
            n: 117,
            tclass: 'root'
        },
        {
            c: '<span style="font-size: 580%; position:relative; top:.775em; margin-right:-.04em">&#x221A;</span>',
            h: .12,
            d: 4.5,
            n: 118,
            tclass: 'root'
        },
        {
            c: '<span style="font-size: 750%; position:relative; top:.775em;margin-right:-.04em">&#x221A;</span>',
            h: .14,
            d: 5.7,
            tclass: 'root'
        },
        {
            c: '<span style="margin-left:.02em">|</span><span style="margin-left:.08em; margin-right:.125em">|</span>',
            h: .8,
            d: 0,
            delim: {top: 126, bot: 127, rep: 119},
            tclass: 'normal'
        },
        {c: '&#x2191;', h: .7, d: 0, delim: {top: 120, rep: 63}, tclass: 'arrow1a'},
        {c: '&#x2193;', h: .65, d: 0, delim: {bot: 121, rep: 63}, tclass: 'arrow1a'},
        {
            c: '<span style="margin-left:-.1em"></span><span style="position:relative; top:.55em; margin-right:-.3em">&#x25DC;</span>',
            h: 0.05,
            tclass: 'symbol'
        },
        {
            c: '<span style="margin-left:-.3em"></span><span style="position:relative; top:.55em; margin-right:-.1em">&#x25DD;</span>',
            h: 0.05,
            tclass: 'symbol'
        },
        {
            c: '<span style="margin-left:-.1em"></span><span style="position:relative; top:.15em; margin-right:-.3em">&#x25DF;</span>',
            h: 0.05,
            tclass: 'symbol'
        },
        {
            c: '<span style="margin-left:-.3em"></span><span style="position:relative; top:.15em; margin-right:-.1em">&#x25DE;</span>',
            h: 0.05,
            tclass: 'symbol'
        },
        {c: '&#x21D1;', h: .7, d: 0, delim: {top: 126, rep: 119}, tclass: 'arrow1a'},
        {c: '&#x21D3;', h: .7, d: 0, delim: {bot: 127, rep: 119}, tclass: 'arrow1a'}
    ],

    cmti10: [
        // 00 - 0F
        {c: '&Gamma;', ic: 0.133, tclass: 'igreek'},
        {c: '&Delta;', tclass: 'igreek'},
        {c: '&Theta;', ic: 0.094, tclass: 'igreek'},
        {c: '&Lambda;', tclass: 'igreek'},
        {c: '&Xi;', ic: 0.153, tclass: 'igreek'},
        {c: '&Pi;', ic: 0.164, tclass: 'igreek'},
        {c: '&Sigma;', ic: 0.12, tclass: 'igreek'},
        {c: '&Upsilon;', ic: 0.111, tclass: 'igreek'},
        {c: '&Phi;', ic: 0.0599, tclass: 'igreek'},
        {c: '&Psi;', ic: 0.111, tclass: 'igreek'},
        {c: '&Omega;', ic: 0.103, tclass: 'igreek'},
        {
            c: 'ff',
            ic: 0.212,
            krn: {'39': 0.104, '63': 0.104, '33': 0.104, '41': 0.104, '93': 0.104},
            lig: {'105': 14, '108': 15},
            tclass: 'italic'
        },
        {c: 'fi', ic: 0.103, tclass: 'italic'},
        {c: 'fl', ic: 0.103, tclass: 'italic'},
        {c: 'ffi', ic: 0.103, tclass: 'italic'},
        {c: 'ffl', ic: 0.103, tclass: 'italic'},
        // 10 - 1F
        {c: '&#x131;', a: 0, ic: 0.0767, tclass: 'italic'},
        {c: 'j', d: .2, ic: 0.0374, tclass: 'italic'},
        {c: '&#x2CB;', tclass: 'iaccent'},
        {c: '&#x2CA;', ic: 0.0969, tclass: 'iaccent'},
        {c: '&#x2C7;', ic: 0.083, tclass: 'iaccent'},
        {c: '&#x2D8;', ic: 0.108, tclass: 'iaccent'},
        {c: '&#x2C9;', ic: 0.103, tclass: 'iaccent'},
        {c: '&#x2DA;', tclass: 'iaccent'},
        {c: '?', d: 0.17, w: 0.46, tclass: 'italic'},
        {c: '&#xDF;', ic: 0.105, tclass: 'italic'},
        {c: '&#xE6;', a: 0, ic: 0.0751, tclass: 'italic'},
        {c: '&#x153;', a: 0, ic: 0.0751, tclass: 'italic'},
        {c: '&#xF8;', ic: 0.0919, tclass: 'italic'},
        {c: '&#xC6;', ic: 0.12, tclass: 'italic'},
        {c: '&#x152;', ic: 0.12, tclass: 'italic'},
        {c: '&#xD8;', ic: 0.094, tclass: 'italic'},
        // 20 - 2F
        {c: '?', krn: {'108': -0.256, '76': -0.321}, tclass: 'italic'},
        {c: '!', ic: 0.124, lig: {'96': 60}, tclass: 'italic'},
        {c: '&#x201D;', ic: 0.0696, tclass: 'italic'},
        {c: '#', ic: 0.0662, tclass: 'italic'},
        {c: '$', tclass: 'italic'},
        {c: '%', ic: 0.136, tclass: 'italic'},
        {c: '&amp;', ic: 0.0969, tclass: 'italic'},
        {
            c: '&#x2019;',
            ic: 0.124,
            krn: {'63': 0.102, '33': 0.102},
            lig: {'39': 34},
            tclass: 'italic'
        },
        {c: '(', d: .2, ic: 0.162, tclass: 'italic'},
        {c: ')', d: .2, ic: 0.0369, tclass: 'italic'},
        {c: '*', ic: 0.149, tclass: 'italic'},
        {c: '+', a: .1, ic: 0.0369, tclass: 'italic'},
        {c: ',', a: -.3, d: .2, w: 0.278, tclass: 'italic'},
        {c: '-', a: 0, ic: 0.0283, lig: {'45': 123}, tclass: 'italic'},
        {c: '.', a: -.25, tclass: 'italic'},
        {c: '/', ic: 0.162, tclass: 'italic'},
        // 30 - 3F
        {c: '0', ic: 0.136, tclass: 'italic'},
        {c: '1', ic: 0.136, tclass: 'italic'},
        {c: '2', ic: 0.136, tclass: 'italic'},
        {c: '3', ic: 0.136, tclass: 'italic'},
        {c: '4', ic: 0.136, tclass: 'italic'},
        {c: '5', ic: 0.136, tclass: 'italic'},
        {c: '6', ic: 0.136, tclass: 'italic'},
        {c: '7', ic: 0.136, tclass: 'italic'},
        {c: '8', ic: 0.136, tclass: 'italic'},
        {c: '9', ic: 0.136, tclass: 'italic'},
        {c: ':', ic: 0.0582, tclass: 'italic'},
        {c: ';', ic: 0.0582, tclass: 'italic'},
        {c: '&#xA1;', ic: 0.0756, tclass: 'italic'},
        {c: '=', a: 0, d: -.1, ic: 0.0662, tclass: 'italic'},
        {c: '&#xBF;', tclass: 'italic'},
        {c: '?', ic: 0.122, lig: {'96': 62}, tclass: 'italic'},
        // 40 - 4F
        {c: '@', ic: 0.096, tclass: 'italic'},
        {
            c: 'A',
            krn: {
                '110': -0.0256,
                '108': -0.0256,
                '114': -0.0256,
                '117': -0.0256,
                '109': -0.0256,
                '116': -0.0256,
                '105': -0.0256,
                '67': -0.0256,
                '79': -0.0256,
                '71': -0.0256,
                '104': -0.0256,
                '98': -0.0256,
                '85': -0.0256,
                '107': -0.0256,
                '118': -0.0256,
                '119': -0.0256,
                '81': -0.0256,
                '84': -0.0767,
                '89': -0.0767,
                '86': -0.102,
                '87': -0.102,
                '101': -0.0511,
                '97': -0.0511,
                '111': -0.0511,
                '100': -0.0511,
                '99': -0.0511,
                '103': -0.0511,
                '113': -0.0511
            },
            tclass: 'italic'
        },
        {c: 'B', ic: 0.103, tclass: 'italic'},
        {c: 'C', ic: 0.145, tclass: 'italic'},
        {
            c: 'D',
            ic: 0.094,
            krn: {'88': -0.0256, '87': -0.0256, '65': -0.0256, '86': -0.0256, '89': -0.0256},
            tclass: 'italic'
        },
        {c: 'E', ic: 0.12, tclass: 'italic'},
        {
            c: 'F',
            ic: 0.133,
            krn: {
                '111': -0.0767,
                '101': -0.0767,
                '117': -0.0767,
                '114': -0.0767,
                '97': -0.0767,
                '65': -0.102,
                '79': -0.0256,
                '67': -0.0256,
                '71': -0.0256,
                '81': -0.0256
            },
            tclass: 'italic'
        },
        {c: 'G', ic: 0.0872, tclass: 'italic'},
        {c: 'H', ic: 0.164, tclass: 'italic'},
        {c: 'I', ic: 0.158, tclass: 'italic'},
        {c: 'J', ic: 0.14, tclass: 'italic'},
        {
            c: 'K',
            ic: 0.145,
            krn: {'79': -0.0256, '67': -0.0256, '71': -0.0256, '81': -0.0256},
            tclass: 'italic'
        },
        {
            c: 'L',
            krn: {
                '84': -0.0767,
                '89': -0.0767,
                '86': -0.102,
                '87': -0.102,
                '101': -0.0511,
                '97': -0.0511,
                '111': -0.0511,
                '100': -0.0511,
                '99': -0.0511,
                '103': -0.0511,
                '113': -0.0511
            },
            tclass: 'italic'
        },
        {c: 'M', ic: 0.164, tclass: 'italic'},
        {c: 'N', ic: 0.164, tclass: 'italic'},
        {
            c: 'O',
            ic: 0.094,
            krn: {'88': -0.0256, '87': -0.0256, '65': -0.0256, '86': -0.0256, '89': -0.0256},
            tclass: 'italic'
        },
        // 50 - 5F
        {c: 'P', ic: 0.103, krn: {'65': -0.0767}, tclass: 'italic'},
        {c: 'Q', d: .2, ic: 0.094, tclass: 'italic'},
        {
            c: 'R',
            ic: 0.0387,
            krn: {
                '110': -0.0256,
                '108': -0.0256,
                '114': -0.0256,
                '117': -0.0256,
                '109': -0.0256,
                '116': -0.0256,
                '105': -0.0256,
                '67': -0.0256,
                '79': -0.0256,
                '71': -0.0256,
                '104': -0.0256,
                '98': -0.0256,
                '85': -0.0256,
                '107': -0.0256,
                '118': -0.0256,
                '119': -0.0256,
                '81': -0.0256,
                '84': -0.0767,
                '89': -0.0767,
                '86': -0.102,
                '87': -0.102,
                '101': -0.0511,
                '97': -0.0511,
                '111': -0.0511,
                '100': -0.0511,
                '99': -0.0511,
                '103': -0.0511,
                '113': -0.0511
            },
            tclass: 'italic'
        },
        {c: 'S', ic: 0.12, tclass: 'italic'},
        {
            c: 'T',
            ic: 0.133,
            krn: {
                '121': -0.0767,
                '101': -0.0767,
                '111': -0.0767,
                '114': -0.0767,
                '97': -0.0767,
                '117': -0.0767,
                '65': -0.0767
            },
            tclass: 'italic'
        },
        {c: 'U', ic: 0.164, tclass: 'italic'},
        {
            c: 'V',
            ic: 0.184,
            krn: {
                '111': -0.0767,
                '101': -0.0767,
                '117': -0.0767,
                '114': -0.0767,
                '97': -0.0767,
                '65': -0.102,
                '79': -0.0256,
                '67': -0.0256,
                '71': -0.0256,
                '81': -0.0256
            },
            tclass: 'italic'
        },
        {c: 'W', ic: 0.184, krn: {'65': -0.0767}, tclass: 'italic'},
        {
            c: 'X',
            ic: 0.158,
            krn: {'79': -0.0256, '67': -0.0256, '71': -0.0256, '81': -0.0256},
            tclass: 'italic'
        },
        {
            c: 'Y',
            ic: 0.194,
            krn: {
                '101': -0.0767,
                '111': -0.0767,
                '114': -0.0767,
                '97': -0.0767,
                '117': -0.0767,
                '65': -0.0767
            },
            tclass: 'italic'
        },
        {c: 'Z', ic: 0.145, tclass: 'italic'},
        {c: '[', d: .1, ic: 0.188, tclass: 'italic'},
        {c: '&#x201C;', ic: 0.169, tclass: 'italic'},
        {c: ']', d: .1, ic: 0.105, tclass: 'italic'},
        {c: '&#x2C6;', ic: 0.0665, tclass: 'iaccent'},
        {c: '&#x2D9;', ic: 0.118, tclass: 'iaccent'},
        // 60 - 6F
        {c: '&#x2018;', ic: 0.124, lig: {'96': 92}, tclass: 'italic'},
        {c: 'a', a: 0, ic: 0.0767, tclass: 'italic'},
        {
            c: 'b',
            ic: 0.0631,
            krn: {
                '101': -0.0511,
                '97': -0.0511,
                '111': -0.0511,
                '100': -0.0511,
                '99': -0.0511,
                '103': -0.0511,
                '113': -0.0511
            },
            tclass: 'italic'
        },
        {
            c: 'c',
            a: 0,
            ic: 0.0565,
            krn: {
                '101': -0.0511,
                '97': -0.0511,
                '111': -0.0511,
                '100': -0.0511,
                '99': -0.0511,
                '103': -0.0511,
                '113': -0.0511
            },
            tclass: 'italic'
        },
        {c: 'd', ic: 0.103, krn: {'108': 0.0511}, tclass: 'italic'},
        {
            c: 'e',
            a: 0,
            ic: 0.0751,
            krn: {
                '101': -0.0511,
                '97': -0.0511,
                '111': -0.0511,
                '100': -0.0511,
                '99': -0.0511,
                '103': -0.0511,
                '113': -0.0511
            },
            tclass: 'italic'
        },
        {
            c: 'f',
            ic: 0.212,
            krn: {'39': 0.104, '63': 0.104, '33': 0.104, '41': 0.104, '93': 0.104},
            lig: {'105': 12, '102': 11, '108': 13},
            tclass: 'italic'
        },
        {c: 'g', a: 0, d: .2, ic: 0.0885, tclass: 'italic'},
        {c: 'h', ic: 0.0767, tclass: 'italic'},
        {c: 'i', ic: 0.102, tclass: 'italic'},
        {c: 'j', d: .2, ic: 0.145, tclass: 'italic'},
        {c: 'k', ic: 0.108, tclass: 'italic'},
        {c: 'l', ic: 0.103, krn: {'108': 0.0511}, tclass: 'italic'},
        {c: 'm', a: 0, ic: 0.0767, tclass: 'italic'},
        {c: 'n', a: 0, ic: 0.0767, krn: {'39': -0.102}, tclass: 'italic'},
        {
            c: 'o',
            a: 0,
            ic: 0.0631,
            krn: {
                '101': -0.0511,
                '97': -0.0511,
                '111': -0.0511,
                '100': -0.0511,
                '99': -0.0511,
                '103': -0.0511,
                '113': -0.0511
            },
            tclass: 'italic'
        },
        // 70 - 7F
        {
            c: 'p',
            a: 0,
            d: .2,
            ic: 0.0631,
            krn: {
                '101': -0.0511,
                '97': -0.0511,
                '111': -0.0511,
                '100': -0.0511,
                '99': -0.0511,
                '103': -0.0511,
                '113': -0.0511
            },
            tclass: 'italic'
        },
        {c: 'q', a: 0, d: .2, ic: 0.0885, tclass: 'italic'},
        {
            c: 'r',
            a: 0,
            ic: 0.108,
            krn: {
                '101': -0.0511,
                '97': -0.0511,
                '111': -0.0511,
                '100': -0.0511,
                '99': -0.0511,
                '103': -0.0511,
                '113': -0.0511
            },
            tclass: 'italic'
        },
        {c: 's', a: 0, ic: 0.0821, tclass: 'italic'},
        {c: 't', ic: 0.0949, tclass: 'italic'},
        {c: 'u', a: 0, ic: 0.0767, tclass: 'italic'},
        {c: 'v', a: 0, ic: 0.108, tclass: 'italic'},
        {c: 'w', a: 0, ic: 0.108, krn: {'108': 0.0511}, tclass: 'italic'},
        {c: 'x', a: 0, ic: 0.12, tclass: 'italic'},
        {c: 'y', a: 0, d: .2, ic: 0.0885, tclass: 'italic'},
        {c: 'z', a: 0, ic: 0.123, tclass: 'italic'},
        {c: '&#x2013;', a: .1, ic: 0.0921, lig: {'45': 124}, tclass: 'italic'},
        {c: '&#x2014;', a: .1, ic: 0.0921, tclass: 'italic'},
        {c: '&#x2DD;', ic: 0.122, tclass: 'iaccent'},
        {c: '&#x2DC;', ic: 0.116, tclass: 'iaccent'},
        {c: '&#xA8;', tclass: 'iaccent'}
    ],

    cmbx10: [
        // 00 - 0F
        {c: '&Gamma;', tclass: 'bgreek'},
        {c: '&Delta;', tclass: 'bgreek'},
        {c: '&Theta;', tclass: 'bgreek'},
        {c: '&Lambda;', tclass: 'bgreek'},
        {c: '&Xi;', tclass: 'bgreek'},
        {c: '&Pi;', tclass: 'bgreek'},
        {c: '&Sigma;', tclass: 'bgreek'},
        {c: '&Upsilon;', tclass: 'bgreek'},
        {c: '&Phi;', tclass: 'bgreek'},
        {c: '&Psi;', tclass: 'bgreek'},
        {c: '&Omega;', tclass: 'bgreek'},
        {
            c: 'ff',
            ic: 0.0778,
            krn: {'39': 0.0778, '63': 0.0778, '33': 0.0778, '41': 0.0778, '93': 0.0778},
            lig: {'105': 14, '108': 15},
            tclass: 'bold'
        },
        {c: 'fi', tclass: 'bold'},
        {c: 'fl', tclass: 'bold'},
        {c: 'ffi', tclass: 'bold'},
        {c: 'ffl', tclass: 'bold'},
        // 10 - 1F
        {c: '&#x131;', a: 0, tclass: 'bold'},
        {c: 'j', d: .2, tclass: 'bold'},
        {c: '&#x2CB;', tclass: 'baccent'},
        {c: '&#x2CA;', tclass: 'baccent'},
        {c: '&#x2C7;', tclass: 'baccent'},
        {c: '&#x2D8;', tclass: 'baccent'},
        {c: '&#x2C9;', tclass: 'baccent'},
        {c: '&#x2DA;', tclass: 'baccent'},
        {c: '?', tclass: 'bold'},
        {c: '&#xDF;', tclass: 'bold'},
        {c: '&#xE6;', a: 0, tclass: 'bold'},
        {c: '&#x153;', a: 0, tclass: 'bold'},
        {c: '&#xF8;', tclass: 'bold'},
        {c: '&#xC6;', tclass: 'bold'},
        {c: '&#x152;', tclass: 'bold'},
        {c: '&#xD8;', tclass: 'bold'},
        // 20 - 2F
        {c: '?', krn: {'108': -0.278, '76': -0.319}, tclass: 'bold'},
        {c: '!', lig: {'96': 60}, tclass: 'bold'},
        {c: '&#x201D;', tclass: 'bold'},
        {c: '#', tclass: 'bold'},
        {c: '$', tclass: 'bold'},
        {c: '%', tclass: 'bold'},
        {c: '&amp;', tclass: 'bold'},
        {c: '&#x2019;', krn: {'63': 0.111, '33': 0.111}, lig: {'39': 34}, tclass: 'bold'},
        {c: '(', d: .2, tclass: 'bold'},
        {c: ')', d: .2, tclass: 'bold'},
        {c: '*', tclass: 'bold'},
        {c: '+', a: .1, tclass: 'bold'},
        {c: ',', a: -.3, d: .2, w: 0.278, tclass: 'bold'},
        {c: '-', a: 0, lig: {'45': 123}, tclass: 'bold'},
        {c: '.', a: -.25, tclass: 'bold'},
        {c: '/', tclass: 'bold'},
        // 30 - 3F
        {c: '0', tclass: 'bold'},
        {c: '1', tclass: 'bold'},
        {c: '2', tclass: 'bold'},
        {c: '3', tclass: 'bold'},
        {c: '4', tclass: 'bold'},
        {c: '5', tclass: 'bold'},
        {c: '6', tclass: 'bold'},
        {c: '7', tclass: 'bold'},
        {c: '8', tclass: 'bold'},
        {c: '9', tclass: 'bold'},
        {c: ':', tclass: 'bold'},
        {c: ';', tclass: 'bold'},
        {c: '&#xA1;', tclass: 'bold'},
        {c: '=', a: 0, d: -.1, tclass: 'bold'},
        {c: '&#xBF;', tclass: 'bold'},
        {c: '?', lig: {'96': 62}, tclass: 'bold'},
        // 40 - 4F
        {c: '@', tclass: 'bold'},
        {
            c: 'A',
            krn: {
                '116': -0.0278,
                '67': -0.0278,
                '79': -0.0278,
                '71': -0.0278,
                '85': -0.0278,
                '81': -0.0278,
                '84': -0.0833,
                '89': -0.0833,
                '86': -0.111,
                '87': -0.111
            },
            tclass: 'bold'
        },
        {c: 'B', tclass: 'bold'},
        {c: 'C', tclass: 'bold'},
        {
            c: 'D',
            krn: {'88': -0.0278, '87': -0.0278, '65': -0.0278, '86': -0.0278, '89': -0.0278},
            tclass: 'bold'
        },
        {c: 'E', tclass: 'bold'},
        {
            c: 'F',
            krn: {
                '111': -0.0833,
                '101': -0.0833,
                '117': -0.0833,
                '114': -0.0833,
                '97': -0.0833,
                '65': -0.111,
                '79': -0.0278,
                '67': -0.0278,
                '71': -0.0278,
                '81': -0.0278
            },
            tclass: 'bold'
        },
        {c: 'G', tclass: 'bold'},
        {c: 'H', tclass: 'bold'},
        {c: 'I', krn: {'73': 0.0278}, tclass: 'bold'},
        {c: 'J', tclass: 'bold'},
        {c: 'K', krn: {'79': -0.0278, '67': -0.0278, '71': -0.0278, '81': -0.0278}, tclass: 'bold'},
        {c: 'L', krn: {'84': -0.0833, '89': -0.0833, '86': -0.111, '87': -0.111}, tclass: 'bold'},
        {c: 'M', tclass: 'bold'},
        {c: 'N', tclass: 'bold'},
        {
            c: 'O',
            krn: {'88': -0.0278, '87': -0.0278, '65': -0.0278, '86': -0.0278, '89': -0.0278},
            tclass: 'bold'
        },
        // 50 - 5F
        {
            c: 'P',
            krn: {
                '65': -0.0833,
                '111': -0.0278,
                '101': -0.0278,
                '97': -0.0278,
                '46': -0.0833,
                '44': -0.0833
            },
            tclass: 'bold'
        },
        {c: 'Q', d: .2, tclass: 'bold'},
        {
            c: 'R',
            krn: {
                '116': -0.0278,
                '67': -0.0278,
                '79': -0.0278,
                '71': -0.0278,
                '85': -0.0278,
                '81': -0.0278,
                '84': -0.0833,
                '89': -0.0833,
                '86': -0.111,
                '87': -0.111
            },
            tclass: 'bold'
        },
        {c: 'S', tclass: 'bold'},
        {
            c: 'T',
            krn: {
                '121': -0.0278,
                '101': -0.0833,
                '111': -0.0833,
                '114': -0.0833,
                '97': -0.0833,
                '65': -0.0833,
                '117': -0.0833
            },
            tclass: 'bold'
        },
        {c: 'U', tclass: 'bold'},
        {
            c: 'V',
            ic: 0.0139,
            krn: {
                '111': -0.0833,
                '101': -0.0833,
                '117': -0.0833,
                '114': -0.0833,
                '97': -0.0833,
                '65': -0.111,
                '79': -0.0278,
                '67': -0.0278,
                '71': -0.0278,
                '81': -0.0278
            },
            tclass: 'bold'
        },
        {
            c: 'W',
            ic: 0.0139,
            krn: {
                '111': -0.0833,
                '101': -0.0833,
                '117': -0.0833,
                '114': -0.0833,
                '97': -0.0833,
                '65': -0.111,
                '79': -0.0278,
                '67': -0.0278,
                '71': -0.0278,
                '81': -0.0278
            },
            tclass: 'bold'
        },
        {c: 'X', krn: {'79': -0.0278, '67': -0.0278, '71': -0.0278, '81': -0.0278}, tclass: 'bold'},
        {
            c: 'Y',
            ic: 0.025,
            krn: {
                '101': -0.0833,
                '111': -0.0833,
                '114': -0.0833,
                '97': -0.0833,
                '65': -0.0833,
                '117': -0.0833
            },
            tclass: 'bold'
        },
        {c: 'Z', tclass: 'bold'},
        {c: '[', d: .1, tclass: 'bold'},
        {c: '&#x201C;', tclass: 'bold'},
        {c: ']', d: .1, tclass: 'bold'},
        {c: '&#x2C6;', tclass: 'baccent'},
        {c: '&#x2D9;', tclass: 'baccent'},
        // 60 - 6F
        {c: '&#x2018;', lig: {'96': 92}, tclass: 'bold'},
        {
            c: 'a',
            a: 0,
            krn: {'118': -0.0278, '106': 0.0556, '121': -0.0278, '119': -0.0278},
            tclass: 'bold'
        },
        {
            c: 'b',
            krn: {
                '101': 0.0278,
                '111': 0.0278,
                '120': -0.0278,
                '100': 0.0278,
                '99': 0.0278,
                '113': 0.0278,
                '118': -0.0278,
                '106': 0.0556,
                '121': -0.0278,
                '119': -0.0278
            },
            tclass: 'bold'
        },
        {c: 'c', a: 0, krn: {'104': -0.0278, '107': -0.0278}, tclass: 'bold'},
        {c: 'd', tclass: 'bold'},
        {c: 'e', a: 0, tclass: 'bold'},
        {
            c: 'f',
            ic: 0.0778,
            krn: {'39': 0.0778, '63': 0.0778, '33': 0.0778, '41': 0.0778, '93': 0.0778},
            lig: {'105': 12, '102': 11, '108': 13},
            tclass: 'bold'
        },
        {c: 'g', a: 0, d: .2, ic: 0.0139, krn: {'106': 0.0278}, tclass: 'bold'},
        {
            c: 'h',
            krn: {
                '116': -0.0278,
                '117': -0.0278,
                '98': -0.0278,
                '121': -0.0278,
                '118': -0.0278,
                '119': -0.0278
            },
            tclass: 'bold'
        },
        {c: 'i', tclass: 'bold'},
        {c: 'j', d: .2, tclass: 'bold'},
        {
            c: 'k',
            krn: {'97': -0.0556, '101': -0.0278, '97': -0.0278, '111': -0.0278, '99': -0.0278},
            tclass: 'bold'
        },
        {c: 'l', tclass: 'bold'},
        {
            c: 'm',
            a: 0,
            krn: {
                '116': -0.0278,
                '117': -0.0278,
                '98': -0.0278,
                '121': -0.0278,
                '118': -0.0278,
                '119': -0.0278
            },
            tclass: 'bold'
        },
        {
            c: 'n',
            a: 0,
            krn: {
                '116': -0.0278,
                '117': -0.0278,
                '98': -0.0278,
                '121': -0.0278,
                '118': -0.0278,
                '119': -0.0278
            },
            tclass: 'bold'
        },
        {
            c: 'o',
            a: 0,
            krn: {
                '101': 0.0278,
                '111': 0.0278,
                '120': -0.0278,
                '100': 0.0278,
                '99': 0.0278,
                '113': 0.0278,
                '118': -0.0278,
                '106': 0.0556,
                '121': -0.0278,
                '119': -0.0278
            },
            tclass: 'bold'
        },
        // 70 - 7F
        {
            c: 'p',
            a: 0,
            d: .2,
            krn: {
                '101': 0.0278,
                '111': 0.0278,
                '120': -0.0278,
                '100': 0.0278,
                '99': 0.0278,
                '113': 0.0278,
                '118': -0.0278,
                '106': 0.0556,
                '121': -0.0278,
                '119': -0.0278
            },
            tclass: 'bold'
        },
        {c: 'q', a: 0, d: .2, tclass: 'bold'},
        {c: 'r', a: 0, tclass: 'bold'},
        {c: 's', a: 0, tclass: 'bold'},
        {c: 't', krn: {'121': -0.0278, '119': -0.0278}, tclass: 'bold'},
        {c: 'u', a: 0, krn: {'119': -0.0278}, tclass: 'bold'},
        {
            c: 'v',
            a: 0,
            ic: 0.0139,
            krn: {'97': -0.0556, '101': -0.0278, '97': -0.0278, '111': -0.0278, '99': -0.0278},
            tclass: 'bold'
        },
        {
            c: 'w',
            a: 0,
            ic: 0.0139,
            krn: {'101': -0.0278, '97': -0.0278, '111': -0.0278, '99': -0.0278},
            tclass: 'bold'
        },
        {c: 'x', a: 0, tclass: 'bold'},
        {
            c: 'y',
            a: 0,
            d: .2,
            ic: 0.0139,
            krn: {'111': -0.0278, '101': -0.0278, '97': -0.0278, '46': -0.0833, '44': -0.0833},
            tclass: 'bold'
        },
        {c: 'z', a: 0, tclass: 'bold'},
        {c: '&#x2013;', a: .1, ic: 0.0278, lig: {'45': 124}, tclass: 'bold'},
        {c: '&#x2014;', a: .1, ic: 0.0278, tclass: 'bold'},
        {c: '&#x2DD;', tclass: 'baccent'},
        {c: '&#x2DC;', tclass: 'baccent'},
        {c: '&#xA8;', tclass: 'baccent'}
    ]
});


jsMath.Setup.Styles({
    '.typeset .cmr10': "font-family: serif",
    '.typeset .italic': "font-style: italic",
    '.typeset .bold': "font-weight: bold",
    '.typeset .lucida': "font-family: 'lucida sans unicode'",
    '.typeset .arial': "font-family: 'Arial unicode MS'",
    '.typeset .cal': "font-family: 'Script MT', 'Script MT Bold', cursive",
    '.typeset .arrows': "font-family: 'Arial unicode MS'",
    '.typeset .arrow1': "font-family: 'Arial unicode MS'",
    '.typeset .arrow1a': "font-family: 'Arial unicode MS'; position:relative; top:.05em;left:-.15em; margin-right:-.15em",
    '.typeset .arrow2': "font-family: 'Arial unicode MS'; position:relative; top:-.1em;",
    '.typeset .arrow3': "font-family: 'Arial unicode MS'; margin:.1em",
    '.typeset .symbol': "font-family: 'Arial unicode MS'",
    '.typeset .symbol2': "font-family: 'Arial unicode MS'",
    '.typeset .delim1': "font-family: 'Times New Roman'; font-size: 133%; position:relative; top:.7em",
    '.typeset .delim1a': "font-family: 'Lucida sans unicode'; font-size: 133%; position:relative; top:.8em",
    '.typeset .delim1b': "font-family: 'Arial unicode MS'; font-size: 133%; position:relative; top:.8em",
    '.typeset .delim2': "font-family: 'Times New Roman'; font-size: 180%; position:relative; top:.75em",
    '.typeset .delim2a': "font-family: 'Lucida sans unicode'; font-size: 180%; position:relative; top:.8em",
    '.typeset .delim2b': "font-family: 'Arial unicode MS'; font-size: 180%; position:relative; top:.8em",
    '.typeset .delim3': "font-family: 'Times New Roman'; font-size: 250%; position:relative; top:.725em",
    '.typeset .delim3a': "font-family: 'Lucida sans unicode'; font-size: 250%; position:relative; top:.775em",
    '.typeset .delim3b': "font-family: 'Arial unicode MS'; font-size: 250%; position:relative; top:.8em",
    '.typeset .delim4': "font-family: 'Times New Roman'; font-size: 325%; position:relative; top:.7em",
    '.typeset .delim4a': "font-family: 'Lucida sans unicode'; font-size: 325%; position:relative; top:.775em",
    '.typeset .delim4b': "font-family: 'Arial unicode MS'; font-size: 325%; position:relative; top:.8em",
    '.typeset .delimx': "font-family: Symbol; position:relative; top:.2em",
    '.typeset .greek': "font-family: 'Times New Roman'",
    '.typeset .igreek': "font-family: 'Times New Roman'; font-style:italic",
    '.typeset .bgreek': "font-family: 'Times New Roman'; font-weight:bold",
    '.typeset .bigop1': "font-family: 'Arial unicode MS'; font-size: 130%; position: relative; top: .7em; margin:-.05em",
    '.typeset .bigop1a': "font-family: 'Arial unicode MS'; font-size: 110%; position: relative; top: .85em;",
    '.typeset .bigop1b': "font-family: 'Arial unicode MS'; font-size: 180%; position: relative; top: .6em",
    '.typeset .bigop1c': "font-family: 'Arial unicode MS'; font-size: 85%; position: relative; top: 1em",
    '.typeset .bigop2': "font-family: 'Arial unicode MS'; font-size: 230%; position: relative; top: .6em; margin:-.05em",
    '.typeset .bigop2a': "font-family: 'Arial unicode MS'; font-size: 185%; position: relative; top: .75em",
    '.typeset .bigop2b': "font-family: 'Arial unicode MS'; font-size: 275%; position: relative; top: .55em",
    '.typeset .bigop2c': "font-family: 'Arial unicode MS'; font-size: 185%; position: relative; top: 1em; margin-right:-.1em",
    '.typeset .wide1': "font-size: 67%; position: relative; top:-.5em;",
    '.typeset .wide2': "font-size: 110%; position: relative; top:-.2em;",
    '.typeset .wide3': "font-size: 175%;",
    '.typeset .wide1a': "font-family: 'Times New Roman'; font-size: 75%; position: relative; top:-.5em",
    '.typeset .wide2a': "font-family: 'Times New Roman'; font-size: 133%; position: relative; top:-.2em",
    '.typeset .wide3a': "font-family: 'Times New Roman'; font-size: 200%; position: relative; top:-.1em",
    '.typeset .root': "font-family: 'Arial unicode MS'; margin-right:-.075em",
    '.typeset .accent': "font-family: 'Arial unicode MS'; position:relative; top:.05em; left:.15em",
    '.typeset .iaccent': "font-family: 'Arial unicode MS'; position:relative; top:.05em; left:.15em; font-style:italic",
    '.typeset .baccent': "font-family: 'Arial unicode MS'; position:relative; top:.05em; left:.15em; font-weight:bold"
});

//
// adjust for Mozilla
//
if (jsMath.browser == 'Mozilla') {
    jsMath.Update.TeXfonts({
        cmex10: {
            '48': {c: '&#xF8EB;'},
            '49': {c: '&#xF8F6;'},
            '50': {c: '&#xF8EE;'},
            '51': {c: '&#xF8F9;'},
            '52': {c: '&#xF8F0;'},
            '53': {c: '&#xF8FB;'},
            '54': {c: '&#xF8EF;'},
            '55': {c: '&#xF8FA;'},
            '56': {c: '&#xF8F1;'},
            '57': {c: '&#xF8FC;'},
            '58': {c: '&#xF8F3;'},
            '59': {c: '&#xF8FE;'},
            '60': {c: '&#xF8F2;'},
            '61': {c: '&#xF8FD;'},
            '62': {c: '&#xF8F4;'},
            '64': {c: '&#xF8ED;'},
            '65': {c: '&#xF8F8;'},
            '66': {c: '&#xF8EC;'},
            '67': {c: '&#xF8F7;'}
        }
    });
    jsMath.Setup.Styles({
        '.typeset .accent': 'font-family: Arial unicode MS; position:relative; top:.05em; left:.05em'
    });
}

//
// adjust for MSIE
//
if (jsMath.browser == "MSIE") {
    jsMath.Browser.msieFontBug = 1;
    jsMath.Update.TeXfonts({
        cmex10: {
            '63': {c: '<span style="position:relative; left:.125em; margin-right:.125em">|</span>'},
            '119': {c: '<span style="position:relative; left:.02em; margin-right=.08em">|</span><span style="margin-right:.125em">|</span>'}
        }
    });
}

/*
 *  No access to TeX "not" character, so fake this
 *  Also ajust the bowtie spacing
 */
jsMath.Macro('not', '\\mathrel{\\rlap{\\kern 3mu/}}');
jsMath.Macro('bowtie', '\\mathrel\\triangleright\\kern-6mu\\mathrel\\triangleleft');

jsMath.Box.defaultH = 0.8;
