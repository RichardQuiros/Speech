import React from 'react'
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";

class MySection extends React.Component {
  render() {
    return (
      <div className="section">
        <h3>{this.props.content}</h3>
      </div>
    );
  }
}

const anchors = ["¿Qué&nbsp;es&nbsp;un&nbsp;grafo?", "secondPage", "thirdPage"];

const GrafosArbol = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["#0099ff", "#fff", "#0798ec"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <div>
          <MySection content={
              <div>
                  <div className='text-4xl text-white font bold'>¿Qué son los grafos?</div>
                  <svg className='traslate--y' width="970" height="396" viewBox="0 0 970 796" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="grafo-tree">
<g id="circule">
<path id="Vector" opacity="0.3" d="M917 253C946.271 253 970 229.271 970 200C970 170.729 946.271 147 917 147C887.729 147 864 170.729 864 200C864 229.271 887.729 253 917 253Z" fill="#CCCCCC"/>
<path id="Vector_2" d="M917 230C933.569 230 947 216.569 947 200C947 183.431 933.569 170 917 170C900.431 170 887 183.431 887 200C887 216.569 900.431 230 917 230Z" fill="white"/>
</g>
<g id="circule_2">
<path id="Vector_3" opacity="0.3" d="M882 106C911.271 106 935 82.2711 935 53C935 23.7289 911.271 0 882 0C852.729 0 829 23.7289 829 53C829 82.2711 852.729 106 882 106Z" fill="#CCCCCC"/>
<path id="Vector_4" d="M882 83C898.569 83 912 69.5685 912 53C912 36.4315 898.569 23 882 23C865.431 23 852 36.4315 852 53C852 69.5685 865.431 83 882 83Z" fill="white"/>
</g>
<g id="circule_3">
<path id="Vector_5" opacity="0.3" d="M53 306C82.2711 306 106 282.271 106 253C106 223.729 82.2711 200 53 200C23.7289 200 0 223.729 0 253C0 282.271 23.7289 306 53 306Z" fill="#CCCCCC"/>
<path id="Vector_6" d="M53 283C69.5685 283 83 269.569 83 253C83 236.431 69.5685 223 53 223C36.4315 223 23 236.431 23 253C23 269.569 36.4315 283 53 283Z" fill="white"/>
</g>
<g id="circule_4">
<path id="Vector_7" opacity="0.3" d="M100 718C129.271 718 153 694.271 153 665C153 635.729 129.271 612 100 612C70.7289 612 47 635.729 47 665C47 694.271 70.7289 718 100 718Z" fill="#CCCCCC"/>
<path id="Vector_8" d="M100 695C116.569 695 130 681.569 130 665C130 648.431 116.569 635 100 635C83.4315 635 70 648.431 70 665C70 681.569 83.4315 695 100 695Z" fill="white"/>
</g>
<g id="circule_5">
<path id="Vector_9" opacity="0.3" d="M172 153C201.271 153 225 129.271 225 100C225 70.7289 201.271 47 172 47C142.729 47 119 70.7289 119 100C119 129.271 142.729 153 172 153Z" fill="#CCCCCC"/>
<path id="Vector_10" d="M172 130C188.569 130 202 116.569 202 100C202 83.4315 188.569 70 172 70C155.431 70 142 83.4315 142 100C142 116.569 155.431 130 172 130Z" fill="white"/>
</g>
<path id="Vector_11" d="M868 431C868 609.34 740.09 757.81 571 789.67C570.34 789.8 569.67 789.92 569 790.04C558.49 791.97 547.823 793.433 537 794.43C536.33 794.5 535.67 794.56 535 794.61C524.46 795.53 513.793 795.993 503 796C502.33 796 501.67 796 501 795.99C490.22 795.94 479.553 795.42 469 794.43C468.33 794.38 467.67 794.31 467 794.24C456.19 793.19 445.523 791.667 435 789.67C434.33 789.55 433.66 789.42 433 789.29C264.9 756.64 138 608.64 138 431C138 229.42 301.42 66 503 66C704.58 66 868 229.42 868 431Z" fill="#3F3D56"/>
<path id="Vector_12" d="M572 274.5H570V571H572V274.5Z" fill="#00B0FF"/>
<path id="Vector_13" d="M572 147.402H570V234.874H572V147.402Z" fill="#00B0FF"/>
<path id="Vector_14" d="M435 138.275H433V571H435V138.275Z" fill="#00B0FF"/>
<path id="Vector_15" d="M469 100H467V197.457H469V100Z" fill="#00B0FF"/>
<path id="Vector_16" d="M469 244H467V540.638H469V244Z" fill="#00B0FF"/>
<path id="Vector_17" d="M469 586.75V794.43C468.33 794.38 467.67 794.31 467 794.24V586.75H469Z" fill="#00B0FF"/>
<path id="Vector_18" d="M503 68H501V343.347H503V68Z" fill="#00B0FF"/>
<path id="Vector_19" d="M503 381.52V796C502.33 796 501.67 796 501 795.99V381.52H503Z" fill="#00B0FF"/>
<path id="Vector_20" d="M537 100H535V482H537V100Z" fill="#00B0FF"/>
<path id="Vector_21" d="M537 523H535V737.173H537V523Z" fill="#00B0FF"/>
<path id="Vector_22" d="M537 782.53V794.43C536.33 794.5 535.67 794.56 535 794.61V782.53H537Z" fill="#00B0FF"/>
<path id="Vector_23" d="M571 623V789.67C570.34 789.8 569.67 789.92 569 790.04V623H571Z" fill="#00B0FF"/>
<path id="Vector_24" d="M435 623V789.67C434.33 789.55 433.66 789.42 433 789.29V623H435Z" fill="#00B0FF"/>
<path id="Vector_25" d="M401 177H399V239.41H401V177Z" fill="#00B0FF"/>
<path id="Vector_26" d="M401 286.275H399V571H401V286.275Z" fill="#00B0FF"/>
<path id="Vector_27" d="M367 200H365V571H367V200Z" fill="#00B0FF"/>
<path id="Vector_28" d="M333 230H331V350.905H333V230Z" fill="#00B0FF"/>
<path id="Vector_29" d="M333 390.968H331V571H333V390.968Z" fill="#00B0FF"/>
<path id="Vector_30" d="M299 262H297V463.536H299V262Z" fill="#00B0FF"/>
<path id="Vector_31" d="M299 501H297V571H299V501Z" fill="#00B0FF"/>
<path id="Vector_32" d="M265 292H263V359.599H265V292Z" fill="#00B0FF"/>
<path id="Vector_33" d="M265 403.819H263V571H265V403.819Z" fill="#00B0FF"/>
<path id="Vector_34" d="M231 308H229V571H231V308Z" fill="#00B0FF"/>
<path id="Vector_35" d="M197 380H195V466.937H197V380Z" fill="#00B0FF"/>
<path id="Vector_36" d="M197 506.622H195V571H197V506.622Z" fill="#00B0FF"/>
<path id="Vector_37" d="M591.412 177H590.375V554H591.412V177Z" fill="#00B0FF"/>
<path id="Vector_38" d="M639 200H637V259.441H639V200Z" fill="#00B0FF"/>
<path id="Vector_39" d="M639 299.126H637V571H639V299.126Z" fill="#00B0FF"/>
<path id="Vector_40" d="M673 257H671V292H673V257Z" fill="#00B0FF"/>
<path id="Vector_41" d="M673 331.252H671V505.11H673V331.252Z" fill="#00B0FF"/>
<path id="Vector_42" d="M673 540.638H671V571H673V540.638Z" fill="#00B0FF"/>
<path id="Vector_43" d="M707 262H705V571H707V262Z" fill="#00B0FF"/>
<path id="Vector_44" d="M741 292H739V390.968H741V292Z" fill="#00B0FF"/>
<path id="Vector_45" d="M741 428.386H739V571H741V428.386Z" fill="#00B0FF"/>
<path id="Vector_46" d="M775 308H773V571H775V308Z" fill="#00B0FF"/>
<path id="Vector_47" d="M434 624C432.022 624 430.089 623.414 428.444 622.315C426.8 621.216 425.518 619.654 424.761 617.827C424.004 616 423.806 613.989 424.192 612.049C424.578 610.109 425.53 608.327 426.929 606.929C428.327 605.53 430.109 604.578 432.049 604.192C433.989 603.806 436 604.004 437.827 604.761C439.654 605.518 441.216 606.8 442.315 608.444C443.414 610.089 444 612.022 444 614C443.997 616.651 442.942 619.193 441.068 621.068C439.193 622.942 436.651 623.997 434 624V624ZM434 606C432.418 606 430.871 606.469 429.555 607.348C428.24 608.227 427.214 609.477 426.609 610.939C426.003 612.4 425.845 614.009 426.154 615.561C426.462 617.113 427.224 618.538 428.343 619.657C429.462 620.776 430.887 621.538 432.439 621.846C433.991 622.155 435.6 621.997 437.061 621.391C438.523 620.786 439.773 619.76 440.652 618.445C441.531 617.129 442 615.582 442 614C441.998 611.879 441.154 609.846 439.654 608.346C438.154 606.846 436.121 606.002 434 606V606Z" fill="#00B0FF"/>
<path id="Vector_48" d="M468 572C466.022 572 464.089 571.414 462.444 570.315C460.8 569.216 459.518 567.654 458.761 565.827C458.004 564 457.806 561.989 458.192 560.049C458.578 558.109 459.53 556.327 460.929 554.929C462.327 553.53 464.109 552.578 466.049 552.192C467.989 551.806 470 552.004 471.827 552.761C473.654 553.518 475.216 554.8 476.315 556.444C477.414 558.089 478 560.022 478 562C477.997 564.651 476.942 567.193 475.068 569.068C473.193 570.942 470.651 571.997 468 572V572ZM468 554C466.418 554 464.871 554.469 463.555 555.348C462.24 556.227 461.214 557.477 460.609 558.939C460.003 560.4 459.845 562.009 460.154 563.561C460.462 565.113 461.224 566.538 462.343 567.657C463.462 568.776 464.887 569.538 466.439 569.846C467.991 570.155 469.6 569.997 471.061 569.391C472.523 568.786 473.773 567.76 474.652 566.445C475.531 565.129 476 563.582 476 562C475.998 559.879 475.154 557.846 473.654 556.346C472.154 554.846 470.121 554.002 468 554V554Z" fill="#00B0FF"/>
<path id="Vector_49" d="M571 624C569.022 624 567.089 623.414 565.444 622.315C563.8 621.216 562.518 619.654 561.761 617.827C561.004 616 560.806 613.989 561.192 612.049C561.578 610.109 562.53 608.327 563.929 606.929C565.327 605.53 567.109 604.578 569.049 604.192C570.989 603.806 573 604.004 574.827 604.761C576.654 605.518 578.216 606.8 579.315 608.444C580.414 610.089 581 612.022 581 614C580.997 616.651 579.942 619.193 578.068 621.068C576.193 622.942 573.651 623.997 571 624V624ZM571 606C569.418 606 567.871 606.469 566.555 607.348C565.24 608.227 564.214 609.477 563.609 610.939C563.003 612.4 562.845 614.009 563.154 615.561C563.462 617.113 564.224 618.538 565.343 619.657C566.462 620.776 567.887 621.538 569.439 621.846C570.991 622.155 572.6 621.997 574.061 621.391C575.523 620.786 576.773 619.76 577.652 618.445C578.531 617.129 579 615.582 579 614C578.998 611.879 578.154 609.846 576.654 608.346C575.154 606.846 573.121 606.002 571 606V606Z" fill="#00B0FF"/>
<path id="Vector_50" d="M536 749C534.022 749 532.089 749.586 530.444 750.685C528.8 751.784 527.518 753.346 526.761 755.173C526.004 757 525.806 759.011 526.192 760.951C526.578 762.891 527.53 764.673 528.929 766.071C530.327 767.47 532.109 768.422 534.049 768.808C535.989 769.194 538 768.996 539.827 768.239C541.654 767.482 543.216 766.2 544.315 764.556C545.414 762.911 546 760.978 546 759C545.996 756.349 544.941 753.808 543.066 751.934C541.192 750.059 538.651 749.004 536 749V749ZM536 767C534.418 767 532.871 766.531 531.555 765.652C530.24 764.773 529.214 763.523 528.609 762.061C528.003 760.6 527.845 758.991 528.154 757.439C528.462 755.887 529.224 754.462 530.343 753.343C531.462 752.224 532.887 751.462 534.439 751.154C535.991 750.845 537.6 751.003 539.061 751.609C540.523 752.214 541.773 753.24 542.652 754.555C543.531 755.871 544 757.418 544 759C543.997 761.121 543.153 763.154 541.654 764.654C540.154 766.153 538.121 766.997 536 767Z" fill="#00B0FF"/>
<path id="Vector_51" d="M536 511C534.022 511 532.089 510.414 530.444 509.315C528.8 508.216 527.518 506.654 526.761 504.827C526.004 503 525.806 500.989 526.192 499.049C526.578 497.109 527.53 495.327 528.929 493.929C530.327 492.53 532.109 491.578 534.049 491.192C535.989 490.806 538 491.004 539.827 491.761C541.654 492.518 543.216 493.8 544.315 495.444C545.414 497.089 546 499.022 546 501C545.997 503.651 544.942 506.193 543.068 508.068C541.193 509.942 538.651 510.997 536 511V511ZM536 493C534.418 493 532.871 493.469 531.555 494.348C530.24 495.227 529.214 496.477 528.609 497.939C528.003 499.4 527.845 501.009 528.154 502.561C528.462 504.113 529.224 505.538 530.343 506.657C531.462 507.776 532.887 508.538 534.439 508.846C535.991 509.155 537.6 508.997 539.061 508.391C540.523 507.786 541.773 506.76 542.652 505.445C543.531 504.129 544 502.582 544 501C543.998 498.879 543.154 496.846 541.654 495.346C540.154 493.846 538.121 493.002 536 493Z" fill="#00B0FF"/>
<path id="Vector_52" d="M502 372C500.022 372 498.089 371.414 496.444 370.315C494.8 369.216 493.518 367.654 492.761 365.827C492.004 364 491.806 361.989 492.192 360.049C492.578 358.109 493.53 356.327 494.929 354.929C496.327 353.53 498.109 352.578 500.049 352.192C501.989 351.806 504 352.004 505.827 352.761C507.654 353.518 509.216 354.8 510.315 356.444C511.414 358.089 512 360.022 512 362C511.997 364.651 510.942 367.193 509.068 369.068C507.193 370.942 504.651 371.997 502 372V372Z" fill="#00B0FF"/>
<path id="Vector_53" d="M570 263C568.022 263 566.089 262.414 564.444 261.315C562.8 260.216 561.518 258.654 560.761 256.827C560.004 255 559.806 252.989 560.192 251.049C560.578 249.109 561.53 247.327 562.929 245.929C564.327 244.53 566.109 243.578 568.049 243.192C569.989 242.806 572 243.004 573.827 243.761C575.654 244.518 577.216 245.8 578.315 247.444C579.414 249.089 580 251.022 580 253C579.997 255.651 578.942 258.193 577.068 260.068C575.193 261.942 572.651 262.997 570 263V263ZM570 245C568.418 245 566.871 245.469 565.555 246.348C564.24 247.227 563.214 248.477 562.609 249.939C562.003 251.4 561.845 253.009 562.154 254.561C562.462 256.113 563.224 257.538 564.343 258.657C565.462 259.776 566.887 260.538 568.439 260.846C569.991 261.155 571.6 260.997 573.061 260.391C574.523 259.786 575.773 258.76 576.652 257.445C577.531 256.129 578 254.582 578 253C577.998 250.879 577.154 248.846 575.654 247.346C574.154 245.846 572.121 245.002 570 245V245Z" fill="#00B0FF"/>
<path id="Vector_54" d="M332 381C330.022 381 328.089 380.414 326.444 379.315C324.8 378.216 323.518 376.654 322.761 374.827C322.004 373 321.806 370.989 322.192 369.049C322.578 367.109 323.53 365.327 324.929 363.929C326.327 362.53 328.109 361.578 330.049 361.192C331.989 360.806 334 361.004 335.827 361.761C337.654 362.518 339.216 363.8 340.315 365.444C341.414 367.089 342 369.022 342 371C341.997 373.651 340.942 376.193 339.068 378.068C337.193 379.942 334.651 380.997 332 381V381ZM332 363C330.418 363 328.871 363.469 327.555 364.348C326.24 365.227 325.214 366.477 324.609 367.939C324.003 369.4 323.845 371.009 324.154 372.561C324.462 374.113 325.224 375.538 326.343 376.657C327.462 377.776 328.887 378.538 330.439 378.846C331.991 379.155 333.6 378.997 335.061 378.391C336.523 377.786 337.773 376.76 338.652 375.445C339.531 374.129 340 372.582 340 371C339.998 368.879 339.154 366.846 337.654 365.346C336.154 363.846 334.121 363.002 332 363V363Z" fill="#00B0FF"/>
<path id="Vector_55" d="M264 390C262.022 390 260.089 389.414 258.444 388.315C256.8 387.216 255.518 385.654 254.761 383.827C254.004 382 253.806 379.989 254.192 378.049C254.578 376.109 255.53 374.327 256.929 372.929C258.327 371.53 260.109 370.578 262.049 370.192C263.989 369.806 266 370.004 267.827 370.761C269.654 371.518 271.216 372.8 272.315 374.444C273.414 376.089 274 378.022 274 380C273.997 382.651 272.942 385.193 271.068 387.068C269.193 388.942 266.651 389.997 264 390V390ZM264 372C262.418 372 260.871 372.469 259.555 373.348C258.24 374.227 257.214 375.477 256.609 376.939C256.003 378.4 255.845 380.009 256.154 381.561C256.462 383.113 257.224 384.538 258.343 385.657C259.462 386.776 260.887 387.538 262.439 387.846C263.991 388.155 265.6 387.997 267.061 387.391C268.523 386.786 269.773 385.76 270.652 384.445C271.531 383.129 272 381.582 272 380C271.998 377.879 271.154 375.846 269.654 374.346C268.154 372.846 266.121 372.002 264 372V372Z" fill="#00B0FF"/>
<path id="Vector_56" d="M298 492C296.022 492 294.089 491.414 292.444 490.315C290.8 489.216 289.518 487.654 288.761 485.827C288.004 484 287.806 481.989 288.192 480.049C288.578 478.109 289.53 476.327 290.929 474.929C292.327 473.53 294.109 472.578 296.049 472.192C297.989 471.806 300 472.004 301.827 472.761C303.654 473.518 305.216 474.8 306.315 476.444C307.414 478.089 308 480.022 308 482C307.997 484.651 306.942 487.193 305.068 489.068C303.193 490.942 300.651 491.997 298 492V492Z" fill="#00B0FF"/>
<path id="Vector_57" d="M571 148C569.022 148 567.089 147.414 565.444 146.315C563.8 145.216 562.518 143.654 561.761 141.827C561.004 140 560.806 137.989 561.192 136.049C561.578 134.109 562.53 132.327 563.929 130.929C565.327 129.53 567.109 128.578 569.049 128.192C570.989 127.806 573 128.004 574.827 128.761C576.654 129.518 578.216 130.8 579.315 132.444C580.414 134.089 581 136.022 581 138C580.997 140.651 579.942 143.193 578.068 145.068C576.193 146.942 573.651 147.997 571 148ZM571 130C569.418 130 567.871 130.469 566.555 131.348C565.24 132.227 564.214 133.477 563.609 134.939C563.003 136.4 562.845 138.009 563.154 139.561C563.462 141.113 564.224 142.538 565.343 143.657C566.462 144.776 567.887 145.538 569.439 145.846C570.991 146.155 572.6 145.997 574.061 145.391C575.523 144.786 576.773 143.76 577.652 142.445C578.531 141.129 579 139.582 579 138C578.998 135.879 578.154 133.846 576.654 132.346C575.154 130.846 573.121 130.002 571 130V130Z" fill="#00B0FF"/>
<path id="Vector_58" d="M400 272C398.022 272 396.089 271.414 394.444 270.315C392.8 269.216 391.518 267.654 390.761 265.827C390.004 264 389.806 261.989 390.192 260.049C390.578 258.109 391.53 256.327 392.929 254.929C394.327 253.53 396.109 252.578 398.049 252.192C399.989 251.806 402 252.004 403.827 252.761C405.654 253.518 407.216 254.8 408.315 256.444C409.414 258.089 410 260.022 410 262C409.997 264.651 408.942 267.193 407.068 269.068C405.193 270.942 402.651 271.997 400 272ZM400 254C398.418 254 396.871 254.469 395.555 255.348C394.24 256.227 393.214 257.477 392.609 258.939C392.003 260.4 391.845 262.009 392.154 263.561C392.462 265.113 393.224 266.538 394.343 267.657C395.462 268.776 396.887 269.538 398.439 269.846C399.991 270.155 401.6 269.997 403.061 269.391C404.523 268.786 405.773 267.76 406.652 266.445C407.531 265.129 408 263.582 408 262C407.998 259.879 407.154 257.846 405.654 256.346C404.154 254.846 402.121 254.002 400 254V254Z" fill="#00B0FF"/>
<path id="Vector_59" d="M366 201C364.022 201 362.089 200.414 360.444 199.315C358.8 198.216 357.518 196.654 356.761 194.827C356.004 193 355.806 190.989 356.192 189.049C356.578 187.109 357.53 185.327 358.929 183.929C360.327 182.53 362.109 181.578 364.049 181.192C365.989 180.806 368 181.004 369.827 181.761C371.654 182.518 373.216 183.8 374.315 185.444C375.414 187.089 376 189.022 376 191C375.997 193.651 374.942 196.193 373.068 198.068C371.193 199.942 368.651 200.997 366 201V201ZM366 183C364.418 183 362.871 183.469 361.555 184.348C360.24 185.227 359.214 186.477 358.609 187.939C358.003 189.4 357.845 191.009 358.154 192.561C358.462 194.113 359.224 195.538 360.343 196.657C361.462 197.776 362.887 198.538 364.439 198.846C365.991 199.155 367.6 198.997 369.061 198.391C370.523 197.786 371.773 196.76 372.652 195.445C373.531 194.129 374 192.582 374 191C373.998 188.879 373.154 186.846 371.654 185.346C370.154 183.846 368.121 183.002 366 183V183Z" fill="#00B0FF"/>
<path id="Vector_60" d="M196 497C194.022 497 192.089 496.414 190.444 495.315C188.8 494.216 187.518 492.654 186.761 490.827C186.004 489 185.806 486.989 186.192 485.049C186.578 483.109 187.53 481.327 188.929 479.929C190.327 478.53 192.109 477.578 194.049 477.192C195.989 476.806 198 477.004 199.827 477.761C201.654 478.518 203.216 479.8 204.315 481.444C205.414 483.089 206 485.022 206 487C205.997 489.651 204.942 492.193 203.068 494.068C201.193 495.942 198.651 496.997 196 497V497ZM196 479C194.418 479 192.871 479.469 191.555 480.348C190.24 481.227 189.214 482.477 188.609 483.939C188.003 485.4 187.845 487.009 188.154 488.561C188.462 490.113 189.224 491.538 190.343 492.657C191.462 493.776 192.887 494.538 194.439 494.846C195.991 495.155 197.6 494.997 199.061 494.391C200.523 493.786 201.773 492.76 202.652 491.445C203.531 490.129 204 488.582 204 487C203.998 484.879 203.154 482.846 201.654 481.346C200.154 479.846 198.121 479.002 196 479V479Z" fill="#00B0FF"/>
<path id="Vector_61" d="M806 380H804V466.937H806V380Z" fill="#00B0FF"/>
<path id="Vector_62" d="M806 506.622H804V571H806V506.622Z" fill="#00B0FF"/>
<path id="Vector_63" d="M805 497C803.022 497 801.089 496.414 799.444 495.315C797.8 494.216 796.518 492.654 795.761 490.827C795.004 489 794.806 486.989 795.192 485.049C795.578 483.109 796.53 481.327 797.929 479.929C799.327 478.53 801.109 477.578 803.049 477.192C804.989 476.806 807 477.004 808.827 477.761C810.654 478.518 812.216 479.8 813.315 481.444C814.414 483.089 815 485.022 815 487C814.997 489.651 813.942 492.193 812.068 494.068C810.193 495.942 807.651 496.997 805 497V497ZM805 479C803.418 479 801.871 479.469 800.555 480.348C799.24 481.227 798.214 482.477 797.609 483.939C797.003 485.4 796.845 487.009 797.154 488.561C797.462 490.113 798.224 491.538 799.343 492.657C800.462 493.776 801.887 494.538 803.439 494.846C804.991 495.155 806.6 494.997 808.061 494.391C809.523 493.786 810.773 492.76 811.652 491.445C812.531 490.129 813 488.582 813 487C812.998 484.879 812.154 482.846 810.654 481.346C809.154 479.846 807.121 479.002 805 479V479Z" fill="#00B0FF"/>
<path id="Vector_64" d="M740 418C738.022 418 736.089 417.414 734.444 416.315C732.8 415.216 731.518 413.654 730.761 411.827C730.004 410 729.806 407.989 730.192 406.049C730.578 404.109 731.53 402.327 732.929 400.929C734.327 399.53 736.109 398.578 738.049 398.192C739.989 397.806 742 398.004 743.827 398.761C745.654 399.518 747.216 400.8 748.315 402.444C749.414 404.089 750 406.022 750 408C749.997 410.651 748.942 413.193 747.068 415.068C745.193 416.942 742.651 417.997 740 418V418ZM740 400C738.418 400 736.871 400.469 735.555 401.348C734.24 402.227 733.214 403.477 732.609 404.939C732.003 406.4 731.845 408.009 732.154 409.561C732.462 411.113 733.224 412.538 734.343 413.657C735.462 414.776 736.887 415.538 738.439 415.846C739.991 416.155 741.6 415.997 743.061 415.391C744.523 414.786 745.773 413.76 746.652 412.445C747.531 411.129 748 409.582 748 408C747.998 405.879 747.154 403.846 745.654 402.346C744.154 400.846 742.121 400.002 740 400V400Z" fill="#00B0FF"/>
<path id="Vector_65" d="M672 533C670.022 533 668.089 532.414 666.444 531.315C664.8 530.216 663.518 528.654 662.761 526.827C662.004 525 661.806 522.989 662.192 521.049C662.578 519.109 663.53 517.327 664.929 515.929C666.327 514.53 668.109 513.578 670.049 513.192C671.989 512.806 674 513.004 675.827 513.761C677.654 514.518 679.216 515.8 680.315 517.444C681.414 519.089 682 521.022 682 523C681.997 525.651 680.942 528.193 679.068 530.068C677.193 531.942 674.651 532.997 672 533V533ZM672 515C670.418 515 668.871 515.469 667.555 516.348C666.24 517.227 665.214 518.477 664.609 519.939C664.003 521.4 663.845 523.009 664.154 524.561C664.462 526.113 665.224 527.538 666.343 528.657C667.462 529.776 668.887 530.538 670.439 530.846C671.991 531.155 673.6 530.997 675.061 530.391C676.523 529.786 677.773 528.76 678.652 527.445C679.531 526.129 680 524.582 680 523C679.998 520.879 679.154 518.846 677.654 517.346C676.154 515.846 674.121 515.002 672 515V515Z" fill="#00B0FF"/>
<path id="Vector_66" d="M468 231C466.022 231 464.089 230.414 462.444 229.315C460.8 228.216 459.518 226.654 458.761 224.827C458.004 223 457.806 220.989 458.192 219.049C458.578 217.109 459.53 215.327 460.929 213.929C462.327 212.53 464.109 211.578 466.049 211.192C467.989 210.806 470 211.004 471.827 211.761C473.654 212.518 475.216 213.8 476.315 215.444C477.414 217.089 478 219.022 478 221C477.997 223.651 476.942 226.193 475.068 228.068C473.193 229.942 470.651 230.997 468 231V231Z" fill="#00B0FF"/>
<path id="Vector_67" d="M672 322C670.022 322 668.089 321.414 666.444 320.315C664.8 319.216 663.518 317.654 662.761 315.827C662.004 314 661.806 311.989 662.192 310.049C662.578 308.109 663.53 306.327 664.929 304.929C666.327 303.53 668.109 302.578 670.049 302.192C671.989 301.806 674 302.004 675.827 302.761C677.654 303.518 679.216 304.8 680.315 306.444C681.414 308.089 682 310.022 682 312C681.997 314.651 680.942 317.193 679.068 319.068C677.193 320.942 674.651 321.997 672 322V322ZM672 304C670.418 304 668.871 304.469 667.555 305.348C666.24 306.227 665.214 307.477 664.609 308.939C664.003 310.4 663.845 312.009 664.154 313.561C664.462 315.113 665.224 316.538 666.343 317.657C667.462 318.776 668.887 319.538 670.439 319.846C671.991 320.155 673.6 319.997 675.061 319.391C676.523 318.786 677.773 317.76 678.652 316.445C679.531 315.129 680 313.582 680 312C679.998 309.879 679.154 307.846 677.654 306.346C676.154 304.846 674.121 304.002 672 304V304Z" fill="#00B0FF"/>
<path id="Vector_68" d="M740 293C738.022 293 736.089 292.414 734.444 291.315C732.8 290.216 731.518 288.654 730.761 286.827C730.004 285 729.806 282.989 730.192 281.049C730.578 279.109 731.53 277.327 732.929 275.929C734.327 274.53 736.109 273.578 738.049 273.192C739.989 272.806 742 273.004 743.827 273.761C745.654 274.518 747.216 275.8 748.315 277.444C749.414 279.089 750 281.022 750 283C749.997 285.651 748.942 288.193 747.068 290.068C745.193 291.942 742.651 292.997 740 293V293Z" fill="#00B0FF"/>
<path id="Vector_69" d="M638 288C636.022 288 634.089 287.414 632.444 286.315C630.8 285.216 629.518 283.654 628.761 281.827C628.004 280 627.806 277.989 628.192 276.049C628.578 274.109 629.53 272.327 630.929 270.929C632.327 269.53 634.109 268.578 636.049 268.192C637.989 267.806 640 268.004 641.827 268.761C643.654 269.518 645.216 270.8 646.315 272.444C647.414 274.089 648 276.022 648 278C647.997 280.651 646.942 283.193 645.068 285.068C643.193 286.942 640.651 287.997 638 288V288Z" fill="#00B0FF"/>
<path id="Vector_70" d="M918 288.017L738.983 285L739.017 283L916 285.983V200H918V288.017Z" fill="#2F2E41"/>
<path id="Vector_71" d="M638.923 278.386L637.077 277.614L731.334 52H882V54H732.666L638.923 278.386Z" fill="#2F2E41"/>
<path id="Vector_72" d="M503 363H52V254H54V361H503V363Z" fill="#2F2E41"/>
<path id="Vector_73" d="M468 222H169V100H171V220H468V222Z" fill="#2F2E41"/>
<path id="Vector_74" d="M299 666H100V664H297V481H299V666Z" fill="#2F2E41"/>
</g>
</svg>

              </div>
          } />
          <MySection content={"Keep going!"} />
          <MySection content={"Slide up!"} />
        </div>
      );
    }}
  />
);

export default GrafosArbol;
