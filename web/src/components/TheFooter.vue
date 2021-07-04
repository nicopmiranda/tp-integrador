<template>
	<footer class="footer">
		<p>Copyright © 2021 Hardcore</p>
        <div class="footer-social-media-icons-box">
            <a href="https://ar.linkedin.com/" title="Go to Linkedin" target="_blank">
                <img class="footer-social-media-icon" src="https://i.postimg.cc/rpLms4GM/circle-linkedin-256.png" alt="Linkedin"/>
            </a>
            <a href="https://www.instagram.com/?hl=es-la" title="Go to Instagram" target="_blank">
                <img class="footer-social-media-icon" src="https://i.postimg.cc/3NPFsWgW/2018-social-media-popular-app-logo-instagram-512.png" alt="Instagram"/>
            </a>
            <a href="https://es-la.facebook.com/" title="Go to Facebook" target="_blank">
                <img class="footer-social-media-icon" src="https://i.postimg.cc/SNHzfwrQ/1-Facebook-colored-svg-copy-512.png" alt="Facebook">
            </a>
        </div>
	</footer>
</template>

<script>
export default {
	name: 'the-footer'
};
</script>

<style scoped>
* {
    margin: 0;
}

.footer {
    color: white;
    padding: 2rem 3rem;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.8rem;
    border-top: 1px solid white;
}

.footer-social-media-icons-box {
    display: flex;
    gap: 1rem;
}

.footer-social-media-icon {
    /* width: 2.5rem; */
    height: 2.5rem;
}
</style>