import React, {Fragment} from 'react'
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import Nav from './navbar'
class MySection extends React.Component {
  render() {
    return (
      <div className="section">
        <h3>{this.props.content}</h3>
      </div>
    );
  }
}

const Nosotros = ()=>{

    const perfil = (img,name,title,facebook,intagram,github)=>(
        <div className='w-full md:mt-0 mt-8 p-5 bg-white shadow-lg transform scale-100 md:scale-75 grid grid-cols-4 md:grid-cols-1'>
        <div className='flow-root  grid place-content-center'>
        <img alt='perfil' className='rounded-full' width='200px' src={img}/>
      </div>
    <div className='mt-5 text-center'>{name}</div>
      <div className='mt-5 text-center'>{title}
      </div>
      <div className='grid grid-cols-3 w-full p-3 mt-1 md:mt-20'>
      <a href={facebook} class="im im-facebook text-base text-gray-800"><span className='md:visible invisible'> Facebook</span></a>
      <a href={intagram} class="im im-instagram text-base text-gray-800"><span className='md:visible invisible'> Instagram</span></a>
      <a href={github} class="im im-github text-base text-gray-800"><span className='md:visible invisible'> github</span></a>
      </div>
    </div>
    )
    const anchors = ["about", "nosotros", "tecnología"];
    return(
        <Fragment>
            <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["#0099ff", "#fff", "#0099ff"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <div>
          <MySection content={
          <div className='w-full p-4 text-white pt-20 md:pt-0' style={{height:'100vh'}}>
              <div className='fade'>
            <Nav/>
            </div>
            <div className='text-center mt-0 md:mt-20'>
            <div className='text-6xl black'>
                NO!
            </div>
            <div className='font-bold text-2xl'>más ptt</div>
            <div>Speech busca aprovechar todo la ingeniería de los mejores frameworck utilizado en la actualidad para hacer presentaciones más dinámicas.</div>
            </div>
            <div className='flow-root mt-20 grid place-content-center'>
            <a href='#nosotros' class="font-bold py-2 px-5 rounded fade-loop">
            <svg class="fill-current  h-3 w-6 flex items-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/></svg>
            <svg class="fill-current  h-3 w-6 flex items-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/></svg>
            </a>
            </div>

            </div>} />
          <MySection content={
          <div>
               <div className='text-3xl font-black text-center text-blue-1000 '>Miembros</div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-3 item-center w-full transform scale-75 md:scale-100'>
              {perfil('https://instagram.fpac1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/84263472_1136631100029423_4616485155930199324_n.jpg?_nc_ht=instagram.fpac1-1.fna.fbcdn.net&_nc_ohc=CRQk-PeP1OsAX9_TE99&_nc_tp=25&oh=4f991aecdfd1d8e2bf882adbee306f27&oe=5FDBF4F6','Richard Jahir Quiros','sistema computacionales','https://facebook.com','https://facebook.com','https://facebook.com')}
              {perfil('https://www.tech101.in/wp-content/uploads/2018/07/blank-profile-picture.png','texto de ejemplo','inserte texto','https://facebook.com','https://facebook.com','https://facebook.com')}
              {perfil('https://www.tech101.in/wp-content/uploads/2018/07/blank-profile-picture.png','texto de ejemplo','inserte texto','https://facebook.com','https://facebook.com','https://facebook.com')}
          </div>
          </div>} />
          <MySection content={<div className='grid item-center'>
              <div className='text-6xl font-black text-center text-white '>Tecnología usada</div>
          <svg className='w-full p-10' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 338 67" fill="none">
<g id="react+tailwindcss">
<g id="tailwindcss">
<path id="Vector" d="M145.264 21.7369C139.335 21.7369 135.633 24.6941 134.148 30.6191C136.376 27.6618 138.969 26.5437 141.928 27.2856C143.622 27.7036 144.824 28.9367 146.163 30.2951C148.338 32.5105 150.868 35.0602 156.379 35.0602C162.307 35.0602 166.009 32.1029 167.494 26.178C165.267 29.1352 162.673 30.2533 159.714 29.5114C158.02 29.0934 156.818 27.8604 155.479 26.5019C153.294 24.297 150.774 21.7369 145.264 21.7369ZM134.148 35.0706C128.22 35.0706 124.518 38.0279 123.033 43.9528C125.26 40.9956 127.854 39.8775 130.813 40.6194C132.507 41.0374 133.709 42.2704 135.048 43.6289C137.223 45.8442 139.753 48.3939 145.264 48.3939C151.192 48.3939 154.894 45.4367 156.379 39.5117C154.151 42.469 151.558 43.5871 148.599 42.8452C146.905 42.4272 145.703 41.1941 144.364 39.8357C142.179 37.6203 139.659 35.0706 134.148 35.0706Z" fill="#14B4C6"/>
<path id="Vector_2" d="M188.888 34.0361H185.008V41.539C185.008 43.5348 186.326 43.5035 188.888 43.3885V46.4189C183.691 47.0459 181.631 45.6039 181.631 41.539V34.0361H178.755V30.7863H181.631V26.5855L185.008 25.5823V30.7863H188.888C188.888 30.7758 188.888 34.0361 188.888 34.0361ZM203.673 30.7758H207.051V46.4085H203.673V44.1618C202.481 45.8233 200.641 46.816 198.194 46.816C193.938 46.816 190.404 43.2213 190.404 38.5922C190.404 33.9316 193.938 30.3683 198.194 30.3683C200.63 30.3683 202.481 31.3714 203.673 32.9911C203.673 33.0016 203.673 30.7758 203.673 30.7758ZM198.727 43.5975C201.54 43.5975 203.673 41.5076 203.673 38.5922C203.673 35.6767 201.55 33.5868 198.727 33.5868C195.914 33.5868 193.781 35.6767 193.781 38.5922C193.781 41.5076 195.914 43.5975 198.727 43.5975ZM212.687 28.4351C211.494 28.4351 210.533 27.4319 210.533 26.2825C210.533 25.0912 211.505 24.1298 212.687 24.1298C213.879 24.1298 214.841 25.1016 214.841 26.2825C214.841 27.4319 213.868 28.4351 212.687 28.4351ZM210.993 46.4085V30.7758H214.37V46.4085C214.37 46.4085 210.993 46.4085 210.993 46.4085ZM218.281 46.4085V23.5864H221.658V46.4085H218.281ZM243.596 30.7758H247.161L242.247 46.4085H238.932L235.68 35.8752L232.397 46.4085H229.082L224.168 30.7758H227.733L230.766 41.5599L234.049 30.7758H237.27L240.521 41.5599L243.596 30.7758ZM251.354 28.4351C250.162 28.4351 249.2 27.4319 249.2 26.2825C249.2 25.0912 250.173 24.1298 251.354 24.1298C252.546 24.1298 253.508 25.1016 253.508 26.2825C253.508 27.4319 252.536 28.4351 251.354 28.4351ZM249.66 46.4085V30.7758H253.038V46.4085H249.66ZM265.178 30.3683C268.681 30.3683 271.18 32.7403 271.18 36.8053V46.398H267.802V37.1396C267.802 34.7676 266.422 33.5136 264.299 33.5136C262.083 33.5136 260.326 34.8303 260.326 38.0174V46.398H256.949V30.7758H260.326V32.7717C261.361 31.152 263.055 30.3683 265.178 30.3683ZM287.199 24.5269H290.576V46.4085H287.199V44.1618C286.007 45.8233 284.167 46.816 281.72 46.816C277.464 46.816 273.93 43.2213 273.93 38.5922C273.93 33.9316 277.464 30.3683 281.72 30.3683C284.156 30.3683 286.007 31.3714 287.199 32.9911C287.199 33.0016 287.199 24.5269 287.199 24.5269ZM282.253 43.5975C285.066 43.5975 287.199 41.5076 287.199 38.5922C287.199 35.6871 285.076 33.5868 282.253 33.5868C279.43 33.5868 277.307 35.6767 277.307 38.5922C277.307 41.5076 279.44 43.5975 282.253 43.5975ZM301.901 46.816C297.174 46.816 293.64 43.2213 293.64 38.5922C293.64 33.9316 297.174 30.3683 301.901 30.3683C304.964 30.3683 307.62 31.9671 308.875 34.4018L305.968 36.0947C305.278 34.6213 303.751 33.6913 301.869 33.6913C299.119 33.6913 297.017 35.7812 297.017 38.6026C297.017 41.4136 299.109 43.5139 301.869 43.5139C303.751 43.5139 305.278 42.5421 306.031 41.1105L308.938 42.772C307.631 45.2277 304.975 46.816 301.901 46.816ZM314.511 35.0915C314.511 37.9338 322.928 36.2201 322.928 41.9987C322.928 45.1232 320.21 46.816 316.832 46.816C313.706 46.816 311.447 45.4053 310.454 43.1586L313.361 41.4658C313.863 42.8765 315.118 43.7125 316.832 43.7125C318.338 43.7125 319.488 43.2109 319.488 41.9569C319.488 39.1773 311.071 40.7343 311.071 35.1438C311.071 32.2074 313.601 30.3578 316.791 30.3578C319.352 30.3578 321.486 31.5491 322.573 33.6077L319.729 35.2065C319.164 33.9839 318.066 33.4196 316.791 33.4196C315.578 33.4405 314.511 33.9734 314.511 35.0915ZM328.93 35.0915C328.93 37.9338 337.348 36.2201 337.348 41.9987C337.348 45.1232 334.629 46.816 331.252 46.816C328.125 46.816 325.867 45.4053 324.873 43.1586L327.78 41.4658C328.282 42.8765 329.537 43.7125 331.252 43.7125C332.758 43.7125 333.908 43.2109 333.908 41.9569C333.908 39.1773 325.49 40.7343 325.49 35.1438C325.49 32.2074 328.021 30.3578 331.21 30.3578C333.772 30.3578 335.905 31.5491 336.992 33.6077L334.148 35.2065C333.584 33.9839 332.486 33.4196 331.21 33.4196C329.997 33.4405 328.93 33.9734 328.93 35.0915Z" fill="black"/>
</g>
<g id="plus">
<path id="Vector_3" d="M104.504 31.6232V35.1865H89.5827V31.6232H104.504V31.6232ZM98.9099 40.8607H95.156V25.949H98.9099V40.8607Z" fill="white"/>
</g>
<g id="react">
<path id="Vector_4" d="M74.6236 33.2495C74.6236 28.3523 68.4869 23.7113 59.0782 20.8333C61.2495 11.2499 60.2845 3.62544 56.0325 1.1844C55.0524 0.61181 53.9065 0.340584 52.655 0.340584V3.70078C53.3486 3.70078 53.9065 3.8364 54.3739 4.09256C56.4245 5.26787 57.3141 9.74312 56.6205 15.4992C56.4547 16.9156 56.1833 18.4073 55.8516 19.9292C52.8963 19.2059 49.6696 18.6484 46.2771 18.2868C44.2416 15.4992 42.1307 12.9677 40.0047 10.7527C44.9201 6.18703 49.5339 3.68572 52.6701 3.68572V0.325516C48.5237 0.325516 43.0956 3.27888 37.6073 8.40205C32.1189 3.30901 26.6909 0.385789 22.5445 0.385789V3.74599C25.6656 3.74599 30.2945 6.23224 35.2099 10.7678C33.099 12.9828 30.9881 15.4992 28.9827 18.2868C25.5751 18.6484 22.3484 19.2059 19.3932 19.9443C19.0464 18.4374 18.7901 16.9758 18.6091 15.5745C17.9005 9.81846 18.775 5.34321 20.8105 4.15283C21.2628 3.8816 21.8509 3.76106 22.5445 3.76106V0.400857C21.2779 0.400857 20.132 0.672083 19.1368 1.24467C14.8999 3.68572 13.95 11.2951 16.1363 20.8484C6.75788 23.7414 0.651321 28.3674 0.651321 33.2495C0.651321 38.1466 6.78803 42.7876 16.1966 45.6656C14.0254 55.249 14.9904 62.8735 19.2424 65.3145C20.2225 65.8871 21.3684 66.1583 22.6349 66.1583C26.7813 66.1583 32.2094 63.205 37.6978 58.0818C43.1861 63.1748 48.6142 66.098 52.7606 66.098C54.0271 66.098 55.1731 65.8268 56.1682 65.2542C60.4051 62.8132 61.355 55.2038 59.1687 45.6505C68.517 42.7725 74.6236 38.1315 74.6236 33.2495V33.2495ZM54.9921 23.199C54.4342 25.1428 53.7407 27.1468 52.9566 29.1509C52.3384 27.9455 51.6901 26.74 50.9814 25.5346C50.2878 24.3291 49.549 23.1538 48.8102 22.0086C50.9512 22.325 53.0169 22.7168 54.9921 23.199ZM48.0864 39.2466C46.9104 41.2808 45.7041 43.2095 44.4527 45.0026C42.2061 45.1985 39.9293 45.304 37.6374 45.304C35.3607 45.304 33.0839 45.1985 30.8524 45.0177C29.6009 43.2246 28.3796 41.3109 27.2035 39.2918C26.0576 37.3179 25.0172 35.3138 24.0673 33.2947C25.0022 31.2755 26.0576 29.2564 27.1885 27.2825C28.3645 25.2483 29.5708 23.3195 30.8222 21.5264C33.0688 21.3305 35.3456 21.2251 37.6374 21.2251C39.9142 21.2251 42.191 21.3305 44.4225 21.5114C45.674 23.3045 46.8953 25.2181 48.0714 27.2373C49.2173 29.2112 50.2577 31.2152 51.2076 33.2344C50.2577 35.2535 49.2173 37.2726 48.0864 39.2466ZM52.9566 37.2877C53.7708 39.3069 54.4644 41.326 55.0374 43.2848C53.0622 43.767 50.9814 44.1739 48.8253 44.4903C49.5641 43.3301 50.3029 42.1397 50.9965 40.9191C51.6901 39.7137 52.3384 38.4932 52.9566 37.2877ZM37.6676 53.3654C36.2654 51.9189 34.8631 50.3066 33.4759 48.5436C34.833 48.6039 36.2201 48.6491 37.6224 48.6491C39.0397 48.6491 40.4419 48.619 41.814 48.5436C40.457 50.3066 39.0548 51.9189 37.6676 53.3654ZM26.4496 44.4903C24.3086 44.1739 22.2429 43.7821 20.2677 43.2999C20.8256 41.3561 21.5192 39.3521 22.3032 37.348C22.9214 38.5534 23.5698 39.7589 24.2784 40.9644C24.9871 42.1698 25.7108 43.3451 26.4496 44.4903ZM37.5922 13.1335C38.9945 14.58 40.3967 16.1923 41.7839 17.9553C40.4269 17.895 39.0397 17.8498 37.6374 17.8498C36.2201 17.8498 34.8179 17.8799 33.4458 17.9553C34.8028 16.1923 36.205 14.58 37.5922 13.1335ZM26.4346 22.0086C25.6957 23.1688 24.9569 24.3592 24.2633 25.5798C23.5697 26.7852 22.9214 27.9907 22.3032 29.1961C21.489 27.177 20.7954 25.1578 20.2225 23.199C22.1977 22.7319 24.2784 22.325 26.4346 22.0086ZM12.789 40.8739C7.45146 38.5987 3.99862 35.6152 3.99862 33.2495C3.99862 30.8838 7.45146 27.8852 12.789 25.625C14.0857 25.0674 15.5031 24.5702 16.9656 24.1031C17.8251 27.0564 18.9559 30.1303 20.3582 33.2796C18.971 36.4138 17.8552 39.4726 17.0109 42.4109C15.5181 41.9438 14.1008 41.4315 12.789 40.8739ZM20.901 62.4063C18.8504 61.231 17.9608 56.7558 18.6544 50.9997C18.8202 49.5833 19.0916 48.0916 19.4233 46.5697C22.3786 47.293 25.6053 47.8505 28.9978 48.2121C31.0333 50.9997 33.1442 53.5312 35.2702 55.7462C30.3548 60.3119 25.741 62.8132 22.6048 62.8132C21.9263 62.7981 21.3533 62.6625 20.901 62.4063V62.4063ZM56.6658 50.9244C57.3744 56.6804 56.4999 61.1557 54.4644 62.3461C54.0121 62.6173 53.424 62.7378 52.7304 62.7378C49.6093 62.7378 44.9804 60.2516 40.065 55.7161C42.1759 53.5011 44.2868 50.9847 46.2922 48.1971C49.6998 47.8354 52.9264 47.2779 55.8817 46.5396C56.2285 48.0615 56.4999 49.5231 56.6658 50.9244V50.9244ZM62.4708 40.8739C61.1741 41.4315 59.7567 41.9287 58.2942 42.3958C57.4347 39.4425 56.3039 36.3686 54.9017 33.2193C56.2888 30.0851 57.4046 27.0263 58.249 24.088C59.7417 24.5551 61.159 25.0674 62.4858 25.625C67.8234 27.9003 71.2763 30.8838 71.2763 33.2495C71.2612 35.6152 67.8084 38.6137 62.4708 40.8739V40.8739Z" fill="#61DAFB"/>
<path id="Vector_5" d="M37.6224 40.1356C41.4279 40.1356 44.513 37.0526 44.513 33.2495C44.513 29.4463 41.4279 26.3633 37.6224 26.3633C33.8168 26.3633 30.7318 29.4463 30.7318 33.2495C30.7318 37.0526 33.8168 40.1356 37.6224 40.1356Z" fill="#61DAFB"/>
</g>
</g>
</svg>

<div className='absolute right-0 bottom-0 m-5 text-white'><a href='#about' class="im im-angle-up-circle"> </a></div></div>} />
        </div>
      );
    }}
  />
        </Fragment>
    )
}

export default Nosotros