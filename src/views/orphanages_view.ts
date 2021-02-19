import Orphanage from '../models/orphanage'
import imagesView from './images_view'

export default {
    render(orphanage: Orphanage) {
        return {
            id: orphanage.id,
            name: orphanage.name,
            lat: orphanage.lat,
            lng: orphanage.lng,
            about: orphanage.about,
            instructions: orphanage.instructions,
            opening_hours: orphanage.opening_hours,
            whatsapp: orphanage.whatsapp,
            open_on_weekends: orphanage.open_on_weekends,
            images: imagesView.renderMany(orphanage.images)
        }
    },

    renderMany(orphanages: Orphanage[]) {
        return orphanages.map(orphanage => this.render(orphanage))
    }
}