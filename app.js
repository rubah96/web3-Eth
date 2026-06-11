// Variabel Global untuk menyimpan data koneksi dompet EVM
let provider;
let signer;
let userAddress = "";

// 1. Fungsi untuk Menghubungkan Dompet EVM (Ethereum, Base, BNB Chain, dll)
async function hubungkanDompet() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Menginisialisasi Ethers.js dengan provider dompet yang aktif
            provider = new ethers.providers.Web3Provider(window.ethereum);
            
            // Meminta izin akses alamat dompet pengguna
            const accounts = await provider.send("eth_requestAccounts", []);
            signer = provider.getSigner();
            userAddress = accounts[0];
            
            // Memperbarui tampilan status di HTML
            document.getElementById("walletStatus").innerText = "Terhubung EVM: " + userAddress;
            document.getElementById("walletStatus").style.borderColor = "#28a745";
            console.log("Dompet EVM sukses terhubung. Alamat:", userAddress);
            
        } catch (error) {
            console.error("User menolak koneksi:", error);
            alert("Koneksi dompet dibatalkan.");
        }
    } else {
        alert("Dompet Web3 tidak terdeteksi! Silakan buka situs ini dari dalam DApp Browser dompet Anda.");
    }
}

// 2. FUNGSI UTAMA JALUR PUTIH: REVOKE BANYAK ALAM