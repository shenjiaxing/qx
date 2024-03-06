
if ($response && $response.body) {
    // Your code that manipulates $response.body
    let obj = JSON.parse($response.body);
	obj['success'] = true;

	$done({body: JSON.stringify(obj)});
} else {
    console.log("【e】No response or response body found");
}


