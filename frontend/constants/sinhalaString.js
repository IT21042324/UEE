import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import {
  HerculesStoryImages,
  RapunzelStoryImages,
  cinderellaOption,
  cinderellaStoryImages,
  herculesOption,
  rapunzelOption,
} from "../assets/images/imageIndex";
import { colorVariants } from "./globalConstants";

export const SinhalaString = () => {
  return {
    screenTitles: {
      MainMenu: "ප්‍රධාන මෙනුව",
      StorySelection: "කතන්දර තේරීම",
      CinderellaStory: "සින්ඩරෙල්ලා",
      RapunzelStory: "රපුන්සෙල්",
      HerculesStory: "හර්කියුලිස්",
      GameCompletion: "සංඛ්යාලේඛන",
    },
    storySelectionOptions: [
      { title: "සින්ඩරෙල්ලා", ref: cinderellaOption },
      { title: "රපුන්සෙල්", ref: rapunzelOption },
      { title: "හර්කියුලිස්", ref: herculesOption },
    ],
    gameStats: [
      { text: "Story Completion Time", value: 0, unit: "minutes" },
      { text: "Incorrect Attmepts", value: 0, unit: "attempts" },
      {
        text: "Time spent on a question on average",
        value: 0,
        unit: "minutes",
      },
    ],
    gameCompletionText: {
      proceedToMainMenu: "Proceed To Main Menu",
      statistics: "Statistics",
    },

    studentSelectionOptions: [
      {
        title: "ප්රහේලිකාව",
        Icon: (
          <MaterialCommunityIcons
            name="puzzle"
            size={200}
            color={colorVariants.dodgerblue}
          />
        ),
      },
      {
        title: "කතාව",
        Icon: (
          <Entypo
            name="open-book"
            size={200}
            color={colorVariants.dodgerblue}
          />
        ),
      },
      {
        title: "ධාවන ලැයිස්තුව",
        Icon: (
          <MaterialCommunityIcons
            name="playlist-music"
            size={200}
            color={colorVariants.dodgerblue}
          />
        ),
      },
      {
        title: "සැකසීම්",
        Icon: (
          <MaterialIcons
            name="settings"
            size={200}
            color={colorVariants.dodgerblue}
          />
        ),
      },
    ],
    studentSelectionSpeech:
      "සාදරයෙන් පිළිගනිමු! ඔබ ප්‍රධාන මෙනුවේ සිටී. අපගේ පළමු විකල්පය විනෝදජනක ප්‍රහේලිකාවකි! ඔබට එය විසඳිය හැකිද? දෙවන විකල්පය ඉන්ද්‍රජාලික කතාවකි. ඔබ පරිකල්පන ලෝකයකට කිමිදීමට සූදානම්ද? තුන්වන විකල්පය ධාවන ලැයිස්තුවකි. අපි බලමු එකට සිසිල් නාද කිහිපයකට සවන් දෙන්න! අවසාන වශයෙන් නොව, අවම වශයෙන්, හතරවන විකල්පය වන්නේ සැකසීම් ය. මෙහිදී ඔබට ඒවා ඔබට ගැලපෙන පරිදි වෙනස් කළ හැක! ඉතින්, එය කුමක් වේවිද?",
    storySelectionSpeech:
      "ඔබ සිටින්නේ කතන්දර පාදක ක්‍රීඩා අංශයේය! දැන්, ඉන්ද්‍රජාලික වික්‍රමාන්විතයක් තෝරා ගැනීමට කාලයයි. ඔබේ පළමු තේරීම සින්ඩරෙල්ලාගේ සිත් ඇදගන්නා කතාවයි, ඊළඟට ඇගේ දිගු රන්වන් හිසකෙස් ඇති රපුන්සෙල්ගේ ඉහළ පියාසර ගමනයි, සහ අවසාන වශයෙන් නොව අවම වශයෙන් නොවේ. , බලසම්පන්න සහ නිර්භීත හර්කියුලිස්, ඉතින්, ඔබ අද ආරම්භ කරන්නේ කුමන අපූරු ගමනක්ද?",
    CinderellaStoryContent: [
      {
        imageId: cinderellaStoryImages.cinderellaImage1,
        passageId: 1,
        passageContent:
          "එක් කලෙක දුර ඈත රාජධානියක සින්ඩරෙල්ලා නම් කරුණාවන්ත මෘදු ගැහැණු ළමයෙකු ජීවත් වූවාය, ඇයට කරුණාවන්ත හදවතක් තිබුණි, නමුත් ඇගේ කුඩා මව සහ සුළු සහෝදරියන් එතරම් නොසිටි නිසා ඇගේ විශාල නිවසේ සියලු කටයුතු කිරීමට ඇයට සිදු විය. ඇය ගැන සතුටුයි. ඇයට තිබූ එකම සතුට ඇගේ බල්ලා බෲනෝ",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "පින්තූරේ ඉන්න කෙල්ල කවුද?",
              options: [
                "සින්ඩරෙල්ලා",
                "කුඩම්මා",
                "ස්ටෙප්සිස්ටර්",
                "සුරංගනා දේව මෑණියන්",
              ],
              correctAnswer: "සින්ඩරෙල්ලා",
            },
            {
              questionId: 2,
              question: "පින්තූරයේ සින්ඩරෙල්ලාට දැනෙන්නේ කෙසේද?",
              options: ["දුකයි", "සතුටුයි", "කෝපයි", "බයයි"],
              correctAnswer: "සතුටුයි",
            },
            {
              questionId: 3,
              question: "සින්ඩරෙල්ලා ඇගේ අතින් කරන්නේ කුමක්ද?",
              options: [
                "ඇගේ බල්ලා සුරතල් කිරීම",
                "කොස්සක් අල්ලාගෙන",
                "හලෝ හලෝ",
                "ඇගේ අත්පුඩි ගසමින්",
              ],
              correctAnswer: "ඇගේ බල්ලා සුරතල් කිරීම",
            },
            {
              questionId: 4,
              question: "පින්තූරයේ සින්ඩරෙල්ලාගේ ඇඳුමේ වර්ණය කුමක්ද?",
              options: ["නිල්", "රෝස", "කොළ", "කහ"],
              correctAnswer: "නිල්",
            },
            {
              questionId: 5,
              question: "සින්ඩරෙල්ලා බල්ලාගේ නම කුමක්ද?",
              options: ["බෲනෝ", "මැක්ස්", "ස්පොට්", "රෙක්ස්"],
              correctAnswer: "බෲනෝ",
            },
          ],
          medium: [
            {
              questionId: 1,
              question:
                "ඇයි සින්ඩරෙල්ලාට එයාගේ ලොකු ගෙදර හැම වැඩක්ම කරන්න වෙන්නේ?",
              options: [
                "ඇය පිරිසිදුව සිටීමට කැමති නිසා",
                "ඇගේ සුළු මව සහ සුළු සහෝදරියන් ඇයට එතරම් හොඳ නැති නිසා",
                "ඇයට කුමාරයා විශ්මයට පත් කිරීමට අවශ්‍ය නිසා",
                "එයාට වෙන කරන්න දෙයක් නැති නිසා",
              ],
              correctAnswer:
                "ඇගේ සුළු මව සහ සුළු සහෝදරියන් ඇයට එතරම් හොඳ නැති නිසා",
            },
            {
              questionId: 2,
              question: "සින්ඩරෙල්ලාගේ බල්ලා ඇයට දැනෙන්නේ කෙසේද?",
              options: ["ආදරය", "අමනාප", "බය", "කම්මැලි"],
              correctAnswer: "ආදරය",
            },
            {
              questionId: 3,
              question: "පින්තූරයේ සින්ඩරෙල්ලා ජීවත් වන්නේ කොහේද?",
              options: ["මාලිගාවක", "ගෘහයක", "වනාන්තරයක", "ගමක"],
              correctAnswer: "ගෘහයක",
            },
            {
              questionId: 4,
              question: "කතාවේ සින්ඩරෙල්ලා සිහින දකින්නේ කුමක්ද?",
              options: [
                "පන්දුවට යනවා",
                "කුමරියක් වීම",
                "ලෝක සංචාරය",
                "ඉහත සියල්ලම",
              ],
              correctAnswer: "ඉහත සියල්ලම",
            },
            {
              questionId: 5,
              question:
                "කතාවේදී සින්ඩරෙල්ලාගේ සුළු සහෝදරියන් ඇයට සලකන්නේ කෙසේද?",
              options: [
                "ඔවුන් ඇයට කරුණාවන්ත හා මෘදුයි",
                "ඔවුන් ඇයට නපුරු සහ රළු ය",
                "ඔවුන් ඇයට උපකාර සහ සහයෝගය දක්වයි",
                "ඔවුන් ඇය සමඟ විහිලු සහ සෙල්ලක්කාර",
              ],
              correctAnswer: "ඔවුන් ඇයට නපුරු සහ රළු ය",
            },
          ],
        },
      },
      {
        imageId: cinderellaStoryImages.cinderellaImage2,
        passageId: 2,
        passageContent:
          "එක් අව්ව සහිත දිනක, මහා බෝලයක් ගැන රජ මාලිගයෙන් ආරංචියක් ආවා. හැමෝටම ආරාධනා කළා, සින්ඩරෙල්ලාගේ සුළු සහෝදරියන්ට පවා. ඔවුන් ඉතා උද්යෝගිමත් වී, විසිතුරු ඇඳුම් තෝරාගෙන ඔවුන්ගේ නැටුම් පුරුදු පුහුණු කළා. නමුත් දුප්පත් සින්ඩරෙල්ලාට යන්න දුන්නේ නැහැ. , එය ඇයව ගොඩක් දුකට පත් කළා.",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "රාජ මාලිගාවේ මොකද වෙන්නේ?",
              options: [
                "මහා බෝලයක්",
                "විනෝද චාරිකාවක්",
                "පෙළපාලියක්",
                "උපන් දින සාදයක්",
              ],
              correctAnswer: "මහා බෝලයක්",
            },
            {
              questionId: 2,
              question: "මහා පන්දුවට ආරාධනා කළේ කවුද?",
              options: [
                "සින්ඩරෙල්ලා පමණි",
                "කුඩා සහෝදරියන් පමණයි",
                "හැමෝම",
                "කිසිවෙකු නැත",
              ],
              correctAnswer: "හැමෝම",
            },
            {
              questionId: 3,
              question: "බෝලයට නොයෑම ගැන සින්ඩරෙල්ලාට දැනුණේ කෙසේද?",
              options: ["සතුටුයි", "උද්දීපනයයි", "දුකයි", "කෝපයි"],
              correctAnswer: "දුකයි",
            },
          ],
          medium: [
            {
              questionId: 1,
              question: "සින්ඩරෙල්ලාගේ සුළු සහෝදරියන් කලබල වූයේ ඇයි?",
              options: [
                "ඔවුන් විනෝද චාරිකාවක් යමින් සිටියා",
                "ඔවුන් පන්දුවට යමින් සිටියා",
                "ඔවුන් පාසල් යමින් සිටියා",
                "ඔවුන් නිවාඩුවක් ගත කරමින් සිටියා",
              ],
              correctAnswer: "ඔවුන් පන්දුවට යමින් සිටියා",
            },
            {
              questionId: 2,
              question: "සින්ඩරෙල්ලාගේ සුළු සහෝදරියන් දින ගත කළේ කුමක්ද?",
              options: [
                "පොත් කියවනවා",
                "ක්‍රීඩා කිරීම",
                "විසිතුරු ඇඳුම් තෝරා ගැනීම",
                "ඉවුම් පිහුම්",
              ],
              correctAnswer: "විසිතුරු ඇඳුම් තෝරා ගැනීම",
            },
            {
              questionId: 3,
              question: "සින්ඩරෙල්ලාට පන්දුවට යාමට ඉඩ නොදුන්නේ ඇයි?",
              options: [
                "එයාට යන්න ඕන උනේ නෑ",
                "ඇයට වෙනත් සැලසුම් තිබුණා",
                "ඇගේ සුළු සහෝදරියන් ඇයට ආරාධනා කළේ නැහැ",
                "ඒක කතාවේ සඳහන් වෙලා නෑ",
              ],
              correctAnswer: "ඇගේ සුළු සහෝදරියන් ඇයට ආරාධනා කළේ නැහැ",
            },
          ],
        },
      },
      {
        imageId: cinderellaStoryImages.cinderellaImage3,
        passageId: 3,
        passageContent:
          "ඉන්පසු, ඉන්ද්‍රජාලික දෙයක් සිදු විය! දිලිසෙන ඇඳුමක්, දිදුලන යෂ්ටියක් සහ මැජික් දූවිලි ඉසින ලද ලස්සන සුරංගනාවියක් පෙනී සිටියාය. ඇය සින්ඩරෙල්ලාගේ සාමාන්‍ය ඇඳුම විශිෂ්ට ගවුමක් බවටත්, වට්ටක්කා මීයන් විසින් ඇද ගන්නා ලද විස්මිත කරත්තයක් බවටත් පත් කළාය. අශ්වයන් බවට!",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "සින්ඩරෙල්ලාට උදව් කිරීමට පෙනී සිටියේ කවුද?",
              options: ["සුරංගනාවක්", "රැජිනක්", "මායාකාරියක්", "කුමරියක්"],
              correctAnswer: "සුරංගනාවක්",
            },
            {
              questionId: 2,
              question: "සුරංගනාවියගේ අතේ තිබුණේ කුමක්ද?",
              options: ["පොතක්", "දිළිසෙන සැරයටියක්", "මලක්", "කඩුවක්"],
              correctAnswer: "දිළිසෙන සැරයටියක්",
            },
            {
              questionId: 3,
              question:
                "සුරංගනාවිය සින්ඩරෙල්ලාගේ සරල ඇඳුම් බවට පත් කළේ කුමක්ද?",
              options: [
                "විශිෂ්ට ගවුමක්",
                "වට්ටක්කා",
                "දිළිසෙන සැරයටියක්",
                "මලක්",
              ],
              correctAnswer: "විශිෂ්ට ගවුමක්",
            },
          ],
          medium: [
            {
              questionId: 1,
              question:
                "වට්ටක්කා කරත්තයක් බවට පත් කිරීමට සුරංගනාවිය භාවිතා කළේ කුමක්ද?",
              options: ["මැජික් දූවිලි", "දිළිසෙන සැරයටියක්", "පොතක්", "මල්"],
              correctAnswer: "මැජික් දූවිලි",
            },
            {
              questionId: 2,
              question: "මීයන් බවට පත් වූයේ කුමක්ද?",
              options: ["කරත්තය", "අශ්වයන්", "වට්ටක්කා", "ඇඳුම්"],
              correctAnswer: "අශ්වයන්",
            },
            {
              questionId: 3,
              question: "ඇයගේ ඇඳුම් වෙනස් වූ පසු සින්ඩරෙල්ලාට දැනුණේ කෙසේද?",
              options: ["දුකයි", "කෝපයි", "සතුටුයි", "කම්මැලියි"],
              correctAnswer: "සතුටුයි",
            },
          ],
        },
      },
      {
        imageId: cinderellaStoryImages.cinderellaImage4,
        passageId: 4,
        passageContent:
          "සින්ඩරෙල්ලා රාජකීය බෝලයට පැමිණ කඩවසම් කුමාරයා හමු විය. ඔවුන් දිලිසෙන තරු යට නටමින් කැරකෙමින් සිටියහ. නමුත් සුරංගනාවිය ඇයට අනතුරු ඇඟවූයේ මැජික් මධ්‍යම රාත්‍රිය දක්වා පමණක් පවතිනු ඇති බවයි. මාලිගාවේ විශාල ඔරලෝසුව 'ඩිං-ඩොං' සාදන විට. දොළොස් වතාවක් හඬ නඟා, සින්ඩරෙල්ලාට කඩිමුඩියේ පිටව යාමට සිදු විය. ඇය වේගයෙන් දිව යන විට වීදුරු සෙරෙප්පුවක් ඉතිරි කළාය.",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "Cinderella පන්දුවේදී හමුවූයේ කවුද?",
              options: ["කුමාරයා", "සුරංගනා", "මායාකාරිය", "පූසා"],
              correctAnswer: "කුමාරයා",
            },
            {
              questionId: 2,
              question: "සින්ඩරෙල්ලා ඉතිරි කළේ කුමක්ද?",
              options: ["සෙරෙප්පු", "පොත", "වට්ටක්කා", "ඇඳුම"],
              correctAnswer: "සෙරෙප්පු",
            },
            {
              questionId: 3,
              question: "ඇයි සින්ඩරෙල්ලාට හදිස්සියේ යන්න වුණේ?",
              options: ["මැජික් අවසානය", "බඩගිනි", "නිදිමත", "කම්මැලි"],
              correctAnswer: "මැජික් අවසානය",
            },
          ],
          medium: [
            {
              questionId: 1,
              question: "සුරංගනාවිය සින්ඩරෙල්ලාට අනතුරු ඇඟවූයේ කුමක් ගැනද?",
              options: ["මධ්යම රාත්රිය", "නැටුම්", "කුමාරයා", "වට්ටක්කා"],
              correctAnswer: "මධ්යම රාත්රිය",
            },
            {
              questionId: 2,
              question: "ඔරලෝසුව නිකුත් කළ ශබ්දය කුමක්ද?",
              options: ["ඩිං-ඩොං", "ටික්-ටොක්", "චිර්ප්", "මියව්"],
              correctAnswer: "ඩිං-ඩොං",
            },
            {
              questionId: 3,
              question: "සින්ඩරෙල්ලාට පිටවීමට සිදු වූයේ කීයටද?",
              options: ["මධ්‍යම රාත්‍රිය", "දහවල්", "උදෑසන", "සන්ධ්‍යාව"],
              correctAnswer: "මධ්‍යම රාත්‍රිය",
            },
          ],
        },
      },
      {
        imageId: cinderellaStoryImages.cinderellaImage5,
        passageId: 5,
        passageContent:
          "කුමාරයා වීදුරු සෙරෙප්පුව සොයාගෙන එහි හිමිකරු සොයා ගියේය. සින්ඩරෙල්ලා එය උත්සාහ කළ විට එය හොඳින් ගැලපේ! ඇය අතිශයින් සතුටට පත් විය. කුමාරයා තමා සොයමින් සිටියේ ඇය බව දැන සිටියේය. ඔවුන් විවාහ වූයේ උත්කර්ෂවත් උත්සවයකින් සහ සින්ඩරෙල්ලාගේ සුළු මව සහ සුළු සහෝදරියන් බියට පත් වූහ.",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "කවුද වීදුරු සෙරෙප්පුව හොයාගත්තේ?",
              options: ["කුමාරයා", "සින්ඩරෙල්ලා", "සුරංගනා", "මවුස්"],
              correctAnswer: "කුමාරයා",
            },
            {
              questionId: 2,
              question:
                "සින්ඩරෙල්ලා වීදුරු සෙරෙප්පුව මත උත්සාහ කළ විට සිදු වූයේ කුමක්ද?",
              options: [
                "එය හොඳින් ගැලපේ",
                "කැඩුණා",
                "එය ඉතා විශාල විය",
                "එය අතුරුදහන් විය",
              ],
              correctAnswer: "එය හොඳින් ගැලපේ",
            },
            {
              questionId: 3,
              question:
                "වීදුරු සෙරෙප්පුව හොඳින් ගැළපෙන විට සින්ඩරෙල්ලාට දැනුණේ කෙසේද?",
              options: ["අතිශයින්", "කෝප", "දුක", "ව්‍යාකූල"],
              correctAnswer: "අතිශයින්",
            },
            {
              questionId: 4,
              question: "මහා උත්සවයකදී සින්ඩරෙල්ලා විවාහ වූයේ කාවද?",
              options: ["කුමාරයා", "සුරංගනා", "මවුස්", "කුඩම්මා"],
              correctAnswer: "කුමාරයා",
            },
            {
              questionId: 5,
              question: "සින්ඩරෙල්ලා විවාහ වූ විට ඇයට දැනුණේ කෙසේද?",
              options: ["අතිශයින්", "කෝප", "දුක", "ව්‍යාකූල"],
              correctAnswer: "අතිශයින්",
            },
          ],
          medium: [
            {
              questionId: 1,
              question:
                "වීදුරු සෙරෙප්පුවේ හිමිකරු සින්ඩරෙල්ලා බව දැනගත් කුමාරයා කුමක් කළේද?",
              options: [
                "විවාහ වුණා",
                "ආපහු මාලිගාවට ගියා",
                "සාදයකට ගියා",
                "තවත් සපත්තු මිලදී ගත්තා",
              ],
              correctAnswer: "විවාහ වුණා",
            },
            {
              questionId: 2,
              question:
                "සින්ඩරෙල්ලා විවාහ වූ විට ඇගේ සුළු මව සහ සුළු සහෝදරියන්ගේ ප්‍රතිචාරය කුමක්ද?",
              options: ["සතුටු", "ඊර්ෂ්‍යාව", "දුක", "උද්දීපනය"],
              correctAnswer: "ඊර්ෂ්‍යාව",
            },
            {
              questionId: 3,
              question:
                "විවාහයෙන් පසු සින්ඩරෙල්ලා සහ කුමාරයා ජීවත් වූයේ කෙසේද?",
              options: [
                "සදහටම සතුටින්",
                "අසතුටුදායකයි",
                "වට්ටක්කා ගෙඩියක",
                "කුළුණක",
              ],
              correctAnswer: "සදහටම සතුටින්",
            },
          ],
        },
      },
    ],

    RapunzelStoryContent: [
      {
        imageId: RapunzelStoryImages.rapunzelImage1,
        passageId: 1,
        passageContent:
          "එක් කලෙක, වනාන්තරයේ ගැඹුරින් සැඟවී ඇති උස් කුළුණක, රපුන්සෙල් නම් රූමත් ගැහැණු ළමයෙකු ජීවත් විය, ඔබට සිතාගත නොහැකි දීප්තිමත්, දිගු කෙස් කළඹක් ඇයට හිමි විය, නමුත් නපුරු මායාකාරියක් නිසා ඇය කිසි විටෙකත් කුළුණෙන් පිටතට පය තබා නොතිබුණි. ඇයව එහි සිරකර තැබුවා.",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "රපුන්සල්ගේ කුළුණේ සිටි මිතුරා කවුද?",
              options: ["මායාකාරිය", "කුමාරයා", "මකරා", "සුරංගනා"],
              correctAnswer: "මායාකාරිය",
            },
            {
              questionId: 2,
              question: "රපුන්සෙල් ඇගේ මුළු ජීවිත කාලයම ජීවත් වූයේ කොහේද?",
              options: ["කුළුණ", "කාසල්", "ගම", "වනාන්තර"],
              correctAnswer: "කුළුණ",
            },
            {
              questionId: 3,
              question: "ඇයි රපුන්සල්ට කුළුණෙන් පිටවෙන්න බැරි වුණේ?",
              options: ["නපුරු මායාකාරිය", "මැජික්", "කුමාරයා", "නැටුම්"],
              correctAnswer: "නපුරු මායාකාරිය",
            },
            {
              questionId: 4,
              question: "Rapunzel ගේ කොණ්ඩයේ විශේෂත්වය කුමක්ද?",
              options: ["දිගු", "කෙටි", "රතු", "කැරලි"],
              correctAnswer: "දිගු",
            },
            {
              questionId: 5,
              question: "රපුන්සල් කවදාවත් එලියට ගිහින් තියෙනවද?",
              options: ["නෑ", "ඔව්", "සමහර වෙලාවට", "සැමවිටම"],
              correctAnswer: "නෑ",
            },
          ],
          medium: [
            {
              questionId: 1,
              question: "Rapunzel කුළුණ තුළ කිරීමට කැමති වූයේ කුමක්ද?",
              options: ["කියවන්න", "සෙල්ලම් කරන්න", "නිදාගන්න", "අඬන්න"],
              correctAnswer: "කියවන්න",
            },
            {
              questionId: 2,
              question: "මායාකාරිය රපුන්සෙල්ගේ කුළුණට ළඟා වූයේ කෙසේද?",
              options: ["නැගීම", "පියාඹීම", "මැජික්", "ඉණිමඟ"],
              correctAnswer: "නැගීම",
            },
            {
              questionId: 3,
              question: "Rapunzel කුළුණේ රැඳී සිටියේ ඇයි?",
              options: ["නපුරු මායාකාරිය", "කුමාරයා", "බිය", "විනෝදය"],
              correctAnswer: "නපුරු මායාකාරිය",
            },
            {
              questionId: 4,
              question: "Rapunzel ගේ කොණ්ඩය විස්තර කරන්න.",
              options: ["දිගු", "කෙටි", "රතු", "කැරලි"],
              correctAnswer: "දිගු",
            },
            {
              questionId: 5,
              question: "රපුන්සල් කවදාවත් සෙල්ලම් කරන්න එලියට ගිහින් තියෙනවද?",
              options: ["නෑ", "ඔව්", "සමහර වෙලාවට", "සැමවිටම"],
              correctAnswer: "නෑ",
            },
          ],
          hard: [],
        },
      },
      {
        imageId: RapunzelStoryImages.rapunzelImage2,
        passageId: 2,
        passageContent:
          "රපුන්සෙල්ගේ කුළුණේ සිටි එකම සමාගම ඇයව ඇති දැඩි කළ මායාකාරියයි. මායාකාරිය රපුන්සෙල්ගේ දිගු කෙස් මතට නැඟී කුළුණට ළඟා වනු ඇත. රපුන්සල් කාලය ගත කිරීම සඳහා පොත් කියවමින් සහ ගීත ගායනා කරමින් ඇගේ දින ගත කළාය.",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "කවුද කුළුණේ රපුන්සෙල්ව බලන්න ආවේ?",
              options: ["මායාකාරිය", "කුමාරයා", "මකරා", "සුරංගනා"],
              correctAnswer: "මායාකාරිය",
            },
            {
              questionId: 2,
              question: "මායාකාරිය රපුන්සෙල්ගේ කුළුණට ළඟා වූයේ කෙසේද?",
              options: ["නැගීම", "පියාඹීම", "මැජික්", "ඉණිමඟ"],
              correctAnswer: "නැගීම",
            },
            {
              questionId: 3,
              question: "රපුන්සල් කුළුණේ මොනවද කළේ?",
              options: ["කියවන්න", "සෙල්ලම් කරන්න", "නිදාගන්න", "අඬන්න"],
              correctAnswer: "කියවන්න",
            },
            {
              questionId: 4,
              question: "රපුන්සල් කාලය ගත කළේ කෙසේද?",
              options: ["කියවීම", "සෙල්ලම් කිරීම", "නිදාගැනීම", "හැඬීම"],
              correctAnswer: "කියවීම",
            },
            {
              questionId: 5,
              question: "රපුන්සෙල්ගේ කොණ්ඩයේ විශේෂත්වය කුමක්ද?",
              options: ["දිගු", "කෙටි", "රතු", "කැරලි"],
              correctAnswer: "දිගු",
            },
          ],
          medium: [
            {
              questionId: 1,
              question: "ඇයි රපුන්සල් පොත් කියවමින් දවස් ගත කළේ?",
              options: ["ආදරය", "කම්මැලිකම", "මැජික්", "බිය"],
              correctAnswer: "කම්මැලිකම",
            },
            {
              questionId: 2,
              question: "මායාකාරිය කුළුණට ළඟා වූයේ කෙසේද?",
              options: ["මැජික්", "නැගීම", "පියාඹීම", "ඉණිමඟ"],
              correctAnswer: "නැගීම",
            },
            {
              questionId: 3,
              question: "රපුන්සල් මොනවද කරන්න කැමති?",
              options: ["කියවන්න", "සෙල්ලම් කරන්න", "නිදාගන්න", "අඬන්න"],
              correctAnswer: "කියවන්න",
            },
            {
              questionId: 4,
              question: "කාලය ගත කිරීමට රපුන්සල් කළේ කුමක්ද?",
              options: ["පොත් කියවනවා", "ගීත ගායනා", "ක්‍රීඩා කිරීම", "නිදි"],
              correctAnswer: "පොත් කියවනවා",
            },
            {
              questionId: 5,
              question: "රපුන්සෙල්ගේ කොණ්ඩය විස්තර කරන්න.",
              options: ["දිගු", "කෙටි", "රතු", "කැරලි"],
              correctAnswer: "දිගු",
            },
          ],
          hard: [],
        },
      },
      {
        imageId: RapunzelStoryImages.rapunzelImage3,
        passageId: 3,
        passageContent:
          "දවසක්, නිර්භීත කුමාරයෙකුට රපුන්සෙල් වනාන්තරය හරහා යද්දී ඔහුගේ ලස්සන ගායනය ඇසුණි. ඔහු කුළුණ සොයා ගත් නමුත් රපුන්සෙල් වෙත ළඟා වන්නේ කෙසේදැයි නොදැන සිටියේය. ඔහු රහස ඉගෙන ගත හැකිදැයි බලා සිටීමට තීරණය කළේය.",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "වනාන්තරයේ රපුන්සෙල්ගේ ගායනය ඇසුවේ කවුද?",
              options: ["කුමාරයා", "මායාකාරිය", "මකරා", "සුරංගනා"],
              correctAnswer: "කුමාරයා",
            },
            {
              questionId: 2,
              question: "කුමාරයා රපුන්සෙල්ගේ කුළුණ සොයාගත්තේ කොහෙන්ද?",
              options: ["වනාන්තරය", "කාසල්", "ගම", "ගඟ"],
              correctAnswer: "වනාන්තරය",
            },
            {
              questionId: 3,
              question: "කුමාරයා කුමක් කිරීමට තීරණය කළාද?",
              options: ["ඉන්න", "පිටවෙන්න", "නගින්න", "ගායනා කරන්න"],
              correctAnswer: "ඉන්න",
            },
            {
              questionId: 4,
              question: "කුමාරයා ඉගෙන ගන්න බලාපොරොත්තු වුණේ මොනවද?",
              options: ["රහස", "ගීතය", "මැජික්", "නැටුම්"],
              correctAnswer: "රහස",
            },
            {
              questionId: 5,
              question: "කුමාරයා කැලේ නැවතුනේ ඇයි?",
              options: [
                "ගායනය අසන්න",
                "මිතුරන් හමුවන්න",
                "ආහාර සොයන්න",
                "නිදාගන්න",
              ],
              correctAnswer: "ගායනය අසන්න",
            },
          ],
          medium: [
            {
              questionId: 1,
              question: "රපුන්සල්ගේ කුළුණ වනාන්තරයේ තිබී සොයාගත්තේ කවුද?",
              options: ["කුමාරයා", "මායාකාරිය", "මකරා", "සුරංගනා"],
              correctAnswer: "කුමාරයා",
            },
            {
              questionId: 2,
              question: "කුමාරයා බලා සිටීමට තීරණය කළේ කොහේද?",
              options: ["වනාන්තරය", "කාසල්", "ගම", "ගඟ"],
              correctAnswer: "වනාන්තරය",
            },
            {
              questionId: 3,
              question:
                "කුමාරයා රපුන්සෙල් ගැන ඉගෙන ගන්න බලාපොරොත්තු වුණේ මොකක්ද?",
              options: ["රහස", "ගීතය", "මැජික්", "නැටුම්"],
              correctAnswer: "රහස",
            },
            {
              questionId: 4,
              question: "කුමාරයා කැලේ නැවතුනේ ඇයි?",
              options: [
                "ගායනය අසන්න",
                "මිතුරන් හමුවන්න",
                "ආහාර සොයන්න",
                "නිදාගන්න",
              ],
              correctAnswer: "ගායනය අසන්න",
            },
            {
              questionId: 5,
              question: "රපුන්සල් කුළුණේ මොනවද කළේ?",
              options: ["කියවන්න", "සෙල්ලම් කරන්න", "ගායනය", "නටන්න"],
              correctAnswer: "ගායනය",
            },
          ],
          hard: [],
        },
      },
      {
        imageId: RapunzelStoryImages.rapunzelImage4,
        passageId: 4,
        passageContent:
          "කුමාරයා ඉක්මනින් මායාකාරියගේ රහස සොයා ගත්තේය. ඔහු රපුන්සෙල්ට කතා කළේය, ඇය ඇගේ දිගු රන්වන් හිසකෙස් පහත් කළාය. කුමාරයා නැග්ගා, ඔවුන් ආදරයෙන් බැඳුණා. නමුත් මායාකාරිය එය දැනගත් අතර ඉතා කෝපයට පත් විය.",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "මායාකාරියගේ රහස සොයාගත්තේ කවුද?",
              options: ["කුමාරයා", "මායාකාරිය", "මකරා", "සුරංගනා"],
              correctAnswer: "කුමාරයා",
            },
            {
              questionId: 2,
              question: "කුමාරයා රපුන්සෙල්ට කතා කළේ කුමක්ද?",
              options: ["මැජික් වචන", "ඇගේ නම", "උදව්", "අකුරු කරන්න"],
              correctAnswer: "ඇගේ නම",
            },
            {
              questionId: 3,
              question: "රපුන්සල් කුමරුට ඇය වෙත ළඟා වීමට උදව් කළේ කෙසේද?",
              options: [
                "පහළ හිසකෙස්",
                "ඔහු වෙත පියාසර කළා",
                "භාවිතා කළ මැජික්",
                "පහළට නැග්ගා",
              ],
              correctAnswer: "පහළ හිසකෙස්",
            },
            {
              questionId: 4,
              question: "කුමාරයා සහ රපුන්සෙල් මුණගැසුණු විට සිදු වූයේ කුමක්ද?",
              options: [
                "ආදරය කළා",
                "රණ්ඩු වුණා",
                "පැනලා ගියා",
                "ගීත ගායනා කළා",
              ],
              correctAnswer: "ආදරය කළා",
            },
            {
              questionId: 5,
              question: "ඇයි මායාකාරිය තරහ වුනේ?",
              options: [
                "කොණ්ඩය නැති වුනා",
                "හඳුනා ගත්තා",
                "කුමාරයාව දැක්කා",
                "නටන්න ඕන වුනා",
              ],
              correctAnswer: "සොයාගත්තා",
            },
          ],
          medium: [
            {
              questionId: 1,
              question: "මායාකාරියගේ රහස සොයාගත්තේ කවුද?",
              options: ["මායාකාරිය", "කුමාරයා", "මකරා", "සුරංගනා"],
              correctAnswer: "කුමාරයා",
            },
            {
              questionId: 2,
              question: "රපුන්සල් කුමරුට ඇය වෙත ළඟා වීමට උදව් කළේ කෙසේද?",
              options: [
                "පහළ හිසකෙස්",
                "ඔහු වෙත පියාසර කළා",
                "භාවිතා කළ මැජික්",
                "පහළට නැග්ගා",
              ],
              correctAnswer: "පහළ හිසකෙස්",
            },
            {
              questionId: 3,
              question: "කුමාරයා සහ රපුන්සෙල් මුණගැසුණු විට සිදු වූයේ කුමක්ද?",
              options: [
                "ආදරය කළා",
                "රණ්ඩු වුණා",
                "පැනලා ගියා",
                "ගීත ගායනා කළා",
              ],
              correctAnswer: "ආදරය කළා",
            },
            {
              questionId: 4,
              question: "ඇයි මායාකාරියට තරහ ගියේ?",
              options: [
                "කොණ්ඩය නැති වුනා",
                "හඳුනා ගත්තා",
                "කුමාරයාව දැක්කා",
                "නටන්න ඕන වුනා",
              ],
              correctAnswer: "හඳුනා ගත්තා",
            },
            {
              questionId: 5,
              question: "රපුන්සෙල් කුමරුට උදව් කිරීමට කළේ කුමක්ද?",
              options: [
                "ගීත ගායනා කළා",
                "පහළ හිසකෙස්",
                "භාවිතා කළ මැජික්",
                "ඔහු වෙත පියාසර කළා",
              ],
              correctAnswer: "පහළ හිසකෙස්",
            },
          ],
          hard: [],
        },
      },
      {
        imageId: RapunzelStoryImages.rapunzelImage5,
        passageId: 5,
        passageContent:
          "මායාකාරයා මන්ත්‍රයක් කරලා රපුන්සෙල්ව ඈතට යැව්වා. කුමාරයාගේ හිත රිදුණා. ඔහු රපුන්සල් සොයා ගොස් අවසානයේ ඇයව සොයා ගත්තා. ඔවුන්ගේ ආදරය කොතරම් ශක්තිමත්ද යත් එය මායාකාරියගේ මන්ත්‍රය බිඳ දමා ඔවුන් සතුටින් සදහටම ජීවත් විය. එතැනින් අවසන් වේ. Rapunzel පිළිබඳ අපගේ ඉන්ද්‍රජාලික කතාව!",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "රපුන්සෙල්ට මන්ත්‍රයක් කළේ කවුද?",
              options: ["මායාකාරිය", "කුමාරයා", "මකරා", "සුරංගනා"],
              correctAnswer: "මායාකාරිය",
            },
            {
              questionId: 2,
              question: "කුමාරයා රපුන්සෙල්ව සෙව්වේ ඇයි?",
              options: ["ආදරය", "මැජික්", "බිය", "ත්රාසජනක"],
              correctAnswer: "Love",
            },
            {
              questionId: 3,
              question: "කුමාරයා රපුන්සෙල්ව හොයාගත්තම මොකද වුනේ?",
              options: ["ආදරය කළා", "රණ්ඩු වුණා", "පලා ගියා", "ඇඬුනා"],
              correctAnswer: "ආදරය කළා",
            },
            {
              questionId: 4,
              question: "ඔවුන්ගේ ආදරය මායාකාරියගේ මායාවට කළේ කුමක්ද?",
              options: [
                "කැඩුණා",
                "එය ශක්තිමත් කළා",
                "වෙනස් කළා",
                "කිසිවක් නැත",
              ],
              correctAnswer: "කැඩුණා",
            },
            {
              questionId: 5,
              question: "රපුන්සල් සහ කුමාරයා සතුටින් ජීවත් වූයේ කෙසේද?",
              options: ["සෑමදාම", "කනගාටුදායකයි", "තනියම", "කුළුණේ"],
              correctAnswer: "සෑමදාම",
            },
          ],
          medium: [
            {
              questionId: 1,
              question: "රපුන්සෙල්ට මන්ත්‍රයක් කළේ කවුද?",
              options: ["මායාකාරිය", "කුමාරයා", "මකරා", "සුරංගනා"],
              correctAnswer: "මායාකාරිය",
            },
            {
              questionId: 2,
              question: "කුමාරයා රපුන්සෙල්ව සෙව්වේ ඇයි?",
              options: ["ආදරය", "මැජික්", "බිය", "ත්රාසජනක"],
              correctAnswer: "ආදරය",
            },
            {
              questionId: 3,
              question: "කුමාරයා රපුන්සෙල්ව හොයාගත්තම මොකද වුණේ?",
              options: ["ආදරය කළා", "රණ්ඩු වුණා", "පලා ගියා", "ඇඬුවා"],
              correctAnswer: "ආදරය කළා",
            },
            {
              questionId: 4,
              question: "ඔවුන්ගේ ආදරය මායාකාරියගේ මායාවට කළේ කුමක්ද?",
              options: [
                "කැඩුණා",
                "එය ශක්තිමත් කළා",
                "වෙනස් කළා",
                "කිසිවක් නැත",
              ],
              correctAnswer: "කැඩුණා",
            },
            {
              questionId: 5,
              question: "රපුන්සල් සහ කුමාරයා සතුටින් ජීවත් වූයේ කෙසේද?",
              options: ["කවදාවත් පසු", "කනගාටුදායක", "තනිව", "කුළුණේ"],
              correctAnswer: "කවදාවත් පසු",
            },
          ],
          hard: [],
        },
      },
    ],
    HerculesStoryContent: [
      {
        imageId: HerculesStoryImages.herculesImage1,
        passageId: 1,
        passageContent:
          "Long ago, in ancient Greece, there was a baby named Hercules. He was no ordinary baby because he was the son of Zeus, the king of the gods. But an evil sorceress tricked him and made him forget his true identity.",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "Who is the story about?",
              options: ["Hercules", "Zeus", "A sorceress", "A king"],
              correctAnswer: "Hercules",
            },
            {
              questionId: 2,
              question: "Who was Hercules' father?",
              options: ["A king", "Zeus", "A sorceress", "A baby"],
              correctAnswer: "Zeus",
            },
            {
              questionId: 3,
              question: "Was Hercules a normal baby?",
              options: ["Yes", "No"],
              correctAnswer: "No",
            },
            {
              questionId: 4,
              question: "Did Hercules know he was the son of Zeus?",
              options: ["Yes", "No"],
              correctAnswer: "No",
            },
            {
              questionId: 5,
              question: "Who tricked Hercules?",
              options: ["A king", "Zeus", "A sorceress", "A baby"],
              correctAnswer: "A sorceress",
            },
            {
              questionId: 6,
              question: "Where did Hercules live?",
              options: [
                "In ancient Greece",
                "In Rome",
                "In Egypt",
                "In Persia",
              ],
              correctAnswer: "In ancient Greece",
            },
            {
              questionId: 7,
              question: "Was Zeus a god or a human?",
              options: ["God", "Human", "Both", "None"],
              correctAnswer: "God",
            },
          ],
          medium: [
            {
              questionId: 1,
              question: "Why was Hercules not an ordinary baby?",
              options: [
                "Because he was a king",
                "Because he was the son of Zeus, the king of the gods",
                "Because he was a sorceress",
                "Because he was a baby",
              ],
              correctAnswer:
                "Because he was the son of Zeus, the king of the gods",
            },
            {
              questionId: 2,
              question: "What did the evil sorceress do to Hercules?",
              options: [
                "She made him a king",
                "She made him forget his true identity",
                "She made him a sorceress",
                "She made him a baby",
              ],
              correctAnswer: "She made him forget his true identity",
            },
            {
              questionId: 3,
              question: "How did Hercules feel as a baby?",
              options: [
                "He felt like a king",
                "He felt like Zeus",
                "He felt different because he didn't know his true identity",
                "He felt like a sorceress",
              ],
              correctAnswer:
                "He felt different because he didn't know his true identity",
            },
            {
              questionId: 4,
              question: "What was special about Hercules' father?",
              options: [
                "He was a king",
                "He was the king of the gods",
                "He was a sorceress",
                "He was a baby",
              ],
              correctAnswer: "He was the king of the gods",
            },
            {
              questionId: 5,
              question: "Why didn't Hercules remember he was the son of Zeus?",
              options: [
                "Because he was a king",
                "Because an evil sorceress tricked him",
                "Because he was a sorceress",
                "Because he was a baby",
              ],
              correctAnswer: "Because an evil sorceress tricked him",
            },
          ],
          hard: [],
        },
      },
      {
        imageId: HerculesStoryImages.herculesImage2,
        passageId: 2,
        passageContent:
          "As Hercules grew up, he became incredibly strong, but he didn't know why. He felt different from others in his village. So, he set out on a quest to discover who he really was and to prove himself a true hero.",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "Did Hercules feel different from others?",
              options: ["Yes", "No"],
              correctAnswer: "Yes",
            },
            {
              questionId: 2,
              question: "What did Hercules decide to do?",
              options: [
                "Go on a quest",
                "Stay in his village",
                "Become weak",
                "Forget about everything",
              ],
              correctAnswer: "Go on a quest",
            },
            {
              questionId: 3,
              question: "What was Hercules trying to find out on his quest?",
              options: [
                "Who he really was and how to be a true hero",
                "How to become weak",
                "How to stay in his village",
                "How to forget about everything",
              ],
              correctAnswer: "Who he really was and how to be a true hero",
            },
            {
              questionId: 4,
              question: "Was Hercules weak or strong?",
              options: ["Weak", "Strong", "Neither", "Both"],
              correctAnswer: "Strong",
            },
            {
              questionId: 5,
              question: "Did Hercules stay in his village?",
              options: ["Yes", "No"],
              correctAnswer: "No",
            },
          ],
          medium: [
            {
              questionId: 1,
              question:
                "Why did Hercules feel different from others in his village?",
              options: [
                "Because he was incredibly strong and didn't know why",
                "Because he wanted to go on a quest",
                "Because he wanted to stay in his village",
                "Because he wanted to become weak",
              ],
              correctAnswer:
                "Because he was incredibly strong and didn't know why",
            },
            {
              questionId: 2,
              question: "What was the purpose of Hercules' quest?",
              options: [
                "To discover who he really was and to prove himself a true hero",
                "To become weak",
                "To stay in his village",
                "To forget about everything",
              ],
              correctAnswer:
                "To discover who he really was and to prove himself a true hero",
            },
            {
              questionId: 3,
              question:
                "How did Hercules feel compared to others in his village?",
              options: [
                "He felt different",
                "He felt the same",
                "He felt superior",
                "He felt inferior",
              ],
              correctAnswer: "He felt different",
            },
            {
              questionId: 4,
              question: "What was Hercules hoping to prove on his quest?",
              options: [
                "That he was weak",
                "That he was a true hero",
                "That he could stay in his village",
                "That he could forget about everything",
              ],
              correctAnswer: "That he was a true hero",
            },
          ],
          hard: [],
        },
      },
      {
        imageId: HerculesStoryImages.herculesImage3,
        passageId: 3,
        passageContent:
          "Hercules faced many challenges and performed incredible feats, like defeating fierce monsters and solving impossible puzzles. Along the way, he made friends and learned important lessons about bravery and kindness.",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "Did Hercules face challenges on his quest?",
              options: ["Yes", "No"],
              correctAnswer: "Yes",
            },
            {
              questionId: 2,
              question: "Did Hercules make friends on his journey?",
              options: ["Yes", "No"],
              correctAnswer: "Yes",
            },
            {
              questionId: 3,
              question: "Did Hercules defeat monsters on his quest?",
              options: ["Yes", "No"],
              correctAnswer: "Yes",
            },
            {
              questionId: 4,
              question: "Did Hercules learn anything on his journey?",
              options: ["Yes", "No"],
              correctAnswer: "Yes",
            },
            {
              questionId: 5,
              question: "Did Hercules solve puzzles on his quest?",
              options: ["Yes", "No"],
              correctAnswer: "Yes",
            },
          ],
          medium: [
            {
              questionId: 1,
              question: "What kind of feats did Hercules perform on his quest?",
              options: [
                "He defeated fierce monsters and solved impossible puzzles",
                "He made friends",
                "He learned about bravery and kindness",
                "All of the above",
              ],
              correctAnswer:
                "He defeated fierce monsters and solved impossible puzzles",
            },
            {
              questionId: 2,
              question: "What did Hercules learn on his journey?",
              options: [
                "Important lessons about bravery and kindness",
                "How to defeat monsters",
                "How to solve puzzles",
                "How to make friends",
              ],
              correctAnswer: "Important lessons about bravery and kindness",
            },
            {
              questionId: 3,
              question: "What kind of monsters did Hercules defeat?",
              options: [
                "Fierce monsters",
                "Friendly monsters",
                "Imaginary monsters",
                "Tiny monsters",
              ],
              correctAnswer: "Fierce monsters",
            },
            {
              questionId: 4,
              question:
                "What important lessons did Hercules learn on his journey?",
              options: [
                "About bravery and kindness",
                "About fear and rudeness",
                "About weakness and strength",
                "About ignorance and knowledge",
              ],
              correctAnswer: "About bravery and kindness",
            },
          ],
          hard: [],
        },
      },
      {
        imageId: HerculesStoryImages.herculesImage4,
        passageId: 4,
        passageContent:
          "Hercules eventually discovered his divine heritage and realized he could become a true hero by using his incredible strength for good. He defeated the evil sorceress who had tricked him and became a hero in the eyes of all of Greece.",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "Did Hercules find out who he really was?",
              options: ["Yes", "No"],
              correctAnswer: "Yes",
            },
            {
              questionId: 2,
              question: "Did Hercules become a hero?",
              options: ["Yes", "No"],
              correctAnswer: "Yes",
            },
            {
              questionId: 3,
              question: "Did Hercules use his strength for good or bad?",
              options: ["Good", "Bad", "Both", "Neither"],
              correctAnswer: "Good",
            },
            {
              questionId: 4,
              question: "Who did Hercules defeat at the end of the story?",
              options: [
                "The evil sorceress",
                "His friends",
                "His family",
                "Himself",
              ],
              correctAnswer: "The evil sorceress",
            },
            {
              questionId: 5,
              question:
                "Did Hercules become a hero in the eyes of all of Greece?",
              options: ["Yes", "No"],
              correctAnswer: "Yes",
            },
          ],
          medium: [
            {
              questionId: 1,
              question: "How did Hercules become a true hero?",
              options: [
                "By using his incredible strength for good",
                "By defeating the evil sorceress",
                "By discovering his divine heritage",
                "All of the above",
              ],
              correctAnswer: "By using his incredible strength for good",
            },
            {
              questionId: 2,
              question:
                "What happened to the evil sorceress who had tricked him?",
              options: [
                "Hercules defeated her",
                "She became a hero",
                "She discovered her divine heritage",
                "She used her strength for good",
              ],
              correctAnswer: "Hercules defeated her",
            },
            {
              questionId: 3,
              question: "How did Hercules use his incredible strength?",
              options: [
                "For good",
                "For bad",
                "For both good and bad",
                "For neither good nor bad",
              ],
              correctAnswer: "For good",
            },
            {
              questionId: 4,
              question: "Who had tricked Hercules when he was a baby?",
              options: [
                "The evil sorceress",
                "His friends",
                "His family",
                "Himself",
              ],
              correctAnswer: "The evil sorceress",
            },
          ],
          hard: [],
        },
      },
      {
        imageId: HerculesStoryImages.herculesImage5,
        passageId: 5,
        passageContent:
          "Hercules's courage, kindness, and strength made him a legendary hero, and he rejoined his family on Mount Olympus as a true god. He learned that it's not just strength that makes a hero, but the goodness in their heart. And that's the end of the amazing story of Hercules!",
        questionBank: {
          easy: [
            {
              questionId: 1,
              question: "Where did Hercules go at the end of the story?",
              options: [
                "Mount Olympus",
                "His village",
                "On another quest",
                "Nowhere",
              ],
              correctAnswer: "Mount Olympus",
            },
            {
              questionId: 2,
              question: "Was Hercules a god at the end of the story?",
              options: ["Yes", "No"],
              correctAnswer: "Yes",
            },
            {
              questionId: 3,
              question: "Was Hercules a hero at the end of the story?",
              options: ["Yes", "No"],
              correctAnswer: "Yes",
            },
            {
              questionId: 4,
              question: "Where is Mount Olympus?",
              options: [
                "It's where the gods live",
                "It's in his village",
                "It's on another quest",
                "It's nowhere",
              ],
              correctAnswer: "It's where the gods live",
            },
            {
              questionId: 5,
              question: "Did Hercules learn anything at the end of the story?",
              options: ["Yes", "No"],
              correctAnswer: "Yes",
            },
          ],
          medium: [
            {
              questionId: 1,
              question: "What qualities made Hercules a legendary hero?",
              options: [
                "His courage, kindness, and strength",
                "His weakness",
                "His fear",
                "His rudeness",
              ],
              correctAnswer: "His courage, kindness, and strength",
            },
            {
              questionId: 2,
              question: "What did Hercules learn about being a hero?",
              options: [
                "That it's not just strength that makes a hero, but the goodness in their heart",
                "That only strength makes a hero",
                "That heroes are always rude",
                "That heroes are always scared",
              ],
              correctAnswer:
                "That it's not just strength that makes a hero, but the goodness in their heart",
            },
            {
              questionId: 3,
              question: "What made Hercules a legendary hero?",
              options: [
                "His courage, kindness, and strength",
                "His weakness",
                "His fear",
                "His rudeness",
              ],
              correctAnswer: "His courage, kindness, and strength",
            },
            {
              questionId: 4,
              question:
                "What does it take to be a hero, according to Hercules' story?",
              options: [
                "Not just strength, but also the goodness in one's heart",
                "Only strength",
                "Heroes are always rude",
                "Heroes are always scared",
              ],
              correctAnswer:
                "Not just strength, but also the goodness in one's heart",
            },
          ],
          hard: [],
        },
      },
    ],
  };
};
