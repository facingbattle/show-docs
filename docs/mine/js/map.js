'use strict';function _0x5dc4(){var _0x1ae25f=['183766nxENso','push','length','slice','_totalCur','25WDaNhH','630486aFGErc','setTotal','236696Reqatn','9yAzMBx','2489634sMruXZ','_total','348104IexDej','616938YRBDBb','1596032dgTfFC'];_0x5dc4=function(){return _0x1ae25f;};return _0x5dc4();}(function(_0x10af0a,_0x49bf55){var _0x4d968a=_0x74ec,_0x3203ca=_0x10af0a();while(!![]){try{var _0x2829b5=parseInt(_0x4d968a(0x11c))/0x1+parseInt(_0x4d968a(0x11f))/0x2*(-parseInt(_0x4d968a(0x128))/0x3)+-parseInt(_0x4d968a(0x127))/0x4*(-parseInt(_0x4d968a(0x124))/0x5)+-parseInt(_0x4d968a(0x125))/0x6+parseInt(_0x4d968a(0x11d))/0x7+parseInt(_0x4d968a(0x11e))/0x8+-parseInt(_0x4d968a(0x129))/0x9;if(_0x2829b5===_0x49bf55)break;else _0x3203ca['push'](_0x3203ca['shift']());}catch(_0x236e21){_0x3203ca['push'](_0x3203ca['shift']());}}}(_0x5dc4,0x42f50));function _0x74ec(_0x404728,_0x5790e6){var _0x5dc4b6=_0x5dc4();return _0x74ec=function(_0x74ec6a,_0x40113b){_0x74ec6a=_0x74ec6a-0x11b;var _0x3c3963=_0x5dc4b6[_0x74ec6a];return _0x3c3963;},_0x74ec(_0x404728,_0x5790e6);}var totalOpened=(function(){var _0x2be68c={'_total':0x0,'_totalCur':0x0};return{'setTotal':function _0x9634b6(_0x36fdb8){var _0x53f755=_0x74ec;_0x2be68c[_0x53f755(0x11b)]=_0x36fdb8;},'getTotal':function _0x32c19e(){var _0x46175e=_0x74ec;return _0x2be68c[_0x46175e(0x11b)];},'plusTotalCur':function _0x407bac(){var _0x210d63=_0x74ec;_0x2be68c[_0x210d63(0x123)]+=0x1;},'getTotalCur':function _0x1634b8(){var _0x2b54a0=_0x74ec;return _0x2be68c[_0x2b54a0(0x123)];}};}()),arrayTrans=function arrayTrans(_0x2740ec,_0x2c523e){var _0x39b4d7=_0x74ec,_0x3da5f1=[],_0x5c8bc0=0x0,_0x37fe3e;while(_0x5c8bc0<_0x2740ec[_0x39b4d7(0x121)]){_0x37fe3e=_0x5c8bc0;var _0x44b008=_0x2740ec[_0x39b4d7(0x122)](_0x37fe3e,_0x37fe3e+_0x2c523e);_0x5c8bc0+=_0x2c523e,_0x3da5f1['push'](_0x44b008);}return _0x3da5f1;},lineArray=function lineArray(_0x5ddf97,_0x4b018c,_0x2e81d4){var _0x1a2243=_0x74ec,_0x10b64b=[],_0x41712c=_0x5ddf97*_0x4b018c,_0x2135cc=_0x41712c-_0x2e81d4;for(var _0x5cdbe9=0x0;_0x5cdbe9<_0x2135cc;_0x5cdbe9++){_0x10b64b[_0x1a2243(0x120)](0x0);}for(var _0xf15aa4=0x0;_0xf15aa4<_0x2e81d4;_0xf15aa4++){_0x10b64b[_0x1a2243(0x120)](0x9);}return _0x10b64b;},squareMine=function squareMine(_0x4c5b18,_0x30ad0e,_0x29d645){var _0x3d4fb4=_0x74ec,_0x32cdca=lineArray(_0x4c5b18,_0x30ad0e,_0x29d645);return _0x32cdca=shuffle(_0x32cdca),_0x32cdca=arrayTrans(_0x32cdca,_0x4c5b18),totalOpened[_0x3d4fb4(0x126)](_0x4c5b18*_0x30ad0e-_0x29d645),_0x32cdca;},plusAround=function plusAround(_0x32f881,_0x4f779a,_0x4c62b3){var _0x4fd8fc=_0x74ec,_0x58de89=_0x32f881[_0x4fd8fc(0x121)];_0x4f779a>=0x0&&_0x4f779a<_0x58de89&&_0x4c62b3>=0x0&&_0x4c62b3<_0x58de89&&(_0x32f881[_0x4f779a][_0x4c62b3]!==0x9&&(_0x32f881[_0x4f779a][_0x4c62b3]+=0x1));},markedLine=function markedLine(_0x331b56,_0x191175,_0x3f1d6b){_0x331b56[_0x191175][_0x3f1d6b]===0x9&&(plusAround(_0x331b56,_0x191175-0x1,_0x3f1d6b-0x1),plusAround(_0x331b56,_0x191175-0x1,_0x3f1d6b),plusAround(_0x331b56,_0x191175-0x1,_0x3f1d6b+0x1),plusAround(_0x331b56,_0x191175,_0x3f1d6b-0x1),plusAround(_0x331b56,_0x191175,_0x3f1d6b+0x1),plusAround(_0x331b56,_0x191175+0x1,_0x3f1d6b-0x1),plusAround(_0x331b56,_0x191175+0x1,_0x3f1d6b),plusAround(_0x331b56,_0x191175+0x1,_0x3f1d6b+0x1));},markedSquare=function markedSquare(_0x7597dd){var _0x1dadf9=_0x74ec;for(var _0x49834b=0x0;_0x49834b<_0x7597dd[_0x1dadf9(0x121)];_0x49834b++){var _0x2c39c4=_0x7597dd[_0x49834b];for(var _0x1ee1c7=0x0;_0x1ee1c7<_0x2c39c4[_0x1dadf9(0x121)];_0x1ee1c7++){markedLine(_0x7597dd,_0x49834b,_0x1ee1c7);}}return _0x7597dd;},getMarkedSquare=function getMarkedSquare(_0x552027,_0x5aa306,_0x4c9cf4){var _0x2cdcfc=squareMine(_0x552027,_0x5aa306,_0x4c9cf4),_0x5379b8=markedSquare(_0x2cdcfc);return _0x5379b8;};