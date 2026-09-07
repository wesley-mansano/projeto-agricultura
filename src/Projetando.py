import pyproj
import matplotlib.pyplot as plt

UTM_SUL = {
    17: 31977,
    18: 31978,
    19: 31979,
    20: 31980,
    21: 31981,
    22: 31982,
    23: 31983,
    24: 31984,
    25: 31985,
}

UTM_NORTE = {
    18: 31972,
    19: 31973,
    20: 31974,
    21: 31975,
    22: 31976,
}

cordenadas = []

UTM = []
Relativas = []

def calcular_zona(longitude: float) -> int:
    """Calcula a zona UTM (1-60) a partir da longitude."""
    return int((longitude + 180) / 6) + 1


def calcular_hemisferio(latitude: float) -> str:
    """Retorna 'sul' ou 'norte' com base no sinal da latitude."""
    return "sul" if latitude < 0 else "norte"


def obter_epsg(latitude: float, longitude: float) -> int:
    """
    Recebe lat/lon (SIRGAS2000, graus decimais) e devolve
    o código EPSG da projeção UTM correta (zona + hemisfério).
    """
    zona = calcular_zona(longitude)
    hemisferio = calcular_hemisferio(latitude)

    if hemisferio == "sul":
        if zona not in UTM_SUL:
            raise ValueError(f"Zona {zona}S fora da tabela (esperado 17-25S).")
        return UTM_SUL[zona]
    else:
        if zona not in UTM_NORTE:
            raise ValueError(f"Zona {zona}N fora da tabela (esperado 18-22N).")
        return UTM_NORTE[zona]

Pontos = int(input("Insira quantos pontos possui a propriedade "))
for i in range(Pontos):
 lat = float(input(f"Ponto {i+1} - latitude: "))
 lon = float(input(f"Ponto {i+1} - longitude: "))
 cordenadas.append((lat, lon))

print(cordenadas)

for lat, lon in cordenadas:
    zona = calcular_zona(lon)
    hemisferio = calcular_hemisferio(lat)
    epsg = obter_epsg(lat, lon)
    print(f"  lat={lat}, lon={lon}")
    print(f"  zona={zona}{hemisferio[0].upper()}  ->  EPSG:{epsg}\n")
    transformer = pyproj.Transformer.from_crs("EPSG:4674", f"EPSG:{epsg}", always_xy=True)
    pontos_utm = [transformer.transform(lon, lat)]
    print("Coordenadas UTM (absolutas):")
    for x, y in pontos_utm:
        print(f"  x = {x:.2f}, y = {y:.2f}")
        print("-----------------------------")
        UTM.append((x, y))

x_ref, y_ref = UTM[0]
pontos_relativos = [(x - x_ref, y - y_ref) for x, y in UTM]

print("\nCoordenadas relativas (após translação):")
for x, y in pontos_relativos:
    print(f"  x = {x:.2f}, y = {y:.2f}")
    Relativas.append((x, y))

fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 6))

# Plot absoluto (UTM cru)
xs_abs = [p[0]/ 1000 for p in UTM] + [UTM[0][0]/ 1000]
ys_abs = [p[1]/ 1000 for p in UTM] + [UTM[0][1]/ 1000]
ax1.plot(xs_abs, ys_abs, marker='o', color='green')
ax1.fill(xs_abs, ys_abs, alpha=0.15, color='green')
ax1.set_title("UTM absoluto (valores brutos)")
ax1.set_xlabel("x (Km)")
ax1.set_ylabel("y (Km)")
ax1.ticklabel_format(useOffset=False, style='plain')
ax1.tick_params(axis='x', rotation=45)
ax1.set_aspect('equal')
ax1.grid(True)

# Plot relativo (após translação)
xs_rel = [p[0] for p in Relativas] + [Relativas[0][0]]
ys_rel = [p[1] for p in Relativas] + [Relativas[0][1]]
ax2.plot(xs_rel, ys_rel, marker='o', color='darkorange')
ax2.fill(xs_rel, ys_rel, alpha=0.15, color='darkorange')
ax2.set_title("Coordenadas relativas (após translação)")
ax2.set_xlabel("x (m)")
ax2.set_ylabel("y (m)")
ax2.set_aspect('equal')
ax2.grid(True)

plt.tight_layout()
plt.savefig("/home/wesley/Documentos/Nova pasta/teste_plot.png", dpi=120)
print("\nGráfico salvo em teste_plot.png")