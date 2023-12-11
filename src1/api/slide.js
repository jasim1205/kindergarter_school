const BASE_URL = 'http://localhost/react_api';

export const Slider = async () => {
    try {
        const response = await fetch(`${BASE_URL}/slide.php`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error fetching testimonials data: ${error.message}`);
    }
};
