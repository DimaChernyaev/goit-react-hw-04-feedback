function changeBackgroundImage(percentage) {
    if (percentage === 0) {
        return 'https://cdn.oneesports.gg/cdn-data/2023/03/Anime_Konosuba_Meguminspinoff.jpg';
    } else if (percentage !== 0 && percentage <= 40) {
        return 'https://pibig.info/uploads/posts/2021-04/1619451368_13-pibig_info-p-anime-smeshnie-litsa-anime-krasivo-15.jpg';
    } else if (percentage > 40 && percentage <= 70) {
        return 'https://pibig.info/uploads/posts/2021-04/1619378191_17-pibig_info-p-khitroe-litso-anime-krasivo-22.jpg';
    } else {
        return 'https://img1.goodfon.ru/original/1920x1080/4/41/anime-art-kono-subarashii.jpg'
    }
}

export default changeBackgroundImage;