<template>
    <main>
        <the-about-first-section />

        <the-about-second-section />

        <the-about-background-photo-section />

        <the-about-third-section />
    </main>
</template>

<script>
import TheAboutFirstSection from '../components/About/TheAboutFirstSection'
import TheAboutSecondSection from '../components/About/TheAboutSecondSection'
import TheAboutBackgroundPhotoSection from '../components/About/TheAboutBackgroundPhotoSection'
import TheAboutThirdSection from '../components/About/TheAboutThirdSection'

export default {
    components: {
        TheAboutFirstSection,
        TheAboutSecondSection,
        TheAboutBackgroundPhotoSection,
        TheAboutThirdSection
    }
}
</script>
