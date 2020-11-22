export default async (name, page) => {
    try {
        const picturesList = await fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${name}&page=${page}&per_page=12&key=19224209 - dfb59b6e97d417d7c913d723b`);
        return picturesList.json();
    } catch (error) {
        return error;
    }
}
// было  per page =9
