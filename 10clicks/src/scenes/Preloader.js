import Phaser from "phaser";

import { Base64Manager } from "../utils/Base64Manager.js";
import { LoadBase64Audio } from "../utils/LoadBase64Audio.js";
import { adReady } from "../networkPlugin";

import { audioBGMMP3 } from '../../media/audio_BGM.mp3.js';
import { audioCorrectAnswerMP3 } from '../../media/audio_Correct Answer.mp3.js';
import { audioFinishedMP3 } from '../../media/audio_Finished.mp3.js';
import { audioWrongAnswerMP3 } from '../../media/audio_Wrong Answer.mp3.js';
import { imagesBackgroundBgColoredExtended1WEBP } from '../../media/images_Background_Bg-colored-extended_1.webp.js';
import { imagesBackgroundBgColoredWhiteExtended1WEBP } from '../../media/images_Background_Bg-colored-white-extended_1.webp.js';
import { imagesBlueCointainerWEBP } from '../../media/images_blue-cointainer.webp.js';
import { imagesColoredSticker10KursiWEBP } from '../../media/images_Colored_sticker_10_Kursi.webp.js';
import { imagesColoredSticker11GirlSleepWEBP } from '../../media/images_Colored_sticker_11_Girl-Sleep.webp.js';
import { imagesColoredSticker12BukuWEBP } from '../../media/images_Colored_sticker_12_Buku.webp.js';
import { imagesColoredSticker13CheesecakeWEBP } from '../../media/images_Colored_sticker_13_Cheesecake.webp.js';
import { imagesColoredSticker14KarpetWEBP } from '../../media/images_Colored_sticker_14_Karpet.webp.js';
import { imagesColoredSticker15WaterWEBP } from '../../media/images_Colored_sticker_15_Water.webp.js';
import { imagesColoredSticker16RemoteWEBP } from '../../media/images_Colored_sticker_16_Remote.webp.js';
import { imagesColoredSticker17JamDindingWEBP } from '../../media/images_Colored_sticker_17_Jam-Dinding.webp.js';
import { imagesColoredSticker18BantalWEBP } from '../../media/images_Colored_sticker_18_Bantal.webp.js';
import { imagesColoredSticker19BayiWEBP } from '../../media/images_Colored_sticker_19_Bayi.webp.js';
import { imagesColoredSticker1GirlPinkDudukWEBP } from '../../media/images_Colored_sticker_1_Girl-Pink-Duduk.webp.js';
import { imagesColoredSticker20BoyKucingWEBP } from '../../media/images_Colored_sticker_20_Boy-Kucing.webp.js';
import { imagesColoredSticker21KeysWEBP } from '../../media/images_Colored_sticker_21_Keys.webp.js';
import { imagesColoredSticker22BearWEBP } from '../../media/images_Colored_sticker_22_Bear.webp.js';
import { imagesColoredSticker23PigoraTulipWEBP } from '../../media/images_Colored_sticker_23_Pigora-Tulip.webp.js';
import { imagesColoredSticker24BalokMenaraWEBP } from '../../media/images_Colored_sticker_24_Balok-Menara.webp.js';
import { imagesColoredSticker25BoyJuiceWEBP } from '../../media/images_Colored_sticker_25_Boy-Juice.webp.js';
import { imagesColoredSticker26PotWEBP } from '../../media/images_Colored_sticker_26_Pot.webp.js';
import { imagesColoredSticker27BoyHideLampWEBP } from '../../media/images_Colored_sticker_27_Boy-Hide-Lamp.webp.js';
import { imagesColoredSticker28DotSusuWEBP } from '../../media/images_Colored_sticker_28_Dot-Susu.webp.js';
import { imagesColoredSticker29YarnWEBP } from '../../media/images_Colored_sticker_29_Yarn.webp.js';
import { imagesColoredSticker2GirlDudukWEBP } from '../../media/images_Colored_sticker_2_Girl-Duduk.webp.js';
import { imagesColoredSticker30DekorasiWEBP } from '../../media/images_Colored_sticker_30_Dekorasi.webp.js';
import { imagesColoredSticker31IbuBayiWEBP } from '../../media/images_Colored_sticker_31_Ibu-Bayi.webp.js';
import { imagesColoredSticker32BoyDudukSilaWEBP } from '../../media/images_Colored_sticker_32_Boy-Duduk-Sila.webp.js';
import { imagesColoredSticker33TongSampahWEBP } from '../../media/images_Colored_sticker_33_Tong-Sampah.webp.js';
import { imagesColoredSticker34KaktusWEBP } from '../../media/images_Colored_sticker_34_Kaktus.webp.js';
import { imagesColoredSticker35BoyCookieWEBP } from '../../media/images_Colored_sticker_35_Boy-Cookie.webp.js';
import { imagesColoredSticker36BoyPlaneWEBP } from '../../media/images_Colored_sticker_36_Boy-Plane.webp.js';
import { imagesColoredSticker37BoyTiduranWEBP } from '../../media/images_Colored_sticker_37_Boy-Tiduran.webp.js';
import { imagesColoredSticker38BoyLaperWEBP } from '../../media/images_Colored_sticker_38_Boy-Laper.webp.js';
import { imagesColoredSticker39BapakMauMakanWEBP } from '../../media/images_Colored_sticker_39_Bapak-Mau-Makan.webp.js';
import { imagesColoredSticker3GirlTea2WEBP } from '../../media/images_Colored_sticker_3_Girl-Tea-2.webp.js';
import { imagesColoredSticker40GirlTea1WEBP } from '../../media/images_Colored_sticker_40_Girl-Tea-1.webp.js';
import { imagesColoredSticker41BoyTelpWEBP } from '../../media/images_Colored_sticker_41_Boy-Telp.webp.js';
import { imagesColoredSticker42CicakWEBP } from '../../media/images_Colored_sticker_42_Cicak.webp.js';
import { imagesColoredSticker43TehWEBP } from '../../media/images_Colored_sticker_43_Teh.webp.js';
import { imagesColoredSticker44GirlReadWEBP } from '../../media/images_Colored_sticker_44_Girl-Read.webp.js';
import { imagesColoredSticker45GantunganTopiWEBP } from '../../media/images_Colored_sticker_45_Gantungan-Topi.webp.js';
import { imagesColoredSticker46TruckWEBP } from '../../media/images_Colored_sticker_46_Truck.webp.js';
import { imagesColoredSticker47CatWEBP } from '../../media/images_Colored_sticker_47_Cat.webp.js';
import { imagesColoredSticker48GirlBonekaWEBP } from '../../media/images_Colored_sticker_48_Girl-Boneka.webp.js';
import { imagesColoredSticker49BalokAngkaWEBP } from '../../media/images_Colored_sticker_49_Balok-Angka.webp.js';
import { imagesColoredSticker4TelfonWEBP } from '../../media/images_Colored_sticker_4_Telfon.webp.js';
import { imagesColoredSticker50BlanketWEBP } from '../../media/images_Colored_sticker_50_Blanket.webp.js';
import { imagesColoredSticker5PigoraGunungWEBP } from '../../media/images_Colored_sticker_5_Pigora-Gunung.webp.js';
import { imagesColoredSticker6PewangiRuanganWEBP } from '../../media/images_Colored_sticker_6_Pewangi-Ruangan.webp.js';
import { imagesColoredSticker7MejaWEBP } from '../../media/images_Colored_sticker_7_Meja.webp.js';
import { imagesColoredSticker8MajalahWEBP } from '../../media/images_Colored_sticker_8_Majalah.webp.js';
import { imagesColoredSticker9IbuMasakWEBP } from '../../media/images_Colored_sticker_9_Ibu-Masak.webp.js';
import { imagesCtaWEBP } from '../../media/images_cta.webp.js';
import { imagesDraggableSticker10KursiOutlineWEBP } from '../../media/images_Draggable_sticker_10_Kursi_outline.webp.js';
import { imagesDraggableSticker11GirlSleepOutlineWEBP } from '../../media/images_Draggable_sticker_11_Girl-Sleep_outline.webp.js';
import { imagesDraggableSticker12BukuOutlineWEBP } from '../../media/images_Draggable_sticker_12_Buku_outline.webp.js';
import { imagesDraggableSticker13CheesecakeOutlineWEBP } from '../../media/images_Draggable_sticker_13_Cheesecake_outline.webp.js';
import { imagesDraggableSticker14KarpetOutlineWEBP } from '../../media/images_Draggable_sticker_14_Karpet_outline.webp.js';
import { imagesDraggableSticker15WaterOutlineWEBP } from '../../media/images_Draggable_sticker_15_Water_outline.webp.js';
import { imagesDraggableSticker16RemoteOutlineWEBP } from '../../media/images_Draggable_sticker_16_Remote_outline.webp.js';
import { imagesDraggableSticker17JamDindingOutlineWEBP } from '../../media/images_Draggable_sticker_17_Jam-Dinding_outline.webp.js';
import { imagesDraggableSticker18BantalOutlineWEBP } from '../../media/images_Draggable_sticker_18_Bantal_outline.webp.js';
import { imagesDraggableSticker19BayiOutlineWEBP } from '../../media/images_Draggable_sticker_19_Bayi_outline.webp.js';
import { imagesDraggableSticker1GirlPinkDudukOutlineWEBP } from '../../media/images_Draggable_sticker_1_Girl-Pink-Duduk_outline.webp.js';
import { imagesDraggableSticker20BoyKucingOutlineWEBP } from '../../media/images_Draggable_sticker_20_Boy-Kucing_outline.webp.js';
import { imagesDraggableSticker21KeysOutlineWEBP } from '../../media/images_Draggable_sticker_21_Keys_outline.webp.js';
import { imagesDraggableSticker22BearOutlineWEBP } from '../../media/images_Draggable_sticker_22_Bear_outline.webp.js';
import { imagesDraggableSticker23PigoraTulipOutlineWEBP } from '../../media/images_Draggable_sticker_23_Pigora-Tulip_outline.webp.js';
import { imagesDraggableSticker24BalokMenaraOutlineWEBP } from '../../media/images_Draggable_sticker_24_Balok-Menara_outline.webp.js';
import { imagesDraggableSticker25BoyJuiceOutlineWEBP } from '../../media/images_Draggable_sticker_25_Boy-Juice_outline.webp.js';
import { imagesDraggableSticker26PotOutlineWEBP } from '../../media/images_Draggable_sticker_26_Pot_outline.webp.js';
import { imagesDraggableSticker27BoyHideLampOutlineWEBP } from '../../media/images_Draggable_sticker_27_Boy-Hide-Lamp_outline.webp.js';
import { imagesDraggableSticker28DotSusuOutlineWEBP } from '../../media/images_Draggable_sticker_28_Dot-Susu_outline.webp.js';
import { imagesDraggableSticker29YarnOutlineWEBP } from '../../media/images_Draggable_sticker_29_Yarn_outline.webp.js';
import { imagesDraggableSticker2GirlDudukOutlineWEBP } from '../../media/images_Draggable_sticker_2_Girl-Duduk_outline.webp.js';
import { imagesDraggableSticker30DekorasiOutlineWEBP } from '../../media/images_Draggable_sticker_30_Dekorasi_outline.webp.js';
import { imagesDraggableSticker31IbuBayiOutlineWEBP } from '../../media/images_Draggable_sticker_31_Ibu-Bayi_outline.webp.js';
import { imagesDraggableSticker32BoyDudukSilaOutlineWEBP } from '../../media/images_Draggable_sticker_32_Boy-Duduk-Sila_outline.webp.js';
import { imagesDraggableSticker33TongSampahOutlineWEBP } from '../../media/images_Draggable_sticker_33_Tong-Sampah_outline.webp.js';
import { imagesDraggableSticker34KaktusOutlineWEBP } from '../../media/images_Draggable_sticker_34_Kaktus_outline.webp.js';
import { imagesDraggableSticker35BoyCookieOutlineWEBP } from '../../media/images_Draggable_sticker_35_Boy-Cookie_outline.webp.js';
import { imagesDraggableSticker36BoyPlaneOutlineWEBP } from '../../media/images_Draggable_sticker_36_Boy-Plane_outline.webp.js';
import { imagesDraggableSticker37BoyTiduranOutlineWEBP } from '../../media/images_Draggable_sticker_37_Boy-Tiduran_outline.webp.js';
import { imagesDraggableSticker38BoyLaperOutlineWEBP } from '../../media/images_Draggable_sticker_38_Boy-Laper_outline.webp.js';
import { imagesDraggableSticker39BapakMauMakanOutlineWEBP } from '../../media/images_Draggable_sticker_39_Bapak-Mau-Makan_outline.webp.js';
import { imagesDraggableSticker3GirlTea2OutlineWEBP } from '../../media/images_Draggable_sticker_3_Girl-Tea-2_outline.webp.js';
import { imagesDraggableSticker40GirlTea1OutlineWEBP } from '../../media/images_Draggable_sticker_40_Girl-Tea-1_outline.webp.js';
import { imagesDraggableSticker41BoyTelpOutlineWEBP } from '../../media/images_Draggable_sticker_41_Boy-Telp_outline.webp.js';
import { imagesDraggableSticker42CicakOutlineWEBP } from '../../media/images_Draggable_sticker_42_Cicak_outline.webp.js';
import { imagesDraggableSticker43TehOutlineWEBP } from '../../media/images_Draggable_sticker_43_Teh_outline.webp.js';
import { imagesDraggableSticker44GirlReadOutlineWEBP } from '../../media/images_Draggable_sticker_44_Girl-Read_outline.webp.js';
import { imagesDraggableSticker45GantunganTopiOutlineWEBP } from '../../media/images_Draggable_sticker_45_Gantungan-Topi_outline.webp.js';
import { imagesDraggableSticker46TruckOutlineWEBP } from '../../media/images_Draggable_sticker_46_Truck_outline.webp.js';
import { imagesDraggableSticker47CatOutlineWEBP } from '../../media/images_Draggable_sticker_47_Cat_outline.webp.js';
import { imagesDraggableSticker48GirlBonekaOutlineWEBP } from '../../media/images_Draggable_sticker_48_Girl Boneka_outline.webp.js';
import { imagesDraggableSticker49BalokAngkaOutlineWEBP } from '../../media/images_Draggable_sticker_49_Balok-Angka_outline.webp.js';
import { imagesDraggableSticker4TelfonOutlineWEBP } from '../../media/images_Draggable_sticker_4_Telfon_outline.webp.js';
import { imagesDraggableSticker50BlanketOutlineWEBP } from '../../media/images_Draggable_sticker_50_Blanket_outline.webp.js';
import { imagesDraggableSticker5PigoraGunungOutlineWEBP } from '../../media/images_Draggable_sticker_5_Pigora-Gunung_outline.webp.js';
import { imagesDraggableSticker6PewangiRuanganOutlineWEBP } from '../../media/images_Draggable_sticker_6_Pewangi-Ruangan_outline.webp.js';
import { imagesDraggableSticker7MejaOutlineWEBP } from '../../media/images_Draggable_sticker_7_Meja_outline.webp.js';
import { imagesDraggableSticker8MajalahOutlineWEBP } from '../../media/images_Draggable_sticker_8_Majalah_outline.webp.js';
import { imagesDraggableSticker9IbuMasakOutlineWEBP } from '../../media/images_Draggable_sticker_9_Ibu-Masak_outline.webp.js';
import { imagesHandIconWEBP } from '../../media/images_hand-icon.webp.js';
import { imagesLogoWEBP } from '../../media/images_logo.webp.js';
import { imagesNumbered1WEBP } from '../../media/images_Numbered_1.webp.js';
import { imagesNumbered10WEBP } from '../../media/images_Numbered_10.webp.js';
import { imagesNumbered11WEBP } from '../../media/images_Numbered_11.webp.js';
import { imagesNumbered12WEBP } from '../../media/images_Numbered_12.webp.js';
import { imagesNumbered13WEBP } from '../../media/images_Numbered_13.webp.js';
import { imagesNumbered14WEBP } from '../../media/images_Numbered_14.webp.js';
import { imagesNumbered15WEBP } from '../../media/images_Numbered_15.webp.js';
import { imagesNumbered16WEBP } from '../../media/images_Numbered_16.webp.js';
import { imagesNumbered17WEBP } from '../../media/images_Numbered_17.webp.js';
import { imagesNumbered18WEBP } from '../../media/images_Numbered_18.webp.js';
import { imagesNumbered19WEBP } from '../../media/images_Numbered_19.webp.js';
import { imagesNumbered2WEBP } from '../../media/images_Numbered_2.webp.js';
import { imagesNumbered20WEBP } from '../../media/images_Numbered_20.webp.js';
import { imagesNumbered21WEBP } from '../../media/images_Numbered_21.webp.js';
import { imagesNumbered22WEBP } from '../../media/images_Numbered_22.webp.js';
import { imagesNumbered23WEBP } from '../../media/images_Numbered_23.webp.js';
import { imagesNumbered24WEBP } from '../../media/images_Numbered_24.webp.js';
import { imagesNumbered25WEBP } from '../../media/images_Numbered_25.webp.js';
import { imagesNumbered26WEBP } from '../../media/images_Numbered_26.webp.js';
import { imagesNumbered27WEBP } from '../../media/images_Numbered_27.webp.js';
import { imagesNumbered28WEBP } from '../../media/images_Numbered_28.webp.js';
import { imagesNumbered29WEBP } from '../../media/images_Numbered_29.webp.js';
import { imagesNumbered3WEBP } from '../../media/images_Numbered_3.webp.js';
import { imagesNumbered30WEBP } from '../../media/images_Numbered_30.webp.js';
import { imagesNumbered31WEBP } from '../../media/images_Numbered_31.webp.js';
import { imagesNumbered32WEBP } from '../../media/images_Numbered_32.webp.js';
import { imagesNumbered33WEBP } from '../../media/images_Numbered_33.webp.js';
import { imagesNumbered34WEBP } from '../../media/images_Numbered_34.webp.js';
import { imagesNumbered35WEBP } from '../../media/images_Numbered_35.webp.js';
import { imagesNumbered36WEBP } from '../../media/images_Numbered_36.webp.js';
import { imagesNumbered37WEBP } from '../../media/images_Numbered_37.webp.js';
import { imagesNumbered38WEBP } from '../../media/images_Numbered_38.webp.js';
import { imagesNumbered39WEBP } from '../../media/images_Numbered_39.webp.js';
import { imagesNumbered4WEBP } from '../../media/images_Numbered_4.webp.js';
import { imagesNumbered40WEBP } from '../../media/images_Numbered_40.webp.js';
import { imagesNumbered41WEBP } from '../../media/images_Numbered_41.webp.js';
import { imagesNumbered42WEBP } from '../../media/images_Numbered_42.webp.js';
import { imagesNumbered43WEBP } from '../../media/images_Numbered_43.webp.js';
import { imagesNumbered44WEBP } from '../../media/images_Numbered_44.webp.js';
import { imagesNumbered45WEBP } from '../../media/images_Numbered_45.webp.js';
import { imagesNumbered46WEBP } from '../../media/images_Numbered_46.webp.js';
import { imagesNumbered47WEBP } from '../../media/images_Numbered_47.webp.js';
import { imagesNumbered48WEBP } from '../../media/images_Numbered_48.webp.js';
import { imagesNumbered49WEBP } from '../../media/images_Numbered_49.webp.js';
import { imagesNumbered5WEBP } from '../../media/images_Numbered_5.webp.js';
import { imagesNumbered50WEBP } from '../../media/images_Numbered_50.webp.js';
import { imagesNumbered6WEBP } from '../../media/images_Numbered_6.webp.js';
import { imagesNumbered7WEBP } from '../../media/images_Numbered_7.webp.js';
import { imagesNumbered8WEBP } from '../../media/images_Numbered_8.webp.js';
import { imagesNumbered9WEBP } from '../../media/images_Numbered_9.webp.js';
import { imagesStarBurstWEBP } from '../../media/images_Star Burst.webp.js';

const imageAssets = [
  { key: "backgroundBgColoredExtended1", data: imagesBackgroundBgColoredExtended1WEBP },
  { key: "backgroundBgColoredWhiteExtended1", data: imagesBackgroundBgColoredWhiteExtended1WEBP },
  { key: "blueCointainer", data: imagesBlueCointainerWEBP },
  { key: "coloredSticker10Kursi", data: imagesColoredSticker10KursiWEBP },
  { key: "coloredSticker11GirlSleep", data: imagesColoredSticker11GirlSleepWEBP },
  { key: "coloredSticker12Buku", data: imagesColoredSticker12BukuWEBP },
  { key: "coloredSticker13Cheesecake", data: imagesColoredSticker13CheesecakeWEBP },
  { key: "coloredSticker14Karpet", data: imagesColoredSticker14KarpetWEBP },
  { key: "coloredSticker15Water", data: imagesColoredSticker15WaterWEBP },
  { key: "coloredSticker16Remote", data: imagesColoredSticker16RemoteWEBP },
  { key: "coloredSticker17JamDinding", data: imagesColoredSticker17JamDindingWEBP },
  { key: "coloredSticker18Bantal", data: imagesColoredSticker18BantalWEBP },
  { key: "coloredSticker19Bayi", data: imagesColoredSticker19BayiWEBP },
  { key: "coloredSticker1GirlPinkDuduk", data: imagesColoredSticker1GirlPinkDudukWEBP },
  { key: "coloredSticker20BoyKucing", data: imagesColoredSticker20BoyKucingWEBP },
  { key: "coloredSticker21Keys", data: imagesColoredSticker21KeysWEBP },
  { key: "coloredSticker22Bear", data: imagesColoredSticker22BearWEBP },
  { key: "coloredSticker23PigoraTulip", data: imagesColoredSticker23PigoraTulipWEBP },
  { key: "coloredSticker24BalokMenara", data: imagesColoredSticker24BalokMenaraWEBP },
  { key: "coloredSticker25BoyJuice", data: imagesColoredSticker25BoyJuiceWEBP },
  { key: "coloredSticker26Pot", data: imagesColoredSticker26PotWEBP },
  { key: "coloredSticker27BoyHideLamp", data: imagesColoredSticker27BoyHideLampWEBP },
  { key: "coloredSticker28DotSusu", data: imagesColoredSticker28DotSusuWEBP },
  { key: "coloredSticker29Yarn", data: imagesColoredSticker29YarnWEBP },
  { key: "coloredSticker2GirlDuduk", data: imagesColoredSticker2GirlDudukWEBP },
  { key: "coloredSticker30Dekorasi", data: imagesColoredSticker30DekorasiWEBP },
  { key: "coloredSticker31IbuBayi", data: imagesColoredSticker31IbuBayiWEBP },
  { key: "coloredSticker32BoyDudukSila", data: imagesColoredSticker32BoyDudukSilaWEBP },
  { key: "coloredSticker33TongSampah", data: imagesColoredSticker33TongSampahWEBP },
  { key: "coloredSticker34Kaktus", data: imagesColoredSticker34KaktusWEBP },
  { key: "coloredSticker35BoyCookie", data: imagesColoredSticker35BoyCookieWEBP },
  { key: "coloredSticker36BoyPlane", data: imagesColoredSticker36BoyPlaneWEBP },
  { key: "coloredSticker37BoyTiduran", data: imagesColoredSticker37BoyTiduranWEBP },
  { key: "coloredSticker38BoyLaper", data: imagesColoredSticker38BoyLaperWEBP },
  { key: "coloredSticker39BapakMauMakan", data: imagesColoredSticker39BapakMauMakanWEBP },
  { key: "coloredSticker3GirlTea2", data: imagesColoredSticker3GirlTea2WEBP },
  { key: "coloredSticker40GirlTea1", data: imagesColoredSticker40GirlTea1WEBP },
  { key: "coloredSticker41BoyTelp", data: imagesColoredSticker41BoyTelpWEBP },
  { key: "coloredSticker42Cicak", data: imagesColoredSticker42CicakWEBP },
  { key: "coloredSticker43Teh", data: imagesColoredSticker43TehWEBP },
  { key: "coloredSticker44GirlRead", data: imagesColoredSticker44GirlReadWEBP },
  { key: "coloredSticker45GantunganTopi", data: imagesColoredSticker45GantunganTopiWEBP },
  { key: "coloredSticker46Truck", data: imagesColoredSticker46TruckWEBP },
  { key: "coloredSticker47Cat", data: imagesColoredSticker47CatWEBP },
  { key: "coloredSticker48GirlBoneka", data: imagesColoredSticker48GirlBonekaWEBP },
  { key: "coloredSticker49BalokAngka", data: imagesColoredSticker49BalokAngkaWEBP },
  { key: "coloredSticker4Telfon", data: imagesColoredSticker4TelfonWEBP },
  { key: "coloredSticker50Blanket", data: imagesColoredSticker50BlanketWEBP },
  { key: "coloredSticker5PigoraGunung", data: imagesColoredSticker5PigoraGunungWEBP },
  { key: "coloredSticker6PewangiRuangan", data: imagesColoredSticker6PewangiRuanganWEBP },
  { key: "coloredSticker7Meja", data: imagesColoredSticker7MejaWEBP },
  { key: "coloredSticker8Majalah", data: imagesColoredSticker8MajalahWEBP },
  { key: "coloredSticker9IbuMasak", data: imagesColoredSticker9IbuMasakWEBP },
  { key: "cta", data: imagesCtaWEBP },
  { key: "draggableSticker10KursiOutline", data: imagesDraggableSticker10KursiOutlineWEBP },
  { key: "draggableSticker11GirlSleepOutline", data: imagesDraggableSticker11GirlSleepOutlineWEBP },
  { key: "draggableSticker12BukuOutline", data: imagesDraggableSticker12BukuOutlineWEBP },
  { key: "draggableSticker13CheesecakeOutline", data: imagesDraggableSticker13CheesecakeOutlineWEBP },
  { key: "draggableSticker14KarpetOutline", data: imagesDraggableSticker14KarpetOutlineWEBP },
  { key: "draggableSticker15WaterOutline", data: imagesDraggableSticker15WaterOutlineWEBP },
  { key: "draggableSticker16RemoteOutline", data: imagesDraggableSticker16RemoteOutlineWEBP },
  { key: "draggableSticker17JamDindingOutline", data: imagesDraggableSticker17JamDindingOutlineWEBP },
  { key: "draggableSticker18BantalOutline", data: imagesDraggableSticker18BantalOutlineWEBP },
  { key: "draggableSticker19BayiOutline", data: imagesDraggableSticker19BayiOutlineWEBP },
  { key: "draggableSticker1GirlPinkDudukOutline", data: imagesDraggableSticker1GirlPinkDudukOutlineWEBP },
  { key: "draggableSticker20BoyKucingOutline", data: imagesDraggableSticker20BoyKucingOutlineWEBP },
  { key: "draggableSticker21KeysOutline", data: imagesDraggableSticker21KeysOutlineWEBP },
  { key: "draggableSticker22BearOutline", data: imagesDraggableSticker22BearOutlineWEBP },
  { key: "draggableSticker23PigoraTulipOutline", data: imagesDraggableSticker23PigoraTulipOutlineWEBP },
  { key: "draggableSticker24BalokMenaraOutline", data: imagesDraggableSticker24BalokMenaraOutlineWEBP },
  { key: "draggableSticker25BoyJuiceOutline", data: imagesDraggableSticker25BoyJuiceOutlineWEBP },
  { key: "draggableSticker26PotOutline", data: imagesDraggableSticker26PotOutlineWEBP },
  { key: "draggableSticker27BoyHideLampOutline", data: imagesDraggableSticker27BoyHideLampOutlineWEBP },
  { key: "draggableSticker28DotSusuOutline", data: imagesDraggableSticker28DotSusuOutlineWEBP },
  { key: "draggableSticker29YarnOutline", data: imagesDraggableSticker29YarnOutlineWEBP },
  { key: "draggableSticker2GirlDudukOutline", data: imagesDraggableSticker2GirlDudukOutlineWEBP },
  { key: "draggableSticker30DekorasiOutline", data: imagesDraggableSticker30DekorasiOutlineWEBP },
  { key: "draggableSticker31IbuBayiOutline", data: imagesDraggableSticker31IbuBayiOutlineWEBP },
  { key: "draggableSticker32BoyDudukSilaOutline", data: imagesDraggableSticker32BoyDudukSilaOutlineWEBP },
  { key: "draggableSticker33TongSampahOutline", data: imagesDraggableSticker33TongSampahOutlineWEBP },
  { key: "draggableSticker34KaktusOutline", data: imagesDraggableSticker34KaktusOutlineWEBP },
  { key: "draggableSticker35BoyCookieOutline", data: imagesDraggableSticker35BoyCookieOutlineWEBP },
  { key: "draggableSticker36BoyPlaneOutline", data: imagesDraggableSticker36BoyPlaneOutlineWEBP },
  { key: "draggableSticker37BoyTiduranOutline", data: imagesDraggableSticker37BoyTiduranOutlineWEBP },
  { key: "draggableSticker38BoyLaperOutline", data: imagesDraggableSticker38BoyLaperOutlineWEBP },
  { key: "draggableSticker39BapakMauMakanOutline", data: imagesDraggableSticker39BapakMauMakanOutlineWEBP },
  { key: "draggableSticker3GirlTea2Outline", data: imagesDraggableSticker3GirlTea2OutlineWEBP },
  { key: "draggableSticker40GirlTea1Outline", data: imagesDraggableSticker40GirlTea1OutlineWEBP },
  { key: "draggableSticker41BoyTelpOutline", data: imagesDraggableSticker41BoyTelpOutlineWEBP },
  { key: "draggableSticker42CicakOutline", data: imagesDraggableSticker42CicakOutlineWEBP },
  { key: "draggableSticker43TehOutline", data: imagesDraggableSticker43TehOutlineWEBP },
  { key: "draggableSticker44GirlReadOutline", data: imagesDraggableSticker44GirlReadOutlineWEBP },
  { key: "draggableSticker45GantunganTopiOutline", data: imagesDraggableSticker45GantunganTopiOutlineWEBP },
  { key: "draggableSticker46TruckOutline", data: imagesDraggableSticker46TruckOutlineWEBP },
  { key: "draggableSticker47CatOutline", data: imagesDraggableSticker47CatOutlineWEBP },
  { key: "draggableSticker48GirlBonekaOutline", data: imagesDraggableSticker48GirlBonekaOutlineWEBP },
  { key: "draggableSticker49BalokAngkaOutline", data: imagesDraggableSticker49BalokAngkaOutlineWEBP },
  { key: "draggableSticker4TelfonOutline", data: imagesDraggableSticker4TelfonOutlineWEBP },
  { key: "draggableSticker50BlanketOutline", data: imagesDraggableSticker50BlanketOutlineWEBP },
  { key: "draggableSticker5PigoraGunungOutline", data: imagesDraggableSticker5PigoraGunungOutlineWEBP },
  { key: "draggableSticker6PewangiRuanganOutline", data: imagesDraggableSticker6PewangiRuanganOutlineWEBP },
  { key: "draggableSticker7MejaOutline", data: imagesDraggableSticker7MejaOutlineWEBP },
  { key: "draggableSticker8MajalahOutline", data: imagesDraggableSticker8MajalahOutlineWEBP },
  { key: "draggableSticker9IbuMasakOutline", data: imagesDraggableSticker9IbuMasakOutlineWEBP },
  { key: "handIcon", data: imagesHandIconWEBP },
  { key: "logo", data: imagesLogoWEBP },
  { key: "numbered1", data: imagesNumbered1WEBP },
  { key: "numbered10", data: imagesNumbered10WEBP },
  { key: "numbered11", data: imagesNumbered11WEBP },
  { key: "numbered12", data: imagesNumbered12WEBP },
  { key: "numbered13", data: imagesNumbered13WEBP },
  { key: "numbered14", data: imagesNumbered14WEBP },
  { key: "numbered15", data: imagesNumbered15WEBP },
  { key: "numbered16", data: imagesNumbered16WEBP },
  { key: "numbered17", data: imagesNumbered17WEBP },
  { key: "numbered18", data: imagesNumbered18WEBP },
  { key: "numbered19", data: imagesNumbered19WEBP },
  { key: "numbered2", data: imagesNumbered2WEBP },
  { key: "numbered20", data: imagesNumbered20WEBP },
  { key: "numbered21", data: imagesNumbered21WEBP },
  { key: "numbered22", data: imagesNumbered22WEBP },
  { key: "numbered23", data: imagesNumbered23WEBP },
  { key: "numbered24", data: imagesNumbered24WEBP },
  { key: "numbered25", data: imagesNumbered25WEBP },
  { key: "numbered26", data: imagesNumbered26WEBP },
  { key: "numbered27", data: imagesNumbered27WEBP },
  { key: "numbered28", data: imagesNumbered28WEBP },
  { key: "numbered29", data: imagesNumbered29WEBP },
  { key: "numbered3", data: imagesNumbered3WEBP },
  { key: "numbered30", data: imagesNumbered30WEBP },
  { key: "numbered31", data: imagesNumbered31WEBP },
  { key: "numbered32", data: imagesNumbered32WEBP },
  { key: "numbered33", data: imagesNumbered33WEBP },
  { key: "numbered34", data: imagesNumbered34WEBP },
  { key: "numbered35", data: imagesNumbered35WEBP },
  { key: "numbered36", data: imagesNumbered36WEBP },
  { key: "numbered37", data: imagesNumbered37WEBP },
  { key: "numbered38", data: imagesNumbered38WEBP },
  { key: "numbered39", data: imagesNumbered39WEBP },
  { key: "numbered4", data: imagesNumbered4WEBP },
  { key: "numbered40", data: imagesNumbered40WEBP },
  { key: "numbered41", data: imagesNumbered41WEBP },
  { key: "numbered42", data: imagesNumbered42WEBP },
  { key: "numbered43", data: imagesNumbered43WEBP },
  { key: "numbered44", data: imagesNumbered44WEBP },
  { key: "numbered45", data: imagesNumbered45WEBP },
  { key: "numbered46", data: imagesNumbered46WEBP },
  { key: "numbered47", data: imagesNumbered47WEBP },
  { key: "numbered48", data: imagesNumbered48WEBP },
  { key: "numbered49", data: imagesNumbered49WEBP },
  { key: "numbered5", data: imagesNumbered5WEBP },
  { key: "numbered50", data: imagesNumbered50WEBP },
  { key: "numbered6", data: imagesNumbered6WEBP },
  { key: "numbered7", data: imagesNumbered7WEBP },
  { key: "numbered8", data: imagesNumbered8WEBP },
  { key: "numbered9", data: imagesNumbered9WEBP },
  { key: "starBurst", data: imagesStarBurstWEBP },
];

const audioAssets = [
  { key: "bgm", data: audioBGMMP3 },
  { key: "audioCorrectAnswer", data: audioCorrectAnswerMP3 },
  { key: "audioFinished", data: audioFinishedMP3 },
  { key: "audioWrongAnswer", data: audioWrongAnswerMP3 },
];

export class Preloader extends Phaser.Scene {
  constructor() {
    super("Preload");
  }

  init() {
    console.log("%cSCENE::Preloader", "color: #fff; background: #f00;");
  }

  preload() {
    //  Invoke the Base64Manager - pass in the current scene reference and a callback to invoke when it's done
    Base64Manager(this, () => this.base64LoaderComplete());

    imageAssets.forEach(({ key, data }) => {
      this.load.image(key, data);
    });

    LoadBase64Audio(this, audioAssets);
  }

  create() {
    //  This may run before the Loader has completed, so don't use in-flight assets here
  }

  base64LoaderComplete() {
    adReady();

    this.scene.start("Game");
  }
}
