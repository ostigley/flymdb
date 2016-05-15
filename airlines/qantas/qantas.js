// this content is from: http://www.qantas.com/travel/airlines/inflight-entertainment/global/en
document.getElementById("InflightEntertainmentPortletperiodId").value="May"

document.getElementById("InflightEntertainmentPortletdepartureCity").value="London"

document.getElementById("InflightEntertainmentPortletarrivalCity").value="Dubai"

document.getElementById("InflightEntertainmentPortlettravelClass").value="All Travel Classes"

getMovies()


<form name="viewMoviesForm" method="post" action="/travel/plan_remote.portal?_nfpb=true&amp;_windowLabel=InflightEntertainmentPortlet&amp;wsrp-urlType=blockingAction&amp;wsrp-url=&amp;wsrp-requiresRewrite=false&amp;wsrp-navigationalValues=&amp;wsrp-navigationalState=&amp;wsrp-interactionState=_module%3D%252Fstruts%252Finflightentertainment%26_action%3D%252Fstruts%252Finflightentertainment%252Fentertainment&amp;wsrp-mode=&amp;wsrp-windowState=&amp;">
		<input name="_urlPath_" type="hidden" value="/airlines/inflight-entertainment/global/en">
		<input name="_pageLabel" type="hidden" value="InflightEntertainmentPage">

		<input type="hidden" name="InflightEntertainmentPortletdispatch" value="getMoviesForRouteByPage">
		<input type="hidden" name="InflightEntertainmentPortletpageNumber" value="1">
	
		<h2 class="first"><span>Flight Details</span></h2>
		<fieldset>
			<div class="control clearit">
				<label for="">Month:</label>
					<select name="InflightEntertainmentPortletperiodId" onchange="selectMonthChangeHandler(this)" id="InflightEntertainmentPortletperiodId" title="Month"><option value="">Select a Month</option>
					<option value="">--------------------------------</option><option value="2081">May</option><option value="2101">June</option></select>
			</div>
			<div class="control clearit">
				<label for="">From:</label>
				<select name="InflightEntertainmentPortletdepartureCity" onchange="selectDepCityChangeHandler(this)" id="InflightEntertainmentPortletdepartureCity" title="From"><option value="">Select a City</option>
					<option value="">--------------------------------</option></select>
			</div>
			<div class="control clearit">
				<label for="">To:</label>
				<select name="InflightEntertainmentPortletarrivalCity" onchange="selectArrCityChangeHandler(this)" id="InflightEntertainmentPortletarrivalCity" title="To"><option value="">Select a City</option>
					<option value="">--------------------------------</option></select>
			</div>
			<div class="control clearit">
				<label for="">Travel Class:</label>
				<select name="InflightEntertainmentPortlettravelClass" id="InflightEntertainmentPortlettravelClass"><option value="">Select a Travel Class</option>
					<option value="">--------------------------------</option></select>
			</div>
			
			<button class="submit" title="Go" onclick="getMovies(); return false;">Go</button>
		</fieldset>
	</form>

	table object output:
	{ 
		_urlPath_: 									'/airlines/inflight-entertainment/global/en',
		_pageLabel: 								'InflightEntertainmentPage', //standard text 
		InflightEntertainmentPortletdispatch: 		'getMoviesForRouteByPage', //Function? nope
 		InflightEntertainmentPortletpageNumber: 	1,
		InflightEntertainmentPortletperiodId: 		'June',
		InflightEntertainmentPortletdepartureCity: 	'London',
		InflightEntertainmentPortletarrivalCity: 	'Dubai',
		InflightEntertainmentPortlettravelClass: 	'All Travel Classes'

	}

	http://www.qantas.com/travel/plan_remote.portal?_nfpb=true&_windowLabel=InflightEntertainmentPortlet&wsrp-urlType=blockingAction&wsrp-url=&wsrp-requiresRewrite=false&wsrp-navigationalValues=&wsrp-navigationalState=&wsrp-interactionState=_module%3D%252Fstruts%252Finflightentertainment%26_action%3D%252Fstruts%252Finflightentertainment%252Fentertainment&wsrp-mode=&wsrp-windowState=&



_urlPath_:/airlines/inflight-entertainment/global/en
_pageLabel:InflightEntertainmentPage
InflightEntertainmentPortletdispatch:getMoviesForRouteByPage
InflightEntertainmentPortletpageNumber:1
InflightEntertainmentPortletperiodId:'June
InflightEntertainmentPortletdepartureCity:London
InflightEntertainmentPortletarrivalCity:Dubai
InflightEntertainmentPortlettravelClass:All Travel Classes
