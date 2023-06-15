<template>
<div class="relative bg-[#eef3fb] overflow-hidden h-screen">
  <header class="fixed right-0 top-0 left-60 bg-appBlue py-3 px-4 h-16">
    <div class="">
      <div class="flex items-center justify-between">
        <div>
          <button type="button" class="flex items-center focus:outline-none rounded-lg text-gray-600 font-semibold p-2 border border-transparent transition">
            <span class="inline-flex items-center justify-center w-6 h-6 text-gray-600 text-xs rounded bg-white transition mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
              </svg>
            </span>
            <span class="text-sm">Archive</span>
          </button>
        </div>
        <div class="text-lg font-bold text-white">Today's Plan</div>
        <div>
          <button type="button" class="bg-[#FEF9C3] flex items-center focus:outline-none rounded-lg text-gray-600 font-semibold py-1 px-3 border border-transparent hover:border-yellow-300 focus:border-yellow-300 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentcolor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>

            <span class="text-sm inline-block pl-1 ">Back</span>
          </button>
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
    <div class="px-6 py-8">
      <div class="">
        <div class="bg-white rounded-3xl p-4 mb-5">
<!-- component -->
<div class="table w-full p-2">
        <table class="w-full border">
            <thead>
                <tr class="bg-gray-50 border-b">
                    <th class="border-r p-2">
                        <input type="checkbox">
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            ID
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Name
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Email
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Address
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
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
                <tr class="bg-gray-50 text-center">
                    <td class="p-2 border-r">
                        
                    </td>
                    <td class="p-2 border-r">
                        <input type="text" class="border p-1">
                    </td>
                    <td class="p-2 border-r">
                        <input type="text" class="border p-1">
                    </td>
                    <td class="p-2 border-r">
                        <input type="text" class="border p-1">
                    </td>
                    <td class="p-2 border-r">
                        <input type="text" class="border p-1">
                    </td>
                    <td class="p-2">
                        <input type="text" class="border p-1">
                    </td>
                    
                    
                </tr>
                <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                    <td class="p-2 border-r">
                        <input type="checkbox">
                    </td>
                    <td class="p-2 border-r">1</td>
                    <td class="p-2 border-r">John Doe</td>
                    <td class="p-2 border-r">john@gmail.com</td>
                    <td class="p-2 border-r">Sydney, Australia</td>
                    <td>
                        <a href="#" class="bg-lightPurple text-white py-[5px] px-2 hover:shadow-lg text-xs">Edit</a>
                        <a href="#" class="bg-appTeal py-[5px] px-2 hover:shadow-lg text-xs text-white">Remove</a>
                    </td>
                </tr>
                <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                    <td class="p-2 border-r">
                        <input type="checkbox">
                    </td>
                    <td class="p-2 border-r">2</td>
                    <td class="p-2 border-r">Adam Smith</td>
                    <td class="p-2 border-r">adam@gmail.com</td>
                    <td class="p-2 border-r">Sydney, Australia</td>
                    <td>
                        <a href="#" class="bg-lightPurple text-white py-[5px] px-2 hover:shadow-lg text-xs">Edit</a>
                        <a href="#" class="bg-appTeal py-[5px] px-2 hover:shadow-lg text-xs text-white">Remove</a>
                    </td>
                </tr>
                <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                    <td class="p-2 border-r">
                        <input type="checkbox">
                    </td>
                    <td class="p-2 border-r">3</td>
                    <td class="p-2 border-r">Jean Doe</td>
                    <td class="p-2 border-r">jean@gmail.com</td>
                    <td class="p-2 border-r">Sydney, Australia</td>
                    <td>
                        <a href="#" class="bg-lightPurple text-white py-[5px] px-2 hover:shadow-lg text-xs">Edit</a>
                        <a href="#" class="bg-appTeal py-[5px] px-2 hover:shadow-lg text-xs text-white">Remove</a>
                    </td>
                </tr>
                <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                    <td class="p-2 border-r">
                        <input type="checkbox">
                    </td>
                    <td class="p-2 border-r">3</td>
                    <td class="p-2 border-r">Jean Doe</td>
                    <td class="p-2 border-r">jean@gmail.com</td>
                    <td class="p-2 border-r">Sydney, Australia</td>
                    <td>
                        <a href="#" class="bg-lightPurple text-white py-[5px] px-2 hover:shadow-lg text-xs">Edit</a>
                        <a href="#" class="bg-appTeal py-[5px] px-2 hover:shadow-lg text-xs text-white">Remove</a>
                    </td>
                </tr>
                <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                    <td class="p-2 border-r">
                        <input type="checkbox">
                    </td>
                    <td class="p-2 border-r">3</td>
                    <td class="p-2 border-r">Jean Doe</td>
                    <td class="p-2 border-r">jean@gmail.com</td>
                    <td class="p-2 border-r">Sydney, Australia</td>
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
    </div>
  </main>
</div>
</template>

<script setup>

</script>

<style scoped>

</style>