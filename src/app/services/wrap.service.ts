import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class WrapService {
  wraps = [];
  glossWraps = [
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/acid-lime-rb07-hd-vinyl-wrap.webp',
      'title': "Acid Lime (RB07-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/amazon-grey-cg03-hd-vinyl-wrap.webp',
      'title': "Amazon grey (CG03-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/amber-rose-cg36-hd-vinyl-wrap.webp',
      'title': "Amber Rose (CG36-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/amberwave-cg45-hd-vinyl-wrap.webp',
      'title': "Amberwave (CG45-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/amphibian-green-cg32-hd-vinyl-wrap.webp',
      'title': "Amphibian Green (CG32-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/antique-green-hm16-hd-vinyl-wrap.webp',
      'title': "Antique Green (HM16-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/arctic-silver-rb27-hd-vinyl-wrap.webp',
      'title': "Arctic Silver (RB27-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/ash-grey-rb13-hd-vinyl-wrap.webp',
      'title': "Ash Grey (RB13-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/atomic-silver-gal31-hd-vinyl-wrap.webp',
      'title': "Atomic Silver (GAL31-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/avalon-teal-cg33-hd-vinyl-wrap.webp',
      'title': "Avalon Teal (CG33-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/azure-flame-gal33-hd-vinyl-wrap.webp',
      'title': "Azure Flame (GAL33-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/baby-blue-cg58-hd-vinyl-wrap.webp',
      'title': "Baby Blue (CG58-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/bali-blue-cg37-hd-vinyl-wrap.webp',
      'title': "Bali Blue (CG37-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/battleship-grey-cg20-hd-vinyl-wrap.webp',
      'title': "Battleship grey (CG20-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/berry-red-cg49-hd-vinyl-wrap.webp',
      'title': "Berry Red (CG49-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/black-cherry-ice-hm08-hd-vinyl-wrap.webp',
      'title': "Black Cherry Ice (HM08-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/black-gold-hm09-hd-vinyl-wrap.webp',
      'title': "black-gold-hm09-hd-vinyl-wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/blue-gem-gal02-hd-vinyl-wrap.webp',
      'title': "Blue Gem (GAL02-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/british-racing-green-cg38-hd-vinyl-wrap-1.webp',
      'title': "British Racing Green (CG38-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/burgundy-black-hm10-hd-vinyl-wrap.webp',
      'title': "Burgundy Black (HM10-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/camouflage-green-cg51-hd-vinyl-wrap.webp',
      'title': "Camouflage Green (CG51-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/candy-purple-gal03-hd-vinyl-wrap.webp',
      'title': "Candy Purple (GAL03-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/caribbean-blue-rb09-hd-vinyl-wrap.webp',
      'title': "Caribbean Blue (RB09-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/chelsea-rose-cg25-hd-vinyl-wrap.webp',
      'title': "Chelsea Rose (CG25-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/china-blue-cg22-hd-vinyl-wrap.webp',
      'title': "China Blue (CG22-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/coal-black-mt01-hd-vinyl-wrap.webp',
      'title': "Gloss Coal Black (MT01-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/cool-blue-cg53-hd-vinyl-wrap.webp',
      'title': "Cool Blue (CG53-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/copper-bronze-hm15-hd-vinyl-wrap.webp',
      'title': "Copper Bronze (HM15-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/coral-peach-rb08-hd-vinyl-wrap.webp',
      'title': "Coral Peach (RB08-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/dark-platinum-rb12-hd-vinyl-wrap.webp',
      'title': "Dark Platinum (RB12-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/deep-blue-rb02-hd-vinyl-wrap.webp',
      'title': "Deep Blue (RB02-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/deep-onyx-rb32-hd-vinyl-wrap.webp',
      'title': "Deep Onyx (RB32-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/deep-orange-rb19-hd-vinyl-wrap.webp',
      'title': "Deep Orange (RB19-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/deep-purple-blue-rb38-hd-vinyl-wrap.webp',
      'title': "Deep Purple Blue (RB38-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/diamond-white-ck801-hd-vinyl-wrap.webp',
      'title': "Diamond White (CK801-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/dolomite-silver-rb33-hd-vinyl-wrap-1.webp',
      'title': "Dolomite Silver (RB33-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/dragon-green-rb39-hd-vinyl-wrap.webp',
      'title': "Dragon Green (RB39-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/ebony-sparkle-ck202-hd-vinyl-wrap.webp',
      'title': "Ebony Sparkle (CK202-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/flamingo-pink-cg56-hd-vinyl-wrap.webp',
      'title': "Flamingo Pink (CG56-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/french-olive-cg31-hd-vinyl-wrap.webp',
      'title': "French Olive (CG31-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/gecko-green-cg41-hd-vinyl-wrap.webp',
      'title': "Gecko Green (CG41-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/gloss-green-black-hm07-hd-vinyl-wrap.webp',
      'title': "Gloss Green Black (HM07-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/golden-yellow-rb25-hd-vinyl-wrap.webp',
      'title': "Golden Yellow (RB25-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/grape-green-cg42-hd-vinyl-wrap.webp',
      'title': "Grape Green (CG42-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/grau-pearl-rb30-hd-vinyl-wrap.webp',
      'title': "Grau Pearl (RB30-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/hunter-green-gal29-hd-vinyl-wrap.webp',
      'title': "Hunter green (GAL29-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/ivory-cream-cg26-hd-vinyl-wrap.webp',
      'title': "Ivory Cream (CG26-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/kelly-green-rb22-hd-vinyl-wrap.webp',
      'title': "Kelly Green (RB22-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/khaki-green-cg29-hd-vinyl-wrap.webp',
      'title': "Khaki Green (CG29-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/la-palma-green-cg35-hd-vinyl-wrap.webp',
      'title': "La Palma Green (CG35-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/lava-orange-cg24-hd-vinyl-wrap.webp',
      'title': "Lava Orange (CG24-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/leather-beige-cg52-hd-vinyl-wrap.webp',
      'title': "Leather Beige (CG52-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/louvre-yellow-cg43-hd-vinyl-wrap.webp',
      'title': "Louvre Yellow (CG43-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/midnight-purple-rb20-hd-vinyl-wrap.webp',
      'title': "Midnight Purple (RB20-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/millennial-pink-cg19-hd-vinyl-wrap.webp',
      'title': "Millennial Pink (CG19-HD) vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/monsoon-green-cg39-hd-vinyl-wrap.webp',
      'title': "Monsoon Green (CG39-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/moss-green-cg23-hd-vinyl-wrap.webp',
      'title': "Moss Green (CG23-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/ocean-green-rb18-hd-vinyl-wrap.webp',
      'title': "Ocean Green (RB18-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/pale-celadon-cg30-hd-vinyl-wrap.webp',
      'title': "Pale Celadon (CG30-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/palladian-blue-rb36-hd-vinyl-wrap.webp',
      'title': "Palladian Blue (RB36-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/papaya-orange-cg54-hd-vinyl-wrap.webp',
      'title': "Papaya Orange (CG54-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/paprika-orange-gal06-hd-vinyl-wrap.webp',
      'title': "Paprika orange (GAL06-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/passionate-purple-rb04-hd-vinyl-wrap.webp',
      'title': "Passionate Purple (RB04-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/phantom-green-rb37-hd-vinyl-wrap.webp',
      'title': "Phantom Green (RB37-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/pink-gold-gal23-hd-vinyl-wrap.webp',
      'title': "Pink Gold (GAL23-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/pink-sakura-sl01-hd-vinyl-wrap.webp',
      'title': "Pink Sakura (SL01-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/purple-pearl-gal32-hd-vinyl-wrap.webp',
      'title': "Purple Pearl (GAL32-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/racing-red-cg06-hd-vinyl-wrap.webp',
      'title': "Racing Red (CG06-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/rolling-sea-cg21-hd-vinyl-wrap.webp',
      'title': "Rolling sea (CG21-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/royal-blue-gal19-hd-vinyl-wrap.webp',
      'title': "Royal Blue (GAL19-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/royal-purple-sl07-hd-vinyl-wrap.webp',
      'title': "Royal Purple (SL07-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/ruby-green-rb26-hd-vinyl-wrap.webp',
      'title': "Ruby Green (RB26-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/sahara-beige-cg46-gd-vinyl-wrap.webp',
      'title': "Sahara Beige (CG46-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/sea-turquoise-rb16-hd-vinyl-wrap.webp',
      'title': "Sea Turquoise (RB16-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/sherwood-green-hm14-hd-vinyl-wrap.webp',
      'title': "Sherwood green (HM14-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/silver-fern-rb31-hd-vinyl-wrap.webp',
      'title': "Silver Fern (RB31-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/slate-grey-cg16-hd-vinyl-wrap.webp',
      'title': "Slate grey (CG16-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/sonoma-green-hm12-hd-vinyl-wrap.webp',
      'title': "Sonoma Green (HM12-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/sorbet-pink-vinyl-wrap.webp',
      'title': "Sorbet Pink (CG59-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/space-blue-gal14-hd-vinyl-wrap.webp',
      'title': "Space Blue (GAL14-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/spanish-lavender-cg48-hd-vinyl-wrap.webp',
      'title': "Spanish Lavender (CG48-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/strawberry-milk-cg50-hd-vinyl-wrap.webp',
      'title': "Strawberry Milk (CG50-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/sunflower-yellow-cg12-hd-vinyl-wrap.webp',
      'title': "Sunflower Yellow (CG12-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/sunray-yellow-cg44-hd-vinyl-wrap.webp',
      'title': "Sunray Yellow (CG44-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/super-silver-mist-gal11-hd-vinyl-wrap.webp',
      'title': "Super Silver Mist (GAL11-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/super-white-cg02-hd-vinyl-wrap.webp',
      'title': "Super White (CG02-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/supreme-red-gal26-hd-vinyl-wrap.webp',
      'title': "Supreme Red (GAL26-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/tangerine-orange-cg40-hd-vinyl-wrap.webp',
      'title': "Tangerine Orange (CG40-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/tiffany-cg11-hd-vinyl-wrap.webp',
      'title': "Tiffany (CG11-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/titanium-violet-vinyl-wrap.webp',
      'title': "Titanium Violet (RB40-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/top-coated-moss-green-cg23-sh-vinyl-wrap.webp',
      'title': "Top Coated Moss Green (CG23-SH) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/top-coated-super-black-cg01-sh-vinyl-wrap.webp',
      'title': "Top Coated Super black (CG01-SH) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/top-coated-vintage-grey-cg47-sh-vinyl-wrap.webp',
      'title': "Top Coated Vintage grey (CG47-SH) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/true-blood-gal01r-hd-vinyl-wrap.webp',
      'title': "True Blood (GAL01R-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/true-nardo-grey-cg27-hd-vinyl-wrap.webp',
      'title': "True Nardo Grey (CG27-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/ultimate-black-cg01-hd-vinyl-wrap.webp',
      'title': "Ultimate Black (CG01-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/vanilla-mist-cg60-hd-vinyl-wrap.webp',
      'title': "Vanilla Mist (CG60-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/velvet-red-gal30-hd-vinyl-wrap.webp',
      'title': "Velvet Red (GAL30-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/vibrant-blue-cg57-hd-vinyl-wrap.webp',
      'title': "Vibrant Blue (CG57-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/vibrant-nickel-rb28-hd-vinyl-wrap.webp',
      'title': "Vibrant Nickel (RB28-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/vintage-grey-cg47-hd-vinyl-wrap.webp',
      'title': "Vintage Grey (CG47-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/wild-dove-cg55-hd-vinyl-wrap.webp',
      'title': "Wild Dove (CG55-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/wilderness-green-rb35-hd-vinyl-wrap.webp',
      'title': "Wilderness Green (RB35-HD) Vinyl Wrap"
    },
    {
      'category': 'gloss',
      'src': '/assets/wraps/gloss/yacht-blue-cg28-hd-vinyl-wrap.webp',
      'title': "Yacht Blue (CG28-HD) Vinyl Wrap"
    }
  ];
  matteWraps = [
    {
      'category': 'matte',
      'src': '/assets/wraps/matte/alaska-white-scm02-vinyl-wrap-1.webp',
      'title': "Alaska White (SCM02) Vinyl Wrap"
    },
    {
      'category': 'matte',
      'src': '/assets/wraps/matte/autumn-blaze-scm36-vinyl-wrap.webp',
      'title': "Autumn Blaze (SCM36) Vinyl Wrap"
    },
    {
      'category': 'matte',
      'src': '/assets/wraps/matte/black-matte-cm01m-vinyl-wrap.webp',
      'title': "Black Matte (CM01M) Vinyl Wrap"
    },
    {
      'category': 'matte',
      'src': '/assets/wraps/matte/copy-of-granite-grey-scm47-vinyl-wrap.webp',
      'title': "Granite Grey (SCM47) Vinyl Wrap"
    },
    {
      'category': 'matte',
      'src': '/assets/wraps/matte/deep-black-scm01-vinyl-wrap-1.webp',
      'title': "Deep black (SCM01) Vinyl Wrap"
    },
    {
      'category': 'matte',
      'src': '/assets/wraps/matte/grainy-black-cm02-ms-vinyl-wrap.webp',
      'title': "Grainy Black (CM02-MS) Vinyl Wrap"
    },
    {
      'category': 'matte',
      'src': '/assets/wraps/matte/granite-grey-scm47-r-vinyl-wrap.webp',
      'title': "Granite Grey (SCM47-R) Vinyl Wrap"
    },
    {
      'category': 'matte',
      'src': '/assets/wraps/matte/lizard-grey-scm23-vinyl-wrap.webp',
      'title': "Lizard Grey (SCM23-R) Vinyl Wrap"
    },
    {
      'category': 'matte',
      'src': '/assets/wraps/matte/military-green-cm09-vinyl-wrap.webp',
      'title': "Military Green (CM09) Vinyl Wrap"
    },
    {
      'category': 'matte',
      'src': '/assets/wraps/matte/nickel-grey-scm27-vinyl-wrap-1.webp',
      'title': "Nickel Grey (SCM27) Vinyl Wrap"
    },
    {
      'category': 'matte',
      'src': '/assets/wraps/matte/pearl-black-cm15-vinyl-wrap.webp',
      'title': "Pearl Black (CM15) Vinyl Wrap"
    },
    {
      'category': 'matte',
      'src': '/assets/wraps/matte/piniengruen-pearl-tc02-vinyl-wrap.webp',
      'title': "Piniengruen Pearl (TC02) Vinyl Wrap"
    },
    {
      'category': 'matte',
      'src': '/assets/wraps/matte/sable-black-tc01-vinyl-wrap.webp',
      'title': "Sable black (TC01) Vinyl Wrap"
    },
    {
      'category': 'matte',
      'src': '/assets/wraps/matte/sandy-black-cm01-ms-vinyl-wrap.webp',
      'title': "Sandy black (CM01-MS) Vinyl Wrap"
    },
    {
      'category': 'matte',
      'src': '/assets/wraps/matte/vanilla-cream-scm26-vinyl-wrap.webp',
      'title': "Vanilla Cream (SCM26-R) Vinyl Wrap"
    },
    {
      'category': 'matte',
      'src': '/assets/wraps/matte/white-matte-cm02-vinyl-wrap.webp',
      'title': "White Matte (CM02) Vinyl Wrap"
    }
  ];
  satinWraps = [
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/admiral-blue-smt08-vinyl-wrap.webp',
      'title': "Admiral Blue (SMT08) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/antique-rose-vch421-s-vinyl-wrap.webp',
      'title': "Antique Rose (VCH421-S) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/apollo-grey-smt06-vinyl-wrap.webp',
      'title': "Apollo Grey (SMT06) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/autumn-orange-vch418-s-vinyl-wrap.webp',
      'title': "Autumn Orange (VCH418-S) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/black-silver-hm02-r-vinyl-wrap.webp',
      'title': "Black Silver (HM02-R) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/bond-gold-ech17-vinyl-wrap.webp',
      'title': "Bond Gold (ECH17) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/boysenberry-black-smt04-vinyl-wrap.webp',
      'title': "Boysenberry Black (SMT04) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/burnt-maroon-smt02-vinyl-wrap.webp',
      'title': "Burnt Maroon (SMT02) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/carmine-red-vch417-s-vinyl-wrap.webp',
      'title': "Carmine Red (VCH417-S) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/charcoal-grey-ech03-vinyl-wrap.webp',
      'title': "Charcoal Grey (ECH03) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/cherry-blossom-pink-ech22-vinyl-wrap.webp',
      'title': "Cherry Blossom Pink (ECH22) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/concord-grape-vch403-s-vinyl-wrap.webp',
      'title': "Concord Grape (VCH403-S) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/copper-orange-smt17-vinyl-wrap-1.webp',
      'title': "Copper Orange (SMT17R) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/crimson-red-vch401-s-vinyl-wrap.webp',
      'title': "Crimson Red (VCH401-S) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/dark-grey-silk-hm01-vinyl-wrap.webp',
      'title': "Dark Grey Silk (HM01) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/dark-platinum-ech21-vinyl-wrap-1.webp',
      'title': "Dark Platinum (ECH21) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/deep-cobalt-vch419-s-vinyl-wrap.webp',
      'title': "Deep Cobalt (VCH419-S) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/emerald-green-vch405-s-vinyl-wrap.webp',
      'title': "Emerald Green (VCH405-S) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/flame-red-smt15-vinyl-wrap.webp',
      'title': "Flame red (SMT15) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/forest-green-ech19-vinyl-wrap.webp',
      'title': "Forest Green (ECH19) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/gable-green-vch423-s-vinyl-wrap.webp',
      'title': "Gable Green (VCH423-S) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/golden-yellow-vch408-s-vinyl-wrap.webp',
      'title': "Golden Yellow (VCH408-S) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/green-black-silk-hm07-vinyl-wrap.webp',
      'title': "Matte Green Black Silk (HM07) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/green-mantle-smt05-vinyl-wrap.webp',
      'title': "Green Mantle (SMT05) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/greenfinch-gold-hm09-vinyl-wrap.webp',
      'title': "Greenfinch Gold (HM09) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/gunmetal-grey-vch410-s-vinyl-wrap.webp',
      'title': "Gunmetal Grey (VCH410-S) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/gunsmoke-grey-ech02-vinyl-wrap.webp',
      'title': "Gunsmoke Grey (ECH02) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/hornet-yellow-ech16-vinyl-wrap.webp',
      'title': "Hornet Yellow (ECH16) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/hot-pink-vch404-s-vinyl-wrap.webp',
      'title': "Hot pink (VCH404-S) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/jewel-green-smt16-vinyl-wrap.webp',
      'title': "Jewel Green (SMT16) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/lapis-blue-vch420-s-vinyl-wrap.webp',
      'title': "Lapis Blue (VCH420-S) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/lawn-green-smt14-vinyl-wrap.webp',
      'title': "Lawn Green (SMT14) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/mineral-grey-smt01-vinyl-wrap.webp',
      'title': "Mineral Grey (SMT01) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/navy-black-ech15-vinyl-wrap.webp',
      'title': "Navy Black (ECH15) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/onyx-grey-smt09-vinyl-wrap.webp',
      'title': "Onyx Grey (SMT09) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/oxide-red-smt18-vinyl-wrap.webp',
      'title': "Oxide Red (SMT18) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/oxide-red-smt18r-vinyl-wrap.webp',
      'title': "Velour Red (SMT18R) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/paradise-green-smt12-vinyl-wrap.webp',
      'title': "Paradise Green (SMT12) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/pine-green-smt13-vinyl-wrap.webp',
      'title': "Pine Green (SMT13) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/rasant-blue-smt07-vinyl-wrap.webp',
      'title': "Rasant Blue (SMT07) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/sangria-red-vch422-s-vinyl-wrap.webp',
      'title': "Sangria Red (VCH422-S) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/satin-pearl-white-ech01-vinyl-wrap.webp',
      'title': "Satin Pearl White (ECH01) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/solar-orange-smt10-vinyl-wrap.webp',
      'title': "Solar Orange (SMT10) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/super-silver-sage-vch411-s-vinyl-wrap.webp',
      'title': "Super Silver Sage (VCH411-S) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/surf-blue-smt11-vinyl-wrap.webp',
      'title': "Surf Blue (SMT11) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/velvet-blue-vch402-s-vinyl-wrap.webp',
      'title': "Velvet blue (VCH402-S) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/venetian-violet-smt03-vinyl-wrap.webp',
      'title': "Venetian Violet (SMT03) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/violet-purple-vch416-s-vinyl-wrap.webp',
      'title': "Violet Purple (VCH416-S) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/white-satin-ck903-vinyl-wrap.webp',
      'title': "White Satin (CK903) Vinyl Wrap"
    },
    {
      'category': 'satin',
      'src': '/assets/wraps/satin/yellow-lime-vch412-s-vinyl-wrap.webp',
      'title': "Yellow Lime (VCH412-S) Vinyl Wrap"
    },
  ];
  chromeWraps = [
    {
      'category': 'chrome',
      'src': '/assets/wraps/chrome/ammolite-gem-mch02-vinyl-wrap.webp',
      'title': "Ammolite Gem (MCH02) Vinyl Wrap"
    },
    {
      'category': 'chrome',
      'src': '/assets/wraps/chrome/cherry-red-chrome-chm04-hd-vinyl-wrap.webp',
      'title': "Cherry Red Chrome (CHM04-HD) Vinyl Wrap"
    },
    {
      'category': 'chrome',
      'src': '/assets/wraps/chrome/crystal-chrome-chm22-hd-vinyl-wrap.webp',
      'title': "Crystal Chrome (CHM22-HD) Vinyl Wrap"
    },
    {
      'category': 'chrome',
      'src': '/assets/wraps/chrome/frozen-berry-mch08-chrome-wrap.webp',
      'title': "Frozen Berry (MCH08) Chrome Wrap"
    },
    {
      'category': 'chrome',
      'src': '/assets/wraps/chrome/inferno-red-chm24-hd-vinyl-wrap.webp',
      'title': "Inferno Red (CHM24-HD) Vinyl Wrap"
    },
    {
      'category': 'chrome',
      'src': '/assets/wraps/chrome/jet-black-chm10-hd-vinyl-wrap.webp',
      'title': "Jet Black (CHM10-HD) Vinyl Wrap"
    },
    {
      'category': 'chrome',
      'src': '/assets/wraps/chrome/nova-blue-chm26-hd-vinyl-wrap.webp',
      'title': "Nova Blue (CHM26-HD) Vinyl Wrap"
    },
    {
      'category': 'chrome',
      'src': '/assets/wraps/chrome/purple-blue-aquamarine-mch01-chrome-wrap.webp',
      'title': "Purple Blue Aquamarine (MCH01) Chrome Wrap"
    },
    {
      'category': 'chrome',
      'src': '/assets/wraps/chrome/reflective-cast-chrome-csc-cmc.webp',
      'title': "Reflective Cast Chrome (CSC/CMC)"
    },
    {
      'category': 'chrome',
      'src': '/assets/wraps/chrome/rose-gold-chm03-hd-vinyl-wrap.webp',
      'title': "Rose Gold (CHM03-HD) Vinyl Wrap"
    },
    {
      'category': 'chrome',
      'src': '/assets/wraps/chrome/solar-gold-chm21-hd-vinyl-wrap.webp',
      'title': "Solar Gold (CHM21-HD) Vinyl Wrap"
    },
    {
      'category': 'chrome',
      'src': '/assets/wraps/chrome/white-gold-chm01-hd-vinyl-wrap.webp',
      'title': "White Gold (CHM01-HD) Vinyl Wrap"
    },
    {
      'category': 'chrome',
      'src': '/assets/wraps/chrome/yellow-gold-chrome-chm02-hd-vinyl-wrap.webp',
      'title': "Yellow Gold Chrome (CHM02-HD) Vinyl Wrap"
    }
  ];
  colorShiftWraps = [
    {
      'category': 'color-shift',
      'src': '/assets/wraps/color-shift/azure-maya-blue-ds04-hd.webp',
      'title': "Azure Maya Blue (DS04-HD)"
    },
    {
      'category': 'color-shift',
      'src': '/assets/wraps/color-shift/crazy-grape-rd18-hd-vinyl-wrap.webp',
      'title': "Crazy Grape (RD18-HD) Vinyl Wrap"
    },
    {
      'category': 'color-shift',
      'src': '/assets/wraps/color-shift/frosted-pearl-ck527-hd-vinyl-wrap.webp',
      'title': "Frosted Pearl (CK527-HD) Vinyl Wrap"
    },
    {
      'category': 'color-shift',
      'src': '/assets/wraps/color-shift/gloss-aurora-white-dch02-hd-vinyl-wrap.webp',
      'title': "Gloss Aurora White (DCH02-HD) Vinyl Wrap"
    },
    {
      'category': 'color-shift',
      'src': '/assets/wraps/color-shift/gloss-purple-blue-ck892g-vinyl-wrap.webp',
      'title': "Gloss Purple Blue (CK892G) Vinyl Wrap"
    },
    {
      'category': 'color-shift',
      'src': '/assets/wraps/color-shift/gold-pearl-ck525-hd-vinyl-wrap.webp',
      'title': "Gold Pearl (CK525-HD) Vinyl Wrap"
    },
    {
      'category': 'color-shift',
      'src': '/assets/wraps/color-shift/green-galaxy-rd15-hd-vinyl-wrap.webp',
      'title': "Green Galaxy (RD15-HD) Vinyl Wrap"
    },
    {
      'category': 'color-shift',
      'src': '/assets/wraps/color-shift/honey-lime-rd12-hd-vinyl-wrap.webp',
      'title': "Honey Lime (RD12-HD) Vinyl Wrap"
    },
    {
      'category': 'color-shift',
      'src': '/assets/wraps/color-shift/iridescent-green-rd16-hd-vinyl-wrap.webp',
      'title': "Iridescent Green (RD16R-HD) Vinyl Wrap"
    },
    {
      'category': 'color-shift',
      'src': '/assets/wraps/color-shift/lavender-pearl-ck526-hd-vinyl-wrap.webp',
      'title': "Lavender Pearl (CK526-HD) Vinyl Wrap"
    },
    {
      'category': 'color-shift',
      'src': '/assets/wraps/color-shift/light-blue-pearl-ck524-hd-vinyl-wrap.webp',
      'title': "Light Blue Pearl (CK524-HD) Vinyl Wrap"
    },
    {
      'category': 'color-shift',
      'src': '/assets/wraps/color-shift/madeira-red-matte-rd17-m-vinyl-wrap.webp',
      'title': "Madeira Red Matte (RD17-M) Vinyl Wrap"
    },
    {
      'category': 'color-shift',
      'src': '/assets/wraps/color-shift/madeira-red-rd17-hd-vinyl-wrap.webp',
      'title': "Madeira Red (RD17-HD) Vinyl Wrap"
    },
    {
      'category': 'color-shift',
      'src': '/assets/wraps/color-shift/matte-aurora-white-dch02-vinyl-wrap.webp',
      'title': "Matte Aurora White (DCH02) Vinyl Wrap"
    },
    {
      'category': 'color-shift',
      'src': '/assets/wraps/color-shift/purple-flame-rd21-pro-vinyl-wrap.webp',
      'title': "Purple Flame (RD21PRO-HD) Vinyl Wrap"
    },
    {
      'category': 'color-shift',
      'src': '/assets/wraps/color-shift/purple-green-rd19-hd-vinyl-wrap.webp',
      'title': "Purple Green (RD19-HD) Vinyl Wrap"
    },
    {
      'category': 'color-shift',
      'src': '/assets/wraps/color-shift/purple-sunset-rd20-hd-vinyl-wrap.webp',
      'title': "Purple Sunset (RD20PRO-HD) Vinyl Wrap"
    },
    {
      'category': 'color-shift',
      'src': '/assets/wraps/color-shift/rainbow-vortex-rd11-hd-vinyl-wrap.webp',
      'title': "Rainbow Vortex (RD11-HD) Vinyl Wrap"
    },
    {
      'category': 'color-shift',
      'src': '/assets/wraps/color-shift/ruby-gold-rd13-hd-vinyl-wrap.webp',
      'title': "Ruby Gold (RD13-HD) Vinyl Wrap"
    },
    {
      'category': 'color-shift',
      'src': '/assets/wraps/color-shift/silver-fireworks-rch01-hd-vinyl-wrap.webp',
      'title': "Silver fireworks (RCH01-HD) Vinyl Wrap"
    },
    {
      'category': 'color-shift',
      'src': '/assets/wraps/color-shift/silver-sunset-ds03-hd-vinyl-wrap.webp',
      'title': "Gloss Silver Sunset (DS03-HD) Vinyl Wrap"
    },
    {
      'category': 'color-shift',
      'src': '/assets/wraps/color-shift/silver-sunset-matte-ds03m-vinyl-wrap.webp',
      'title': "Matte Silver Sunset (DS03M) Vinyl Wrap"
    },
    {
      'category': 'color-shift',
      'src': '/assets/wraps/color-shift/violet-sunrise-rd14-hd-vinyl-wrap.webp',
      'title': "Violet Sunrise (RD14-HD) Vinyl Wrap"
    },
    {
      'category': 'color-shift',
      'src': '/assets/wraps/color-shift/white-fireworks-rch03-hd-vinyl-wrap.webp',
      'title': "White Fireworks (RCH03-HD) Vinyl Wrap"
    },
    {
      'category': 'color-shift',
      'src': '/assets/wraps/color-shift/white-pearl-ck522-hd-vinyl-wrap.webp',
      'title': "White Pearl (CK522-HD) Vinyl Wrap"
    },
    {
      'category': 'color-shift',
      'src': '/assets/wraps/color-shift/wild-heather-ds05-hd-vinyl-wrap.webp',
      'title': "Wild Heather (DS05-HD) Vinyl Wrap"
    }
  ];
  carbonWraps = [
    {
      'category': 'carbon',
      'src': '/assets/wraps/carbon/ceramic-carbon-rcf03-vinyl-wrap.webp',
      'title': "Ceramic Carbon (RCF03) Vinyl Wrap"
    },
    {
      'category': 'carbon',
      'src': '/assets/wraps/carbon/ink-black-bm04-vinyl-wrap.webp',
      'title': "Brushed Black (BM04) Vinyl Wrap"
    },
    {
      'category': 'carbon',
      'src': '/assets/wraps/carbon/matte-ceramic-carbon-rcf03m-vinyl-wrap.webp',
      'title': "Matte Ceramic Carbon (RCF03M) Vinyl Wrap"
    },
    {
      'category': 'carbon',
      'src': '/assets/wraps/carbon/noir-black-carbon-cf01-vinyl-wrap.webp',
      'title': "Noir Black Carbon (CF01) Vinyl Wrap"
    },
    {
      'category': 'carbon',
      'src': '/assets/wraps/carbon/pitch-black-carbon-cf02-vinyl-wrap.webp',
      'title': "Pitch Black Carbon (CF02) Vinyl Wrap"
    },
    {
      'category': 'carbon',
      'src': '/assets/wraps/carbon/premium-black-rcf03-r-vinyl-wrap.webp',
      'title': "Premium Black (RCF03-R) Vinyl Wrap"
    }
  ];


  constructor() { }

  getWraps() {
    return of(this.wraps
      .concat(this.glossWraps)
      .concat(this.matteWraps)
      .concat(this.satinWraps)
      .concat(this.chromeWraps)
      .concat(this.colorShiftWraps)
      .concat(this.carbonWraps));
  }
}
