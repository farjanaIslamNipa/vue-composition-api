<template>
<div class="relative bg-[#eef3fb] overflow-hidden h-screen">
  <header class="fixed right-0 top-0 left-60 bg-white py-3 px-4 h-16">
    <div class="">
      <div class="flex items-center justify-between">
        <div class="flex gap-2">
          <button style="box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;" type="button" class="flex items-center focus:outline-none border border-gray-400 rounded-2xl text-gray-600 font-semibold py-[2px] px-1 transition">
            <div class="border bg-gray-600 rounded-3xl p-[2px]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="white" class="w-3 h-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </div>

            <span class="text-sm inline-block pl-1 pr-1 font-bold">Back to list</span>
          </button>
          <button style="box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;" type="button" class="flex items-center focus:outline-none rounded-lg text-gray-600 font-semibold py-1 px-3 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>

            <span class="text-sm inline-block pl-1 font-bold">Back to list</span>
          </button>
        </div>
        <div class="text-lg font-bold">Today's Plan</div>
        <div class="pr-2">
          <!-- <button type="button" class="bg-appBlue flex items-center focus:outline-none rounded-lg text-white font-semibold py-1 px-3 border border-transparent hover:border-yellow-300 focus:border-yellow-300 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>

            <span class="text-sm inline-block pl-1 ">Back</span>
          </button> -->

        </div>
      </div>
    </div>
  </header>

  <aside class="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60">
    <div class="flex flex-col justify-between h-full">
      <div class="flex-grow">
        <div class="px-4 py-6 text-center border-b">
          <h1 class="text-xl font-bold leading-none"><span class="text-appBlue">Task Manager</span> App</h1>
        </div>
        <div class="p-4">
          <ul class="space-y-1">
            <li>
              <a href="javascript:void(0)" class="flex items-center bg-[#eef3fb] rounded-xl font-medium text-sm text-appBlue py-3 px-4">Company Name</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="flex bg-white hover:bg-yellow-50 rounded-xl font-medium text-sm text-gray-900 py-3 px-4">Task list</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="flex bg-white hover:bg-yellow-50 rounded-xl font-medium text-sm text-gray-900 py-3 px-4">Projects</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="flex bg-white hover:bg-yellow-50 rounded-xl font-medium text-sm text-gray-900 py-3 px-4">Sales Report</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="flex bg-white hover:bg-yellow-50 rounded-xl font-medium text-sm text-gray-900 py-3 px-4">Company Name</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="flex bg-white hover:bg-yellow-50 rounded-xl font-medium text-sm text-gray-900 py-3 px-4">Task list</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="flex bg-white hover:bg-yellow-50 rounded-xl font-medium text-sm text-gray-900 py-3 px-4">Projects</a>
            </li>
            <li>
              <a href="javascript:void(0)" class="flex bg-white hover:bg-yellow-50 rounded-xl font-medium text-sm text-gray-900 py-3 px-4">Tags</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="p-4">
        <button type="button" class="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="" viewBox="0 0 16 16">
            <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
        </button> <span class="font-bold text-sm ml-2">Logout</span>
      </div>
    </div>
  </aside>

  <main class="ml-60 pt-16 max-h-screen overflow-auto">
    <div class="px-6">
      <div class="">
      <div class="flex flex-wrap items-end w-full py-2 text-gray-800">
        <div class="w-[30%] p-3">
          <label for="" class="font-medium inline-block pb-1">From Ghat</label>
          <select name="" id="" class="text-sm block w-full rounded-md py-2 px-2">
            <option value="">Select from ghat</option>
            <option value="">Ghat Two</option>
            <option value="">Ghat Three</option>
            <option value="">Ghat Four</option>
          </select>
        </div>
        <div class="w-[30%] p-3">
          <label for="" class="font-medium inline-block pb-1">To Ghat</label>
          <select name="" id="" class="text-sm block w-full rounded-md py-2 px-2">
            <option value="">Select to ghat</option>
            <option value="">Ghat Two</option>
            <option value="">Ghat Three</option>
            <option value="">Ghat Four</option>
          </select>
        </div>
        <div class="w-[30%]  p-3">
          <label for="" class="font-medium inline-block pb-1">Direction</label>
          <select name="" id="" class="text-sm block w-full rounded-md py-2 px-2">
            <option value="">Select direction</option>
            <option value="">Ghat Two</option>
            <option value="">Ghat Three</option>
            <option value="">Ghat Four</option>
          </select>
        </div>
        <div class="w-[10%] p-3 flex justify-center items-center">
          <button type="button" class="bg-blue-400 flex gap-1 items-center focus:outline-none rounded-lg text-white font-semibold py-2 px-4 border border-transparent transition">
            <span class="text-sm inline-block pl-1 ">Search</span>
            <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
</div>
          </button>
        </div>
      </div>
        <div class="bg-white rounded-3xl p-3 mb-5">
<!-- component -->
<div class="table w-full p-2">
  <div class="flex gap-2">
    <button class="text-sm inline-block rounded-md text-purple-800 font-semibold bg-purple-100 min-w-[95px] py-1">Create plan</button>
    <button class="text-sm inline-block rounded-md text-green-800 font-semibold bg-[#DCFCE7] min-w-[95px] py-1">Create Fare</button>
    <button class="text-sm inline-block rounded-md text-yellow-800 font-semibold bg-[#FEF9C3] min-w-[95px] py-1">Create Fare</button>
  </div>
        <table class="w-full border">
            <thead>
                <tr class="bg-gray-50 border-b">
                    <th class="p-2 border-r cursor-pointer text-sm text-gray-700">
                        <div class="flex items-center justify-center">
                            ID
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm text-gray-700">
                        <div class="flex items-center justify-center">
                            Name
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm text-gray-700">
                        <div class="flex items-center justify-center">
                            Email
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm text-gray-700">
                        <div class="flex items-center justify-center">
                            Address
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm text-gray-700">
                        <div class="flex items-center justify-center">
                            Status
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm text-gray-700">
                        <div class="flex items-center justify-center">
                            Action
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                    <td class="p-2 border-r">1</td>
                    <td class="p-2 border-r">John Doe</td>
                    <td class="p-2 border-r">john@gmail.com</td>
                    <td class="p-2 border-r">Sydney, Australia</td>
                    <td class="p-2 border-r text-center">
                      <span class="text-sm inline-block rounded-full text-green-800 font-semibold bg-green-200 min-w-[90px] px-3">Active</span>
                    </td>
                    <td>
                        <div class="flex gap-1 items-center justify-center">
                          <a href="#" class="bg-lightPurple text-white py-[5px] px-3 hover:shadow-lg text-xs rounded-md">Edit</a>
                          <a href="#" class="bg-appTeal py-[5px] px-2 hover:shadow-lg text-xs text-white rounded-md">Remove</a>
                        </div>
                    </td>
                </tr>
                <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                    <td class="p-2 border-r">2</td>
                    <td class="p-2 border-r">Adam Smith</td>
                    <td class="p-2 border-r">adam@gmail.com</td>
                    <td class="p-2 border-r">Sydney, Australia</td>
                    <td class="p-2 border-r text-center">
                      <span class="text-sm inline-block rounded-full text-red-800 font-semibold bg-red-100 min-w-[90px] px-3">Inactive</span>
                    </td>
                    <td>
                        <a href="#" class="bg-lightPurple text-white py-[5px] px-2 hover:shadow-lg text-xs">Edit</a>
                        <a href="#" class="bg-appTeal py-[5px] px-2 hover:shadow-lg text-xs text-white">Remove</a>
                    </td>
                </tr>
                <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                    <td class="p-2 border-r">3</td>
                    <td class="p-2 border-r">Jean Doe</td>
                    <td class="p-2 border-r">jean@gmail.com</td>
                    <td class="p-2 border-r">Sydney, Australia</td>
                    <td class="p-2 border-r text-center">
                      <span class="text-sm inline-block rounded-full text-yellow-700 font-semibold bg-appYellow min-w-[90px] px-3">Pending</span>
                    </td>
                    <td>
                        <a href="#" class="bg-lightPurple text-white py-[5px] px-2 hover:shadow-lg text-xs">Edit</a>
                        <a href="#" class="bg-appTeal py-[5px] px-2 hover:shadow-lg text-xs text-white">Remove</a>
                    </td>
                </tr>
                <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                    <td class="p-2 border-r">3</td>
                    <td class="p-2 border-r">Jean Doe</td>
                    <td class="p-2 border-r">jean@gmail.com</td>
                    <td class="p-2 border-r">Sydney, Australia</td>
                    <td class="p-2 border-r text-center">
                      <span class="text-sm inline-block rounded-full text-purple-800 font-semibold bg-purple-100 min-w-[90px] px-3">Processing</span>
                    </td>
                    <td>
                        <a href="#" class="bg-lightPurple text-white py-[5px] px-2 hover:shadow-lg text-xs">Edit</a>
                        <a href="#" class="bg-appTeal py-[5px] px-2 hover:shadow-lg text-xs text-white">Remove</a>
                    </td>
                </tr>
                <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                    <td class="p-2 border-r">3</td>
                    <td class="p-2 border-r">Jean Doe</td>
                    <td class="p-2 border-r">jean@gmail.com</td>
                    <td class="p-2 border-r">Sydney, Australia</td>
                    <td class="p-2 border-r text-center">
                      <span class="text-sm inline-block rounded-full text-red-800 font-semibold bg-red-100 min-w-[90px] px-3">Inactive</span>
                    </td>
                    <td>
                        <a href="#" class="bg-lightPurple text-white py-[5px] px-2 hover:shadow-lg text-xs">Edit</a>
                        <a href="#" class="bg-appTeal py-[5px] px-2 hover:shadow-lg text-xs text-white">Remove</a>
                    </td>
                </tr>
            </tbody>
        </table>
          </div>
        </div>
      </div>

      <!-- -------------------------------------------------------------- -->

      <div class="my-6 bg-white p-3 rounded-xl rounded-b-none flex justify-between items-center">
        <h3 class="uppercase text-base font-medium">company information</h3>
        <div>
          <button style="box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;" type="button" class="bg-blue-50 flex items-center focus:outline-none rounded-lg text-gray-600 font-semibold py-1 px-3 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span class="text-sm inline-block pl-1 font-bold">Back</span>
          </button>
        </div>
      </div>
      <!-- <div class="slider">
        <div class="slider-row"></div>
      </div> -->
    </div>
  </main>
</div>
</template>

<script setup>

</script>

<style scoped>
.slider {
  position: absolute;
  width: 100%;
  overflow: hidden;
}

.slider-row {
    height: 400px;
    background-repeat: no-repeat;
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/111863/ubiquity-summit-web-01.png);
    animation: slide 25s linear infinite;
  }

@keyframes slide {
  from { background-position-x: 0; }
  to   { background-position-x: -3300px; }
}

</style>