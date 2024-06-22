window.onload = () => {
    // Código para mostrar las flores
    const showFlowersTimeout = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(showFlowersTimeout);
        
        // Código para mostrar el corazón después de que las flores aparezcan
        const showHeartTimeout = setTimeout(() => {
            const heart = document.querySelector('.heart');
            heart.style.display = 'block';
            clearTimeout(showHeartTimeout);
        }, 5000); // Cambia este valor según la duración que quieras esperar antes de mostrar el corazón después de que las flores aparezcan
    }, 1000);
};
