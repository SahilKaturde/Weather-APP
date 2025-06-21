const image_data = {
    pune: 'https://c0.wallpaperflare.com/preview/202/970/414/india-pune-shaniwar-wada.jpg',
    mumbai: 'https://wallpapers.com/images/hd/download-mumbai-wallpaper-hsh8f47pnms9pg7s.jpg',
    jaipur: 'https://www.worldtribune.org/wp-content/uploads/sites/2/2024/01/GettyImages-1191232894.jpg',
    bangalore: 'https://t3.ftcdn.net/jpg/02/35/82/44/360_F_235824480_A3ieTGgfIMtQF6Iz3Frpy2i9vIj2Z2Oa.jpg',
    chennai: 'https://media.istockphoto.com/id/1953356650/photo/view-of-chennai-central-railway-station-in-sunny-day.jpg?s=612x612&w=0&k=20&c=m0jBVyXh7NUf1SNLfgLyWKt4bPRGoHsn-hZDFtdP3Rs=',
    delhi: 'https://www.shutterstock.com/image-photo/very-beautiful-scenery-red-fort-600nw-2479930559.jpg',
    ahmedabad: 'https://assets.architecturaldigest.in/photos/60082ecaa8f8397741703a43/master/w_1600%2Cc_limit/Ahemadabad-UNESCO-World-Heritage-Site.jpg',
    nashik: 'https://images.unsplash.com/photo-1665888002987-eb5a29ee775c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmFzaGlrJTJDJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D',
    rameshwaram: 'https://wallpaperaccess.com/full/9385362.jpg'
};

const city_select = document.getElementById('city')
const imageDiv = document.querySelector('.div03')

city_select.addEventListener('change',()=>{
    const selectedCity =city_select.value;
    const ImgURL = image_data[selectedCity]

    if(ImgURL){
        imageDiv.style.backgroundImage = `url(${ImgURL})`;
    }
});
