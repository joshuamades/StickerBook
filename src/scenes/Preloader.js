import Phaser from "phaser";

import { Base64Manager } from "../utils/Base64Manager.js";
import { LoadBase64Audio } from "../utils/LoadBase64Audio.js";
import { adReady } from "../networkPlugin";

import { audioBgmMP3 } from '../../media/audio_bgm.mp3.js';
import { audioEndcardMP3 } from '../../media/audio_endcard.mp3.js';
import { audioSwitchCombo1MP3 } from '../../media/audio_switch-combo-1.mp3.js';
import { audioSwitchCombo2MP3 } from '../../media/audio_switch-combo-2.mp3.js';
import { audioSwitchCombo3MP3 } from '../../media/audio_switch-combo-3.mp3.js';
import { audioSwitchMP3 } from '../../media/audio_switch.mp3.js';
import { imagesAudioBGMMP3 } from '../../media/images_Audio_BGM.mp3.js';
import { imagesAudioCorrectAnswerMP3 } from '../../media/images_Audio_Correct Answer.mp3.js';
import { imagesAudioFinishedMP3 } from '../../media/images_Audio_Finished.mp3.js';
import { imagesAudioWrongAnswerMP3 } from '../../media/images_Audio_Wrong Answer.mp3.js';
import { imagesBackgroundBgColoredExtended1PNG } from '../../media/images_Background_Bg-colored-extended_1.png.js';
import { imagesBackgroundBgColoredWhiteExtended1PNG } from '../../media/images_Background_Bg-colored-white-extended_1.png.js';
import { imagesBlueCointainerPNG } from '../../media/images_blue-cointainer.png.js';
import { imagesColoredSticker10KursiPNG } from '../../media/images_Colored_sticker_10_Kursi.png.js';
import { imagesColoredSticker11GirlSleepPNG } from '../../media/images_Colored_sticker_11_Girl-Sleep.png.js';
import { imagesColoredSticker12BukuPNG } from '../../media/images_Colored_sticker_12_Buku.png.js';
import { imagesColoredSticker13CheesecakePNG } from '../../media/images_Colored_sticker_13_Cheesecake.png.js';
import { imagesColoredSticker14KarpetPNG } from '../../media/images_Colored_sticker_14_Karpet.png.js';
import { imagesColoredSticker15WaterPNG } from '../../media/images_Colored_sticker_15_Water.png.js';
import { imagesColoredSticker16RemotePNG } from '../../media/images_Colored_sticker_16_Remote.png.js';
import { imagesColoredSticker17JamDindingPNG } from '../../media/images_Colored_sticker_17_Jam-Dinding.png.js';
import { imagesColoredSticker18BantalPNG } from '../../media/images_Colored_sticker_18_Bantal.png.js';
import { imagesColoredSticker19BayiPNG } from '../../media/images_Colored_sticker_19_Bayi.png.js';
import { imagesColoredSticker1GirlPinkDudukPNG } from '../../media/images_Colored_sticker_1_Girl-Pink-Duduk.png.js';
import { imagesColoredSticker20BoyKucingPNG } from '../../media/images_Colored_sticker_20_Boy-Kucing.png.js';
import { imagesColoredSticker21KeysPNG } from '../../media/images_Colored_sticker_21_Keys.png.js';
import { imagesColoredSticker22BearPNG } from '../../media/images_Colored_sticker_22_Bear.png.js';
import { imagesColoredSticker23PigoraTulipPNG } from '../../media/images_Colored_sticker_23_Pigora-Tulip.png.js';
import { imagesColoredSticker24BalokMenaraPNG } from '../../media/images_Colored_sticker_24_Balok-Menara.png.js';
import { imagesColoredSticker25BoyJuicePNG } from '../../media/images_Colored_sticker_25_Boy-Juice.png.js';
import { imagesColoredSticker26PotPNG } from '../../media/images_Colored_sticker_26_Pot.png.js';
import { imagesColoredSticker27BoyHideLampPNG } from '../../media/images_Colored_sticker_27_Boy-Hide-Lamp.png.js';
import { imagesColoredSticker28DotSusuPNG } from '../../media/images_Colored_sticker_28_Dot-Susu.png.js';
import { imagesColoredSticker29YarnPNG } from '../../media/images_Colored_sticker_29_Yarn.png.js';
import { imagesColoredSticker2GirlDudukPNG } from '../../media/images_Colored_sticker_2_Girl-Duduk.png.js';
import { imagesColoredSticker30DekorasiPNG } from '../../media/images_Colored_sticker_30_Dekorasi.png.js';
import { imagesColoredSticker31IbuBayiPNG } from '../../media/images_Colored_sticker_31_Ibu-Bayi.png.js';
import { imagesColoredSticker32BoyDudukSilaPNG } from '../../media/images_Colored_sticker_32_Boy-Duduk-Sila.png.js';
import { imagesColoredSticker33TongSampahPNG } from '../../media/images_Colored_sticker_33_Tong-Sampah.png.js';
import { imagesColoredSticker34KaktusPNG } from '../../media/images_Colored_sticker_34_Kaktus.png.js';
import { imagesColoredSticker35BoyCookiePNG } from '../../media/images_Colored_sticker_35_Boy-Cookie.png.js';
import { imagesColoredSticker36BoyPlanePNG } from '../../media/images_Colored_sticker_36_Boy-Plane.png.js';
import { imagesColoredSticker37BoyTiduranPNG } from '../../media/images_Colored_sticker_37_Boy-Tiduran.png.js';
import { imagesColoredSticker38BoyLaperPNG } from '../../media/images_Colored_sticker_38_Boy-Laper.png.js';
import { imagesColoredSticker39BapakMauMakanPNG } from '../../media/images_Colored_sticker_39_Bapak-Mau-Makan.png.js';
import { imagesColoredSticker3GirlTea2PNG } from '../../media/images_Colored_sticker_3_Girl-Tea-2.png.js';
import { imagesColoredSticker40GirlTea1PNG } from '../../media/images_Colored_sticker_40_Girl-Tea-1.png.js';
import { imagesColoredSticker41BoyTelpPNG } from '../../media/images_Colored_sticker_41_Boy-Telp.png.js';
import { imagesColoredSticker42CicakPNG } from '../../media/images_Colored_sticker_42_Cicak.png.js';
import { imagesColoredSticker43TehPNG } from '../../media/images_Colored_sticker_43_Teh.png.js';
import { imagesColoredSticker44GirlReadPNG } from '../../media/images_Colored_sticker_44_Girl-Read.png.js';
import { imagesColoredSticker45GantunganTopiPNG } from '../../media/images_Colored_sticker_45_Gantungan-Topi.png.js';
import { imagesColoredSticker46TruckPNG } from '../../media/images_Colored_sticker_46_Truck.png.js';
import { imagesColoredSticker47CatPNG } from '../../media/images_Colored_sticker_47_Cat.png.js';
import { imagesColoredSticker48GirlBonekaPNG } from '../../media/images_Colored_sticker_48_Girl-Boneka.png.js';
import { imagesColoredSticker49BalokAngkaPNG } from '../../media/images_Colored_sticker_49_Balok-Angka.png.js';
import { imagesColoredSticker4TelfonPNG } from '../../media/images_Colored_sticker_4_Telfon.png.js';
import { imagesColoredSticker50BlanketPNG } from '../../media/images_Colored_sticker_50_Blanket.png.js';
import { imagesColoredSticker5PigoraGunungPNG } from '../../media/images_Colored_sticker_5_Pigora-Gunung.png.js';
import { imagesColoredSticker6PewangiRuanganPNG } from '../../media/images_Colored_sticker_6_Pewangi-Ruangan.png.js';
import { imagesColoredSticker7MejaPNG } from '../../media/images_Colored_sticker_7_Meja.png.js';
import { imagesColoredSticker8MajalahPNG } from '../../media/images_Colored_sticker_8_Majalah.png.js';
import { imagesColoredSticker9IbuMasakPNG } from '../../media/images_Colored_sticker_9_Ibu-Masak.png.js';
import { imagesCtaPNG } from '../../media/images_cta.png.js';
import { imagesDraggableSticker10KursiOutlinePNG } from '../../media/images_Draggable_sticker_10_Kursi_outline.png.js';
import { imagesDraggableSticker11GirlSleepOutlinePNG } from '../../media/images_Draggable_sticker_11_Girl-Sleep_outline.png.js';
import { imagesDraggableSticker12BukuOutlinePNG } from '../../media/images_Draggable_sticker_12_Buku_outline.png.js';
import { imagesDraggableSticker13CheesecakeOutlinePNG } from '../../media/images_Draggable_sticker_13_Cheesecake_outline.png.js';
import { imagesDraggableSticker14KarpetOutlinePNG } from '../../media/images_Draggable_sticker_14_Karpet_outline.png.js';
import { imagesDraggableSticker15WaterOutlinePNG } from '../../media/images_Draggable_sticker_15_Water_outline.png.js';
import { imagesDraggableSticker16RemoteOutlinePNG } from '../../media/images_Draggable_sticker_16_Remote_outline.png.js';
import { imagesDraggableSticker17JamDindingOutlinePNG } from '../../media/images_Draggable_sticker_17_Jam-Dinding_outline.png.js';
import { imagesDraggableSticker18BantalOutlinePNG } from '../../media/images_Draggable_sticker_18_Bantal_outline.png.js';
import { imagesDraggableSticker19BayiOutlinePNG } from '../../media/images_Draggable_sticker_19_Bayi_outline.png.js';
import { imagesDraggableSticker1GirlPinkDudukOutlinePNG } from '../../media/images_Draggable_sticker_1_Girl-Pink-Duduk_outline.png.js';
import { imagesDraggableSticker20BoyKucingOutlinePNG } from '../../media/images_Draggable_sticker_20_Boy-Kucing_outline.png.js';
import { imagesDraggableSticker21KeysOutlinePNG } from '../../media/images_Draggable_sticker_21_Keys_outline.png.js';
import { imagesDraggableSticker22BearOutlinePNG } from '../../media/images_Draggable_sticker_22_Bear_outline.png.js';
import { imagesDraggableSticker23PigoraTulipOutlinePNG } from '../../media/images_Draggable_sticker_23_Pigora-Tulip_outline.png.js';
import { imagesDraggableSticker24BalokMenaraOutlinePNG } from '../../media/images_Draggable_sticker_24_Balok-Menara_outline.png.js';
import { imagesDraggableSticker25BoyJuiceOutlinePNG } from '../../media/images_Draggable_sticker_25_Boy-Juice_outline.png.js';
import { imagesDraggableSticker26PotOutlinePNG } from '../../media/images_Draggable_sticker_26_Pot_outline.png.js';
import { imagesDraggableSticker27BoyHideLampOutlinePNG } from '../../media/images_Draggable_sticker_27_Boy-Hide-Lamp_outline.png.js';
import { imagesDraggableSticker28DotSusuOutlinePNG } from '../../media/images_Draggable_sticker_28_Dot-Susu_outline.png.js';
import { imagesDraggableSticker29YarnOutlinePNG } from '../../media/images_Draggable_sticker_29_Yarn_outline.png.js';
import { imagesDraggableSticker2GirlDudukOutlinePNG } from '../../media/images_Draggable_sticker_2_Girl-Duduk_outline.png.js';
import { imagesDraggableSticker30DekorasiOutlinePNG } from '../../media/images_Draggable_sticker_30_Dekorasi_outline.png.js';
import { imagesDraggableSticker31IbuBayiOutlinePNG } from '../../media/images_Draggable_sticker_31_Ibu-Bayi_outline.png.js';
import { imagesDraggableSticker32BoyDudukSilaOutlinePNG } from '../../media/images_Draggable_sticker_32_Boy-Duduk-Sila_outline.png.js';
import { imagesDraggableSticker33TongSampahOutlinePNG } from '../../media/images_Draggable_sticker_33_Tong-Sampah_outline.png.js';
import { imagesDraggableSticker34KaktusOutlinePNG } from '../../media/images_Draggable_sticker_34_Kaktus_outline.png.js';
import { imagesDraggableSticker35BoyCookieOutlinePNG } from '../../media/images_Draggable_sticker_35_Boy-Cookie_outline.png.js';
import { imagesDraggableSticker36BoyPlaneOutlinePNG } from '../../media/images_Draggable_sticker_36_Boy-Plane_outline.png.js';
import { imagesDraggableSticker37BoyTiduranOutlinePNG } from '../../media/images_Draggable_sticker_37_Boy-Tiduran_outline.png.js';
import { imagesDraggableSticker38BoyLaperOutlinePNG } from '../../media/images_Draggable_sticker_38_Boy-Laper_outline.png.js';
import { imagesDraggableSticker39BapakMauMakanOutlinePNG } from '../../media/images_Draggable_sticker_39_Bapak-Mau-Makan_outline.png.js';
import { imagesDraggableSticker3GirlTea2OutlinePNG } from '../../media/images_Draggable_sticker_3_Girl-Tea-2_outline.png.js';
import { imagesDraggableSticker40GirlTea1OutlinePNG } from '../../media/images_Draggable_sticker_40_Girl-Tea-1_outline.png.js';
import { imagesDraggableSticker41BoyTelpOutlinePNG } from '../../media/images_Draggable_sticker_41_Boy-Telp_outline.png.js';
import { imagesDraggableSticker42CicakOutlinePNG } from '../../media/images_Draggable_sticker_42_Cicak_outline.png.js';
import { imagesDraggableSticker43TehOutlinePNG } from '../../media/images_Draggable_sticker_43_Teh_outline.png.js';
import { imagesDraggableSticker44GirlReadOutlinePNG } from '../../media/images_Draggable_sticker_44_Girl-Read_outline.png.js';
import { imagesDraggableSticker45GantunganTopiOutlinePNG } from '../../media/images_Draggable_sticker_45_Gantungan-Topi_outline.png.js';
import { imagesDraggableSticker46TruckOutlinePNG } from '../../media/images_Draggable_sticker_46_Truck_outline.png.js';
import { imagesDraggableSticker47CatOutlinePNG } from '../../media/images_Draggable_sticker_47_Cat_outline.png.js';
import { imagesDraggableSticker48GirlBonekaOutlinePNG } from '../../media/images_Draggable_sticker_48_Girl Boneka_outline.png.js';
import { imagesDraggableSticker49BalokAngkaOutlinePNG } from '../../media/images_Draggable_sticker_49_Balok-Angka_outline.png.js';
import { imagesDraggableSticker4TelfonOutlinePNG } from '../../media/images_Draggable_sticker_4_Telfon_outline.png.js';
import { imagesDraggableSticker50BlanketOutlinePNG } from '../../media/images_Draggable_sticker_50_Blanket_outline.png.js';
import { imagesDraggableSticker5PigoraGunungOutlinePNG } from '../../media/images_Draggable_sticker_5_Pigora-Gunung_outline.png.js';
import { imagesDraggableSticker6PewangiRuanganOutlinePNG } from '../../media/images_Draggable_sticker_6_Pewangi-Ruangan_outline.png.js';
import { imagesDraggableSticker7MejaOutlinePNG } from '../../media/images_Draggable_sticker_7_Meja_outline.png.js';
import { imagesDraggableSticker8MajalahOutlinePNG } from '../../media/images_Draggable_sticker_8_Majalah_outline.png.js';
import { imagesDraggableSticker9IbuMasakOutlinePNG } from '../../media/images_Draggable_sticker_9_Ibu-Masak_outline.png.js';
import { imagesEndCardCtaButtonPNG } from '../../media/images_End Card_ctaButton.png.js';
import { imagesEndCardLogoPNG } from '../../media/images_End Card_logo.png.js';
import { imagesHandIconPNG } from '../../media/images_hand-icon.png.js';
import { imagesLogoPNG } from '../../media/images_logo.png.js';
import { imagesNumbered1PNG } from '../../media/images_Numbered_1.png.js';
import { imagesNumbered10PNG } from '../../media/images_Numbered_10.png.js';
import { imagesNumbered11PNG } from '../../media/images_Numbered_11.png.js';
import { imagesNumbered12PNG } from '../../media/images_Numbered_12.png.js';
import { imagesNumbered13PNG } from '../../media/images_Numbered_13.png.js';
import { imagesNumbered14PNG } from '../../media/images_Numbered_14.png.js';
import { imagesNumbered15PNG } from '../../media/images_Numbered_15.png.js';
import { imagesNumbered16PNG } from '../../media/images_Numbered_16.png.js';
import { imagesNumbered17PNG } from '../../media/images_Numbered_17.png.js';
import { imagesNumbered18PNG } from '../../media/images_Numbered_18.png.js';
import { imagesNumbered19PNG } from '../../media/images_Numbered_19.png.js';
import { imagesNumbered2PNG } from '../../media/images_Numbered_2.png.js';
import { imagesNumbered20PNG } from '../../media/images_Numbered_20.png.js';
import { imagesNumbered21PNG } from '../../media/images_Numbered_21.png.js';
import { imagesNumbered22PNG } from '../../media/images_Numbered_22.png.js';
import { imagesNumbered23PNG } from '../../media/images_Numbered_23.png.js';
import { imagesNumbered24PNG } from '../../media/images_Numbered_24.png.js';
import { imagesNumbered25PNG } from '../../media/images_Numbered_25.png.js';
import { imagesNumbered26PNG } from '../../media/images_Numbered_26.png.js';
import { imagesNumbered27PNG } from '../../media/images_Numbered_27.png.js';
import { imagesNumbered28PNG } from '../../media/images_Numbered_28.png.js';
import { imagesNumbered29PNG } from '../../media/images_Numbered_29.png.js';
import { imagesNumbered3PNG } from '../../media/images_Numbered_3.png.js';
import { imagesNumbered30PNG } from '../../media/images_Numbered_30.png.js';
import { imagesNumbered31PNG } from '../../media/images_Numbered_31.png.js';
import { imagesNumbered32PNG } from '../../media/images_Numbered_32.png.js';
import { imagesNumbered33PNG } from '../../media/images_Numbered_33.png.js';
import { imagesNumbered34PNG } from '../../media/images_Numbered_34.png.js';
import { imagesNumbered35PNG } from '../../media/images_Numbered_35.png.js';
import { imagesNumbered36PNG } from '../../media/images_Numbered_36.png.js';
import { imagesNumbered37PNG } from '../../media/images_Numbered_37.png.js';
import { imagesNumbered38PNG } from '../../media/images_Numbered_38.png.js';
import { imagesNumbered39PNG } from '../../media/images_Numbered_39.png.js';
import { imagesNumbered4PNG } from '../../media/images_Numbered_4.png.js';
import { imagesNumbered40PNG } from '../../media/images_Numbered_40.png.js';
import { imagesNumbered41PNG } from '../../media/images_Numbered_41.png.js';
import { imagesNumbered42PNG } from '../../media/images_Numbered_42.png.js';
import { imagesNumbered43PNG } from '../../media/images_Numbered_43.png.js';
import { imagesNumbered44PNG } from '../../media/images_Numbered_44.png.js';
import { imagesNumbered45PNG } from '../../media/images_Numbered_45.png.js';
import { imagesNumbered46PNG } from '../../media/images_Numbered_46.png.js';
import { imagesNumbered47PNG } from '../../media/images_Numbered_47.png.js';
import { imagesNumbered48PNG } from '../../media/images_Numbered_48.png.js';
import { imagesNumbered49PNG } from '../../media/images_Numbered_49.png.js';
import { imagesNumbered5PNG } from '../../media/images_Numbered_5.png.js';
import { imagesNumbered50PNG } from '../../media/images_Numbered_50.png.js';
import { imagesNumbered6PNG } from '../../media/images_Numbered_6.png.js';
import { imagesNumbered7PNG } from '../../media/images_Numbered_7.png.js';
import { imagesNumbered8PNG } from '../../media/images_Numbered_8.png.js';
import { imagesNumbered9PNG } from '../../media/images_Numbered_9.png.js';
import { imagesStarBurstPNG } from '../../media/images_Star Burst.png.js';

const imageAssets = [
  { key: "backgroundBgColoredExtended1", data: imagesBackgroundBgColoredExtended1PNG },
  { key: "backgroundBgColoredWhiteExtended1", data: imagesBackgroundBgColoredWhiteExtended1PNG },
  { key: "blueCointainer", data: imagesBlueCointainerPNG },
  
  //correct state collored sticker assets
  { key: "coloredSticker10Kursi", data: imagesColoredSticker10KursiPNG },
  { key: "coloredSticker11GirlSleep", data: imagesColoredSticker11GirlSleepPNG },
  { key: "coloredSticker12Buku", data: imagesColoredSticker12BukuPNG },
  { key: "coloredSticker13Cheesecake", data: imagesColoredSticker13CheesecakePNG },
  { key: "coloredSticker14Karpet", data: imagesColoredSticker14KarpetPNG },
  { key: "coloredSticker15Water", data: imagesColoredSticker15WaterPNG },
  { key: "coloredSticker16Remote", data: imagesColoredSticker16RemotePNG },
  { key: "coloredSticker17JamDinding", data: imagesColoredSticker17JamDindingPNG },
  { key: "coloredSticker18Bantal", data: imagesColoredSticker18BantalPNG },
  { key: "coloredSticker19Bayi", data: imagesColoredSticker19BayiPNG },
  { key: "coloredSticker1GirlPinkDuduk", data: imagesColoredSticker1GirlPinkDudukPNG },
  { key: "coloredSticker20BoyKucing", data: imagesColoredSticker20BoyKucingPNG },
  { key: "coloredSticker21Keys", data: imagesColoredSticker21KeysPNG },
  { key: "coloredSticker22Bear", data: imagesColoredSticker22BearPNG },
  { key: "coloredSticker23PigoraTulip", data: imagesColoredSticker23PigoraTulipPNG },
  { key: "coloredSticker24BalokMenara", data: imagesColoredSticker24BalokMenaraPNG },
  { key: "coloredSticker25BoyJuice", data: imagesColoredSticker25BoyJuicePNG },
  { key: "coloredSticker26Pot", data: imagesColoredSticker26PotPNG },
  { key: "coloredSticker27BoyHideLamp", data: imagesColoredSticker27BoyHideLampPNG },
  { key: "coloredSticker28DotSusu", data: imagesColoredSticker28DotSusuPNG },
  { key: "coloredSticker29Yarn", data: imagesColoredSticker29YarnPNG },
  { key: "coloredSticker2GirlDuduk", data: imagesColoredSticker2GirlDudukPNG },
  { key: "coloredSticker30Dekorasi", data: imagesColoredSticker30DekorasiPNG },
  { key: "coloredSticker31IbuBayi", data: imagesColoredSticker31IbuBayiPNG },
  { key: "coloredSticker32BoyDudukSila", data: imagesColoredSticker32BoyDudukSilaPNG },
  { key: "coloredSticker33TongSampah", data: imagesColoredSticker33TongSampahPNG },
  { key: "coloredSticker34Kaktus", data: imagesColoredSticker34KaktusPNG },
  { key: "coloredSticker35BoyCookie", data: imagesColoredSticker35BoyCookiePNG },
  { key: "coloredSticker36BoyPlane", data: imagesColoredSticker36BoyPlanePNG },
  { key: "coloredSticker37BoyTiduran", data: imagesColoredSticker37BoyTiduranPNG },
  { key: "coloredSticker38BoyLaper", data: imagesColoredSticker38BoyLaperPNG },
  { key: "coloredSticker39BapakMauMakan", data: imagesColoredSticker39BapakMauMakanPNG },
  { key: "coloredSticker3GirlTea2", data: imagesColoredSticker3GirlTea2PNG },
  { key: "coloredSticker40GirlTea1", data: imagesColoredSticker40GirlTea1PNG },
  { key: "coloredSticker41BoyTelp", data: imagesColoredSticker41BoyTelpPNG },
  { key: "coloredSticker42Cicak", data: imagesColoredSticker42CicakPNG },
  { key: "coloredSticker43Teh", data: imagesColoredSticker43TehPNG },
  { key: "coloredSticker44GirlRead", data: imagesColoredSticker44GirlReadPNG },
  { key: "coloredSticker45GantunganTopi", data: imagesColoredSticker45GantunganTopiPNG },
  { key: "coloredSticker46Truck", data: imagesColoredSticker46TruckPNG },
  { key: "coloredSticker47Cat", data: imagesColoredSticker47CatPNG },
  { key: "coloredSticker48GirlBoneka", data: imagesColoredSticker48GirlBonekaPNG },
  { key: "coloredSticker49BalokAngka", data: imagesColoredSticker49BalokAngkaPNG },
  { key: "coloredSticker4Telfon", data: imagesColoredSticker4TelfonPNG },
  { key: "coloredSticker50Blanket", data: imagesColoredSticker50BlanketPNG },
  { key: "coloredSticker5PigoraGunung", data: imagesColoredSticker5PigoraGunungPNG },
  { key: "coloredSticker6PewangiRuangan", data: imagesColoredSticker6PewangiRuanganPNG },
  { key: "coloredSticker7Meja", data: imagesColoredSticker7MejaPNG },
  { key: "coloredSticker8Majalah", data: imagesColoredSticker8MajalahPNG },
  { key: "coloredSticker9IbuMasak", data: imagesColoredSticker9IbuMasakPNG },
  { key: "cta", data: imagesCtaPNG },

 //draggable sticker outline

  { key: "draggableSticker10KursiOutline", data: imagesDraggableSticker10KursiOutlinePNG },
  { key: "draggableSticker11GirlSleepOutline", data: imagesDraggableSticker11GirlSleepOutlinePNG },
  { key: "draggableSticker12BukuOutline", data: imagesDraggableSticker12BukuOutlinePNG },
  { key: "draggableSticker13CheesecakeOutline", data: imagesDraggableSticker13CheesecakeOutlinePNG },
  { key: "draggableSticker14KarpetOutline", data: imagesDraggableSticker14KarpetOutlinePNG },
  { key: "draggableSticker15WaterOutline", data: imagesDraggableSticker15WaterOutlinePNG },
  { key: "draggableSticker16RemoteOutline", data: imagesDraggableSticker16RemoteOutlinePNG },
  { key: "draggableSticker17JamDindingOutline", data: imagesDraggableSticker17JamDindingOutlinePNG },
  { key: "draggableSticker18BantalOutline", data: imagesDraggableSticker18BantalOutlinePNG },
  { key: "draggableSticker19BayiOutline", data: imagesDraggableSticker19BayiOutlinePNG },
  { key: "draggableSticker1GirlPinkDudukOutline", data: imagesDraggableSticker1GirlPinkDudukOutlinePNG },
  { key: "draggableSticker20BoyKucingOutline", data: imagesDraggableSticker20BoyKucingOutlinePNG },
  { key: "draggableSticker21KeysOutline", data: imagesDraggableSticker21KeysOutlinePNG },
  { key: "draggableSticker22BearOutline", data: imagesDraggableSticker22BearOutlinePNG },
  { key: "draggableSticker23PigoraTulipOutline", data: imagesDraggableSticker23PigoraTulipOutlinePNG },
  { key: "draggableSticker24BalokMenaraOutline", data: imagesDraggableSticker24BalokMenaraOutlinePNG },
  { key: "draggableSticker25BoyJuiceOutline", data: imagesDraggableSticker25BoyJuiceOutlinePNG },
  { key: "draggableSticker26PotOutline", data: imagesDraggableSticker26PotOutlinePNG },
  { key: "draggableSticker27BoyHideLampOutline", data: imagesDraggableSticker27BoyHideLampOutlinePNG },
  { key: "draggableSticker28DotSusuOutline", data: imagesDraggableSticker28DotSusuOutlinePNG },
  { key: "draggableSticker29YarnOutline", data: imagesDraggableSticker29YarnOutlinePNG },
  { key: "draggableSticker2GirlDudukOutline", data: imagesDraggableSticker2GirlDudukOutlinePNG },
  { key: "draggableSticker30DekorasiOutline", data: imagesDraggableSticker30DekorasiOutlinePNG },
  { key: "draggableSticker31IbuBayiOutline", data: imagesDraggableSticker31IbuBayiOutlinePNG },
  { key: "draggableSticker32BoyDudukSilaOutline", data: imagesDraggableSticker32BoyDudukSilaOutlinePNG },
  { key: "draggableSticker33TongSampahOutline", data: imagesDraggableSticker33TongSampahOutlinePNG },
  { key: "draggableSticker34KaktusOutline", data: imagesDraggableSticker34KaktusOutlinePNG },
  { key: "draggableSticker35BoyCookieOutline", data: imagesDraggableSticker35BoyCookieOutlinePNG },
  { key: "draggableSticker36BoyPlaneOutline", data: imagesDraggableSticker36BoyPlaneOutlinePNG },
  { key: "draggableSticker37BoyTiduranOutline", data: imagesDraggableSticker37BoyTiduranOutlinePNG },
  { key: "draggableSticker38BoyLaperOutline", data: imagesDraggableSticker38BoyLaperOutlinePNG },
  { key: "draggableSticker39BapakMauMakanOutline", data: imagesDraggableSticker39BapakMauMakanOutlinePNG },
  { key: "draggableSticker3GirlTea2Outline", data: imagesDraggableSticker3GirlTea2OutlinePNG },
  { key: "draggableSticker40GirlTea1Outline", data: imagesDraggableSticker40GirlTea1OutlinePNG },
  { key: "draggableSticker41BoyTelpOutline", data: imagesDraggableSticker41BoyTelpOutlinePNG },
  { key: "draggableSticker42CicakOutline", data: imagesDraggableSticker42CicakOutlinePNG },
  { key: "draggableSticker43TehOutline", data: imagesDraggableSticker43TehOutlinePNG },
  { key: "draggableSticker44GirlReadOutline", data: imagesDraggableSticker44GirlReadOutlinePNG },
  { key: "draggableSticker45GantunganTopiOutline", data: imagesDraggableSticker45GantunganTopiOutlinePNG },
  { key: "draggableSticker46TruckOutline", data: imagesDraggableSticker46TruckOutlinePNG },
  { key: "draggableSticker47CatOutline", data: imagesDraggableSticker47CatOutlinePNG },
  { key: "draggableSticker48GirlBonekaOutline", data: imagesDraggableSticker48GirlBonekaOutlinePNG },
  { key: "draggableSticker49BalokAngkaOutline", data: imagesDraggableSticker49BalokAngkaOutlinePNG },
  { key: "draggableSticker4TelfonOutline", data: imagesDraggableSticker4TelfonOutlinePNG },
  { key: "draggableSticker50BlanketOutline", data: imagesDraggableSticker50BlanketOutlinePNG },
  { key: "draggableSticker5PigoraGunungOutline", data: imagesDraggableSticker5PigoraGunungOutlinePNG },
  { key: "draggableSticker6PewangiRuanganOutline", data: imagesDraggableSticker6PewangiRuanganOutlinePNG },
  { key: "draggableSticker7MejaOutline", data: imagesDraggableSticker7MejaOutlinePNG },
  { key: "draggableSticker8MajalahOutline", data: imagesDraggableSticker8MajalahOutlinePNG },
  { key: "draggableSticker9IbuMasakOutline", data: imagesDraggableSticker9IbuMasakOutlinePNG },
  { key: "endCardCtaButton", data: imagesEndCardCtaButtonPNG },
  { key: "endCardLogo", data: imagesEndCardLogoPNG },
  { key: "handIcon", data: imagesHandIconPNG },
  { key: "logo", data: imagesLogoPNG },

  //numbered assets
  { key: "numbered1", data: imagesNumbered1PNG },
  { key: "numbered10", data: imagesNumbered10PNG },
  { key: "numbered11", data: imagesNumbered11PNG },
  { key: "numbered12", data: imagesNumbered12PNG },
  { key: "numbered13", data: imagesNumbered13PNG },
  { key: "numbered14", data: imagesNumbered14PNG },
  { key: "numbered15", data: imagesNumbered15PNG },
  { key: "numbered16", data: imagesNumbered16PNG },
  { key: "numbered17", data: imagesNumbered17PNG },
  { key: "numbered18", data: imagesNumbered18PNG },
  { key: "numbered19", data: imagesNumbered19PNG },
  { key: "numbered2", data: imagesNumbered2PNG },
  { key: "numbered20", data: imagesNumbered20PNG },
  { key: "numbered21", data: imagesNumbered21PNG },
  { key: "numbered22", data: imagesNumbered22PNG },
  { key: "numbered23", data: imagesNumbered23PNG },
  { key: "numbered24", data: imagesNumbered24PNG },
  { key: "numbered25", data: imagesNumbered25PNG },
  { key: "numbered26", data: imagesNumbered26PNG },
  { key: "numbered27", data: imagesNumbered27PNG },
  { key: "numbered28", data: imagesNumbered28PNG },
  { key: "numbered29", data: imagesNumbered29PNG },
  { key: "numbered3", data: imagesNumbered3PNG },
  { key: "numbered30", data: imagesNumbered30PNG },
  { key: "numbered31", data: imagesNumbered31PNG },
  { key: "numbered32", data: imagesNumbered32PNG },
  { key: "numbered33", data: imagesNumbered33PNG },
  { key: "numbered34", data: imagesNumbered34PNG },
  { key: "numbered35", data: imagesNumbered35PNG },
  { key: "numbered36", data: imagesNumbered36PNG },
  { key: "numbered37", data: imagesNumbered37PNG },
  { key: "numbered38", data: imagesNumbered38PNG },
  { key: "numbered39", data: imagesNumbered39PNG },
  { key: "numbered4", data: imagesNumbered4PNG },
  { key: "numbered40", data: imagesNumbered40PNG },
  { key: "numbered41", data: imagesNumbered41PNG },
  { key: "numbered42", data: imagesNumbered42PNG },
  { key: "numbered43", data: imagesNumbered43PNG },
  { key: "numbered44", data: imagesNumbered44PNG },
  { key: "numbered45", data: imagesNumbered45PNG },
  { key: "numbered46", data: imagesNumbered46PNG },
  { key: "numbered47", data: imagesNumbered47PNG },
  { key: "numbered48", data: imagesNumbered48PNG },
  { key: "numbered49", data: imagesNumbered49PNG },
  { key: "numbered5", data: imagesNumbered5PNG },
  { key: "numbered50", data: imagesNumbered50PNG },
  { key: "numbered6", data: imagesNumbered6PNG },
  { key: "numbered7", data: imagesNumbered7PNG },
  { key: "numbered8", data: imagesNumbered8PNG },
  { key: "numbered9", data: imagesNumbered9PNG },
  { key: "starBurst", data: imagesStarBurstPNG },
];

const audioAssets = [
  { key: "bgm", data: audioBgmMP3 },
  { key: "endcard", data: audioEndcardMP3 },
  { key: "switchCombo1", data: audioSwitchCombo1MP3 },
  { key: "switchCombo2", data: audioSwitchCombo2MP3 },
  { key: "switchCombo3", data: audioSwitchCombo3MP3 },
  { key: "switch", data: audioSwitchMP3 },
  { key: "audioBGM", data: imagesAudioBGMMP3 },
  { key: "audioCorrectAnswer", data: imagesAudioCorrectAnswerMP3 },
  { key: "audioFinished", data: imagesAudioFinishedMP3 },
  { key: "audioWrongAnswer", data: imagesAudioWrongAnswerMP3 },
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
