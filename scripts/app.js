var U16App = angular.module("U16App",["ngMaterial"]);

U16App.controller('AppCtrl', function($scope) {
	$scope.facial = [
	    { itemName: 'Basic clean up', itemCode: 'F1', itemPrice : 250 },
	    { itemName: 'Herbal Fruit', itemCode: 'F2', itemPrice : 400 },
	    { itemName: 'VLCC Fruit', itemCode: 'F3', itemPrice : 500 },
	    { itemName: 'VLCC Pearl', itemCode: 'F4', itemPrice : 650 },
	    { itemName: 'Oxy Life', itemCode: 'F5', itemPrice : 1000 },
		{ itemName: 'Natures Gold', itemCode: 'F6', itemPrice : 1050 },
		{ itemName: 'Lotus Gold', itemCode: 'F7', itemPrice : 1250 },
		{ itemName: 'O3+', itemCode: 'F8', itemPrice : 1500 }
	  ];
	$scope.faceTreatment = [
	    { itemName: 'Anti Tan', itemCode: 'FT1', itemPrice : 600 },
	    { itemName: 'Skin Tightening', itemCode: 'FT2', itemPrice : 800 },
	    { itemName: 'Anti Acne', itemCode: 'FT3', itemPrice : 850 },
	    { itemName: 'Anti Aging ', itemCode: 'FT4', itemPrice : 1200 }
	];
	$scope.threading = [
	    { itemName: 'Chin', itemCode: 'T1', itemPrice : 25 },
	    { itemName: 'ForeHead', itemCode: 'T2', itemPrice : 25 },
	    { itemName: 'Lower Lip', itemCode: 'T3', itemPrice : 25 },
	    { itemName: 'Upper Lip', itemCode: 'T4', itemPrice : 30 },
	    { itemName: 'Eyebrow', itemCode: 'T5', itemPrice : 40 },
	    { itemName: 'Jaw Line', itemCode: 'T6', itemPrice : 60 },
	    { itemName: 'Neck', itemCode: 'T7', itemPrice : 60 },
	    { itemName: 'Side Locks ', itemCode: 'T8', itemPrice : 60 },
	    { itemName: 'Full Face ', itemCode: 'T9', itemPrice : 150 }
	];
	$scope.faceBleach = [
	    { itemName: 'Oxylife', itemCode: 'FB1', itemPrice : 250 },
	    { itemName: 'VLCC Gold', itemCode: 'FB2', itemPrice : 350 },
	    { itemName: 'Anti Tan', itemCode: 'FB3', itemPrice : 350 },
	    { itemName: 'Natures Gold ', itemCode: 'FB4', itemPrice : 400 }
	  ];
	$scope.hairTreatment = [
       { itemName: 'Intense Smoothening Treatment E', itemCode: 'HT1E', itemPrice : 1000 },
       { itemName: 'Anti Hair Loss E', itemCode: 'HT2E', itemPrice : 1000 },
       { itemName: 'Radiant Color Treatment E', itemCode: 'HT3E', itemPrice : 1000 },
	   { itemName: 'Cellular repair treatment E', itemCode: 'HT4E', itemPrice : 1200 },
	   { itemName: 'Anti Dandruff Dose E', itemCode: 'HT5E', itemPrice : 1200 },
       { itemName: 'Intense Smoothening Treatment S', itemCode: 'HT1S', itemPrice : 800 },
       { itemName: 'Anti Hair Loss S', itemCode: 'HT2S', itemPrice : 800 },
       { itemName: 'Radiant Color Treatment S', itemCode: 'HT3S', itemPrice : 800 },
       { itemName: 'Cellular repair treatment S', itemCode: 'HT4S', itemPrice : 1000 },
       { itemName: 'Anti Dandruff Dose S', itemCode: 'HT5S', itemPrice : 1000 },
       { itemName: 'Intense Smoothening Treatment W', itemCode: 'HT1W', itemPrice : 1200 },
       { itemName: 'Anti Hair Loss W', itemCode: 'HT2W', itemPrice : 1200 },
       { itemName: 'Radiant Color Treatment W', itemCode: 'HT3W', itemPrice : 1200 },
       { itemName: 'Cellular repair treatment W', itemCode: 'HT4W', itemPrice : 1400 },
       { itemName: 'Anti Dandruff Dose W', itemCode: 'HT5W', itemPrice : 1400 }
    ];
	$scope.hairSpa = [
	   { itemName: 'Normal', itemCode: 'HS1', itemPrice : 400 },
	   { itemName: 'Matix', itemCode: 'HS2', itemPrice : 600 },
	   { itemName: 'Loreal', itemCode: 'HS3', itemPrice : 800 }
	];
    $scope.hairCut = [
       { itemName: 'Normal', itemCode: 'H1', itemPrice : 300 },
	   { itemName: 'Advanced', itemCode: 'H2', itemPrice : 500 }
    ];
        $scope.hairStyling = [
	              { itemName: 'BlowDry Straight Finish E', itemCode: 'HSY1E', itemPrice : 300 },
	                   { itemName: 'BlowDry with Curls E', itemCode: 'HSY2E', itemPrice : 300 },
	              { itemName: 'Hair Ironing E', itemCode: 'HSY3E', itemPrice : 450 },
	              { itemName: 'BlowDry Straight Finish S', itemCode: 'HSY1S', itemPrice : 200 },
	                     { itemName: 'BlowDry with Curls S', itemCode: 'HSY2S', itemPrice : 200 },
	        { itemName: 'Hair Ironing S', itemCode: 'HSY3S', itemPrice : 300 },
	        { itemName: 'BlowDry Straight Finish W', itemCode: 'HSY1W', itemPrice : 350 },
	        { itemName: 'BlowDry with Curls W', itemCode: 'HSY2W', itemPrice : 350 },
	        { itemName: 'Hair Ironing W', itemCode: 'HSY3W', itemPrice : 600 },
	        { itemName: 'Permanent Smoothing(Matrix) E', itemCode: 'HSY4E', itemPrice : 3000 },
	        { itemName: 'Permanent Smoothing(Loreal) E', itemCode: 'HSY5E', itemPrice : 5000 },
	        { itemName: 'Permanent Straightening(Matrix) E', itemCode: 'HSY6E', itemPrice : 4000 },
	        { itemName: 'Permanent Straightening(Loreal) E', itemCode: 'HSY7E', itemPrice : 5000 },
	        { itemName: 'Permanent Rebonding(Matrix) E', itemCode: 'HSY8E', itemPrice : 4000 },
	        { itemName: 'Permanent Rebonding(Loreal) E', itemCode: 'HSY9E', itemPrice : 5000 },
	        { itemName: 'Permanent Smoothing(Matrix) S', itemCode: 'HSY4S', itemPrice : 2500 },
	        { itemName: 'Permanent Smoothing(Loreal) S', itemCode: 'HSY5S', itemPrice : 4000 },
	        { itemName: 'Permanent Straightening(Matrix) S', itemCode: 'HSY6S', itemPrice : 3000 },
	        { itemName: 'Permanent Straightening(Loreal) S', itemCode: 'HSY7S', itemPrice : 4000 },
	        { itemName: 'Permanent Rebonding(Matrix) S', itemCode: 'HSY8S', itemPrice : 3000 },
	        { itemName: 'Permanent Rebonding(Loreal) S', itemCode: 'HSY9S', itemPrice : 4000 },
	        { itemName: 'Permanent Smoothing(Matrix) W', itemCode: 'HSY4W', itemPrice : 5000 },
	        { itemName: 'Permanent Smoothing(Loreal) W', itemCode: 'HSY5W', itemPrice : 6500 },
	        { itemName: 'Permanent Straightening(Matrix) W', itemCode: 'HSY6W', itemPrice : 5500 },
	        { itemName: 'Permanent Straightening(Loreal) W', itemCode: 'HSY7W', itemPrice : 6000 },
	        { itemName: 'Permanent Rebonding(Matrix) W', itemCode: 'HSY8W', itemPrice : 6000 },
	        { itemName: 'Permanent Rebonding(Loreal) W', itemCode: 'HSY9W', itemPrice : 6500 }
	         
	         ];
        $scope.hairColoring = [
           { itemName: 'Root Touch up (Mejirel)', itemCode: 'HC1', itemPrice : 700 },
           { itemName: 'Highlight each foil (Mejirel)', itemCode: 'HC2', itemPrice : 250 },
           { itemName: 'Global (Mejirel) (Shoulder)', itemCode: 'HC3S', itemPrice : 1500 },
           { itemName: 'Global (Mejirel) (Elbow)', itemCode: 'HC3E', itemPrice : 1800 },
          { itemName: 'Global (Mejirel) (Waist)', itemCode: 'HC3W', itemPrice : 2200 },
         { itemName: 'Root Touch up (INOA)', itemCode: 'HC4', itemPrice : 1000 },
         { itemName: 'Highlight each foil (INOA)', itemCode: 'HC5', itemPrice : 300 },
         { itemName: 'Global (INOA) (Shoulder)', itemCode: 'HC6E', itemPrice : 2200 },
         { itemName: 'Global (INOA) (Elbow)', itemCode: 'HC6S', itemPrice : 2500 },
         { itemName: 'Global (INOA) (Waist)', itemCode: 'HC6W', itemPrice : 2800 }
     ];

        $scope.bodyBleach = [
           { itemName: 'Half Arms', itemCode: 'BB1', itemPrice : 250 },
            { itemName: 'Half Legs', itemCode: 'BB2', itemPrice : 250 },
           { itemName: 'Full Arms', itemCode: 'BB3', itemPrice : 400 },
           { itemName: 'Full Legs', itemCode: 'BB4', itemPrice : 450 },
          { itemName: 'Back', itemCode: 'BB5', itemPrice : 350 },
	     { itemName: 'Front', itemCode: 'BB6', itemPrice : 350 },
	     { itemName: 'Full Body', itemCode: 'BB7', itemPrice : 1600 }
     ];

    $scope.bodyPolishing = [
           { itemName: 'Full back', itemCode: 'BP1', itemPrice : 500 },
                { itemName: 'Full hands', itemCode: 'BP2', itemPrice : 500 },
           { itemName: 'Full Legs', itemCode: 'BP3', itemPrice : 650 },
           { itemName: 'Full Body', itemCode: 'BP4', itemPrice : 1300 },
                  
     ];

    $scope.waxing = [
               { itemName: 'Upper Lip', itemCode: 'W1N', itemPrice : 30 },
                    { itemName: 'Chin', itemCode: 'W2N', itemPrice : 40 },
               { itemName: 'Side locks', itemCode: 'W3N', itemPrice : 50 },
               { itemName: 'Under Arms', itemCode: 'W4N', itemPrice : 50 },
                      { itemName: 'Bikini Line', itemCode: 'W5N', itemPrice : 110 },
         { itemName: 'Half Arms', itemCode: 'W6N', itemPrice : 130 },
         { itemName: 'Face', itemCode: 'W7N', itemPrice : 150 },
         { itemName: 'Full Arms', itemCode: 'W8N', itemPrice : 150 },
         { itemName: 'Half Legs', itemCode: 'W9N', itemPrice : 160 },
         { itemName: 'Half Front', itemCode: 'W10N', itemPrice : 180 },
         { itemName: 'Full Legs', itemCode: 'W11N', itemPrice : 250 },
         { itemName: 'Midriff', itemCode: 'W12N', itemPrice : 270 },
         { itemName: 'Buttock', itemCode: 'W13N', itemPrice : 290 },
         { itemName: 'Full Back', itemCode: 'W14N', itemPrice : 340 },
         { itemName: 'Full Front', itemCode: 'W15N', itemPrice : 340 },
         { itemName: 'Full Bikini', itemCode: 'W16N', itemPrice : 700 },
         { itemName: 'Full Body(Exl. Bikini)', itemCode: 'W17N', itemPrice : 1300 },
         { itemName: 'Upper Lip R', itemCode: 'W1R', itemPrice : 60 },
        { itemName: 'Chin R', itemCode: 'W2R', itemPrice : 60 },
       { itemName: 'Side locks R', itemCode: 'W3R', itemPrice : 80 },
       { itemName: 'Under Arms R', itemCode: 'W4R', itemPrice : 80 },
      { itemName: 'Bikini Line R', itemCode: 'W5R', itemPrice : 170 },
         { itemName: 'Half Arms R', itemCode: 'W6R', itemPrice : 180 },
         { itemName: 'Face R', itemCode: 'W7R', itemPrice : 200 },
         { itemName: 'Full Arms R', itemCode: 'W8R', itemPrice : 250 },
         { itemName: 'Half Legs R', itemCode: 'W9R', itemPrice : 220 },
         { itemName: 'Half Front R', itemCode: 'W10R', itemPrice : 250 },
         { itemName: 'Full Legs R', itemCode: 'W11R', itemPrice : 350 },
         { itemName: 'Midriff R', itemCode: 'W12R', itemPrice : 320 },
         { itemName: 'Buttock R', itemCode: 'W13R', itemPrice : 390 },
         { itemName: 'Full Back R', itemCode: 'W14R', itemPrice : 450 },
         { itemName: 'Full Front R', itemCode: 'W15R', itemPrice : 450 },
         { itemName: 'Full Bikini R', itemCode: 'W16R', itemPrice : 1000 },
         { itemName: 'Full Body(Exl. Bikini) R', itemCode: 'W17R', itemPrice : 1500 }
         ];

    $scope.massage = [
	    { itemName: 'Back N Shoulder', itemCode: 'MAS1', itemPrice : 300 },
	    { itemName: 'Foot', itemCode: 'MAS2', itemPrice : 300 },
	    { itemName: 'Foot Reflexology', itemCode: 'MAS3', itemPrice : 450 },
	    { itemName: 'Hand', itemCode: 'MAS4', itemPrice : 200 },
	    { itemName: 'Hand Reflexology', itemCode: 'MAS5', itemPrice : 350 },
		{ itemName: 'Head', itemCode: 'MAS6', itemPrice : 200 },
		{ itemName: 'Full Body', itemCode: 'MAS7', itemPrice : 1000 },
    ];

    $scope.manicure = [
       { itemName: 'Cut File Polish French', itemCode: 'M1', itemPrice : 100 },
       { itemName: 'Normal(Natures)', itemCode: 'M2', itemPrice : 200 },
       { itemName: 'VLCC', itemCode: 'M3', itemPrice : 400 },
       { itemName: 'Lotus', itemCode: 'M4', itemPrice : 450 },
       { itemName: 'O3+', itemCode: 'M5', itemPrice : 700 }
     ];

    $scope.pedicure = [
	   { itemName: 'Cut File Polish French', itemCode: 'P1', itemPrice : 100 },
	   { itemName: 'Normal(Natures)', itemCode: 'P2', itemPrice : 250 },
	   { itemName: 'VLCC', itemCode: 'P3', itemPrice : 600 },
	   { itemName: 'Lotus', itemCode: 'P4', itemPrice : 650 },
	   { itemName: 'O3+', itemCode: 'P5', itemPrice : 900 }
	];

    $scope.makeUp = [
       { itemName: 'Party Makeup', itemCode: 'MU1', itemPrice : 800 },
       { itemName: 'Engagement Makeup', itemCode: 'MU2', itemPrice : 1500 },
       { itemName: 'Bridal Makeup', itemCode: 'MU3', itemPrice : 4500 }
    ];
    
    $scope.combo = [
	    { itemName: 'Head to Toe', itemCode: 'COMBO-1', itemPrice : 1350 },
	    { itemName: 'Small-1', itemCode: 'COMBO-2', itemPrice : 800 },
	    { itemName: 'Small-2', itemCode: 'COMBO-3', itemPrice : 2200 },
	    { itemName: 'Premium', itemCode: 'COMBO-4', itemPrice : 7000 }
    ];

})
	.config(['$mdIconProvider', function($mdIconProvider) {
		$mdIconProvider
		.iconSet('social', 'https://material.angularjs.org/0.11.4/img/icons/sets/social-icons.svg', 24)
		.defaultIconSet('https://material.angularjs.org/0.11.4/img/icons/sets/core-icons.svg', 24);
}]);