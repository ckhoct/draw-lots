var tarot = ['0號：愚者',
    '1號：魔術師',
    '2號：女祭司',
    '3號：皇后',
    '4號：皇帝',
    '5號：教宗',
    '6號：戀人',
    '7號：戰車',
    '8號：力量',
    '9號：隱者',
    '10號：命運之輪',
    '11號：正義',
    '12號：倒吊人',
    '13號：死亡',
    '14號：節制',
    '15號：惡魔',
    '16號：高塔',
    '17號：星星',
    '18號：月亮',
    '19號：太陽',
    '20號：審判',
    '21號：世界']
for (var i = 1; i <= 14; i++) {
    switch (i) {
        case 1 :
            i = 'ACE';
            break;
        case 11 :
            i = '侍者';
            break;
        case 12 :
            i = '騎士';
            break;
        case 13 :
            i = '皇后';
            break;
        case 14 :
            i = '國王';
            break;
    }
    tarot.push('寶劍' + i);
    tarot.push('權杖' + i);
    tarot.push('聖杯' + i);
    tarot.push('錢幣' + i);
    switch (i) {
        case 'ACE' :
            i = 1;
            break;
        case '侍者' :
            i = 11;
            break;
        case '騎士' :
            i = 12;
            break;
        case '皇后' :
            i = 13;
            break;
        case '國王' :
            i = 14;
            break;
    }
}