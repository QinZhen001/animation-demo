import "./index.html"
import "./index.less"

require("expose-loader?$!../../common/js/jquery-3.3.1.min.js");


$(function () {
  let $oDiv = $('#play-images')
  let $oBtnPrev = $oDiv.find('.prev')
  let $oBtnNext = $oDiv.find('.next')

  let $oDivSmall = $oDiv.find('.small-pic')
  let $oUlSmall = $oDivSmall.find('ul')
  let $aLiSmall = $oDivSmall.find('li');


  let $oDivBig = $oDiv.find('.big-pic')
  let $aLiBig = $oDivBig.find('li');


  $oUlSmall.css('width', $aLiSmall.length * $aLiSmall[0].offsetWidth)

  let now = 0


  $oBtnPrev.click(function () {
    now--
    if (now === -1) {
      now = $aLiSmall.length - 1
    }
    tab()
  })

  $oBtnNext.click(btnNextClick)


  function btnNextClick() {
    now++
    if (now === $aLiSmall.length) {
      now = 0
    }
    tab()
  }

  console.log($oBtnNext.click)
  let timer = setInterval(btnNextClick, 2000)


  $oDivBig.on('mouseenter', function () {
    $oDivBig.on('mousemove', function (e) {
      if (e.pageX - $oDivBig.offset().left < 200) {
        $oBtnPrev.show()
        $oBtnNext.hide()
      } else {
        $oBtnNext.show()
        $oBtnPrev.hide()
      }
    })
  }).mouseleave(function () {
    $oBtnPrev.hide()
    $oBtnNext.hide()
  })


  $oDiv.mouseenter(function () {
    clearInterval(timer);
  }).mouseleave(function () {
    timer = setInterval(btnNextClick, 2000);
  })


  for (let i = 0; i < $aLiSmall.length; i++) {
    $($aLiSmall[i]).data('index', i).click(function () {
      if ($($aLiSmall[i]).data('index') === now) {
        return
      }

      now = $($aLiSmall[i]).data('index')
      tab()
    })
  }


  function tab() {
    $aLiBig.each(function (index, element) {
      if (index === now) {
        $(element).css('z-index', 1)
      } else {
        $(element).css('z-index', 0)
      }
    })
    $aLiSmall.each(function (index, element) {
      if (index === now) {
        $(element).animate({opacity: 1})
      } else {
        $(element).animate({opacity: 0.6})
      }
    })

    $($aLiBig[now]).css('height', 0).animate({height: '320px'})

    if (now === 0) {
      $oUlSmall.animate({'left': 0})
    } else if (now === $aLiSmall.length - 1) {
      //最后一张图片时 $aLiSmall不需要移动 now - 2跟原来值一样
      $oUlSmall.animate({'left': -(now - 2) * $aLiSmall[0].offsetWidth})
    } else {
      $oUlSmall.animate({'left': -(now - 1) * $aLiSmall[0].offsetWidth})
    }
  }
})